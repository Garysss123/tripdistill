// Read-only patch preparation. Apply the emitted patch with apply_patch, then verify its SHA-256.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root=path.resolve(import.meta.dirname,'..');
const file=process.argv.find(x=>x.startsWith('--file='))?.slice(7);
if(!file)throw Error('A reviewed batch file is required');
const absolute=path.resolve(root,file);
if(!absolute.startsWith(path.join(root,'data','i18n','reviewed')+path.sep))throw Error('Not a reviewed translation file');
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const replace=(text,from,to)=>{if(!from||!to)throw Error('Empty polish replacement');return text.split(to).map(part=>part.replaceAll(from,to)).join(to);};
const original=fs.readFileSync(absolute,'utf8');
const expected=process.argv.find(x=>x.startsWith('--verify='))?.slice(9);
if(expected){if(sha(original)!==expected)throw Error('Applied content does not match the prepared patch');console.log(JSON.stringify({file,verified:true,sha256:expected}));}
else{
 const planName=process.argv.find(x=>x.startsWith('--plan='))?.slice(7)||'translation-polish-20260911.json';
 if(path.basename(planName)!==planName)throw Error('Polish plans must be in scripts');
 const plan=JSON.parse(fs.readFileSync(path.join(root,'scripts',planName),'utf8'));
 const pairs=plan[file];if(!pairs)throw Error('No explicit polish plan for '+file);
 let probe=original;const missing=[];
 for(const[a,b]of pairs){if(probe.includes(a))probe=replace(probe,a,b);else if(!probe.includes(b))missing.push([a,b]);}
 if(missing.length)throw Error('Unmatched polish patterns; refusing a silent no-op: '+JSON.stringify(missing));
 const lines=original.split('\n');let changes=0;
 const revised=lines.map(line=>{let next=line;if(/^\s*".+": "/.test(line))for(const[a,b]of pairs)next=replace(next,a,b);if(next!==line)changes++;return next;});
 const output=revised.join('\n');JSON.parse(output);
 const hunks=lines.flatMap((line,i)=>line===revised[i]?[]:['@@','-'+line,'+'+revised[i]]);
 console.log(JSON.stringify({file,changes,unmatched:missing,sha256:sha(output),patch:hunks.length?'*** Begin Patch\n*** Update File: '+absolute.replaceAll('\\','/')+'\n'+hunks.join('\n')+'\n*** End Patch':null}));
}
