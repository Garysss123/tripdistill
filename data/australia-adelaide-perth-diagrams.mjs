const originalDiagram = ({ filename, label, alt, caption }) => ({
  src: `/assets/images/${filename}`,
  alt,
  caption,
  source: `https://tripdistill.com/assets/images/${filename}`,
  label,
  creator: 'TripDistill Editorial Team',
  license: null,
  rightsStatus: 'Project original; no separate reuse license declared',
  rightsStatusUrl: 'https://tripdistill.com/terms-of-use/',
  attributionTerms: 'No reuse license is declared; a source and creator credit does not grant reuse permission.',
  commercialReuseEligibility: 'unknown',
  assetType: 'original-planning-diagram',
  width: 1200,
  height: 700,
  sectionTitle: 'Make one connection and one return decision.',
  sectionIntro: 'This symbol-only schematic compares planning choices; it is not a road, track or timetable map. Confirm today’s access and return before you travel.',
  inventoryStatus: 'used',
  editNote: 'Planning schematic only; it is not a geographic map and shows no scale, bearing, distance, exact route or timetable.'
});

export const adelaideHillsDiagram = originalDiagram({
  filename: 'australia-adelaide-hills-route-choice.svg',
  label: 'TripDistill original Adelaide Hills route-choice schematic',
  alt: 'Planning diagram, not to scale: a city connection branches to a Hahndorf town visit or a Cleland and garden visit; each choice returns on its confirmed ride.',
  caption: 'Use this as a choice diagram: the branches are separate access plans, and every line requires a confirmed return. It does not map the road or bus network.',
});
adelaideHillsDiagram.localSha1 = '2a0cc23d124abf42161b4a8cdca8bf30e6503fce';

export const kangarooIslandDiagram = originalDiagram({
  filename: 'australia-kangaroo-island-regional-days.svg',
  label: 'TripDistill original Kangaroo Island ferry and regional-days schematic',
  alt: 'Planning diagram, not to scale: Cape Jervis ferry to Penneshaw, separate east, south and west island days, reposition near Penneshaw, then return by ferry.',
  caption: 'The island branches represent separate day choices, not a road map. Check ferry operation and park access before assigning a region to a date.',
});
kangarooIslandDiagram.localSha1 = 'a79c937470360a8144977935661b29ce52301a81';

export const kingsParkDiagram = originalDiagram({
  filename: 'australia-kings-park-entry-choice.svg',
  label: 'TripDistill original Kings Park entry and loop schematic',
  alt: 'Planning diagram, not to scale: Perth transit or visitor parking leads to one chosen Botanic Garden or bushland path, then back to the same return node.',
  caption: 'Choose one named entrance and landscape loop. The branches show visitor choices rather than exact paths, stop locations or distances.',
});
kingsParkDiagram.localSha1 = '5a606ca608847293d3bb755a1021490a5f439c0b';

export const perthCoastDiagram = originalDiagram({
  filename: 'australia-perth-coast-transit-choice.svg',
  label: 'TripDistill original Cottesloe and Scarborough transit-choice schematic',
  alt: 'Planning diagram, not to scale: choose Cottesloe by train and a last-mile connection or Scarborough by train and Surf CAT; check the beach and return on the same path.',
  caption: 'The two beach branches are alternatives. Lines do not show geography, travel times, patrol zones or service frequency.',
});
perthCoastDiagram.localSha1 = '92b47a386655af44d9f6b1ca61647b77c17b13d9';

export const australiaAdelaidePerthDiagrams = {
  'adelaide-wine-island/adelaide-hills-hahndorf': adelaideHillsDiagram,
  'adelaide-wine-island/kangaroo-island': kangarooIslandDiagram,
  'perth-fremantle-rottnest/kings-park': kingsParkDiagram,
  'perth-fremantle-rottnest/cottesloe-scarborough': perthCoastDiagram
};
