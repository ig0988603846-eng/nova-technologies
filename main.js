const $=s=>document.querySelector(s),$$=s=>document.querySelectorAll(s),R=document.documentElement;
const get=k=>{try{return localStorage.getItem(k)}catch(e){return null}},put=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const I=['<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>','<path d="M12 3 3 8l9 5 9-5-9-5zM3 13l9 5 9-5"/>','<path d="M4 20V10M10 20V4M16 20v-7M2 20h20"/>','<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h3"/>','<path d="M4 20l4-1L19 8l-3-3L5 16l-1 4zM14 7l3 3"/>','<path d="m8 8-4 4 4 4M16 8l4 4-4 4M13.5 5l-3 14"/>'];
const D=['Fast, secure, search-ready websites that present your brand with clarity.','Scalable web applications built around your workflows and users.','Integrated systems for operations, records, inventory and reporting.','Reliable point-of-sale tools for sales, stock and daily reporting.','Clear, accessible interfaces designed around real user needs.','Software tailored precisely to the way your business operates.'];
const P=[['Discover','We learn your goals, users and constraints.'],['Design','We shape structure and interface before building.'],['Build','We develop, test and refine with regular reviews.'],['Launch &amp; Support','We deploy carefully and stay available afterwards.']];
const W=[['Tailored solutions','Built around your business, not a template.'],['Clear communication','Straightforward updates at every stage.'],['Quality craftsmanship','Clean, maintainable, carefully built work.'],['Dependable support','Help remains available after launch.']];
$('#nv').innerHTML=$('#mob').innerHTML=['home','about','vision','services','work','process','why','contact'].map(s=>`<a href="#${s}" data-t="${s}"></a>`).join('');
$('#sv').innerHTML=I.map((p,i)=>`<div class="si"><div class="ic"><svg viewBox="0 0 24 24">${p}</svg></div><div><h3 data-t="s${i+1}"></h3><p dir="auto">${D[i]}</p></div></div>`).join('');
$('#wk').innerHTML=[[3,'0%'],[4,'50%'],[2,'100%']].map(([n,p])=>`<div class="wc"><div class="mock" style="--p:${p}"></div><div class="wb"><span class="pill" data-t="demo"></span><h3 data-t="s${n}"></h3></div></div>`).join('');
$('#pr').innerHTML=P.map((x,i)=>`<div class="ps" data-n="0${i+1}"><h3 dir="auto">${x[0]}</h3><p dir="auto">${x[1]}</p></div>`).join('');
$('#wy').innerHTML=W.map(x=>`<div><h3 dir="auto">${x[0]}</h3><p dir="auto">${x[1]}</p></div>`).join('');
const phoneDigits=C.phone.replace(/\D/g,'');
const internationalPhone=phoneDigits.startsWith('0')?'+251'+phoneDigits.slice(1):'+'+phoneDigits;
const emailSubject=encodeURIComponent('Website inquiry - NOVA TECHNOLOGIES');
const emailBody=encodeURIComponent('Hello NOVA TECHNOLOGIES,\\n\\nI would like to ask about your services.\\n\\n');
$('#cl').innerHTML=[
 ['email','mailto:'+C.mail+'?subject='+emailSubject+'&body='+emailBody,C.mail,'Send an email to NOVA TECHNOLOGIES'],
 ['phone','tel:'+internationalPhone,C.phone,'Call NOVA TECHNOLOGIES'],
 ['Instagram','https://instagram.com/'+C.ig,'@'+C.ig,'Open NOVA TECHNOLOGIES on Instagram'],
 ['TikTok','https://www.tiktok.com/@'+C.tt,'@'+C.tt,'Open NOVA TECHNOLOGIES on TikTok'],
 ['Telegram','https://t.me/'+C.tg,'@'+C.tg,'Open NOVA TECHNOLOGIES on Telegram']
] .map(([k,h,v,label])=>{const content=`<b>${k}</b><span>${v}</span>`;return (k==='phone'||k==='email')?`<a href="${h}" aria-label="${label}" title="${label}">${content}<span aria-hidden="true">↗</span></a>`:`<div class="social-row">${content}</div>`}).join('');
$('#lg').innerHTML=Object.keys(N).map(k=>`<button data-l="${k}">${N[k]}</button>`).join('');
$('#ft').textContent='© '+new Date().getFullYear()+' NOVA TECHNOLOGIES. All rights reserved.';
function lang(l){if(!L[l])l='en';const a=L[l].split('|'),e=L.en.split('|'),t={};K.forEach((k,i)=>t[k]=a[i]||e[i]);
$$('[data-t]').forEach(x=>x.textContent=t[x.dataset.t]);R.lang=l;R.dir=l=='ar'?'rtl':'ltr';
$$('#lg button').forEach(b=>b.setAttribute('aria-checked',b.dataset.l==l));put('nova-lang',l);document.title='NOVA TECHNOLOGIES — '+t.slogan}
function theme(m){R.dataset.theme='light';$$('#th button').forEach(b=>b.setAttribute('aria-checked',b.dataset.m=='light'));put('nova-theme','light')}
$('#kb').onclick=()=>{const o=$('#mn').classList.toggle('o');$('#kb').setAttribute('aria-expanded',o)};
document.onclick=e=>{if(!e.target.closest('.st'))$('#mn').classList.remove('o')};
document.onkeydown=e=>{if(e.key=='Escape'){$('#mn').classList.remove('o');$('#mob').classList.remove('o')}};
$('#hm').onclick=()=>$('#mob').classList.toggle('o');
$('#mob').onclick=e=>{if(e.target.closest('a'))$('#mob').classList.remove('o')};
$('#lg').onclick=e=>{const b=e.target.closest('button');if(b)lang(b.dataset.l)};
$('#th').onclick=e=>{const b=e.target.closest('button');if(b)theme(b.dataset.m)};
theme('light');lang(get('nova-lang')||'en');
