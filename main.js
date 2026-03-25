/* ============================================================
   MAIN.JS — shared animations & interactions
   ============================================================ */

// ── Page Load Fade-in ──────────────────────────────────────
window.addEventListener('pageshow', (e) => {
  if (e.persisted) {
    document.body.classList.remove('leaving');
    document.body.classList.add('loaded');
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
  }
});

document.addEventListener('DOMContentLoaded', () => {
  requestAnimationFrame(() => {
    document.body.classList.add('loaded');
  });

  // ── Smooth page transitions ──────────────────────────────
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a');
    if (!link) return;
    const href = link.getAttribute('href');
    if (!href || href.startsWith('#') || href.startsWith('http') || href.startsWith('mailto') || href.startsWith('tel') || link.target === '_blank') return;
    e.preventDefault();
    document.body.classList.add('leaving');
    setTimeout(() => { window.location.href = href; }, 260);
  });

  // ── Scroll Reveal ────────────────────────────────────────
  const revealEls = document.querySelectorAll('.reveal');
  if (revealEls.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(el => observer.observe(el));
  }

  // ── Stat Counter Animation ───────────────────────────────
  const statEls = document.querySelectorAll('[data-count]');
  if (statEls.length > 0) {
    const countObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        const target = parseFloat(el.dataset.count);
        const duration = 1800;
        const start = performance.now();
        const isDecimal = target % 1 !== 0;

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = target * ease;
          el.textContent = prefix + (isDecimal ? current.toFixed(1) : Math.round(current)) + suffix;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
        countObserver.unobserve(el);
      });
    }, { threshold: 0.5 });
    statEls.forEach(el => countObserver.observe(el));
  }

  // ── Nav scroll shrink ────────────────────────────────────
  const nav = document.getElementById('site-nav');
  if (nav) {
    let lastY = 0;
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      if (y > 80) {
        nav.style.boxShadow = '0 2px 20px rgba(30,53,40,0.08)';
      } else {
        nav.style.boxShadow = 'none';
      }
      lastY = y;
    }, { passive: true });
  }
});
