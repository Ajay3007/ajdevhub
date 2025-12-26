document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');
  toggle && toggle.addEventListener('click', ()=>{
    if(nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });

  // Smooth scroll for internal links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', e=>{
      const id = a.getAttribute('href');
      if(id.length>1){
        e.preventDefault();
        const el = document.querySelector(id);
        el && el.scrollIntoView({behavior:'smooth'});
      }
    })
  })

  // Open external links in new tab and add noopener
  document.querySelectorAll('a[href^="http"]').forEach(a=>{
    try {
      const url = new URL(a.href);
      if (url.host !== location.host) {
        a.setAttribute('target','_blank');
        a.setAttribute('rel','noopener noreferrer');
        a.classList.add('external');
        if (!a.title) a.title = 'Opens in a new tab';
      }
    } catch(e){ /* ignore invalid URLs */ }
  })
});
