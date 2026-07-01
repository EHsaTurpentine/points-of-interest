// POINTS OF INTEREST — location registry
//
// This is the single source of truth for every waypoint on the map.
// `x` / `y` are percentages (0–100) of the map image's width/height —
// that's what lets the links stay lined up on any screen size.
// `grid` is the map's own coordinate (column letter + row number),
// shown on each memoir page as a locator. These are close estimates
// from the label positions — nudge any that look off once you see
// the site next to your original map.
//
// To add a location: add an entry here, then drop a matching
// content/<name>.md file in the content folder. Nothing else to touch.

const LOCATIONS = [
  { name: "Dam",           x: 26.3, y: 25.3, grid: "C2" },
  { name: "Military Base", x: 46.4, y: 23.3, grid: "E2" },
  { name: "Quarry",        x: 66.1, y: 27.0, grid: "G2" },
  { name: "Airport",       x: 29.7, y: 38.6, grid: "C3" },
  { name: "TV Station",    x: 53.6, y: 41.9, grid: "F4" },
  { name: "Storage Town",  x: 24.4, y: 48.5, grid: "C4" },
  { name: "Superstore",    x: 34.9, y: 51.2, grid: "D5" },
  { name: "Stadium",       x: 59.6, y: 53.5, grid: "G5" },
  { name: "Lumber",        x: 77.9, y: 52.5, grid: "I5" },
  { name: "Boneyard",      x: 23.1, y: 61.8, grid: "C6" },
  { name: "Hospital",      x: 49.1, y: 61.8, grid: "E6" },
  { name: "Train Station", x: 31.7, y: 65.1, grid: "D6" },
  { name: "Downtown",      x: 57.9, y: 65.1, grid: "F6" },
  { name: "Farmland",      x: 76.4, y: 66.7, grid: "H6" },
  { name: "Promenade",     x: 35.0, y: 71.7, grid: "D7" },
  { name: "Port",          x: 68.0, y: 71.4, grid: "G7" },
  { name: "Park",          x: 55.9, y: 75.7, grid: "F7" },
  { name: "Hills",         x: 33.0, y: 80.4, grid: "D8" },
  { name: "Prison",        x: 72.9, y: 83.1, grid: "H8" },
];
