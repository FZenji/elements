import { writeFileSync } from 'fs';

const categories = {
  'alkali-metal': { label: 'Alkali Metal', color: '--cat-alkali' },
  'alkaline-earth': { label: 'Alkaline Earth Metal', color: '--cat-alkaline' },
  'transition-metal': { label: 'Transition Metal', color: '--cat-transition' },
  'post-transition': { label: 'Post-Transition Metal', color: '--cat-post-transition' },
  'metalloid': { label: 'Metalloid', color: '--cat-metalloid' },
  'nonmetal': { label: 'Reactive Nonmetal', color: '--cat-nonmetal' },
  'halogen': { label: 'Halogen', color: '--cat-halogen' },
  'noble-gas': { label: 'Noble Gas', color: '--cat-noble' },
  'lanthanide': { label: 'Lanthanide', color: '--cat-lanthanide' },
  'actinide': { label: 'Actinide', color: '--cat-actinide' },
  'unknown': { label: 'Unknown Properties', color: '--cat-unknown' },
};

// [number, symbol, name, mass, category, period, group, phase, electrons_per_shell, electron_config, description, density, melting, boiling, discoverer, year, uses]
const raw = [
[1,"H","Hydrogen",1.008,"nonmetal",1,1,"Gas",[1],"1s¹","The lightest and most abundant element in the universe. A colorless, odorless gas that forms water when combined with oxygen.",0.00008988,-259.16,-252.87,"Henry Cavendish",1766,"Rocket fuel, ammonia production, petroleum refining, fuel cells, hydrogenation of fats"],
[2,"He","Helium",4.0026,"noble-gas",1,18,"Gas",[2],"1s²","The second lightest element, an inert noble gas. Used in cryogenics and as a lifting gas in balloons.",0.0001785,-272.2,-268.93,"Pierre Janssen",1868,"Cryogenics, MRI machines, balloons, leak detection, welding shield gas"],
[3,"Li","Lithium",6.941,"alkali-metal",2,1,"Solid",[2,1],"[He] 2s¹","The lightest metal and least dense solid element. Highly reactive and used extensively in rechargeable batteries.",0.534,180.54,1342,"Johan August Arfwedson",1817,"Rechargeable batteries, ceramics, glass, lubricants, mood-stabilizing medication"],
[4,"Be","Beryllium",9.0122,"alkaline-earth",2,2,"Solid",[2,2],"[He] 2s²","A rare, toxic alkaline earth metal. Lightweight and strong, used in aerospace and X-ray equipment.",1.85,1287,2469,"Louis Nicolas Vauquelin",1798,"Aerospace alloys, X-ray windows, nuclear reactors, gyroscopes, springs"],
[5,"B","Boron",10.81,"metalloid",2,13,"Solid",[2,3],"[He] 2s² 2p¹","A metalloid essential for plant growth. Used in glass, ceramics, and high-strength materials.",2.34,2076,3927,"Joseph Louis Gay-Lussac",1808,"Borosilicate glass, detergents, insecticides, semiconductors, armor plating"],
[6,"C","Carbon",12.011,"nonmetal",2,14,"Solid",[2,4],"[He] 2s² 2p²","The basis of all known life. Forms more compounds than any other element, including diamond and graphite.",2.267,3550,4027,"Ancient","Ancient","Fuels, plastics, steel making, carbon fiber, pharmaceuticals, diamonds"],
[7,"N","Nitrogen",14.007,"nonmetal",2,15,"Gas",[2,5],"[He] 2s² 2p³","Makes up 78% of Earth's atmosphere. Essential for amino acids and DNA in all living organisms.",0.0012506,-210.0,-195.79,"Daniel Rutherford",1772,"Fertilizers, explosives, food preservation, cryogenics, electronics manufacturing"],
[8,"O","Oxygen",15.999,"nonmetal",2,16,"Gas",[2,6],"[He] 2s² 2p⁴","The third most abundant element in the universe. Essential for respiration and combustion.",0.001429,-218.79,-182.96,"Joseph Priestley",1774,"Respiration, steel manufacturing, welding, medical applications, water treatment"],
[9,"F","Fluorine",18.998,"halogen",2,17,"Gas",[2,7],"[He] 2s² 2p⁵","The most electronegative and reactive of all elements. A pale yellow, highly toxic gas.",0.001696,-219.67,-188.11,"Henri Moissan",1886,"Toothpaste, Teflon, refrigerants, uranium enrichment, pharmaceuticals"],
[10,"Ne","Neon",20.18,"noble-gas",2,18,"Gas",[2,8],"[He] 2s² 2p⁶","A colorless, inert noble gas that glows reddish-orange in discharge tubes. Used in lighting and signs.",0.0008999,-248.59,-246.08,"William Ramsay",1898,"Neon signs, high-voltage indicators, cryogenics, helium-neon lasers, TV tubes"],
[11,"Na","Sodium",22.99,"alkali-metal",3,1,"Solid",[2,8,1],"[Ne] 3s¹","A soft, silvery-white, highly reactive metal. Essential for nerve function and found in table salt.",0.971,97.794,882.94,"Humphry Davy",1807,"Table salt, street lighting, heat transfer, soap making, food preservation"],
[12,"Mg","Magnesium",24.305,"alkaline-earth",3,2,"Solid",[2,8,2],"[Ne] 3s²","A lightweight, strong metal that burns with a brilliant white flame. Essential for photosynthesis.",1.738,650,1091,"Joseph Black",1755,"Alloys, fireworks, flares, antacids, electronics casings, automotive parts"],
[13,"Al","Aluminium",26.982,"post-transition",3,13,"Solid",[2,8,3],"[Ne] 3s² 3p¹","The most abundant metal in Earth's crust. Lightweight, corrosion-resistant, and highly recyclable.",2.698,660.32,2519,"Hans Christian Ørsted",1825,"Aircraft, beverage cans, foil, power lines, construction, electronics"],
[14,"Si","Silicon",28.086,"metalloid",3,14,"Solid",[2,8,4],"[Ne] 3s² 3p²","The second most abundant element in Earth's crust. The foundation of modern electronics.",2.3296,1414,3265,"Jöns Jacob Berzelius",1824,"Computer chips, solar cells, glass, silicone, concrete, ceramics"],
[15,"P","Phosphorus",30.974,"nonmetal",3,15,"Solid",[2,8,5],"[Ne] 3s² 3p³","Essential element for life, found in DNA and ATP. White phosphorus glows in the dark and is highly toxic.",1.82,44.15,280.5,"Hennig Brand",1669,"Fertilizers, detergents, matches, steel production, food additives"],
[16,"S","Sulfur",32.06,"nonmetal",3,16,"Solid",[2,8,6],"[Ne] 3s² 3p⁴","A bright yellow, brittle nonmetal known since antiquity. Essential for proteins and used in many industries.",2.067,115.21,444.6,"Ancient","Ancient","Sulfuric acid, fertilizers, vulcanizing rubber, medicines, fungicides"],
[17,"Cl","Chlorine",35.45,"halogen",3,17,"Gas",[2,8,7],"[Ne] 3s² 3p⁵","A yellow-green, pungent gas essential for water purification. Combined with sodium, it forms table salt.",0.003214,-101.5,-34.04,"Carl Wilhelm Scheele",1774,"Water purification, PVC, bleach, disinfectants, hydrochloric acid production"],
[18,"Ar","Argon",39.948,"noble-gas",3,18,"Gas",[2,8,8],"[Ne] 3s² 3p⁶","The third most abundant gas in Earth's atmosphere. A completely inert noble gas.",0.0017837,-189.34,-185.85,"Lord Rayleigh",1894,"Welding shield gas, light bulbs, insulated windows, electronics manufacturing"],
[19,"K","Potassium",39.098,"alkali-metal",4,1,"Solid",[2,8,8,1],"[Ar] 4s¹","A soft, silvery-white metal that reacts violently with water. Essential for cellular function.",0.862,63.5,759,"Humphry Davy",1807,"Fertilizers, soap, glass, gunpowder, food preservation, water softeners"],
[20,"Ca","Calcium",40.078,"alkaline-earth",4,2,"Solid",[2,8,8,2],"[Ar] 4s²","The fifth most abundant element in Earth's crust. Critical for bones, teeth, and cellular processes.",1.55,842,1484,"Humphry Davy",1808,"Cement, steel purification, cheese making, supplements, plaster, alloys"],
[21,"Sc","Scandium",44.956,"transition-metal",4,3,"Solid",[2,8,9,2],"[Ar] 3d¹ 4s²","A rare, silvery transition metal. Strengthens aluminium alloys for aerospace applications.",2.989,1541,2836,"Lars Fredrik Nilson",1879,"Aerospace alloys, sports equipment, high-intensity lighting, fuel cells"],
[22,"Ti","Titanium",47.867,"transition-metal",4,4,"Solid",[2,8,10,2],"[Ar] 3d² 4s²","A strong, lightweight, corrosion-resistant metal. Named after the Titans of Greek mythology.",4.54,1668,3287,"William Gregor",1791,"Aerospace, medical implants, jewelry, pigments, sporting goods, armor"],
[23,"V","Vanadium",50.942,"transition-metal",4,5,"Solid",[2,8,11,2],"[Ar] 3d³ 4s²","A hard, silvery-gray metal that increases the strength of steel. Named after Norse goddess Vanadis.",6.11,1910,3407,"Andrés Manuel del Río",1801,"Steel alloys, jet engines, nuclear reactors, redox batteries, catalysts"],
[24,"Cr","Chromium",51.996,"transition-metal",4,6,"Solid",[2,8,13,1],"[Ar] 3d⁵ 4s¹","A hard, lustrous metal known for its mirror-like finish. Essential in stainless steel production.",7.15,1907,2671,"Louis Nicolas Vauquelin",1797,"Stainless steel, chrome plating, pigments, leather tanning, catalysts"],
[25,"Mn","Manganese",54.938,"transition-metal",4,7,"Solid",[2,8,13,2],"[Ar] 3d⁵ 4s²","An essential trace element for all living organisms. Critical in steel production and battery technology.",7.44,1246,2061,"Johann Gottlieb Gahn",1774,"Steel production, batteries, glass decolorizer, fertilizers, water purification"],
[26,"Fe","Iron",55.845,"transition-metal",4,8,"Solid",[2,8,14,2],"[Ar] 3d⁶ 4s²","The most used metal on Earth and the most abundant element by mass in our planet. Essential for blood.",7.874,1538,2862,"Ancient","Ancient","Steel, construction, vehicles, machinery, magnets, cookware"],
[27,"Co","Cobalt",58.933,"transition-metal",4,9,"Solid",[2,8,15,2],"[Ar] 3d⁷ 4s²","A hard, lustrous metal used for blue pigments since antiquity. Critical for rechargeable batteries.",8.86,1495,2927,"Georg Brandt",1735,"Batteries, superalloys, magnets, blue pigments, catalysts, radiotherapy"],
[28,"Ni","Nickel",58.693,"transition-metal",4,10,"Solid",[2,8,16,2],"[Ar] 3d⁸ 4s²","A silvery-white metal notable for its corrosion resistance. Widely used in coins and stainless steel.",8.912,1455,2913,"Axel Fredrik Cronstedt",1751,"Stainless steel, coins, batteries, electroplating, magnets, catalysts"],
[29,"Cu","Copper",63.546,"transition-metal",4,11,"Solid",[2,8,18,1],"[Ar] 3d¹⁰ 4s¹","One of the first metals used by humans, known for excellent electrical conductivity. Essential trace element.",8.96,1084.62,2562,"Ancient","Ancient","Electrical wiring, plumbing, electronics, coins, alloys, antimicrobial surfaces"],
[30,"Zn","Zinc",65.38,"transition-metal",4,12,"Solid",[2,8,18,2],"[Ar] 3d¹⁰ 4s²","An essential trace element for all living organisms. Used to galvanize steel against corrosion.",7.134,419.53,907,"Andreas Marggraf",1746,"Galvanizing steel, batteries, alloys (brass), sunscreen, supplements, die casting"],
[31,"Ga","Gallium",69.723,"post-transition",4,13,"Solid",[2,8,18,3],"[Ar] 3d¹⁰ 4s² 4p¹","A soft metal that melts just above room temperature. Used in semiconductors and LEDs.",5.907,29.76,2204,"Paul Emile Lecoq de Boisbaudran",1875,"Semiconductors, LEDs, solar panels, thermometers, pharmaceuticals"],
[32,"Ge","Germanium",72.63,"metalloid",4,14,"Solid",[2,8,18,4],"[Ar] 3d¹⁰ 4s² 4p²","A lustrous metalloid used in fiber optics and infrared optics. Important in early transistor technology.",5.323,938.25,2833,"Clemens Winkler",1886,"Fiber optics, infrared optics, electronics, solar cells, polymerization catalysts"],
[33,"As","Arsenic",74.922,"metalloid",4,15,"Solid",[2,8,18,5],"[Ar] 3d¹⁰ 4s² 4p³","A notorious metalloid known for its toxicity and historical use as a poison. Found in many minerals.",5.776,816.9,614,"Albertus Magnus",1250,"Semiconductors, wood preservatives, pesticides, alloys, glass making"],
[34,"Se","Selenium",78.971,"nonmetal",4,16,"Solid",[2,8,18,6],"[Ar] 3d¹⁰ 4s² 4p⁴","An essential trace element with photoconductive properties. Named after Selene, the Greek moon goddess.",4.809,221,685,"Jöns Jacob Berzelius",1817,"Electronics, glass making, solar cells, supplements, rubber vulcanization"],
[35,"Br","Bromine",79.904,"halogen",4,17,"Liquid",[2,8,18,7],"[Ar] 3d¹⁰ 4s² 4p⁵","One of only two elements liquid at room temperature. A red-brown, pungent, toxic liquid.",3.122,-7.2,58.8,"Antoine Jérôme Balard",1826,"Flame retardants, pesticides, pharmaceuticals, photography, water purification"],
[36,"Kr","Krypton",83.798,"noble-gas",4,18,"Gas",[2,8,18,8],"[Ar] 3d¹⁰ 4s² 4p⁶","A noble gas that produces brilliant white light in discharge tubes. Named from Greek 'kryptos' (hidden).",0.003733,-157.36,-153.22,"William Ramsay",1898,"Fluorescent lighting, flash photography, insulated windows, MRI, lasers"],
[37,"Rb","Rubidium",85.468,"alkali-metal",5,1,"Solid",[2,8,18,8,1],"[Kr] 5s¹","A soft, silvery-white metal that ignites spontaneously in air. Used in atomic clocks.",1.532,39.3,688,"Robert Bunsen",1861,"Atomic clocks, GPS systems, fireworks, photocells, medical imaging"],
[38,"Sr","Strontium",87.62,"alkaline-earth",5,2,"Solid",[2,8,18,8,2],"[Kr] 5s²","An alkaline earth metal that produces a brilliant red flame. Used in fireworks and flares.",2.64,777,1377,"Adair Crawford",1790,"Fireworks, flares, ferrite magnets, toothpaste, glass for CRT monitors"],
[39,"Y","Yttrium",88.906,"transition-metal",5,3,"Solid",[2,8,18,9,2],"[Kr] 4d¹ 5s²","A silvery transition metal used in LEDs and superconductors. Named after the village of Ytterby, Sweden.",4.469,1526,3345,"Johan Gadolin",1794,"LEDs, laser crystals, superconductors, camera lenses, cancer treatment"],
[40,"Zr","Zirconium",91.224,"transition-metal",5,4,"Solid",[2,8,18,10,2],"[Kr] 4d² 5s²","A strong, corrosion-resistant metal used in nuclear reactors. Cubic zirconia is a synthetic gemstone.",6.506,1855,4409,"Martin Heinrich Klaproth",1789,"Nuclear fuel cladding, ceramic knives, dental implants, industrial furnaces"],
[41,"Nb","Niobium",92.906,"transition-metal",5,5,"Solid",[2,8,18,12,1],"[Kr] 4d⁴ 5s¹","A soft, ductile transition metal used in superconducting magnets. Originally called columbium.",8.57,2477,4744,"Charles Hatchett",1801,"Superconducting magnets, jet engines, surgical implants, pipeline construction"],
[42,"Mo","Molybdenum",95.95,"transition-metal",5,6,"Solid",[2,8,18,13,1],"[Kr] 4d⁵ 5s¹","A high-melting-point metal essential for nitrogen fixation in biology. Strengthens steel alloys.",10.22,2623,4639,"Carl Wilhelm Scheele",1778,"Steel alloys, catalysts, aircraft parts, missile components, lubricants"],
[43,"Tc","Technetium",98,"transition-metal",5,7,"Solid",[2,8,18,13,2],"[Kr] 4d⁵ 5s²","The first artificially produced element. All isotopes are radioactive. Used in medical imaging.",11.5,2157,4265,"Carlo Perrier",1937,"Medical diagnostic imaging, radioactive tracers, calibration of equipment"],
[44,"Ru","Ruthenium",101.07,"transition-metal",5,8,"Solid",[2,8,18,15,1],"[Kr] 4d⁷ 5s¹","A rare, hard transition metal in the platinum group. Used as a catalyst and in electronics.",12.37,2334,4150,"Karl Ernst Claus",1844,"Electronics, catalysts, solar cells, thick film resistors, fountain pen nibs"],
[45,"Rh","Rhodium",102.91,"transition-metal",5,9,"Solid",[2,8,18,16,1],"[Kr] 4d⁸ 5s¹","One of the rarest and most valuable precious metals. Primary use is in catalytic converters.",12.41,1964,3695,"William Hyde Wollaston",1803,"Catalytic converters, jewelry plating, electrical contacts, laboratory crucibles"],
[46,"Pd","Palladium",106.42,"transition-metal",5,10,"Solid",[2,8,18,18,0],"[Kr] 4d¹⁰","A platinum group metal with remarkable catalytic properties. Can absorb 900 times its own volume of hydrogen.",12.02,1554.9,2963,"William Hyde Wollaston",1803,"Catalytic converters, electronics, dentistry, hydrogen purification, jewelry"],
[47,"Ag","Silver",107.87,"transition-metal",5,11,"Solid",[2,8,18,18,1],"[Kr] 4d¹⁰ 5s¹","Has the highest electrical and thermal conductivity of all metals. Used since antiquity for currency and jewelry.",10.501,961.78,2162,"Ancient","Ancient","Jewelry, photography, electronics, mirrors, antibacterial applications, currency"],
[48,"Cd","Cadmium",112.41,"transition-metal",5,12,"Solid",[2,8,18,18,2],"[Kr] 4d¹⁰ 5s²","A soft, toxic metal primarily used in rechargeable batteries. Being phased out due to environmental concerns.",8.69,321.07,767,"Friedrich Stromeyer",1817,"NiCd batteries, pigments, coatings, nuclear reactors, solar cells"],
[49,"In","Indium",114.82,"post-transition",5,13,"Solid",[2,8,18,18,3],"[Kr] 4d¹⁰ 5s² 5p¹","A very soft metal that makes a squealing sound when bent. Critical for touchscreen displays.",7.31,156.6,2072,"Ferdinand Reich",1863,"Touchscreen displays (ITO), solders, semiconductors, photovoltaics, bearing alloys"],
[50,"Sn","Tin",118.71,"post-transition",5,14,"Solid",[2,8,18,18,4],"[Kr] 4d¹⁰ 5s² 5p²","Known since antiquity, tin is used in solder and tin plating. The 'tin cry' is its characteristic sound when bent.",7.287,231.93,2602,"Ancient","Ancient","Solder, tin cans, bronze alloys, window glass (float glass), electronics"],
[51,"Sb","Antimony",121.76,"metalloid",5,15,"Solid",[2,8,18,18,5],"[Kr] 4d¹⁰ 5s² 5p³","A lustrous metalloid known since antiquity. Used in flame retardants and lead-acid batteries.",6.685,630.63,1587,"Ancient","Ancient","Flame retardants, lead-acid batteries, semiconductors, pigments, ceramics"],
[52,"Te","Tellurium",127.6,"metalloid",5,16,"Solid",[2,8,18,18,6],"[Kr] 4d¹⁰ 5s² 5p⁴","A rare metalloid with semiconductor properties. Named after 'tellus' (Earth) in Latin.",6.232,449.51,988,"Franz-Joseph Müller von Reichenstein",1782,"Solar panels (CdTe), thermoelectric devices, rubber vulcanization, electronics"],
[53,"I","Iodine",126.9,"halogen",5,17,"Solid",[2,8,18,18,7],"[Kr] 4d¹⁰ 5s² 5p⁵","A lustrous purple-black metalloid essential for thyroid function. Sublimes to a violet gas.",4.93,113.7,184.3,"Bernard Courtois",1811,"Medicine, disinfectants, photography, nutrition, LCD polarizing filters"],
[54,"Xe","Xenon",131.29,"noble-gas",5,18,"Gas",[2,8,18,18,8],"[Kr] 4d¹⁰ 5s² 5p⁶","A heavy noble gas used in ion propulsion and high-intensity lighting. Can form compounds unlike lighter noble gases.",0.005887,-111.75,-108.13,"William Ramsay",1898,"Ion propulsion, flash lamps, anesthesia, headlights, dark matter detection"],
[55,"Cs","Caesium",132.91,"alkali-metal",6,1,"Solid",[2,8,18,18,8,1],"[Xe] 6s¹","The most electropositive naturally occurring element. Defines the second via atomic clocks.",1.873,28.44,671,"Robert Bunsen",1860,"Atomic clocks, drilling fluids, photoelectric cells, catalyst promoters"],
[56,"Ba","Barium",137.33,"alkaline-earth",6,2,"Solid",[2,8,18,18,8,2],"[Xe] 6s²","A soft, silvery alkaline earth metal. Barium sulfate is used in medical X-ray imaging.",3.594,727,1845,"Carl Wilhelm Scheele",1772,"X-ray imaging, fireworks (green), drilling fluids, glass making, rat poison"],
[57,"La","Lanthanum",138.91,"lanthanide",6,3,"Solid",[2,8,18,18,9,2],"[Xe] 5d¹ 6s²","The first element in the lanthanide series. Used in camera and telescope lenses.",6.145,920,3464,"Carl Gustaf Mosander",1839,"Camera lenses, catalytic converters, battery electrodes, lighting, flints"],
[58,"Ce","Cerium",140.12,"lanthanide",6,null,"Solid",[2,8,18,19,9,2],"[Xe] 4f¹ 5d¹ 6s²","The most abundant rare earth element. Self-cleaning ovens use cerium oxide coatings.",6.77,799,3443,"Jöns Jacob Berzelius",1803,"Catalytic converters, glass polishing, self-cleaning ovens, lighter flints"],
[59,"Pr","Praseodymium",140.91,"lanthanide",6,null,"Solid",[2,8,18,21,8,2],"[Xe] 4f³ 6s²","Creates a distinctive yellow-green color in glass. Name means 'green twin' in Greek.",6.773,931,3520,"Carl Auer von Welsbach",1885,"Magnets, lasers, glass coloring, aircraft engines, arc lighting"],
[60,"Nd","Neodymium",144.24,"lanthanide",6,null,"Solid",[2,8,18,22,8,2],"[Xe] 4f⁴ 6s²","Creates the strongest permanent magnets known. Essential for modern technology and green energy.",7.007,1016,3074,"Carl Auer von Welsbach",1885,"Powerful magnets, lasers, glass coloring, wind turbines, electric vehicles"],
[61,"Pm","Promethium",145,"lanthanide",6,null,"Solid",[2,8,18,23,8,2],"[Xe] 4f⁵ 6s²","The only radioactive rare earth element with no stable isotopes. Named after the Titan Prometheus.",7.26,1042,3000,"Charles D. Coryell",1945,"Nuclear batteries, luminous paint, thickness measurement, research"],
[62,"Sm","Samarium",150.36,"lanthanide",6,null,"Solid",[2,8,18,24,8,2],"[Xe] 4f⁶ 6s²","Used in powerful magnets and nuclear reactor control rods. Named after the mineral samarskite.",7.52,1072,1794,"Paul Emile Lecoq de Boisbaudran",1879,"Permanent magnets, cancer treatment, nuclear reactors, glass, catalysts"],
[63,"Eu","Europium",151.96,"lanthanide",6,null,"Solid",[2,8,18,25,8,2],"[Xe] 4f⁷ 6s²","The most reactive rare earth element. Creates red phosphors for displays and is used in euro banknote security.",5.243,822,1527,"Eugène-Anatole Demarçay",1901,"Display phosphors, fluorescent lighting, laser materials, banknote security"],
[64,"Gd","Gadolinium",157.25,"lanthanide",6,null,"Solid",[2,8,18,25,9,2],"[Xe] 4f⁷ 5d¹ 6s²","Has unusual magnetic properties and is used as an MRI contrast agent. Named after Johan Gadolin.",7.895,1313,3273,"Jean Charles Galissard de Marignac",1880,"MRI contrast agent, nuclear reactors, magnets, electronics, neutron detection"],
[65,"Tb","Terbium",158.93,"lanthanide",6,null,"Solid",[2,8,18,27,8,2],"[Xe] 4f⁹ 6s²","A silvery rare earth used in green phosphors for displays. Named after Ytterby, Sweden.",8.229,1356,3230,"Carl Gustaf Mosander",1843,"Green phosphors, solid-state devices, fuel cells, sonar systems, fluorescent lamps"],
[66,"Dy","Dysprosium",162.5,"lanthanide",6,null,"Solid",[2,8,18,28,8,2],"[Xe] 4f¹⁰ 6s²","Name means 'hard to get' in Greek. Critical for high-power permanent magnets.",8.55,1412,2567,"Paul Emile Lecoq de Boisbaudran",1886,"Permanent magnets, nuclear reactors, data storage, transducers, lasers"],
[67,"Ho","Holmium",164.93,"lanthanide",6,null,"Solid",[2,8,18,29,8,2],"[Xe] 4f¹¹ 6s²","Has the highest magnetic moment of any naturally occurring element. Named after Stockholm.",8.795,1474,2700,"Marc Delafontaine",1878,"Magnets, nuclear reactors, lasers, spectrophotometry, microwave equipment"],
[68,"Er","Erbium",167.26,"lanthanide",6,null,"Solid",[2,8,18,30,8,2],"[Xe] 4f¹² 6s²","Gives pink coloring to glass and is essential for fiber optic communication amplifiers.",9.066,1529,2868,"Carl Gustaf Mosander",1843,"Fiber optic amplifiers, lasers, glass coloring, nuclear technology, metallurgy"],
[69,"Tm","Thulium",168.93,"lanthanide",6,null,"Solid",[2,8,18,31,8,2],"[Xe] 4f¹³ 6s²","The rarest naturally occurring lanthanide. Used in portable X-ray machines.",9.321,1545,1950,"Per Teodor Cleve",1879,"Portable X-ray devices, lasers, high-temperature superconductors, euro banknotes"],
[70,"Yb","Ytterbium",173.05,"lanthanide",6,null,"Solid",[2,8,18,32,8,2],"[Xe] 4f¹⁴ 6s²","A soft, malleable rare earth metal. Used in stress gauges and next-generation atomic clocks.",6.965,819,1196,"Jean Charles Galissard de Marignac",1878,"Stress gauges, metallurgy, laser source material, atomic clocks, fiber optics"],
[71,"Lu","Lutetium",174.97,"lanthanide",6,3,"Solid",[2,8,18,32,9,2],"[Xe] 4f¹⁴ 5d¹ 6s²","The last element in the lanthanide series. Named after Lutetia, the Latin name for Paris.",9.84,1663,3402,"Georges Urbain",1907,"PET scan detectors, catalysts, crystal scintillators, high-refractive-index glass"],
[72,"Hf","Hafnium",178.49,"transition-metal",6,4,"Solid",[2,8,18,32,10,2],"[Xe] 4f¹⁴ 5d² 6s²","Chemically nearly identical to zirconium. Used in nuclear reactor control rods and microprocessors.",13.31,2233,4603,"Dirk Coster",1923,"Nuclear control rods, microprocessors, high-temperature alloys, plasma cutting"],
[73,"Ta","Tantalum",180.95,"transition-metal",6,5,"Solid",[2,8,18,32,11,2],"[Xe] 4f¹⁴ 5d³ 6s²","A rare, hard, highly corrosion-resistant metal. Essential for modern electronics and surgical implants.",16.654,3017,5458,"Anders Gustaf Ekeberg",1802,"Capacitors, surgical instruments, jet engines, chemical processing, mobile phones"],
[74,"W","Tungsten",183.84,"transition-metal",6,6,"Solid",[2,8,18,32,12,2],"[Xe] 4f¹⁴ 5d⁴ 6s²","Has the highest melting point of all elements. Symbol W comes from its German name 'Wolfram'.",19.25,3422,5555,"Juan José Elhuyar",1783,"Light bulb filaments, cutting tools, military projectiles, X-ray tubes, welding"],
[75,"Re","Rhenium",186.21,"transition-metal",6,7,"Solid",[2,8,18,32,13,2],"[Xe] 4f¹⁴ 5d⁵ 6s²","One of the rarest elements in Earth's crust. Has the third highest melting point of all elements.",21.02,3186,5596,"Masataka Ogawa",1925,"Jet engine superalloys, catalysts, thermocouples, mass spectrometers, X-ray tubes"],
[76,"Os","Osmium",190.23,"transition-metal",6,8,"Solid",[2,8,18,32,14,2],"[Xe] 4f¹⁴ 5d⁶ 6s²","The densest naturally occurring element. Named from Greek 'osme' (smell) due to its toxic oxide.",22.587,3033,5012,"Smithson Tennant",1803,"Fountain pen nibs, electrical contacts, instrument pivots, fingerprint detection"],
[77,"Ir","Iridium",192.22,"transition-metal",6,9,"Solid",[2,8,18,32,15,2],"[Xe] 4f¹⁴ 5d⁷ 6s²","One of the most corrosion-resistant metals. An iridium layer marks the asteroid that ended the dinosaurs.",22.56,2466,4428,"Smithson Tennant",1803,"Spark plugs, crucibles, deep-water pipelines, electronics, cancer treatment"],
[78,"Pt","Platinum",195.08,"transition-metal",6,10,"Solid",[2,8,18,32,17,1],"[Xe] 4f¹⁴ 5d⁹ 6s¹","A precious metal more rare than gold. Resistant to corrosion and used extensively as a catalyst.",21.46,1768.3,3825,"Antonio de Ulloa",1735,"Catalytic converters, jewelry, laboratory equipment, cancer drugs, fuel cells"],
[79,"Au","Gold",196.97,"transition-metal",6,11,"Solid",[2,8,18,32,18,1],"[Xe] 4f¹⁴ 5d¹⁰ 6s¹","The most malleable and ductile metal. Prized for its beauty and resistance to corrosion since prehistory.",19.282,1064.18,2856,"Ancient","Ancient","Jewelry, electronics, currency reserves, dentistry, aerospace, medicine"],
[80,"Hg","Mercury",200.59,"transition-metal",6,12,"Liquid",[2,8,18,32,18,2],"[Xe] 4f¹⁴ 5d¹⁰ 6s²","The only metal that is liquid at room temperature. Historically used in thermometers and dental fillings.",13.5336,-38.83,356.73,"Ancient","Ancient","Thermometers (historic), fluorescent lighting, dental amalgams, gold mining"],
[81,"Tl","Thallium",204.38,"post-transition",6,13,"Solid",[2,8,18,32,18,3],"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹","A soft, extremely toxic metal once used as rat poison. Creates a green line in flame tests.",11.85,304,1473,"William Crookes",1861,"Electronics, superconductors, cardiac imaging, semiconductor materials"],
[82,"Pb","Lead",207.2,"post-transition",6,14,"Solid",[2,8,18,32,18,4],"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²","One of the earliest metals smelted by humans. Dense, soft, and toxic, with excellent radiation shielding.",11.342,327.46,1749,"Ancient","Ancient","Batteries, radiation shielding, ammunition, roofing, weights, soldering"],
[83,"Bi","Bismuth",208.98,"post-transition",6,15,"Solid",[2,8,18,32,18,5],"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³","Creates beautiful iridescent oxide crystals. The least toxic of all heavy metals.",9.807,271.3,1564,"Claude François Geoffroy",1753,"Pharmaceuticals (Pepto-Bismol), cosmetics, fire sprinklers, fishing sinkers, alloys"],
[84,"Po","Polonium",209,"post-transition",6,16,"Solid",[2,8,18,32,18,6],"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴","A rare, highly radioactive element discovered by Marie Curie. Named after her homeland Poland.",9.32,254,962,"Marie Curie",1898,"Static eliminators, heat source for space equipment, nuclear triggers, research"],
[85,"At","Astatine",210,"halogen",6,17,"Solid",[2,8,18,32,18,7],"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵","The rarest naturally occurring element on Earth. Highly radioactive with a half-life of only hours.",7,302,337,"Dale R. Corson",1940,"Targeted cancer radiotherapy research, nuclear physics experiments"],
[86,"Rn","Radon",222,"noble-gas",6,18,"Gas",[2,8,18,32,18,8],"[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶","A radioactive noble gas produced by radium decay. A leading cause of lung cancer after smoking.",0.00973,-71,-61.7,"Friedrich Ernst Dorn",1900,"Earthquake prediction research, radiotherapy, hydrological research"],
[87,"Fr","Francium",223,"alkali-metal",7,1,"Solid",[2,8,18,32,18,8,1],"[Rn] 7s¹","The most unstable naturally occurring element. Extremely rare — less than 30g exists on Earth at any time.",1.87,27,677,"Marguerite Perey",1939,"Fundamental physics research, atomic structure studies"],
[88,"Ra","Radium",226,"alkaline-earth",7,2,"Solid",[2,8,18,32,18,8,2],"[Rn] 7s²","A highly radioactive element that glows in the dark. Discovered by Marie and Pierre Curie.",5.5,696,1500,"Marie Curie",1898,"Historical: luminous paint, cancer treatment; Currently: research, radon production"],
[89,"Ac","Actinium",227,"actinide",7,3,"Solid",[2,8,18,32,18,9,2],"[Rn] 6d¹ 7s²","Glows blue in the dark due to intense radioactivity. Heads the actinide series of elements.",10.07,1050,3198,"Friedrich Oskar Giesel",1902,"Neutron source, cancer treatment research, thermoelectric power generation"],
[90,"Th","Thorium",232.04,"actinide",7,null,"Solid",[2,8,18,32,18,10,2],"[Rn] 6d² 7s²","A weakly radioactive metal being researched as a safer nuclear fuel alternative to uranium.",11.72,1750,4788,"Jöns Jacob Berzelius",1829,"Potential nuclear fuel, gas mantles, high-quality optics, welding electrodes"],
[91,"Pa","Protactinium",231.04,"actinide",7,null,"Solid",[2,8,18,32,20,9,2],"[Rn] 5f² 6d¹ 7s²","One of the rarest and most expensive naturally occurring elements. Intensely radioactive.",15.37,1572,4000,"Kasimir Fajans",1913,"Scientific research, ocean sediment dating, nuclear physics"],
[92,"U","Uranium",238.03,"actinide",7,null,"Solid",[2,8,18,32,21,9,2],"[Rn] 5f³ 6d¹ 7s²","A dense, radioactive metal that provides fuel for nuclear power. Named after the planet Uranus.",18.95,1135,4131,"Martin Heinrich Klaproth",1789,"Nuclear power, nuclear weapons, armor-piercing projectiles, counterweights, dating"],
[93,"Np","Neptunium",237,"actinide",7,null,"Solid",[2,8,18,32,22,9,2],"[Rn] 5f⁴ 6d¹ 7s²","The first transuranium element discovered. Named after Neptune, the planet beyond Uranus.",20.45,644,3902,"Edwin McMillan",1940,"Nuclear weapons, neutron detection, research, spacecraft power sources"],
[94,"Pu","Plutonium",244,"actinide",7,null,"Solid",[2,8,18,32,24,8,2],"[Rn] 5f⁶ 7s²","An extremely dangerous radioactive element used in nuclear weapons and space exploration.",19.84,640,3228,"Glenn T. Seaborg",1940,"Nuclear weapons, nuclear reactors, spacecraft power (RTGs), research"],
[95,"Am","Americium",243,"actinide",7,null,"Solid",[2,8,18,32,25,8,2],"[Rn] 5f⁷ 7s²","A synthetic radioactive metal. Found in nearly every home as the ionization source in smoke detectors.",13.69,1176,2011,"Glenn T. Seaborg",1944,"Smoke detectors, neutron sources, industrial gauges, space batteries"],
[96,"Cm","Curium",247,"actinide",7,null,"Solid",[2,8,18,32,25,9,2],"[Rn] 5f⁷ 6d¹ 7s²","Named after Marie and Pierre Curie. So radioactive it glows red in the dark.",13.51,1345,3110,"Glenn T. Seaborg",1944,"Mars rovers (alpha particle X-ray spectrometer), pacemaker power, research"],
[97,"Bk","Berkelium",247,"actinide",7,null,"Solid",[2,8,18,32,27,8,2],"[Rn] 5f⁹ 7s²","Named after Berkeley, California. Extremely rare and produced only in microgram quantities.",14.79,986,2627,"Stanley G. Thompson",1949,"Scientific research, production of heavier elements"],
[98,"Cf","Californium",251,"actinide",7,null,"Solid",[2,8,18,32,28,8,2],"[Rn] 5f¹⁰ 7s²","One of the most expensive materials on Earth (~$27M per gram). A powerful neutron source.",15.1,900,1472,"Stanley G. Thompson",1950,"Neutron source, nuclear reactor startup, metal detection, cancer treatment"],
[99,"Es","Einsteinium",252,"actinide",7,null,"Solid",[2,8,18,32,29,8,2],"[Rn] 5f¹¹ 7s²","Discovered in the fallout of the first hydrogen bomb test. Named after Albert Einstein.",8.84,860,996,"Albert Ghiorso",1952,"Fundamental physics research, production of heavier elements"],
[100,"Fm","Fermium",257,"actinide",7,null,"Solid",[2,8,18,32,30,8,2],"[Rn] 5f¹² 7s²","Also discovered in hydrogen bomb fallout. Named after Enrico Fermi. Cannot be produced in bulk.",9.7,1527,null,"Albert Ghiorso",1952,"Fundamental scientific research only"],
[101,"Md","Mendelevium",258,"actinide",7,null,"Solid",[2,8,18,32,31,8,2],"[Rn] 5f¹³ 7s²","Named after Dmitri Mendeleev, creator of the periodic table. Only 17 atoms were first produced.",10.3,827,null,"Albert Ghiorso",1955,"Fundamental scientific research only"],
[102,"No","Nobelium",259,"actinide",7,null,"Solid",[2,8,18,32,32,8,2],"[Rn] 5f¹⁴ 7s²","Named after Alfred Nobel. Its discovery was controversial with multiple competing claims.",9.9,827,null,"Joint Institute for Nuclear Research",1966,"Fundamental scientific research only"],
[103,"Lr","Lawrencium",266,"actinide",7,3,"Solid",[2,8,18,32,32,8,3],"[Rn] 5f¹⁴ 7s² 7p¹","The last element in the actinide series. Named after Ernest Lawrence, inventor of the cyclotron.",15.6,1627,null,"Albert Ghiorso",1961,"Fundamental scientific research only"],
[104,"Rf","Rutherfordium",267,"transition-metal",7,4,"Solid",[2,8,18,32,32,10,2],"[Rn] 5f¹⁴ 6d² 7s²","Named after Ernest Rutherford. Extremely radioactive with a half-life of about one hour.",23.2,2100,5500,"Joint Institute for Nuclear Research",1964,"Fundamental scientific research only"],
[105,"Db","Dubnium",268,"transition-metal",7,5,"Solid",[2,8,18,32,32,11,2],"[Rn] 5f¹⁴ 6d³ 7s²","Named after Dubna, Russia. Subject of a naming controversy during the Cold War.",29.3,null,null,"Joint Institute for Nuclear Research",1968,"Fundamental scientific research only"],
[106,"Sg","Seaborgium",269,"transition-metal",7,6,"Solid",[2,8,18,32,32,12,2],"[Rn] 5f¹⁴ 6d⁴ 7s²","Named after Glenn T. Seaborg, the only person for whom an element was named while still alive.",35,null,null,"Albert Ghiorso",1974,"Fundamental scientific research only"],
[107,"Bh","Bohrium",270,"transition-metal",7,7,"Solid",[2,8,18,32,32,13,2],"[Rn] 5f¹⁴ 6d⁵ 7s²","Named after Niels Bohr. Only a few atoms have ever been produced.",37.1,null,null,"Peter Armbruster",1981,"Fundamental scientific research only"],
[108,"Hs","Hassium",277,"transition-metal",7,8,"Solid",[2,8,18,32,32,14,2],"[Rn] 5f¹⁴ 6d⁶ 7s²","Named after the German state of Hesse. Predicted to be the densest element under standard conditions.",40.7,null,null,"Peter Armbruster",1984,"Fundamental scientific research only"],
[109,"Mt","Meitnerium",278,"unknown",7,9,"Solid",[2,8,18,32,32,15,2],"[Rn] 5f¹⁴ 6d⁷ 7s²","Named after Lise Meitner, who co-discovered nuclear fission. Extremely short-lived.",37.4,null,null,"Peter Armbruster",1982,"Fundamental scientific research only"],
[110,"Ds","Darmstadtium",281,"unknown",7,10,"Solid",[2,8,18,32,32,17,1],"[Rn] 5f¹⁴ 6d⁸ 7s²","Named after Darmstadt, Germany. Has a half-life of only about 10 seconds.",34.8,null,null,"Peter Armbruster",1994,"Fundamental scientific research only"],
[111,"Rg","Roentgenium",282,"unknown",7,11,"Solid",[2,8,18,32,32,18,1],"[Rn] 5f¹⁴ 6d⁹ 7s²","Named after Wilhelm Röntgen, discoverer of X-rays. Predicted to be a noble metal like gold.",28.7,null,null,"Peter Armbruster",1994,"Fundamental scientific research only"],
[112,"Cn","Copernicium",285,"unknown",7,12,"Liquid",[2,8,18,32,32,18,2],"[Rn] 5f¹⁴ 6d¹⁰ 7s²","Named after Nicolaus Copernicus. Predicted to be a volatile liquid metal, similar to mercury.",23.7,null,null,"Sigurd Hofmann",1996,"Fundamental scientific research only"],
[113,"Nh","Nihonium",286,"unknown",7,13,"Solid",[2,8,18,32,32,18,3],"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹","Named after Japan (Nihon). The first element discovered in Asia.",16,null,null,"Kosuke Morita",2004,"Fundamental scientific research only"],
[114,"Fl","Flerovium",289,"unknown",7,14,"Solid",[2,8,18,32,32,18,4],"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²","Named after the Flerov Laboratory. May be unusually volatile for such a heavy element.",14,null,null,"Joint Institute for Nuclear Research",1999,"Fundamental scientific research only"],
[115,"Mc","Moscovium",290,"unknown",7,15,"Solid",[2,8,18,32,32,18,5],"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³","Named after Moscow. Extremely unstable with a half-life of less than one second.",13.5,null,null,"Joint Institute for Nuclear Research",2003,"Fundamental scientific research only"],
[116,"Lv","Livermorium",293,"unknown",7,16,"Solid",[2,8,18,32,32,18,6],"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴","Named after the Lawrence Livermore National Laboratory. Highly radioactive and short-lived.",12.9,null,null,"Joint Institute for Nuclear Research",2000,"Fundamental scientific research only"],
[117,"Ts","Tennessine",294,"unknown",7,17,"Solid",[2,8,18,32,32,18,7],"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵","Named after the state of Tennessee. One of the newest elements officially recognized.",7.1,null,null,"Joint Institute for Nuclear Research",2010,"Fundamental scientific research only"],
[118,"Og","Oganesson",294,"unknown",7,18,"Gas",[2,8,18,32,32,18,8],"[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶","Named after Yuri Oganessian. The heaviest known element, predicted to be a noble gas.",5.0,null,null,"Joint Institute for Nuclear Research",2006,"Fundamental scientific research only"],
];

const elements = raw.map(([number, symbol, name, mass, category, period, group, phase, electronsPerShell, electronConfig, description, density, melting, boiling, discoverer, year, uses]) => ({
  number,
  symbol,
  name,
  slug: name.toLowerCase(),
  mass: typeof mass === 'number' ? mass : mass,
  category,
  period,
  group,
  phase,
  electronsPerShell,
  electronConfig,
  description,
  density,
  meltingPoint: melting,
  boilingPoint: boiling,
  discoverer: String(discoverer),
  yearDiscovered: year === "Ancient" ? "Ancient" : year,
  uses: uses.split(', '),
}));

const output = `// Auto-generated element data
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

export const CATEGORIES: Record<ElementCategory, { label: string; color: string }> = ${JSON.stringify(categories, null, 2)} as const;

export const elements: ElementData[] = ${JSON.stringify(elements, null, 2)};

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
`;

writeFileSync('./src/data/elements.ts', output, 'utf-8');
console.log('Generated elements.ts with', elements.length, 'elements');
