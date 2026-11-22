import { useId, useState } from 'react';
import {
  Archive,
  Building2,
  Check,
  ChevronDown,
  Home,
  Leaf,
  MessageSquare,
  Package,
  Phone,
  Wrench,
  X,
} from 'lucide-react';
import { QuoteActions } from './QuoteActions';
import {
  BALLPARK_NOTE,
  DISCOUNT_NOTE,
  HEAVY_MATERIAL_NOTE,
  PHONE_DISPLAY,
  PHONE_SMS_HREF,
  PHONE_TEL_HREF,
} from '../lib/contact';

/**
 * PRICING CONFIG
 * Tanner: change prices here. The calculator reads this block and the
 * town drive table under it. Nothing in this file calls a routing or
 * price API when a customer uses the page.
 */

/**
 * OREGON DIESEL PRICE — dollars per gallon. Update this when you want
 * the calculator to follow the pump price.
 * AAA Oregon statewide average: $6.3907.
 * Price as of November 21, 2026. Recorded November 22, 2026.
 * Source: AAA Fuel Prices, State Gas Price Averages
 * https://gasprices.aaa.com/state-gas-price-averages/
 */
const OREGON_DIESEL_PRICE_PER_GALLON = 6.3907;

const TRUCK_MPG = 16;
const VEHICLE_WEAR_PER_MILE = 0.15;
/** Kept from the previous calculator. */
const DRIVE_TIME_COST_PER_MINUTE = 0.45;
const LABOR_RATE_PER_HOUR = 55;
const WORKERS = 2;
const PROFIT_MARGIN = 0.3;
const MINIMUM_PRICE = 150;
/** Shown range is this far under and over the working total, then rounded. */
const RANGE_SPREAD = 0.1;
const ROUND_TO_DOLLARS = 5;

/**
 * 7 ft wide × 14 ft long × 4 ft sides.
 * 7 × 14 × 4 = 392 cubic feet. 392 / 27 = 14.5185... cubic yards,
 * shown on the buttons as about 14.5 cubic yards for a full load.
 * Fractions use this same box. "More than 1 trailer" is two full loads.
 */
const TRAILER_LENGTH_FT = 14;
const TRAILER_WIDTH_FT = 7;
const TRAILER_SIDE_HEIGHT_FT = 4;
const CUBIC_FEET_PER_YARD = 27;

/**
 * Loose mixed household junk, not packed down and not dirt or concrete.
 * 250 lb per cubic yard is the planning weight. A full trailer is
 * 392 / 27 × 250 = about 3,630 lb (about 1.81 tons). Metro weighs the
 * real load. Change this number to move every dump fee together.
 */
const HOUSEHOLD_JUNK_POUNDS_PER_CUBIC_YARD = 250;

/**
 * Metro South Transfer Station, 2001 Washington St, Oregon City.
 * Public rates read November 22, 2026 from
 * https://www.oregonmetro.gov/waste-disposal-and-prevention/need-get-rid-something/metro-south-transfer-station
 * The same garbage, wood, and yard rates are in Metro's FY 2026-27 flyer,
 * effective July 1, 2026 through June 30, 2027:
 * https://www.oregonmetro.gov/sites/default/files/2026-06/metro-transfer-stations-what-to-know-2026.pdf
 * https://www.oregonmetro.gov/what-metro-does/garbage-and-recycling-system/wpes-budget-and-solid-waste-fee-setting
 *
 * Household junk uses the garbage rate. The minimum covers a load up to
 * 240 lb and does not add the transaction fee. Heavier loads pay the
 * per-ton rate plus the staffed-scale transaction fee ($30). The $8.34
 * automated-scale fee is for commercial accounts, so it is not used here.
 * An uncovered load is an extra $25/ton ($3 on a minimum load). This
 * estimate assumes the trailer is covered.
 */
const METRO_GARBAGE_PER_TON = 176.7;
const METRO_GARBAGE_MINIMUM_FEE = 51;
const METRO_MINIMUM_LOAD_POUNDS = 240;
const METRO_PUBLIC_TRANSACTION_FEE = 30;
const METRO_CLEAN_YARD_DEBRIS_PER_TON = 56;
const METRO_CLEAN_YARD_DEBRIS_MINIMUM_FEE = 37;
const METRO_CLEAN_WOOD_PER_TON = 97.13;
const METRO_CLEAN_WOOD_MINIMUM_FEE = 42;

/**
 * Add-on fees are dollars of cost, added before the margin.
 * null means there is no published fee, so the box does not change the
 * range. The button then says the cost is confirmed on the quote.
 *
 * TVs and electronics: Metro South takes them free as an Oregon E-Cycles
 * site, up to 7 items a day (computers, monitors, TVs, and related items).
 * https://www.oregonmetro.gov/waste-disposal-and-prevention/need-get-rid-something/metro-south-transfer-station
 * There is no published fee for carrying them, so this stays null.
 *
 * Stairs or a long carry: no published rate. Stays null.
 */
