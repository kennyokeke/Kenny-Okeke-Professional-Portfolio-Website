/* ============================================================
   NAV + FOOTER INJECTION — shared across all pages
   ============================================================ */

(function () {
  const path = window.location.pathname;

  function active(href) {
    if (href === '/' && (path === '/' || path === '/index.html')) return ' active';
    if (href !== '/' && path.startsWith(href)) return ' active';
    return '';
  }

  const nav = `
<nav class="nav" id="site-nav">
  <div class="nav-inner">
    <a href="/" class="nav-logo" aria-label="Home">KO</a>
    <a href="/" class="nav-link${active('/')}">Home</a>
    <a href="/background" class="nav-link${active('/background')}">Background</a>
    <a href="/experience" class="nav-link${active('/experience')}">Experience</a>
    <a href="/projects" class="nav-link${active('/projects')}">Projects</a>
    <a href="/resume" class="nav-link${active('/resume')}">Resume</a>
  </div>
</nav>`;

  const footer = `
<footer class="footer" id="site-footer">
  <div class="footer-inner">
    <p class="footer-cta">Let's stay<br>in touch.</p>
    <div class="footer-contacts">
      <a href="https://linkedin.com/in/kennyokeke" target="_blank" rel="noopener" class="footer-link">
        <div class="footer-link-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
        <div class="footer-link-text">
          <strong>LinkedIn</strong>
          linkedin.com/in/kennyokeke
        </div>
      </a>
      <a href="mailto:kiokeke13@gmail.com" class="footer-link">
        <div class="footer-link-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div class="footer-link-text">
          <strong>Email</strong>
          kiokeke13@gmail.com
        </div>
      </a>
      <a href="tel:+17373963935" class="footer-link">
        <div class="footer-link-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.05 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </div>
        <div class="footer-link-text">
          <strong>Phone</strong>
          +1 (737) 396-3935
        </div>
      </a>
    </div>
  </div>
  <div style="border-top: 1px solid rgba(255,255,255,0.08); margin-top: 48px; padding-top: 24px; text-align: center; font-size: 12px; color: rgba(255,255,255,0.3); letter-spacing: 0.04em;">
    &copy; 2026 Kenny Okeke. All rights reserved.
  </div>
</footer>`;

  // Inject nav before first child of body
  document.body.insertAdjacentHTML('afterbegin', nav);
  // Inject footer after last child of body
  document.body.insertAdjacentHTML('beforeend', footer);

  // Back to top button
  const btn = document.createElement('button');
  btn.setAttribute('aria-label', 'Back to top');
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>`;
  btn.style.cssText = `
    position: fixed; bottom: 28px; right: 28px; z-index: 999;
    width: 44px; height: 44px;
    background: var(--green, #2D5A3D); color: #fff;
    border: none; border-radius: 50%; cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    opacity: 0; pointer-events: none;
    transition: opacity 0.3s ease, transform 0.3s ease;
    box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  `;
  document.body.appendChild(btn);

  window.addEventListener('scroll', function () {
    const show = window.scrollY > 400;
    btn.style.opacity = show ? '1' : '0';
    btn.style.pointerEvents = show ? 'auto' : 'none';
  }, { passive: true });

  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  btn.addEventListener('mouseenter', function () {
    btn.style.transform = 'translateY(-3px)';
  });
  btn.addEventListener('mouseleave', function () {
    btn.style.transform = 'translateY(0)';
  });
})();
