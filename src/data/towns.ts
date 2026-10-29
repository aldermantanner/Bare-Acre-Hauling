/**
 * Town landing pages.
 *
 * Hero photos: each town has a photoKey. Until a local photo exists, hero.webp
 * and hero.jpg point at a real job photo already on the site.
 *
 * To use a town photo, add both files:
 *   public/towns/<photoKey>.webp
 *   public/towns/<photoKey>.jpg
 * Then set that town's hero.webp and hero.jpg to /towns/<photoKey>.webp and
 * /towns/<photoKey>.jpg, and update width and height to the new file.
 */

export type TownHero = {
  webp: string;
  jpg: string;
  width: number;
  height: number;
  alt: string;
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

const CREW: TownHero = {
  webp: '/crew-loading.webp',
  jpg: '/crew-loading.jpg',
  width: 1280,
  height: 853,
  alt: 'Loading appliances and furniture onto the trailer',
};

const BEFORE: TownHero = {
  webp: '/before-real.webp',
  jpg: '/before-real.jpg',
  width: 1200,
  height: 900,
  alt: 'Household junk and debris piled before removal',
};

const AFTER: TownHero = {
  webp: '/after.webp',
  jpg: '/after.jpg',
  width: 1050,
  height: 1400,
  alt: 'A cleared driveway after junk removal',
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
    note: 'I-5, I-205, and the towns west of the Willamette. These are longer drives from Molalla.',
  },
];

