/* The single startup entry for every page. Dependencies are local and ordered. */
(() => {
  'use strict';
  const loaded = new Map();
  function loadScript(src) {
    if (!loaded.has(src)) loaded.set(src, new Promise((resolve, reject) => {
      const script = document.createElement('script'); script.src = src;
      script.onload = resolve; script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
      document.head.append(script);
    }));
    return loaded.get(src);
  }
  window.UY = { loadScript, notify(message) {
    document.querySelector('.uy-notice')?.remove();
    const notice = document.createElement('div'); notice.className = 'uy-notice'; notice.setAttribute('role', 'status');
    notice.append(document.createTextNode(message));
    const close = document.createElement('button'); close.type = 'button'; close.textContent = '×'; close.setAttribute('aria-label', 'Fechar aviso'); close.onclick = () => notice.remove();
    notice.append(close); document.body.append(notice); setTimeout(() => notice.remove(), 8000);
  }};
  async function fragment(id, url) {
    const target = document.getElementById(id); if (!target) return;
    try {
      const response = await fetch(url); if (!response.ok) throw new Error(url);
      target.innerHTML = await response.text();
    } catch {
      target.textContent = 'Não foi possível carregar esta seção. Recarregue a página.';
    }
  }
  function missingImages() {
    document.addEventListener('error', event => {
      const image = event.target;
      if (image instanceof HTMLImageElement && !image.src.endsWith('/assets/missing-image.svg')) {
        image.dataset.originalSrc = image.getAttribute('src'); image.classList.add('uy-image-missing'); image.src = 'assets/missing-image.svg';
      }
    }, true);
    // Some image errors can happen before deferred scripts execute.
    document.querySelectorAll('img').forEach(image => {
      if (image.complete && image.naturalWidth === 0 && image.getAttribute('src')) image.dispatchEvent(new Event('error'));
    });
  }
  async function start() {
    missingImages();
    await loadScript('assets/vendor/jquery.min.js');
    await loadScript('assets/vendor/bootstrap.bundle.min.js');
    await Promise.all([fragment('header','header.html'),fragment('footer','footer.html'),fragment('sidebar-container','blog-sidebar.html')]);
    document.querySelectorAll('[data-current-year]').forEach(e => e.textContent = new Date().getFullYear());
    const page = decodeURIComponent(location.pathname.split('/').pop()) || 'index.html';
    document.querySelectorAll('#header a[href]').forEach(a => { if (a.getAttribute('href') === page) a.setAttribute('aria-current', 'page'); });
    {
      const skip = document.createElement('a'); skip.href='#uy-content'; skip.className='uy-skip'; skip.textContent='Ir para o conteúdo';document.body.prepend(skip);
      const content = document.querySelector('main, #header + section, #header + div'); if(content && content.id !== 'footer')content.id ||= 'uy-content';
    }
    await loadScript('js/auth.js');
    await window.KyokushinLoginSystem.init();
    await loadScript('js/menu-access-control.js');
    await loadScript('lib/wow/wow.min.js');
    await loadScript('lib/easing/easing.min.js');
    await loadScript('lib/waypoints/waypoints.min.js');
    await loadScript('lib/counterup/counterup.min.js');
    await loadScript('lib/owlcarousel/owl.carousel.min.js');
    if (document.querySelector('.date,.time')) {
      await loadScript('lib/tempusdominus/js/moment.min.js');
      await loadScript('lib/tempusdominus/js/moment-timezone.min.js');
      await loadScript('lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js');
    }
    await loadScript('js/main.js');
    const response = await fetch('js/pages.json'); if (!response.ok) throw new Error('Manifesto de páginas indisponível.');
    const pages = await response.json();
    const scripts = pages[page]?.scripts || [];
    if (['reijisaho.html','tameshiware.html','dojokunpage.html','graduacaoheikokai.html','graduacaowkb.html'].includes(page)) {
      await loadScript('assets/vendor/popper.min.js'); await loadScript('assets/vendor/tippy.min.js');
    }
    if(page==='contact.html')await loadScript('assets/vendor/emailjs.min.js');
    for (const src of scripts) await loadScript(src);
    await window.UY.initBlogFeed?.();
    window.MenuAccessControl.addLockIcons();
    document.dispatchEvent(new Event('site:ready'));
    {
      await loadScript('js/story-artwork.js'); await loadScript('js/stories.js'); await window.UYStories.init();
    }
    window.UY.ready = true;
  }
  start().catch(error => { console.error(error); window.UY.notify('Não foi possível iniciar o site. Recarregue a página.'); });
})();
