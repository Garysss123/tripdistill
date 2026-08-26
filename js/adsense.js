(function () {
  'use strict';
  const client = document.documentElement.dataset.adsenseClient || 'ca-pub-1732059148394592';
  const scriptUrl = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=' + encodeURIComponent(client);

  if (!document.querySelector('script[data-tripdistill-adsense]')) {
    const script = document.createElement('script');
    script.async = true;
    script.crossOrigin = 'anonymous';
    script.src = scriptUrl;
    script.dataset.tripdistillAdsense = '';
    document.head.appendChild(script);
  }

  function initializeManualSlots() {
    document.querySelectorAll('.ad-slot[data-ad-slot]').forEach(function (host) {
      const slot = host.dataset.adSlot.trim();
      if (!/^\d{6,}$/.test(slot) || host.dataset.adInitialized === 'true') return;
      host.innerHTML = '';
      const unit = document.createElement('ins');
      unit.className = 'adsbygoogle';
      unit.style.display = 'block';
      unit.dataset.adClient = client;
      unit.dataset.adSlot = slot;
      unit.dataset.adFormat = 'auto';
      unit.dataset.fullWidthResponsive = 'true';
      host.appendChild(unit);
      host.dataset.adInitialized = 'true';
      try { (window.adsbygoogle = window.adsbygoogle || []).push({}); } catch (error) { console.warn('AdSense slot deferred', error); }
    });
  }

  document.addEventListener('DOMContentLoaded', initializeManualSlots);
  window.addEventListener('tripdistill:components-ready', initializeManualSlots);
})();
