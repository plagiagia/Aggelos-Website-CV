const $ = s => document.querySelector(s);
let works = [], current = 0, opener;
const viewer = $('#viewer');
const el = (tag, text, cls) => { const node = document.createElement(tag); if(text) node.textContent=text; if(cls) node.className=cls; return node; };
async function loadWorks(){
 try { const r=await fetch('/api/works'); if(!r.ok) throw Error(); works=await r.json(); }
 catch { $('#gallery').textContent='The gallery could not load. Please refresh, or view the complete portfolio below.'; return; }
 const featured=works.find(w=>w.id==='p6')||works[0];
 if(featured){const a=$('.opening-art a'),img=a.querySelector('img');a.href='#work='+encodeURIComponent(featured.id);a.setAttribute('aria-label','View '+featured.title);img.src=featured.image;img.alt=featured.alt||featured.title;$('.opening-art figcaption').replaceChildren(el('span',featured.title+', '+featured.year),el('span',featured.medium));}else $('.opening-art').hidden=true;
 $('#gallery').replaceChildren(); $('#count').textContent=String(works.length).padStart(2,'0');
 works.forEach((w,i)=>{const f=el('article',null,'artwork'), a=el('a'), img=el('img');a.href='#work='+encodeURIComponent(w.id);img.src=w.image;img.alt=w.alt||w.title;img.loading='lazy';img.decoding='async';const cap=el('div',null,'art-caption'),n=el('span',String(i+1).padStart(2,'0'),'art-number'), info=el('div');info.append(el('h3',w.title),el('p',`${w.year} · ${w.medium}`));cap.append(n,info);a.append(img,cap);a.addEventListener('click',()=>opener=a);f.append(a);$('#gallery').append(f);});
 if(!works.length) $('#gallery').textContent='New work will be shared here soon.';
 syncHash();
}
function showWork(i){current=(i+works.length)%works.length;const w=works[current];$('#viewer-image').src=w.image;$('#viewer-image').alt=w.alt||w.title;$('#viewer-title').textContent=w.title;$('#viewer-meta').textContent=[w.year,w.medium,w.dimensions].filter(Boolean).join(' · ');$('#viewer-notes').textContent=w.notes;$('#viewer-count').textContent=`${current+1} / ${works.length}`;if(!viewer.open)viewer.showModal();}
function syncHash(){const match=location.hash.match(/^#work=(.+)$/);if(match){const i=works.findIndex(w=>w.id===match[1]);if(i>=0)showWork(i);}else if(viewer.open)viewer.close();}
function closeViewer(){viewer.close();if(location.hash.startsWith('#work='))history.replaceState(null,'','#works');opener?.focus();}
$('#close-viewer').onclick=closeViewer;viewer.addEventListener('cancel',e=>{e.preventDefault();closeViewer();});
$('#previous').onclick=()=>{location.hash='work='+works[(current-1+works.length)%works.length].id;};$('#next').onclick=()=>{location.hash='work='+works[(current+1)%works.length].id;};
window.addEventListener('hashchange',syncHash);document.addEventListener('keydown',e=>{if(!viewer.open)return;if(e.key==='ArrowLeft')$('#previous').click();if(e.key==='ArrowRight')$('#next').click();});
$('#enquire').onclick=()=>{$('[name=message]').value=`Hello Aggelos, I would like to enquire about “${works[current].title}” (${works[current].year}).\n\n`;closeViewer();setTimeout(()=>$('[name=name]').focus({preventScroll:true}),100);};
for(const mode of ['gallery','index'])$('#'+mode+'-view').onclick=()=>{$('#gallery').classList.toggle('index',mode==='index');for(const m of ['gallery','index']){$('#'+m+'-view').classList.toggle('active',m===mode);$('#'+m+'-view').setAttribute('aria-pressed',String(m===mode));}};
$('#year').textContent=new Date().getFullYear();
$('#contact-form').addEventListener('submit',async e=>{e.preventDefault();const form=e.target,button=form.querySelector('button'),status=$('#contact-status');button.disabled=true;status.textContent='Sending your enquiry…';status.className='';try{const r=await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form)))});const result=await r.json();if(!r.ok)throw Error(result.error||'Your enquiry could not be sent. Please email Aggelos directly.');status.textContent='Thank you. Your enquiry has been received.';form.reset();}catch(err){status.textContent=err.message;status.className='error';}finally{button.disabled=false;}});
loadWorks();
