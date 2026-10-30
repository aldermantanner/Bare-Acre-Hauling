/**
 * Town landing pages.
 *
 * Hero photos are shared job shots in public/towns/<photoKey>.webp and .jpg.
 * Several towns point at the same photoKey so the file is stored once.
 * To give one town its own photo later, add public/towns/<new-key>.webp and
 * .jpg, then change that town's photoKey and hero paths.
 */

export type TownHero = {
  webp: string;
  jpg: string;
  width: number;
  height: number;
  alt: string;
  /** CSS object-position so the subject stays in the hero crop. */
  objectPosition: string;
};

export type TownPage = {
  slug: string;
  photoKey: string;
  city: string;
  /** Schema place type. Unincorporated communities use Place. */
  placeType: 'City' | 'Place';
  group: 'home' | 'north' | 'south' | 'east' | 'metro';
  nearby: string[];
  title: string;
  description: string;
  h1: string;
  lead: string;
  detail: string;
  hero: TownHero;
};

const YARD: TownHero = {
  webp: '/towns/yard-debris.webp',
  jpg: '/towns/yard-debris.jpg',
  width: 1000,
  height: 1333,
  alt: 'Dump trailer loaded with yard debris, branches, and an old lawn mower',
  objectPosition: 'center 68%',
};

const OWNER_UNLOADING: TownHero = {
  webp: '/towns/owner-unloading.webp',
  jpg: '/towns/owner-unloading.jpg',
  width: 901,
  height: 1600,
  alt: 'Bare Acre Hauling owner in a green shirt unloading junk from the trailer at a transfer station',
  objectPosition: '68% 24%',
};

const LOG_HOME_TRAILER: TownHero = {
  webp: '/towns/log-home-trailer.webp',
  jpg: '/towns/log-home-trailer.jpg',
  width: 920,
  height: 1227,
  alt: 'Dump trailer and wheelbarrow parked in front of a log home during a cleanup',
  objectPosition: 'center 38%',
};

const LUMBER: TownHero = {
  webp: '/towns/lumber-pile.webp',
  jpg: '/towns/lumber-pile.jpg',
  width: 780,
  height: 1040,
  alt: 'Cut logs, lumber, and wood rounds piled on a wooded lot before haul-away',
  objectPosition: 'center 30%',
};

const UNLOADING_WOOD: TownHero = {
  webp: '/towns/unloading-wood.webp',
  jpg: '/towns/unloading-wood.jpg',
  width: 1000,
  height: 1333,
  alt: 'White truck dumping a trailer load of lumber and logs beside a rural road',
  objectPosition: 'center 42%',
};

const LOG_HOME_LOADED: TownHero = {
  webp: '/towns/log-home-loaded.webp',
  jpg: '/towns/log-home-loaded.jpg',
  width: 920,
  height: 1227,
  alt: 'Trailer loaded with scrap lumber parked in front of a log home',
  objectPosition: 'center 40%',
};

const WOODED: TownHero = {
  webp: '/towns/wooded-lot.webp',
  jpg: '/towns/wooded-lot.jpg',
  width: 840,
  height: 1120,
  alt: 'Logs and a tarp on a wooded lot before junk removal',
  objectPosition: 'center 36%',
};

const OWNER_CUSTOMER: TownHero = {
  webp: '/towns/owner-and-customer.webp',
  jpg: '/towns/owner-and-customer.jpg',
  width: 1100,
  height: 1467,
  alt: 'Bare Acre Hauling owner in a green shirt standing with a customer beside a loaded trailer',
  objectPosition: 'center 42%',
};

const TRUCK: TownHero = {
  webp: '/towns/truck-and-trailer.webp',
  jpg: '/towns/truck-and-trailer.jpg',
  width: 1100,
  height: 1467,
  alt: 'Pickup truck towing a loaded junk removal trailer',
  objectPosition: 'center 40%',
};

