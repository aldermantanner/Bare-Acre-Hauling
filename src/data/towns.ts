export type TownPage = {
  slug: string;
  city: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  detail: string;
  hero: {
    webp: string;
    jpg: string;
    width: number;
    height: number;
    alt: string;
  };
};

export const TOWN_PAGES: TownPage[] = [
  {
    slug: 'junk-removal-canby',
    city: 'Canby',
    title: 'Junk Removal in Canby, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal for Canby, OR, based in Molalla. Garage cleanouts, furniture, appliances, yard debris, and estate cleanouts. Jobs start at $150. Text a photo to 503-874-3705.',
    h1: 'Junk Removal in Canby, OR',
    lead:
      'Canby is just north of Molalla on the 99E side of Clackamas County, a mix of neighborhoods and acreage between our home base and Oregon City. Bare Acre Hauling drives up from Molalla for the loads people in Canby actually have: a garage that turned into storage, a washer and fridge that have to go, furniture after a move, and brush or yard debris from a cleanup.',
    detail:
      'Estate and move-out cleanouts are part of the same trip when a Canby house is changing hands. Text a photo of the pile. We reply with a price for that job, and you approve it before we load.',
    hero: {
      webp: '/crew-loading.webp',
      jpg: '/crew-loading.jpg',
      width: 1280,
      height: 853,
      alt: 'Loading a refrigerator and furniture onto the trailer',
    },
  },
  {
    slug: 'junk-removal-oregon-city',
    city: 'Oregon City',
    title: 'Junk Removal in Oregon City, OR | Bare Acre Hauling',
    description:
      'Junk removal in Oregon City from a Molalla-based, veteran-owned crew. Appliances, furniture, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Oregon City, OR',
    lead:
      'Oregon City is the Clackamas County seat, north of Molalla where the Willamette runs and neighborhoods climb the hill above the river. The houses range from older streets near downtown to places farther out, and the haul-away work follows the house: appliances that quit, furniture that no longer fits, a packed garage, or a full estate cleanout.',
    detail:
      'Hill lots also mean yard debris and leftover remodel material. We are based in Molalla and schedule Oregon City from there. A photo of the load is the fastest way to get a price you can approve before we start.',
    hero: {
      webp: '/before-real.webp',
      jpg: '/before-real.jpg',
      width: 1200,
      height: 900,
      alt: 'Driveway full of household junk and debris before removal',
    },
  },
  {
    slug: 'junk-removal-salem',
    city: 'Salem',
    title: 'Junk Removal in Salem, OR | Bare Acre Hauling',
    description:
      'Junk removal in Salem, OR from Bare Acre Hauling in Molalla. Furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Salem, OR',
    lead:
      'Salem is the state capital, southwest of Molalla in Marion County. It spreads from the downtown streets out through residential neighborhoods, so a job might be one apartment’s worth of furniture or a whole house cleanout. We come down from Molalla for furniture removal, appliance haul-away, garage cleanouts, yard debris, and estate cleanouts.',
    detail:
      'Because Salem covers more ground than Molalla, a photo plus the cross street helps us price the trip before we roll. You still approve the price before anything is loaded.',
    hero: {
      webp: '/after.webp',
      jpg: '/after.jpg',
      width: 1050,
      height: 1400,
      alt: 'Cleared driveway after junk removal',
    },
  },
  {
    slug: 'junk-removal-keizer',
    city: 'Keizer',
    title: 'Junk Removal in Keizer, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal for Keizer, OR. Bare Acre Hauling is based in Molalla and hauls furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Keizer, OR',
    lead:
      'Keizer sits directly north of Salem, on the Marion County side of the Willamette and west of Molalla. Most of the town is houses, and the jobs match that: garages used as storage, couches and mattresses, old appliances, and yard debris from established lots.',
    detail:
      'When a Keizer home turns over, the same crew handles the estate or move-out cleanout. Bare Acre Hauling is veteran-owned and works from Molalla. Text a photo and we will price that load before we load it.',
    hero: {
      webp: '/crew-loading.webp',
      jpg: '/crew-loading.jpg',
      width: 1280,
      height: 853,
      alt: 'Crew loading appliances and furniture for haul-away',
    },
  },
];

export function townPath(slug: string) {
  return `/${slug}`;
}
