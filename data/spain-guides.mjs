import fs from 'node:fs';
import path from 'node:path';
const base=path.resolve(import.meta.dirname,'spain');
const order=['madrid','catalonia-barcelona','andalusia','basque-country','valencia','balearic-islands','canary-islands','galicia-asturias'];
export const spainClusters=order.map(slug=>JSON.parse(fs.readFileSync(path.join(base,slug+'.json'),'utf8').replace(/^\uFEFF/,'')));
export const spainGuides=spainClusters.flatMap(cluster=>cluster.guides.map(guide=>({...guide,url:'/spain/'+cluster.slug+'/'+guide.slug+'/',hubSlug:cluster.slug,hubName:cluster.name})));
export const spainRoutes=['/spain/',...spainClusters.map(x=>'/spain/'+x.slug+'/'),...spainGuides.map(x=>x.url)];
