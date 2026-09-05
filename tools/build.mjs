import {cp,mkdir,rm} from 'node:fs/promises';
import {resolve} from 'node:path';
const out=resolve('dist');if(out!==resolve(process.cwd(),'dist'))throw Error('Invalid build target');
await rm(out,{recursive:true,force:true});await mkdir(out,{recursive:true});
for(const file of ['index.html','styles.css','script.js','privacy.html','robots.txt','assets','content','studio'])await cp(file,`${out}/${file}`,{recursive:true});
console.log('Built public site in dist/');
