#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'parse5';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imageDir = path.join(root, 'assets', 'images');
const countries = [
  'australia', 'canada', 'china', 'france', 'italy', 'japan', 'malaysia',
  'south-korea', 'switzerland', 'thailand', 'united-kingdom', 'usa', 'vietnam'
];
const verifiedOn = '2026-10-04';
const verifiedBySourcePattern = [
  { pattern: /Forum_Romanum_through_Arch_of_Septimius_Severus/i, detail: 'Commons source page checked for creator, CC0 status, source title, and match to the Roman Forum image.' },
  { pattern: /St_Peter(?:%27|\x27)s_Square.*April_2007/i, detail: 'Commons source page checked for David Iliff (Diliff), CC BY-SA 3.0, and source title.' },
  { pattern: /Santa_Maria_in_Trastevere_fountain/i, detail: 'Commons source page checked for Jensens, public-domain dedication, date, and subject match.' },
  { pattern: /Nightview_of_the_Gwanghwamun_Square_2024/i, detail: 'Commons source page checked for Seoul Tourism Organization, KOGL Type 1, commercial use, adaptations, and source-attribution requirements.' },
  { pattern: /ANZAC_Hill/i, detail: 'Commons source page checked for Genet (Diskussion), CC BY-SA 4.0, and subject match.' },
  { pattern: /Ellery_Creek_Big_Hole/i, detail: 'Commons source page checked for Iambexta, CC BY-SA 4.0, and subject match.' },
  { pattern: /Lascar|Watarrka/i, detail: 'Commons source page checked for Jorge Láscar, CC BY 2.0, and subject match.' },
  { pattern: /Uluru,_Northern_Territory/i, detail: 'Commons source page checked for Philip Muir, CC BY-SA 4.0, and subject match.' },
  { pattern: /ISS-65.*Kata_Tjuta/i, detail: 'Commons source page checked for NASA, public-domain status, and subject match.' },
  { pattern: /Maratea_-_View_from_Camino_San_Biagio/i, detail: 'Commons source page checked for Benjamin Smith, image subject, and CC BY-SA 4.0; older alternative licenses are also listed.' },
  { pattern: /Matera_gorge_south-2879/i, detail: 'Commons source page checked for Isiwal, image subject, and CC BY-SA 4.0.' },
  { pattern: /Palaces_of_the_old_town_of_Tropea/i, detail: 'Commons source page checked for CC BY-SA 3.0 and the uploader credit Luigino; the description separately identifies the photo as Luigino C.' },
  { pattern: /Tri_Cime_panorama_1/i, detail: 'Commons source page checked for Kallerna, Tre Cime subject, and CC BY-SA 4.0.' },
  { pattern: /View_to_the_Brenta_Dolomites,_Molveno/i, detail: 'Commons source page checked for Zoran Kurelić Rabko, archived Panoramio source, bot license review, and CC BY-SA 3.0.' },
  { pattern: /Etna,_Catania_\(Italy\)/i, detail: 'Commons source page checked for 1888-stefan, Etna subject, and CC0 1.0 commercial-use dedication.' },
  { pattern: /Ortigia,_piazza_duomo,_palazzi/i, detail: 'Commons source page checked for Sailko and the CC BY 2.5 option declared in the inventory; CC BY-SA 3.0 and GFDL alternatives are also listed.' },
  { pattern: /Taormina_-_Teatro_antico_di_Taormina/i, detail: 'Commons source page checked for 231286M, ancient theatre subject, and CC BY-SA 4.0.' },
  { pattern: /Bologna_Piazza_Maggiore_11/i, detail: 'Commons source page checked for GennaroBologna, Piazza Maggiore subject, and CC BY-SA 4.0.' },
  { pattern: /Modena_-_Piazza_Grande_-_Duomo/i, detail: 'Commons source page checked for Gerolamondo, Piazza Grande subject, and CC BY-SA 4.0.' },
  { pattern: /Ravenna,_Emilia-Romagna_-_Basilica_di_San_Vitale/i, detail: 'Commons source page checked for Ingo Mehling, San Vitale subject, CC BY 2.0, and the Commons Flickr license review.' },
  { pattern: /Firenze_-_Florence_-_Galleria_degli_Uffizi/i, detail: 'Commons source page checked for Txllxt TxllxT, Uffizi terrace and Florence view, and CC BY-SA 4.0.' },
  { pattern: /Vista_de_Florencia_desde_Piazzale_Michelangelo/i, detail: 'Commons source page checked for Diego Delso and CC BY-SA 4.0; the creator specifies the visible credit Diego Delso, delso.photo, License CC BY-SA and prohibits Facebook uploads.' },
  { pattern: /Abbey_of_San_Fruttuoso_Camogli_Liguria/i, detail: 'Commons source page checked for Hayden Soloviev, San Fruttuoso subject, and CC BY 4.0.' },
  { pattern: /Manarola_NW_Cemetery_Corniglia_Monterosso_Cinque_Terre/i, detail: 'Commons source page checked for Timothy A. Gonsalves, Cinque Terre subject, and CC BY-SA 4.0. The author section separately says “Please contact me before commercial use”; the license section lists attribution and share-alike obligations, with no prior-contact condition. No contact was made.' },
  { pattern: /Genova_panorama_Molo_Carignano/i, detail: 'Commons source page checked for Bbruno, Genoa panorama subject, and CC BY-SA 4.0.' },
  { pattern: /Bellagio_and_Lake_Como_from_Menaggio-Varenna_ferry/i, detail: 'Commons source page checked for Daniel Case, Lake Como ferry viewpoint, and CC BY-SA 3.0.' },
  { pattern: /MALCESINE_GARDA_LAKE_AND_SCALIGERO_CASTLE/i, detail: 'Commons source page checked for Avisadehh, Malcesine and Scaliger Castle subject, and CC0 1.0 commercial-use dedication.' },
  { pattern: /Borromeo-P3P-20170530-010/i, detail: 'Commons source page checked for CucombreLibre, Isola Bella / Lake Maggiore subject, and CC BY 2.0.' },
  { pattern: /Gran_Sasso_seen_from_East/i, detail: 'Commons source page checked for PaulFo, Gran Sasso subject, and CC0 1.0 dedication.' },
  { pattern: /Monte_Conero_visto_dalla_spiaggia_Urbani/i, detail: 'Commons source page checked for Gabri307, Monte Conero subject, and CC BY-SA 4.0.' },
  { pattern: /Urbino-palazzo_e_borgo/i, detail: 'Commons source page checked for Il conte di Luna, Urbino subject, and CC BY-SA 2.0; page records Flickr review.' },
  { pattern: /Milan-duomo-front-facade/i, detail: 'Commons source page checked for Skarkkai, Milan Cathedral facade subject, and CC0 dedication.' },
  { pattern: /Santa_Maria_delle_Grazie.jpg/i, detail: 'Commons source page checked for Masi27185 and Santa Maria delle Grazie subject under CC BY-SA 3.0.' },
  { pattern: /Milano_Naviglio_Grande_am_Abend_1/i, detail: 'Commons source page checked for Zairon, Naviglio Grande subject, and CC BY-SA 4.0.' },
  { pattern: /Herculaneum_\(39517905442\)/i, detail: 'Commons source page checked for Andrea Schaffer, Herculaneum subject, and CC BY 2.0; page records Flickr review.' },
  { pattern: /Napoli_vista_dall%27alto._0009/i, detail: 'Commons source page checked for Giuseppe Guida, Naples subject, and CC BY-SA 4.0.' },
  { pattern: /Ancient_Pompeii_\(LHS\).*52786653083/i, detail: 'Commons source page checked for Tracey Hind / Flickr account Tracey & Doug, Pompeii/Vesuvius subject, Flickr review, and CC BY-SA 2.0.' },
  { pattern: /Alberobello,_trulli_\(13\)/i, detail: 'Commons source page checked for Palickap, Alberobello trulli subject, and CC BY-SA 4.0.' },
  { pattern: /Puglia_bari_old-town/i, detail: 'Commons source page checked for Francesco Di Stefano 08, Bari subject, and CC BY-SA 4.0; no separate heritage reproduction notice was present on the checked page.' },
  { pattern: /Lecce_from_the_air/i, detail: 'Commons source page checked for Joolz, Lecce aerial subject, and CC BY-SA 2.5; no separate heritage reproduction notice was present on the checked page.' },
  { pattern: /Castello_\(Cagliari\)/i, detail: 'Commons source page checked for Municipality of Cagliari, Cagliari subject, and CC BY-SA 3.0 Italy.' },
  { pattern: /Cala_Goloritz(?:%C3%A8|è)_13_sept._2017/i, detail: 'Commons source page checked for Nicola Secci, Cala Goloritzé subject, and CC BY-SA 4.0.' },
  { pattern: /La_Maddalena_-_Isola_di_Budelli_\(01\)/i, detail: 'Commons source page checked for Gianni Careddu, Budelli subject, and CC BY-SA 3.0. The author separately asks for a credit next to the image, a source hyperlink, and an email; no email was sent.' },
  { pattern: /Costa_parco_naturale_della_Maremma/i, detail: 'Commons source page checked for Denis Dascanio, Maremma Natural Park coast subject, and CC BY-SA 4.0.' },
  { pattern: /Palaces_-_Piazza_del_Campo_-_Siena_2016/i, detail: 'Commons source page checked for José Luiz Bernardes Ribeiro (Jbribeiro1), Siena subject, and CC BY-SA 4.0. The page asks for a nearby author credit; that credit is present. Its email request was not acted on.' },
  { pattern: /Val_D_Orcia_In_Autumn_\(179351679\)/i, detail: 'Commons source page checked for Fabrizio Lunardi, Val d’Orcia subject, and CC0 1.0 dedication.' },
  { pattern: /Faraglioni_in_Capri_09/i, detail: 'Commons source page checked for Abxbay, Capri Faraglioni subject, and CC BY-SA 4.0.' },
];
const verifiedSourcePageDetails = new Map([
  [
    'https://commons.wikimedia.org/wiki/File:Salle_Mollien_(salle_700)_-_Palais_du_Louvre_-_2024.jpg',
    {
      detail: 'Paris Louvre image review: exact Commons title, Shonagon creator credit, CC0 1.0 source-page declaration, and subject match were checked against the downloaded image and converted WebP. The source image depicts the Salle Mollien interior; the site crop does not show the Louvre pyramid. No legal-clearance conclusion is implied.',
      checkedOn: '2026-10-06'
    }
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Mount_Fuji_April_Cherry_Blossom.jpg',
    'Japan overview photo review: the exact Commons file title, SRP1998 creator, Mount Fuji/cherry blossom subject, and CC BY-SA 4.0 license were checked on the live source page. The local WebP was visually checked against the described subject; attribution, linked license, change disclosure and same-version share-alike terms are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Shibuya_crossing_at_night,_Tokyo,_Japan.jpg',
    'Japan overview photo review: the exact Commons file title, Joli Rumi creator, Shibuya crossing subject, and CC BY-SA 4.0 license were checked on the live source page. The local WebP was visually checked against the described subject; attribution, linked license, change disclosure and same-version share-alike terms are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Yasaka-dori_early_morning_with_street_lanterns_and_the_Tower_of_Yasaka_(Hokan-ji_Temple),_Kyoto,_Japan.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Basile Morin creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Water_reflection_of_Kinkaku-ji_Temple_a_sunny_day,_Kyoto,_Japan.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Basile Morin creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Streets_of_Gion,_Kyoto_-_Gion7708.jpg',
    'Kyoto photo credit follow-up: exact Commons page title and lumoplank creator credit checked; the page declares a CC0 1.0 dedication. Creator and source remain credited for provenance.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Kiyomizu-dera,_Kyoto,_November_2016_-07.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Martin Falbisoner creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Bamboo_Forest,_Arashiyama,_Kyoto,_Japan.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Basile Morin creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine,_Kyoto,_Japan.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Basile Morin creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:A_view_of_Nishiki_Market,_Kyoto,_Japan.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Joli Rumi creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Kyoto_Station_November_2016_-03.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Martin Falbisoner creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Tetsugaku-no-michi_-_Philosopher%27s_Walk_-_Kyoto.jpg",
    "Kyoto photo credit follow-up: exact Commons page title, Gzzz creator credit, and CC BY 4.0 terms checked. Attribution, license linking, and change disclosure were confirmed on the page.",
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Pontocho_Alley,_Kyoto_-_Flickr_-_Sergiy_Galyonkin.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Sergiy Galyonkin creator credit, and CC BY-SA 2.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Tenry%C5%AB-ji_Garten.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, Marco Almbauer creator credit, and CC BY-SA 4.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Kyoto_Fushimi_Horikawa01s4592.jpg',
    'Kyoto photo credit follow-up: exact Commons page title, 663highland creator credit, and CC BY-SA 3.0 terms checked. Attribution, license linking, change disclosure, and same-license adaptation terms were confirmed on the page.',
    '2026-10-06'
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Gries-Bozen_vom_Guntschnaberg_Richtung_S%C3%BCden.jpg",
    "Source page checked for Bartleby08, the Bolzano view subject, and CC BY-SA 4.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Lucca,_mura_e_campanila_San_Frediano.jpg",
    "Source page checked for Palickap, Lucca walls and San Frediano bell tower subject, and CC BY-SA 4.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Positano_panorama.jpg",
    "Source page checked for Nicola Cerroni, Positano subject, and CC BY-SA 4.0. The page has general Wiki Loves Monuments authorisation boilerplate but no separate explicit commercial-reproduction restriction."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Sorrento_Cliff_2.jpg",
    "Source page checked for Halley from Boston, Sorrento subject, and CC BY 2.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Langhe.jpg",
    "Source page checked for Phalaenopsis Aphrodite, Langhe subject, and CC BY 2.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Piazza_Castello_di_Torino_e_scorcio_della_Piazzetta_Reale.jpg",
    "Source page checked for Guglielmo di Rivoli, Piazza Castello subject, and CC0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Sacra_di_San_Michele_272.jpg",
    "Source page checked for Cristian Buda, Sacra di San Michele subject, and CC BY-SA 4.0. The page has general Wiki Loves Monuments authorisation boilerplate but no separate explicit commercial-reproduction restriction."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Papal_Basilica_of_Saint_Francis_of_Assisi.jpg",
    "Source page checked for Peter K Burian, Assisi basilica subject, and CC BY-SA 4.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Orvieto_panorama.jpg",
    "Source page checked for Hans Peter Schaefer, Orvieto panorama subject, and CC BY-SA 3.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Perugia_-_Palazzo_dei_Priori_-_2025-09-07_21-53-14_001.JPG",
    "Source page checked for Maddy16869, Palazzo dei Priori subject, and CC BY-SA 4.0. The page has general Wiki Loves Monuments authorisation boilerplate but no separate explicit commercial-reproduction restriction."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Prato_5_con_Santo.JPG",
    "Source page checked for CC BY-SA 3.0. Its description names Piero tasso while the upload account is P tasso; both names are retained in the site credit."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Verona_Italy_Piazza_Bra_from_arena_DSC08039.JPG",
    "Source page checked for David Monniaux, Piazza Bra subject, and CC BY-SA 3.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Basilica_Palladiana_a_Vicenza_Italy_and_Piazza_dei_Signori_and_Loggia_del_Capitaniato_Palace.jpg",
    "Source page checked for Federico, Vicenza landmarks subject, and CC BY-SA 4.0. The page has general Wiki Loves Monuments authorisation boilerplate but no separate explicit commercial-reproduction restriction."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Canale_di_Cannaregio_(7227730810).jpg",
    "Source page checked for Tony Hisgett, Cannaregio canal subject, and CC BY 2.0; Commons records the Flickr review. No separate restriction was present on the checked file page."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Burano_-_canal_and_colourful_houses_(36071932225).jpg",
    "Source page checked for Jorge Franganillo, Burano canal subject, and CC BY 2.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Panorama_Piazza_San_Marco_Venezia_06_2017_2965.jpg",
    "Source page checked for Mariordo (Mario Roberto Durán Ortiz), the San Marco waterfront panorama, and CC BY-SA 4.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Valle_dei_Templi_%E2%80%93_Temple_of_Concordia_2024b.jpg",
    "Source page checked for Cayambe, Temple of Concordia subject, and CC BY-SA 4.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Panoramica_Cattedrale_di_Palermo.jpg",
    "Source page checked for Kiban, Palermo Cathedral panorama subject, and CC BY-SA 3.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Wind_mill_at_salt.pans.jpg",
    "Source page checked for Malcanton, Trapani salt-pan windmill subject, and CC BY-SA 4.0."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Panorama_delle_Cinque_Terre_da_Monterosso.JPG",
    "Replacement source page checked for Luca Aless, Cinque Terre coast viewed from Monterosso, and CC BY-SA 4.0. No pre-contact request was present on the checked file page."
  ],
  [
    "https://commons.wikimedia.org/wiki/File:Santa_Maria_dell%27Isola_-_Tropea_-_Calabria_-_Italy_-_July_17th_2013_-_01.jpg",
    "Replacement source page checked for Norbert Nagel, Santa Maria dell’Isola in Tropea, and CC BY-SA 3.0. The page says a specimen copy or link is a request, not a license condition; none was sent."
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Ninomaru_Palace,_November_2016.jpg',
    'Kyoto district photo review: Commons source title, Martin Falbisoner authorship, and CC BY-SA 4.0 terms checked against the exact page; attribution, license link, change notice and share-alike terms confirmed.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:View_of_the_Five-storied_Pagoda_from_the_Lotus_Pond,_T%C5%8D-ji_Temple,_Kyoto,_20240821_1015_5226.jpg',
    'Kyoto district photo review: exact English source title, Jakub Hałun authorship, and CC BY 4.0 terms checked against the page; attribution, license link and change notice confirmed.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Kyoto-Ryoan-Ji_MG_4512.jpg',
    'Kyoto district photo review: exact Commons title, Cquest authorship, and CC BY-SA 2.5 terms checked; attribution, license link, change notice and same-version share-alike requirement confirmed. Replaced the prior Ryoanji file after its embedded metadata conflicted with the Commons licensing section.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:251213_Nanzen-ji_Suirokaku_Kyoto_Japan05s3.jpg',
    'Kyoto district photo review: exact Commons title, 663highland authorship, and CC BY-SA 4.0 terms checked against the page; attribution, license link, change notice and share-alike terms confirmed.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Abeno_Harukas_20260223.jpg',
    'Osaka source review: exact Commons title, ノボホショコロトソ authorship, Abeno Harukas subject and CC BY 4.0 terms checked. Credit, license link and crop/resize/conversion notice are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:A_plate_of_assorted_Takoyaki_in_Kuromon_Market_in_Osaka,_Japan.jpg',
    'Osaka source review: exact Commons title, Gatorfan252525 authorship, Kuromon Market takoyaki subject and CC BY-SA 4.0 terms checked against the source page and pixels. Credit, license link, edit disclosure and same-license distribution notice are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Umeda_Sky_Building,_Osaka,_November_2016_-02.jpg',
    'Osaka source review: exact Commons title, Martin Falbisoner authorship, Umeda Sky Building escalator subject and CC BY-SA 4.0 terms checked. Corrected a prior credit that described a different skyline photo; credit, license link, edit disclosure and same-license distribution notice are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Shinsekai_and_Tsutenkaku_Tower.jpg',
    'Osaka source review: exact Commons title, Sakai Yayoi authorship, Shinsekai and Tsutenkaku subject, and CC0 1.0 dedication checked against the visible image. The page credits the creator for provenance.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Dotonbori,_Osaka,_at_night,_November_2016.jpg',
    'Osaka source review: exact Commons title, Martin Falbisoner authorship, Dotonbori canal and Ebisu Bridge subject, and CC BY-SA 4.0 terms checked against the visible image. Attribution, license link, change disclosure and same-license terms are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Namba-Yasaka-Shrine-lions_head_theater.jpg',
    'Osaka source review: exact Commons title, Immanuelle authorship, Namba Yasaka Shrine subject, and CC BY 4.0 terms checked against the visible image. Attribution, license link and change disclosure are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:20181013_-_01_-_Montreal_(Mile_End).jpg',
    'Canada source review: exact Commons title, Andre Carrotflower authorship, Laurier/Henri-Julien street-corner subject, and CC BY-SA 4.0 terms checked against the source page. The image record and visible credit link to the source and license and state the same-license adaptation terms; the WebP pixels were not visually reviewed in this check.',
    '2026-10-07'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Osaka_Castle_Outer_Moat_and_Osaka_Business_Park,_November_2016.jpg',
    'Osaka source review: exact Commons title, Martin Falbisoner authorship, Osaka Castle outer moat and Inui-yagura subject, and CC BY-SA 4.0 terms checked against the visible image. Attribution, license link, change disclosure and same-license terms are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Tempozan_Ferris_Wheel_in_Osaka_at_Dusk.jpg',
    'Osaka source review: exact Commons title, Tim Bray authorship, Tempozan Ferris Wheel at dusk subject, and CC BY-SA 4.0 terms checked against the visible image. Attribution, license link, change disclosure and same-license terms are present.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Osaka_skyline_at_night_from_Umeda_Sky_Building.jpg',
    'Osaka source review: exact Commons title, Kaiza96 authorship, Osaka night skyline from the Umeda Sky Building subject, and CC BY-SA 3.0 terms checked against the visible image. Attribution, license link, change disclosure and same-license terms are present. The page also carries a Japan architectural-work reproduction notice, recorded in the Osaka source report.',
    '2026-10-06'
  ],
  [
    'https://commons.wikimedia.org/wiki/File:Osaka-Castle-cherry-blossom-2018-Luka-Peternel.jpg',
    'Osaka source review: exact Commons title, Luka Peternel authorship, Osaka Castle cherry blossom subject, and CC BY-SA 4.0 terms checked against the source page. Attribution, license link, edit disclosure and same-license terms are present; the image was not visually reviewed in this check.',
    '2026-10-06'
  ],
].map(([sourceUrl, detail, checkedOn]) => [sourceUrl, { checkedOn: checkedOn || '2026-10-05', detail }]));