const TV_ELECTRONICS_FEE: number | null = null;
const STAIRS_OR_LONG_CARRY_FEE: number | null = null;
const ADD_ON_UNPRICED_NOTE = 'may add cost, confirmed on your quote.';

type LoadId = 'one' | 'few' | 'quarter' | 'half' | 'threeQuarter' | 'full' | 'two';

type LoadSize = {
  id: LoadId;
  label: string;
  /**
   * 1 is one full trailer. 2 is a second full load and a second dump trip.
   * 0 means this choice is priced by `pounds`, not by a share of the trailer.
   */
  trailerFraction: number;
  /**
   * On-site hours for the two-person crew. Drive time is priced separately.
   * One item is 15 minutes. Two or three items are 30 minutes.
   * A full 14.5-yard trailer is 4.5 hours. Two trailers is two full loads: 9 hours.
   */
  laborHours: number;
  dumpTrips: number;
  /**
   * Fixed weight for a single item or a few items.
   * 200 lb is one couch, mattress, or household appliance, under Metro's
   * 240 lb minimum, so the dump fee is the $51 minimum.
   * 450 lb is two or three of those pieces and is billed by the ton plus
   * the $30 transaction fee.
   */
  pounds?: number;
  /** Shown in place of the cubic-yard line. */
  detail?: string;
  hint?: string;
};

const LOAD_SIZES: LoadSize[] = [
  {
    id: 'one',
    label: '1 item',
    trailerFraction: 0,
    pounds: 200,
    laborHours: 0.25,
    dumpTrips: 1,
    detail: 'A couch, mattress, or appliance',
    hint: 'Starts at $150',
  },
  {
    id: 'few',
    label: '2–3 items',
    trailerFraction: 0,
    pounds: 450,
    laborHours: 0.5,
    dumpTrips: 1,
    detail: 'A few pieces, not a trailer load',
  },
  { id: 'quarter', label: '1/4 trailer', trailerFraction: 0.25, laborHours: 1.5, dumpTrips: 1 },
  { id: 'half', label: '1/2 trailer', trailerFraction: 0.5, laborHours: 2.5, dumpTrips: 1 },
  { id: 'threeQuarter', label: '3/4 trailer', trailerFraction: 0.75, laborHours: 3.5, dumpTrips: 1 },
  { id: 'full', label: 'Full trailer', trailerFraction: 1, laborHours: 4.5, dumpTrips: 1 },
  {
    id: 'two',
    label: 'More than 1 trailer',
    trailerFraction: 2,
    laborHours: 9,
    dumpTrips: 2,
    hint: 'Second dump trip',
  },
];

type MaterialType = 'standard' | 'heavy';

type DriveLeg = { miles: number; minutes: number };

/**
 * Driving miles and minutes for Molalla → town → Metro South → Molalla.
 * twoTrailers adds Metro South → town → Metro South before the drive home
 * (a second loaded trip).
 *
 * Precomputed November 22, 2026. No runtime request.
 * Town points and the yard are OpenStreetMap Nominatim centers.
 * The yard is Molalla (45.14734, -122.57703). Metro South is the
 * Nominatim point for 2001 Washington Street, Oregon City
 * (45.36955, -122.59074).
 * Routes are the public OSRM demo, driving profile:
 * https://router.project-osrm.org/route/v1/driving/
 * Miles are rounded to 0.1. Minutes are rounded to the nearest minute.
 * Extra Clackamas and Marion towns were routed the same way on November 22, 2026.
 * Portland is not a town we price.
 */
