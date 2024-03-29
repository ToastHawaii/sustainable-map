// Copyright (C) 2020 Markus Peloso
//
// This file is part of Sustainable map.
//
// Sustainable map is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as
// published by the Free Software Foundation, either version 3 of the
// License, or (at your option) any later version.
//
// Sustainable map is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with Sustainable map.  If not, see <http://www.gnu.org/licenses/>.

export const type = {
  artwork: { name: "Artwork", description: "" },
  fountain: { name: "Fountain", description: "" },
  "tourist-attraction": { name: "Tourist attraction", description: "" },
  "archaeological-site": { name: "Archaeological site", description: "" },
  trail: { name: "Educational trail", description: "" },
  "battery-recycling": {
    name: "Battery",
    description: "",
    externalResources: [
      {
        name: "Recycling Map",
        url: "https://recycling-map.ch/en/map/?pos/{lat}/{lng}/{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "oil-recycling": {
    name: "Oil",
    description: "",
    externalResources: [
      {
        name: "Recycling Map",
        url: "https://recycling-map.ch/en/map/?pos/{lat}/{lng}/{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "reusable-bottle-reuse": {
    name: "Reusable bottle",
    description: "",
    externalResources: [
      {
        name: "Recycling Map",
        url: "https://recycling-map.ch/en/map/?pos/{lat}/{lng}/{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "rubble-recycling": {
    name: "Building rubble",
    description: "",
    externalResources: [
      {
        name: "Recycling Map",
        url: "https://recycling-map.ch/en/map/?pos/{lat}/{lng}/{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "plastic-recycling": {
    name: "Plastic",
    description: "",
    externalResources: [
      {
        name: "Recycling Map",
        url: "https://recycling-map.ch/en/map/?pos/{lat}/{lng}/{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "hazardous-recycling": {
    name: "Hazardous waste",
    description: "",
    externalResources: [
      {
        name: "Recycling Map",
        url: "https://recycling-map.ch/en/map/?pos/{lat}/{lng}/{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  sport: { name: "Sport", description: "" },
  books: {
    name: "Books",
    description: "",
    externalResources: [
      {
        name: "Bôite À Lire",
        url: "https://www.boite-a-lire.com/",
      },
      {
        name: "OpenBookCase",
        url: "https://openbookcase.org/map",
      },
      {
        name: "Karte öffentlicher Bücherschränke",
        url: "https://www.lesestunden.de/karte-oeffentlicher-buecherschraenke/",
      },
      {
        name: "Little Free Library World Map",
        url: "https://littlefreelibrary.org/ourmap/",
      },
      {
        name: "Liste öffentlicher Bücherschränke",
        url: "https://de.wikipedia.org/wiki/Liste_%C3%B6ffentlicher_B%C3%BCcherschr%C3%A4nke",
        bounds: [35.81, -10.15, 55.25, 24.22],
      },
      {
        name: "Tauschgnom",
        url: "https://www.tauschgnom.de/offene-buecherschraenke",
        bounds: [45.54, 5.32, 57.91, 17.45],
      },
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
      {
        name: "Zero Waste Map",
        url: "https://zerowastemap.org/",
      },
    ],
  },
  "books-get": {
    name: "Get books",
    description: "",
  },
  "books-borrow": {
    name: "Borrow books",
    description: "",
  },
  "books-give": {
    name: "Give books",
    description: "",
  },
  "books-recycle": {
    name: "Recycle books",
    description: "",
  },
  kneipp_water_cure: { name: "Kneipp facility", description: "" },
  castle: { name: "Castle", description: "" },
  mill: { name: "Mill", description: "" },
  history: { name: "History", description: "" },
  memorial: { name: "Memorial", description: "" },
  monument: { name: "Monument", description: "" },
  museum: { name: "Museum", description: "" },
  observatory: { name: "Observatory", description: "" },
  ruins: { name: "Ruins", description: "" },
  cave: { name: "Cave", description: "" },
  natural_monument: { name: "Natural monument", description: "" },
  pond: { name: "Pond", description: "" },
  rock: { name: "Rock", description: "" },
  viewpoint: { name: "Viewpoint", description: "" },
  waterfall: { name: "Waterfall", description: "" },
  spring: { name: "Spring", description: "" },
  assistance: {
    name: "Assistance",
    description: "",
    externalResources: [
      {
        name: "Nachbarschaftshilfe",
        url: "https://www.nachbarschaftshilfe.ch/standorte",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "assistance-female": { name: "For women", description: "" },
  "assistance-male": { name: "For men", description: "" },
  "assistance-senior": { name: "For elderly", description: "" },
  "assistance-disabled": { name: "For disabled", description: "" },
  "assistance-homeless": { name: "For underprivileged", description: "" },
  "assistance-migrant": { name: "For refugees", description: "" },
  "assistance-children": { name: "For children", description: "" },
  "assisted-repair": {
    name: "Assisted repair",
    description:
      "Here you can repair broken things together with professionals. You'll meet new people and usually you'll also get coffee and cake. Well-known events are repair cafés.",
    externalResources: [
      {
        name: "Repair Café Worldwide",
        url: "https://repaircafe.org/en/visit/",
      },
      {
        name: "Repair Café Switzerland",
        url: "https://repair-cafe.ch/de/events",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Reparatur-Initiativen",
        url: "https://www.reparatur-initiativen.de/orte",
        bounds: [45.82, 5.8, 55.26, 17.31],
      },
      {
        name: "Zero Waste Map",
        url: "https://zerowastemap.org/",
      },
      {
        name: "iFixit",
        url: "https://www.ifixit.com/Guide",
      },
    ],
  },
  barbecue: {
    name: "Barbecue",
    description: "",
    externalResources: [
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
    ],
  },
  "baking-oven": { name: "Baking oven", description: "" },
  "health-products": {
    name: "Health products",
    description:
      "A shop selling personal care, cosmetics, household cleaning or medical products.",
  },
  "bicycle-rental": {
    name: "Bicycle rental",
    description: "",
    externalResources: [
      {
        name: "geo.admin.ch - Bike sharing and bicycle hire",
        url: "  https://map.geo.admin.ch/?lang=en&layers=ch.bfe.bikesharing",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
    ],
  },
  "bicycle-self-repair": {
    name: "Bicycle self repair",
    description: "",
    externalResources: [
      {
        name: "Bikekitchen",
        url: "http://www.heureux-cyclage.org/les-ateliers-dans-le-monde?lang=en",
      },
      {
        name: "Fahrradselbsthilfewerkstätten in Berlin",
        url: "https://fahrrad.fandom.com/de/wiki/Fahrradselbsthilfewerkst%C3%A4tten_in_Berlin",
        bounds: [52.33826, 13.08835, 52.67551, 13.76116],
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/fahrraeder-ebikes/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
    ],
  },
  "charging-station": {
    name: "Charging station",
    description: "",
    externalResources: [
      {
        name: "Open Charge Map",
        url: "https://map.openchargemap.io/",
      },
      {
        name: "bike energy | Ladestationen für E-Bikes & E-Car",
        url: "https://www.google.com/maps/d/u/0/viewer?mid=1wdyB_yGO8FqEWUbD-HJTvpQ-KRY&ll={lat}%2C{lng}&z={zoom}",
      },
    ],
  },
  musical_instrument: {
    name: "Instrument",
    description: "",
    externalResources: [
      {
        name: "Instrumenten-Börse",
        url: "https://www.stadt-zuerich.ch/ssd/de/index/mkz/themen/instrumenten-boerse1.html",
        bounds: [47.159438, 8.35768, 47.694472, 8.984941],
      },
    ],
  },
  advertising: {
    name: "Advertising space",
    description: "Here you can hang up posters to advertise your concern.",
  },
  "community-centre": { name: "Community centre", description: "" },
  scout: {
    name: "Scout Group",
    description: "",
    externalResources: [
      {
        name: "Scout Movement Switzerland",
        url: "https://pfadi.swiss/en/go/joining-scouts/?q={lat},{lng}#finder",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "community-garden": {
    name: "Community garden",
    description:
      "Here is a garden which you can cultivate together with others. You can plant, water and harvest vegetables, herbs, flowers and so on and watch them grow.",
    externalResources: [
      {
        name: "Pflanzplatz Dunkelhölzli Gemüseabo",
        url: "https://www.dunkelhoelzli.ch/",
        bounds: [47.159438, 8.35768, 47.694472, 8.984941],
      },
      {
        name: "Kooperationsstelle für solidarische Landwirtschaft",
        url: "https://www.solawi.ch/vernetzungsplattform/",
        bounds: [45.64, 2.12, 55.07, 19.03],
      },
    ],
  },
  grow: {
    name: "Grow",
    description: "",
    externalResources: [
      {
        name: "Pflanzplatz Dunkelhölzli Gemüseabo",
        url: "https://www.dunkelhoelzli.ch/",
        bounds: [47.159438, 8.35768, 47.694472, 8.984941],
      },
      {
        name: "Kooperationsstelle für solidarische Landwirtschaft",
        url: "https://www.solawi.ch/vernetzungsplattform/",
        bounds: [45.64, 2.12, 55.07, 19.03],
      },
    ],
  },
  grocery: {
    name: "Grocery",
    description: "",
    externalResources: [
      {
        name: "Vom Milchbuur",
        url: "https://www.swissmilk.ch/de/schweizer-milch/vommilchbuur/karte/?certificate=&product=&offer=&main=&mapbounds={bbox}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Fairtrade Deutschland",
        url: "https://www.fairtrade-deutschland.de/einkaufen/einkaufs-finder.html",
        bounds: [47.27, 5.87, 55.1, 15.04],
      },
      {
        name: "Bio Partner",
        url: "https://www.biopartner.ch/shopfinder/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "ZeroWaste Switzerland",
        url: "https://zerowasteswitzerland.ch/en/zws-map/?_zws_map={bbox},{zoom}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  plant: {
    name: "Plant",
    description: "",
  },
  sweets: {
    name: "Sweets",
    description: "",
  },
  "baked-goods": {
    name: "Baked goods",
    description: "",
  },
  dairy: {
    name: "Dairy products",
    description: "",
    externalResources: [
      {
        name: "Die Faire Milch",
        url: "https://www.faireswiss.ch/de/points-de-vente/liste-der-geschafte",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Vom Milchbuur",
        url: "https://www.swissmilk.ch/de/schweizer-milch/vommilchbuur/karte/?certificate=&product=&offer=&main=&mapbounds={bbox}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Die faire Milch",
        url: "https://diefairemilch.de/",
        bounds: [47.27, 5.87, 55.1, 15.04],
      },
      {
        name: "fairebel - Die faire Milch",
        url: "https://www.fairebel.be/einkaufen/",
        bounds: [49.497, 2.3889, 51.5517, 6.4081],
      },
      {
        name: "D’fair Mëllech",
        url: "http://www.fairmellech.lu/de/unsere-vertriebsstellen/",
        bounds: [49.4479, 5.7357, 50.1828, 6.5312],
      },
      {
        name: "Le lait équitable - FaireFrance",
        url: "https://fairefrance.fr/produits/",
        bounds: [41.26, -5.45, 51.27, 9.87],
      },
      {
        name: "Il latte onesto",
        url: "https://www.buonoeonesto.it/en/pointsof-sale-eng/",
        bounds: [35.29, 6.63, 47.09, 18.78],
      },
      {
        name: "Di fair Milch Säuliamt",
        url: "http://www.di-fair-milch.ch/verkauf/",
        bounds: [47.208448, 8.388635, 47.35472, 8.58016],
      },
    ],
  },
  meat: {
    name: "Meat products",
    description: "",
  },
  vegetable: {
    name: "Fruit / vegetables",
    description: "",
    externalResources: [
      {
        name: "Pflanzplatz Dunkelhölzli Gemüseabo",
        url: "https://www.dunkelhoelzli.ch/",
        bounds: [47.159438, 8.35768, 47.694472, 8.984941],
      },
      {
        name: "Kooperationsstelle für solidarische Landwirtschaft",
        url: "https://www.solawi.ch/vernetzungsplattform/",
        bounds: [45.64, 2.12, 55.07, 19.03],
      },
      {
        name: "mundraub",
        url: "https://mundraub.org/map#z={zoom}&lat={lat}&lng={lng}",
      },
      {
        name: "falling fruit",
        url: "http://fallingfruit.org/?z={zoom}&y={lat}&x={lng}&t=OSM&locale=en",
      },
    ],
  },
  beverages: {
    name: "Beverages",
    description: "",
  },
  "diaper-changing-table": { name: "Diaper-changing table", description: "" },
  "drinking-water": {
    name: "Drinking water",
    description: "",
    externalResources: [
      {
        name: "Wasser für Wasser",
        url: "https://wfw.ch/en/partners/wfw-gastro",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  defibrillator: { name: "Defibrillator", description: "" },
  "food-sharing": {
    name: "Food sharing",
    description:
      "At this place you can bring and take food. The conditions for bring and take food are very different, you can inform yourself about it on the website of the operator or on site.",
    externalResources: [
      {
        name: "Foodsharing",
        url: "https://foodsharing.de/karte",
        bounds: [44.57, 2.63, 55.26, 19.55],
      },
      {
        name: "RestEssBar",
        url: "http://restessbar.ch/de",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Madame Frigos",
        url: "https://www.madamefrigo.ch/en/towns/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "foodwaste.ch",
        url: "https://foodwaste.ch/lokale-initiativen/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Save food",
        url: "https://savefood.ch/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Suspended Coffee",
        url: "https://suspendedcoffees.com/cafes/",
      },
      {
        name: "Suspended Coffee Germany",
        url: "https://suspendedcoffee.de/shops/karte/",
        bounds: [44.57, 2.63, 55.26, 19.55],
      },
      {
        name: "Café Surprise",
        url: "https://surprise.ngo/angebote/cafesurprise/ueber-cafe-surprise/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "mundraub",
        url: "https://mundraub.org/map#z={zoom}&lat={lat}&lng={lng}",
      },
      {
        name: "falling fruit",
        url: "http://fallingfruit.org/?z={zoom}&y={lng}&x={lat}&locale=en",
      },
      {
        name: "Zero Waste Map",
        url: "https://zerowastemap.org/",
      },
    ],
  },
  dinner: {
    name: "Dinner",
    description: "",
    externalResources: [
      {
        name: "Fairtrade Deutschland",
        url: "https://www.fairtrade-deutschland.de/einkaufen/einkaufs-finder.html",
        bounds: [47.27, 5.87, 55.1, 15.04],
      },
    ],
  },
  "goods-get": {
    name: "Get goods",
    description: "",
    externalResources: [
      {
        name: "nimms",
        url: "https://www.nimms.ch/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923]
      },
      {
        name: "Gratis zu verschenken",
        url: "https://gratiszuverschenken.ch/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923]
      },
      {
        name: "Gratis zu verschenken",
        url: "https://gratiszuverschenken.de/",
        bounds: [44.57, 2.63, 55.26, 19.55]
      },
      {
        name: "Brocki Search",
        url: "https://www.brockisearch.ch/brockenhaeuser/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Fairtrade Deutschland",
        url: "https://www.fairtrade-deutschland.de/einkaufen/einkaufs-finder.html",
        bounds: [47.27, 5.87, 55.1, 15.04],
      },
    ],
  },
  "goods-exchange": {
    name: "Goods exchange",
    description:
      "Here you will find a table, a shelf or a shop to bring and take items. Well-known facilities are give-away shops and giveboxes.",
    externalResources: [
      {
        name: "nimms",
        url: "https://www.nimms.ch/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923]
      },
      {
        name: "Gratis zu verschenken",
        url: "https://gratiszuverschenken.ch/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923]
      },
      {
        name: "Gratis zu verschenken",
        url: "https://gratiszuverschenken.de/",
        bounds: [44.57, 2.63, 55.26, 19.55]
      },
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
      {
        name: "umap - Give box",
        url: "https://umap.openstreetmap.fr/en/map/give_box_406244#{zoom}/{lat}/{lng}",
      },
      {
        name: "radar.squat.net",
        url: "https://radar.squat.net/en/groups/category/free-shop-market",
      },
      {
        name: "Alles Und Umsonst",
        url: "https://alles-und-umsonst.de/umsonstladen",
        bounds: [35.4, -10.2, 55.5, 19.1],
      },
      {
        name: "Zero Waste Map",
        url: "https://zerowastemap.org/",
      },
    ],
  },
  hackerspace: {
    name: "Hackerspace",
    description: "",
    externalResources: [
      {
        name: "Verbund Offener Werkstätten",
        url: "https://www.offene-werkstaetten.org/werkstatt-suche",
        bounds: [35.99, 5.06, 55.5, 24.66],
      },
      {
        name: "hackerspaces",
        url: "https://wiki.hackerspaces.org/List_of_hackerspaces",
      },
    ],
  },
  coworking: { name: "Coworking", description: "" },
  contribute: { name: "Contribute", description: "" },
  map: { name: "Map", description: "" },
  openstreetmap: { name: "OpenStreetMap", description: "" },
  internet: {
    name: "Internet",
    description: "",
    externalResources: [
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
    ],
  },
  "public-shower": { name: "Public shower", description: "" },
  pump: {
    name: "Pump",
    description: "",
    externalResources: [
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
    ],
  },
  printer: { name: "Coping & printing", description: "" },
  toilet: { name: "Public toilet", description: "" },
  basketball: { name: "Basketball", description: "" },
  bath: { name: "Bath", description: "" },
  bikepark: { name: "Bikepark", description: "" },
  skatepark: { name: "Skatepark", description: "" },
  chess: { name: "Street chess", description: "" },
  climbing: {
    name: "Climbing",
    description: "",
    externalResources: [
      {
        name: "the crag",
        url: "https://www.thecrag.com/climbing/world/maps#{lat},{lng},{zoom},,auto",
      },
    ],
  },
  fitness: {
    name: "Fitness",
    description: "",
    externalResources: [
      {
        name: "Street Workout",
        url: "https://www.street-workout.com/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Playparc",
        url: "https://www.playparc.de/marken/4fcircle/",
        bounds: [35.13, 2.16, 62.53, 32.75],
      },
    ],
  },
  horizontal_bar: {
    name: "Horizontal bar",
    description: "",
  },
  parallel_bars: {
    name: "Parallel bars",
    description: "",
  },
  rings: {
    name: "Rings",
    description: "",
  },
  "exercise-machine": {
    name: "Exercise machine",
    description: "",
  },
  balance: {
    name: "Balance",
    description: "",
  },
  "fitness-trail": {
    name: "Fitness trail",
    description: "",
    externalResources: [
      {
        name: "Zurich vitaparcours",
        url: "https://www.zurichvitaparcours.ch/de/Finder",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Trimm-Dich-Pfade",
        url: "https://www.trimm-dich-pfad.com/standorte/trimm-dich-pfad-in-meiner-naehe#{lat}/{lng}/{zoom}",
        bounds: [45.11, 2.16, 55.2, 24.4],
      },
    ],
  },
  sledding: { name: "Sledding", description: "" },
  running: { name: "Running", description: "" },
  soccer: { name: "Soccer", description: "" },
  "table-tennis": { name: "Table tennis", description: "" },
  "table-soccer": { name: "Table soccer", description: "" },
  boules: { name: "Boules", description: "" },
  volleyball: { name: "Volleyball", description: "" },
  animal: {
    name: "Animal enclosure",
    description: "",
    externalResources: [
      {
        name: "Zoo-Infos.org - Switzerland",
        url: "http://ch.zoo-infos.org/set.html?karte.php",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Zoo-Infos.de - Germany",
        url: "http://www.zoo-infos.de/set-en.html?karte-en.php",
        bounds: [47.27, 5.87, 55.1, 15.04],
      },
      {
        name: "Zoo-Infos.org - Austria",
        url: "http://at.zoo-infos.org/set-en.html?karte-en.php",
        bounds: [46.3723, 9.5307, 49.0205, 17.1608],
      },
      {
        name: "Zoo-Infos.org - France",
        url: "http://fr.zoo-infos.org/set.html?karte.php",
        bounds: [42.13, -5.02, 51.27, 8.43],
      },
      {
        name: "Arca-Net",
        url: "http://arca-net.info/map_categories/frame_map.asp?sprache=en",
        bounds: [-32.0, -0.3, 52.3, 68.9],
      },
    ],
  },
  observation: { name: "Animal observation", description: "" },
  maze: { name: "Maze", description: "" },
  webcam: {
    name: "Webcam",
    description: "",
    externalResources: [
      {
        name: "roundshot",
        url: "https://www.roundshot.com/xml_1/internet/en/application/d170/f172.cfm",
      },
      {
        name: "Windy",
        url: "https://www.windy.com/en/-Webcams/webcams?{lat},{lng},{zoom}",
      },
      {
        name: "Skyline Webcams",
        url: "https://www.skylinewebcams.com/en/webcam.html",
      },
      {
        name: "Wetter.com",
        url: "https://www.wetter.com/hd-live-webcams/",
      },
    ],
  },
  fireplace: { name: "Fireplace", description: "" },
  garden: {
    name: "Garden",
    description: "",
    externalResources: [
      {
        name: "Arca-Net",
        url: "http://arca-net.info/map_categories/frame_map.asp?sprache=en",
        bounds: [-32.0, -0.3, 52.3, 68.9],
      },
    ],
  },
  "garden-with-name": {
    name: "Garden (With name)",
    description: "",
    externalResources: [
      {
        name: "Arca-Net",
        url: "http://arca-net.info/map_categories/frame_map.asp?sprache=en",
        bounds: [-32.0, -0.3, 52.3, 68.9],
      },
    ],
  },
  "nature-park": { name: "Nature park", description: "" },
  park: { name: "Park", description: "" },
  "park-with-name": { name: "Park (With name)", description: "" },
  "picnic-site": { name: "Picnic site", description: "" },
  square: { name: "Square", description: "" },
  "square-with-name": { name: "Square (With name)", description: "" },
  playground: { name: "Playground", description: "" },
  lounger: { name: "Lounger", description: "" },
  clothes: {
    name: "Clothes",
    description: "",
    externalResources: [
      {
        name: "GET CHANGED!",
        url: "https://getchanged.net/brands-n132-sD.html?suchauswahl=storesanzeigen&standards=&brand=&ort={lat}%2C{lng}",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/kleider/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "clothes-give": { name: "Clothes (Give)", description: "" },
  "clothes-take": { name: "Clothes (Take)", description: "" },
  "clothes-repair": {
    name: "Clothes (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/kleider/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "mobile-phones": {
    name: "Phone",
    description: "",
    externalResources: [
      {
        name: "Swisscom Mobile Aid",
        url: "https://www.swisscom.ch/de/about/unternehmen/nachhaltigkeit/mobile-aid.html",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Labdoo",
        url: "https://www.labdoo.org/content/dootronics-dashboard",
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/handy-telefon-mp3player/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "mobile-phones-give": { name: "Phone (Give)", description: "" },
  "mobile-phones-take": { name: "Phone (Take)", description: "" },
  "mobile-phones-repair": {
    name: "Phone (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/handy-telefon-mp3player/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  computers: {
    name: "Computer",
    description: "",
    externalResources: [
      {
        name: "Labdoo",
        url: "https://www.labdoo.org/content/dootronics-dashboard",
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/computer-drucker-netzwerk/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "computers-give": { name: "Computer (Give)", description: "" },
  "computers-take": { name: "Computer (Take)", description: "" },
  "computers-repair": {
    name: "Computer (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/computer-drucker-netzwerk/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  toys: {
    name: "Toy",
    description: "",
    externalResources: [
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/spielzeug-modellbau/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "toys-give": { name: "Toy (Give)", description: "" },
  "toys-take": { name: "Toy (Take)", description: "" },
  "toys-rent": { name: "Toy (Rent)", description: "" },
  "toys-repair": {
    name: "Toy (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/spielzeug-modellbau/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  electronics: {
    name: "Electronic",
    description: "",
    externalResources: [
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/haushalts-Gartengeraete/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "electronics-give": { name: "Electronic (Give)", description: "" },
  "electronics-take": { name: "Electronic (Take)", description: "" },
  "electronics-repair": {
    name: "Electronic (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/haushalts-Gartengeraete/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  furniture: {
    name: "Furniture",
    description: "",
    externalResources: [
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/moebel/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  "furniture-give": { name: "Furniture (Give)", description: "" },
  "furniture-take": { name: "Furniture (Take)", description: "" },
  "furniture-repair": {
    name: "Furniture (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/moebel/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
  bicycle: {
    name: "Bicycle",
    description: "",
    externalResources: [
      {
        name: "Velafrica",
        url: "http://velafrica.ch/en/Play-your-part/donate-bicycles",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Bikekitchen",
        url: "http://www.heureux-cyclage.org/les-ateliers-dans-le-monde?lang=en",
      },
      {
        name: "Fahrradselbsthilfewerkstätten in Berlin",
        url: "https://fahrrad.fandom.com/de/wiki/Fahrradselbsthilfewerkst%C3%A4tten_in_Berlin",
        bounds: [52.33826, 13.08835, 52.67551, 13.76116],
      },
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/fahrraeder-ebikes/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
      {
        name: "Pumpipumpe",
        url: "https://map.pumpipumpe.ch/",
      },
    ],
  },
  "bicycle-give": { name: "Bicycle (Give)", description: "" },
  "bicycle-get": {
    name: "Bicycle (Get)",
    description: "",
  },
  "bicycle-rent": { name: "Bicycle (Rent)", description: "" },
  "bicycle-repair": {
    name: "Bicycle (Repair)",
    description: "",
    externalResources: [
      {
        name: "Reparaturführer",
        url: "https://reparaturfuehrer.ch/kategorien/fahrraeder-ebikes/",
        bounds: [45.818, 5.9559, 47.8085, 10.4923],
      },
    ],
  },
};