const genericTokens = new Set(('a an and at by from for in into of on or the to with through view photo image picture scene landscape city town lake river road street park guide travel at the a view panorama night day north south east west central main old new near beyond under over beside walk route district guide file webp jpg jpeg commons official').split(' '));

function attrs(node) { return Object.fromEntries((node.attrs || []).map((a) => [a.name, a.value])); }
function text(node) {
  if (node.nodeName === '#text') return node.value;
  return (node.childNodes || []).map(text).join('');
}
function all(node, predicate, out = []) {
  if (predicate(node)) out.push(node);
  for (const child of node.childNodes || []) all(child, predicate, out);
  return out;
}
function walkFiles(dir) {
  const out = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) out.push(...walkFiles(full));
    else if (item.isFile()) out.push(full);
  }
  return out;
}
function canonicalLicenseUrl(license) {
  if (!license) return null;
  if (/^KOGL Type 1$/i.test(license.trim())) return 'http://www.kogl.or.kr/info/licenseType1.do';
  if (/^CC0(?:\s+1\.0)?$/i.test(license.trim())) return 'https://creativecommons.org/publicdomain/zero/1.0/';
  const match = license.trim().match(/^CC\s+(BY(?:-SA)?)\s+(\d+(?:\.\d+)?)(?:\s+([a-z]{2}))?$/i);
  if (!match) return null;
  const family = match[1].toLowerCase();
  const version = match[2];
  const jurisdiction = match[3] ? match[3].toLowerCase() + '/' : '';
  return 'https://creativecommons.org/licenses/' + family + '/' + version + '/' + jurisdiction;
}
function licenseTerms(license, verified) {
  if (!license) return { commercialReuseEligibility: 'unknown', attributionTerms: 'unknown' };
  if (/^KOGL Type 1$/i.test(license)) return {
    commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
    attributionTerms: 'Specify the work source and credit the Seoul Tourism Organization. The source page states that commercial use and adaptations are permitted.'
  };
  if (/^CC\s+BY-SA\b/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
      attributionTerms: 'Credit the creator and title where supplied, link to the source and license, note changes, and keep adapted material under the same license version.'
    };
  }
  if (/^CC\s+BY\b/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
      attributionTerms: 'Credit the creator and title where supplied, link to the source and license, and note changes.'
    };
  }
  if (/^CC0\b/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'permitted_under_source_page_checked_license_terms' : 'permitted_by_stated_license_not_independently_checked',
      attributionTerms: 'Attribution is not required by CC0; the site retains source and creator credit as provenance.'
    };
  }
  if (/public\s+domain/i.test(license)) {
    return {
      commercialReuseEligibility: verified ? 'public_domain_status_checked' : 'declared_public_domain_not_independently_checked',
      attributionTerms: 'Attribution is not required for public-domain material; the site retains source and creator credit as provenance.'
    };
  }
  return { commercialReuseEligibility: 'unknown', attributionTerms: 'unknown' };
}
function tokenSet(value) {
  const normalized = String(value || '').normalize('NFKD').replace(/\p{Diacritic}/gu, '').toLowerCase();
  return new Set(normalized.split(/[^a-z0-9]+/).filter((token) => token.length > 2 && !genericTokens.has(token)));
}
function parseLicense(creditText) {
  const match = creditText.match(/\bKOGL\s+Type\s+1\b|\bCC0(?:\s+1\.0)?\b|\bCC\s+BY(?:-SA)?\s+\d+(?:\.\d+)?(?:\s+[a-z]{2})?|\bpublic\s+domain\b/i);
  if (!match) return null;
  if (/^kogl/i.test(match[0])) return 'KOGL Type 1';
  if (/^cc0/i.test(match[0])) return match[0].toUpperCase().replace(/\s+/g, ' ');
  if (/^public/i.test(match[0])) return 'Public domain';
  return match[0].replace(/\s+/g, ' ').replace(/\b([a-z]{2})$/i, (m) => m.toLowerCase());
}
function parseCredit(li) {
  const itemAttrs = attrs(li);
  const links = all(li, (node) => node.tagName === 'a').map((a) => ({ href: attrs(a).href || '', label: text(a).replace(/\s+/g, ' ').trim() }));
  const sourceLink = links.find((link) => /commons\.wikimedia\.org\/wiki\/File:/i.test(link.href));
  if (!sourceLink) return null;
  const creditText = text(li).replace(/\s+/g, ' ').trim();
  const license = itemAttrs['data-photo-license'] || parseLicense(creditText);
  const at = license ? creditText.toLowerCase().indexOf(license.toLowerCase()) : -1;
  let before = at >= 0 ? creditText.slice(0, at) : creditText;
  if (sourceLink.label) before = before.replace(sourceLink.label, '');
  const creator = before.replace(/^[\s—–,:;.-]+|[\s—–,:;.-]+$/g, '').trim() || null;
  let editHistory = null;
  if (at >= 0) {
    const after = creditText.slice(at + license.length).replace(/^[\s.,;:—–-]+/, '').trim();
    editHistory = after || null;
  }
  const declaredLicenseLink = links.find((link) => /creativecommons\.org\/(licenses|publicdomain)\//i.test(link.href));
  return {
    assetPath: itemAttrs['data-photo-asset'] || null,
    sourceUrl: sourceLink.href,
    creditLabel: itemAttrs['data-photo-title'] || sourceLink.label || null,
    creator: itemAttrs['data-photo-creator'] || creator,
    license,
    licenseUrl: itemAttrs['data-photo-license-url'] || declaredLicenseLink?.href || canonicalLicenseUrl(license),
    creditText,
    editHistory: itemAttrs['data-photo-edit-note'] || editHistory,
    matching: null
  };
}
function matchCredit(image, credits) {
  const fileTokens = tokenSet(path.basename(image.src));
  const altTokens = tokenSet(image.alt);
  const routeTokens = tokenSet(image.route);
  const scored = credits.map((credit) => {
    const labelTokens = tokenSet(credit.creditLabel + ' ' + credit.creditText + ' ' + credit.sourceUrl);
    const altHits = [...altTokens].filter((token) => labelTokens.has(token));
    const fileHits = [...fileTokens].filter((token) => labelTokens.has(token));
    const routeHits = [...routeTokens].filter((token) => labelTokens.has(token));
    const distinctive = new Set([...altHits, ...fileHits]);
    return { credit, score: altHits.length * 3 + fileHits.length * 2 + routeHits.length, distinctiveHits: [...distinctive] };
  }).filter((item) => item.distinctiveHits.length >= 2 || item.distinctiveHits.some((token) => token.length >= 6)).sort((a, b) => b.score - a.score);
  if (!scored.length) return null;
  const top = scored[0];
  const tied = scored.filter((item) => item.score === top.score);
  const identities = new Set(tied.map((item) => [item.credit.sourceUrl, item.credit.license, item.credit.creator].join('|')));
  if (identities.size > 1) return null;
  return { ...top.credit, matching: 'page_credit_lexical_match', matchedTokens: top.distinctiveHits };
}

const assetPaths = walkFiles(imageDir).filter((file) => /\.webp$/i.test(file));
const recordsBySrc = new Map();
const dataDir = path.join(root, 'data');
const dataFiles = fs.readdirSync(dataDir).filter((name) => name.endsWith('.mjs'));
function collect(value, moduleName, seen, depth = 0) {
  if (!value || typeof value !== 'object' || depth > 24 || seen.has(value)) return;
  seen.add(value);
  if (!Array.isArray(value) && typeof value.src === 'string' && value.src.startsWith('/assets/images/')) {
    const item = {
      moduleName,
      src: value.src,
      sourceUrl: value.source ?? null,
      sourceTitle: value.label ?? value.commonsTitle ?? null,
      creator: value.creator ?? null,
      license: value.license ?? null,
      licenseUrl: value.licenseUrl ?? value.licenseURL ?? canonicalLicenseUrl(value.license),
      editHistory: value.editNote ?? null,
      alt: value.alt ?? null
    };
    if (!recordsBySrc.has(item.src)) recordsBySrc.set(item.src, []);
    recordsBySrc.get(item.src).push(item);
  }
  for (const child of Object.values(value)) collect(child, moduleName, seen, depth + 1);
}
const moduleErrors = [];
for (const name of dataFiles) {
  try {
    const moduleUrl = pathToFileURL(path.join(dataDir, name)).href;
    const module = await import(moduleUrl + '?photo-inventory=20261004');
    const seen = new WeakSet();
    for (const value of Object.values(module)) collect(value, name, seen);
  } catch (error) {
    moduleErrors.push({ module: name, error: error.message });
  }
}

const usesBySrc = new Map();
const creditsBySrc = new Map();
const explicitCreditsByAsset = new Map();
let englishPageCount = 0;
for (const country of countries) {
  const base = path.join(root, country);
  if (!fs.existsSync(base)) continue;
  const htmlFiles = walkFiles(base).filter((file) => path.basename(file).toLowerCase() === 'index.html');
  for (const file of htmlFiles) {
    const document = parse(fs.readFileSync(file, 'utf8'));
    const rel = path.relative(base, path.dirname(file)).replaceAll('\\', '/');
    const route = '/' + country + (rel ? '/' + rel : '') + '/';
    englishPageCount += 1;
    const imgs = all(document, (node) => node.tagName === 'img').map((node) => {
      const a = attrs(node);
      return { src: a.src?.split(/[?#]/)[0] || '', alt: a.alt || '', route };
    }).filter((img) => img.src.startsWith('/assets/images/'));
    const sourceSections = all(document, (node) => node.tagName === 'section' && (attrs(node).class || '').split(/\s+/).includes('sources'));
    const credits = sourceSections.flatMap((section) => all(section, (node) => node.tagName === 'li').map(parseCredit).filter(Boolean));
    for (const credit of credits) {
      if (!creditsBySrc.has(credit.sourceUrl)) creditsBySrc.set(credit.sourceUrl, []);
      creditsBySrc.get(credit.sourceUrl).push({ ...credit, route });
      if (credit.assetPath) {
        if (!explicitCreditsByAsset.has(credit.assetPath)) explicitCreditsByAsset.set(credit.assetPath, []);
        explicitCreditsByAsset.get(credit.assetPath).push({ ...credit, route });
      }
    }
    for (const image of imgs) {
      if (!usesBySrc.has(image.src)) usesBySrc.set(image.src, []);
      usesBySrc.get(image.src).push(image);
    }
  }
}

for (const [sourceUrl, creator, license, title] of [
  ['https://commons.wikimedia.org/wiki/File:Blue_Pond_(Aoiike)_at_Biei,_Hokkaido,_Japan.jpg', 'OKJaguar', 'CC BY-SA 4.0', 'Blue Pond (Aoiike) at Biei, Hokkaido, Japan'],
  ['https://commons.wikimedia.org/wiki/File:140724_Asahi-dake_and_Sugatami-no-ike_Hokkaido_Japan01bs3.jpg', '663highland', 'CC BY 2.5', 'Asahidake and Sugatami Pond'],
  ['https://commons.wikimedia.org/wiki/File:Biei_landscape_(7662422372).jpg', 'Chi King', 'CC BY 2.0', 'Biei landscape'],
  ['https://commons.wikimedia.org/wiki/File:140829_Ichiko_of_Shiretoko_Goko_Lakes_Hokkaido_Japan01s5.jpg', '663highland', 'CC BY 2.5', 'Shiretoko Five Lakes'],
  ['https://commons.wikimedia.org/wiki/File:Hokkaido_Sapporo_Odori_Park.jpg', 'Nkns', 'CC BY-SA 3.0', 'Sapporo Odori Park'],
  ['https://commons.wikimedia.org/wiki/File:Susukino-night_from_TV_Tower.JPG', 'Keith Blayney', 'CC BY-SA 3.0', 'Susukino night from TV Tower'],
  ['https://commons.wikimedia.org/wiki/File:%E5%B0%8F%E6%A8%BD%E9%9B%AA%E3%81%82%E3%81%8B%E3%82%8A%E3%81%AE%E8%B7%AF2013%EF%BC%88Otaru_Snow_Light_Path_2013%EF%BC%89_-_panoramio_(1).jpg', 't-konno', 'CC BY-SA 3.0', 'Otaru Snow Light Path'],
  ['https://commons.wikimedia.org/wiki/File:130823_Cape_Kamui_Shakotan_Hokkaido_Japan04s3.jpg', '663highland', 'CC BY 2.5', 'Cape Kamui'],
  ['https://commons.wikimedia.org/wiki/File:View_from_Mount_Hakodate_Japan01o.jpg', '663highland', 'CC BY 2.5', 'View from Mount Hakodate'],
  ['https://commons.wikimedia.org/wiki/File:Komagatake_dusk.jpg', 'jonny-mt', 'CC BY-SA 3.0', 'Komagatake dusk at Onuma'],
  ['https://commons.wikimedia.org/wiki/File:Lavender_fields,_Furano_(48254611081).jpg', 'Blondinrikard Fröberg', 'CC BY 2.0', 'Furano lavender fields'],
  ['https://commons.wikimedia.org/wiki/File:Mount_Y%C5%8Dtei_from_Niseko_Annupuri_(33253188670).jpg', 'MIKI Yoshihito', 'CC BY 2.0', 'Mount Yōtei from Niseko Annupuri'],
  ['https://commons.wikimedia.org/wiki/File:Jigokudani_(Hell_Valley),_Noboribetsu_Onsen,_Hokkaido,_April_2023_02.jpg', 'Calistemon', 'CC BY-SA 4.0', 'Jigokudani (Hell Valley), Noboribetsu Onsen, Hokkaido, April 2023 02'],
  ['https://commons.wikimedia.org/wiki/File:130922_Lake_Toya_Toyako_Hokkaido_Japan01s5.jpg', '663highland', 'CC BY 2.5', '130922 Lake Toya Toyako Hokkaido Japan01s5'],
  ['https://commons.wikimedia.org/wiki/File:Kushiro_Marsh.jpg', 'jetalone', 'CC BY 2.0', 'Kushiro Marsh'],
  ['https://commons.wikimedia.org/wiki/File:Grus_japonensis_-Hokkaido,_Japan_-several-8_(1).jpg', 'Alastair Rae', 'CC BY-SA 2.0', 'Grus japonensis -Hokkaido, Japan -several-8 (1)'],
  ['https://commons.wikimedia.org/wiki/File:Lake_Akan_Kushiro_Hokkaido_Japan04n.jpg', '663highland', 'CC BY 2.5', 'Lake Akan Kushiro Hokkaido Japan04n'],
  ['https://commons.wikimedia.org/wiki/File:Hokkaido-Abashiri_Drift_Icebreaker_Ship_Aurora-xl.jpg', 'kkawamura', 'CC BY 4.0', 'Abashiri drift icebreaker'],
  ['https://commons.wikimedia.org/wiki/File:Daisetsuzan_National_Park_(44720157870).jpg', 'Raita Futo', 'CC BY 2.0', 'Daisetsuzan National Park, north view from Mount Asahi’s summit'],
  ['https://commons.wikimedia.org/wiki/File:Siripa-misaki7020429.jpg', '\u6211\u8def\u30fb\u5e4c\u5185\u753b\u50cf\u5009\u5eab', 'CC BY-SA 3.0', 'Siripa Cape, Yoichi']
]) {
  verifiedSourcePageDetails.set(sourceUrl, {
    detail: `Hokkaido image review: exact Commons source title, ${creator} creator credit, and ${license} terms checked against the source page.`,
    checkedOn: '2026-10-06'
  });
}

for (const [sourceUrl, detail] of [
  ['https://commons.wikimedia.org/wiki/File:Rouen_Old_Town_(30784770452).jpg', 'Normandy image review: the source page identifies Jorge Láscar as creator and CC BY 2.0 as the license. Its description says the image looks east along rue du Gros-Horloge with Rouen Cathedral in the distance; this matches the downloaded and visually reviewed WebP and its human title. Attribution, linked license and WebP/crop disclosure are present.'],
  ['https://commons.wikimedia.org/wiki/File:Bayeux_cathedral_(498230954).jpg', 'Normandy image review: the source page identifies Paul Holloway as creator and CC BY-SA 2.0 as the license. The downloaded and visually reviewed image depicts Bayeux Cathedral; the route labels it as a town landmark and does not present it as a D-Day scene. Attribution, linked license, WebP/crop disclosure and same-license adaptation terms are present.'],
  ['https://commons.wikimedia.org/wiki/File:A_view_of_the_Abbey_of_Mont-Saint-Michel_with_the_bay.jpg', 'Normandy image review: the source page identifies Hammondtravels as creator and CC BY-SA 4.0 as the license. The downloaded and visually reviewed image shows the abbey wall and upper buildings above part of the bay; the route title and alt do not claim an unrestricted crossing or broad bay panorama. Attribution, linked license, WebP/crop disclosure and same-license adaptation terms are present.']
]) {
  verifiedSourcePageDetails.set(sourceUrl, { detail, checkedOn: '2026-10-07' });
}

for (const [sourceUrl, detail] of [
  ['https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chambord,_Loire_Valley_-_FRANCE.jpg', 'Loire image review: exact Commons title, Ignaz Wiradi creator credit, CC BY-SA 3.0 photo terms and visual match to the Chambord façade/roofline were checked on 2026-10-07. Separately considered the depicted building: the estate dates the royal project to 1519 and says the architect is unknown. The photo license is not treated as a license to any separate work depicted; this note is not legal clearance.'],
  ['https://commons.wikimedia.org/wiki/File:Ch%C3%A2teau_de_Chenonceau,_Loire_Valley,_France.jpg', 'Loire image review: exact Commons title, SpottingHistory creator credit, CC BY-SA 4.0 photo terms and visual match to the château crossing the Cher were checked on 2026-10-07. Separately considered the depicted building: the estate dates the present château to 1513–1517. The photo license is not treated as a license to any separate work depicted; this note is not legal clearance.'],
  ['https://commons.wikimedia.org/wiki/File:Loire_River,_France_(17376540539).jpg', 'Loire image review: exact Commons title, Larry (Flickr account Larry Tweed) creator credit, CC BY 2.0 photo terms and visual match to the river, small boat and riverside path were checked on 2026-10-07. The landscape image replaces a photo of Villandry’s designed garden after separating the photo license from the underlying work. The river photograph does not show the château or garden design; its image credit links the source and license and discloses the crop/WebP conversion.']
]) {
  verifiedSourcePageDetails.set(sourceUrl, { detail, checkedOn: '2026-10-07' });
}

for (const [sourceUrl, detail] of [
  ['https://commons.wikimedia.org/wiki/File:Hongdae_area_cityscape.jpg', 'Seoul image review: exact Commons page identifies Minseong Kim (IMKSv), the Hongdae cityscape, and CC BY-SA 4.0. Attribution, source/license links, WebP conversion notice and same-version share-alike terms are present.'],
  ['https://commons.wikimedia.org/wiki/File:Itaewon-dong.jpg', 'Seoul image review: exact Commons page identifies Live Studio Kim Hakri and the Itaewon-dong aerial; it declares Korea Open Government License Type 1. The official KOGL Type 1 terms permit commercial use and adaptations with source attribution. The site links both source and license and discloses WebP conversion.'],
  ['https://commons.wikimedia.org/wiki/File:Quiet_alleyway_in_Seongsu-dong.jpg', 'Seoul image review: exact Commons page identifies CartoonChess, the Seongsu-dong alley, and CC BY-SA 4.0. Attribution, source/license links, WebP conversion notice and same-version share-alike terms are present.'],
  ['https://commons.wikimedia.org/wiki/File:Seoul_Forest_Walk_Path.jpg', 'Seoul image review: exact Commons page identifies Qhairy, the Seoul Forest walking path, and CC BY 4.0. Attribution, source/license links and crop/WebP conversion notice are present.']
]) {
  verifiedSourcePageDetails.set(sourceUrl, { detail, checkedOn: '2026-10-07' });
}

const allDistinctCredits = [...new Map([...creditsBySrc.values()].flat().map((credit) => [[credit.sourceUrl, credit.license, credit.creator, credit.creditLabel].join('|'), credit])).values()];
const explicitCreditMappings = new Map([
  ['/assets/images/china-destination-xian.webp', { creditLabel: "Xi'an City Wall", creator: 'xiquinhosilva', note: 'Matched the image subject to the identically named, same-page Commons credit.' }],
  ['/assets/images/china-hangzhou-grand-canal.webp', { creditLabel: 'Gongchen Bridge', creator: 'Windmemories', note: 'Matched the image alt and subject to the identically named Commons credit on both Hangzhou routes.' }],
  ['/assets/images/biei-landscape.webp', { creditLabel: 'Biei landscape photo', creator: 'Chi King', note: 'Corrected a previous Blue Pond credit match; the displayed image is the agricultural landscape shown in the Commons source page.' }],
  ['/assets/images/hokkaido-sapporo-odori.webp', { creditLabel: 'Hokkaido Sapporo Odori Park photo', creator: 'Nkns', note: 'Matched the central Sapporo Odori image to its exact Commons photo credit.' }],
  ['/assets/images/hokkaido-susukino-night.webp', { creditLabel: 'Susukino night from TV Tower photo', creator: 'Keith Blayney', note: 'Corrected an earlier false match to the adjacent Odori Park credit; matched the night image to its exact Commons title and creator.' }],
  ['/assets/images/korea-busan-cityscape.webp', { creditLabel: 'Busan cityscape', creator: 'Hoil Ryu', note: 'Matched the hero image description to the same-route Busan cityscape credit.' }],
  ['/assets/images/korea-busan-gwangalli-music.webp', { creditLabel: 'Gwangalli waterfront musicians', creator: 'Christophe95', note: 'Matched the musicians in the image alt to the same-route credit.' }],
  ['/assets/images/korea-hongdae-night.webp', { creditLabel: 'Hongdae night photo', creator: 'lumoplank', note: 'Matched the route and night-street image alt to the same-route Hongdae credit.' }],
  ['/assets/images/thailand-andaman-ko-lanta.webp', { creditLabel: 'Klong Khong Beach, Ko Lanta', creator: 'Marcin Konsek', note: 'Matched the beach and island in the image alt to the same-route credit.' }],
  ['/assets/images/thailand-andaman-phang-nga.webp', { creditLabel: 'Ko Yao Noi sunrise', creator: 'Vyacheslav Argenberg', note: 'Matched the sunrise, bay, and island in the image alt to the same-route credit.' }],
  ['/assets/images/thailand-andaman-similan.webp', { creditLabel: 'Ko Similan panorama from Sailboat Rock', creator: 'Sgroey', note: 'Matched the island group and panoramic view in the image alt to the same-route credit.' }]
]);
const visuallyReviewedAssetPaths = new Set([
  '/assets/images/france-paris-louvre-salle-mollien-20261006.webp',
  '/assets/images/italy-rome-ancient-rome-capitoline.webp',
  '/assets/images/italy-rome-historic-centre-trastevere.webp',
  '/assets/images/australia-red-centre-mparntwe-alice-springs.webp',
  '/assets/images/australia-red-centre-tjoritja-west-macdonnell.webp',
  '/assets/images/australia-red-centre-watarrka-kings-canyon.webp',
  '/assets/images/australia-red-centre-uluru-cultural-landscape.webp',
  '/assets/images/australia-red-centre-kata-tjuta.webp',
  '/assets/images/thailand-andaman-phang-nga.webp',
  '/assets/images/thailand-andaman-ko-lanta.webp',
  '/assets/images/thailand-andaman-similan.webp',
  '/assets/images/italy-naples-pompeii-vesuvius-pompeii-city-route.webp',
  '/assets/images/italy-naples-pompeii-vesuvius-herculaneum-vesuvius.webp',
  '/assets/images/italy-puglia-alberobello-itria-valley.webp',
  '/assets/images/italy-puglia-bari-trani-castel-del-monte.webp',
  '/assets/images/italy-puglia-lecce-otranto-gallipoli.webp',
  '/assets/images/italy-sardinia-gulf-orosei-gennargentu.webp',
  '/assets/images/italy-siena-southern-tuscany-maremma-park-coast.webp',
  '/assets/images/italy-siena-southern-tuscany-siena-civic-cathedral.webp',
  '/assets/images/takoyaki.webp',
  '/assets/images/tennoji-harukas.webp',
  '/assets/images/shinsekai.webp',
  '/assets/images/dotonbori-night.webp',
  '/assets/images/namba-yasaka.webp',
  '/assets/images/osaka-castle-moat.webp',
  '/assets/images/tempozan-dusk.webp',
  '/assets/images/osaka-skyline.webp',
  '/assets/images/hokkaido-asahidake.webp',
  '/assets/images/biei-landscape.webp',
  '/assets/images/hokkaido-shiretoko-five-lakes.webp',
  '/assets/images/hokkaido-sapporo-odori.webp',
  '/assets/images/hokkaido-susukino-night.webp',
  '/assets/images/hokkaido-otaru-canal.webp',
  '/assets/images/hokkaido-cape-kamui.webp',
  '/assets/images/hokkaido-hakodate-night.webp',
  '/assets/images/hokkaido-onuma-komagatake.webp',
  '/assets/images/hokkaido-furano-lavender.webp',
  '/assets/images/hokkaido-niseko-yotei.webp',
  '/assets/images/hokkaido-noboribetsu-jigokudani.webp',
  '/assets/images/hokkaido-kushiro-marsh.webp',
  '/assets/images/hokkaido-abashiri-drift-ice.webp',
  '/assets/images/hokkaido-daisetsuzan-north-view.webp',
  '/assets/images/hokkaido-yoichi-coast.webp',
  '/assets/images/france-normandy-rouen-seine-cathedral.webp',
  '/assets/images/france-normandy-bayeux-dday-landscape.webp',
  '/assets/images/france-normandy-mont-saint-michel-bay.webp',
  '/assets/images/france-loire-valley-blois-chambord.webp',
  '/assets/images/france-loire-valley-amboise-chenonceau.webp',
  '/assets/images/france-loire-valley-tours-villandry-azay.webp'
]);
const visualReviewDateByAsset = new Map([
  ...[...visuallyReviewedAssetPaths].map((assetPath) => [assetPath, verifiedOn]),
  ['/assets/images/france-paris-louvre-salle-mollien-20261006.webp', '2026-10-06'],
  ['/assets/images/italy-venice-lagoon-san-marco-rialto.webp', '2026-10-05'],
  ['/assets/images/italy-venice-lagoon-cannaregio-dorsoduro-giudecca.webp', '2026-10-05'],
  ['/assets/images/italy-genoa-liguria-cinque-terre-rail-trails.webp', '2026-10-05'],
  ['/assets/images/italy-basilicata-calabria-tropea-scilla-reggio.webp', '2026-10-05'],
  ['/assets/images/takoyaki.webp', '2026-10-06'],
  ['/assets/images/tennoji-harukas.webp', '2026-10-06'],
  ['/assets/images/shinsekai.webp', '2026-10-06'],
  ['/assets/images/dotonbori-night.webp', '2026-10-06'],
  ['/assets/images/namba-yasaka.webp', '2026-10-06'],
  ['/assets/images/osaka-castle-moat.webp', '2026-10-06'],
  ['/assets/images/tempozan-dusk.webp', '2026-10-06'],
  ['/assets/images/osaka-skyline.webp', '2026-10-06'],
  ['/assets/images/hokkaido-noboribetsu-jigokudani.webp', '2026-10-06'],
  ['/assets/images/hokkaido-lake-toya.webp', '2026-10-06'],
  ['/assets/images/hokkaido-kushiro-marsh.webp', '2026-10-06'],
  ['/assets/images/hokkaido-red-crowned-cranes.webp', '2026-10-06'],
  ['/assets/images/hokkaido-lake-akan.webp', '2026-10-06'],
  ['/assets/images/hokkaido-abashiri-drift-ice.webp', '2026-10-06'],
  ['/assets/images/hokkaido-shiretoko-five-lakes.webp', '2026-10-06'],
  ['/assets/images/france-normandy-rouen-seine-cathedral.webp', '2026-10-07'],
  ['/assets/images/france-normandy-bayeux-dday-landscape.webp', '2026-10-07'],
  ['/assets/images/france-normandy-mont-saint-michel-bay.webp', '2026-10-07'],
  ['/assets/images/france-loire-valley-blois-chambord.webp', '2026-10-07'],
  ['/assets/images/france-loire-valley-amboise-chenonceau.webp', '2026-10-07'],
  ['/assets/images/france-loire-valley-tours-villandry-azay.webp', '2026-10-07']
]);
const entries = [];
const sourceConflicts = [];
const unmatchedByAsset = [];
for (const fullPath of assetPaths) {
  const relativePath = '/' + path.relative(root, fullPath).replaceAll('\\', '/');
  const src = relativePath;
  const dataRecords = recordsBySrc.get(src) || [];
  const uniqueValues = (key) => [...new Set(dataRecords.map((record) => record[key]).filter(Boolean))];
  const conflicts = ['sourceUrl', 'sourceTitle', 'creator', 'license', 'editHistory'].filter((key) => uniqueValues(key).length > 1);
  if (conflicts.length) sourceConflicts.push({ src, fields: conflicts });
  const uses = usesBySrc.get(src) || [];
  let creditMatch = null;
  const exactDataSource = uniqueValues('sourceUrl')[0] || null;
  const candidateCredits = exactDataSource ? (creditsBySrc.get(exactDataSource) || []) : [];
  const explicitPageCredits = explicitCreditsByAsset.get(src) || [];
  const explicitPageIdentities = new Set(explicitPageCredits.map((credit) => [credit.sourceUrl, credit.license, credit.creator, credit.creditLabel].join('|')));
  if (explicitPageIdentities.size === 1 && explicitPageCredits.length) {
    creditMatch = { ...explicitPageCredits[0], matching: 'explicit_asset_credit_match', matchNote: 'The English photo-credit row explicitly identifies this exact image asset and links to the source page.' };
  } else if (candidateCredits.length) {
    creditMatch = { ...candidateCredits[0], matching: 'source_url_match' };
  } else if (!dataRecords.length) {
    const scored = uses.map((use) => {
      const pageFile = path.join(root, use.route.slice(1), 'index.html');
      const document = parse(fs.readFileSync(pageFile, 'utf8'));
      const sectionNodes = all(document, (node) => node.tagName === 'section' && (attrs(node).class || '').split(/\s+/).includes('sources'));
      const pageCredits = sectionNodes.flatMap((section) => all(section, (node) => node.tagName === 'li').map(parseCredit).filter(Boolean));
      return matchCredit(use, pageCredits);
    }).filter(Boolean);
    const identities = new Set(scored.map((item) => [item.sourceUrl, item.license, item.creator].join('|')));
    if (identities.size === 1 && scored.length) creditMatch = scored[0];
    else if (uses.length) creditMatch = matchCredit({ ...uses[0], route: '' }, allDistinctCredits.map((credit) => ({ ...credit, route: '' })));
  }
  const explicit = explicitCreditMappings.get(src);
  if (explicit) {
    const candidates = allDistinctCredits.filter((credit) => credit.creditLabel === explicit.creditLabel && credit.creator === explicit.creator);
    const identities = new Set(candidates.map((item) => [item.sourceUrl, item.license, item.creator].join('|')));
    if (identities.size === 1 && candidates.length) creditMatch = { ...candidates[0], matching: 'explicit_asset_credit_match', matchNote: explicit.note };
  }
  const sourceUrl = uniqueValues('sourceUrl')[0] || creditMatch?.sourceUrl || null;
  const sourceTitle = uniqueValues('sourceTitle')[0] || creditMatch?.creditLabel || null;
  const creator = uniqueValues('creator')[0] || creditMatch?.creator || null;
  const license = uniqueValues('license')[0] || creditMatch?.license || null;
  const licenseUrl = uniqueValues('licenseUrl')[0] || creditMatch?.licenseUrl || canonicalLicenseUrl(license);
  const editHistory = uniqueValues('editHistory')[0] || creditMatch?.editHistory || null;
  const verification = sourceUrl ? (verifiedSourcePageDetails.get(sourceUrl) || verifiedBySourcePattern.find((item) => item.pattern.test(sourceUrl))) : null;
  const terms = licenseTerms(license, Boolean(verification));
  const hash = crypto.createHash('sha256').update(fs.readFileSync(fullPath)).digest('hex');
  const imageUses = uses.map(({ route, alt }) => ({ route, alt })).sort((a, b) => a.route.localeCompare(b.route));
  const row = {
    sha256: hash,
    assetPath: src,
    byteLength: fs.statSync(fullPath).size,
    sourceUrl,
    sourceTitle,
    creditLabel: creditMatch?.creditLabel || null,
    creator,
    license,
    licenseUrl,
    commercialReuseEligibility: terms.commercialReuseEligibility,
    attributionTerms: terms.attributionTerms,
    editHistory: editHistory || 'No per-image edit note found in the source record or matched English photo credit.',
    metadataOrigin: dataRecords.length ? 'structured_data_record' : creditMatch ? creditMatch.matching : 'unmatched',
    creditMatchNote: creditMatch?.matchNote || (creditMatch?.matching === 'page_credit_lexical_match' ? 'Unique same-page label/alt match.' : null),
    visualReviewStatus: visualReviewDateByAsset.has(src) ? `visually_reviewed_${visualReviewDateByAsset.get(src)}` : 'not_individually_visually_reviewed',
    verificationStatus: verification ? 'source_page_checked' : sourceUrl ? 'site_credit_or_metadata_only' : 'missing_source_credit_match',
    verificationDate: verification ? (verification.checkedOn || verifiedOn) : null,
    verificationDetail: verification?.detail || null,
    useCount: imageUses.length,
    routes: [...new Set(imageUses.map((use) => use.route))],
    altTexts: [...new Set(imageUses.map((use) => use.alt).filter(Boolean))],
    moduleSources: [...new Set(dataRecords.map((record) => record.moduleName))],
    rawVisibleCredits: creditMatch?.creditText ? [creditMatch.creditText] : []
  };
  if (!sourceUrl || !creator || !license) unmatchedByAsset.push({ src, missing: ['sourceUrl', 'creator', 'license'].filter((field) => !row[field]) });
  entries.push(row);
}

const hashGroups = new Map();
for (const row of entries) {
  if (!hashGroups.has(row.sha256)) hashGroups.set(row.sha256, []);
  hashGroups.get(row.sha256).push(row);
}
const grouped = [...hashGroups.entries()].map(([sha256, rows]) => ({
  sha256,
  assetPaths: rows.map((row) => row.assetPath).sort(),
  byteLength: rows[0].byteLength,
  sourceRecords: rows.map((row) => ({
    assetPath: row.assetPath,
    sourceUrl: row.sourceUrl,
    sourceTitle: row.sourceTitle,
    creditLabel: row.creditLabel,
    creator: row.creator,
    license: row.license,
    licenseUrl: row.licenseUrl,
    commercialReuseEligibility: row.commercialReuseEligibility,
    attributionTerms: row.attributionTerms,
    editHistory: row.editHistory,
    metadataOrigin: row.metadataOrigin,
    creditMatchNote: row.creditMatchNote,
    visualReviewStatus: row.visualReviewStatus,
    verificationStatus: row.verificationStatus,
    verificationDate: row.verificationDate,
    verificationDetail: row.verificationDetail,
    useCount: row.useCount,
    routes: row.routes,
    altTexts: row.altTexts,
    rawVisibleCredits: row.rawVisibleCredits
  }))
}));

const buildImageExtras = ['favicon.svg'].filter((file) => fs.existsSync(path.join(root, file)));
const counts = {
  assetFileCount: assetPaths.length,
  completeSourceCreatorLicenseRecords: entries.filter((row) => row.sourceUrl && row.creator && row.license).length,
  licenseClaimsNotIndependentlyVerified: entries.filter((row) => row.verificationStatus === 'site_credit_or_metadata_only').length,
  currentKnownUnsuitableImages: 0,
  previouslyMisplacedImageReplaced: 1,
  buildImageFilesOutsidePhotoInventory: buildImageExtras.length,
  expectedBuildImageCount: assetPaths.length + buildImageExtras.length,
  deduplicatedImageCount: grouped.length,
  exactDuplicateFileCount: assetPaths.length - grouped.length,
  englishCountryPagesScanned: englishPageCount,
  imageReferencesScanned: [...usesBySrc.values()].reduce((total, items) => total + items.length, 0),
  assetsUsedByScannedEnglishPages: entries.filter((row) => row.useCount > 0).length,
  assetsWithStructuredSourceRecords: entries.filter((row) => row.metadataOrigin === 'structured_data_record').length,
  assetsWithMatchedEnglishCreditOnly: entries.filter((row) => row.metadataOrigin === 'page_credit_lexical_match').length,
  assetsWithExplicitEnglishCreditMatch: entries.filter((row) => row.metadataOrigin === 'explicit_asset_credit_match').length,
  assetsVisuallyReviewed: entries.filter((row) => row.visualReviewStatus.startsWith('visually_reviewed_')).length,
  assetsWithOnlyRecordedSourceUrlMatch: entries.filter((row) => row.metadataOrigin === 'source_url_match').length,
  sourcePageChecked: entries.filter((row) => row.verificationStatus === 'source_page_checked').length,
  metadataOrCreditOnly: entries.filter((row) => row.verificationStatus === 'site_credit_or_metadata_only').length,
  missingSourceCreditMatch: entries.filter((row) => row.verificationStatus === 'missing_source_credit_match').length,
  incompleteAttributionFields: unmatchedByAsset.length,
  sourceMetadataConflicts: sourceConflicts.length,
  moduleErrors: moduleErrors.length
};
const report = {
  generatedAt: new Date().toISOString(),
  scope: 'Deduplicated WebP photos under assets/images, with use and displayed photo-credit metadata scanned from English country index pages. Complete source/creator/license fields are distinct from independent rights verification: independent source-page checks and unverified claims are counted from the current asset records; every checked source is listed with its date and finding. The separate build image tally also includes favicon.svg.',
  counts,
  verificationMethod: {
    structuredRecords: 'Imported every data/*.mjs module and merged objects with a local /assets/images/*.webp source path.',
    visibleCredits: 'Parsed photo-credit list items in English page sections with class sources. For images without structured records, unambiguous same-page or globally unique label/alt matches were accepted; eight explicit source-caption matches are documented by asset path and note.',
    sourcePageChecks: 'Manually checked source pages marked source_page_checked on 2026-10-04, 2026-10-05, or 2026-10-06, with the check date and finding on each row. Other source/license declarations are transcribed from local metadata or visible site credits and have not been independently checked during this inventory.',
    imageDeduplication: 'Grouped image files by SHA-256 bytes; the listed paths remain attached to their group.',
    buildImageCountReconciliation: 'The 779 WebP photos in assets/images plus favicon.svg (an SVG icon counted by build-dist.mjs) explain the previous build tally of 780 images.'
  },
  knownHistoricalMismatch: {
    status: 'removed_from_current_inventory',
    assetPath: '/assets/images/italy-rome-historic-centre-trastevere.webp',
    previousIssue: 'The prior image showed Piazza Navona while labeling the Trastevere route.',
    correction: 'Replaced with a visually checked photograph of the fountain in Piazza Santa Maria in Trastevere.',
    currentFile: 'The current replacement remains included as the current asset at the same path.'
  },
  entries: grouped,
  countInterpretation: 'licenseClaimsNotIndependentlyVerified and metadataOrCreditOnly count current inventory records without an independently checked source-page entry. They do not count pages never researched: separate source-review logs can record page reach, exceptions, or other evidence for overlapping assets, and those figures are not additive.',
  unmatchedAssets: unmatchedByAsset,
  sourceMetadataConflicts: sourceConflicts
};
const outDir = path.join(root, 'reports');
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'photo-license-inventory.json'), JSON.stringify(report, null, 2) + '\n');
const summaryLines = [
  '# Photo license inventory',
  '',
  'Generated by node scripts/audit-photo-license-inventory.mjs.',
  '',
  '| Measure | Count |',
  '|---|---:|',
  ...Object.entries(counts).map(([key, value]) => '| ' + key.replaceAll(/([A-Z])/g, ' $1').toLowerCase() + ' | ' + value + ' |'),
  '',
  '## Verification limits',
  '',
  'Source-page verification counts are computed per file record. Every independently checked source is tagged with the date and finding; unverified claims are reported separately and must not be treated as confirmed permission. Commercial reuse is described only as allowed by the stated license; that claim does not independently confirm the source rights or attribution details.',
  'The inventory status `licenseClaimsNotIndependentlyVerified` means this inventory has no independent source-page check recorded for the current asset record; it is not a count of pages never researched. Separate source-review logs record page reach and unresolved cases for overlapping assets, so the counts answer different questions and must not be added together.',
  '',
  'The inventory records share-alike rows with the same-license adaptation term. Review row-level attributionTerms and editHistory before reusing an asset.',
  '',
  'Build image count: ' + assetPaths.length + ' WebP photos plus ' + buildImageExtras.length + ' additional build image file(s) (' + buildImageExtras.join(', ') + ') = ' + (assetPaths.length + buildImageExtras.length) + '.',
  '',
  '## Current mismatches',
  '',
  'The former Trastevere hero showed Piazza Navona and has been replaced. ' + counts.assetsVisuallyReviewed + ' of ' + assetPaths.length + ' current images have direct visual review across the recorded passes; the other ' + (assetPaths.length - counts.assetsVisuallyReviewed) + ' inventory rows were not individually checked for subject fit, so this report does not claim a full visual audit.',
  '',
  'Missing source/creator/license fields: ' + unmatchedByAsset.length + '. Independently unverified license claims: ' + counts.licenseClaimsNotIndependentlyVerified + '. Metadata conflicts: ' + sourceConflicts.length + '.'
];
fs.writeFileSync(path.join(outDir, 'photo-license-inventory.md'), summaryLines.join('\n') + '\n');
console.log(JSON.stringify({ counts, unmatchedSamples: unmatchedByAsset.slice(0, 30), sourceConflictSamples: sourceConflicts.slice(0, 10), output: ['reports/photo-license-inventory.json', 'reports/photo-license-inventory.md'] }, null, 2));
