// Auto-generated element data
export type ElementCategory =
  | 'alkali-metal' | 'alkaline-earth' | 'transition-metal' | 'post-transition'
  | 'metalloid' | 'nonmetal' | 'halogen' | 'noble-gas'
  | 'lanthanide' | 'actinide' | 'unknown';

export interface ElementData {
  number: number;
  symbol: string;
  name: string;
  slug: string;
  mass: number;
  category: ElementCategory;
  period: number;
  group: number | null;
  phase: string;
  electronsPerShell: number[];
  electronConfig: string;
  description: string;
  density: number | null;
  meltingPoint: number | null;
  boilingPoint: number | null;
  discoverer: string;
  yearDiscovered: string | number;
  uses: string[];
}

export const CATEGORIES: Record<ElementCategory, { label: string; color: string }> = {
  "alkali-metal": {
    "label": "Alkali Metal",
    "color": "--cat-alkali"
  },
  "alkaline-earth": {
    "label": "Alkaline Earth Metal",
    "color": "--cat-alkaline"
  },
  "transition-metal": {
    "label": "Transition Metal",
    "color": "--cat-transition"
  },
  "post-transition": {
    "label": "Post-Transition Metal",
    "color": "--cat-post-transition"
  },
  "metalloid": {
    "label": "Metalloid",
    "color": "--cat-metalloid"
  },
  "nonmetal": {
    "label": "Reactive Nonmetal",
    "color": "--cat-nonmetal"
  },
  "halogen": {
    "label": "Halogen",
    "color": "--cat-halogen"
  },
  "noble-gas": {
    "label": "Noble Gas",
    "color": "--cat-noble"
  },
  "lanthanide": {
    "label": "Lanthanide",
    "color": "--cat-lanthanide"
  },
  "actinide": {
    "label": "Actinide",
    "color": "--cat-actinide"
  },
  "unknown": {
    "label": "Unknown Properties",
    "color": "--cat-unknown"
  }
} as const;

