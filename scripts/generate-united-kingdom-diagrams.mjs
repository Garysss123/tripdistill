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
</svg>`],
  ['united-kingdom-bath-bristol-somerset-wells-glastonbury-mendips-route-choice.svg', String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066" fill="none">
  <metadata>TripDistill project original; no separate reuse license declared. Planning schematic only: not a geographic map and not to scale.</metadata>
  <defs>
    <marker id="arrow" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto"><path d="M2 2 12 7 2 12" stroke="#3B6D69" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></marker>
    <pattern id="grain" width="38" height="38" patternUnits="userSpaceOnUse"><circle cx="6" cy="8" r="1.2" fill="#D9D3C7" opacity=".42"/><circle cx="28" cy="29" r="1" fill="#D9D3C7" opacity=".32"/></pattern>
  </defs>
  <rect width="1600" height="1066" rx="48" fill="#F2EFE5"/>
  <rect width="1600" height="1066" rx="48" fill="url(#grain)"/>
  <path d="M70 145H1530M70 922H1530" stroke="#C8D7CF" stroke-width="3"/>
  <rect x="78" y="224" width="266" height="618" rx="34" fill="#203D46"/>
  <circle cx="211" cy="429" r="82" fill="#E5EEE7"/>
  <g stroke="#203D46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
    <path d="M169 452h84v-58l-42-34-42 34z" fill="#FFFDF8"/><path d="M188 452v-36h17v36m16-46h15v17h-15" fill="#BBD4C8"/>
    <path d="M147 550h129M164 573h96"/>
  </g>
  <path d="M344 532C392 532 387 326 438 326M344 532H438M344 532C392 532 387 738 438 738" stroke="#3B6D69" stroke-width="7" stroke-linecap="round"/>
  <g>
    <rect x="430" y="220" width="1092" height="210" rx="30" fill="#FFFDF8" stroke="#D4DED4" stroke-width="3"/>
    <rect x="430" y="428" width="1092" height="210" rx="30" fill="#E4ECE5" stroke="#C9D9D0" stroke-width="3"/>
    <rect x="430" y="636" width="1092" height="210" rx="30" fill="#FFFDF8" stroke="#D4DED4" stroke-width="3"/>
  </g>
  <g fill="#D07854"><circle cx="484" cy="326" r="34"/><circle cx="484" cy="534" r="34"/><circle cx="484" cy="742" r="34"/></g>
  <g fill="#FFFDF8" font-family="Arial,sans-serif" font-size="30" font-weight="700" text-anchor="middle"><text x="484" y="337">1</text><text x="484" y="545">2</text><text x="484" y="753">3</text></g>
  <g stroke="#3B6D69" stroke-width="8" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#arrow)">
    <path d="M532 326H652M798 326H925M1070 326H1214"/><path d="M532 534H652M798 534H925M1070 534H1214"/><path d="M532 742H652M798 742H925M1070 742H1214"/>
  </g>
  <g stroke="#203D46" stroke-width="12" stroke-linecap="round" stroke-linejoin="round">
    <path d="M674 347v-38a38 38 0 0 1 76 0v38M674 322h76M692 322v25m40-25v25" fill="#DCE9E1"/><path d="M674 347h76"/>
    <path d="M950 352v-66h74v66M940 352h94M966 318h17m22 0h16" fill="#E7EEE7"/><path d="M964 286v-14h46v14"/>
    <path d="M1245 356v-70h66v70M1234 356h88M1260 286v-17h37v17" fill="#D8E5DC"/><path d="M1261 309h13m18 0h12"/>
    <path d="M674 555v-48l37-29 38 29v48z" fill="#DCE9E1"/><path d="M690 555v-27h18v27m21-42h13v15h-13"/><path d="M669 563h85"/>
    <path d="M955 575c20-16 40-16 60 0m-60 17c20-16 40-16 60 0m-60 17c20-16 40-16 60 0"/><path d="M984 512v-30m-18 17 18-25 18 25"/>
    <path d="M1243 564c18-16 36-16 54 0m-54 18c18-16 36-16 54 0m-54 18c18-16 36-16 54 0" fill="#E1EBE7"/>
    <path d="M674 763v-48a38 38 0 0 1 76 0v48M674 738h76M692 738v25m40-25v25" fill="#DCE9E1"/>
    <path d="M952 770c23-5 46-5 69 0m-57-30 17-25 17 25m-34 0h34"/><path d="M1016 698l15 0 9 15-9 15-15 0-9-15z" fill="#F1D4AE"/>
    <path d="M1242 771v-55a35 35 0 0 1 70 0v55M1242 742h70M1259 742v29m36-29v29" fill="#F0D7BF"/><path d="M1242 771h70"/>
  </g>
  <g>
    <circle cx="1355" cy="326" r="45" fill="#DCE9E1"/><circle cx="1355" cy="534" r="45" fill="#FFFDF8"/><circle cx="1355" cy="742" r="45" fill="#E4ECE5"/>
    <g stroke="#203D46" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><rect x="1327" y="307" width="56" height="40" rx="7" fill="#FFFDF8"/><path d="M1335 317h40v16h-40zM1336 351h38"/><circle cx="1340" cy="348" r="4" fill="#203D46"/><circle cx="1370" cy="348" r="4" fill="#203D46"/><rect x="1327" y="515" width="56" height="40" rx="7" fill="#E4ECE5"/><path d="M1335 525h40v16h-40zM1336 559h38"/><circle cx="1340" cy="556" r="4" fill="#203D46"/><circle cx="1370" cy="556" r="4" fill="#203D46"/><rect x="1327" y="723" width="56" height="40" rx="7" fill="#FFFDF8"/><path d="M1335 733h40v16h-40zM1336 767h38"/><circle cx="1340" cy="764" r="4" fill="#203D46"/><circle cx="1370" cy="764" r="4" fill="#203D46"/></g>
    <path d="M1405 326h72m-18-18 18 18-18 18M1405 534h72m-18-18 18 18-18 18M1405 742h72m-18-18 18 18-18 18" stroke="#D07854" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <path d="M1493 256v560" stroke="#C8D7CF" stroke-width="3" stroke-dasharray="10 16"/>
</svg>`],
  ['united-kingdom-scottish-highlands-aviemore-cairngorms-route-choice.svg', String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066" fill="none">
  <metadata>TripDistill project original; no separate reuse license declared. Five-language route-choice planning schematic in English, Traditional Chinese, Japanese, Korean and Thai; not a geographic map and not to scale. Supersedes the retained Cairngorms photograph in the live route after conflicting source-page and EXIF declarations were found.</metadata>
  <defs>
    <marker id="arrow" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto"><path d="M2 2 12 7 2 12" stroke="#376B68" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker>
    <pattern id="grain" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1.2" fill="#C9D3CA" opacity=".4"/><circle cx="25" cy="26" r="1" fill="#D7C9B6" opacity=".35"/></pattern>
  </defs>
  <rect width="1600" height="1066" rx="42" fill="#F1EEE5"/>
  <rect width="1600" height="1066" rx="42" fill="url(#grain)"/>
  <path d="M64 190H1536M64 1030H1536" stroke="#C6D4CC" stroke-width="3"/>
  <text x="78" y="91" fill="#193B45" font-family="Arial,sans-serif" font-size="48" font-weight="700">AVIEMORE · CAIRNGORMS ACCESS CHOICE</text>
  <text x="80" y="146" fill="#526C68" font-family="Arial,sans-serif" font-size="25">One rail base, two separately checked gateways · planning schematic, not to scale</text>
  <rect x="72" y="246" width="365" height="474" rx="30" fill="#193B45"/>
  <circle cx="255" cy="341" r="53" fill="#DDE9E1"/>
  <g stroke="#193B45" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M220 347h70v-29h-70zM227 318v-19h58v19M235 331h14m22 0h14" fill="#FFFDF8"/><path d="M215 359h80"/></g>
  <text x="255" y="433" text-anchor="middle" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="34" font-weight="700">AVIEMORE</text>
  <text x="255" y="476" text-anchor="middle" fill="#DCE8DF" font-family="Arial,sans-serif" font-size="25">rail + services</text>
  <path d="M112 505H398" stroke="#789A8E" stroke-width="2"/>
  <g fill="#FFFDF8" font-family="Arial,sans-serif" font-size="22">
    <text x="104" y="548">繁體中文｜鐵路與補給基地</text>
    <text x="104" y="590">日本語｜鉄道・補給拠点</text>
    <text x="104" y="632">한국어｜철도·편의시설 거점</text>
    <text x="104" y="674">ไทย｜ฐานรถไฟและบริการ</text>
  </g>
  <path d="M437 485C469 485 462 345 496 345M437 485C469 485 462 615 496 615" stroke="#376B68" stroke-width="8" stroke-linecap="round"/>
  <rect x="496" y="224" width="1032" height="246" rx="28" fill="#FFFDF8" stroke="#CFDAD1" stroke-width="3"/>
  <rect x="496" y="494" width="1032" height="246" rx="28" fill="#E1EBE5" stroke="#C6D8CE" stroke-width="3"/>
  <circle cx="552" cy="278" r="25" fill="#D07854"/><text x="552" y="287" text-anchor="middle" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="25" font-weight="700">A</text>
  <circle cx="552" cy="548" r="25" fill="#376B68"/><text x="552" y="557" text-anchor="middle" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="25" font-weight="700">B</text>
  <text x="598" y="286" fill="#193B45" font-family="Arial,sans-serif" font-size="31" font-weight="700">Stagecoach 30 → GLENMORE / CAIRNGORM MOUNTAIN</text>
  <text x="600" y="326" fill="#315B57" font-family="Arial,sans-serif" font-size="22">EN  Bus 30 to Glenmore / Cairngorm Mountain; check the date-specific service.</text>
  <text x="600" y="356" fill="#315B57" font-family="Arial,sans-serif" font-size="22">繁中｜搭乘 30 號巴士前往 Glenmore／Cairngorm Mountain，依日期核班。</text>
  <text x="600" y="386" fill="#315B57" font-family="Arial,sans-serif" font-size="22">日本語｜30番バスで Glenmore／Cairngorm Mountainへ。運行日を確認。</text>
  <text x="600" y="416" fill="#315B57" font-family="Arial,sans-serif" font-size="22">한국어｜30번 버스로 Glenmore／Cairngorm Mountain, 날짜별 운행 확인.</text>
  <text x="600" y="446" fill="#315B57" font-family="Arial,sans-serif" font-size="21">ไทย｜รถบัสสาย 30 ไป Glenmore／Cairngorm Mountain ตรวจวันให้บริการ</text>
  <text x="598" y="556" fill="#193B45" font-family="Arial,sans-serif" font-size="31" font-weight="700">SEPARATE TRANSFER → ROTHIEMURCHUS</text>
  <text x="600" y="584" fill="#315B57" font-family="Arial,sans-serif" font-size="22">EN  Forest and loch access is separate; confirm the transfer both ways.</text>
  <text x="600" y="614" fill="#315B57" font-family="Arial,sans-serif" font-size="22">繁中｜森林與湖泊須另行接駁；先確認來回交通。</text>
  <text x="600" y="644" fill="#315B57" font-family="Arial,sans-serif" font-size="22">日本語｜森林・湖への移動は別手配。往復交通を確認。</text>
  <text x="600" y="674" fill="#315B57" font-family="Arial,sans-serif" font-size="22">한국어｜숲·호수 구간은 별도 이동이 필요합니다. 왕복을 확인하세요.</text>
  <text x="600" y="704" fill="#315B57" font-family="Arial,sans-serif" font-size="21">ไทย｜ป่าและทะเลสาบต้องต่อรถแยก ตรวจการเดินทางไปและกลับ</text>
  <rect x="72" y="777" width="1456" height="226" rx="28" fill="#E8D7BD" stroke="#D5B895" stroke-width="3"/>
  <text x="106" y="818" fill="#193B45" font-family="Arial,sans-serif" font-size="28" font-weight="700">RETURN GATE · VERIFY BEFORE LEAVING AVIEMORE</text>
  <g fill="#294B4E" font-family="Arial,sans-serif" font-size="22">
    <text x="106" y="854">EN  Check dated bus service, mountain/path status, weather, turnaround and final return.</text>
    <text x="106" y="884">繁中｜出發前核對當日巴士、山區／步道狀態、天氣、折返點和末班返程。</text>
    <text x="106" y="914">日本語｜バス、山・歩道の状況、天気、引き返す時刻、最終便を確認。</text>
    <text x="106" y="944">한국어｜버스·산악/산책로 상태·날씨·회귀 시각·마지막 귀환편을 확인하세요.</text>
    <text x="106" y="974">ไทย｜ตรวจรถบัส เส้นทางภูเขา/เดินป่า อากาศ จุดกลับตัว และเที่ยวกลับสุดท้าย</text>
  </g>
</svg>`],
  ['united-kingdom-pembrokeshire-west-wales-st-davids-coast-route-choice.svg', String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1066" viewBox="0 0 1600 1066" fill="none">
  <metadata>TripDistill project original; no separate reuse license declared. Five-language route-choice planning schematic in English, Traditional Chinese, Japanese, Korean and Thai; not a geographic map and not to scale. Supersedes the retained St Davids Cathedral photograph in the live route after conflicting source-page and EXIF attribution declarations were found.</metadata>
  <defs>
    <marker id="arrow" markerWidth="14" markerHeight="14" refX="11" refY="7" orient="auto"><path d="M2 2 12 7 2 12" stroke="#376B68" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></marker>
    <pattern id="grain" width="36" height="36" patternUnits="userSpaceOnUse"><circle cx="5" cy="5" r="1.2" fill="#C9D3CA" opacity=".4"/><circle cx="25" cy="26" r="1" fill="#D7C9B6" opacity=".35"/></pattern>
  </defs>
  <rect width="1600" height="1066" rx="42" fill="#F1EEE5"/><rect width="1600" height="1066" rx="42" fill="url(#grain)"/>
  <path d="M64 190H1536M64 1030H1536" stroke="#C6D4CC" stroke-width="3"/>
  <text x="78" y="91" fill="#193B45" font-family="Arial,sans-serif" font-size="48" font-weight="700">ST DAVIDS · CITY OR COAST</text>
  <text x="80" y="146" fill="#526C68" font-family="Arial,sans-serif" font-size="25">A walkable city core, separate coast transfers · schematic, not to scale</text>
  <rect x="72" y="246" width="1456" height="256" rx="30" fill="#193B45"/>
  <circle cx="168" cy="374" r="54" fill="#DDE9E1"/>
  <g stroke="#193B45" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M136 392v-46l32-24 32 24v46z" fill="#FFFDF8"/><path d="M151 392v-27h16v27m17-34h12v14h-12" fill="#D9E8DF"/><path d="M128 401h80"/></g>
  <text x="260" y="302" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="34" font-weight="700">ST DAVIDS · NO RAILWAY STATION</text>
  <text x="260" y="350" fill="#DCE8DF" font-family="Arial,sans-serif" font-size="25">City walk: Cathedral Close → High Street → Oriel y Parc</text>
  <text x="260" y="393" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="22">繁中｜市區步行：主教座堂區 → High Street → Oriel y Parc</text>
  <text x="260" y="427" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="22">日本語｜市内散策：大聖堂地区 → High Street → Oriel y Parc</text>
  <text x="260" y="461" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="22">한국어｜도심 산책: Cathedral Close → High Street → Oriel y Parc</text>
  <text x="260" y="491" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="21">ไทย｜เดินในเมือง: Cathedral Close → High Street → Oriel y Parc</text>
  <path d="M800 502v49m-17-18 17 18 17-18" stroke="#376B68" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
  <rect x="72" y="564" width="1456" height="236" rx="30" fill="#FFFDF8" stroke="#CFDAD1" stroke-width="3"/>
  <circle cx="142" cy="629" r="27" fill="#D07854"/><text x="142" y="638" text-anchor="middle" fill="#FFFDF8" font-family="Arial,sans-serif" font-size="26" font-weight="700">!</text>
  <text x="198" y="638" fill="#193B45" font-family="Arial,sans-serif" font-size="31" font-weight="700">COAST DAY · SEPARATE ROAD / BUS TRANSFER</text>
  <g fill="#315B57" font-family="Arial,sans-serif" font-size="22">
    <text x="198" y="682">EN  St Non’s / Caerfai or a harbour: verify the outbound stop and return first.</text>
    <text x="198" y="712">繁中｜St Non’s／Caerfai 或港口：先核實去程站點和返程。</text>
    <text x="198" y="742">日本語｜St Non’s／Caerfai・港へは、往路の停留所と帰りを先に確認。</text>
    <text x="198" y="772">한국어｜St Non’s/Caerfai·항구는 출발 정류장과 귀환편을 먼저 확인하세요.</text>
    <text x="198" y="794" font-size="20">ไทย｜St Non’s/Caerfai หรือท่าเรือ: ตรวจป้ายขาไปและรถกลับก่อน</text>
  </g>
  <rect x="72" y="830" width="1456" height="173" rx="28" fill="#E8D7BD" stroke="#D5B895" stroke-width="3"/>
  <text x="106" y="868" fill="#193B45" font-family="Arial,sans-serif" font-size="26" font-weight="700">SEASONAL GATE · DO NOT WALK THE A487 VERGE</text>
  <g fill="#294B4E" font-family="Arial,sans-serif" font-size="20">
    <text x="106" y="901">EN  12 Oct 2026 snapshot: summer 400/403/404 ended; winter 387/388 does not serve St Davids.</text>
    <text x="106" y="927">繁中｜2026/10/12 快照：夏季 400/403/404 已停；冬季 387/388 不經 St Davids。</text>
    <text x="106" y="953">日本語｜2026年10月12日：夏季400/403/404番は終了。冬季387/388番は来ません。</text>
    <text x="106" y="979">한국어｜2026년 10월 12일 기준 여름 400/403/404 종료, 겨울 387/388은 미운행.</text>
    <text x="106" y="997" font-size="19">ไทย｜ข้อมูล 12 ต.ค. 2026: สายฤดูร้อนหยุดแล้ว; รถฤดูหนาวไม่ผ่าน St Davids</text>
  </g>
</svg>`]
]);

fs.mkdirSync(imageDir, { recursive: true });
for (const [filename, svg] of diagrams) {
  fs.writeFileSync(path.join(imageDir, filename), `${svg}\n`);
}
console.log(`Generated ${diagrams.size} original United Kingdom route-choice SVG diagrams.`);
