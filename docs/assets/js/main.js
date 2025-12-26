document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('main-nav');

  navToggle?.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'block' ? '' : 'block';
  });

  const root = document.documentElement;
  const saved = localStorage.getItem('ajdevhub-theme');

  if (saved === 'dark') root.setAttribute('data-theme','dark');

  document.getElementById('theme-toggle')?.addEventListener('click', () => {
    const dark = root.getAttribute('data-theme') === 'dark';
    root.toggleAttribute('data-theme', !dark);
    localStorage.setItem('ajdevhub-theme', dark ? 'light' : 'dark');
  });

  document.querySelectorAll('a[href^="http"]').forEach(a=>{
    if (new URL(a.href).host !== location.host){
      a.target='_blank';
      a.rel='noopener noreferrer';
    }
  });
});
