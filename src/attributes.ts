import { Attribute, Tags } from "./Generator";
import { equalsIgnoreCase } from "./utilities/string";
import { parseOpeningHours } from "./map";

const template = (title: string, icon: string, value?: string) =>
  `<span title="${title}" class="attribut"><i class="${icon}"></i>${
    value !== undefined ? " " + value : ""
  }</span>`;

export const attributes: Attribute<{}>[] = [
  {
    check: tags =>
      (!!tags.internet_access &&
        tags.internet_access !== "no" &&
        tags["internet_access:fee"] !== "customers" &&
        tags["internet_access:fee"] !== "yes") ||
      (!!tags.wifi && tags.wifi !== "no"),
    template: local => template(local.internet, "fas fa-wifi")
  },
  {
    check: tags => !!tags["piste:difficulty"],
    template: (local, tags) =>
      template(
        local.difficulty,
        "fas fa-exclamation-circle",
        (local["piste:difficulty"] as any)[tags["piste:difficulty"]]
      )
  },
  {
    check: tags =>
      tags["bottle"] === "yes" || tags["drinking_water:refill"] === "yes",
    template: local => template(local.bottle, "fas fa-wine-bottle")
  },
  {
    check: (tags, value) => !!tags.capacity && value === "book-exchange",
    template: (local, tags) =>
      template(local.capacity, "fas fa-book", tags.capacity)
  },
  {
    check: tags =>
      tags["amenity"] === "drinking_water" ||
      tags["amenity"] === "water_point" ||
      tags["drinking_water"] === "yes" ||
      tags["drinking_water:refill"] === "yes",
    template: local => template(local.water, "fas fa-tint")
  },
  {
    check: tags =>
      tags["service:bicycle:pump"] === "yes" ||
      tags["amenity"] === "compressed_air" ||
      tags["compressed_air"] === "yes",
    template: local => template(local.pump, "fas fa-tachometer-alt")
  },
  {
    check: tags =>
      tags.leisure === "playground" ||
      !!tags.playground ||
      tags.swimming_pool === "wading" ||
      tags.swimming_pool === "kids" ||
      tags.swimming_pool === "plunge" ||
      tags.children === "designated" ||
      tags.children === "yes" ||
      (tags.kids_area === "yes" && tags["kids_area:fee"] !== "yes"),
    template: local => template(local.playground, "fas fa-child")
  },
  {
    check: tags =>
      (!!tags.changing_table &&
        tags.changing_table !== "no" &&
        tags["changing_table:fee"] !== "yes") ||
      (!!tags.diaper && tags.diaper !== "no" && tags["diaper:fee"] !== "yes") ||
      (!!tags.baby_feeding && tags.baby_feeding !== "no"),
    template: local => template(local.changing_table, "fas fa-baby")
  },
  {
    check: tags =>
      tags["service:bicycle:repair"] === "yes" ||
      tags["bicycle:repair"] === "yes" ||
      tags["service:bicycle:tools"] === "yes" ||
      tags["service:bicycle:diy"] === "yes" ||
      hasPropThatEndsWith(tags, ":repair", "yes"),
    template: local => template(local.tools, "fas fa-tools")
  },
  {
    check: tags =>
      tags["service:bicycle:chain_tool"] === "yes" ||
      tags["service:bicycle:chaintool"] === "yes",
    template: local => template(local.chainTool, "fas fa-link")
  },
  {
    check: tags =>
      tags["service:bicycle:repair"] === "yes" ||
      tags["bicycle:repair"] === "yes" ||
      tags["reuse:bicycles"] === "yes" ||
      tags["recycling:bicycles"] === "yes" ||
      tags["bicycle"] === "yes",
    template: local => template(local.bicycle, "fas fa-bicycle")
  },
  {
    check: tags => tags["car"] === "yes",
    template: local => template(local.car, "fas fa-car-side")
  },
  {
    check: tags =>
      tags["service:clothes:repair"] === "yes" ||
      tags["clothes:repair"] === "yes" ||
      tags["service:fabrik:repair"] === "yes" ||
      tags["fabrik:repair"] === "yes" ||
      tags["reuse:clothes"] === "yes" ||
      tags["recycling:clothes"] === "yes",
    template: local => template(local.clothes, "fas fa-tshirt")
  },
  {
    check: tags =>
      tags["service:mobile_phone:repair"] === "yes" ||
      tags["mobile_phone:repair"] === "yes" ||
      tags["reuse:mobile_phones"] === "yes" ||
      tags["recycling:mobile_phones"] === "yes",
    template: local => template(local.mobile, "fas fa-mobile-alt")
  },
  {
    check: tags =>
      tags["service:small_electronics_device:repair"] === "yes" ||
      tags["small_electronics_device:repair"] === "yes" ||
      tags["service:electronics:repair"] === "yes" ||
      tags["electronics:repair"] === "yes" ||
      tags["recycling:small_electrical_appliances"] === "yes" ||
      tags["recycling:small_appliances"] === "yes" ||
      tags["recycling:electrical_items"] === "yes" ||
      tags["recycling:electrical_appliances"] === "yes" ||
      tags["recycling:electronic"] === "yes" ||
      tags["recycling:electronics"] === "yes" ||
      tags["reuse:small_electrical_appliances"] === "yes" ||
      tags["reuse:small_appliances"] === "yes" ||
      tags["reuse:electrical_items"] === "yes" ||
      tags["reuse:electrical_appliances"] === "yes" ||
      tags["reuse:electronics"] === "yes" ||
      tags["reuse:electronic"] === "yes",
    template: local => template(local.electronics, "fas fa-plug")
  },
  {
    check: tags =>
      tags["service:furniture:repair"] === "yes" ||
      tags["furniture:repair"] === "yes" ||
      tags["reuse:furniture"] === "yes" ||
      tags["recycling:furniture"] === "yes",
    template: local => template(local.furniture, "fas fa-chair")
  },
  {
    check: tags =>
      tags["service:computer:repair"] === "yes" ||
      tags["computer:repair"] === "yes" ||
      tags["reuse:computers"] === "yes" ||
      tags["recycling:computers"] === "yes",
    template: local => template(local.computer, "fas fa-laptop")
  },
  {
    check: tags =>
      tags["service:toy:repair"] === "yes" ||
      tags["toy:repair"] === "yes" ||
      tags["reuse:toys"] === "yes" ||
      tags["recycling:toys"] === "yes",
    template: local => template(local.toy, "fas fa-horse")
  },
  {
    check: tags => hasPropThatStartsWith(tags, "recycling:", "yes"),
    template: local => template(local.recycling, "fas fa-recycle")
  },
  {
    check: tags =>
      tags["shop"] === "second_hand" ||
      tags["second_hand"] === "yes" ||
      tags["second_hand"] === "only" ||
      tags["shop"] === "antiques" ||
      tags["amenity"] === "give_box" ||
      tags["amenity"] === "public_bookcase",
    template: local => template(local.reuse, "fas fa-sync-alt")
  },
  {
    check: tags => tags["reuse:policy"] === "free_to_take",
    template: local => template(local.freeToTake, "fas fa-long-arrow-alt-left")
  },
  {
    check: tags =>
      tags["reuse:policy"] === "free_to_take_or_give" ||
      (!tags["reuse:policy"] &&
        (tags["amenity"] === "reuse" ||
          hasPropThatStartsWith(tags, "reuse:", "yes") ||
          tags["amenity"] === "give_box")),
    template: local => template(local.freeToTakeOrGive, "fas fa-exchange-alt")
  },
  {
    check: tags =>
      (tags.amenity === "library" && tags.library !== "booksharing") ||
      tags.amenity === "toy_library" ||
      tags.amenity === "bicycle_rental",
    template: local => template(local.borrow, "fas fa-redo-alt")
  },
  {
    check: tags => tags.sport === "bmx" || tags.sport === "cycling",
    template: local => template(local.park, "fas fa-infinity")
  },
  {
    check: tags => tags.amenity === "charging_station",
    template: local => template(local.charging, "fas fa-charging-station")
  },
  {
    check: tags => tags.amenity === "device_charging_station",
    template: local => template(local.mobileCharging, "fas fa-battery-full")
  },
  {
    check: tags => !!tags.hoops,
    template: (local, tags) =>
      `<span title="${local.hoops}" class="attribut"><img style="height: 13px;vertical-align: text-top;" src="/lib/maki-icons/basketball-15.svg"> ${tags.hoops}</span>`
  },
  {
    check: tags => tags.female === "yes" || tags.unisex === "yes",
    template: local => template(local.female, "fas fa-female")
  },
  {
    check: tags => tags.male === "yes" || tags.unisex === "yes",
    template: local => template(local.male, "fas fa-male")
  },
  {
    check: tags =>
      tags.location === "indoor" ||
      tags["public_bookcase:type"] === "building" ||
      !!(tags.indoor && tags.indoor !== "no") ||
      !!(tags.building && tags.building !== "no"),
    template: local => template(local.indoor, "far fa-building")
  },
  {
    check: tags =>
      (!!tags.covered && tags.covered !== "no") || tags.amenity === "shelter",
    template: local => template(local.covered, "fas fa-chevron-up")
  },
  {
    check: tags => tags.lit === "yes",
    template: local => template(local.light, "far fa-lightbulb")
  },
  {
    check: tags =>
      tags.fee === "yes" ||
      (!!tags.shop && tags.fee !== "no") ||
      tags["compressed_air:fee"] === "yes",
    template: local => template(local.fee, "far fa-money-bill-alt")
  },
  {
    check: tags =>
      !isFree(tags) &&
      (tags.social_facility === "soup_kitchen" ||
        tags.shop === "charity" ||
        tags.charity === "yes"),

    template: local => template(local.veryCheap, "fas fa-heart")
  },
  {
    check: tags => isFree(tags),
    template: local => template(local.free, "fas fa-heart")
  },
  {
    check: tags =>
      equalsIgnoreCase(tags.access, "private") ||
      equalsIgnoreCase(tags.access, "no"),
    template: local => template(local.membersOnly, "fas fa-user-lock")
  },
  {
    check: tags =>
      equalsIgnoreCase(tags.access, "customers") ||
      equalsIgnoreCase(tags.access, "customer") ||
      equalsIgnoreCase(tags.access, "permit"),
    template: local => template(local.customersOnly, "fas fa-ticket-alt")
  },
  {
    check: tags =>
      equalsIgnoreCase(tags.access, "yes") ||
      equalsIgnoreCase(tags.access, "permissive") ||
      equalsIgnoreCase(tags.access, "public"),
    template: local => template(local.public, "fas fa-universal-access")
  },
  {
    check: tags =>
      /horizontal_bar/.test(tags["fitness_station"]) ||
      tags["fitness_station:horizontal_bar"] === "yes" ||
      /horizontal_bar/.test(tags["playground"]) ||
      tags["playground:horizontal_bar"] === "yes",
    template: local => template(local.horizontalBar, "fas fa-minus")
  },
  {
    check: tags =>
      /parallel_bars/.test(tags["fitness_station"]) ||
      tags["fitness_station:parallel_bars"] === "yes",
    template: local =>
      template(local.parallelBars, "fas fa-grip-lines-vertical")
  },
  {
    check: tags =>
      /rings/.test(tags["fitness_station"]) ||
      tags["fitness_station:rings"] === "yes",
    template: local => template(local.rings, "far fa-circle")
  },
  {
    check: tags =>
      /elliptical_trainer|air_walker|exercise_bike|rower/.test(
        tags["fitness_station"]
      ) ||
      tags["fitness_station:elliptical_trainer"] === "yes" ||
      tags["fitness_station:air_walker"] === "yes" ||
      tags["fitness_station:exercise_bike"] === "yes" ||
      tags["fitness_station:rower"] === "yes" ||
      /exercise/.test(tags["playground"]) ||
      tags["playground:exercise"] === "yes",
    template: local => template(local.exerciseMachine, "fas fa-biking")
  },
  {
    check: tags =>
      /slackline|balance(_)?beam/.test(tags["fitness_station"]) ||
      tags["fitness_station:slackline"] === "yes" ||
      tags["fitness_station:balance_beam"] === "yes" ||
      tags["fitness_station:balancebeam"] === "yes" ||
      /slackline|balance(_)?beam/.test(tags["playground"]) ||
      tags["playground:slackline"] === "yes" ||
      tags["playground:balance_beam"] === "yes" ||
      tags["playground:balancebeam"] === "yes",
    template: local => template(local.balance, "fas fa-street-view")
  },
  {
    check: tags => !!wheelchairAccess(tags, {}),
    template: (local, tags) => {
      const access = wheelchairAccess(tags, local);
      return `<span title="${access?.text}" class="attribut"><i class="fab fa-accessible-icon"></i> <i class="fas fa-${access?.icon}" style="color: ${access?.color};"></i></span>`;
    }
  },
  {
    check: tags =>
      /only|yes|limited/.test(tags["zero_waste"] || tags["bulk_purchase"]),
    template: local => template(local.avoidPackaging, "fas fa-hands")
  },
  {
    check: tags => !!regional(tags, {}),
    template: (local, tags) => {
      const r = regional(tags, local);
      return `<span title="${r?.text}" class="attribut"><i class="fas fa-map-marker-alt"></i> <i class="fas fa-${r?.icon}" style="color: ${r?.color};"></i></span>`;
    }
  },
  {
    check: tags => !!vegetarian(tags, {}),
    template: (local, tags) => {
      const v = vegetarian(tags, local);
      return `<span title="${v?.text}" class="attribut"><i class="fas fa-cheese"></i> <i class="fas fa-${v?.icon}" style="color: ${v?.color};"></i></span>`;
    }
  },
  {
    check: tags => !!vegan(tags, {}),
    template: (local, tags) => {
      const v = vegan(tags, local);
      return `<span title="${v?.text}" class="attribut"><i class="fas fa-carrot"></i> <i class="fas fa-${v?.icon}" style="color: ${v?.color};"></i></span>`;
    }
  },
  {
    check: tags => !!organic(tags, {}),
    template: (local, tags) => {
      const o = organic(tags, local);
      return `<span title="${o?.text}" class="attribut"><i class="fas fa-seedling"></i> <i class="fas fa-${o?.icon}" style="color: ${o?.color};"></i></span>`;
    }
  },
  {
    check: tags => !!fairTrade(tags, {}),
    template: (local, tags) => {
      const f = fairTrade(tags, local);
      return `<span title="${f?.text}" class="attribut"><i class="fas fa-handshake"></i> <i class="fas fa-${f?.icon}" style="color: ${f?.color};"></i></span>`;
    }
  }
];

