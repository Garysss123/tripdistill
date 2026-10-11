import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(import.meta.dirname, '..');
const imageDir = path.join(root, 'assets', 'images');

const diagrams = new Map([
  ['united-kingdom-lake-district-cumbria-keswick-derwentwater-route-choice.svg', String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066" fill="none">
  <metadata>TripDistill project original; no separate reuse license declared. Planning schematic only: not a geographic map and not to scale.</metadata>
  <defs>
    <marker id="arrow" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto"><path d="M2 2 12 7 2 12" stroke="#42746A" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
    <pattern id="grain" width="34" height="34" patternUnits="userSpaceOnUse"><circle cx="3" cy="4" r="1.2" fill="#D9D3C7" opacity=".48"/><circle cx="22" cy="23" r="1" fill="#D9D3C7" opacity=".3"/></pattern>
  </defs>
  <rect width="1600" height="1066" rx="48" fill="#F2EFE5"/>
  <rect width="1600" height="1066" rx="48" fill="url(#grain)"/>
  <path d="M64 144H1536" stroke="#C8D7CF" stroke-width="3"/>
  <path d="M64 920H1536" stroke="#C8D7CF" stroke-width="3"/>
  <rect x="76" y="198" width="292" height="672" rx="38" fill="#173A42"/>
  <circle cx="222" cy="454" r="105" fill="#DCE9E1"/>
  <g stroke="#173A42" stroke-width="14" stroke-linecap="round" stroke-linejoin="round">
    <path d="M158 480v-59c0-22 17-39 39-39h50c22 0 39 17 39 39v59h-18v18h-17v-18h-58v18h-17v-18z" fill="#FFFDF8"/>
    <path d="M179 402h86v43h-86z" fill="#BBD4C8"/>
    <path d="M169 461h106M179 492h9m75 0h9"/>
  </g>
  <path d="M367 532C405 532 408 322 444 322M367 532H444M367 532C405 532 408 742 444 742" stroke="#42746A" stroke-width="7" stroke-linecap="round"/>
  <g>
    <rect x="428" y="224" width="1100" height="196" rx="30" fill="#FFFDF8" stroke="#D4DED4" stroke-width="3"/>
    <rect x="428" y="434" width="1100" height="196" rx="30" fill="#E3ECE5" stroke="#C9D9D0" stroke-width="3"/>
    <rect x="428" y="644" width="1100" height="196" rx="30" fill="#FFFDF8" stroke="#D4DED4" stroke-width="3"/>
  </g>
  <g fill="#173A42"><circle cx="500" cy="322" r="38"/><circle cx="500" cy="532" r="38"/><circle cx="500" cy="742" r="38"/></g>
  <g fill="#FFFDF8" font-family="Arial,sans-serif" font-size="34" font-weight="700" text-anchor="middle"><text x="500" y="334">1</text><text x="500" y="544">2</text><text x="500" y="754">3</text></g>
  <g stroke="#42746A" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)">
    <path d="M555 322H664M790 322H926M1050 322H1198"/>
    <path d="M555 532H674M800 532H926M1050 532H1198"/>
    <path d="M555 742H674M815 742H926M1050 742H1198"/>
  </g>
  <g stroke="#2B5B58" stroke-width="13" stroke-linecap="round" stroke-linejoin="round">
    <path d="M690 327h84l-14 26h-55l-15-26Z" fill="#BBD4C8"/><path d="M706 319h48v8h-48zM722 293h18v26h-18z" fill="#FFFDF8"/>
    <path d="M948 354c18-18 36-18 54 0m-44-30 16-28 17 28m-29 0h24"/><circle cx="974" cy="275" r="9" fill="#D7A76A"/>
    <path d="M692 549h88v-66h-88zM706 483v-20h60v20M708 516h15m24 0h15" fill="#DCE9E1"/><path d="M704 572h64"/>
    <path d="M944 552c22-14 44-14 66 0m-66 18c22-14 44-14 66 0m-66 18c22-14 44-14 66 0"/>
    <path d="M692 769v-44a44 44 0 0 1 88 0v44M692 742h88M712 742v27m48-27v27" fill="#DCE9E1"/>
    <path d="M946 779c21-8 41-8 62 0m-51-30 15-25 17 25m-31 1h31"/><path d="M1000 702l19 0 10 17-10 17-19 0-10-17z" fill="#F1D4AE"/>
  </g>
  <g>
    <circle cx="1280" cy="322" r="54" fill="#DCE9E1"/><circle cx="1280" cy="532" r="54" fill="#FFFDF8"/><circle cx="1280" cy="742" r="54" fill="#DCE9E1"/>
    <g stroke="#173A42" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"><rect x="1246" y="300" width="68" height="47" rx="8" fill="#FFFDF8"/><path d="M1255 312h49v19h-49zM1257 354h46"/><circle cx="1260" cy="350" r="5" fill="#173A42"/><circle cx="1300" cy="350" r="5" fill="#173A42"/>
      <rect x="1246" y="510" width="68" height="47" rx="8" fill="#E3ECE5"/><path d="M1255 522h49v19h-49zM1257 564h46"/><circle cx="1260" cy="560" r="5" fill="#173A42"/><circle cx="1300" cy="560" r="5" fill="#173A42"/>
      <rect x="1246" y="720" width="68" height="47" rx="8" fill="#FFFDF8"/><path d="M1255 732h49v19h-49zM1257 774h46"/><circle cx="1260" cy="770" r="5" fill="#173A42"/><circle cx="1300" cy="770" r="5" fill="#173A42"/></g>
    <path d="M1340 322h94m-18-18 18 18-18 18M1340 532h94m-18-18 18 18-18 18M1340 742h94m-18-18 18 18-18 18" stroke="#D07854" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <circle cx="222" cy="792" r="17" fill="#D07854"/><circle cx="222" cy="792" r="7" fill="#FFFDF8"/>
</svg>`],
  ['united-kingdom-lake-district-cumbria-carlisle-hadrians-wall-west-route-choice.svg', String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066" fill="none">
  <metadata>TripDistill project original; no separate reuse license declared. Planning schematic only: not a geographic map and not to scale.</metadata>
  <defs>
    <marker id="arrow" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto"><path d="M2 2 12 7 2 12" stroke="#315D69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse"><path d="M48 0H0V48" stroke="#D7DED7" stroke-width="1.5" opacity=".54"/></pattern>
  </defs>
  <rect width="1600" height="1066" rx="48" fill="#F1EFE7"/>
  <rect width="1600" height="1066" rx="48" fill="url(#grid)"/>
  <path d="M64 142H1536" stroke="#BFCFC8" stroke-width="3"/>
  <rect x="82" y="206" width="270" height="654" rx="36" fill="#24434A"/>
  <g fill="#E8EFE8" stroke="#E8EFE8" stroke-width="12" stroke-linejoin="round" stroke-linecap="round">
    <path d="M154 443h122v72H154z"/><path d="m145 443 22-38h94l24 38" fill="#D07A56"/><path d="M173 463h32v30h-32zm52 0h32v30h-32z" fill="#24434A" stroke="#24434A"/>
  </g>
  <path d="M151 550h128M166 572h98" stroke="#E8EFE8" stroke-width="9" stroke-linecap="round"/>
  <g>
    <rect x="394" y="218" width="1132" height="194" rx="28" fill="#FFFDF8" stroke="#D1D9D1" stroke-width="3"/>
    <rect x="394" y="436" width="1132" height="194" rx="28" fill="#E1EBE7" stroke="#C4D5CF" stroke-width="3"/>
    <rect x="394" y="654" width="1132" height="194" rx="28" fill="#FFFDF8" stroke="#D1D9D1" stroke-width="3"/>
  </g>
  <g fill="#D07A56"><path d="M439 314l34-34 34 34-34 34z"/><path d="M439 532l34-34 34 34-34 34z"/><path d="M439 750l34-34 34 34-34 34z"/></g>
  <g fill="#FFFDF8" font-family="Arial,sans-serif" font-size="32" font-weight="700" text-anchor="middle"><text x="473" y="325">1</text><text x="473" y="543">2</text><text x="473" y="761">3</text></g>
  <g stroke="#315D69" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)">
    <path d="M352 532C385 532 379 315 426 315M352 532H426M352 532C385 532 379 751 426 751"/>
    <path d="M520 315H650M818 315H960M1090 315H1270"/>
    <path d="M520 532H650M818 532H960M1090 532H1270"/>
    <path d="M520 751H650M818 751H960M1090 751H1270"/>
  </g>
  <g stroke="#24434A" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="596" cy="315" r="42" fill="#E4ECE6"/><path d="M574 322h44v-28h-44zM568 322h56v13h-56zM580 282h31"/><circle cx="583" cy="340" r="5" fill="#24434A"/><circle cx="609" cy="340" r="5" fill="#24434A"/>
    <path d="M963 342v-42l36-28 37 28v42z" fill="#D8E5DC"/><path d="M977 342v-26h16v26m17-33h14v14h-14"/><path d="M964 350h72"/>
    <path d="M1310 339v-47h69v47m-81 0h94M1326 292v-20h38v20" fill="#E2ECE7"/><path d="M1324 311h13m18 0h13"/>
    <circle cx="596" cy="532" r="42" fill="#E4ECE6"/><path d="M574 539h44v-28h-44zM568 539h56v13h-56zM580 499h31"/><circle cx="583" cy="557" r="5" fill="#24434A"/><circle cx="609" cy="557" r="5" fill="#24434A"/>
    <path d="M674 549h128M689 549v-45h97v45M706 504v-19h63v19M707 524h14m26 0h16" fill="#D8E5DC"/>
    <path d="M963 562v-58h74v58M955 562h90M979 526h42m-42 16h42" fill="#E7EEE7"/><path d="M979 494v-13h42v13"/>
    <circle cx="596" cy="751" r="42" fill="#E4ECE6"/><path d="M574 758h44v-28h-44zM568 758h56v13h-56zM580 718h31"/><circle cx="583" cy="776" r="5" fill="#24434A"/><circle cx="609" cy="776" r="5" fill="#24434A"/>
    <path d="M674 768h128M689 768v-45h97v45M706 723v-19h63v19M707 743h14m26 0h16" fill="#D8E5DC"/>
    <path d="M968 783v-61h68v61m-82 0h96" fill="#F0D7BF"/><path d="M984 748h14m20 0h14m-48 18h14m20 0h14"/>
  </g>
  <g stroke="#D07A56" stroke-width="7" stroke-linecap="round" stroke-linejoin="round"><path d="M1390 315h74m-20-20 20 20-20 20M1288 532h126m-20-20 20 20-20 20M1288 751h126m-20-20 20 20-20 20"/></g>
  <g fill="#F0D7BF" stroke="#D07A56" stroke-width="6"><circle cx="881" cy="532" r="18"/><circle cx="881" cy="751" r="18"/></g>
  <path d="M874 532h14m-7-7v14M874 751h14m-7-7v14" stroke="#24434A" stroke-width="4" stroke-linecap="round"/>
  <path d="M1484 252v562" stroke="#BFCFC8" stroke-width="3" stroke-dasharray="10 16"/>
</svg>`]
]);

fs.mkdirSync(imageDir, { recursive: true });
for (const [filename, svg] of diagrams) {
  fs.writeFileSync(path.join(imageDir, filename), `${svg}\n`);
}
console.log(`Generated ${diagrams.size} original United Kingdom route-choice SVG diagrams.`);
