import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dataDir = path.dirname(fileURLToPath(import.meta.url));
const commonsImages = JSON.parse(fs.readFileSync(path.join(dataDir, 'spain', 'images.json'), 'utf8'));

const sourcePageReviews = {
  madrid: { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies Sheila1988, a 4 June 2023 photograph, 5,184 x 3,888 source dimensions, and CC BY-SA 4.0. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the Royal Palace against Madrid rooftops; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' },
  'catalonia-barcelona': { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies Felvalen, an 8 June 2019 photograph, 4,288 x 2,848 source dimensions, and CC BY-SA 4.0. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the Sagrada Familia above Barcelona; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' },
  andalusia: { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies Mervat, a 7 March 2018 photograph, 4,032 x 3,024 source dimensions, and CC BY-SA 4.0. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the Alcazar of Seville arches and tiled courtyard; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' },
  'basque-country': { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies Zinneke, a 28 July 2016 photograph, 5,184 x 3,456 source dimensions, and CC BY-SA 3.0. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the Maman sculpture outside the Guggenheim Museum Bilbao; the resized, center-cropped derivative matches the page subject. This records the photographic page declaration and image match, not separate rights clearance for depicted works or independent uploader-authority/chain-of-title clearance.' },
  valencia: { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies ChiralJon, a 30 September 2022 photograph, 3,648 x 2,736 source dimensions, and CC BY 2.0; the page also records Flickr review confirmation. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the City of Arts and Sciences across its reflecting pool; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' },
  'balearic-islands': { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies Matthias Sussen, a 26 March 2018 photograph, 5,593 x 3,729 source dimensions, and CC BY-SA 4.0. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the Nus de sa Corbata road in the Serra de Tramuntana; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' },
  'canary-islands': { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies dronepicr, a 22 April 2019 photograph, 4,160 x 2,768 source dimensions, and CC BY 2.0; the page records Flickr review confirmation. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows the volcanic slopes and summit of Teide; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' },
  'galicia-asturias': { checkedOn: '2026-10-20', detail: 'The exact Wikimedia Commons file page identifies Sudzie, a 28 June 2012 photograph, 1,792 x 1,232 source dimensions, and CC BY-SA 4.0. The local 1,600 x 1,066 WebP was inspected on 2026-10-20 and shows Santiago de Compostela Cathedral framed by trees from Alameda Park; the resized, center-cropped derivative matches the page subject. This records the page declaration and image match, not independent uploader-authority or rights-chain clearance.' }
};

export const spainImageManifest = Object.fromEntries(
  Object.entries(commonsImages).map(([slug, image]) => [slug, {
    ...image,
    editNote: image.derivative,
    sourceVerification: sourcePageReviews[slug],
    visualReviewDate: '2026-10-20'
  }])
);