function isFree(tags: Tags): boolean {
  return (
    equalsIgnoreCase(tags.fee, "no") ||
    equalsIgnoreCase(tags.fee, "donation") ||
    equalsIgnoreCase(tags.fee, "interval") ||
    equalsIgnoreCase(tags.fee, "free") ||
    equalsIgnoreCase(tags.fee, "none") ||
    parseOpeningHours(tags.fee, "en") ||
    tags["fee:conditional"] ||
    tags.amenity === "give_box" ||
    tags["amenity"] === "public_bookcase"
  );
}

function wheelchairAccess(tags: Tags, local: any) {
  switch (tags["wheelchair"]) {
    case "yes":
    case "designated":
      return {
        text: local.wheelchair?.yes,
        color: "green",
        icon: "check-circle"
      };
    case "limited":
      return {
        text: local.wheelchair?.limited,
        color: "orange",
        icon: "exclamation-circle"
      };
    case "no":
      return { text: local.wheelchair?.no, color: "red", icon: "times-circle" };
    default:
      // do not display for others values or undefined
      return undefined;
  }
}

function regional(tags: Tags, local: any) {
  switch (tags["regional"]) {
    case "only":
      return {
        text: local.regional?.only,
        color: "green",
        icon: "check-circle"
      };
    case "yes":
    case "limited":
      return {
        text: local.regional?.yes,
        color: "orange",
        icon: "exclamation-circle"
      };
    case "no":
      return { text: local.regional?.no, color: "red", icon: "times-circle" };
    default:
      // do not display for others values or undefined
      return undefined;
  }
}

