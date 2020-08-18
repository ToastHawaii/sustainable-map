export const filters: {
  id: number;
  group: string;
  subgroup?: string;
  order?: number;
  value: string;
  icon: string;
  button?: string;
  query: string;
  color: string;
  edit: string[];
  tags: string[];
}[] = [
  {
    id: 0,
    group: "culture",
    value: "artwork",
    icon: "https://wiki.openstreetmap.org/w/images/1/12/Artwork-14.svg",
    query: `
nwr["tourism"="artwork"]&part;`,
    color: "#F4A460",
    tags: ["tourism=artwork"],
    edit: ["tourism=artwork"]
  },
  {
    id: 1,
    group: "culture",
    value: "fountain",
    icon: "https://wiki.openstreetmap.org/w/images/a/a1/Fountain-14.svg",
    query: `
nwr["amenity"="fountain"]&part;
nwr["playground"="splash_pad"]&part;`,
    color: "#00FFFF",
    tags: ["amenity=fountain", "playground=splash_pad"],
    edit: ["amenity=fountain", "playground"]
  },
  {
    id: 2,
    group: "culture",
    value: "tourist-attraction",
    icon: "/lib/maki-icons/attraction-15.svg",
    query: `
  nwr["tourism"="attraction"]["attraction"!="animal"]["attraction"!="maze"]&part;
  nwr["tourism"="yes"]&part;

  nwr["heritage"]&part;`,
    color: "#FFD700",
    tags: ["tourism=attraction", "tourism=*", "heritage=*"],
    edit: [
      "tourism=attraction",
      "tourism",
      "building",
      "leisure=park",
      "leisure=garden",
      "man_made"
    ]
  },
  {
    id: 3,
    group: "culture",
    value: "archaeological-site",
    icon:
      "https://wiki.openstreetmap.org/w/images/7/7d/Archaeological-site-16.svg",
    query: `
      nwr["historic"="archaeological_site"]&part;
      nwr["geological"="palaeontological_site"]&part;`,
    color: "#F4A460",
    tags: ["historic=archaeological_site", "geological=palaeontological_site"],
    edit: ["historic=archaeological_site"]
  },
  {
    id: 4,
    group: "education",
    value: "trail",
    icon: "https://wiki.openstreetmap.org/w/images/7/77/Board-14.svg",
    query: `
      nw["information"="board"]["board_type"~"wildlife|plants|geology|nature|planet_walk|astronomy|forestry|botany|biology|birds|tree|panorama|agriculture|science|technology"]&part;
      nw["information"="nature"]&part;
      nw["information"="wild_life"]&part;
      nw["information"="wildlife"]&part;
      relation["type"="route"]["educational"="yes"]&part;
      relation["route"="educational_trail"]&part;`,
    color: "#222222",
    tags: [
      "educational=yes",
      "route=educational_trail",
      "board_type=wildlife",
      "board_type=plants",
      "board_type=geology",
      "board_type=nature",
      "board_type=planet_walk",
      "board_type=astronomy",
      "board_type=forestry",
      "board_type=botany",
      "board_type=biology",
      "board_type=birds",
      "board_type=tree",
      "board_type=panorama",
      "board_type=science",
      "board_type=technology"
    ],
    edit: ["tourism=information", "type=route"]
  },
  {
    id: 5,
    group: "education",
    value: "books",
    icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
    query: `
// Get
nw["shop"="books"]["second_hand"~"^(yes|only)$"];
nw["shop"="books"]["books"="antiquarian"];
nw["amenity"="public_bookcase"]; // Get, Borrow, Give

// Borrow
nw["amenity"="library"];
nw["amenity"="mobile_library"];

// Recycle
nw["recycling:books"="yes"];`,
    color: "#A0522D",
    tags: [
      "shop=books",
      "amenity=public_bookcase",
      "amenity=library",
      "amenity=mobile_library",
      "recycling:books=yes"
    ],
    edit: [
      "shop=books",
      "amenity=public_bookcase",
      "amenity=library",
      "amenity=recycling"
    ]
  },
  {
    id: 6,
    group: "education",
    subgroup: "books",
    order: 1,
    value: "books-get",
    icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
nw["shop"="books"]["second_hand"~"^(yes|only)$"];
nw["shop"="books"]["books"="antiquarian"];
nw["amenity"="public_bookcase"];`,
    color: "#A0522D",
    tags: ["shop=books", "amenity=public_bookcase"],
    edit: ["shop=books", "amenity=public_bookcase"]
  },
  {
    id: 7,
    group: "education",
    subgroup: "books",
    order: 2,
    value: "books-borrow",
    icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
    button: "fas fa-undo-alt",
    query: `
nw["amenity"="library"];
nw["amenity"="mobile_library"];

nw["amenity"="public_bookcase"];`,
    color: "#A0522D",
    tags: [
      "amenity=library",
      "amenity=mobile_library",
      "amenity=public_bookcase"
    ],
    edit: ["amenity=library", "amenity=public_bookcase"]
  },
  {
    id: 8,
    group: "education",
    subgroup: "books",
    order: 3,
    value: "books-give",
    icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
    button: "fas fa-sync-alt",
    query: `
nw["amenity"="public_bookcase"];`,
    color: "#A0522D",
    tags: ["amenity=public_bookcase"],
    edit: ["amenity=public_bookcase"]
  },
  {
    id: 9,
    group: "education",
    subgroup: "books",
    order: 4,
    value: "books-recycle",
    icon: "https://wiki.openstreetmap.org/w/images/1/18/Books-16.svg",
    button: "fas fa-recycle",
    query: `
nw["recycling:books"="yes"];`,
    color: "#A0522D",
    tags: ["recycling:books=yes"],
    edit: ["amenity=recycling"]
  },
  {
    id: 10,
    group: "education",
    value: "internet",
    icon: "https://wiki.openstreetmap.org/w/images/8/89/Internet_cafe-14.svg",
    query: `
         nwr["internet_access"]["internet_access"!="no"]["internet_access:fee"!~"^(customers|yes)$"]&part;

         nwr["wifi"]["wifi"!="no"]&part;`,
    color: "#FF1493",
    tags: ["internet_access=*", "wifi=*"],
    edit: ["amenity", "shop"]
  },
  {
    id: 11,
    group: "culture",
    value: "castle",
    icon: "https://wiki.openstreetmap.org/w/images/3/31/Fortress-14.svg",
    query: `
  nwr["historic"="castle"][!"ruins"]&part;
  nwr["historic"="castle"]["ruins"="no"]&part;

  nwr["historic"="tower"][!"ruins"]&part;
  nwr["historic"="tower"]["ruins"="no"]&part;

  nwr["historic"="fort"][!"ruins"]&part;
  nwr["historic"="fort"]["ruins"="no"]&part;`,
    color: "#808080",
    tags: ["historic=castle", "historic=tower", "historic=fort"],
    edit: ["historic=castle", "historic=fort", "historic"]
  },
  {
    id: 12,
    group: "culture",
    value: "mill",
    icon: "https://wiki.openstreetmap.org/w/images/0/0b/Windmill-16.svg",
    query: `
  nwr["man_made"="watermill"][!"ruins"]&part;
  nwr["man_made"="watermill"]["ruins"="no"]&part;

  nwr["man_made"="windmill"][!"ruins"]&part;
  nwr["man_made"="windmill"]["ruins"="no"]&part;`,
    color: "#e63d00",
    tags: ["man_made=watermill", "man_made=windmill"],
    edit: ["man_made=watermill", "man_made=windmill"]
  },
  {
    id: 13,
    group: "culture",
    value: "history",
    icon: "https://wiki.openstreetmap.org/w/images/c/c8/Acheological.png",
    query: `
  nwr["historic"]["historic"!~"^(castle|tower|fort|ruins|memorial|monument|archaeological_site)$"]["building"!="bunker"]["military"!="bunker"]&part;

  nw["board_type"="history"]&part;
  nw["information"="history"]&part;`,
    color: "#e0e094",
    tags: ["historic=*", "board_type=history"],
    edit: ["historic", "tourism=information"]
  },
  {
    id: 14,
    group: "culture",
    value: "memorial",
    icon: "https://wiki.openstreetmap.org/w/images/6/6e/Memorial-16.svg",
    query: `
  nwr["historic"="memorial"]&part;`,
    color: "#B8860B",
    tags: ["historic=memorial"],
    edit: ["historic=memorial"]
  },
  {
    id: 15,
    group: "culture",
    value: "monument",
    icon: "https://wiki.openstreetmap.org/w/images/9/94/Monument-16.svg",
    query: `
  nwr["historic"="monument"]&part;`,
    color: "#DAA520",
    tags: ["historic=monument"],
    edit: ["historic=monument"]
  },
  {
    id: 16,
    group: "education",
    value: "museum",
    icon: "https://wiki.openstreetmap.org/w/images/a/a9/Museum-16.svg",
    query: `
      nwr["tourism"="museum"]&free;
     nw["tourism"="gallery"]&free;
     nw["amenity"="arts_centre"]&free;`,
    color: "#DCDCDC",
    tags: ["tourism=museum", "tourism=gallery", "amenity=arts_centre"],
    edit: ["tourism=museum", "tourism=gallery", "amenity=arts_centre"]
  },
  {
    id: 17,
    group: "education",
    value: "observatory",
    icon: "https://wiki.openstreetmap.org/w/images/e/e0/Telescope_dome-14.svg",
    query: `
  nwr["man_made"="observatory"]&free;
  nwr["amenity"="observatory"]&free;
  nwr["landuse"="observatory"]&free;`,
    color: "#00008B",
    tags: ["man_made=observatory"],
    edit: ["man_made=observatory", "landuse"]
  },
  {
    id: 18,
    group: "culture",
    value: "ruins",
    icon:
      "https://wiki.openstreetmap.org/w/images/7/78/Building_ruins_generic.svg",
    query: `
  nwr["historic"="ruins"]&part;

  nwr["ruins"]["ruins"!="no"]&part;

  nwr["building"="ruins"]&part;`,
    color: "#A9A9A9",
    tags: ["historic=ruins", "building=ruins", "ruins=*"],
    edit: ["historic=ruins", "building=ruins", "historic", "building"]
  },
  {
    id: 19,
    group: "natural",
    value: "cave",
    icon: "https://wiki.openstreetmap.org/w/images/b/b1/Cave.14.svg",
    query: `
  nw["natural"="cave_entrance"]&part;`,
    color: "#2F4F4F",
    tags: ["natural=cave_entrance"],
    edit: ["natural=cave_entrance"]
  },
  {
    id: 20,
    group: "natural",
    value: "natural_monument",
    icon: "/lib/maki-icons/park-15.svg",
    query: `
      nw["denotation"~"^(natural_monument|landmark|religious|memorial)$"]&part;

      node["natural"="tree"]["religion"]&part;
      way["natural"="tree_row"]["religion"]&part;

      node["natural"="tree"]["historic"]&part;
      way["natural"="tree_row"]["historic"]&part;`,
    color: "#228B22",
    tags: ["denotation=natural_monument", "denotation=landmark"],
    edit: ["natural=tree", "natural=tree_row", "natural"]
  },
  {
    id: 21,
    group: "natural",
    value: "pond",
    icon: "/lib/maki-icons/water-15.svg",
    query: `
  nwr["natural"="water"]["water"~"^(pond|lake|reservoir|reflecting_pool)$"]&part;`,
    color: "#5F9EA0",
    tags: [
      "natural=water",
      "water=pond",
      "water=lake",
      "water=reservoir",
      "water=reflecting_pool"
    ],
    edit: ["natural=water"]
  },
  {
    id: 22,
    group: "natural",
    value: "rock",
    icon: "/lib/maki-icons/circle-15.svg",
    query: `
  nwr["natural"~"^(rock|stone)$"]&part;`,
    color: "#D3D3D3",
    tags: ["natural=rock", "natural=stone"],
    edit: ["natural=rock", "natural=stone"]
  },
  {
    id: 23,
    group: "natural",
    value: "viewpoint",
    icon: "https://wiki.openstreetmap.org/w/images/c/c2/Viewpoint-16.svg",
    query: `
  nwr["tourism"="viewpoint"]&part;
  nw["viewpoint"="yes"]&part;

  nwr["tower:type"="observation"]&part;`,
    color: "#98FB98",
    tags: ["tourism=viewpoint", "viewpoint=*", "tower:type=observation"],
    edit: ["tourism=viewpoint", "man_made=tower", "man_made", "natural"]
  },
  {
    id: 24,
    group: "natural",
    value: "waterfall",
    icon: "https://wiki.openstreetmap.org/w/images/7/72/Waterfall-14.svg",
    query: `
  nwr["waterway"~"^(waterfall|dam|weir)$"]&part;`,
    color: "#20B2AA",
    tags: ["waterway=waterfall", "waterway=dam", "waterway=weir"],
    edit: ["waterway=waterfall", "waterway=dam", "waterway=weir"]
  },
  {
    id: 25,
    group: "community",
    value: "assistance",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
      nwr["social_facility"="outreach"];
      nwr["social_facility:for"~"community|all"];

      nwr["amenity"="social_centre"];

     nw["healthcare"]&free;`,
    color: "#DC143C",
    tags: ["social_facility=outreach", "amenity=social_centre", "healthcare"],
    edit: ["amenity=social_facility", "amenity=social_centre", "healthcare"]
  },
  // {
  //   id: 137,
  //   group: "community",
  //   subgroup: "assistance",
  //   value: "assistance-senior",
  //   button: "fas fa-blind",
  //   icon:
  //     "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
  //   query: `
  //     nwr["social_facility:for"~"senior|elderly"];`,
  //   color: "#DC143C",
  //   tags: ["social_facility"],
  //   edit: ["amenity=social_facility"]
  // },
  {
    id: 138,
    group: "community",
    subgroup: "assistance",
    value: "assistance-disabled",
    button: "fab fa-accessible-icon",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
      nwr["social_facility:for"~"disabled|mental_health|diseased"];`,
    color: "#DC143C",
    tags: ["social_facility"],
    edit: ["amenity=social_facility"]
  },
  {
    id: 139,
    group: "community",
    subgroup: "assistance",
    value: "assistance-homeless",
    button: "fas fa-angle-up",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
      nwr["social_facility:for"~"homeless|underprivileged|drug_addicted|unemployed"];`,
    color: "#DC143C",
    tags: ["social_facility"],
    edit: ["amenity=social_facility"]
  },
  {
    id: 140,
    group: "community",
    subgroup: "assistance",
    value: "assistance-migrant",
    button: "fas fa-running",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
      nwr["social_facility:for"~"migrant|refugees|refugee|displaced|migrants"];
      nwr["emergency:social_facility:for"~"displaced"];`,
    color: "#DC143C",
    tags: ["social_facility"],
    edit: ["amenity=social_facility"]
  },
  {
    id: 141,
    group: "community",
    subgroup: "assistance",
    value: "assistance-female",
    button: "fas fa-female",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
      nwr["social_facility:for"~"woman|women",i];`,
    color: "#DC143C",
    tags: ["social_facility"],
    edit: ["amenity=social_facility"]
  },
  // {
  //   id: 142,
  //   group: "community",
  //   subgroup: "assistance",
  //   value: "assistance-male",
  //   button: "fas fa-male",
  //   icon:
  //     "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
  //   query: `
  //     nwr["social_facility:for"~"men"];`,
  //   color: "#DC143C",
  //   tags: ["social_facility"],
  //   edit: ["amenity=social_facility"]
  // },
  {
    id: 143,
    group: "community",
    subgroup: "assistance",
    value: "assistance-children",
    button: "fas fa-child",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
      nwr["social_facility:for"~"child|juvenile|orphan|children|youth"];`,
    color: "#DC143C",
    tags: ["social_facility"],
    edit: ["amenity=social_facility"]
  },
  {
    id: 26,
    group: "community",
    value: "assisted-repair",
    icon: "/lib/temaki-icons/tools.svg",
    query: `
  node["repair"="assisted_self_service"];

  nw["leisure"="hackerspace"]["repair"];

  node["network"~"Repair Caf[eé]",i];
  node["name"~"Repair Caf[eé]",i];
  node["brand"~"Repair Caf[eé]",i];`,
    color: "#1975ae",
    tags: ["repair=assisted_self_service", "leisure=hackerspace", "repair=*"],
    edit: ["amenity", "leisure=hackerspace"]
  },
  {
    id: 27,
    group: "goods",
    value: "barbecue",
    icon: "https://wiki.openstreetmap.org/w/images/5/50/Bbq-14.svg",
    query: `
  nwr["amenity"="bbq"]&part;
  nwr["bbq"="yes"]&part;
  nwr["barbecue_grill"="yes"]&part;`,
    color: "#708090",
    tags: ["amenity=bbq", "bbq=*"],
    edit: ["amenity=bbq", "tourism"]
  },
  {
    id: 28,
    group: "goods",
    value: "baking-oven",
    icon: "https://wiki.openstreetmap.org/w/images/f/fe/Bakery-16.svg",
    query: `
      nw["amenity"="baking_oven"][!"historic"]&part;

      nw["building"="bakehouse"]["disused:amenity"!="baking_oven"]["disused:amenity"!="oven"][!"disused:oven"]["abandoned:amenity"!="baking_oven"]["abandoned:amenity"!="oven"][!"abandoned:oven"][!"shop"][!"historic"]&part;`,
    color: "#D2B48C",
    tags: ["amenity=baking_oven", "building=bakehouse"],
    edit: ["amenity", "building"]
  },
  {
    id: 29,
    group: "mobility",
    value: "bicycle-self-repair",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/01/Bicycle_repair_station-14.svg",
    query: `
      nw["amenity"="bicycle_repair_station"]["service:bicycle:tools"!="no"];

      node["repair"="assisted_self_service"]["service:bicycle:repair"="yes"];
      node["repair"="assisted_self_service"]["bicycle:repair"="yes"];

      nw["service:bicycle:tools"="yes"];
      nw["service:bicycle:diy"="yes"];`,
    color: "#4682B4",
    tags: [
      "amenity=bicycle_repair_station",
      "repair=assisted_self_service",
      "service:bicycle:repair=*",
      "bicycle:repair=*",
      "service:bicycle:diy=*"
    ],
    edit: ["amenity=bicycle_repair_station", "amenity", "shop"]
  },
  {
    id: 30,
    group: "mobility",
    value: "charging-station",
    icon:
      "https://wiki.openstreetmap.org/w/images/a/af/Charging_station.16.svg",
    query: `
      nw["amenity"="charging_station"];`,
    color: "#0092da",
    tags: ["amenity=charging_station"],
    edit: ["amenity=charging_station"]
  },
  {
    id: 31,
    group: "community",
    value: "community-centre",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/0b/Community_centre-14.svg",
    query: `
  nwr["amenity"="community_centre"];`,
    color: "#da532c",
    tags: ["amenity=community_centre"],
    edit: ["amenity=community_centre"]
  },
  {
    id: 136,
    group: "community",
    value: "scout",
    icon: "https://wiki.openstreetmap.org/w/images/e/e4/Camping.16.svg",
    query: `
    nwr["club"="scout"];
    nwr["scout"="yes"];`,
    color: "#CD853F",
    tags: ["club=scout", "scout=yes"],
    edit: ["club=scout", "tourism=camp_site"]
  },
  {
    id: 32,
    group: "community",
    value: "community-garden",
    icon: "/lib/maki-icons/garden-centre-15.svg",
    query: `
nwr["garden:type"="community"];

nw["landuse"="community_food_growing"];`,
    color: "#228B22",
    tags: ["garden:type=community", "landuse=community_food_growing"],
    edit: ["leisure=garden"]
  },
  {
    id: 33,
    group: "food",
    value: "grow",
    icon: "/lib/maki-icons/garden-centre-15.svg",
    query: `
nwr["landuse"="allotments"];

nwr["garden:type"="community"];

nw["landuse"="community_food_growing"];`,
    color: "#228B22",
    tags: [
      "landuse=allotments",
      "garden:type=community",
      "landuse=community_food_growing"
    ],
    edit: ["landuse=allotments", "leisure=garden"]
  },
  {
    id: 34,
    group: "food",
    value: "grocery",
    icon: "https://wiki.openstreetmap.org/w/images/9/96/Convenience-14.svg",
    query: `
    nw["shop"~"^(supermarket|convenience|health_food|pasta|deli|wholesale|grocery|food|frozen_food|spices)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
    nw["shop"~"^(farm|greengrocer|organic|dairy)$"];
    nw["amenity"="vending_machine"]["vending"~"food"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
    nw["amenity"="vending_machine"]["vending"~"eggs"];
    nw["amenity"="marketplace"];
    nw["craft"="pasta"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
    nw["shop"="yes"]["organic"~"^(yes|only)$"];`,
    color: "#ac39ac",
    tags: [
      "shop=supermarket",
      "shop=convenience",
      "shop=farm",
      "amenity=marketplace"
    ],
    edit: [
      "shop=supermarket",
      "shop=convenience",
      "shop=farm",
      "amenity=marketplace"
    ]
  },
  {
    id: 35,
    group: "food",
    value: "plant",
    icon: "https://wiki.openstreetmap.org/w/images/6/69/Florist-16.svg",
    query: `
    nw["shop"~"^(florist|garden_centre|agrarian)$"][~"^(regional|fair_trade|organic|second_hand)$"~"^(yes|only)$"];
    nw["amenity"="vending_machine"]["vending"~"flowers"][~"^(regional|fair_trade|organic|second_hand)$"~"^(yes|only)$"];
    nw["craft"="gardener"][~"^(regional|fair_trade|organic|second_hand)$"~"^(yes|only)$"];`,
    color: "#DAC01A",
    tags: [
      "shop=florist",
      "shop=garden_centre",
      "shop=agrarian",
      "amenity=vending_machine",
      "craft=gardener"
    ],
    edit: [
      "shop=florist",
      "shop=garden_centre",
      "shop=agrarian",
      "amenity=vending_machine",
      "craft=gardener"
    ]
  },
  {
    id: 36,
    group: "food",
    value: "sweets",
    icon: "https://wiki.openstreetmap.org/w/images/c/cc/Confectionery-14.svg",
    query: `
nw["shop"~"^(confectionery|chocolate|honey|ice_cream|pastry)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["amenity"="vending_machine"]["vending"~"sweets|ice_cream"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["craft"~"^(beekeeper|honey)$"];
nw["craft"="confectionery"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];`,
    color: "#FFC0CB",
    tags: [
      "shop=confectionery",
      "shop=chocolate",
      "shop=ice_cream",
      "shop=pastry",
      "craft=beekeeper"
    ],
    edit: ["shop=confectionery", "shop=pastry", "craft=beekeeper"]
  },
  {
    id: 37,
    group: "food",
    value: "baked-goods",
    icon: "/lib/maki-icons/bakery-15.svg",
    query: `
nw["shop"="bakery"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["amenity"="vending_machine"]["vending"~"bread|pizza"];`,
    color: "#D2B48C",
    tags: ["shop=bakery"],
    edit: ["shop=bakery"]
  },
  {
    id: 38,
    group: "food",
    value: "dairy",
    icon: "https://wiki.openstreetmap.org/w/images/0/0e/Dairy.svg",
    query: `
nw["shop"~"^(cheese|dairy)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["craft"="cheese_maker"];
nw["amenity"="vending_machine"]["vending"~"milk"];`,
    color: "#ffdb4d",
    tags: ["shop=cheese", "shop=dairy", "craft=cheese_maker", "vending=milk"],
    edit: ["shop=cheese", "shop=dairy", "craft", "amenity=vending_machine"]
  },
  {
    id: 39,
    group: "food",
    value: "meat",
    icon: "https://wiki.openstreetmap.org/w/images/b/b8/Butcher.svg",
    query: `
nw["shop"~"^(butcher|seafood)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];`,
    color: "#DC143C",
    tags: ["shop=butcher", "shop=seafood"],
    edit: ["shop=butcher", "shop=seafood"]
  },
  {
    id: 40,
    group: "food",
    value: "vegetable",
    icon: "https://wiki.openstreetmap.org/w/images/d/d8/Greengrocer-14.svg",
    query: `
    nw["shop"="greengrocer"][!"origin"];
    nw["shop"="greengrocer"]["origin"="regional"];`,
    color: "#32CD32",
    tags: ["shop=greengrocer"],
    edit: ["shop=greengrocer"]
  },
  {
    id: 41,
    group: "food",
    value: "beverages",
    icon: "https://wiki.openstreetmap.org/w/images/e/eb/Alcohol-16.svg",
    query: `
nw["shop"~"^(beverages|wine|alcohol|tea|drinks)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
nw["craft"~"^(winery|distillery|brewery)$"];
nw["amenity"="vending_machine"]["vending"~"milk"];
nw["amenity"="vending_machine"]["vending"~"drinks"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];`,
    color: "#cc0000",
    tags: [
      "shop=beverages",
      "shop=wine",
      "shop=alcohol",
      "shop=tea",
      "craft=winery",
      "craft=distillery",
      "craft=brewery",
      "vending=milk"
    ],
    edit: [
      "shop=beverages",
      "shop=wine",
      "shop=alcohol",
      "shop=tea",
      "craft=winery",
      "craft=distillery",
      "craft=brewery",
      "amenity=vending_machine"
    ]
  },
  {
    id: 42,
    group: "health",
    value: "diaper-changing-table",
    icon: "https://wiki.openstreetmap.org/w/images/f/ff/Babycare_01.png",
    query: `
  nwr["changing_table"]["changing_table"!="no"]["changing_table:fee"!="yes"]["fee"!="yes"];

  nwr["diaper"]["diaper"!="no"]["diaper:fee"!="yes"]["fee"!="yes"];`,
    color: "#F4A460",
    tags: ["changing_table=*"],
    edit: ["amenity=toilets", "amenity", "shop"]
  },
  {
    id: 43,
    group: "health",
    value: "health-products",
    icon: "https://wiki.openstreetmap.org/w/images/3/36/Chemist-14.svg",
    query: `
    nw["shop"~"^(chemist|health_food|hairdresser|cosmetics|herbalist|beauty|perfumery|nutrition_supplements)$"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
    nw["amenity"="pharmacy"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
    nw["craft"="soap"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];
    nw["amenity"="vending_machine"]["vending"="chemist"][~"^(regional|fair_trade|organic|second_hand|zero_waste|bulk_purchase)$"~"^(yes|only)$"];`,
    color: "#BF0000",
    tags: [
      "shop=chemist",
      "shop=health_food",
      "shop=hairdresser",
      "shop=cosmetics",
      "shop=herbalist",
      "shop=beauty",
      "shop=perfumery",
      "shop=nutrition_supplements",
      "amenity=pharmacy",
      "craft=soap",
      "vending=chemist"
    ],
    edit: [
      "shop=chemist",
      "shop=health_food",
      "shop=hairdresser",
      "shop=cosmetics",
      "shop=herbalist",
      "shop=beauty",
      "shop=perfumery",
      "shop=nutrition_supplements",
      "amenity=pharmacy",
      "amenity=vending_machine"
    ]
  },
  {
    id: 44,
    group: "health",
    value: "kneipp_water_cure",
    icon: "https://wiki.openstreetmap.org/w/images/c/c1/Kneipp_water_cure.svg",
    query: `
  nwr["amenity"="kneipp_water_cure"]&part;`,
    color: "#33CCCC",
    tags: ["amenity=kneipp_water_cure"],
    edit: ["amenity=kneipp_water_cure"]
  },
  {
    id: 45,
    group: "food",
    value: "drinking-water",
    icon: "https://wiki.openstreetmap.org/w/images/0/08/Drinking-water-16.svg",
    query: `
  nwr["amenity"="drinking_water"]&part;
  nwr["drinking_water"="yes"]&part;

  node["amenity"="water_point"]&part;

  nw["drinking_water:refill"="yes"]&part;`,
    color: "#4169E1",
    tags: [
      "amenity=drinking_water",
      "drinking_water=*",
      "amenity=water_point",
      "drinking_water:refill=*"
    ],
    edit: [
      "amenity=drinking_water",
      "amenity=water_point",
      "amenity=toilets",
      "amenity=shelter",
      "tourism=wilderness_hut",
      "highway=rest_area",
      "man_made=water_well",
      "amenity=fountain",
      "natural=spring",
      "amenity"
    ]
  },
  {
    id: 144,
    group: "health",
    value: "defibrillator",
    icon: "/lib/maki-icons/defibrillator-15.svg",
    query: `
nw["emergency"="defibrillator"];`,
    color: "#008855",
    tags: ["emergency=defibrillator"],
    edit: ["emergency=defibrillator"]
  },
  {
    id: 46,
    group: "food",
    value: "food-sharing",
    icon: "https://wiki.openstreetmap.org/w/images/3/3c/Foodbank.svg",
    query: `
      nw["social_facility"~"^(food_bank|soup_kitchen|dairy_kitchen)$"];

      nw["amenity"="food_sharing"];
      nw["social_facility"="food_sharing"];

      nw["recycling:food"="yes"];

      nw["reuse"="fridge"];

      nw["amenity"="fridge"];`,
    color: "#FFD700",
    tags: [
      "amenity=food_sharing",
      "social_facility=food_bank",
      "social_facility=soup_kitchen",
      "social_facility=dairy_kitchen"
    ],
    edit: ["amenity=social_facility"]
  },
  {
    id: 47,
    group: "food",
    value: "dinner",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Restaurant-14.svg",
    query: `
nw["amenity"~"^(restaurant|biergarten|fast_food|ice_cream|pub|bar|canteen|cafe|juice_bar)$"][~"^(regional|fair_trade|organic|(diet:){0,1}(vegetarian|lacto_vegetarian|ovo_vegetarian|vegan|fruitarian)|second_hand)$"~"^(yes|only)$"];
nw["amenity"~"^(restaurant|biergarten|fast_food|ice_cream|pub|bar|canteen|cafe|juice_bar)$"][~"^(diet|cuisine)$"~"vegetarian|vegan|fruitarian"];

nw["social_facility"="soup_kitchen"];`,
    color: "#C77400",
    tags: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=ice_cream",
      "amenity=pub",
      "amenity=bar",
      "amenity=cafe",
      "amenity=canteen",
      "amenity=juice_bar",
      "social_facility=soup_kitchen"
    ],
    edit: [
      "amenity=restaurant",
      "amenity=biergarten",
      "amenity=fast_food",
      "amenity=ice_cream",
      "amenity=pub",
      "amenity=bar",
      "amenity=cafe",
      "amenity=social_facility",
      "amenity"
    ]
  },
  {
    id: 48,
    group: "goods",
    value: "goods-exchange",
    icon: "/lib/maki-icons/gift-15.svg",
    query: `
      // Givebox (Preferred tag)
      nw["amenity"="give_box"];

      nw["amenity"="givebox"];

      // Reuse
      nw["amenity"="reuse"]["reuse:books"!="only"];

      // Give-away shop
      nw["shop"="charity"]["payment:none"="yes"];
      nw["shop"]["charity"="yes"]["payment:none"="yes"];
      nw["shop"="second_hand"]["payment:none"="yes"];
      nw["shop"]["second_hand"="yes"]["payment:none"="yes"];

      nw["shop"="charity"]["fee"="no"];
      nw["shop"]["charity"="yes"]["fee"="no"];
      nw["shop"="second_hand"]["fee"="no"];
      nw["shop"]["second_hand"="yes"]["fee"="no"];

      // Toy library free of charge
      nw["amenity"="toy_library"]["fee"="no"];`,
    color: "#8A2BE2",
    tags: [
      "amenity=give_box",
      "shop=charity",
      "shop=second_hand",
      "amenity=toy_library"
    ],
    edit: ["amenity", "shop=charity", "shop=second_hand", "amenity=toy_library"]
  },
  {
    id: 49,
    group: "goods",
    value: "goods-get",
    icon: "https://wiki.openstreetmap.org/w/images/8/85/Charity-14.svg",
    query: `
      // Givebox
      nw["amenity"="give_box"];

      nw["amenity"="givebox"];

      // Reuse
      nw["amenity"="reuse"]["reuse:books"!="only"];

      // Shop
      nw["shop"~"^(second_hand|charity|antiques|fair_trade)$"];
      nw["shop"~"^(variety_store|convenience|yes|general|department_store|gift|kiosk|mall|trade|houseware)$"][~"^(charity|regional|fair_trade|second_hand)$"~"^(yes|only)$"];
      nw["amenity"="marketplace"][~"^(second_hand|charity)$"~"^(yes|only)$"];`,
    color: "#F08080",
    tags: [
      "shop=second_hand",
      "shop=antiques",
      "second_hand=*",
      "shop=charity",
      "charity=*",
      "amenity=give_box",
      "fair_trade=*"
    ],
    edit: ["shop=second_hand", "shop=charity", "amenity"]
  },
  {
    id: 50,
    group: "goods",
    value: "hackerspace",
    icon: "/lib/temaki-icons/toolbox.svg",
    query: `
      nw["leisure"="hackerspace"]["repair"!="only"];

      nw["club"="doityourself"];`,
    color: "#333333",
    tags: ["leisure=hackerspace", "club=doityourself"],
    edit: ["leisure=hackerspace", "club"]
  },
  {
    id: 51,
    group: "community",
    value: "contribute",
    icon: "/lib/maki-icons/heart-15.svg",
    query: `
      nw["shop"="charity"];
      nw["office"~"^(charity|ngo|foundation|association)$"];
      nw["club"="charity"];
      nw["charity"]["charity"!="no"];
      nw["operator:type"~"^(charitable|community|private_non_profit|ngo|association|cooperative)$",i]["amenity"!="parking"];
      nw["operator_type"~"^(charitable|community|private_non_profit|ngo|association|cooperative)$",i]["amenity"!="parking"];
      nw["operator"="community"]["amenity"!="parking"];

      nwr["healthcare"="blood_donation"];`,
    color: "#FF69B4",
    tags: [
      "office=charity",
      "shop=charity",
      "charity=yes",
      "operator:type=private_non_profit",
      "operator:type=charitable",
      "operator:type=community",
      "office=ngo",
      "operator:type=ngo",
      "office=foundation",
      "office=association",
      "healthcare=blood_donation"
    ],
    edit: [
      "office=charity",
      "shop=charity",
      "office=ngo",
      "office=foundation",
      "office=association",
      "healthcare=blood_donation",
      "shop",
      "amenity"
    ]
  },
  {
    id: 52,
    group: "community",
    value: "coworking",
    icon: "/lib/maki-icons/building-15.svg",
    query: `
      nw["amenity"="coworking_space"];

      nw["office"="coworking"];`,
    color: "#8FBC8F",
    tags: ["amenity=coworking_space", "office=coworking"],
    edit: ["amenity=coworking_space", "office=coworking"]
  },
  {
    id: 53,
    group: "health",
    value: "public-shower",
    icon: "https://wiki.openstreetmap.org/w/images/5/5a/Shower-14.svg",
    query: `
     // Show only showers that are not inside a bath
  (
    (
nw["amenity"="shower"]&part;
  );
  -(
    (
      wr["amenity"="public_bath"]["fee"!="no"];
      wr["leisure"~"water_park|sports_centre|stadium"]["fee"!="no"];
    );
    map_to_area -> .b;
    (
      nw(area.b)["amenity"="shower"]&part;
    );
  );
);`,
    color: "#1E90FF",
    tags: ["amenity=shower"],
    edit: ["amenity=shower"]
  },
  {
    id: 54,
    group: "mobility",
    value: "pump",
    icon:
      "https://wiki.openstreetmap.org/w/images/0/01/Bicycle_repair_station-14.svg",
    query: `
  nw["amenity"="compressed_air"];

  nw["compressed_air"="yes"];

  nw["service:bicycle:pump"="yes"];`,
    color: "#00BFFF",
    tags: [
      "amenity=compressed_air",
      "compressed_air=*",
      "service:bicycle:pump=*"
    ],
    edit: [
      "amenity=compressed_air",
      "amenity=bicycle_repair_station",
      "amenity",
      "shop"
    ]
  },
  {
    id: 55,
    group: "health",
    value: "toilet",
    icon: "https://wiki.openstreetmap.org/w/images/f/fa/Toilets-16.svg",
    query: `
  // Public toilet
  nw["amenity"="toilets"]&part;

  // Public toilet (Alternativ)
  nw["building"="toilets"]&part;

  // Toilet in other Feature
  nwr["toilets"="yes"]&part;`,
    color: "#8B4513",
    tags: ["amenity=toilets", "building=toilets", "toilets=*"],
    edit: ["amenity=toilets", "building", "amenity"]
  },
  {
    id: 56,
    group: "communitySport",
    value: "basketball",
    icon: "/lib/maki-icons/basketball-15.svg",
    query: `
  nwr["sport"~"basketball|multi"]["leisure"!~"sports_centre|stadium"]["surface"!="grass"]&part;
  nwr["sport"~"basketball|multi"]["leisure"~"sports_centre|stadium"]&free;`,
    color: "#FF4500",
    tags: ["leisure=pitch", "sport=basketball", "sport=multi"],
    edit: ["leisure=pitch"]
  },
  {
    id: 57,
    group: "sport",
    value: "bath",
    icon: "https://wiki.openstreetmap.org/w/images/0/01/Public_bath.svg",
    query: `
  nwr["amenity"="public_bath"]&free;
  nwr["leisure"="water_park"]&free;
  nwr["leisure"="bathing_place"]&part;

  nwr["sport"="swimming"]["leisure"~"sports_centre|stadium"]&free;

  // Show only swimming pools that are not inside a bath
  (
    (
      nwr["leisure"="swimming_pool"]&part;
      nwr["leisure"="swimming_area"]&part;
      nwr["sport"="swimming"]["leisure"!~"sports_centre|stadium"]&part;
    );
    -(
      (
        wr["amenity"="public_bath"];
        wr["leisure"~"water_park|sports_centre|stadium"];
      );
      map_to_area -> .b;
      (
        nwr(area.b)["leisure"="swimming_pool"]&part;
        nwr(area.b)["leisure"="swimming_area"]&part;
        nwr(area.b)["sport"="swimming"]["leisure"!~"sports_centre|stadium"]&part;
      );
    );
  );`,
    color: "#0000CD",
    tags: [
      "sport=swimming",
      "amenity=public_bath",
      "leisure=water_park",
      "leisure=swimming_pool",
      "leisure=swimming_area"
    ],
    edit: [
      "amenity=public_bath",
      "leisure=sports_centre",
      "leisure=water_park",
      "leisure=swimming_pool",
      "leisure=swimming_area"
    ]
  },
  {
    id: 58,
    group: "sport",
    value: "bikepark",
    icon: "/lib/maki-icons/bicycle-15.svg",
    query: `
      nwr["sport"~"bmx|cycling"]["leisure"!~"sports_centre|stadium"]&part;
      nwr["sport"~"bmx|cycling"]["leisure"~"sports_centre|stadium"]&free;`,
    color: "#A52A2A",
    tags: ["sport=bmx", "sport=cycling"],
    edit: ["leisure=track", "landuse=recreation_ground", "leisure=pitch"]
  },
  {
    id: 59,
    group: "sport",
    value: "skatepark",
    icon: "/lib/temaki-icons/skateboarding.svg",
    query: `
      nwr["sport"="skateboard"]["leisure"!~"sports_centre|stadium"]&part;
      nwr["sport"="skateboard"]["leisure"~"sports_centre|stadium"]&free;`,
    color: "#E9967A",
    tags: ["sport=skateboard"],
    edit: ["leisure=pitch"]
  },
  {
    id: 60,
    group: "communitySport",
    value: "chess",
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Chess_pictogram.svg",
    query: `
  nw["sport"="chess"]&part;`,
    color: "#000000",
    tags: ["sport=chess"],
    edit: ["leisure=pitch"]
  },
  {
    id: 61,
    group: "sport",
    value: "climbing",
    icon: "/lib/temaki-icons/abseiling.svg",
    query: `
      // climbing and rock_climbing
  nwr["sport"~"climbing"]["leisure"!~"sports_centre|stadium"]&part;
  nwr["sport"~"climbing"]["leisure"~"sports_centre|stadium"]&free;

  nwr["playground"="climbingwall"]&part;`,
    color: "#696969",
    tags: ["sport=climbing", "playground=climbingwall"],
    edit: ["natural", "landuse=recreation_ground", "playground"]
  },
  {
    id: 62,
    group: "communitySport",
    value: "boules",
    icon: "/lib/maki-icons/pitch-15.svg",
    query: `
      nwr["sport"~"boules|bowls"]["leisure"!~"sports_centre|stadium"]&part;
      nwr["sport"~"boules|bowls"]["leisure"~"sports_centre|stadium"]&free;`,
    color: "#f1c68e",
    tags: ["sport=boules", "sport=bowls"],
    edit: ["leisure=pitch"]
  },
  {
    id: 63,
    group: "sport",
    value: "fitness",
    icon: "/lib/maki-icons/fitness-centre-15.svg",
    query: `
  nwr["leisure"="fitness_station"]&part;

  nwr["leisure"="pitch"]["sport"~"fitness|crossfit|exercise|gymnastics|yoga|bodybuilding"]&part;

  nw["playground"~"horizontal_bar|exercise|balance(_)?beam|slackline"]&part;

  nw["playground:horizontal_bar"="yes"]&part;
  nw["playground:exercise"="yes"]&part;
  nw["playground:balancebeam"="yes"]&part;
  nw["playground:balance_beam"="yes"]&part;
  nw["playground:slackline"="yes"]&part;`,
    color: "#0000FF",
    tags: ["leisure=fitness_station", "sport=*", "playground=*"],
    edit: ["leisure=fitness_station", "playground"]
  },
  {
    id: 64,
    group: "sport",
    subgroup: "fitness",
    value: "horizontal_bar",
    icon: "/lib/maki-icons/fitness-centre-15.svg",
    button: "fas fa-minus",
    query: `
  nwr["fitness_station"~"horizontal_bar"]&part;
  nwr["fitness_station:horizontal_bar"="yes"]&part;

  nw["playground"~"horizontal_bar"]&part;
  nw["playground:horizontal_bar"="yes"]&part;`,
    color: "#0000FF",
    tags: ["leisure=fitness_station", "sport=*", "playground=*"],
    edit: ["leisure=fitness_station", "playground"]
  },
  {
    id: 65,
    group: "sport",
    subgroup: "fitness",
    value: "parallel_bars",
    icon: "/lib/maki-icons/fitness-centre-15.svg",
    button: "fas fa-grip-lines-vertical",
    query: `
  nwr["fitness_station"~"parallel_bars"]&part;
  nwr["fitness_station:parallel_bars"="yes"]&part;`,
    color: "#0000FF",
    tags: ["leisure=fitness_station", "sport=*", "playground=*"],
    edit: ["leisure=fitness_station", "playground"]
  },
  {
    id: 66,
    group: "sport",
    subgroup: "fitness",
    value: "rings",
    icon: "/lib/maki-icons/fitness-centre-15.svg",
    button: "far fa-circle",
    query: `
  nwr["fitness_station"~"rings"]&part;
  nwr["fitness_station:rings"="yes"]&part;`,
    color: "#0000FF",
    tags: ["leisure=fitness_station", "sport=*", "playground=*"],
    edit: ["leisure=fitness_station", "playground"]
  },
  {
    id: 67,
    group: "sport",
    subgroup: "fitness",
    value: "exercise-machine",
    icon: "/lib/maki-icons/fitness-centre-15.svg",
    button: "fas fa-biking",
    query: `
  nwr["fitness_station"~"elliptical_trainer|air_walker|exercise_bike|rower"]&part;

  nwr["fitness_station:elliptical_trainer"="yes"]&part;
  nwr["fitness_station:air_walker"="yes"]&part;
  nwr["fitness_station:exercise_bike"="yes"]&part;
  nwr["fitness_station:rower"="yes"]&part;

  nw["playground"~"exercise"]&part;
  nw["playground:exercise"="yes"]&part;`,
    color: "#0000FF",
    tags: ["leisure=fitness_station", "sport=*", "playground=*"],
    edit: ["leisure=fitness_station", "playground"]
  },
  {
    id: 68,
    group: "sport",
    subgroup: "fitness",
    value: "balance",
    icon: "/lib/maki-icons/fitness-centre-15.svg",
    button: "fas fa-street-view",
    query: `
  nwr["fitness_station"~"slackline|balance(_)?beam"]&part;

  nwr["fitness_station:slackline"="yes"]&part;
  nwr["fitness_station:balance_beam"="yes"]&part;
  nwr["fitness_station:balancebeam"="yes"]&part;

  nw["playground"~"slackline|balance(_)?beam"]&part;

  nw["playground:slackline"="yes"]&part;
  nw["playground:balance_beam"="yes"]&part;
  nw["playground:balancebeam"="yes"]&part;`,
    color: "#0000FF",
    tags: ["leisure=fitness_station", "sport=*", "playground=*"],
    edit: ["leisure=fitness_station", "playground"]
  },
  {
    id: 69,
    group: "sport",
    value: "sledding",
    icon: "/lib/temaki-icons/sledding.svg",
    query: `
  nwr["sport"="toboggan"]&part;

  nwr["piste:type"="sled"]&part;

  nwr["playground"="sledding"]&part;`,
    color: "#D2691E",
    tags: ["sport=toboggan", "piste:type=sled", "playground=sledding"],
    edit: []
  },
  {
    id: 70,
    group: "sport",
    value: "fitness-trail",
    icon: "/lib/maki-icons/pitch-15.svg",
    query: `
  nwr["route"="fitness_trail"]&part;`,
    color: "#8B008B",
    tags: ["route=fitness_trail"],
    edit: ["type=route"]
  },
  {
    id: 71,
    group: "sport",
    value: "running",
    icon: "/lib/maki-icons/pitch-15.svg",
    query: `
  nwr["sport"="running"]["leisure"!~"sports_centre|stadium"]&part;
  nwr["sport"="running"]["leisure"~"sports_centre|stadium"]&free;

  nwr["leisure"="track"]["sport"="athletics"]&part;`,
    color: "#8B0000",
    tags: ["sport=running", "sport=athletics"],
    edit: ["sport=running", "sport=athletics"]
  },
  {
    id: 72,
    group: "communitySport",
    value: "soccer",
    icon: "/lib/maki-icons/soccer-15.svg",
    query: `
    // exclude table_soccer
      nwr["sport"~"(^soccer)|;soccer|multi"]["leisure"!~"sports_centre|stadium"]&part;
      nwr["sport"~"(^soccer)|;soccer|multi"]["leisure"~"sports_centre|stadium"]&free;`,
    color: "#ADFF2F",
    tags: ["leisure=pitch", "sport=soccer", "sport=multi"],
    edit: ["leisure=pitch"]
  },
  {
    id: 73,
    group: "communitySport",
    value: "table-tennis",
    icon: "/lib/maki-icons/table-tennis-15.svg",
    query: `
  // Table tennis
  nw["sport"="table_tennis"];

  // Table tennis (obsolete)
  nw["leisure"="table_tennis_table"];`,
    color: "#008000",
    tags: ["sport=table_tennis"],
    edit: ["leisure=pitch"]
  },
  {
    id: 74,
    group: "communitySport",
    value: "table-soccer",
    icon: "https://wiki.openstreetmap.org/w/images/c/c8/Kicker02.png",
    query: `
      nwr["leisure"="pitch"]["sport"="table_soccer"]["fee"];`,
    color: "#7CFC00",
    tags: ["sport=table_soccer"],
    edit: ["leisure=pitch"]
  },
  {
    id: 75,
    group: "communitySport",
    value: "volleyball",
    icon: "/lib/maki-icons/volleyball-15.svg",
    query: `
      // volleyball and beachvolleyball
      nwr["sport"~"volleyball"]["leisure"!~"sports_centre|stadium"]&part;
      nwr["sport"~"volleyball"]["leisure"~"sports_centre|stadium"]&free;`,
    color: "#F4A460",
    tags: ["leisure=pitch", "sport=volleyball", "sport=beachvolleyball"],
    edit: ["leisure=pitch"]
  },
  {
    id: 76,
    group: "trip",
    value: "animal",
    icon: "/lib/maki-icons/zoo-15.svg",
    query: `
  nwr["tourism"="zoo"]&part;
  nwr["zoo"]&part;

  // Show only animals that are not inside a zoo
  (
    nwr["attraction"="animal"]&part;
    -(
      wr["tourism"="zoo"]&part;
      map_to_area -> .z;
      (
        nwr(area.z)["attraction"="animal"]&part;
      );
    );
  );

  nwr["tourism"="aquarium"]&part;

  nw["man_made"="beehive"];
  nwr["landuse"="apiary"];

  nwr["landuse"="animal_keeping"];
  nwr["animal_keeping"];
  way["landuse"="animal_enclosure"];

  way["landuse"="meadow"]["animal"];
  way["landuse"="farmyard"]["animal"];

  way["landuse"="meadow"]["livestock"];
  way["landuse"="farmyard"]["livestock"];
  nw["landuse"="livestock"];
  wr["meadow"="pasture"];

  way["landuse"="meadow"]["species"];
  way["landuse"="farmyard"]["species"];

  way["landuse"="paddock"];
  wr["meadow"="paddock"];`,
    color: "#DAA520",
    tags: [
      "tourism=zoo",
      "attraction=animal",
      "tourism=aquarium",
      "man_made=beehive",
      "landuse=apiary",
      "landuse=animal_keeping",
      "landuse=meadow",
      "landuse=farmyard"
    ],
    edit: [
      "tourism=zoo",
      "attraction=animal",
      "tourism=aquarium",
      "man_made=beehive",
      "landuse=meadow",
      "landuse=farmyard",
      "landuse"
    ]
  },
  {
    id: 77,
    group: "trip",
    subgroup: "animal",
    value: "observation",
    icon: "/lib/temaki-icons/binoculars.svg",
    button: "fas fa-binoculars",
    query: `
  nw["leisure"="bird_hide"]&part;
  nw["leisure"="wildlife_hide"]&part;
  nw["observation"="wild_animal"]&part;
  nw["man_made"="nesting_site"];
  nw["man_made"="insect_hotel"];
  node["natural"="anthill"];
  node["natural"="termite_mound"];`,
    color: "#DAA520",
    tags: [
      "leisure=bird_hide",
      "leisure=wildlife_hide",
      "observation=wild_animal",
      "man_made=nesting_site",
      "man_made=insect_hotel",
      "natural=anthill",
      "natural=termite_mound"
    ],
    edit: [
      "leisure=bird_hide",
      "man_made=tower",
      "leisure",
      "man_made",
      "natural"
    ]
  },
  {
    id: 78,
    group: "trip",
    value: "maze",
    icon: "/lib/temaki-icons/compass.svg",
    query: `
nwr["attraction"="maze"]&part;
nwr["leisure"="maze"]&part;`,
    color: "#197419",
    tags: ["attraction=maze"],
    edit: ["attraction=maze"]
  },
  {
    id: 79,
    group: "trip",
    value: "webcam",
    icon: "/lib/temaki-icons/security_camera.svg",
    query: `
node["man_made"="surveillance"]["website"];
node["man_made"="surveillance"]["contact:website"];
node["man_made"="surveillance"]["website:webcam"];

node["man_made"="surveillance"]["webcam"];
node["man_made"="surveillance"]["contact:webcam"];
node["man_made"="surveillance"]["webcam:url"];

node["man_made"="surveillance"]["url"];
node["man_made"="surveillance"]["url:webcam"];

node["man_made"="surveillance"]["image"];`,
    color: "#a6a6a6",
    tags: ["man_made=surveillance"],
    edit: ["man_made=surveillance"]
  },
  {
    id: 80,
    group: "goods",
    value: "musical_instrument",
    icon: "/lib/maki-icons/music-15.svg",
    query: `
    // Get
  nw["shop"="musical_instrument"]["second_hand"~"^(yes|only)$"];

  // Rent / Share
  nw["amenity"="piano"][!"craft"][!"shop"]&access;
  nw["piano"="yes"][!"craft"][!"shop"]&access;

  nw["playground"="musical_instrument"]&access;
  nw["amenity"="musical_instrument"]&access;
  nw["musical_instrument"][!"craft"][!"shop"]&access;
  nw[~"^musical_instrument:.*$"~"yes"][!"craft"][!"shop"]&access;

  nw["musical_instrument:rental"~"^(yes|only)$"];
  nw["shop"="musical_instrument"]["rental"~"^(yes|only)$"];
  nw["craft"="musical_instrument"]["rental"~"^(yes|only)$"];

  // Repair
  nw["musical_instrument:repair"~"^(yes|only)$"];
  nw["shop"="musical_instrument"]["repair"~"^(yes|only)$"];
  nw["craft"="musical_instrument"]["repair"~"^(yes|only)$"];
  nw["craft"="luthier"]["repair"~"^(yes|only)$"];`,
    color: "#008B8B",
    tags: [
      "shop=musical_instrument",
      "musical_instrument:rental=*",
      "musical_instrument=*",
      "amenity=piano"
    ],
    edit: ["shop=musical_instrument", "amenity"]
  },
  {
    id: 135,
    group: "goods",
    value: "printer",
    icon: "https://wiki.openstreetmap.org/w/images/2/2c/Copyshop-14.svg",
    query: `
    nw["amenity"="printer"]&access;
    nw["shop"="copyshop"];
    nw["shop"="printing"];`,
    color: "#222222",
    tags: ["amenity=printer", "shop=copyshop", "shop=printing"],
    edit: ["shop=copyshop", "shop", "amenity"]
  },
  {
    id: 81,
    group: "goods",
    value: "sport",
    icon: "https://wiki.openstreetmap.org/w/images/7/76/Outdoor-14.svg",
    query: `
    // Get
    nw["shop"="sport"]["second_hand"~"^(yes|only)$"];
    nw["shop"="ski"]["second_hand"~"^(yes|only)$"];

    // Rent / Share
    nw["ski:rental"~"^(yes|only)$"];
    nw["snowboard:rental"~"^(yes|only)$"];
    nw["scuba_diving:rental"~"^(yes|only)$"];
    nw["standup_paddleboard_rental"~"^(yes|only)$"];
    nw["board_rental"~"^(yes|only)$"];
    nw["rental"~"ski|sled|skates|snowboard|surf|sailboard"];
    nw["amenity"="ski_rental"];
    nw["shop"="ski_rental"];
    nw["ski"="rental"];
    nw["shop"~"^(sports|ski|surf|outdoor|scuba_diving)$"]["rental"~"^(yes|only)$"];
    nw["amenity"="ski_school"]["rental"~"^(yes|only)$"];

    // Repair
    nw["scuba_diving:repair"~"^(yes|only)$"];
    nw["ski:repair"~"^(yes|only)$"];
    nw["repair"="ski"];
    nw["shop"~"^(sports|outdoor|ski)$"]["repair"~"^(yes|only)$"];
    nw["amenity"~"^(ski_rental|dive_centre)$"]["repair"~"^(yes|only)$"];`,
    color: "#DC143C",
    tags: [
      "shop=sports",
      "shop=outdoor",
      "shop=scuba_diving",
      "amenity=dive_centre",
      "shop=ski",
      "shop=surf",
      "amenity=ski_rental"
    ],
    edit: [
      "shop=sports",
      "shop=outdoor",
      "shop=scuba_diving",
      "amenity=dive_centre",
      "shop",
      "amenity"
    ]
  },
  {
    id: 82,
    group: "community",
    value: "advertising",
    icon: "https://wiki.openstreetmap.org/w/images/2/20/Column-14.svg",
    query: `
      nwr["advertising"]["access"]&part;
      nwr["man_made"="advertising"]["access"]&part;

      node["advertising"]["operator:type"="community"]&part;
      node["advertising"]["operator:type"="public"]&part;

      nw["board_type"="notice"]["access"]&part;`,
    color: "#e6007a",
    tags: ["man_made=advertising", "board_type=notice"],
    edit: [
      "advertising=board",
      "advertising=column",
      "advertising=poster_box",
      "advertising=billboard",
      "tourism=information"
    ]
  },
  {
    id: 83,
    group: "trip",
    value: "fireplace",
    icon: "https://wiki.openstreetmap.org/w/images/d/df/Firepit.svg",
    query: `
  nwr["leisure"="firepit"]&part;
  nwr["fireplace"="yes"]&part;

  nwr["openfire"="yes"]["tourism"!="camp_site"]&part;

  nwr["amenity"="bbq"]&part;
  nwr["bbq"="yes"]&part;
  nwr["barbecue_grill"="yes"]&part;`,
    color: "#B22222",
    tags: [
      "leisure=firepit",
      "fireplace=*",
      "openfire=*",
      "amenity=bbq",
      "bbq=*"
    ],
    edit: ["leisure=firepit", "amenity=bbq", "tourism"]
  },
  {
    id: 84,
    group: "trip",
    value: "map",
    icon: "https://wiki.openstreetmap.org/w/images/c/ca/Map-14.svg",
    query: `
      node["information"="map"]&part;`,
    color: "#FFE4C4",
    tags: ["information=map"],
    edit: ["tourism=information"]
  },
  {
    id: 85,
    group: "trip",
    subgroup: "map",
    value: "openstreetmap",
    icon: "https://wiki.openstreetmap.org/w/images/c/ca/Map-14.svg",
    button: "fas fa-heart",
    query: `
      node["information"="map"][~"map[:_]{0,1}source"~"^(OSM|OpenStreetMap)$",i]&part;`,
    color: "#9fd485",
    tags: ["information=map"],
    edit: ["tourism=information"]
  },
  {
    id: 86,
    group: "trip",
    value: "garden",
    icon: "/lib/maki-icons/garden-15.svg",
    query: `
  nwr["leisure"="garden"]&part;`,
    color: "#BA55D3",
    tags: ["leisure=garden"],
    edit: ["leisure=garden"]
  },
  {
    id: 87,
    group: "trip",
    subgroup: "garden",
    value: "garden-with-name",
    icon: "/lib/maki-icons/garden-15.svg",
    button: "far fa-minus-square",
    query: `
  nwr["leisure"="garden"]["name"]&part;`,
    color: "#BA55D3",
    tags: ["leisure=garden"],
    edit: ["leisure=garden"]
  },
  {
    id: 88,
    group: "natural",
    value: "nature-park",
    icon: "/lib/maki-icons/natural-15.svg",
    query: `
      nwr["leisure"="nature_reserve"]&part;
      nwr["boundary"="national_park"]&part;
      nwr["boundary"="protected_area"]&part;`,
    color: "#006400",
    tags: [
      "leisure=nature_reserve",
      "boundary=national_park",
      "boundary=protected_area"
    ],
    edit: ["leisure=nature_reserve", "boundary"]
  },
  {
    id: 89,
    group: "trip",
    value: "park",
    icon: "/lib/maki-icons/park-15.svg",
    query: `
  nwr["leisure"="park"]&part;
  nwr["landuse"="recreation_ground"]&part;
  nwr["leisure"="recreation_ground"]&part;`,
    color: "#90EE90",
    tags: ["leisure=park", "landuse=recreation_ground"],
    edit: ["leisure=park", "landuse=recreation_ground"]
  },
  {
    id: 90,
    group: "trip",
    subgroup: "park",
    value: "park-with-name",
    icon: "/lib/maki-icons/park-15.svg",
    button: "far fa-minus-square",
    query: `
  nwr["leisure"="park"]["name"]&part;
  nwr["landuse"="recreation_ground"]["name"]&part;
  nwr["leisure"="recreation_ground"]["name"]&part;`,
    color: "#90EE90",
    tags: ["leisure=park", "landuse=recreation_ground"],
    edit: ["leisure=park", "landuse=recreation_ground"]
  },
  {
    id: 91,
    group: "material",
    value: "battery-recycling",
    icon: "/lib/temaki-icons/power.svg",
    query: `
    nw["recycling:batteries"="yes"];
    nw["recycling:car_batteries"="yes"];`,
    color: "#ffe000",
    tags: ["recycling:batteries=yes", "recycling:car_batteries=yes"],
    edit: ["amenity=recycling"]
  },
  {
    id: 92,
    group: "material",
    value: "reusable-bottle-reuse",
    icon: "https://wiki.openstreetmap.org/w/images/e/eb/Alcohol-16.svg",
    query: `
    nw["vending"="bottle_return"];
    nw["recycling:refund_bottles"="yes"];`,
    color: "#267b26",
    tags: ["vending=bottle_return"],
    edit: ["vending=bottle_return"]
  },
  {
    id: 93,
    group: "material",
    value: "oil-recycling",
    icon: "/lib/maki-icons/water-15.svg",
    query: `
    nw["recycling:cooking_oil"="yes"];
    nw["recycling:engine_oil"="yes"];
    nw["recycling:oil"="yes"];
    nw["recycling:waste_oil"="yes"];`,
    color: "#582d19",
    tags: [
      "recycling:cooking_oil=yes",
      "recycling:engine_oil=yes",
      "recycling:oil=yes",
      "recycling:waste_oil=yes"
    ],
    edit: ["amenity=recycling"]
  },
  {
    id: 94,
    group: "material",
    value: "hazardous-recycling",
    icon: "/lib/maki-icons/danger-15.svg",
    query: `
    nw["recycling:hazardous_waste"="yes"];
    nw["recycling:hydrargyrum"="yes"];
    nw["recycling:paint"="yes"];`,
    color: "#000000",
    tags: [
      "recycling:hazardous_waste=yes",
      "recycling:hydrargyrum=yes",
      "recycling:paint=yes"
    ],
    edit: ["amenity=recycling"]
  },
  {
    id: 95,
    group: "material",
    value: "rubble-recycling",
    icon: "/lib/temaki-icons/ruins.svg",
    query: `
    nw["recycling:hardcore"="yes"];
    nw["recycling:rubble"="yes"]; `,
    color: "#d39476",
    tags: ["recycling:hardcore=yes", "recycling:rubble=yes"],
    edit: ["amenity=recycling"]
  },
  {
    id: 96,
    group: "material",
    value: "plastic-recycling",
    icon: "https://wiki.openstreetmap.org/w/images/9/98/Beverages-14.svg",
    query: `
    nw["recycling:plastic"="yes"];
    nw["recycling:plastic_bottles"="yes"];
    nw["recycling:plastic_packaging"="yes"];
    nw["recycling:PET"="yes"];
    nw["recycling:plastic_bags"="yes"];
    nw["recycling:polystyrene_foam"="yes"];
    nw["recycling:polyester"="yes"];
    nw["recycling:styrofoam"="yes"];
    nw["recycling:foil"="yes"];`,
    color: "#5F9EA0",
    tags: [
      "recycling:plastic=yes",
      "recycling:plastic_bottles=yes",
      "recycling:plastic_packaging=yes",
      "recycling:PET=yes",
      "recycling:plastic_bags=yes",
      "recycling:polystyrene_foam=yes",
      "recycling:polyester=yes",
      "recycling:styrofoam=yes",
      "recycling:foil=yes"
    ],
    edit: ["amenity=recycling"]
  },
  {
    id: 97,
    group: "trip",
    value: "picnic-site",
    icon: "https://wiki.openstreetmap.org/w/images/f/fc/Picnic_site.svg",
    query: `
  nwr["tourism"="picnic_site"]&part;

  nw["leisure"="picnic_table"]&part;

  nw["shelter_type"="picnic_shelter"]&part;`,
    color: "#DEB887",
    tags: [
      "tourism=picnic_site",
      "leisure=picnic_table",
      "shelter_type=picnic_shelter"
    ],
    edit: ["tourism=picnic_site", "leisure=picnic_table", "amenity=shelter"]
  },
  {
    id: 98,
    group: "trip",
    value: "square",
    icon: "/lib/temaki-icons/pedestrian.svg",
    query: `
nw["place"="square"]&part;
nw["leisure"="common"]&part;

way["highway"="pedestrian"]["area"="yes"]&part;
way["highway"="footway"]["area"="yes"]&part;`,
    color: "#666666",
    tags: [
      "place=square",
      "leisure=common",
      "highway=pedestrian",
      "highway=footway"
    ],
    edit: ["place=square", "leisure=common", "highway"]
  },
  {
    id: 99,
    group: "trip",
    subgroup: "square",
    value: "square-with-name",
    icon: "/lib/temaki-icons/pedestrian.svg",
    button: "far fa-minus-square",
    query: `
nw["place"="square"]["name"]&part;
nw["leisure"="common"]["name"]&part;

way["highway"="pedestrian"]["area"="yes"]["name"]&part;
way["highway"="footway"]["area"="yes"]["name"]&part;`,
    color: "#666666",
    tags: [
      "place=square",
      "leisure=common",
      "highway=pedestrian",
      "highway=footway"
    ],
    edit: ["place=square", "leisure=common", "highway"]
  },
  {
    id: 100,
    group: "trip",
    value: "playground",
    icon: "https://wiki.openstreetmap.org/w/images/3/31/Playground-16.svg",
    query: `
      nwr["leisure"="playground"]&part;
      nw["playground"]&part;
      nw[~"^playground:.*$"~".*"]&part;`,
    color: "#32CD32",
    tags: ["leisure=playground", "playground=*"],
    edit: ["leisure=playground", "playground"]
  },
  {
    id: 101,
    group: "trip",
    value: "lounger",
    icon: "/lib/maki-icons/beach-15.svg",
    query: `
  nw["amenity"="lounger"]&part;

  nw["amenity"="hammock"]&part;`,
    color: "#e6e600",
    tags: ["amenity=lounger", "amenity=hammock"],
    edit: ["amenity"]
  },
  {
    id: 102,
    group: "goods",
    value: "clothes",
    icon: "/lib/maki-icons/clothing-store-15.svg",
    query: `
      // Give
      nw["recycling:belts"="yes"];
      nw["recycling:clothes"="yes"];
      nw["recycling:shoes"="yes"];
      nw["recycling:textiles"="yes"];

      // Reuse
      nw["social_facility"="clothing_bank"];
      nw["amenity"="give_box"]["clothes"!="no"];

      // Shop
      nw["shop"~"^(clothes|boutique|fashion|shoes|bag|sewing|tailor|fabric)$"][~"^(regional|fair_trade|organic|second_hand)$"~"^(yes|only)$"];
      nw["shop"="second_hand"]["clothes"]["clothes"!="no"];

      nw["craft"="shoemaker"];

      // Repair
      nw[~"^(service:){0,1}(clothes|shoes|fabrik):repair$"~"^yes$"];
      nw["shoe_repair"~"^(yes|only)$"];
      nw["repair"="shoes"];
      nw["shop"="shoe_repair"];
      nw["craft"~"^(bag_repair|shoe_repair)$"];
      nw["tailor:alteration_service"="yes"];
      nw["shop"~"^(shoes|clothes|tailor|bag|sewing|leather)$"]["repair"~"^(yes|only)$"];
      nw["craft"~"^(shoemaker|dressmaker|tailor)$"]["repair"~"^(yes|only)$"];`,
    color: "#FF7F50",
    tags: [
      "shop=clothes",
      "shop=boutique",
      "shop=fashion",
      "shop=shoes",
      "shop=bag",
      "shop=sewing",
      "shop=tailor",
      "shop=fabric",
      "shop=shoe_repair",
      "craft=shoemaker",
      "craft=dressmaker",
      "craft=tailor",
      "recycling:clothes=yes",
      "recycling:shoes=yes",
      "social_facility=clothing_bank",
      "amenity=give_box"
    ],
    edit: [
      "shop=clothes",
      "shop=boutique",
      "shop=fashion",
      "shop=shoes",
      "shop=bag",
      "shop=sewing",
      "shop=tailor",
      "shop=fabric",
      "craft",
      "amenity=recycling",
      "amenity=social_facility",
      "amenity"
    ]
  },
  {
    id: 103,
    group: "goods",
    subgroup: "clothes",
    value: "clothes-give",
    icon: "/lib/maki-icons/clothing-store-15.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:belts"="yes"];
      nw["recycling:clothes"="yes"];
      nw["recycling:shoes"="yes"];
      nw["recycling:textiles"="yes"];

      nw["social_facility"="clothing_bank"];

      nw["amenity"="give_box"]["clothes"!="no"]["give_box:policy"!="free_to_take"];`,
    color: "#FF7F50",
    tags: [
      "recycling:clothes=yes",
      "recycling:shoes=yes",
      "social_facility=clothing_bank",
      "amenity=give_box"
    ],
    edit: ["amenity=recycling", "amenity=social_facility", "amenity"]
  },
  {
    id: 104,
    group: "goods",
    subgroup: "clothes",
    value: "clothes-take",
    icon: "/lib/maki-icons/clothing-store-15.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["social_facility"="clothing_bank"];

      nw["amenity"="give_box"]["clothes"!="no"];

      // Shop
      nw["shop"~"^(clothes|boutique|fashion|shoes|bag|sewing|tailor|fabric)$"][~"^(regional|fair_trade|organic|second_hand)$"~"^(yes|only)$"];
      nw["shop"="second_hand"]["clothes"]["clothes"!="no"];

      nw["craft"="shoemaker"];`,
    color: "#FF7F50",
    tags: [
      "shop=clothes",
      "shop=boutique",
      "shop=fashion",
      "shop=shoes",
      "shop=bag",
      "shop=sewing",
      "shop=tailor",
      "shop=fabric",
      "social_facility=clothing_bank",
      "amenity=give_box"
    ],
    edit: [
      "shop=clothes",
      "shop=boutique",
      "shop=fashion",
      "shop=shoes",
      "shop=bag",
      "shop=sewing",
      "shop=tailor",
      "shop=fabric",
      "amenity=social_facility",
      "amenity"
    ]
  },
  {
    id: 105,
    group: "goods",
    subgroup: "clothes",
    value: "clothes-repair",
    icon: "/lib/maki-icons/clothing-store-15.svg",
    button: "fas fa-tools",
    query: `
      nw[~"^(service:){0,1}(clothes|shoes|fabrik):repair$"~"^yes$"];
      nw["shoe_repair"~"^(yes|only)$"];
      nw["repair"="shoes"];
      nw["shop"="shoe_repair"];
      nw["craft"~"^(bag_repair|shoe_repair)$"];
      nw["tailor:alteration_service"="yes"];
      nw["shop"~"^(shoes|clothes|tailor|bag|sewing|leather)$"]["repair"~"^(yes|only)$"];
      nw["craft"~"^(shoemaker|dressmaker|tailor)$"]["repair"~"^(yes|only)$"];`,
    color: "#FF7F50",
    tags: [
      "shop=shoe_repair",
      "craft=shoemaker",
      "craft=dressmaker",
      "craft=tailor"
    ],
    edit: ["shop", "craft"]
  },
  {
    id: 106,
    group: "goods",
    value: "mobile-phones",
    icon: "/lib/maki-icons/mobile-phone-15.svg",
    query: `
      // Give
      nw["recycling:mobile_phones"="yes"];

      // Give and take
      nw["shop"="mobile_phone"]["second_hand"~"^(yes|only)$"];
      nw["amenity"="give_box"]["electronics"!="no"];

      // Repair
      nw["mobile_phone:repair"~"^(yes|only)$"];
      nw["service:mobile_phone:repair"~"^(yes|only)$"];
      nw["repair"="phone"];
      nw["repair"="mobilephone"];
      nw["repair"="mobile_phone"];
      nw["shop"="mobile_phone"]["repair"~"^(yes|only)$"];

      // Charge
      node["amenity"="device_charging_station"]["fee"!="yes"];`,
    color: "#191970",
    tags: [
      "shop=mobile_phone",
      "recycling:mobile_phones=yes",
      "amenity=give_box",
      "repair=assisted_self_service",
      "repair=*",
      "amenity=device_charging_station"
    ],
    edit: ["shop=mobile_phone", "amenity=recycling", "amenity"]
  },
  {
    id: 107,
    group: "goods",
    subgroup: "mobile-phones",
    value: "mobile-phones-give",
    icon: "/lib/maki-icons/mobile-phone-15.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:mobile_phones"="yes"];

      nw["amenity"="give_box"]["electronics"!="no"]["give_box:policy"!="free_to_take"];`,
    color: "#191970",
    tags: ["amenity=recycling", "amenity=give_box"],
    edit: ["amenity=recycling", "amenity"]
  },
  {
    id: 108,
    group: "goods",
    subgroup: "mobile-phones",
    value: "mobile-phones-take",
    icon: "/lib/maki-icons/mobile-phone-15.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"="mobile_phone"]["second_hand"~"^(yes|only)$"];
      nw["amenity"="give_box"]["electronics"!="no"];`,
    color: "#191970",
    tags: ["shop=mobile_phone", "amenity=give_box"],
    edit: ["shop=mobile_phone", "amenity"]
  },
  {
    id: 109,
    group: "goods",
    subgroup: "mobile-phones",
    value: "mobile-phones-repair",
    icon: "/lib/maki-icons/mobile-phone-15.svg",
    button: "fas fa-tools",
    query: `
      nw["mobile_phone:repair"~"^(yes|only)$"];
      nw["service:mobile_phone:repair"~"^(yes|only)$"];
      nw["repair"="phone"];
      nw["repair"="mobilephone"];
      nw["repair"="mobile_phone"];
      nw["shop"="mobile_phone"]["repair"~"^(yes|only)$"]; `,
    color: "#191970",
    tags: ["shop=mobile_phone", "repair=assisted_self_service", "repair=*"],
    edit: ["shop=mobile_phone", "amenity"]
  },
  {
    id: 110,
    group: "goods",
    value: "computers",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
    query: `
      // Give
      nw["recycling:computers"="yes"];

      // Give and take
      nw["shop"="computer"]["second_hand"~"^(yes|only)$"];
      nw["amenity"="give_box"]["electronics"!="no"];

      // Repair
      nw["computer:repair"~"^(yes|only)$"];
      nw["service:computer:repair"~"^(yes|only)$"];
      nw["repair"="computer"];
      nw["shop"="computer_repair"];
      nw["shop"="computer"]["repair"~"^(yes|only)$"];`,
    color: "#ABAB9A",
    tags: [
      "shop=computer",
      "amenity=recycling",
      "amenity=give_box",
      "repair=assisted_self_service",
      "repair=*"
    ],
    edit: ["shop=computer", "amenity=recycling", "amenity"]
  },
  {
    id: 111,
    group: "goods",
    subgroup: "computers",
    value: "computers-give",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:computers"="yes"];

      nw["amenity"="give_box"]["electronics"!="no"]["give_box:policy"!="free_to_take"];`,
    color: "#ABAB9A",
    tags: ["amenity=recycling", "amenity=give_box"],
    edit: ["amenity=recycling"]
  },
  {
    id: 112,
    group: "goods",
    subgroup: "computers",
    value: "computers-take",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"="computer"]["second_hand"~"^(yes|only)$"];
      nw["amenity"="give_box"]["electronics"!="no"];`,
    color: "#ABAB9A",
    tags: ["shop=computer", "amenity=give_box"],
    edit: ["shop=computer", "amenity"]
  },
  {
    id: 113,
    group: "goods",
    subgroup: "computers",
    value: "computers-repair",
    icon: "https://wiki.openstreetmap.org/w/images/b/bb/Computer-14.svg",
    button: "fas fa-tools",
    query: `
      nw["computer:repair"~"^(yes|only)$"];
      nw["service:computer:repair"~"^(yes|only)$"];
      nw["repair"="computer"];
      nw["shop"="computer_repair"];
      nw["shop"="computer"]["repair"~"^(yes|only)$"];`,
    color: "#ABAB9A",
    tags: ["shop=computer", "repair=assisted_self_service", "repair=*"],
    edit: ["shop=computer", "amenity"]
  },
  {
    id: 114,
    group: "goods",
    value: "toys",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    query: `
      // Give
      nw["recycling:toys"="yes"];

      // Give and take
      nw["shop"="toys"][~"^(regional|fair_trade|second_hand)$"~"^(yes|only)$"];
      nw["amenity"="give_box"];

      // Rent
      nw["amenity"="toy_library"];
      nw["rental"~"toys"];

      // Repair
      nw["service:toy:repair"="yes"];
      nw["toy:repair"="yes"];`,
    color: "#800000",
    tags: [
      "recycling:toys=yes",
      "shop=toys",
      "amenity=give_box",
      "amenity=toy_library",
      "repair=assisted_self_service",
      "repair=*"
    ],
    edit: ["amenity=recycling", "shop=toys", "amenity=toy_library", "amenity"]
  },
  {
    id: 115,
    group: "goods",
    subgroup: "toys",
    value: "toys-give",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:toys"="yes"];

      nw["amenity"="give_box"]["give_box:policy"!="free_to_take"];`,
    color: "#800000",
    tags: ["recycling:toys=yes", "amenity=give_box"],
    edit: ["amenity=recycling", "amenity"]
  },
  {
    id: 116,
    group: "goods",
    subgroup: "toys",
    value: "toys-take",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"="toys"][~"^(regional|fair_trade|second_hand)$"~"^(yes|only)$"];

      nw["amenity"="give_box"];`,
    color: "#800000",
    tags: ["shop=toys", "amenity=give_box"],
    edit: ["shop=toys", "amenity"]
  },
  {
    id: 117,
    group: "goods",
    subgroup: "toys",
    value: "toys-rent",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    button: "fas fa-redo-alt",
    query: `
      nw["amenity"="toy_library"];
      nw["amenity"="give_box"];`,
    color: "#800000",
    tags: ["amenity=toy_library"],
    edit: ["amenity=toy_library"]
  },
  {
    id: 118,
    group: "goods",
    subgroup: "toys",
    value: "toys-repair",
    icon: "https://wiki.openstreetmap.org/w/images/6/62/Toys-14.svg",
    button: "fas fa-tools",
    query: `
      nw["service:toy:repair"="yes"];
      nw["toy:repair"="yes"];`,
    color: "#800000",
    tags: ["repair=assisted_self_service", "repair=*"],
    edit: ["amenity"]
  },
  {
    id: 119,
    group: "goods",
    value: "electronics",
    icon: "/lib/temaki-icons/electronic.svg",
    query: `
      // Give
      nw["recycling:chipboard"="yes"];
      nw["recycling:electrical_appliances"="yes"];
      nw["recycling:electrical_items"="yes"];
      nw["recycling:electronic"="yes"];
      nw["recycling:electronics"="yes"];
      nw["recycling:fridge_and_freezer"="yes"];
      nw["recycling:small_appliances"="yes"];
      nw["recycling:small_electrical_appliances"="yes"];
      nw["recycling:white_goods"="yes"];
      nw["recycling:tv_monitor"="yes"];

      // Give and take
      nw["shop"~"^(electronics|hifi|appliance|camera|kitchen)$"]["second_hand"~"^(yes|only)$"];

      nw["amenity"="give_box"]["electronics"!="no"];

      // Rental
      nw["rental"~"camera_equipment"];
      nw["shop"~"^(electronics|printer|appliance)$"]["rental"~"^(yes|only)$"];

      // Repair
      nw["electronics_repair"~"^(yes|only)$"];
      nw["service:small_electronics_device:repair"~"^(yes|only)$"];
      nw["camera:repair"~"^(yes|only)$"];
      nw["service:camera:repair"~"^(yes|only)$"];
      nw["hifi:repair"~"^(yes|only)$"];
      nw["repair"~"^(electronics|tv|electricity)$"];
      nw["craft"="electronics_repair"];
      nw["shop"~"^(electronics|hifi|camera|radiotechnics|electrical|vacuum_cleaner|appliance|white_goods)$"]["repair"~"^(yes|only)$"];
      nw["craft"~"^(headphones|electronics|electrician)$"]["repair"~"^(yes|only)$"];`,
    color: "#800080",
    tags: [
      "shop=electronics",
      "shop=hifi",
      "shop=appliance",
      "shop=camera",
      "shop=kitchen",
      "shop=radiotechnics",
      "shop=electrical",
      "shop=vacuum_cleaner",
      "shop=appliance",
      "craft=electronics_repair",
      "amenity=recycling",
      "amenity=give_box",
      "repair=assisted_self_service",
      "repair=*"
    ],
    edit: [
      "shop=electronics",
      "shop=hifi",
      "shop=appliance",
      "shop=camera",
      "shop=kitchen",
      "shop=radiotechnics",
      "shop=electrical",
      "shop=vacuum_cleaner",
      "shop=appliance",
      "craft=electronics_repair",
      "amenity=recycling",
      "amenity"
    ]
  },
  {
    id: 120,
    group: "goods",
    subgroup: "electronics",
    value: "electronics-give",
    icon: "/lib/temaki-icons/electronic.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:chipboard"="yes"];
      nw["recycling:electrical_appliances"="yes"];
      nw["recycling:electrical_items"="yes"];
      nw["recycling:electronic"="yes"];
      nw["recycling:electronics"="yes"];
      nw["recycling:fridge_and_freezer"="yes"];
      nw["recycling:small_appliances"="yes"];
      nw["recycling:small_electrical_appliances"="yes"];
      nw["recycling:white_goods"="yes"];
      nw["recycling:tv_monitor"="yes"];

      nw["amenity"="give_box"]["electronics"!="no"]["give_box:policy"!="free_to_take"];`,
    color: "#800080",
    tags: ["amenity=recycling", "amenity=give_box"],
    edit: ["amenity=recycling", "amenity"]
  },
  {
    id: 121,
    group: "goods",
    subgroup: "electronics",
    value: "electronics-take",
    icon: "/lib/temaki-icons/electronic.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"~"^(electronics|hifi|appliance|camera|kitchen)$"]["second_hand"~"^(yes|only)$"];

      nw["amenity"="give_box"]["electronics"!="no"];

      nw["rental"~"camera_equipment"];
      nw["shop"~"^(electronics|printer|appliance)$"]["rental"~"^(yes|only)$"];`,
    color: "#800080",
    tags: ["amenity=give_box"],
    edit: ["amenity"]
  },
  {
    id: 122,
    group: "goods",
    subgroup: "electronics",
    value: "electronics-repair",
    icon: "/lib/temaki-icons/electronic.svg",
    button: "fas fa-tools",
    query: `
      nw["electronics_repair"~"^(yes|only)$"];
      nw["service:small_electronics_device:repair"~"^(yes|only)$"];
      nw["camera:repair"~"^(yes|only)$"];
      nw["service:camera:repair"~"^(yes|only)$"];
      nw["hifi:repair"~"^(yes|only)$"];
      nw["repair"~"^(electronics|tv|electricity)$"];
      nw["craft"="electronics_repair"];
      nw["shop"~"^(electronics|hifi|camera|radiotechnics|electrical|vacuum_cleaner|appliance|white_goods)$"]["repair"~"^(yes|only)$"];
      nw["craft"~"^(headphones|electronics|electrician)$"]["repair"~"^(yes|only)$"];`,
    color: "#800080",
    tags: [
      "shop=electronics",
      "shop=hifi",
      "shop=appliance",
      "shop=camera",
      "shop=kitchen",
      "shop=radiotechnics",
      "shop=electrical",
      "shop=vacuum_cleaner",
      "shop=appliance",
      "craft=electronics_repair",
      "repair=assisted_self_service",
      "repair=*"
    ],
    edit: [
      "shop=electronics",
      "shop=hifi",
      "shop=appliance",
      "shop=camera",
      "shop=kitchen",
      "shop=radiotechnics",
      "shop=electrical",
      "shop=vacuum_cleaner",
      "shop=appliance",
      "craft=electronics_repair",
      "amenity"
    ]
  },
  {
    id: 123,
    group: "goods",
    value: "furniture",
    icon: "/lib/temaki-icons/furniture.svg",
    query: `
      // Give
      nw["recycling:furniture"="yes"];
      nw["recycling:interior_decoration"="yes"];
      nw["recycling:wood"="yes"];
      nw["recycling:pallets"="yes"];

      // Give and take
      nw["shop"~"^(interior_decoration|furniture|bed)$"][~"^(rental|regional|fair_trade|second_hand)$"~"^(yes|only)$"];
      nw["amenity"="give_box"];

      nw["rental"~"tableware|furniture"];
      nw["shop"="furniture"]["rental"~"^(yes|only)$"];

      // Repair
      nw["service:furniture:repair"="yes"];
      nw["furniture:repair"~"^(yes|only)$"];
      nw["shop"="furniture"]["repair"~"^(yes|only)$"];
      nw["craft"="cabinet_maker"]["repair"~"^(yes|only)$"];`,
    color: "#B8860B",
    tags: [
      "recycling:furniture=yes",
      "recycling:wood=yes",
      "shop=interior_decoration",
      "shop=furniture",
      "craft=cabinet_maker",
      "amenity=give_box",
      "repair=assisted_self_service",
      "repair=*"
    ],
    edit: [
      "amenity=recycling",
      "shop=interior_decoration",
      "shop=furniture",
      "craft=cabinet_maker",
      "amenity"
    ]
  },
  {
    id: 124,
    group: "goods",
    subgroup: "furniture",
    value: "furniture-give",
    icon: "/lib/temaki-icons/furniture.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:furniture"="yes"];
      nw["recycling:interior_decoration"="yes"];
      nw["recycling:wood"="yes"];
      nw["recycling:pallets"="yes"];

      nw["amenity"="give_box"]["give_box:policy"!="free_to_take"];`,
    color: "#B8860B",
    tags: ["recycling:furniture=yes", "recycling:wood=yes", "amenity=give_box"],
    edit: ["amenity=recycling", "amenity"]
  },
  {
    id: 125,
    group: "goods",
    subgroup: "furniture",
    value: "furniture-take",
    icon: "/lib/temaki-icons/furniture.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
      nw["shop"~"^(interior_decoration|furniture|bed)$"][~"^(rental|regional|fair_trade|second_hand)$"~"^(yes|only)$"];
      nw["amenity"="give_box"];

      nw["rental"~"tableware|furniture"];
      nw["shop"="furniture"]["rental"~"^(yes|only)$"];`,
    color: "#B8860B",
    tags: ["shop=interior_decoration", "shop=furniture", "amenity=give_box"],
    edit: ["shop=interior_decoration", "craft=cabinet_maker", "amenity"]
  },
  {
    id: 126,
    group: "goods",
    subgroup: "furniture",
    value: "furniture-repair",
    icon: "/lib/temaki-icons/furniture.svg",
    button: "fas fa-tools",
    query: `
    nw["service:furniture:repair"="yes"];
    nw["furniture:repair"~"^(yes|only)$"];
    nw["shop"="furniture"]["repair"~"^(yes|only)$"];
    nw["craft"="cabinet_maker"]["repair"~"^(yes|only)$"];`,
    color: "#B8860B",
    tags: ["repair=assisted_self_service", "repair=*", "craft=cabinet_maker"],
    edit: ["shop=furniture", "craft=cabinet_maker", "amenity"]
  },
  {
    id: 127,
    group: "mobility",
    value: "bicycle",
    icon: "/lib/maki-icons/bicycle-15.svg",
    query: `
      // Give
      nw["recycling:bicycles"="yes"];

      // Get
      nw["shop"="bicycle"]["second_hand"~"^(yes|only)$"];

      // Rent
      nw["service:bicycle:rental"~"^(yes|only)$"];
    nw["bicycle:rental"~"^(yes|only)$"];
    nw["bicycle_rental"~"^(yes|only|cargo_bike)$"];
    nw["rental:bicycle"~"^(yes|only)$"];
    nw["rental"~"bicycle|bike"];
    nw["amenity"~"^(bicycle_rental|bicycle_sharing)$"];
    nw["shop"="bicycle_rental"];
    nw["shop"="bicycle"]["rental"~"^(yes|only)$"];

      // Repair
      nw["service:bicycle:repair"~"^(yes|only)$"];
      nw["bicycle:repair"~"^(yes|only)$"];
      nw["amenity"="bicycle_repair_station"];
      nw["shop"="bicycle"]["repair"~"^(yes|only)$"];
      nw["service:bicycle:diy"="yes"];`,
    color: "#4682B4",
    tags: [
      "amenity=recycling",
      "shop=bicycle",
      "amenity=bicycle_rental",
      "amenity=bicycle_repair_station",
      "repair=assisted_self_service",
      "repair=*",
      "service:bicycle:repair=*",
      "service:bicycle:diy=*"
    ],
    edit: [
      "amenity=recycling",
      "shop=bicycle",
      "amenity=bicycle_rental",
      "amenity=bicycle_repair_station",
      "amenity"
    ]
  },
  {
    id: 128,
    group: "mobility",
    subgroup: "bicycle",
    value: "bicycle-give",
    icon: "/lib/maki-icons/bicycle-15.svg",
    button: "fas fa-sync-alt",
    query: `
      nw["recycling:bicycles"="yes"];`,
    color: "#4682B4",
    tags: ["amenity=recycling"],
    edit: ["amenity=recycling"]
  },
  {
    id: 129,
    group: "mobility",
    subgroup: "bicycle",
    value: "bicycle-get",
    icon: "/lib/maki-icons/bicycle-15.svg",
    button: "fas fa-long-arrow-alt-right",
    query: `
    nw["shop"="bicycle"]["second_hand"~"^(yes|only)$"];`,
    color: "#4682B4",
    tags: ["shop=bicycle"],
    edit: ["shop=bicycle"]
  },
  {
    id: 130,
    group: "mobility",
    subgroup: "bicycle",
    value: "bicycle-rent",
    icon: "/lib/maki-icons/bicycle-15.svg",
    button: "fas fa-redo-alt",
    query: `
    nw["service:bicycle:rental"~"^(yes|only)$"];
    nw["bicycle:rental"~"^(yes|only)$"];
    nw["bicycle_rental"~"^(yes|only|cargo_bike)$"];
    nw["rental:bicycle"~"^(yes|only)$"];
    nw["rental"~"bicycle|bike"];
    nw["amenity"~"^(bicycle_rental|bicycle_sharing)$"];
    nw["shop"="bicycle_rental"];
    nw["shop"="bicycle"]["rental"~"^(yes|only)$"];`,
    color: "#4682B4",
    tags: ["amenity=bicycle_rental"],
    edit: ["amenity=bicycle_rental"]
  },
  {
    id: 131,
    group: "mobility",
    subgroup: "bicycle",
    value: "bicycle-repair",
    icon: "/lib/maki-icons/bicycle-15.svg",
    button: "fas fa-tools",
    query: `
    nw["service:bicycle:repair"~"^(yes|only)$"];
    nw["bicycle:repair"~"^(yes|only)$"];
    nw["amenity"="bicycle_repair_station"];
    nw["shop"="bicycle"]["repair"~"^(yes|only)$"];
    nw["service:bicycle:diy"="yes"];`,
    color: "#4682B4",
    tags: [
      "amenity=bicycle_repair_station",
      "repair=assisted_self_service",
      "repair=*",
      "service:bicycle:repair=*",
      "service:bicycle:diy=*"
    ],
    edit: ["amenity=bicycle_repair_station", "amenity", "shop"]
  }
];
