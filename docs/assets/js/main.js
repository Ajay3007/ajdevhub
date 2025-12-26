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

  // Open downloads and mirrored source files (served under /src/ or /assets/pdfs/) in new tab
  document.querySelectorAll('a[href]').forEach(a=>{
    const href = a.getAttribute('href');
    if(!href) return;
    // Patterns for site-served source files and PDFs
    const matchSrc = href.match(/(^|\/)src\//) || href.match(/\/assets\/pdfs\//);
    if(matchSrc){
      a.setAttribute('target','_blank');
      a.setAttribute('rel','noopener noreferrer');
      a.classList.add('external');
      if(!a.title) a.title = 'Opens in a new tab';
    }
  })

  // Theme toggle (prefers saved choice, or system preference)
  const themeToggle = document.getElementById('theme-toggle');
  const root = document.documentElement;
  const saved = localStorage.getItem('ajdevhub-theme');
  const applyTheme = (t)=>{ if(t === 'dark') root.setAttribute('data-theme','dark'); else root.removeAttribute('data-theme'); };
  if(saved) applyTheme(saved);
  else {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    applyTheme(prefersDark ? 'dark' : 'light');
  }
  themeToggle && themeToggle.addEventListener('click', ()=>{
    const isDark = root.getAttribute('data-theme') === 'dark';
    const next = isDark ? 'light' : 'dark';
    applyTheme(next);
    localStorage.setItem('ajdevhub-theme', next);
  })

  // Replace nav card emoji icons with inline SVGs for crisp UI (if any nav cards use img with data-icon attr).
  // Use the base path exposed by Jekyll in window._SITE_BASE so this JS file doesn't need Liquid templating.
  const ICON_BASE = (window._SITE_BASE || '') + '/assets/icons/';
  document.querySelectorAll('.nav-card[data-icon]').forEach(card=>{
    const name = card.getAttribute('data-icon');
    const url = (new URL(`${ICON_BASE}${name}.svg`, location.href)).href;
    const existing = card.querySelector('img.icon');
    if(existing){
      // Ensure any existing img has a correct src (fixes cases where Liquid was left raw)
      existing.src = url;
      existing.alt = name;
    } else {
      const img = document.createElement('img');
      img.src = url;
      img.className = 'icon';
      img.alt = name;
      card.insertBefore(img, card.firstChild);
    }
  })

  // Dropdown toggle on touch / small screens: prevent navigation and show submenu
  document.querySelectorAll('.drop-toggle').forEach(btn=>{
    btn.addEventListener('click', e=>{
      const parent = btn.closest('.nav-item');
      if(!parent) return;
      if(window.innerWidth <= 720){
        e.preventDefault();
        parent.classList.toggle('open');
      }
    })
  })
});
