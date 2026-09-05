import {readFileSync,writeFileSync} from 'node:fs';
const works=JSON.parse(readFileSync('content/works.json','utf8').replace(/^\uFEFF/,''));
const quote=v=>typeof v==='boolean'?String(v):typeof v==='number'?String(v):"'"+String(v).replaceAll("'","''")+"'";
const keys=['id','title','year','medium','dimensions','notes','alt','image','position','published'];
writeFileSync('supabase/seed.sql',`-- Run once after schema.sql. Existing works are preserved.\ninsert into public.artworks (${keys.join(',')}) values\n`+works.map(w=>'('+keys.map(k=>quote(w[k])).join(',')+')').join(',\n')+'\non conflict(id) do nothing;\n');
