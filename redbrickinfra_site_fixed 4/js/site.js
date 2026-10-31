
(function(){
 const D=window.REDBRICK_DATA||{};
 const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
 const nested=/\/(about|services|projects|contact-us)(\/index\.html|\/)?$/.test(location.pathname);
 const asset=p=>nested?'../'+p:p;
 const menu=$('.menu-btn'), nav=$('.nav'); if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
 const header=$('.site-header'); if(header){ const update=()=>header.classList.toggle('sticky',scrollY>130); addEventListener('scroll',update,{passive:true}); update(); }
 $$('[data-faq]').forEach(b=>b.addEventListener('click',()=>{ const item=b.closest('.faq-item'); const open=item.classList.toggle('open'); b.setAttribute('aria-expanded',open); b.querySelector('.faq-icon').textContent=open?'−':'+';}));
 function renderServices(){const el=$('#services-grid'); if(!el||!D.services)return; el.innerHTML=D.services.map(s=>`<article class="service-card"><img src="${asset(s.image)}" alt="${s.title}" loading="lazy"><div class="service-card-body"><h3>${s.title}</h3><p>${s.desc}</p><a class="card-link" href="services/index.html">Learn more →</a></div></article>`).join('');}
 function renderPackages(){const el=$('#package-grid'); if(!el||!D.packages)return; el.innerHTML=D.packages.map((p,pi)=>`<article class="package-card"><div class="package-top"><h3>${p.name}</h3><div class="package-price"><strong>${p.price}</strong> / sq. ft. <span>(Including GST)</span></div><div class="package-tag">${p.tag}</div></div>${Object.entries(p.features).map(([k,arr],fi)=>`<div class="package-feature"><button class="package-toggle" aria-expanded="false"><span>${k}</span><span class="plus">+</span></button><div class="package-detail"><div><ul>${arr.map(x=>`<li>${x}</li>`).join('')}</ul></div></div></div>`).join('')}</article>`).join(''); $$('.package-toggle',el).forEach(b=>b.addEventListener('click',()=>{const f=b.closest('.package-feature');const o=f.classList.toggle('open');b.setAttribute('aria-expanded',o)}));}
 function renderTestimonials(){const el=$('#testimonial-grid'); if(!el||!D.testimonials)return; el.innerHTML=D.testimonials.map(t=>`<article class="testimonial"><div class="stars">★★★★★</div><p>${t.text}</p><div class="person"><strong>${t.name}</strong><span>${t.place}</span></div></article>`).join('');}
 function renderWorks(){const el=$('#works-grid'); if(!el||!D.latestWorks)return; el.innerHTML=D.latestWorks.map((src,i)=>`<figure class="work" data-lightbox="${asset(src)}"><img src="${asset(src)}" alt="Red Brick Infra project work ${i+1}" loading="lazy"></figure>`).join('');}
 function renderProjects(){const el=$('#project-grid'); if(!el||!D.projects)return; el.innerHTML=D.projects.map((src,i)=>`<figure class="project-card" data-lightbox="${asset(src)}"><img src="${asset(src)}" alt="Red Brick Infra project ${i+1}" loading="lazy"><figcaption class="caption">Project work ${String(i+1).padStart(2,'0')}</figcaption></figure>`).join('');}
 function renderAbout(){const el=$('#about-gallery'); if(!el||!D.aboutGallery)return; el.innerHTML=D.aboutGallery.slice(0,8).map((src,i)=>`<figure class="project-card" data-lightbox="${asset(src)}"><img src="${asset(src)}" alt="Red Brick Infra portfolio ${i+1}" loading="lazy"></figure>`).join('');}
 renderServices(); renderPackages(); renderTestimonials(); renderWorks(); renderProjects(); renderAbout();
 const lb=$('.lightbox'); if(lb){document.addEventListener('click',e=>{const t=e.target.closest('[data-lightbox]'); if(t){$('#lightbox-img').src=t.dataset.lightbox;lb.classList.add('show');} if(e.target.matches('.lightbox,.lightbox-close'))lb.classList.remove('show');}); document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('show')})}
 const form=$('#quote-form'); if(form) form.addEventListener('submit',e=>{e.preventDefault(); const fd=new FormData(form); const msg=`Hello Red Brick Infra, I would like a construction consultation.%0A%0AName: ${encodeURIComponent(fd.get('name')||'')}%0APhone: ${encodeURIComponent(fd.get('phone')||'')}%0AProject: ${encodeURIComponent(fd.get('project')||'')}%0ALocation: ${encodeURIComponent(fd.get('location')||'')}%0AMessage: ${encodeURIComponent(fd.get('message')||'')}`; window.open('https://wa.me/919848527399?text='+msg,'_blank','noopener');});

 // Red Brick Infra project enquiry popup (shared across all pages)
 const popupImages = [
   asset('assets/images/project-01.webp'),
   asset('assets/images/project-02.webp'),
   asset('assets/images/project-03.webp'),
   asset('assets/images/project-04.webp'),
   asset('assets/images/project-05.webp'),
   asset('assets/images/project-06.webp')
 ];
 const popup = document.createElement('div');
 popup.className = 'rb-popup-overlay';
 popup.setAttribute('aria-hidden','true');
 popup.innerHTML = `
   <section class="rb-popup" role="dialog" aria-modal="true" aria-labelledby="rb-popup-title">
     <button class="rb-popup-close" type="button" aria-label="Close enquiry form">×</button>
     <div class="rb-popup-visual">
       ${popupImages.map((src,i)=>`<img class="rb-popup-slide ${i===0?'is-active':''}" src="${src}" alt="Red Brick Infra construction project ${i+1}" ${i===0?'':'loading="lazy"'}>`).join('')}
       <div class="rb-popup-visual-copy">
         <p class="rb-popup-kicker">RED BRICK INFRA · BUILT WITH CARE</p>
         <h3>Good projects start with a conversation.</h3>
         <p>From planning to handover, let's build with confidence.</p>
         <div class="rb-popup-dots" aria-hidden="true">${popupImages.map((_,i)=>`<span class="rb-popup-dot ${i===0?'is-active':''}"></span>`).join('')}</div>
       </div>
     </div>
     <div class="rb-popup-content">
       <p class="rb-popup-eyebrow">PROJECT ENQUIRY</p>
       <h2 id="rb-popup-title">Let's talk about your project.</h2>
       <p class="rb-popup-intro">Share a few details and our team will get in touch to understand your plans.</p>
       <form class="rb-popup-form">
         <input name="name" type="text" placeholder="Your Name" autocomplete="name" required>
         <input name="phone" type="tel" placeholder="+91 Mobile Number" inputmode="tel" autocomplete="tel" pattern="[0-9+() -]{10,16}" required>
         <select name="city" required>
           <option value="">Select your city</option>
           <option>Hyderabad</option><option>Other</option>
         </select>
         <button class="rb-popup-submit" type="submit">Get in Touch <span aria-hidden="true">→</span></button>
         <p class="rb-popup-privacy">By submitting, you agree to be contacted by Red Brick Infra.</p>
       </form>
     </div>
   </section>`;
 document.body.appendChild(popup);
 const popupSlides = $$('.rb-popup-slide',popup);
 const popupDots = $$('.rb-popup-dot',popup);
 let popupSlideIndex = 0;
 const popupSlider = setInterval(()=>{
   popupSlides[popupSlideIndex].classList.remove('is-active');
   popupDots[popupSlideIndex].classList.remove('is-active');
   popupSlideIndex = (popupSlideIndex+1)%popupSlides.length;
   popupSlides[popupSlideIndex].classList.add('is-active');
   popupDots[popupSlideIndex].classList.add('is-active');
 },2000);
 function closeProjectPopup(){
   popup.classList.remove('is-visible');
   popup.setAttribute('aria-hidden','true');
   try{sessionStorage.setItem('rbProjectPopupSeen','1')}catch(e){}
 }
 popup.querySelector('.rb-popup-close').addEventListener('click',closeProjectPopup);
 popup.addEventListener('click',e=>{if(e.target===popup)closeProjectPopup()});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&popup.classList.contains('is-visible'))closeProjectPopup()});
 popup.querySelector('form').addEventListener('submit',e=>{
   e.preventDefault();
   const fd=new FormData(e.currentTarget);
   const message=[
     'Hello Red Brick Infra, I would like to discuss a project.',
     'Name: '+fd.get('name'),
     'Phone: '+fd.get('phone'),
     'City: '+fd.get('city')
   ].join('\n');
   window.open('https://wa.me/919848527399?text='+encodeURIComponent(message),'_blank','noopener');
   closeProjectPopup();
 });
 let popupSeen=false;
 try{popupSeen=sessionStorage.getItem('rbProjectPopupSeen')==='1'}catch(e){}
 if(!popupSeen){setTimeout(()=>{popup.classList.add('is-visible');popup.setAttribute('aria-hidden','false')},9000)}

})();