function vegetarian(tags: Tags, local: any) {
  const vegetarian =
    tags["diet:vegetarian"] ||
    tags["vegetarian"] ||
    tags["diet:lacto_vegetarian"] ||
    tags["diet:ovo_vegetarian"];

  if (vegetarian === "only") {
    return {
      text: local.vegetarian?.only,
      color: "green",
      icon: "check-circle"
    };
  } else if (
    vegetarian === "yes" ||
    vegetarian === "limited" ||
    /vegetarian/gi.test(tags["cuisine"])
  ) {
    return {
      text: local.vegetarian?.yes,
      color: "DodgerBlue",
      icon: "info-circle"
    };
  } else if (vegetarian === "no") {
    return {
      text: local.vegetarian?.no,
      color: "Orange",
      icon: "exclamation-circle"
    };
  }

  // do not display for others values or undefined
  return undefined;
}

function vegan(tags: Tags, local: any) {
  const vegan = tags["diet:vegan"] || tags["vegan"] || tags["diet:fruitarian"];

  if (vegan === "only") {
    return {
      text: local.vegan?.only,
      color: "green",
      icon: "check-circle"
    };
  } else if (
    vegan === "yes" ||
    vegan === "limited" ||
    /vegan/gi.test(tags["cuisine"])
  ) {
    return {
      text: local.vegan?.yes,
      color: "DodgerBlue",
      icon: "info-circle"
    };
  } else if (vegan === "no") {
    return {
      text: local.vegan?.no,
      color: "Orange",
      icon: "exclamation-circle"
    };
  }

  // do not display for others values or undefined
  return undefined;
}