export const TOWN_PAGES: TownPage[] = [
  {
    slug: 'junk-removal-molalla',
    photoKey: 'molalla',
    city: 'Molalla',
    placeType: 'City',
    group: 'home',
    nearby: ['junk-removal-mulino', 'junk-removal-beavercreek', 'junk-removal-canby'],
    title: 'Junk Removal in Molalla, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal based in Molalla, OR. Garage cleanouts, yard debris, rural property cleanups, and estate cleanouts. Jobs start at $150. Text a photo to 503-874-3705.',
    h1: 'Junk Removal in Molalla, OR',
    lead:
      'Molalla is home. The shop is here, downtown is a few minutes away, and OR-213 runs north through town toward Mulino while OR-211 heads east and west. Jobs in Molalla are the ones we start the day with: a garage on an in-town lot, furniture and appliances from a house near Main Street, yard debris, or a rural cleanup on acreage outside the grid.',
    detail:
      'Out toward the Molalla River the properties spread out, and the pile is often behind a shop or along a fence line rather than at the curb. Text a photo. Jobs start at $150, and you approve the price before we load.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-mulino',
    photoKey: 'mulino',
    city: 'Mulino',
    placeType: 'Place',
    group: 'home',
    nearby: ['junk-removal-molalla', 'junk-removal-beavercreek', 'junk-removal-oregon-city'],
    title: 'Junk Removal in Mulino, OR | Bare Acre Hauling',
    description:
      'Junk removal in Mulino, OR from a crew based a few miles south in Molalla. Rural property cleanups, garage cleanouts, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Mulino, OR',
    lead:
      'Mulino is the next community north of Molalla on OR-213, a short drive up the highway before the road continues toward Oregon City. It is mostly houses on larger lots and small acreage, not a downtown street grid. The loads match that: garage cleanouts, brush and yard debris, and junk cleared out of a shop or outbuilding.',
    detail:
      'Because Mulino sits on the same highway as our Molalla base, we can often take it on a day we are already running north. You still get a price from a photo, and nothing is loaded until you approve it.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-beavercreek',
    photoKey: 'beavercreek',
    city: 'Beavercreek',
    placeType: 'Place',
    group: 'home',
    nearby: ['junk-removal-oregon-city', 'junk-removal-estacada', 'junk-removal-molalla'],
    title: 'Junk Removal in Beavercreek, OR | Bare Acre Hauling',
    description:
      'Junk removal for Beavercreek, OR. Bare Acre Hauling is based in Molalla and hauls yard debris, garage cleanouts, and rural property junk. Jobs start at $150.',
    h1: 'Junk Removal in Beavercreek, OR',
    lead:
      'Beavercreek is rural Clackamas County northeast of Molalla, stretched along Beavercreek Road between the Oregon City side and the way out toward Estacada. Places sit apart from each other. What we haul there is usually yard debris, a shop or barn cleanup, or household junk that piled up on acreage.',
    detail:
      'From Molalla we go north on OR-213 and then east. The gate and the pile both matter on these lots, so a photo is how we price the job before we drive out.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-canby',
    photoKey: 'canby',
    city: 'Canby',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-molalla', 'junk-removal-hubbard', 'junk-removal-aurora'],
    title: 'Junk Removal in Canby, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal for Canby, OR, based in Molalla. Garage cleanouts, furniture, appliances, yard debris, and estate cleanouts. Jobs start at $150. Text a photo to 503-874-3705.',
    h1: 'Junk Removal in Canby, OR',
    lead:
      'Canby is just north of Molalla on the 99E side of Clackamas County, a mix of neighborhoods and acreage between our home base and Oregon City. Bare Acre Hauling drives up from Molalla for the loads people in Canby actually have: a garage that turned into storage, a washer and fridge that have to go, furniture after a move, and brush or yard debris from a cleanup.',
    detail:
      'Estate and move-out cleanouts are part of the same trip when a Canby house is changing hands. Text a photo of the pile. We reply with a price for that job, and you approve it before we load.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-oregon-city',
    photoKey: 'oregon-city',
    city: 'Oregon City',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-gladstone', 'junk-removal-west-linn', 'junk-removal-beavercreek'],
    title: 'Junk Removal in Oregon City, OR | Bare Acre Hauling',
    description:
      'Junk removal in Oregon City from a Molalla-based, veteran-owned crew. Appliances, furniture, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Oregon City, OR',
    lead:
      'Oregon City is the Clackamas County seat, north of Molalla where the Willamette runs and neighborhoods climb the hill above the river. The houses range from older streets near downtown to places farther out, and the haul-away work follows the house: appliances that quit, furniture that no longer fits, a packed garage, or a full estate cleanout.',
    detail:
      'Hill lots also mean yard debris and leftover remodel material. We are based in Molalla and schedule Oregon City from there, up OR-213. A photo of the load is the fastest way to get a price you can approve before we start.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-gladstone',
    photoKey: 'gladstone',
    city: 'Gladstone',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-oregon-city', 'junk-removal-milwaukie', 'junk-removal-west-linn'],
    title: 'Junk Removal in Gladstone, OR | Bare Acre Hauling',
    description:
      'Junk removal in Gladstone, OR by Bare Acre Hauling in Molalla. Garage cleanouts, appliances, furniture, and small estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Gladstone, OR',
    lead:
      'Gladstone sits between Oregon City and Milwaukie, near where the Clackamas River meets the Willamette. Portland Avenue and the blocks of houses between the rivers are close together. From Molalla the drive is OR-213 to Oregon City and a few minutes past it. The jobs are usually a garage, appliances, furniture, or a small move-out.',
    detail:
      'On these lots the junk is often in the garage, a basement, or the side yard rather than spread across acreage. Text a photo and we will price that pile before we come north.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-milwaukie',
    photoKey: 'milwaukie',
    city: 'Milwaukie',
    placeType: 'City',
    group: 'north',
    nearby: ['junk-removal-gladstone', 'junk-removal-happy-valley', 'junk-removal-lake-oswego'],
    title: 'Junk Removal in Milwaukie, OR | Bare Acre Hauling',
    description:
      'Junk removal in Milwaukie, OR from a Molalla-based crew. Furniture, appliances, garage cleanouts, and move-outs. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Milwaukie, OR',
    lead:
      'Milwaukie is farther north, on 99E, with a downtown by the Willamette and neighborhoods rising toward OR-224. It is one of the longer runs from Molalla: up OR-213, through Oregon City, and on past Gladstone. What we haul is furniture, appliances, a packed garage, or the contents of a move-out.',
    detail:
      'We book Milwaukie when the load fits the drive. A photo tells us that before we commit the truck for the morning.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-silverton',
    photoKey: 'silverton',
    city: 'Silverton',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-mt-angel', 'junk-removal-molalla', 'junk-removal-salem'],
    title: 'Junk Removal in Silverton, OR | Bare Acre Hauling',
    description:
      'Junk removal in Silverton, OR. Bare Acre Hauling drives down OR-213 from Molalla for garage cleanouts, furniture, appliances, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Silverton, OR',
    lead:
      'Silverton is south of Molalla on OR-213, with an older downtown and houses spreading toward the Oregon Garden side of town. The drive from our shop is about twenty minutes down that highway. We pick up garage cleanouts, furniture, appliances, yard debris, and estate cleanouts when a Silverton house is being emptied.',
    detail:
      'Silver Falls is farther east of town. We are hauling from homes and properties in and around Silverton, not from the park. Text a photo of what is actually on the ground and you approve the price before we load.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-mt-angel',
    photoKey: 'mt-angel',
    city: 'Mt. Angel',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-silverton', 'junk-removal-woodburn', 'junk-removal-hubbard'],
    title: 'Junk Removal in Mt. Angel, OR | Bare Acre Hauling',
    description:
      'Junk removal in Mt. Angel, OR from Bare Acre Hauling in Molalla. House and garage cleanouts, furniture, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Mt. Angel, OR',
    lead:
      'Mt. Angel is west of Silverton on OR-214, a small downtown with the abbey on the hill above it, between Silverton and Woodburn. From Molalla we take OR-213 south and cut over. The loads are the size of the town: a house cleanout, a garage, furniture, and yard debris on a residential lot.',
    detail:
      'The abbey and the festival grounds are landmarks on the hill, not a promise about where we have worked. If the junk is at a house in town, send a photo and we will price that job.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-woodburn',
    photoKey: 'woodburn',
    city: 'Woodburn',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-hubbard', 'junk-removal-molalla', 'junk-removal-mt-angel'],
    title: 'Junk Removal in Woodburn, OR | Bare Acre Hauling',
    description:
      'Junk removal in Woodburn, OR. Veteran-owned Bare Acre Hauling comes west on OR-211 from Molalla for furniture, appliances, garage cleanouts, and move-outs. Jobs start at $150.',
    h1: 'Junk Removal in Woodburn, OR',
    lead:
      'Woodburn is west of Molalla where OR-211 meets I-5. Downtown, the 99E corridor, and the neighborhoods around the outlet shops are different kinds of stops: a house garage, a rental move-out, or furniture and appliances stacked by a driveway. The drive from Molalla is about twenty minutes on 211.',
    detail:
      'Estate cleanouts come up when an older house in town turns over. Send a photo so we know if it is one garage or a full load before we head west.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-hubbard',
    photoKey: 'hubbard',
    city: 'Hubbard',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-woodburn', 'junk-removal-aurora', 'junk-removal-canby'],
    title: 'Junk Removal in Hubbard, OR | Bare Acre Hauling',
    description:
      'Junk removal in Hubbard, OR by a Molalla-based crew. Garage cleanouts, appliances, and yard debris along 99E. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Hubbard, OR',
    lead:
      'Hubbard is a small Marion County town on 99E, south of Aurora and north of Woodburn. From Molalla we take OR-211 west into Woodburn and a short hop up the highway. Most of the work is houses and the acreage at the edge of town: a garage cleanout, appliances, and yard debris.',
    detail:
      'It is not a long trip from our shop. You get a price from the photo, and we load only after you approve it.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-aurora',
    photoKey: 'aurora',
    city: 'Aurora',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-hubbard', 'junk-removal-canby', 'junk-removal-wilsonville'],
    title: 'Junk Removal in Aurora, OR | Bare Acre Hauling',
    description:
      'Junk removal in Aurora, OR from Bare Acre Hauling in Molalla. Estate cleanouts, furniture, garage loads, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Aurora, OR',
    lead:
      'Aurora’s old downtown sits on 99E, with the colony-era houses and antique shops along the highway and homes on the streets behind them. It is north of Hubbard and south of Canby. From Molalla we come across to 99E. Older houses often mean furniture and estate cleanouts. Newer streets mean garage loads and yard debris.',
    detail:
      'The highway frontage and a back-street driveway are different jobs. A photo shows which one you have, and you approve the price before we load.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-salem',
    photoKey: 'salem',
    city: 'Salem',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-keizer', 'junk-removal-silverton', 'junk-removal-woodburn'],
    title: 'Junk Removal in Salem, OR | Bare Acre Hauling',
    description:
      'Junk removal in Salem, OR from Bare Acre Hauling in Molalla. Furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Salem, OR',
    lead:
      'Salem is the state capital, southwest of Molalla in Marion County. It spreads from the downtown streets out through residential neighborhoods, so a job might be one apartment’s worth of furniture or a whole house cleanout. We come down from Molalla for furniture removal, appliance haul-away, garage cleanouts, yard debris, and estate cleanouts.',
    detail:
      'Because Salem covers more ground than Molalla, a photo plus the cross street helps us price the trip before we roll. You still approve the price before anything is loaded.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-keizer',
    photoKey: 'keizer',
    city: 'Keizer',
    placeType: 'City',
    group: 'south',
    nearby: ['junk-removal-salem', 'junk-removal-woodburn', 'junk-removal-silverton'],
    title: 'Junk Removal in Keizer, OR | Bare Acre Hauling',
    description:
      'Veteran-owned junk removal for Keizer, OR. Bare Acre Hauling is based in Molalla and hauls furniture, appliances, garage cleanouts, yard debris, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Keizer, OR',
    lead:
      'Keizer sits directly north of Salem, on the Marion County side of the Willamette and west of Molalla. Most of the town is houses, and the jobs match that: garages used as storage, couches and mattresses, old appliances, and yard debris from established lots.',
    detail:
      'When a Keizer home turns over, the same crew handles the estate or move-out cleanout. Bare Acre Hauling is veteran-owned and works from Molalla. Text a photo and we will price that load before we load it.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-estacada',
    photoKey: 'estacada',
    city: 'Estacada',
    placeType: 'City',
    group: 'east',
    nearby: ['junk-removal-sandy', 'junk-removal-beavercreek', 'junk-removal-molalla'],
    title: 'Junk Removal in Estacada, OR | Bare Acre Hauling',
    description:
      'Junk removal in Estacada, OR. Bare Acre Hauling drives east from Molalla on OR-211 for garage cleanouts, yard debris, and rural property cleanups. Jobs start at $150.',
    h1: 'Junk Removal in Estacada, OR',
    lead:
      'Estacada is east of Molalla. OR-211 leaves town toward the Clackamas River, and OR-224 carries you into Estacada proper. Downtown is small, and a lot of the properties on the way in are acreage or houses set back from the road. We haul garage cleanouts, yard debris, and junk from shops and outbuildings.',
    detail:
      'The drive from Molalla on 211 is roughly half an hour. Estate cleanouts come up when a house in town is being cleared. Text a photo before we head east so the price is set for that load.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-sandy',
    photoKey: 'sandy',
    city: 'Sandy',
    placeType: 'City',
    group: 'east',
    nearby: ['junk-removal-estacada', 'junk-removal-happy-valley', 'junk-removal-molalla'],
    title: 'Junk Removal in Sandy, OR | Bare Acre Hauling',
    description:
      'Junk removal in Sandy, OR from Molalla. Furniture, appliances, garage cleanouts, and yard debris for a longer drive up OR-211 to US-26. Jobs start at $150.',
    h1: 'Junk Removal in Sandy, OR',
    lead:
      'Sandy is where OR-211 from Molalla meets US-26, at the base of the Mount Hood highway. Downtown Sandy and the streets off the highway are a longer haul than Estacada. We take furniture, appliances, garage cleanouts, and yard debris when the load is worth the trip.',
    detail:
      'Places between Estacada and Sandy along 211 are the same kind of rural cleanup: brush, an outbuilding, and household junk that accumulated. Send a photo. You approve the price before we load.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-wilsonville',
    photoKey: 'wilsonville',
    city: 'Wilsonville',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-tualatin', 'junk-removal-canby', 'junk-removal-west-linn'],
    title: 'Junk Removal in Wilsonville, OR | Bare Acre Hauling',
    description:
      'Junk removal in Wilsonville, OR. A Molalla-based, veteran-owned crew hauls furniture, appliances, and garage cleanouts. Jobs start at $150. You approve the price before we load.',
    h1: 'Junk Removal in Wilsonville, OR',
    lead:
      'Wilsonville is north of Canby, where I-5 crosses the Willamette. Villebois is on the west side, older streets sit nearer the river, and Wilsonville Road carries the commercial strip. From Molalla we come up through the Canby side, on the order of half an hour. The work is apartment and house furniture, appliances, garage cleanouts, and move-outs.',
    detail:
      'We are not based on I-5. The photo and the nearest cross street tell us whether the load fits a run north from Molalla.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-west-linn',
    photoKey: 'west-linn',
    city: 'West Linn',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-oregon-city', 'junk-removal-lake-oswego', 'junk-removal-wilsonville'],
    title: 'Junk Removal in West Linn, OR | Bare Acre Hauling',
    description:
      'Junk removal in West Linn, OR from Bare Acre Hauling in Molalla. Garage cleanouts, furniture, appliances, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in West Linn, OR',
    lead:
      'West Linn is north of Oregon City along the Willamette. Bolton and the Willamette neighborhood sit down by the river, and houses climb toward I-205 and OR-43. From Molalla we take OR-213 north through Oregon City and then into West Linn, about half an hour or a little more. Sloped lots mean yard debris as well as garage cleanouts, furniture, and appliances.',
    detail:
      'Estate cleanouts show up in the older parts of town. The price you approve is the price before we carry anything out.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-happy-valley',
    photoKey: 'happy-valley',
    city: 'Happy Valley',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-milwaukie', 'junk-removal-sandy', 'junk-removal-west-linn'],
    title: 'Junk Removal in Happy Valley, OR | Bare Acre Hauling',
    description:
      'Junk removal in Happy Valley, OR. Bare Acre Hauling comes north from Molalla for garage cleanouts, furniture, appliances, and yard debris. Jobs start at $150.',
    h1: 'Junk Removal in Happy Valley, OR',
    lead:
      'Happy Valley is east of I-205, newer subdivisions off Sunnyside Road and 172nd, uphill from the Clackamas area. From Molalla we drive north and then east of Oregon City. The calls are garage cleanouts in those subdivisions, furniture after a move, appliances, and yard debris on newer lots.',
    detail:
      'It is a longer drive than Canby or Oregon City, roughly 35 to 40 minutes. Text a photo so the quote includes getting there, and approve it before we load.',
    hero: AFTER,
  },
  {
    slug: 'junk-removal-tualatin',
    photoKey: 'tualatin',
    city: 'Tualatin',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-wilsonville', 'junk-removal-lake-oswego', 'junk-removal-newberg'],
    title: 'Junk Removal in Tualatin, OR | Bare Acre Hauling',
    description:
      'Junk removal in Tualatin, OR from a veteran-owned crew in Molalla. Furniture, appliances, garage cleanouts, and move-outs. Jobs start at $150.',
    h1: 'Junk Removal in Tualatin, OR',
    lead:
      'Tualatin is northwest of Molalla on the I-5 side, past Wilsonville, along Tualatin-Sherwood Road and the downtown blocks by the Tualatin River. We haul furniture, appliances, garage cleanouts, and move-outs from houses and townhouses there.',
    detail:
      'The trip from Molalla is a real drive, not a neighboring street. A photo is how we decide the load is worth rolling northwest, and you approve the price before we load.',
    hero: CREW,
  },
  {
    slug: 'junk-removal-lake-oswego',
    photoKey: 'lake-oswego',
    city: 'Lake Oswego',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-west-linn', 'junk-removal-tualatin', 'junk-removal-milwaukie'],
    title: 'Junk Removal in Lake Oswego, OR | Bare Acre Hauling',
    description:
      'Junk removal in Lake Oswego, OR. Bare Acre Hauling is based in Molalla and hauls furniture, appliances, garage cleanouts, and estate cleanouts. Jobs start at $150.',
    h1: 'Junk Removal in Lake Oswego, OR',
    lead:
      'Lake Oswego is northwest of Molalla: OR-43 along the Willamette, downtown beside the lake, and neighborhoods such as Mountain Park up the hill. We get there past West Linn, a longer northbound trip from the shop. The hauls are furniture, appliances, a garage that filled up, or an estate cleanout.',
    detail:
      'The quote is for the pile in the photo, not for the zip code. You approve it before we load.',
    hero: BEFORE,
  },
  {
    slug: 'junk-removal-newberg',
    photoKey: 'newberg',
    city: 'Newberg',
    placeType: 'City',
    group: 'metro',
    nearby: ['junk-removal-woodburn', 'junk-removal-wilsonville', 'junk-removal-tualatin'],
    title: 'Junk Removal in Newberg, OR | Bare Acre Hauling',
    description:
      'Junk removal in Newberg, OR from Molalla. Furniture, appliances, garage cleanouts, yard debris, and estate cleanouts across the river on 99W. Jobs start at $150.',
    h1: 'Junk Removal in Newberg, OR',
    lead:
      'Newberg is west of the Willamette in Yamhill County, on OR-99W. Downtown and the residential streets around it, including the hill toward George Fox, are a different direction from our usual OR-213 runs. From Molalla we go west toward Woodburn and across, or up through the Wilsonville side. We haul furniture, appliances, garage cleanouts, yard debris, and estate cleanouts.',
    detail:
      'It is not next door to the shop. A photo lets us price the miles and the load together before we commit to the trip.',
    hero: AFTER,
  },
];

export function townPath(slug: string) {
  return `/${slug}`;
}

export function townBySlug(slug: string) {
  return TOWN_PAGES.find((town) => town.slug === slug);
}