const TOWN_TRIPS: Record<string, { oneTrailer: DriveLeg; twoTrailers: DriveLeg }> = {
  Molalla: { oneTrailer: { miles: 34.5, minutes: 56 }, twoTrailers: { miles: 69.2, minutes: 112 } },
  Mulino: { oneTrailer: { miles: 34.6, minutes: 56 }, twoTrailers: { miles: 57.9, minutes: 92 } },
  Beavercreek: { oneTrailer: { miles: 36.6, minutes: 60 }, twoTrailers: { miles: 51.7, minutes: 85 } },
  Canby: { oneTrailer: { miles: 41.1, minutes: 68 }, twoTrailers: { miles: 61.3, minutes: 104 } },
  'Oregon City': { oneTrailer: { miles: 35.3, minutes: 61 }, twoTrailers: { miles: 37.9, minutes: 69 } },
  Gladstone: { oneTrailer: { miles: 38.1, minutes: 63 }, twoTrailers: { miles: 42.8, minutes: 76 } },
  Milwaukie: { oneTrailer: { miles: 49.9, minutes: 82 }, twoTrailers: { miles: 64.7, minutes: 112 } },
  Silverton: { oneTrailer: { miles: 63, minutes: 100 }, twoTrailers: { miles: 124, minutes: 195 } },
  'Mt. Angel': { oneTrailer: { miles: 59, minutes: 97 }, twoTrailers: { miles: 116.1, minutes: 189 } },
  Woodburn: { oneTrailer: { miles: 59.4, minutes: 87 }, twoTrailers: { miles: 115.8, minutes: 163 } },
  Hubbard: { oneTrailer: { miles: 54.2, minutes: 82 }, twoTrailers: { miles: 90.8, minutes: 145 } },
  Aurora: { oneTrailer: { miles: 46.1, minutes: 76 }, twoTrailers: { miles: 73.8, minutes: 124 } },
  Salem: { oneTrailer: { miles: 91.7, minutes: 136 }, twoTrailers: { miles: 179.3, minutes: 254 } },
  Keizer: { oneTrailer: { miles: 86.2, minutes: 122 }, twoTrailers: { miles: 166.5, minutes: 224 } },
  Estacada: { oneTrailer: { miles: 55.3, minutes: 86 }, twoTrailers: { miles: 90, minutes: 139 } },
  Sandy: { oneTrailer: { miles: 69.9, minutes: 113 }, twoTrailers: { miles: 110, minutes: 185 } },
  Wilsonville: { oneTrailer: { miles: 53.1, minutes: 80 }, twoTrailers: { miles: 83.6, minutes: 124 } },
  'West Linn': { oneTrailer: { miles: 38.2, minutes: 62 }, twoTrailers: { miles: 42.4, minutes: 72 } },
  'Happy Valley': { oneTrailer: { miles: 51, minutes: 85 }, twoTrailers: { miles: 68.8, minutes: 118 } },
  Tualatin: { oneTrailer: { miles: 56, minutes: 86 }, twoTrailers: { miles: 79.8, minutes: 124 } },
  'Lake Oswego': { oneTrailer: { miles: 48.5, minutes: 88 }, twoTrailers: { miles: 63, minutes: 123 } },
  Newberg: { oneTrailer: { miles: 70.3, minutes: 109 }, twoTrailers: { miles: 118.3, minutes: 188 } },
  Barlow: { oneTrailer: { miles: 44.1, minutes: 72 }, twoTrailers: { miles: 68.1, minutes: 115 } },
  Boring: { oneTrailer: { miles: 61.2, minutes: 103 }, twoTrailers: { miles: 89.2, minutes: 154 } },
  Damascus: { oneTrailer: { miles: 55.3, minutes: 94 }, twoTrailers: { miles: 77.3, minutes: 136 } },
  Clackamas: { oneTrailer: { miles: 45, minutes: 72 }, twoTrailers: { miles: 56.8, minutes: 93 } },
  'Johnson City': { oneTrailer: { miles: 41.8, minutes: 69 }, twoTrailers: { miles: 50.3, minutes: 87 } },
  Colton: { oneTrailer: { miles: 47.5, minutes: 76 }, twoTrailers: { miles: 91, minutes: 144 } },
  Redland: { oneTrailer: { miles: 41.1, minutes: 67 }, twoTrailers: { miles: 53.2, minutes: 88 } },
  Welches: { oneTrailer: { miles: 102.4, minutes: 160 }, twoTrailers: { miles: 176.3, minutes: 280 } },
  Gervais: { oneTrailer: { miles: 65.4, minutes: 95 }, twoTrailers: { miles: 126.4, minutes: 177 } },
  Stayton: { oneTrailer: { miles: 92.8, minutes: 147 }, twoTrailers: { miles: 183.7, minutes: 290 } },
  Sublimity: { oneTrailer: { miles: 88.9, minutes: 140 }, twoTrailers: { miles: 175.9, minutes: 275 } },
  Turner: { oneTrailer: { miles: 102.8, minutes: 144 }, twoTrailers: { miles: 204.7, minutes: 273 } },
  Aumsville: { oneTrailer: { miles: 101.3, minutes: 143 }, twoTrailers: { miles: 207.8, minutes: 277 } },
  Jefferson: { oneTrailer: { miles: 121.1, minutes: 168 }, twoTrailers: { miles: 239.8, minutes: 317 } },
  'Scotts Mills': { oneTrailer: { miles: 54.5, minutes: 87 }, twoTrailers: { miles: 107, minutes: 170 } },
  Monitor: { oneTrailer: { miles: 52.9, minutes: 85 }, twoTrailers: { miles: 99.4, minutes: 159 } },
  'St. Paul': { oneTrailer: { miles: 70.9, minutes: 104 }, twoTrailers: { miles: 130.6, minutes: 181 } },
  Donald: { oneTrailer: { miles: 58.7, minutes: 87 }, twoTrailers: { miles: 103, minutes: 146 } },
};

