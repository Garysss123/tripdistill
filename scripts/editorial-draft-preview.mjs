// Local-only rendering of unregistered briefs. Does not write pages or change catalogs.
import fs from 'node:fs';
import path from 'node:path';
import {usaHubs} from '../data/usa-guides.mjs';
import {usaImageManifest} from '../data/usa-image-manifest.mjs';
import {renderNewEnglandEditorial} from './new-england-editorial.mjs';
import {renderChicagoEditorial} from './chicago-editorial.mjs';
const root=path.resolve(import.meta.dirname,'..');
const escape=s=>String(s).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');
const photo=(g,lazy=false)=>{const x=usaImageManifest[g.hubSlug+'/'+g.slug];return `<img src="${x.src}" alt="${escape(x.alt)}" width="1600" height="1066" ${lazy?'loading="lazy"':'fetchpriority="high"'}>`;};
const source=(u,t)=>`<li><a href="${escape(u)}" target="_blank" rel="noopener">${escape(t)}</a></li>`;
const credit=g=>{const x=usaImageManifest[g.hubSlug+'/'+g.slug];return `<li><a href="${escape(x.source)}">${escape(g.name)}</a> — ${escape(x.creator)}, ${escape(x.license)}. Resized, display-cropped and converted to WebP; no other material edits.</li>`;};
const card=g=>`<a class="us-card" href="${g.url}">${photo(g,true)}<div><h3>${escape(g.name)}</h3><p>${escape(g.intro)}</p><span>Read the local guide →</span></div></a>`;
const ad='<section class="section compact" aria-label="Advertisement"><div class="ad-slot" data-ad-slot><div><strong>Advertisement</strong><span>Responsive AdSense placement reserved</span></div></div></section>';
const drafts={'new-england':renderNewEnglandEditorial,chicago:renderChicagoEditorial};
export function editorialDraft(route){
 const parts=route.split('/').filter(Boolean);if(parts[0]!=='usa'||!drafts[parts[1]]||parts.length>3)return null;
 const h=usaHubs.find(h=>h.slug===parts[1]),g=parts[2]?h.guides.find(g=>g.slug===parts[2]):undefined;
 if(parts[2]&&!g)return null;
 const html=fs.readFileSync(path.join(root,'usa',h.slug,...(g?[g.slug]:[]),'index.html'),'utf8');
 const begin=html.indexOf('</nav>',html.indexOf('<main'))+6,end=html.indexOf('<p class="us-review">',begin);
 if(begin<6||end<begin)throw Error('Draft preview shell boundary changed');
 const body=drafts[h.slug]({h,g,photo,credit,card,source,ad});
 const draftCss=path.join(root,'scripts',h.slug+'-editorial.css');
 const css=fs.readFileSync(fs.existsSync(draftCss)?draftCss:path.join(root,'css',h.slug+'-editorial.css'),'utf8');
 return (html.slice(0,begin)+body+html.slice(end)).replace('</head>',`<meta name="robots" content="noindex,nofollow"><style>${css}</style></head>`);
}