export const elements: ElementData[] = [
  {
    "number": 1,
    "symbol": "H",
    "name": "Hydrogen",
    "slug": "hydrogen",
    "mass": 1.008,
    "category": "nonmetal",
    "period": 1,
    "group": 1,
    "phase": "Gas",
    "electronsPerShell": [
      1
    ],
    "electronConfig": "1s¹",
    "description": "The lightest and most abundant element in the universe. A colorless, odorless gas that forms water when combined with oxygen.",
    "density": 0.00008988,
    "meltingPoint": -259.16,
    "boilingPoint": -252.87,
    "discoverer": "Henry Cavendish",
    "yearDiscovered": 1766,
    "uses": [
      "Rocket fuel",
      "ammonia production",
      "petroleum refining",
      "fuel cells",
      "hydrogenation of fats"
    ]
  },
  {
    "number": 2,
    "symbol": "He",
    "name": "Helium",
    "slug": "helium",
    "mass": 4.0026,
    "category": "noble-gas",
    "period": 1,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2
    ],
    "electronConfig": "1s²",
    "description": "The second lightest element, an inert noble gas. Used in cryogenics and as a lifting gas in balloons.",
    "density": 0.0001785,
    "meltingPoint": -272.2,
    "boilingPoint": -268.93,
    "discoverer": "Pierre Janssen",
    "yearDiscovered": 1868,
    "uses": [
      "Cryogenics",
      "MRI machines",
      "balloons",
      "leak detection",
      "welding shield gas"
    ]
  },
  {
    "number": 3,
    "symbol": "Li",
    "name": "Lithium",
    "slug": "lithium",
    "mass": 6.941,
    "category": "alkali-metal",
    "period": 2,
    "group": 1,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      1
    ],
    "electronConfig": "[He] 2s¹",
    "description": "The lightest metal and least dense solid element. Highly reactive and used extensively in rechargeable batteries.",
    "density": 0.534,
    "meltingPoint": 180.54,
    "boilingPoint": 1342,
    "discoverer": "Johan August Arfwedson",
    "yearDiscovered": 1817,
    "uses": [
      "Rechargeable batteries",
      "ceramics",
      "glass",
      "lubricants",
      "mood-stabilizing medication"
    ]
  },
  {
    "number": 4,
    "symbol": "Be",
    "name": "Beryllium",
    "slug": "beryllium",
    "mass": 9.0122,
    "category": "alkaline-earth",
    "period": 2,
    "group": 2,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      2
    ],
    "electronConfig": "[He] 2s²",
    "description": "A rare, toxic alkaline earth metal. Lightweight and strong, used in aerospace and X-ray equipment.",
    "density": 1.85,
    "meltingPoint": 1287,
    "boilingPoint": 2469,
    "discoverer": "Louis Nicolas Vauquelin",
    "yearDiscovered": 1798,
    "uses": [
      "Aerospace alloys",
      "X-ray windows",
      "nuclear reactors",
      "gyroscopes",
      "springs"
    ]
  },
  {
    "number": 5,
    "symbol": "B",
    "name": "Boron",
    "slug": "boron",
    "mass": 10.81,
    "category": "metalloid",
    "period": 2,
    "group": 13,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      3
    ],
    "electronConfig": "[He] 2s² 2p¹",
    "description": "A metalloid essential for plant growth. Used in glass, ceramics, and high-strength materials.",
    "density": 2.34,
    "meltingPoint": 2076,
    "boilingPoint": 3927,
    "discoverer": "Joseph Louis Gay-Lussac",
    "yearDiscovered": 1808,
    "uses": [
      "Borosilicate glass",
      "detergents",
      "insecticides",
      "semiconductors",
      "armor plating"
    ]
  },
  {
    "number": 6,
    "symbol": "C",
    "name": "Carbon",
    "slug": "carbon",
    "mass": 12.011,
    "category": "nonmetal",
    "period": 2,
    "group": 14,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      4
    ],
    "electronConfig": "[He] 2s² 2p²",
    "description": "The basis of all known life. Forms more compounds than any other element, including diamond and graphite.",
    "density": 2.267,
    "meltingPoint": 3550,
    "boilingPoint": 4027,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Fuels",
      "plastics",
      "steel making",
      "carbon fiber",
      "pharmaceuticals",
      "diamonds"
    ]
  },
  {
    "number": 7,
    "symbol": "N",
    "name": "Nitrogen",
    "slug": "nitrogen",
    "mass": 14.007,
    "category": "nonmetal",
    "period": 2,
    "group": 15,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      5
    ],
    "electronConfig": "[He] 2s² 2p³",
    "description": "Makes up 78% of Earth's atmosphere. Essential for amino acids and DNA in all living organisms.",
    "density": 0.0012506,
    "meltingPoint": -210,
    "boilingPoint": -195.79,
    "discoverer": "Daniel Rutherford",
    "yearDiscovered": 1772,
    "uses": [
      "Fertilizers",
      "explosives",
      "food preservation",
      "cryogenics",
      "electronics manufacturing"
    ]
  },
  {
    "number": 8,
    "symbol": "O",
    "name": "Oxygen",
    "slug": "oxygen",
    "mass": 15.999,
    "category": "nonmetal",
    "period": 2,
    "group": 16,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      6
    ],
    "electronConfig": "[He] 2s² 2p⁴",
    "description": "The third most abundant element in the universe. Essential for respiration and combustion.",
    "density": 0.001429,
    "meltingPoint": -218.79,
    "boilingPoint": -182.96,
    "discoverer": "Joseph Priestley",
    "yearDiscovered": 1774,
    "uses": [
      "Respiration",
      "steel manufacturing",
      "welding",
      "medical applications",
      "water treatment"
    ]
  },
  {
    "number": 9,
    "symbol": "F",
    "name": "Fluorine",
    "slug": "fluorine",
    "mass": 18.998,
    "category": "halogen",
    "period": 2,
    "group": 17,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      7
    ],
    "electronConfig": "[He] 2s² 2p⁵",
    "description": "The most electronegative and reactive of all elements. A pale yellow, highly toxic gas.",
    "density": 0.001696,
    "meltingPoint": -219.67,
    "boilingPoint": -188.11,
    "discoverer": "Henri Moissan",
    "yearDiscovered": 1886,
    "uses": [
      "Toothpaste",
      "Teflon",
      "refrigerants",
      "uranium enrichment",
      "pharmaceuticals"
    ]
  },
  {
    "number": 10,
    "symbol": "Ne",
    "name": "Neon",
    "slug": "neon",
    "mass": 20.18,
    "category": "noble-gas",
    "period": 2,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8
    ],
    "electronConfig": "[He] 2s² 2p⁶",
    "description": "A colorless, inert noble gas that glows reddish-orange in discharge tubes. Used in lighting and signs.",
    "density": 0.0008999,
    "meltingPoint": -248.59,
    "boilingPoint": -246.08,
    "discoverer": "William Ramsay",
    "yearDiscovered": 1898,
    "uses": [
      "Neon signs",
      "high-voltage indicators",
      "cryogenics",
      "helium-neon lasers",
      "TV tubes"
    ]
  },
  {
    "number": 11,
    "symbol": "Na",
    "name": "Sodium",
    "slug": "sodium",
    "mass": 22.99,
    "category": "alkali-metal",
    "period": 3,
    "group": 1,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      1
    ],
    "electronConfig": "[Ne] 3s¹",
    "description": "A soft, silvery-white, highly reactive metal. Essential for nerve function and found in table salt.",
    "density": 0.971,
    "meltingPoint": 97.794,
    "boilingPoint": 882.94,
    "discoverer": "Humphry Davy",
    "yearDiscovered": 1807,
    "uses": [
      "Table salt",
      "street lighting",
      "heat transfer",
      "soap making",
      "food preservation"
    ]
  },
  {
    "number": 12,
    "symbol": "Mg",
    "name": "Magnesium",
    "slug": "magnesium",
    "mass": 24.305,
    "category": "alkaline-earth",
    "period": 3,
    "group": 2,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      2
    ],
    "electronConfig": "[Ne] 3s²",
    "description": "A lightweight, strong metal that burns with a brilliant white flame. Essential for photosynthesis.",
    "density": 1.738,
    "meltingPoint": 650,
    "boilingPoint": 1091,
    "discoverer": "Joseph Black",
    "yearDiscovered": 1755,
    "uses": [
      "Alloys",
      "fireworks",
      "flares",
      "antacids",
      "electronics casings",
      "automotive parts"
    ]
  },
  {
    "number": 13,
    "symbol": "Al",
    "name": "Aluminium",
    "slug": "aluminium",
    "mass": 26.982,
    "category": "post-transition",
    "period": 3,
    "group": 13,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      3
    ],
    "electronConfig": "[Ne] 3s² 3p¹",
    "description": "The most abundant metal in Earth's crust. Lightweight, corrosion-resistant, and highly recyclable.",
    "density": 2.698,
    "meltingPoint": 660.32,
    "boilingPoint": 2519,
    "discoverer": "Hans Christian Ørsted",
    "yearDiscovered": 1825,
    "uses": [
      "Aircraft",
      "beverage cans",
      "foil",
      "power lines",
      "construction",
      "electronics"
    ]
  },
  {
    "number": 14,
    "symbol": "Si",
    "name": "Silicon",
    "slug": "silicon",
    "mass": 28.086,
    "category": "metalloid",
    "period": 3,
    "group": 14,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      4
    ],
    "electronConfig": "[Ne] 3s² 3p²",
    "description": "The second most abundant element in Earth's crust. The foundation of modern electronics.",
    "density": 2.3296,
    "meltingPoint": 1414,
    "boilingPoint": 3265,
    "discoverer": "Jöns Jacob Berzelius",
    "yearDiscovered": 1824,
    "uses": [
      "Computer chips",
      "solar cells",
      "glass",
      "silicone",
      "concrete",
      "ceramics"
    ]
  },
  {
    "number": 15,
    "symbol": "P",
    "name": "Phosphorus",
    "slug": "phosphorus",
    "mass": 30.974,
    "category": "nonmetal",
    "period": 3,
    "group": 15,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      5
    ],
    "electronConfig": "[Ne] 3s² 3p³",
    "description": "Essential element for life, found in DNA and ATP. White phosphorus glows in the dark and is highly toxic.",
    "density": 1.82,
    "meltingPoint": 44.15,
    "boilingPoint": 280.5,
    "discoverer": "Hennig Brand",
    "yearDiscovered": 1669,
    "uses": [
      "Fertilizers",
      "detergents",
      "matches",
      "steel production",
      "food additives"
    ]
  },
  {
    "number": 16,
    "symbol": "S",
    "name": "Sulfur",
    "slug": "sulfur",
    "mass": 32.06,
    "category": "nonmetal",
    "period": 3,
    "group": 16,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      6
    ],
    "electronConfig": "[Ne] 3s² 3p⁴",
    "description": "A bright yellow, brittle nonmetal known since antiquity. Essential for proteins and used in many industries.",
    "density": 2.067,
    "meltingPoint": 115.21,
    "boilingPoint": 444.6,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Sulfuric acid",
      "fertilizers",
      "vulcanizing rubber",
      "medicines",
      "fungicides"
    ]
  },
  {
    "number": 17,
    "symbol": "Cl",
    "name": "Chlorine",
    "slug": "chlorine",
    "mass": 35.45,
    "category": "halogen",
    "period": 3,
    "group": 17,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8,
      7
    ],
    "electronConfig": "[Ne] 3s² 3p⁵",
    "description": "A yellow-green, pungent gas essential for water purification. Combined with sodium, it forms table salt.",
    "density": 0.003214,
    "meltingPoint": -101.5,
    "boilingPoint": -34.04,
    "discoverer": "Carl Wilhelm Scheele",
    "yearDiscovered": 1774,
    "uses": [
      "Water purification",
      "PVC",
      "bleach",
      "disinfectants",
      "hydrochloric acid production"
    ]
  },
  {
    "number": 18,
    "symbol": "Ar",
    "name": "Argon",
    "slug": "argon",
    "mass": 39.948,
    "category": "noble-gas",
    "period": 3,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8,
      8
    ],
    "electronConfig": "[Ne] 3s² 3p⁶",
    "description": "The third most abundant gas in Earth's atmosphere. A completely inert noble gas.",
    "density": 0.0017837,
    "meltingPoint": -189.34,
    "boilingPoint": -185.85,
    "discoverer": "Lord Rayleigh",
    "yearDiscovered": 1894,
    "uses": [
      "Welding shield gas",
      "light bulbs",
      "insulated windows",
      "electronics manufacturing"
    ]
  },
  {
    "number": 19,
    "symbol": "K",
    "name": "Potassium",
    "slug": "potassium",
    "mass": 39.098,
    "category": "alkali-metal",
    "period": 4,
    "group": 1,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      8,
      1
    ],
    "electronConfig": "[Ar] 4s¹",
    "description": "A soft, silvery-white metal that reacts violently with water. Essential for cellular function.",
    "density": 0.862,
    "meltingPoint": 63.5,
    "boilingPoint": 759,
    "discoverer": "Humphry Davy",
    "yearDiscovered": 1807,
    "uses": [
      "Fertilizers",
      "soap",
      "glass",
      "gunpowder",
      "food preservation",
      "water softeners"
    ]
  },
  {
    "number": 20,
    "symbol": "Ca",
    "name": "Calcium",
    "slug": "calcium",
    "mass": 40.078,
    "category": "alkaline-earth",
    "period": 4,
    "group": 2,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      8,
      2
    ],
    "electronConfig": "[Ar] 4s²",
    "description": "The fifth most abundant element in Earth's crust. Critical for bones, teeth, and cellular processes.",
    "density": 1.55,
    "meltingPoint": 842,
    "boilingPoint": 1484,
    "discoverer": "Humphry Davy",
    "yearDiscovered": 1808,
    "uses": [
      "Cement",
      "steel purification",
      "cheese making",
      "supplements",
      "plaster",
      "alloys"
    ]
  },
  {
    "number": 21,
    "symbol": "Sc",
    "name": "Scandium",
    "slug": "scandium",
    "mass": 44.956,
    "category": "transition-metal",
    "period": 4,
    "group": 3,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      9,
      2
    ],
    "electronConfig": "[Ar] 3d¹ 4s²",
    "description": "A rare, silvery transition metal. Strengthens aluminium alloys for aerospace applications.",
    "density": 2.989,
    "meltingPoint": 1541,
    "boilingPoint": 2836,
    "discoverer": "Lars Fredrik Nilson",
    "yearDiscovered": 1879,
    "uses": [
      "Aerospace alloys",
      "sports equipment",
      "high-intensity lighting",
      "fuel cells"
    ]
  },
  {
    "number": 22,
    "symbol": "Ti",
    "name": "Titanium",
    "slug": "titanium",
    "mass": 47.867,
    "category": "transition-metal",
    "period": 4,
    "group": 4,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      10,
      2
    ],
    "electronConfig": "[Ar] 3d² 4s²",
    "description": "A strong, lightweight, corrosion-resistant metal. Named after the Titans of Greek mythology.",
    "density": 4.54,
    "meltingPoint": 1668,
    "boilingPoint": 3287,
    "discoverer": "William Gregor",
    "yearDiscovered": 1791,
    "uses": [
      "Aerospace",
      "medical implants",
      "jewelry",
      "pigments",
      "sporting goods",
      "armor"
    ]
  },
  {
    "number": 23,
    "symbol": "V",
    "name": "Vanadium",
    "slug": "vanadium",
    "mass": 50.942,
    "category": "transition-metal",
    "period": 4,
    "group": 5,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      11,
      2
    ],
    "electronConfig": "[Ar] 3d³ 4s²",
    "description": "A hard, silvery-gray metal that increases the strength of steel. Named after Norse goddess Vanadis.",
    "density": 6.11,
    "meltingPoint": 1910,
    "boilingPoint": 3407,
    "discoverer": "Andrés Manuel del Río",
    "yearDiscovered": 1801,
    "uses": [
      "Steel alloys",
      "jet engines",
      "nuclear reactors",
      "redox batteries",
      "catalysts"
    ]
  },
  {
    "number": 24,
    "symbol": "Cr",
    "name": "Chromium",
    "slug": "chromium",
    "mass": 51.996,
    "category": "transition-metal",
    "period": 4,
    "group": 6,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      13,
      1
    ],
    "electronConfig": "[Ar] 3d⁵ 4s¹",
    "description": "A hard, lustrous metal known for its mirror-like finish. Essential in stainless steel production.",
    "density": 7.15,
    "meltingPoint": 1907,
    "boilingPoint": 2671,
    "discoverer": "Louis Nicolas Vauquelin",
    "yearDiscovered": 1797,
    "uses": [
      "Stainless steel",
      "chrome plating",
      "pigments",
      "leather tanning",
      "catalysts"
    ]
  },
  {
    "number": 25,
    "symbol": "Mn",
    "name": "Manganese",
    "slug": "manganese",
    "mass": 54.938,
    "category": "transition-metal",
    "period": 4,
    "group": 7,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      13,
      2
    ],
    "electronConfig": "[Ar] 3d⁵ 4s²",
    "description": "An essential trace element for all living organisms. Critical in steel production and battery technology.",
    "density": 7.44,
    "meltingPoint": 1246,
    "boilingPoint": 2061,
    "discoverer": "Johann Gottlieb Gahn",
    "yearDiscovered": 1774,
    "uses": [
      "Steel production",
      "batteries",
      "glass decolorizer",
      "fertilizers",
      "water purification"
    ]
  },
  {
    "number": 26,
    "symbol": "Fe",
    "name": "Iron",
    "slug": "iron",
    "mass": 55.845,
    "category": "transition-metal",
    "period": 4,
    "group": 8,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      14,
      2
    ],
    "electronConfig": "[Ar] 3d⁶ 4s²",
    "description": "The most used metal on Earth and the most abundant element by mass in our planet. Essential for blood.",
    "density": 7.874,
    "meltingPoint": 1538,
    "boilingPoint": 2862,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Steel",
      "construction",
      "vehicles",
      "machinery",
      "magnets",
      "cookware"
    ]
  },
  {
    "number": 27,
    "symbol": "Co",
    "name": "Cobalt",
    "slug": "cobalt",
    "mass": 58.933,
    "category": "transition-metal",
    "period": 4,
    "group": 9,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      15,
      2
    ],
    "electronConfig": "[Ar] 3d⁷ 4s²",
    "description": "A hard, lustrous metal used for blue pigments since antiquity. Critical for rechargeable batteries.",
    "density": 8.86,
    "meltingPoint": 1495,
    "boilingPoint": 2927,
    "discoverer": "Georg Brandt",
    "yearDiscovered": 1735,
    "uses": [
      "Batteries",
      "superalloys",
      "magnets",
      "blue pigments",
      "catalysts",
      "radiotherapy"
    ]
  },
  {
    "number": 28,
    "symbol": "Ni",
    "name": "Nickel",
    "slug": "nickel",
    "mass": 58.693,
    "category": "transition-metal",
    "period": 4,
    "group": 10,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      16,
      2
    ],
    "electronConfig": "[Ar] 3d⁸ 4s²",
    "description": "A silvery-white metal notable for its corrosion resistance. Widely used in coins and stainless steel.",
    "density": 8.912,
    "meltingPoint": 1455,
    "boilingPoint": 2913,
    "discoverer": "Axel Fredrik Cronstedt",
    "yearDiscovered": 1751,
    "uses": [
      "Stainless steel",
      "coins",
      "batteries",
      "electroplating",
      "magnets",
      "catalysts"
    ]
  },
  {
    "number": 29,
    "symbol": "Cu",
    "name": "Copper",
    "slug": "copper",
    "mass": 63.546,
    "category": "transition-metal",
    "period": 4,
    "group": 11,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      1
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s¹",
    "description": "One of the first metals used by humans, known for excellent electrical conductivity. Essential trace element.",
    "density": 8.96,
    "meltingPoint": 1084.62,
    "boilingPoint": 2562,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Electrical wiring",
      "plumbing",
      "electronics",
      "coins",
      "alloys",
      "antimicrobial surfaces"
    ]
  },
  {
    "number": 30,
    "symbol": "Zn",
    "name": "Zinc",
    "slug": "zinc",
    "mass": 65.38,
    "category": "transition-metal",
    "period": 4,
    "group": 12,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      2
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s²",
    "description": "An essential trace element for all living organisms. Used to galvanize steel against corrosion.",
    "density": 7.134,
    "meltingPoint": 419.53,
    "boilingPoint": 907,
    "discoverer": "Andreas Marggraf",
    "yearDiscovered": 1746,
    "uses": [
      "Galvanizing steel",
      "batteries",
      "alloys (brass)",
      "sunscreen",
      "supplements",
      "die casting"
    ]
  },
  {
    "number": 31,
    "symbol": "Ga",
    "name": "Gallium",
    "slug": "gallium",
    "mass": 69.723,
    "category": "post-transition",
    "period": 4,
    "group": 13,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      3
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s² 4p¹",
    "description": "A soft metal that melts just above room temperature. Used in semiconductors and LEDs.",
    "density": 5.907,
    "meltingPoint": 29.76,
    "boilingPoint": 2204,
    "discoverer": "Paul Emile Lecoq de Boisbaudran",
    "yearDiscovered": 1875,
    "uses": [
      "Semiconductors",
      "LEDs",
      "solar panels",
      "thermometers",
      "pharmaceuticals"
    ]
  },
  {
    "number": 32,
    "symbol": "Ge",
    "name": "Germanium",
    "slug": "germanium",
    "mass": 72.63,
    "category": "metalloid",
    "period": 4,
    "group": 14,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      4
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s² 4p²",
    "description": "A lustrous metalloid used in fiber optics and infrared optics. Important in early transistor technology.",
    "density": 5.323,
    "meltingPoint": 938.25,
    "boilingPoint": 2833,
    "discoverer": "Clemens Winkler",
    "yearDiscovered": 1886,
    "uses": [
      "Fiber optics",
      "infrared optics",
      "electronics",
      "solar cells",
      "polymerization catalysts"
    ]
  },
  {
    "number": 33,
    "symbol": "As",
    "name": "Arsenic",
    "slug": "arsenic",
    "mass": 74.922,
    "category": "metalloid",
    "period": 4,
    "group": 15,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      5
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s² 4p³",
    "description": "A notorious metalloid known for its toxicity and historical use as a poison. Found in many minerals.",
    "density": 5.776,
    "meltingPoint": 816.9,
    "boilingPoint": 614,
    "discoverer": "Albertus Magnus",
    "yearDiscovered": 1250,
    "uses": [
      "Semiconductors",
      "wood preservatives",
      "pesticides",
      "alloys",
      "glass making"
    ]
  },
  {
    "number": 34,
    "symbol": "Se",
    "name": "Selenium",
    "slug": "selenium",
    "mass": 78.971,
    "category": "nonmetal",
    "period": 4,
    "group": 16,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      6
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s² 4p⁴",
    "description": "An essential trace element with photoconductive properties. Named after Selene, the Greek moon goddess.",
    "density": 4.809,
    "meltingPoint": 221,
    "boilingPoint": 685,
    "discoverer": "Jöns Jacob Berzelius",
    "yearDiscovered": 1817,
    "uses": [
      "Electronics",
      "glass making",
      "solar cells",
      "supplements",
      "rubber vulcanization"
    ]
  },
  {
    "number": 35,
    "symbol": "Br",
    "name": "Bromine",
    "slug": "bromine",
    "mass": 79.904,
    "category": "halogen",
    "period": 4,
    "group": 17,
    "phase": "Liquid",
    "electronsPerShell": [
      2,
      8,
      18,
      7
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s² 4p⁵",
    "description": "One of only two elements liquid at room temperature. A red-brown, pungent, toxic liquid.",
    "density": 3.122,
    "meltingPoint": -7.2,
    "boilingPoint": 58.8,
    "discoverer": "Antoine Jérôme Balard",
    "yearDiscovered": 1826,
    "uses": [
      "Flame retardants",
      "pesticides",
      "pharmaceuticals",
      "photography",
      "water purification"
    ]
  },
  {
    "number": 36,
    "symbol": "Kr",
    "name": "Krypton",
    "slug": "krypton",
    "mass": 83.798,
    "category": "noble-gas",
    "period": 4,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8,
      18,
      8
    ],
    "electronConfig": "[Ar] 3d¹⁰ 4s² 4p⁶",
    "description": "A noble gas that produces brilliant white light in discharge tubes. Named from Greek 'kryptos' (hidden).",
    "density": 0.003733,
    "meltingPoint": -157.36,
    "boilingPoint": -153.22,
    "discoverer": "William Ramsay",
    "yearDiscovered": 1898,
    "uses": [
      "Fluorescent lighting",
      "flash photography",
      "insulated windows",
      "MRI",
      "lasers"
    ]
  },
  {
    "number": 37,
    "symbol": "Rb",
    "name": "Rubidium",
    "slug": "rubidium",
    "mass": 85.468,
    "category": "alkali-metal",
    "period": 5,
    "group": 1,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      8,
      1
    ],
    "electronConfig": "[Kr] 5s¹",
    "description": "A soft, silvery-white metal that ignites spontaneously in air. Used in atomic clocks.",
    "density": 1.532,
    "meltingPoint": 39.3,
    "boilingPoint": 688,
    "discoverer": "Robert Bunsen",
    "yearDiscovered": 1861,
    "uses": [
      "Atomic clocks",
      "GPS systems",
      "fireworks",
      "photocells",
      "medical imaging"
    ]
  },
  {
    "number": 38,
    "symbol": "Sr",
    "name": "Strontium",
    "slug": "strontium",
    "mass": 87.62,
    "category": "alkaline-earth",
    "period": 5,
    "group": 2,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      8,
      2
    ],
    "electronConfig": "[Kr] 5s²",
    "description": "An alkaline earth metal that produces a brilliant red flame. Used in fireworks and flares.",
    "density": 2.64,
    "meltingPoint": 777,
    "boilingPoint": 1377,
    "discoverer": "Adair Crawford",
    "yearDiscovered": 1790,
    "uses": [
      "Fireworks",
      "flares",
      "ferrite magnets",
      "toothpaste",
      "glass for CRT monitors"
    ]
  },
  {
    "number": 39,
    "symbol": "Y",
    "name": "Yttrium",
    "slug": "yttrium",
    "mass": 88.906,
    "category": "transition-metal",
    "period": 5,
    "group": 3,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      9,
      2
    ],
    "electronConfig": "[Kr] 4d¹ 5s²",
    "description": "A silvery transition metal used in LEDs and superconductors. Named after the village of Ytterby, Sweden.",
    "density": 4.469,
    "meltingPoint": 1526,
    "boilingPoint": 3345,
    "discoverer": "Johan Gadolin",
    "yearDiscovered": 1794,
    "uses": [
      "LEDs",
      "laser crystals",
      "superconductors",
      "camera lenses",
      "cancer treatment"
    ]
  },
  {
    "number": 40,
    "symbol": "Zr",
    "name": "Zirconium",
    "slug": "zirconium",
    "mass": 91.224,
    "category": "transition-metal",
    "period": 5,
    "group": 4,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      10,
      2
    ],
    "electronConfig": "[Kr] 4d² 5s²",
    "description": "A strong, corrosion-resistant metal used in nuclear reactors. Cubic zirconia is a synthetic gemstone.",
    "density": 6.506,
    "meltingPoint": 1855,
    "boilingPoint": 4409,
    "discoverer": "Martin Heinrich Klaproth",
    "yearDiscovered": 1789,
    "uses": [
      "Nuclear fuel cladding",
      "ceramic knives",
      "dental implants",
      "industrial furnaces"
    ]
  },
  {
    "number": 41,
    "symbol": "Nb",
    "name": "Niobium",
    "slug": "niobium",
    "mass": 92.906,
    "category": "transition-metal",
    "period": 5,
    "group": 5,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      12,
      1
    ],
    "electronConfig": "[Kr] 4d⁴ 5s¹",
    "description": "A soft, ductile transition metal used in superconducting magnets. Originally called columbium.",
    "density": 8.57,
    "meltingPoint": 2477,
    "boilingPoint": 4744,
    "discoverer": "Charles Hatchett",
    "yearDiscovered": 1801,
    "uses": [
      "Superconducting magnets",
      "jet engines",
      "surgical implants",
      "pipeline construction"
    ]
  },
  {
    "number": 42,
    "symbol": "Mo",
    "name": "Molybdenum",
    "slug": "molybdenum",
    "mass": 95.95,
    "category": "transition-metal",
    "period": 5,
    "group": 6,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      13,
      1
    ],
    "electronConfig": "[Kr] 4d⁵ 5s¹",
    "description": "A high-melting-point metal essential for nitrogen fixation in biology. Strengthens steel alloys.",
    "density": 10.22,
    "meltingPoint": 2623,
    "boilingPoint": 4639,
    "discoverer": "Carl Wilhelm Scheele",
    "yearDiscovered": 1778,
    "uses": [
      "Steel alloys",
      "catalysts",
      "aircraft parts",
      "missile components",
      "lubricants"
    ]
  },
  {
    "number": 43,
    "symbol": "Tc",
    "name": "Technetium",
    "slug": "technetium",
    "mass": 98,
    "category": "transition-metal",
    "period": 5,
    "group": 7,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      13,
      2
    ],
    "electronConfig": "[Kr] 4d⁵ 5s²",
    "description": "The first artificially produced element. All isotopes are radioactive. Used in medical imaging.",
    "density": 11.5,
    "meltingPoint": 2157,
    "boilingPoint": 4265,
    "discoverer": "Carlo Perrier",
    "yearDiscovered": 1937,
    "uses": [
      "Medical diagnostic imaging",
      "radioactive tracers",
      "calibration of equipment"
    ]
  },
  {
    "number": 44,
    "symbol": "Ru",
    "name": "Ruthenium",
    "slug": "ruthenium",
    "mass": 101.07,
    "category": "transition-metal",
    "period": 5,
    "group": 8,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      15,
      1
    ],
    "electronConfig": "[Kr] 4d⁷ 5s¹",
    "description": "A rare, hard transition metal in the platinum group. Used as a catalyst and in electronics.",
    "density": 12.37,
    "meltingPoint": 2334,
    "boilingPoint": 4150,
    "discoverer": "Karl Ernst Claus",
    "yearDiscovered": 1844,
    "uses": [
      "Electronics",
      "catalysts",
      "solar cells",
      "thick film resistors",
      "fountain pen nibs"
    ]
  },
  {
    "number": 45,
    "symbol": "Rh",
    "name": "Rhodium",
    "slug": "rhodium",
    "mass": 102.91,
    "category": "transition-metal",
    "period": 5,
    "group": 9,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      16,
      1
    ],
    "electronConfig": "[Kr] 4d⁸ 5s¹",
    "description": "One of the rarest and most valuable precious metals. Primary use is in catalytic converters.",
    "density": 12.41,
    "meltingPoint": 1964,
    "boilingPoint": 3695,
    "discoverer": "William Hyde Wollaston",
    "yearDiscovered": 1803,
    "uses": [
      "Catalytic converters",
      "jewelry plating",
      "electrical contacts",
      "laboratory crucibles"
    ]
  },
  {
    "number": 46,
    "symbol": "Pd",
    "name": "Palladium",
    "slug": "palladium",
    "mass": 106.42,
    "category": "transition-metal",
    "period": 5,
    "group": 10,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      0
    ],
    "electronConfig": "[Kr] 4d¹⁰",
    "description": "A platinum group metal with remarkable catalytic properties. Can absorb 900 times its own volume of hydrogen.",
    "density": 12.02,
    "meltingPoint": 1554.9,
    "boilingPoint": 2963,
    "discoverer": "William Hyde Wollaston",
    "yearDiscovered": 1803,
    "uses": [
      "Catalytic converters",
      "electronics",
      "dentistry",
      "hydrogen purification",
      "jewelry"
    ]
  },
  {
    "number": 47,
    "symbol": "Ag",
    "name": "Silver",
    "slug": "silver",
    "mass": 107.87,
    "category": "transition-metal",
    "period": 5,
    "group": 11,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      1
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s¹",
    "description": "Has the highest electrical and thermal conductivity of all metals. Used since antiquity for currency and jewelry.",
    "density": 10.501,
    "meltingPoint": 961.78,
    "boilingPoint": 2162,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Jewelry",
      "photography",
      "electronics",
      "mirrors",
      "antibacterial applications",
      "currency"
    ]
  },
  {
    "number": 48,
    "symbol": "Cd",
    "name": "Cadmium",
    "slug": "cadmium",
    "mass": 112.41,
    "category": "transition-metal",
    "period": 5,
    "group": 12,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      2
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s²",
    "description": "A soft, toxic metal primarily used in rechargeable batteries. Being phased out due to environmental concerns.",
    "density": 8.69,
    "meltingPoint": 321.07,
    "boilingPoint": 767,
    "discoverer": "Friedrich Stromeyer",
    "yearDiscovered": 1817,
    "uses": [
      "NiCd batteries",
      "pigments",
      "coatings",
      "nuclear reactors",
      "solar cells"
    ]
  },
  {
    "number": 49,
    "symbol": "In",
    "name": "Indium",
    "slug": "indium",
    "mass": 114.82,
    "category": "post-transition",
    "period": 5,
    "group": 13,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      3
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s² 5p¹",
    "description": "A very soft metal that makes a squealing sound when bent. Critical for touchscreen displays.",
    "density": 7.31,
    "meltingPoint": 156.6,
    "boilingPoint": 2072,
    "discoverer": "Ferdinand Reich",
    "yearDiscovered": 1863,
    "uses": [
      "Touchscreen displays (ITO)",
      "solders",
      "semiconductors",
      "photovoltaics",
      "bearing alloys"
    ]
  },
  {
    "number": 50,
    "symbol": "Sn",
    "name": "Tin",
    "slug": "tin",
    "mass": 118.71,
    "category": "post-transition",
    "period": 5,
    "group": 14,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      4
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s² 5p²",
    "description": "Known since antiquity, tin is used in solder and tin plating. The 'tin cry' is its characteristic sound when bent.",
    "density": 7.287,
    "meltingPoint": 231.93,
    "boilingPoint": 2602,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Solder",
      "tin cans",
      "bronze alloys",
      "window glass (float glass)",
      "electronics"
    ]
  },
  {
    "number": 51,
    "symbol": "Sb",
    "name": "Antimony",
    "slug": "antimony",
    "mass": 121.76,
    "category": "metalloid",
    "period": 5,
    "group": 15,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      5
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s² 5p³",
    "description": "A lustrous metalloid known since antiquity. Used in flame retardants and lead-acid batteries.",
    "density": 6.685,
    "meltingPoint": 630.63,
    "boilingPoint": 1587,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Flame retardants",
      "lead-acid batteries",
      "semiconductors",
      "pigments",
      "ceramics"
    ]
  },
  {
    "number": 52,
    "symbol": "Te",
    "name": "Tellurium",
    "slug": "tellurium",
    "mass": 127.6,
    "category": "metalloid",
    "period": 5,
    "group": 16,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      6
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s² 5p⁴",
    "description": "A rare metalloid with semiconductor properties. Named after 'tellus' (Earth) in Latin.",
    "density": 6.232,
    "meltingPoint": 449.51,
    "boilingPoint": 988,
    "discoverer": "Franz-Joseph Müller von Reichenstein",
    "yearDiscovered": 1782,
    "uses": [
      "Solar panels (CdTe)",
      "thermoelectric devices",
      "rubber vulcanization",
      "electronics"
    ]
  },
  {
    "number": 53,
    "symbol": "I",
    "name": "Iodine",
    "slug": "iodine",
    "mass": 126.9,
    "category": "halogen",
    "period": 5,
    "group": 17,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      7
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s² 5p⁵",
    "description": "A lustrous purple-black metalloid essential for thyroid function. Sublimes to a violet gas.",
    "density": 4.93,
    "meltingPoint": 113.7,
    "boilingPoint": 184.3,
    "discoverer": "Bernard Courtois",
    "yearDiscovered": 1811,
    "uses": [
      "Medicine",
      "disinfectants",
      "photography",
      "nutrition",
      "LCD polarizing filters"
    ]
  },
  {
    "number": 54,
    "symbol": "Xe",
    "name": "Xenon",
    "slug": "xenon",
    "mass": 131.29,
    "category": "noble-gas",
    "period": 5,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8
    ],
    "electronConfig": "[Kr] 4d¹⁰ 5s² 5p⁶",
    "description": "A heavy noble gas used in ion propulsion and high-intensity lighting. Can form compounds unlike lighter noble gases.",
    "density": 0.005887,
    "meltingPoint": -111.75,
    "boilingPoint": -108.13,
    "discoverer": "William Ramsay",
    "yearDiscovered": 1898,
    "uses": [
      "Ion propulsion",
      "flash lamps",
      "anesthesia",
      "headlights",
      "dark matter detection"
    ]
  },
  {
    "number": 55,
    "symbol": "Cs",
    "name": "Caesium",
    "slug": "caesium",
    "mass": 132.91,
    "category": "alkali-metal",
    "period": 6,
    "group": 1,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8,
      1
    ],
    "electronConfig": "[Xe] 6s¹",
    "description": "The most electropositive naturally occurring element. Defines the second via atomic clocks.",
    "density": 1.873,
    "meltingPoint": 28.44,
    "boilingPoint": 671,
    "discoverer": "Robert Bunsen",
    "yearDiscovered": 1860,
    "uses": [
      "Atomic clocks",
      "drilling fluids",
      "photoelectric cells",
      "catalyst promoters"
    ]
  },
  {
    "number": 56,
    "symbol": "Ba",
    "name": "Barium",
    "slug": "barium",
    "mass": 137.33,
    "category": "alkaline-earth",
    "period": 6,
    "group": 2,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      8,
      2
    ],
    "electronConfig": "[Xe] 6s²",
    "description": "A soft, silvery alkaline earth metal. Barium sulfate is used in medical X-ray imaging.",
    "density": 3.594,
    "meltingPoint": 727,
    "boilingPoint": 1845,
    "discoverer": "Carl Wilhelm Scheele",
    "yearDiscovered": 1772,
    "uses": [
      "X-ray imaging",
      "fireworks (green)",
      "drilling fluids",
      "glass making",
      "rat poison"
    ]
  },
  {
    "number": 57,
    "symbol": "La",
    "name": "Lanthanum",
    "slug": "lanthanum",
    "mass": 138.91,
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      18,
      9,
      2
    ],
    "electronConfig": "[Xe] 5d¹ 6s²",
    "description": "The first element in the lanthanide series. Used in camera and telescope lenses.",
    "density": 6.145,
    "meltingPoint": 920,
    "boilingPoint": 3464,
    "discoverer": "Carl Gustaf Mosander",
    "yearDiscovered": 1839,
    "uses": [
      "Camera lenses",
      "catalytic converters",
      "battery electrodes",
      "lighting",
      "flints"
    ]
  },
  {
    "number": 58,
    "symbol": "Ce",
    "name": "Cerium",
    "slug": "cerium",
    "mass": 140.12,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      19,
      9,
      2
    ],
    "electronConfig": "[Xe] 4f¹ 5d¹ 6s²",
    "description": "The most abundant rare earth element. Self-cleaning ovens use cerium oxide coatings.",
    "density": 6.77,
    "meltingPoint": 799,
    "boilingPoint": 3443,
    "discoverer": "Jöns Jacob Berzelius",
    "yearDiscovered": 1803,
    "uses": [
      "Catalytic converters",
      "glass polishing",
      "self-cleaning ovens",
      "lighter flints"
    ]
  },
  {
    "number": 59,
    "symbol": "Pr",
    "name": "Praseodymium",
    "slug": "praseodymium",
    "mass": 140.91,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      21,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f³ 6s²",
    "description": "Creates a distinctive yellow-green color in glass. Name means 'green twin' in Greek.",
    "density": 6.773,
    "meltingPoint": 931,
    "boilingPoint": 3520,
    "discoverer": "Carl Auer von Welsbach",
    "yearDiscovered": 1885,
    "uses": [
      "Magnets",
      "lasers",
      "glass coloring",
      "aircraft engines",
      "arc lighting"
    ]
  },
  {
    "number": 60,
    "symbol": "Nd",
    "name": "Neodymium",
    "slug": "neodymium",
    "mass": 144.24,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      22,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f⁴ 6s²",
    "description": "Creates the strongest permanent magnets known. Essential for modern technology and green energy.",
    "density": 7.007,
    "meltingPoint": 1016,
    "boilingPoint": 3074,
    "discoverer": "Carl Auer von Welsbach",
    "yearDiscovered": 1885,
    "uses": [
      "Powerful magnets",
      "lasers",
      "glass coloring",
      "wind turbines",
      "electric vehicles"
    ]
  },
  {
    "number": 61,
    "symbol": "Pm",
    "name": "Promethium",
    "slug": "promethium",
    "mass": 145,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      23,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f⁵ 6s²",
    "description": "The only radioactive rare earth element with no stable isotopes. Named after the Titan Prometheus.",
    "density": 7.26,
    "meltingPoint": 1042,
    "boilingPoint": 3000,
    "discoverer": "Charles D. Coryell",
    "yearDiscovered": 1945,
    "uses": [
      "Nuclear batteries",
      "luminous paint",
      "thickness measurement",
      "research"
    ]
  },
  {
    "number": 62,
    "symbol": "Sm",
    "name": "Samarium",
    "slug": "samarium",
    "mass": 150.36,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      24,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f⁶ 6s²",
    "description": "Used in powerful magnets and nuclear reactor control rods. Named after the mineral samarskite.",
    "density": 7.52,
    "meltingPoint": 1072,
    "boilingPoint": 1794,
    "discoverer": "Paul Emile Lecoq de Boisbaudran",
    "yearDiscovered": 1879,
    "uses": [
      "Permanent magnets",
      "cancer treatment",
      "nuclear reactors",
      "glass",
      "catalysts"
    ]
  },
  {
    "number": 63,
    "symbol": "Eu",
    "name": "Europium",
    "slug": "europium",
    "mass": 151.96,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      25,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f⁷ 6s²",
    "description": "The most reactive rare earth element. Creates red phosphors for displays and is used in euro banknote security.",
    "density": 5.243,
    "meltingPoint": 822,
    "boilingPoint": 1527,
    "discoverer": "Eugène-Anatole Demarçay",
    "yearDiscovered": 1901,
    "uses": [
      "Display phosphors",
      "fluorescent lighting",
      "laser materials",
      "banknote security"
    ]
  },
  {
    "number": 64,
    "symbol": "Gd",
    "name": "Gadolinium",
    "slug": "gadolinium",
    "mass": 157.25,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      25,
      9,
      2
    ],
    "electronConfig": "[Xe] 4f⁷ 5d¹ 6s²",
    "description": "Has unusual magnetic properties and is used as an MRI contrast agent. Named after Johan Gadolin.",
    "density": 7.895,
    "meltingPoint": 1313,
    "boilingPoint": 3273,
    "discoverer": "Jean Charles Galissard de Marignac",
    "yearDiscovered": 1880,
    "uses": [
      "MRI contrast agent",
      "nuclear reactors",
      "magnets",
      "electronics",
      "neutron detection"
    ]
  },
  {
    "number": 65,
    "symbol": "Tb",
    "name": "Terbium",
    "slug": "terbium",
    "mass": 158.93,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      27,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f⁹ 6s²",
    "description": "A silvery rare earth used in green phosphors for displays. Named after Ytterby, Sweden.",
    "density": 8.229,
    "meltingPoint": 1356,
    "boilingPoint": 3230,
    "discoverer": "Carl Gustaf Mosander",
    "yearDiscovered": 1843,
    "uses": [
      "Green phosphors",
      "solid-state devices",
      "fuel cells",
      "sonar systems",
      "fluorescent lamps"
    ]
  },
  {
    "number": 66,
    "symbol": "Dy",
    "name": "Dysprosium",
    "slug": "dysprosium",
    "mass": 162.5,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      28,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁰ 6s²",
    "description": "Name means 'hard to get' in Greek. Critical for high-power permanent magnets.",
    "density": 8.55,
    "meltingPoint": 1412,
    "boilingPoint": 2567,
    "discoverer": "Paul Emile Lecoq de Boisbaudran",
    "yearDiscovered": 1886,
    "uses": [
      "Permanent magnets",
      "nuclear reactors",
      "data storage",
      "transducers",
      "lasers"
    ]
  },
  {
    "number": 67,
    "symbol": "Ho",
    "name": "Holmium",
    "slug": "holmium",
    "mass": 164.93,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      29,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f¹¹ 6s²",
    "description": "Has the highest magnetic moment of any naturally occurring element. Named after Stockholm.",
    "density": 8.795,
    "meltingPoint": 1474,
    "boilingPoint": 2700,
    "discoverer": "Marc Delafontaine",
    "yearDiscovered": 1878,
    "uses": [
      "Magnets",
      "nuclear reactors",
      "lasers",
      "spectrophotometry",
      "microwave equipment"
    ]
  },
  {
    "number": 68,
    "symbol": "Er",
    "name": "Erbium",
    "slug": "erbium",
    "mass": 167.26,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      30,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f¹² 6s²",
    "description": "Gives pink coloring to glass and is essential for fiber optic communication amplifiers.",
    "density": 9.066,
    "meltingPoint": 1529,
    "boilingPoint": 2868,
    "discoverer": "Carl Gustaf Mosander",
    "yearDiscovered": 1843,
    "uses": [
      "Fiber optic amplifiers",
      "lasers",
      "glass coloring",
      "nuclear technology",
      "metallurgy"
    ]
  },
  {
    "number": 69,
    "symbol": "Tm",
    "name": "Thulium",
    "slug": "thulium",
    "mass": 168.93,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      31,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f¹³ 6s²",
    "description": "The rarest naturally occurring lanthanide. Used in portable X-ray machines.",
    "density": 9.321,
    "meltingPoint": 1545,
    "boilingPoint": 1950,
    "discoverer": "Per Teodor Cleve",
    "yearDiscovered": 1879,
    "uses": [
      "Portable X-ray devices",
      "lasers",
      "high-temperature superconductors",
      "euro banknotes"
    ]
  },
  {
    "number": 70,
    "symbol": "Yb",
    "name": "Ytterbium",
    "slug": "ytterbium",
    "mass": 173.05,
    "category": "lanthanide",
    "period": 6,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      8,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 6s²",
    "description": "A soft, malleable rare earth metal. Used in stress gauges and next-generation atomic clocks.",
    "density": 6.965,
    "meltingPoint": 819,
    "boilingPoint": 1196,
    "discoverer": "Jean Charles Galissard de Marignac",
    "yearDiscovered": 1878,
    "uses": [
      "Stress gauges",
      "metallurgy",
      "laser source material",
      "atomic clocks",
      "fiber optics"
    ]
  },
  {
    "number": 71,
    "symbol": "Lu",
    "name": "Lutetium",
    "slug": "lutetium",
    "mass": 174.97,
    "category": "lanthanide",
    "period": 6,
    "group": 3,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      9,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹ 6s²",
    "description": "The last element in the lanthanide series. Named after Lutetia, the Latin name for Paris.",
    "density": 9.84,
    "meltingPoint": 1663,
    "boilingPoint": 3402,
    "discoverer": "Georges Urbain",
    "yearDiscovered": 1907,
    "uses": [
      "PET scan detectors",
      "catalysts",
      "crystal scintillators",
      "high-refractive-index glass"
    ]
  },
  {
    "number": 72,
    "symbol": "Hf",
    "name": "Hafnium",
    "slug": "hafnium",
    "mass": 178.49,
    "category": "transition-metal",
    "period": 6,
    "group": 4,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      10,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d² 6s²",
    "description": "Chemically nearly identical to zirconium. Used in nuclear reactor control rods and microprocessors.",
    "density": 13.31,
    "meltingPoint": 2233,
    "boilingPoint": 4603,
    "discoverer": "Dirk Coster",
    "yearDiscovered": 1923,
    "uses": [
      "Nuclear control rods",
      "microprocessors",
      "high-temperature alloys",
      "plasma cutting"
    ]
  },
  {
    "number": 73,
    "symbol": "Ta",
    "name": "Tantalum",
    "slug": "tantalum",
    "mass": 180.95,
    "category": "transition-metal",
    "period": 6,
    "group": 5,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      11,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d³ 6s²",
    "description": "A rare, hard, highly corrosion-resistant metal. Essential for modern electronics and surgical implants.",
    "density": 16.654,
    "meltingPoint": 3017,
    "boilingPoint": 5458,
    "discoverer": "Anders Gustaf Ekeberg",
    "yearDiscovered": 1802,
    "uses": [
      "Capacitors",
      "surgical instruments",
      "jet engines",
      "chemical processing",
      "mobile phones"
    ]
  },
  {
    "number": 74,
    "symbol": "W",
    "name": "Tungsten",
    "slug": "tungsten",
    "mass": 183.84,
    "category": "transition-metal",
    "period": 6,
    "group": 6,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      12,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d⁴ 6s²",
    "description": "Has the highest melting point of all elements. Symbol W comes from its German name 'Wolfram'.",
    "density": 19.25,
    "meltingPoint": 3422,
    "boilingPoint": 5555,
    "discoverer": "Juan José Elhuyar",
    "yearDiscovered": 1783,
    "uses": [
      "Light bulb filaments",
      "cutting tools",
      "military projectiles",
      "X-ray tubes",
      "welding"
    ]
  },
  {
    "number": 75,
    "symbol": "Re",
    "name": "Rhenium",
    "slug": "rhenium",
    "mass": 186.21,
    "category": "transition-metal",
    "period": 6,
    "group": 7,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      13,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d⁵ 6s²",
    "description": "One of the rarest elements in Earth's crust. Has the third highest melting point of all elements.",
    "density": 21.02,
    "meltingPoint": 3186,
    "boilingPoint": 5596,
    "discoverer": "Masataka Ogawa",
    "yearDiscovered": 1925,
    "uses": [
      "Jet engine superalloys",
      "catalysts",
      "thermocouples",
      "mass spectrometers",
      "X-ray tubes"
    ]
  },
  {
    "number": 76,
    "symbol": "Os",
    "name": "Osmium",
    "slug": "osmium",
    "mass": 190.23,
    "category": "transition-metal",
    "period": 6,
    "group": 8,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      14,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d⁶ 6s²",
    "description": "The densest naturally occurring element. Named from Greek 'osme' (smell) due to its toxic oxide.",
    "density": 22.587,
    "meltingPoint": 3033,
    "boilingPoint": 5012,
    "discoverer": "Smithson Tennant",
    "yearDiscovered": 1803,
    "uses": [
      "Fountain pen nibs",
      "electrical contacts",
      "instrument pivots",
      "fingerprint detection"
    ]
  },
  {
    "number": 77,
    "symbol": "Ir",
    "name": "Iridium",
    "slug": "iridium",
    "mass": 192.22,
    "category": "transition-metal",
    "period": 6,
    "group": 9,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      15,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d⁷ 6s²",
    "description": "One of the most corrosion-resistant metals. An iridium layer marks the asteroid that ended the dinosaurs.",
    "density": 22.56,
    "meltingPoint": 2466,
    "boilingPoint": 4428,
    "discoverer": "Smithson Tennant",
    "yearDiscovered": 1803,
    "uses": [
      "Spark plugs",
      "crucibles",
      "deep-water pipelines",
      "electronics",
      "cancer treatment"
    ]
  },
  {
    "number": 78,
    "symbol": "Pt",
    "name": "Platinum",
    "slug": "platinum",
    "mass": 195.08,
    "category": "transition-metal",
    "period": 6,
    "group": 10,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      17,
      1
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d⁹ 6s¹",
    "description": "A precious metal more rare than gold. Resistant to corrosion and used extensively as a catalyst.",
    "density": 21.46,
    "meltingPoint": 1768.3,
    "boilingPoint": 3825,
    "discoverer": "Antonio de Ulloa",
    "yearDiscovered": 1735,
    "uses": [
      "Catalytic converters",
      "jewelry",
      "laboratory equipment",
      "cancer drugs",
      "fuel cells"
    ]
  },
  {
    "number": 79,
    "symbol": "Au",
    "name": "Gold",
    "slug": "gold",
    "mass": 196.97,
    "category": "transition-metal",
    "period": 6,
    "group": 11,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      1
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s¹",
    "description": "The most malleable and ductile metal. Prized for its beauty and resistance to corrosion since prehistory.",
    "density": 19.282,
    "meltingPoint": 1064.18,
    "boilingPoint": 2856,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Jewelry",
      "electronics",
      "currency reserves",
      "dentistry",
      "aerospace",
      "medicine"
    ]
  },
  {
    "number": 80,
    "symbol": "Hg",
    "name": "Mercury",
    "slug": "mercury",
    "mass": 200.59,
    "category": "transition-metal",
    "period": 6,
    "group": 12,
    "phase": "Liquid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      2
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s²",
    "description": "The only metal that is liquid at room temperature. Historically used in thermometers and dental fillings.",
    "density": 13.5336,
    "meltingPoint": -38.83,
    "boilingPoint": 356.73,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Thermometers (historic)",
      "fluorescent lighting",
      "dental amalgams",
      "gold mining"
    ]
  },
  {
    "number": 81,
    "symbol": "Tl",
    "name": "Thallium",
    "slug": "thallium",
    "mass": 204.38,
    "category": "post-transition",
    "period": 6,
    "group": 13,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      3
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹",
    "description": "A soft, extremely toxic metal once used as rat poison. Creates a green line in flame tests.",
    "density": 11.85,
    "meltingPoint": 304,
    "boilingPoint": 1473,
    "discoverer": "William Crookes",
    "yearDiscovered": 1861,
    "uses": [
      "Electronics",
      "superconductors",
      "cardiac imaging",
      "semiconductor materials"
    ]
  },
  {
    "number": 82,
    "symbol": "Pb",
    "name": "Lead",
    "slug": "lead",
    "mass": 207.2,
    "category": "post-transition",
    "period": 6,
    "group": 14,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      4
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²",
    "description": "One of the earliest metals smelted by humans. Dense, soft, and toxic, with excellent radiation shielding.",
    "density": 11.342,
    "meltingPoint": 327.46,
    "boilingPoint": 1749,
    "discoverer": "Ancient",
    "yearDiscovered": "Ancient",
    "uses": [
      "Batteries",
      "radiation shielding",
      "ammunition",
      "roofing",
      "weights",
      "soldering"
    ]
  },
  {
    "number": 83,
    "symbol": "Bi",
    "name": "Bismuth",
    "slug": "bismuth",
    "mass": 208.98,
    "category": "post-transition",
    "period": 6,
    "group": 15,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      5
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³",
    "description": "Creates beautiful iridescent oxide crystals. The least toxic of all heavy metals.",
    "density": 9.807,
    "meltingPoint": 271.3,
    "boilingPoint": 1564,
    "discoverer": "Claude François Geoffroy",
    "yearDiscovered": 1753,
    "uses": [
      "Pharmaceuticals (Pepto-Bismol)",
      "cosmetics",
      "fire sprinklers",
      "fishing sinkers",
      "alloys"
    ]
  },
  {
    "number": 84,
    "symbol": "Po",
    "name": "Polonium",
    "slug": "polonium",
    "mass": 209,
    "category": "post-transition",
    "period": 6,
    "group": 16,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      6
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴",
    "description": "A rare, highly radioactive element discovered by Marie Curie. Named after her homeland Poland.",
    "density": 9.32,
    "meltingPoint": 254,
    "boilingPoint": 962,
    "discoverer": "Marie Curie",
    "yearDiscovered": 1898,
    "uses": [
      "Static eliminators",
      "heat source for space equipment",
      "nuclear triggers",
      "research"
    ]
  },
  {
    "number": 85,
    "symbol": "At",
    "name": "Astatine",
    "slug": "astatine",
    "mass": 210,
    "category": "halogen",
    "period": 6,
    "group": 17,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      7
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵",
    "description": "The rarest naturally occurring element on Earth. Highly radioactive with a half-life of only hours.",
    "density": 7,
    "meltingPoint": 302,
    "boilingPoint": 337,
    "discoverer": "Dale R. Corson",
    "yearDiscovered": 1940,
    "uses": [
      "Targeted cancer radiotherapy research",
      "nuclear physics experiments"
    ]
  },
  {
    "number": 86,
    "symbol": "Rn",
    "name": "Radon",
    "slug": "radon",
    "mass": 222,
    "category": "noble-gas",
    "period": 6,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8
    ],
    "electronConfig": "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶",
    "description": "A radioactive noble gas produced by radium decay. A leading cause of lung cancer after smoking.",
    "density": 0.00973,
    "meltingPoint": -71,
    "boilingPoint": -61.7,
    "discoverer": "Friedrich Ernst Dorn",
    "yearDiscovered": 1900,
    "uses": [
      "Earthquake prediction research",
      "radiotherapy",
      "hydrological research"
    ]
  },
  {
    "number": 87,
    "symbol": "Fr",
    "name": "Francium",
    "slug": "francium",
    "mass": 223,
    "category": "alkali-metal",
    "period": 7,
    "group": 1,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8,
      1
    ],
    "electronConfig": "[Rn] 7s¹",
    "description": "The most unstable naturally occurring element. Extremely rare — less than 30g exists on Earth at any time.",
    "density": 1.87,
    "meltingPoint": 27,
    "boilingPoint": 677,
    "discoverer": "Marguerite Perey",
    "yearDiscovered": 1939,
    "uses": [
      "Fundamental physics research",
      "atomic structure studies"
    ]
  },
  {
    "number": 88,
    "symbol": "Ra",
    "name": "Radium",
    "slug": "radium",
    "mass": 226,
    "category": "alkaline-earth",
    "period": 7,
    "group": 2,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      8,
      2
    ],
    "electronConfig": "[Rn] 7s²",
    "description": "A highly radioactive element that glows in the dark. Discovered by Marie and Pierre Curie.",
    "density": 5.5,
    "meltingPoint": 696,
    "boilingPoint": 1500,
    "discoverer": "Marie Curie",
    "yearDiscovered": 1898,
    "uses": [
      "Historical: luminous paint",
      "cancer treatment; Currently: research",
      "radon production"
    ]
  },
  {
    "number": 89,
    "symbol": "Ac",
    "name": "Actinium",
    "slug": "actinium",
    "mass": 227,
    "category": "actinide",
    "period": 7,
    "group": 3,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      9,
      2
    ],
    "electronConfig": "[Rn] 6d¹ 7s²",
    "description": "Glows blue in the dark due to intense radioactivity. Heads the actinide series of elements.",
    "density": 10.07,
    "meltingPoint": 1050,
    "boilingPoint": 3198,
    "discoverer": "Friedrich Oskar Giesel",
    "yearDiscovered": 1902,
    "uses": [
      "Neutron source",
      "cancer treatment research",
      "thermoelectric power generation"
    ]
  },
  {
    "number": 90,
    "symbol": "Th",
    "name": "Thorium",
    "slug": "thorium",
    "mass": 232.04,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      18,
      10,
      2
    ],
    "electronConfig": "[Rn] 6d² 7s²",
    "description": "A weakly radioactive metal being researched as a safer nuclear fuel alternative to uranium.",
    "density": 11.72,
    "meltingPoint": 1750,
    "boilingPoint": 4788,
    "discoverer": "Jöns Jacob Berzelius",
    "yearDiscovered": 1829,
    "uses": [
      "Potential nuclear fuel",
      "gas mantles",
      "high-quality optics",
      "welding electrodes"
    ]
  },
  {
    "number": 91,
    "symbol": "Pa",
    "name": "Protactinium",
    "slug": "protactinium",
    "mass": 231.04,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      20,
      9,
      2
    ],
    "electronConfig": "[Rn] 5f² 6d¹ 7s²",
    "description": "One of the rarest and most expensive naturally occurring elements. Intensely radioactive.",
    "density": 15.37,
    "meltingPoint": 1572,
    "boilingPoint": 4000,
    "discoverer": "Kasimir Fajans",
    "yearDiscovered": 1913,
    "uses": [
      "Scientific research",
      "ocean sediment dating",
      "nuclear physics"
    ]
  },
  {
    "number": 92,
    "symbol": "U",
    "name": "Uranium",
    "slug": "uranium",
    "mass": 238.03,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      21,
      9,
      2
    ],
    "electronConfig": "[Rn] 5f³ 6d¹ 7s²",
    "description": "A dense, radioactive metal that provides fuel for nuclear power. Named after the planet Uranus.",
    "density": 18.95,
    "meltingPoint": 1135,
    "boilingPoint": 4131,
    "discoverer": "Martin Heinrich Klaproth",
    "yearDiscovered": 1789,
    "uses": [
      "Nuclear power",
      "nuclear weapons",
      "armor-piercing projectiles",
      "counterweights",
      "dating"
    ]
  },
  {
    "number": 93,
    "symbol": "Np",
    "name": "Neptunium",
    "slug": "neptunium",
    "mass": 237,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      22,
      9,
      2
    ],
    "electronConfig": "[Rn] 5f⁴ 6d¹ 7s²",
    "description": "The first transuranium element discovered. Named after Neptune, the planet beyond Uranus.",
    "density": 20.45,
    "meltingPoint": 644,
    "boilingPoint": 3902,
    "discoverer": "Edwin McMillan",
    "yearDiscovered": 1940,
    "uses": [
      "Nuclear weapons",
      "neutron detection",
      "research",
      "spacecraft power sources"
    ]
  },
  {
    "number": 94,
    "symbol": "Pu",
    "name": "Plutonium",
    "slug": "plutonium",
    "mass": 244,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      24,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f⁶ 7s²",
    "description": "An extremely dangerous radioactive element used in nuclear weapons and space exploration.",
    "density": 19.84,
    "meltingPoint": 640,
    "boilingPoint": 3228,
    "discoverer": "Glenn T. Seaborg",
    "yearDiscovered": 1940,
    "uses": [
      "Nuclear weapons",
      "nuclear reactors",
      "spacecraft power (RTGs)",
      "research"
    ]
  },
  {
    "number": 95,
    "symbol": "Am",
    "name": "Americium",
    "slug": "americium",
    "mass": 243,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      25,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f⁷ 7s²",
    "description": "A synthetic radioactive metal. Found in nearly every home as the ionization source in smoke detectors.",
    "density": 13.69,
    "meltingPoint": 1176,
    "boilingPoint": 2011,
    "discoverer": "Glenn T. Seaborg",
    "yearDiscovered": 1944,
    "uses": [
      "Smoke detectors",
      "neutron sources",
      "industrial gauges",
      "space batteries"
    ]
  },
  {
    "number": 96,
    "symbol": "Cm",
    "name": "Curium",
    "slug": "curium",
    "mass": 247,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      25,
      9,
      2
    ],
    "electronConfig": "[Rn] 5f⁷ 6d¹ 7s²",
    "description": "Named after Marie and Pierre Curie. So radioactive it glows red in the dark.",
    "density": 13.51,
    "meltingPoint": 1345,
    "boilingPoint": 3110,
    "discoverer": "Glenn T. Seaborg",
    "yearDiscovered": 1944,
    "uses": [
      "Mars rovers (alpha particle X-ray spectrometer)",
      "pacemaker power",
      "research"
    ]
  },
  {
    "number": 97,
    "symbol": "Bk",
    "name": "Berkelium",
    "slug": "berkelium",
    "mass": 247,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      27,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f⁹ 7s²",
    "description": "Named after Berkeley, California. Extremely rare and produced only in microgram quantities.",
    "density": 14.79,
    "meltingPoint": 986,
    "boilingPoint": 2627,
    "discoverer": "Stanley G. Thompson",
    "yearDiscovered": 1949,
    "uses": [
      "Scientific research",
      "production of heavier elements"
    ]
  },
  {
    "number": 98,
    "symbol": "Cf",
    "name": "Californium",
    "slug": "californium",
    "mass": 251,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      28,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁰ 7s²",
    "description": "One of the most expensive materials on Earth (~$27M per gram). A powerful neutron source.",
    "density": 15.1,
    "meltingPoint": 900,
    "boilingPoint": 1472,
    "discoverer": "Stanley G. Thompson",
    "yearDiscovered": 1950,
    "uses": [
      "Neutron source",
      "nuclear reactor startup",
      "metal detection",
      "cancer treatment"
    ]
  },
  {
    "number": 99,
    "symbol": "Es",
    "name": "Einsteinium",
    "slug": "einsteinium",
    "mass": 252,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      29,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f¹¹ 7s²",
    "description": "Discovered in the fallout of the first hydrogen bomb test. Named after Albert Einstein.",
    "density": 8.84,
    "meltingPoint": 860,
    "boilingPoint": 996,
    "discoverer": "Albert Ghiorso",
    "yearDiscovered": 1952,
    "uses": [
      "Fundamental physics research",
      "production of heavier elements"
    ]
  },
  {
    "number": 100,
    "symbol": "Fm",
    "name": "Fermium",
    "slug": "fermium",
    "mass": 257,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      30,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f¹² 7s²",
    "description": "Also discovered in hydrogen bomb fallout. Named after Enrico Fermi. Cannot be produced in bulk.",
    "density": 9.7,
    "meltingPoint": 1527,
    "boilingPoint": null,
    "discoverer": "Albert Ghiorso",
    "yearDiscovered": 1952,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 101,
    "symbol": "Md",
    "name": "Mendelevium",
    "slug": "mendelevium",
    "mass": 258,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      31,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f¹³ 7s²",
    "description": "Named after Dmitri Mendeleev, creator of the periodic table. Only 17 atoms were first produced.",
    "density": 10.3,
    "meltingPoint": 827,
    "boilingPoint": null,
    "discoverer": "Albert Ghiorso",
    "yearDiscovered": 1955,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 102,
    "symbol": "No",
    "name": "Nobelium",
    "slug": "nobelium",
    "mass": 259,
    "category": "actinide",
    "period": 7,
    "group": null,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      8,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 7s²",
    "description": "Named after Alfred Nobel. Its discovery was controversial with multiple competing claims.",
    "density": 9.9,
    "meltingPoint": 827,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 1966,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 103,
    "symbol": "Lr",
    "name": "Lawrencium",
    "slug": "lawrencium",
    "mass": 266,
    "category": "actinide",
    "period": 7,
    "group": 3,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      8,
      3
    ],
    "electronConfig": "[Rn] 5f¹⁴ 7s² 7p¹",
    "description": "The last element in the actinide series. Named after Ernest Lawrence, inventor of the cyclotron.",
    "density": 15.6,
    "meltingPoint": 1627,
    "boilingPoint": null,
    "discoverer": "Albert Ghiorso",
    "yearDiscovered": 1961,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 104,
    "symbol": "Rf",
    "name": "Rutherfordium",
    "slug": "rutherfordium",
    "mass": 267,
    "category": "transition-metal",
    "period": 7,
    "group": 4,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      10,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d² 7s²",
    "description": "Named after Ernest Rutherford. Extremely radioactive with a half-life of about one hour.",
    "density": 23.2,
    "meltingPoint": 2100,
    "boilingPoint": 5500,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 1964,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 105,
    "symbol": "Db",
    "name": "Dubnium",
    "slug": "dubnium",
    "mass": 268,
    "category": "transition-metal",
    "period": 7,
    "group": 5,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      11,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d³ 7s²",
    "description": "Named after Dubna, Russia. Subject of a naming controversy during the Cold War.",
    "density": 29.3,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 1968,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 106,
    "symbol": "Sg",
    "name": "Seaborgium",
    "slug": "seaborgium",
    "mass": 269,
    "category": "transition-metal",
    "period": 7,
    "group": 6,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      12,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d⁴ 7s²",
    "description": "Named after Glenn T. Seaborg, the only person for whom an element was named while still alive.",
    "density": 35,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Albert Ghiorso",
    "yearDiscovered": 1974,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 107,
    "symbol": "Bh",
    "name": "Bohrium",
    "slug": "bohrium",
    "mass": 270,
    "category": "transition-metal",
    "period": 7,
    "group": 7,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      13,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d⁵ 7s²",
    "description": "Named after Niels Bohr. Only a few atoms have ever been produced.",
    "density": 37.1,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Peter Armbruster",
    "yearDiscovered": 1981,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 108,
    "symbol": "Hs",
    "name": "Hassium",
    "slug": "hassium",
    "mass": 277,
    "category": "transition-metal",
    "period": 7,
    "group": 8,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      14,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d⁶ 7s²",
    "description": "Named after the German state of Hesse. Predicted to be the densest element under standard conditions.",
    "density": 40.7,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Peter Armbruster",
    "yearDiscovered": 1984,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 109,
    "symbol": "Mt",
    "name": "Meitnerium",
    "slug": "meitnerium",
    "mass": 278,
    "category": "unknown",
    "period": 7,
    "group": 9,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      15,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d⁷ 7s²",
    "description": "Named after Lise Meitner, who co-discovered nuclear fission. Extremely short-lived.",
    "density": 37.4,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Peter Armbruster",
    "yearDiscovered": 1982,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 110,
    "symbol": "Ds",
    "name": "Darmstadtium",
    "slug": "darmstadtium",
    "mass": 281,
    "category": "unknown",
    "period": 7,
    "group": 10,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      17,
      1
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d⁸ 7s²",
    "description": "Named after Darmstadt, Germany. Has a half-life of only about 10 seconds.",
    "density": 34.8,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Peter Armbruster",
    "yearDiscovered": 1994,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 111,
    "symbol": "Rg",
    "name": "Roentgenium",
    "slug": "roentgenium",
    "mass": 282,
    "category": "unknown",
    "period": 7,
    "group": 11,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      1
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d⁹ 7s²",
    "description": "Named after Wilhelm Röntgen, discoverer of X-rays. Predicted to be a noble metal like gold.",
    "density": 28.7,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Peter Armbruster",
    "yearDiscovered": 1994,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 112,
    "symbol": "Cn",
    "name": "Copernicium",
    "slug": "copernicium",
    "mass": 285,
    "category": "unknown",
    "period": 7,
    "group": 12,
    "phase": "Liquid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      2
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s²",
    "description": "Named after Nicolaus Copernicus. Predicted to be a volatile liquid metal, similar to mercury.",
    "density": 23.7,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Sigurd Hofmann",
    "yearDiscovered": 1996,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 113,
    "symbol": "Nh",
    "name": "Nihonium",
    "slug": "nihonium",
    "mass": 286,
    "category": "unknown",
    "period": 7,
    "group": 13,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      3
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹",
    "description": "Named after Japan (Nihon). The first element discovered in Asia.",
    "density": 16,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Kosuke Morita",
    "yearDiscovered": 2004,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 114,
    "symbol": "Fl",
    "name": "Flerovium",
    "slug": "flerovium",
    "mass": 289,
    "category": "unknown",
    "period": 7,
    "group": 14,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      4
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²",
    "description": "Named after the Flerov Laboratory. May be unusually volatile for such a heavy element.",
    "density": 14,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 1999,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 115,
    "symbol": "Mc",
    "name": "Moscovium",
    "slug": "moscovium",
    "mass": 290,
    "category": "unknown",
    "period": 7,
    "group": 15,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      5
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³",
    "description": "Named after Moscow. Extremely unstable with a half-life of less than one second.",
    "density": 13.5,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 2003,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 116,
    "symbol": "Lv",
    "name": "Livermorium",
    "slug": "livermorium",
    "mass": 293,
    "category": "unknown",
    "period": 7,
    "group": 16,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      6
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴",
    "description": "Named after the Lawrence Livermore National Laboratory. Highly radioactive and short-lived.",
    "density": 12.9,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 2000,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 117,
    "symbol": "Ts",
    "name": "Tennessine",
    "slug": "tennessine",
    "mass": 294,
    "category": "unknown",
    "period": 7,
    "group": 17,
    "phase": "Solid",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      7
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵",
    "description": "Named after the state of Tennessee. One of the newest elements officially recognized.",
    "density": 7.1,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 2010,
    "uses": [
      "Fundamental scientific research only"
    ]
  },
  {
    "number": 118,
    "symbol": "Og",
    "name": "Oganesson",
    "slug": "oganesson",
    "mass": 294,
    "category": "unknown",
    "period": 7,
    "group": 18,
    "phase": "Gas",
    "electronsPerShell": [
      2,
      8,
      18,
      32,
      32,
      18,
      8
    ],
    "electronConfig": "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶",
    "description": "Named after Yuri Oganessian. The heaviest known element, predicted to be a noble gas.",
    "density": 5,
    "meltingPoint": null,
    "boilingPoint": null,
    "discoverer": "Joint Institute for Nuclear Research",
    "yearDiscovered": 2006,
    "uses": [
      "Fundamental scientific research only"
    ]
  }
];

export function getElementBySlug(slug: string): ElementData | undefined {
  return elements.find(e => e.slug === slug);
}

export function getElementByNumber(num: number): ElementData | undefined {
  return elements.find(e => e.number === num);
}

export function getElementsByCategory(cat: ElementCategory): ElementData[] {
  return elements.filter(e => e.category === cat);
}

export function getAllSlugs(): string[] {
  return elements.map(e => e.slug);
}