/** Counties are where the community sits. Wilsonville and Lake Oswego are listed with Clackamas. */
const TOWN_GROUPS: { county: string; towns: string[] }[] = [
  {
    county: 'Clackamas County',
    towns: [
      'Barlow',
      'Beavercreek',
      'Boring',
      'Canby',
      'Clackamas',
      'Colton',
      'Damascus',
      'Estacada',
      'Gladstone',
      'Happy Valley',
      'Johnson City',
      'Lake Oswego',
      'Milwaukie',
      'Molalla',
      'Mulino',
      'Oregon City',
      'Redland',
      'Sandy',
      'Welches',
      'West Linn',
      'Wilsonville',
    ],
  },
  {
    county: 'Marion County',
    towns: [
      'Aumsville',
      'Aurora',
      'Donald',
      'Gervais',
      'Hubbard',
      'Jefferson',
      'Keizer',
      'Monitor',
      'Mt. Angel',
      'Salem',
      'Scotts Mills',
      'Silverton',
      'St. Paul',
      'Stayton',
      'Sublimity',
      'Turner',
      'Woodburn',
    ],
  },
  {
    county: 'Yamhill and Washington',
    towns: ['Newberg', 'Tualatin'],
  },
].map((group) => ({
  county: group.county,
  towns: group.towns
    .filter((city) => city.toLowerCase() !== 'portland' && TOWN_TRIPS[city])
    .sort((a, b) => a.localeCompare(b)),
}));

const FULL_TRAILER_CUBIC_FEET = TRAILER_LENGTH_FT * TRAILER_WIDTH_FT * TRAILER_SIDE_HEIGHT_FT;

function cubicYards(trailerFraction: number): number {
  return (FULL_TRAILER_CUBIC_FEET * trailerFraction) / CUBIC_FEET_PER_YARD;
}

function aboutCubicYards(trailerFraction: number): string {
  const rounded = Math.round(cubicYards(trailerFraction) * 10) / 10;
  const shown = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
  return `about ${shown} cubic yards`;
}

function cents(amount: number): number {
  return Math.round(amount * 100) / 100;
}

function roundToStep(amount: number, step: number): number {
  return Math.round(amount / step) * step;
}

function money(amount: number): string {
  return amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function moneyWhole(amount: number): string {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  });
}

function formatMiles(miles: number): string {
  return Number.isInteger(miles) ? String(miles) : miles.toFixed(1);
}

type PricedQuote = {
  miles: number;
  minutes: number;
  route: string;
  cubicYardsLabel: string;
  tons: number;
  fuel: number;
  wear: number;
  driveTime: number;
  drive: number;
  laborHours: number;
  labor: number;
  dumpTrips: number;
  dump: number;
  dumpIsMinimum: boolean;
  addOns: number;
  pounds: number;
  sizedByPiece: boolean;
  subtotal: number;
  margin: number;
  withMargin: number;
  total: number;
  hitMinimum: boolean;
  low: number;
  high: number;
};

function dumpFee(tons: number, trips: number): { fee: number; minimum: boolean } {
  const tonsPerTrip = tons / trips;
  const poundsPerTrip = tonsPerTrip * 2000;
  if (poundsPerTrip <= METRO_MINIMUM_LOAD_POUNDS) {
    return { fee: cents(trips * METRO_GARBAGE_MINIMUM_FEE), minimum: true };
  }
  return {
    fee: cents(trips * (tonsPerTrip * METRO_GARBAGE_PER_TON + METRO_PUBLIC_TRANSACTION_FEE)),
    minimum: false,
  };
}

function routeSentence(town: string, twoLoads: boolean): string {
  if (twoLoads) {
    return town === 'Molalla'
      ? 'Molalla to Metro South, back for the second load, to Metro South again, then home.'
      : `Molalla to ${town}, to Metro South, back to ${town} for the second load, to Metro South again, then home.`;
  }
  return town === 'Molalla'
    ? 'Molalla to Metro South and back.'
    : `Molalla to ${town}, to Metro South, and back to Molalla.`;
}

function priceQuote(town: string, load: LoadSize, addOnCost: number): PricedQuote {
  const trip = TOWN_TRIPS[town];
  const leg = load.dumpTrips > 1 ? trip.twoTrailers : trip.oneTrailer;
  const sizedByPiece = load.pounds != null;
  const pounds = load.pounds ?? cubicYards(load.trailerFraction) * HOUSEHOLD_JUNK_POUNDS_PER_CUBIC_YARD;
  const tons = pounds / 2000;
  const fuel = cents((leg.miles / TRUCK_MPG) * OREGON_DIESEL_PRICE_PER_GALLON);
  const wear = cents(leg.miles * VEHICLE_WEAR_PER_MILE);
  const driveTime = cents(leg.minutes * DRIVE_TIME_COST_PER_MINUTE);
  const drive = cents(fuel + wear + driveTime);
  const labor = cents(WORKERS * load.laborHours * LABOR_RATE_PER_HOUR);
  const dump = dumpFee(tons, load.dumpTrips);
  const addOns = cents(addOnCost);
  const subtotal = cents(drive + labor + dump.fee + addOns);
  const margin = cents(subtotal * PROFIT_MARGIN);
  const withMargin = cents(subtotal + margin);
  const total = Math.max(withMargin, MINIMUM_PRICE);
  const low = Math.max(MINIMUM_PRICE, roundToStep(total * (1 - RANGE_SPREAD), ROUND_TO_DOLLARS));
  let high = roundToStep(total * (1 + RANGE_SPREAD), ROUND_TO_DOLLARS);
  if (high < low) high = low;

  return {
    miles: leg.miles,
    minutes: leg.minutes,
    route: routeSentence(town, load.dumpTrips > 1),
    cubicYardsLabel: load.detail ?? aboutCubicYards(load.trailerFraction),
    tons,
    pounds,
    sizedByPiece,
    fuel,
    wear,
    driveTime,
    drive,
    laborHours: load.laborHours,
    labor,
    dumpTrips: load.dumpTrips,
    dump: dump.fee,
    dumpIsMinimum: dump.minimum,
    addOns,
    subtotal,
    margin,
    withMargin,
    total,
    hitMinimum: withMargin < MINIMUM_PRICE,
    low,
    high,
  };
}