function fairTrade(tags: Tags, local: any) {
  const fairTrade = tags["fair_trade"];

  if (fairTrade === "only" || tags.shop === "fair_trade") {
    return {
      text: local.fairTrade?.only,
      color: "green",
      icon: "check-circle"
    };
  } else if (fairTrade === "yes" || fairTrade === "limited") {
    return {
      text: local.fairTrade?.yes,
      color: "DodgerBlue",
      icon: "info-circle"
    };
  } else if (fairTrade === "no") {
    return {
      text: local.fairTrade?.no,
      color: "Orange",
      icon: "exclamation-circle"
    };
  }

  // do not display for others values or undefined
  return undefined;
}
function organic(tags: Tags, local: any) {
  const organic = tags["organic"];

  if (organic === "only") {
    return {
      text: local.organic?.only,
      color: "green",
      icon: "check-circle"
    };
  } else if (organic === "yes" || organic === "limited") {
    return {
      text: local.organic?.yes,
      color: "DodgerBlue",
      icon: "info-circle"
    };
  } else if (organic === "no") {
    return {
      text: local.organic?.no,
      color: "Orange",
      icon: "exclamation-circle"
    };
  }

  // do not display for others values or undefined
  return undefined;
}

function hasPropThatStartsWith(tags: any, name: string, value: string) {
  for (const tag in tags) {
    if (
      tags.hasOwnProperty(tag) &&
      tag.toUpperCase().startsWith(name.toUpperCase()) &&
      tags[tag] === value
    ) {
      return true;
    }
  }
  return false;
}

function hasPropThatEndsWith(tags: any, name: string, value: string) {
  for (const tag in tags) {
    if (
      tags.hasOwnProperty(tag) &&
      tag.toUpperCase().endsWith(name.toUpperCase()) &&
      tags[tag] === value
    ) {
      return true;
    }
  }
  return false;
}