export const TOWN_GROUPS: { id: TownPage['group']; title: string; note: string }[] = [
  {
    id: 'home',
    title: 'Molalla and next door',
    note: 'Home base and the communities along OR-213 and Beavercreek Road.',
  },
  {
    id: 'north',
    title: 'North toward Oregon City',
    note: 'Up OR-213 and along the Willamette from Canby to Milwaukie.',
  },
  {
    id: 'south',
    title: 'South and the 99E valley',
    note: 'OR-213 south, OR-211 west, and the Marion County towns toward Salem.',
  },
  {
    id: 'east',
    title: 'East on OR-211',
    note: 'Toward Estacada, Sandy, and the Clackamas River side.',
  },
  {
    id: 'metro',
    title: 'Farther north and west',
    note: 'I-5, I-205, and the towns west of the Willamette.',
  },
];

export const TOWN_PAGES: TownPage[] = [
  {
    slug: 'junk-removal-molalla',
    photoKey: 'owner-and-customer',
    city: 'Molalla',
    placeType: 'City',
    group: 'home',
    nearby: ['junk-removal-mulino', 'junk-removal-beavercreek', 'junk-removal-canby'],
    title: 'Junk Removal in Molalla, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal based in Molalla, OR. Garage cleanouts, yard debris, rural property cleanups, and estate cleanouts. Jobs start at $150. Text a photo to 503-874-3705.',
    h1: 'Junk Removal in Molalla, OR',
    lead:
      'This is home. Downtown is a few minutes from the shop. OR-213 runs north toward Mulino, and OR-211 heads east and west. We do garage cleanouts, furniture and appliances, yard debris, and cleanups on the acreage outside town.',
    detail:
      'Out by the Molalla River, the pile is often behind a shop or along a fence line. Text a photo and we\'ll send a price.',
    hero: OWNER_CUSTOMER,
  },
  {
    slug: 'junk-removal-mulino',
    photoKey: 'yard-debris',
    city: 'Mulino',
    placeType: 'Place',
    group: 'home',
    nearby: ['junk-removal-molalla', 'junk-removal-beavercreek', 'junk-removal-oregon-city'],
    title: 'Junk Removal in Mulino, OR | Bare Acre Hauling',
    description:
      'Junk removal in Mulino, OR from a crew based a few miles south in Molalla. Rural property cleanups, garage cleanouts, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Mulino, OR',
    lead:
      'Mulino is the next stop north of Molalla on OR-213, a short drive before the highway keeps going toward Oregon City. Houses sit on bigger lots, with small acreage mixed in.',
    detail:
      'Garage cleanouts, brush, and junk from a shop or outbuilding are the usual jobs. Text a photo and we\'ll send a price.',
    hero: YARD,
  },
  {
    slug: 'junk-removal-beavercreek',
    photoKey: 'log-home-loaded',
    city: 'Beavercreek',
    placeType: 'Place',
    group: 'home',
    nearby: ['junk-removal-oregon-city', 'junk-removal-estacada', 'junk-removal-molalla'],
    title: 'Junk Removal in Beavercreek, OR | Bare Acre Hauling',
    description:
      'Junk removal for Beavercreek, OR. Bare Acre Hauling is based in Molalla and hauls yard debris, garage cleanouts, and rural property junk. Jobs start at $150.',
    h1: 'Junk Removal in Beavercreek, OR',
    lead:
      'Beavercreek is northeast of Molalla, along Beavercreek Road between Oregon City and the road out to Estacada. The places are spread out.',
    detail:
      'We haul yard debris, shop and barn cleanups, and household junk off acreage. From Molalla we head north on OR-213, then east. Text a photo of the pile.',
    hero: LOG_HOME_LOADED,
  },
  {
    slug: 'junk-removal-canby',
    photoKey: 'owner-unloading',
    city: 'Canby',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-molalla', 'junk-removal-hubbard', 'junk-removal-aurora'],
    title: 'Junk Removal in Canby, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal for Canby, OR, based in Molalla. Garage cleanouts, furniture, appliances, yard debris, and estate cleanouts. Jobs start at $150. Text a photo to 503-874-3705.',
    h1: 'Junk Removal in Canby, OR',
    lead:
      'Canby is just north of us, on the 99E side of Clackamas County, between Molalla and Oregon City. Neighborhoods and acreage both.',
    detail:
      'We come up for garages that turned into storage, a washer or fridge, furniture after a move, brush, and estate or move-out cleanouts. Text a photo of the pile.',
    hero: OWNER_UNLOADING,
  },
  {
    slug: 'junk-removal-oregon-city',
    photoKey: 'lumber-pile',
    city: 'Oregon City',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-gladstone', 'junk-removal-west-linn', 'junk-removal-beavercreek'],
    title: 'Junk Removal in Oregon City, OR | Bare Acre Hauling',
    description:
      'Junk removal in Oregon City from a Molalla-based, veteran-owned crew. Appliances, furniture, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Oregon City, OR',
    lead:
      'Oregon City is north of Molalla on OR-213, where the Willamette runs and the neighborhoods climb the hill above the river. Older streets near downtown, and houses farther out.',
    detail:
      'Appliances, furniture, a packed garage, a full estate cleanout, plus yard debris and remodel leftovers on the hill lots. Text a photo and we\'ll get you a price.',
    hero: LUMBER,
  },
  {
    slug: 'junk-removal-gladstone',
    photoKey: 'unloading-wood',
    city: 'Gladstone',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-oregon-city', 'junk-removal-milwaukie', 'junk-removal-west-linn'],
    title: 'Junk Removal in Gladstone, OR | Bare Acre Hauling',
    description:
      'Junk removal in Gladstone, OR by Bare Acre Hauling in Molalla. Garage cleanouts, appliances, furniture, and small estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Gladstone, OR',
    lead:
      'Gladstone sits between Oregon City and Milwaukie, where the Clackamas River meets the Willamette. From Molalla it is OR-213 to Oregon City, then a few more minutes.',
    detail:
      'Most jobs are a garage, a basement, appliances, furniture, or a small move-out. Text a photo and we\'ll price it.',
    hero: UNLOADING_WOOD,
  },
  {
    slug: 'junk-removal-milwaukie',
    photoKey: 'log-home-trailer',
    city: 'Milwaukie',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-gladstone', 'junk-removal-happy-valley', 'junk-removal-lake-oswego'],
    title: 'Junk Removal in Milwaukie, OR | Bare Acre Hauling',
    description:
      'Junk removal in Milwaukie, OR from a Molalla-based crew. Furniture, appliances, garage cleanouts, and move-outs. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Milwaukie, OR',
    lead:
      'Milwaukie is up 99E, with downtown by the Willamette and neighborhoods toward OR-224. From Molalla we come up OR-213, through Oregon City, and on past Gladstone.',
    detail:
      'We haul furniture, appliances, packed garages, and move-outs. Text a photo and we\'ll send a price.',
    hero: LOG_HOME_TRAILER,
  },
  {
    slug: 'junk-removal-silverton',
    photoKey: 'wooded-lot',
    city: 'Silverton',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-mt-angel', 'junk-removal-molalla', 'junk-removal-salem'],
    title: 'Junk Removal in Silverton, OR | Bare Acre Hauling',
    description:
      'Junk removal in Silverton, OR. Bare Acre Hauling drives down OR-213 from Molalla for garage cleanouts, furniture, appliances, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Silverton, OR',
    lead:
      'Silverton is south of Molalla on OR-213, about twenty minutes from the shop. Older downtown, and houses out toward the Oregon Garden side of town.',
    detail:
      'Garage cleanouts, furniture, appliances, yard debris, and estate cleanouts. From Mt. Angel over to Silverton is an easy loop for us. Text a photo and we\'ll price the job.',
    hero: WOODED,
  },
  {
    slug: 'junk-removal-mt-angel',
    photoKey: 'truck-and-trailer',
    city: 'Mt. Angel',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-silverton', 'junk-removal-woodburn', 'junk-removal-hubbard'],
    title: 'Junk Removal in Mt. Angel, OR | Bare Acre Hauling',
    description:
      'Junk removal in Mt. Angel, OR from Bare Acre Hauling in Molalla. House and garage cleanouts, furniture, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Mt. Angel, OR',
    lead:
      'Mt. Angel is west of Silverton on OR-214, between Silverton and Woodburn. The abbey sits on the hill above a small downtown. From Molalla we take OR-213 south and cut over.',
    detail:
      'House cleanouts, garages, furniture, and yard debris. Text a photo and we\'ll send a price.',
    hero: TRUCK,
  },
  {
    slug: 'junk-removal-woodburn',
    photoKey: 'owner-and-customer',
    city: 'Woodburn',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-hubbard', 'junk-removal-molalla', 'junk-removal-mt-angel'],
    title: 'Junk Removal in Woodburn, OR | Bare Acre Hauling',
    description:
      'Junk removal in Woodburn, OR. Veteran-owned Bare Acre Hauling comes west on OR-211 from Molalla for furniture, appliances, garage cleanouts, and move-outs. Jobs start at $150.',
    h1: 'Junk Removal in Woodburn, OR',
    lead:
      'Woodburn is west of Molalla, where OR-211 meets I-5. About twenty minutes from the shop. Downtown, 99E, and the neighborhoods around the outlet shops.',
    detail:
      'House garages, rental move-outs, furniture and appliances by the driveway, and estate cleanouts when an older house turns over. Text a photo so we can see the pile.',
    hero: OWNER_CUSTOMER,
  },
  {
    slug: 'junk-removal-hubbard',
    photoKey: 'yard-debris',
    city: 'Hubbard',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-woodburn', 'junk-removal-aurora', 'junk-removal-canby'],
    title: 'Junk Removal in Hubbard, OR | Bare Acre Hauling',
    description:
      'Junk removal in Hubbard, OR by a Molalla-based crew. Garage cleanouts, appliances, and yard debris along 99E. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Hubbard, OR',
    lead:
      'Hubbard is a small town on 99E, south of Aurora and north of Woodburn. From Molalla we take OR-211 west, then a short hop up the highway.',
    detail:
      'Garage cleanouts, appliances, and yard debris, in town and on the acreage at the edge. Text a photo and we\'ll send a price.',
    hero: YARD,
  },
  {
    slug: 'junk-removal-aurora',
    photoKey: 'log-home-loaded',
    city: 'Aurora',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-hubbard', 'junk-removal-canby', 'junk-removal-wilsonville'],
    title: 'Junk Removal in Aurora, OR | Bare Acre Hauling',
    description:
      'Junk removal in Aurora, OR from Bare Acre Hauling in Molalla. Estate cleanouts, furniture, garage loads, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Aurora, OR',
    lead:
      'Aurora sits on 99E, north of Hubbard and south of Canby. The old downtown has colony-era houses and antique shops along the highway, with homes on the streets behind them. From Molalla we come across to 99E.',
    detail:
      'Furniture and estate cleanouts in the older houses. Garage loads and yard debris on the newer streets. Text a photo and we\'ll price it.',
    hero: LOG_HOME_LOADED,
  },
  {
    slug: 'junk-removal-salem',
    photoKey: 'owner-unloading',
    city: 'Salem',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-keizer', 'junk-removal-silverton', 'junk-removal-woodburn'],
    title: 'Junk Removal in Salem, OR | Bare Acre Hauling',
    description:
      'Junk removal in Salem, OR from Bare Acre Hauling in Molalla. Furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Salem, OR',
    lead:
      'Salem is the state capital, southwest of Molalla in Marion County. Downtown streets, then neighborhoods spread out from there.',
    detail:
      'One apartment of furniture or a whole house. We come down for furniture, appliances, garages, yard debris, and estate cleanouts. Text a photo and the cross street and we\'ll send a price.',
    hero: OWNER_UNLOADING,
  },
  {
    slug: 'junk-removal-keizer',
    photoKey: 'lumber-pile',
    city: 'Keizer',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-salem', 'junk-removal-woodburn', 'junk-removal-silverton'],
    title: 'Junk Removal in Keizer, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal for Keizer, OR. Bare Acre Hauling is based in Molalla and hauls furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Keizer, OR',
    lead:
      'Keizer is just north of Salem, on the Marion County side of the Willamette and west of Molalla. Mostly houses.',
    detail:
      'Garages used as storage, couches and mattresses, old appliances, yard debris, and estate or move-out cleanouts. Text a photo and we\'ll price the load.',
    hero: LUMBER,
  },
  {
    slug: 'junk-removal-estacada',
    photoKey: 'unloading-wood',
    city: 'Estacada',
    placeType: 'City',
    group: 'east',
    nearby: ['junk-removal-sandy', 'junk-removal-beavercreek', 'junk-removal-molalla'],
    title: 'Junk Removal in Estacada, OR | Bare Acre Hauling',
    description:
      'Junk removal in Estacada, OR. Bare Acre Hauling drives east from Molalla on OR-211 for garage cleanouts, yard debris, and rural property cleanups. Jobs start at $150.',
    h1: 'Junk Removal in Estacada, OR',
    lead:
      'Estacada is east of Molalla. OR-211 heads toward the Clackamas River, and OR-224 brings you into town. About half an hour from the shop. Downtown is small, with acreage and houses set back off the road on the way in.',
    detail:
      'Garage cleanouts, yard debris, and junk from shops and outbuildings. Estate cleanouts too, when a house in town is being cleared. Text a photo and we\'ll set the price.',
    hero: UNLOADING_WOOD,
  },
  {
    slug: 'junk-removal-sandy',
    photoKey: 'log-home-trailer',
    city: 'Sandy',
    placeType: 'City',
    group: 'east',
    nearby: ['junk-removal-estacada', 'junk-removal-happy-valley', 'junk-removal-molalla'],
    title: 'Junk Removal in Sandy, OR | Bare Acre Hauling',
    description:
      'Junk removal in Sandy, OR from Molalla. Furniture, appliances, garage cleanouts, and yard debris up OR-211 to US-26. Jobs start at $150.',
    h1: 'Junk Removal in Sandy, OR',
    lead:
      'Sandy is where OR-211 from Molalla meets US-26, at the start of the Mount Hood highway. We cover downtown and the streets off the highway.',
    detail:
      'Furniture, appliances, garage cleanouts, and yard debris. Places between Estacada and Sandy along 211 are the same kind of work: brush, an outbuilding, household junk. Text a photo and we\'ll send a price.',
    hero: LOG_HOME_TRAILER,
  },
  {
    slug: 'junk-removal-wilsonville',
    photoKey: 'wooded-lot',
    city: 'Wilsonville',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-tualatin', 'junk-removal-canby', 'junk-removal-west-linn'],
    title: 'Junk Removal in Wilsonville, OR | Bare Acre Hauling',
    description:
      'Junk removal in Wilsonville, OR. A Molalla-based, veteran-owned crew hauls furniture, appliances, and garage cleanouts. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Wilsonville, OR',
    lead:
      'Wilsonville is north of Canby, where I-5 crosses the Willamette. Villebois is on the west side, older streets are closer to the river, and Wilsonville Road is the commercial strip. From Molalla we come up through Canby, about half an hour.',
    detail:
      'Apartment and house furniture, appliances, garage cleanouts, and move-outs. Text a photo with the nearest cross street and we\'ll send a price.',
    hero: WOODED,
  },
  {
    slug: 'junk-removal-west-linn',
    photoKey: 'owner-and-customer',
    city: 'West Linn',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-oregon-city', 'junk-removal-lake-oswego', 'junk-removal-wilsonville'],
    title: 'Junk Removal in West Linn, OR | Bare Acre Hauling',
    description:
      'Junk removal in West Linn, OR from Bare Acre Hauling in Molalla. Garage cleanouts, furniture, appliances, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in West Linn, OR',
    lead:
      'West Linn is north of Oregon City along the Willamette. Bolton and the Willamette neighborhood are down by the river, and houses climb toward I-205 and OR-43. From Molalla it is OR-213 through Oregon City, about half an hour.',
    detail:
      'Garage cleanouts, furniture, appliances, and yard debris on the sloped lots. Estate cleanouts in the older parts of town too. Text a photo and we\'ll price it.',
    hero: OWNER_CUSTOMER,
  },
  {
    slug: 'junk-removal-happy-valley',
    photoKey: 'truck-and-trailer',
    city: 'Happy Valley',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-milwaukie', 'junk-removal-sandy', 'junk-removal-west-linn'],
    title: 'Junk Removal in Happy Valley, OR | Bare Acre Hauling',
    description:
      'Junk removal in Happy Valley, OR. Bare Acre Hauling comes north from Molalla for garage cleanouts, furniture, appliances, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Happy Valley, OR',
    lead:
      'Happy Valley is east of I-205, in the newer subdivisions off Sunnyside Road and 172nd, uphill from Clackamas. From Molalla we drive north, then east of Oregon City.',
    detail:
      'Garage cleanouts, furniture after a move, appliances, and yard debris. Text a photo and we\'ll send a price.',
    hero: TRUCK,
  },
  {
    slug: 'junk-removal-tualatin',
    photoKey: 'yard-debris',
    city: 'Tualatin',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-wilsonville', 'junk-removal-lake-oswego', 'junk-removal-newberg'],
    title: 'Junk Removal in Tualatin, OR | Bare Acre Hauling',
    description:
      'Junk removal in Tualatin, OR from a veteran-owned crew in Molalla. Furniture, appliances, garage cleanouts, and move-outs. Jobs start at $150.',
    h1: 'Junk Removal in Tualatin, OR',
    lead:
      'Tualatin is northwest of Molalla on the I-5 side, past Wilsonville. Tualatin-Sherwood Road and the downtown blocks by the Tualatin River.',
    detail:
      'Furniture, appliances, garage cleanouts, and move-outs from houses and townhouses. Text a photo and we\'ll send a price.',
    hero: YARD,
  },
  {
    slug: 'junk-removal-lake-oswego',
    photoKey: 'owner-unloading',
    city: 'Lake Oswego',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-west-linn', 'junk-removal-tualatin', 'junk-removal-milwaukie'],
    title: 'Junk Removal in Lake Oswego, OR | Bare Acre Hauling',
    description:
      'Junk removal in Lake Oswego, OR. Bare Acre Hauling is based in Molalla and hauls furniture, appliances, garage cleanouts, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Lake Oswego, OR',
    lead:
      'Lake Oswego is northwest of Molalla. OR-43 runs along the Willamette, downtown sits by the lake, and Mountain Park is up the hill. We come up past West Linn.',
    detail:
      'Furniture, appliances, a garage that filled up, or an estate cleanout. Text a photo and we\'ll price the pile.',
    hero: OWNER_UNLOADING,
  },
  {
    slug: 'junk-removal-newberg',
    photoKey: 'lumber-pile',
    city: 'Newberg',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-woodburn', 'junk-removal-wilsonville', 'junk-removal-tualatin'],
    title: 'Junk Removal in Newberg, OR | Bare Acre Hauling',
    description:
      'Junk removal in Newberg, OR from Molalla. Furniture, appliances, garage cleanouts, yard debris, and estate cleanouts across the river on 99W. Jobs start at $150.',
    h1: 'Junk Removal in Newberg, OR',
    lead:
      'Newberg is west of the Willamette in Yamhill County, on OR-99W. Downtown, and the streets up the hill toward George Fox. From Molalla we head west toward Woodburn and across, or up through Wilsonville.',
    detail:
      'Furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Text a photo and we\'ll send a price.',
    hero: LUMBER,
  },
];

export function townPath(slug: string) {
  return `/${slug}`;
}

export function townBySlug(slug: string) {
  return TOWN_PAGES.find((town) => town.slug === slug);
}