function formatCrewTime(hours: number): string {
  if (hours < 1) return `${Math.round(hours * 60)} min`;
  return `${hours} hr`;
}

function rangeLabel(quote: PricedQuote): string {
  if (quote.low === quote.high) return `About ${moneyWhole(quote.low)}`;
  return `About ${moneyWhole(quote.low)}–${moneyWhole(quote.high)}`;
}

const serviceTypes = [
  { icon: Package, name: 'Appliance Removal', desc: 'Fridges, washers, dryers, stoves, dishwashers' },
  { icon: Home, name: 'Garage Cleanouts', desc: 'Shelves, boxes, tools, and a garage full of junk' },
  { icon: Leaf, name: 'Yard Cleanup', desc: 'Brush, branches, and green debris' },
  { icon: Wrench, name: 'Debris Removal', desc: 'Drywall, lumber, and remodel debris' },
  { icon: Archive, name: 'House Cleanouts', desc: 'Estates, move-outs, and full-property loads' },
  { icon: Building2, name: 'Hoarder House Cleanouts', desc: 'Careful cleanouts for severely cluttered homes' },
];

const RESULT_FINE_PRINT = 'Ballpark only. You approve the price before we load.';

function Line({ label, value, strong = false }: { label: string; value: string; strong?: boolean }) {
  return (
    <div className={`flex items-start justify-between gap-4 py-1 ${strong ? 'font-bold text-slate-900' : 'text-slate-700'}`}>
      <span>{label}</span>
      <span className="shrink-0 tabular-nums">{value}</span>
    </div>
  );
}

export function JunkRemovalPricing() {
  const townFieldId = useId();
  const townSearchId = useId();
  const [town, setTown] = useState('Molalla');
  const [townQuery, setTownQuery] = useState('');
  const [loadId, setLoadId] = useState<LoadId>('one');
  const [material, setMaterial] = useState<MaterialType>('standard');
  const [electronics, setElectronics] = useState(false);
  const [stairs, setStairs] = useState(false);

  const load = LOAD_SIZES.find((item) => item.id === loadId) ?? LOAD_SIZES[0];
  const heavy = material === 'heavy';
  const addOnCost =
    (electronics && TV_ELECTRONICS_FEE != null ? TV_ELECTRONICS_FEE : 0) +
    (stairs && STAIRS_OR_LONG_CARRY_FEE != null ? STAIRS_OR_LONG_CARRY_FEE : 0);
  const quote = priceQuote(town, load, addOnCost);
  const range = rangeLabel(quote);
  const townSearch = townQuery.trim().toLowerCase();
  const matchesTown = (city: string) => !townSearch || city.toLowerCase().includes(townSearch);
  const visibleTownGroups = TOWN_GROUPS.map((group) => ({
    county: group.county,
    towns: group.towns.filter(matchesTown),
  })).filter((group) => group.towns.length > 0);
  const searchHasMatch = visibleTownGroups.length > 0;
  const selectedStillListed = visibleTownGroups.some((group) => group.towns.includes(town));

  const renderResult = () => (
    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
      <div className="bg-slate-800 px-5 py-6 text-white sm:px-6">
        <p className="text-sm font-semibold uppercase tracking-wide text-green-300">
          {heavy ? 'Custom quote' : 'Ballpark range'}
        </p>
        <p className="mt-2 text-5xl font-bold leading-none tracking-tight lg:text-4xl">
          {heavy ? (
            'Text a photo'
          ) : (
            <>
              <span className="mb-2 block text-lg font-semibold text-slate-200">About</span>
              <span className="whitespace-nowrap">
                {quote.low === quote.high ? moneyWhole(quote.low) : `${moneyWhole(quote.low)}–${moneyWhole(quote.high)}`}
              </span>
            </>
          )}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-slate-200">
          {heavy
            ? 'Heavy materials are priced from a photo.'
            : `${town} · ${load.label} · ${quote.cubicYardsLabel}`}
        </p>
      </div>

      <div className="space-y-4 px-5 py-5 sm:px-6">
        <p className="text-base font-semibold text-slate-800">{RESULT_FINE_PRINT}</p>

        {heavy ? (
          <p className="text-sm leading-relaxed text-slate-700">{HEAVY_MATERIAL_NOTE}</p>
        ) : (
          <>
            {quote.hitMinimum && (
              <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm font-medium text-amber-950">
                This lands on the {moneyWhole(MINIMUM_PRICE)} minimum.
              </p>
            )}
            {!quote.hitMinimum && quote.low === MINIMUM_PRICE && (
              <p className="rounded-xl bg-green-50 px-4 py-3 text-sm font-medium text-green-950">
                The low end of this range is the {moneyWhole(MINIMUM_PRICE)} minimum.
              </p>
            )}
            {electronics && (
              <p className="text-sm leading-relaxed text-slate-700">
                TVs or electronics: {ADD_ON_UNPRICED_NOTE} Metro South recycles them at no charge, up to 7 items a day.
              </p>
            )}
            {stairs && (
              <p className="text-sm leading-relaxed text-slate-700">
                Stairs or a long carry: {ADD_ON_UNPRICED_NOTE}
              </p>
            )}

            <details className="group rounded-2xl border border-slate-200 bg-slate-50">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-3 px-4 font-bold text-slate-800 [&::-webkit-details-marker]:hidden">
                How we got this
                <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <div className="space-y-4 border-t border-slate-200 px-4 py-4 text-sm">
                <div>
                  <p className="font-bold text-slate-900">Drive · {money(quote.drive)}</p>
                  <p className="mt-1 text-slate-600">
                    {formatMiles(quote.miles)} miles, {quote.minutes} minutes. {quote.route}
                  </p>
                  <Line label={`Fuel, ${formatMiles(quote.miles)} mi at ${TRUCK_MPG} mpg`} value={money(quote.fuel)} />
                  <Line label={`Wear, ${formatMiles(quote.miles)} mi × ${money(VEHICLE_WEAR_PER_MILE)}`} value={money(quote.wear)} />
                  <Line label={`Drive time, ${quote.minutes} min × ${money(DRIVE_TIME_COST_PER_MINUTE)}`} value={money(quote.driveTime)} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Labor · {money(quote.labor)}</p>
                  <Line
                    label={`${WORKERS} people × ${formatCrewTime(quote.laborHours)} at ${money(LABOR_RATE_PER_HOUR)}/hr`}
                    value={money(quote.labor)}
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-900">Dump fee · {money(quote.dump)}</p>
                  <p className="mt-1 text-slate-600">
                    {quote.sizedByPiece
                      ? `${quote.cubicYardsLabel}. About ${Math.round(quote.pounds)} lb.`
                      : `${quote.cubicYardsLabel} of household junk, about ${quote.tons.toFixed(2)} tons at ${HOUSEHOLD_JUNK_POUNDS_PER_CUBIC_YARD} lb per cubic yard.`}
                    {quote.dumpTrips > 1 ? ' Two trips to Metro South.' : ' One trip to Metro South.'}
                  </p>
                  {quote.dumpIsMinimum ? (
                    <Line
                      label={`${moneyWhole(METRO_GARBAGE_MINIMUM_FEE)} minimum × ${quote.dumpTrips}`}
                      value={money(quote.dump)}
                    />
                  ) : (
                    <>
                      <Line
                        label={`${quote.tons.toFixed(2)} tons × ${money(METRO_GARBAGE_PER_TON)}`}
                        value={money(cents(quote.tons * METRO_GARBAGE_PER_TON))}
                      />
                      <Line
                        label={`Transaction fee × ${quote.dumpTrips}`}
                        value={money(cents(METRO_PUBLIC_TRANSACTION_FEE * quote.dumpTrips))}
                      />
                    </>
                  )}
                </div>
                {quote.addOns > 0 && <Line label="Add-ons" value={money(quote.addOns)} strong />}
                <div className="border-t border-slate-200 pt-3">
                  <Line label="Costs" value={money(quote.subtotal)} />
                  <Line label={`Margin (${Math.round(PROFIT_MARGIN * 100)}%)`} value={money(quote.margin)} />
                  <Line label="Working total" value={money(quote.total)} strong />
                  <p className="pt-2 text-slate-600">
                    The range is 10% under to 10% over that total, rounded to the nearest $5.
                    {quote.hitMinimum ? ` The ${moneyWhole(MINIMUM_PRICE)} minimum is the floor.` : ''}
                  </p>
                </div>
                <p className="text-xs leading-relaxed text-slate-500">
                  Diesel is the AAA Oregon average of ${OREGON_DIESEL_PRICE_PER_GALLON.toFixed(4)} a gallon as of November 21, 2026.
                  Mixed household junk uses Metro South&apos;s garbage rate. Sorted clean yard debris is {money(METRO_CLEAN_YARD_DEBRIS_PER_TON)} a ton
                  (minimum {moneyWhole(METRO_CLEAN_YARD_DEBRIS_MINIMUM_FEE)}) and clean wood is {money(METRO_CLEAN_WOOD_PER_TON)} a ton
                  (minimum {moneyWhole(METRO_CLEAN_WOOD_MINIMUM_FEE)}) when it is kept separate. A mixed load is priced as garbage.
                </p>
              </div>
            </details>
          </>
        )}

        <div className="grid grid-cols-1 gap-3">
          <a
            href={PHONE_SMS_HREF}
            className="inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-green-800 px-4 py-4 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-green-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
          >
            <MessageSquare className="h-6 w-6 shrink-0" aria-hidden="true" />
            Text a photo
          </a>
          <a
            href={PHONE_TEL_HREF}
            className="inline-flex min-h-16 items-center justify-center gap-2 rounded-2xl bg-slate-800 px-4 py-4 text-center text-lg font-bold text-white shadow-md transition-colors hover:bg-slate-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-800"
          >
            <Phone className="h-6 w-6 shrink-0" aria-hidden="true" />
            Call {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-12">
      <p className="sr-only" aria-live="polite" data-testid="ballpark-range">
        {heavy ? `Custom quote. ${HEAVY_MATERIAL_NOTE}` : `${range}. ${RESULT_FINE_PRINT}`}
      </p>

      <div className="mb-8 max-w-2xl">
        <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">Estimate a load</h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
          Pick your town and the size of the load. The range comes from the drive, two people loading, and the Metro South dump fee.
        </p>
        <p className="mt-4 text-lg font-bold text-slate-800">Single items start at $150.</p>
        <p className="mt-1 text-sm font-semibold text-slate-700">{RESULT_FINE_PRINT}</p>
      </div>

      <div
        className="sticky z-30 mb-6 lg:hidden"
        style={{ top: 'calc(5.25rem + env(safe-area-inset-top))' }}
        aria-hidden="true"
      >
        <div className="flex items-center justify-between gap-3 rounded-2xl bg-slate-800 px-4 py-3 text-white shadow-md">
          <p className="text-xs font-semibold uppercase tracking-wide text-green-300">
            {heavy ? 'Custom quote' : 'Ballpark'}
          </p>
          <p className="text-lg font-bold tracking-tight">{heavy ? 'Text a photo' : range}</p>
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-[minmax(0,1fr)_24rem] lg:items-start lg:gap-8">
        <div className="space-y-8">
          <div>
            <label htmlFor={townSearchId} className="block text-base font-bold text-slate-800">
              Where is the junk?
            </label>
            <input
              id={townSearchId}
              type="search"
              value={townQuery}
              onChange={(event) => setTownQuery(event.target.value)}
              placeholder="Search towns"
              autoComplete="off"
              className="mt-3 min-h-14 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-semibold text-slate-800 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            />
            <label htmlFor={townFieldId} className="sr-only">
              Town
            </label>
            <select
              id={townFieldId}
              value={town}
              onChange={(event) => {
                setTown(event.target.value);
                setTownQuery('');
              }}
              className="mt-3 min-h-14 w-full rounded-2xl border-2 border-slate-200 bg-white px-4 font-semibold text-slate-800 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700"
            >
              {!selectedStillListed && <option value={town}>{town}</option>}
              {visibleTownGroups.map((group) => (
                <optgroup key={group.county} label={group.county}>
                  {group.towns.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </optgroup>
              ))}
            </select>
            {townSearch && !searchHasMatch && (
              <p className="mt-2 text-sm text-slate-600">
                No town matches. Text a photo and we&apos;ll tell you if we can haul there.
              </p>
            )}
          </div>

          <fieldset>
            <legend className="text-base font-bold text-slate-800">How much are we hauling?</legend>
            <p className="mt-1 text-sm text-slate-600">
              Single items start at $150. A full load is the 7×14 trailer with 4 ft sides, {aboutCubicYards(1)}.
            </p>
            <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {LOAD_SIZES.map((item) => {
                const active = loadId === item.id;
                const fill = Math.min(item.trailerFraction, 1) * 100;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setLoadId(item.id)}
                    className={`min-h-[5.25rem] rounded-2xl border-2 px-4 py-3 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 ${
                      active ? 'border-green-700 bg-green-50 shadow-sm' : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <span className="flex items-start justify-between gap-3">
                      <span className={`block text-lg font-bold ${active ? 'text-green-800' : 'text-slate-800'}`}>
                        {item.label}
                      </span>
                      {active && <Check className="mt-1 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />}
                    </span>
                    <span className="mt-0.5 block text-sm font-medium text-slate-600">
                      {item.detail ?? aboutCubicYards(item.trailerFraction)}
                    </span>
                    {item.hint && <span className="mt-0.5 block text-sm font-semibold text-green-800">{item.hint}</span>}
                    {item.trailerFraction > 0 && (
                      <span className="mt-3 flex gap-1" aria-hidden="true">
                        <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                          <span className="block h-full rounded-full bg-green-700" style={{ width: `${fill}%` }} />
                        </span>
                        {item.trailerFraction > 1 && (
                          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-200">
                            <span className="block h-full w-full rounded-full bg-green-700" />
                          </span>
                        )}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-slate-800">What are we hauling?</legend>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <button
                type="button"
                aria-pressed={material === 'standard'}
                onClick={() => setMaterial('standard')}
                className={`min-h-16 rounded-2xl border-2 px-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 ${
                  material === 'standard' ? 'border-green-700 bg-green-50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-slate-800">Household junk</span>
                  {material === 'standard' && <Check className="h-5 w-5 text-green-700" aria-hidden="true" />}
                </span>
                <span className="mt-1 block text-sm text-slate-600">Furniture, appliances, and mixed household junk</span>
              </button>
              <button
                type="button"
                aria-pressed={material === 'heavy'}
                onClick={() => setMaterial('heavy')}
                className={`min-h-16 rounded-2xl border-2 px-4 py-4 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-700 ${
                  material === 'heavy' ? 'border-orange-500 bg-orange-50' : 'border-slate-200 bg-white hover:border-slate-300'
                }`}
              >
                <span className="flex items-center justify-between gap-3">
                  <span className="text-lg font-bold text-slate-800">Heavy materials</span>
                  {material === 'heavy' && <Check className="h-5 w-5 text-orange-600" aria-hidden="true" />}
                </span>
                <span className="mt-1 block text-sm text-slate-600">Dirt, concrete, brick, roofing, and other dense loads. Custom quote, text a photo.</span>
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend className="text-base font-bold text-slate-800">Anything else?</legend>
            <div className="mt-3 grid grid-cols-1 gap-3">
              <label className={`flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border-2 px-4 py-3 ${electronics ? 'border-green-700 bg-green-50' : 'border-slate-200 bg-white'}`}>
                <input
                  type="checkbox"
                  checked={electronics}
                  onChange={(event) => setElectronics(event.target.checked)}
                  className="h-6 w-6 shrink-0 accent-green-800"
                />
                <span>
                  <span className="block text-base font-bold text-slate-800">TVs or electronics</span>
                  <span className="mt-0.5 block text-sm text-slate-600">{ADD_ON_UNPRICED_NOTE}</span>
                </span>
              </label>
              <label className={`flex min-h-16 cursor-pointer items-center gap-4 rounded-2xl border-2 px-4 py-3 ${stairs ? 'border-green-700 bg-green-50' : 'border-slate-200 bg-white'}`}>
                <input
                  type="checkbox"
                  checked={stairs}
                  onChange={(event) => setStairs(event.target.checked)}
                  className="h-6 w-6 shrink-0 accent-green-800"
                />
                <span>
                  <span className="block text-base font-bold text-slate-800">Stairs or a long carry</span>
                  <span className="mt-0.5 block text-sm text-slate-600">{ADD_ON_UNPRICED_NOTE}</span>
                </span>
              </label>
            </div>
          </fieldset>

          <div className="lg:hidden">
            {renderResult()}
          </div>
        </div>

        <div className="mt-8 hidden lg:mt-0 lg:block">
          <div className="lg:sticky lg:top-24">{renderResult()}</div>
        </div>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {[
          { title: 'Drive', text: 'Molalla to your town, to Metro South in Oregon City, and back.' },
          { title: 'Labor', text: 'Two people. A fuller trailer takes longer to load.' },
          { title: 'Dump fee', text: 'Metro South charges household junk by the ton, plus a transaction fee.' },
        ].map((item) => (
          <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-5">
            <h3 className="font-bold text-slate-800">{item.title}</h3>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.text}</p>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-center text-xl font-bold text-slate-800 sm:text-2xl">What we haul</h3>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {serviceTypes.map((service) => (
            <div key={service.name} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4">
              <div className="rounded-xl bg-green-50 p-2.5">
                <service.icon className="h-5 w-5 text-green-800" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-bold text-slate-800">{service.name}</h4>
                <p className="mt-0.5 text-sm text-slate-600">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
          <h3 className="text-lg font-bold text-slate-800">In a household load</h3>
          <ul className="mt-3 space-y-2">
            {['Loading and hauling', 'Furniture, appliances, and mixed household junk', 'Yard waste mixed into the load', 'Remodel debris that is not a heavy material'].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-700" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
          <h3 className="text-lg font-bold text-slate-800">Custom quote</h3>
          <p className="mt-2 text-sm text-slate-700">{HEAVY_MATERIAL_NOTE}</p>
          <ul className="mt-3 space-y-2">
            {['Concrete, dirt, brick, asphalt', 'Roofing and shingles'].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="font-bold text-amber-700" aria-hidden="true">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
        <h3 className="text-center text-lg font-bold text-slate-800">What we don&apos;t take</h3>
        <div className="mx-auto mt-4 grid max-w-3xl grid-cols-2 gap-3">
          {['Hazardous waste', 'Chemicals and liquids', 'Paint', 'Asbestos'].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-700">
              <X className="h-5 w-5 shrink-0 text-red-600" aria-hidden="true" />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8 rounded-3xl bg-slate-800 px-5 py-8 text-white sm:px-8">
        <p className="inline-flex rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold">{DISCOUNT_NOTE}</p>
        <h3 className="mt-4 text-2xl font-bold">Send a photo of the pile</h3>
        <p className="mt-2 max-w-xl text-slate-200">{BALLPARK_NOTE} {HEAVY_MATERIAL_NOTE}</p>
        <div className="mt-5">
          <QuoteActions tone="on-dark" />
        </div>
      </div>
    </div>
  );
}
