(function() {
function renderHero(lang) {
  const d = window.SITE;
  const h = d.hero;
  const hl    = lang==='es' ? h.headline_es : h.headline_en;
  const quote = lang==='es' ? h.quote_es    : h.quote_en;
  const open  = lang==='es' ? h.open_to_es  : h.open_to_en;
  const metrics = d.metrics.map(m=>`
    <div class="metric">
      <span class="metric-num">${m.num}</span>
      <span class="metric-label" data-en="${m.label_en}" data-es="${m.label_es}">${lang==='es'?m.label_es:m.label_en}</span>
    </div>`).join('');

  const ICO_BANK = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="22" x2="21" y2="22"/><line x1="6" y1="18" x2="6" y2="11"/><line x1="10" y1="18" x2="10" y2="11"/><line x1="14" y1="18" x2="14" y2="11"/><line x1="18" y1="18" x2="18" y2="11"/><polygon points="12 2 20 7 4 7"/></svg>`;
  const ICO_BRIEF = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/></svg>`;
  const ICO_GLOBE = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`;

  const pills = [
    {icon: ICO_BANK,  text: lang==='es'?'Itaú Bank Chile · 2017–2024':'Itaú Bank Chile · 2017–2024'},
    {icon: ICO_BRIEF, text: lang==='es'?'Consultor Independiente · 2024–Presente':'Independent Consultant · 2024–Present'},
    {icon: ICO_GLOBE, text: lang==='es'?'Santander · SURA':'Santander · SURA'},
  ].map(p=>`<span class="bar-pill"><span class="bar-pill-icon">${p.icon}</span>${p.text}</span>`).join('');

  return `
  <section id="hero" class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-inner">
      <div class="hero-text">
        <div class="hero-kicker reveal-up">
          <span class="hero-kicker-dot"></span>
          <span class="hero-kicker-text" data-en="Dublin, Ireland · Consulting &amp; Senior Roles" data-es="Dublín, Irlanda · Consultoría y Roles Senior">${lang==='es'?'Dublín, Irlanda · Consultoría y Roles Senior':'Dublin, Ireland · Consulting & Senior Roles'}</span>
        </div>
        <h1 class="hero-h1 reveal-up" style="animation-delay:.08s">${hl[0]}</h1>
        <p class="hero-h1-sub reveal-up" style="animation-delay:.14s">${hl[1]}</p>
        <p class="hero-summary reveal-up" style="animation-delay:.2s"
           data-en="${h.quote_en}" data-es="${h.quote_es}">${quote}</p>
        <div class="hero-ctas reveal-up" style="animation-delay:.26s">
          <a href="mailto:${d.email}?subject=Let's%20talk" class="btn-gold" data-en="Tell me about your problem →" data-es="Cuéntame tu problema →">${lang==='es'?'Cuéntame tu problema →':'Tell me about your problem →'}</a>
          <a href="#work" class="btn-outline" data-en="See the work" data-es="Ver el trabajo">${lang==='es'?'Ver el trabajo':'See the work'}</a>
          <a href="${d.cv_url}" class="btn-outline" target="_blank" data-en="↓ CV" data-es="↓ CV">${lang==='es'?'↓ CV':'↓ CV'}</a>
        </div>
        <div class="hero-avail reveal-up" style="animation-delay:.32s">
          <span class="hero-avail-dot"></span>
          <span data-en="${h.open_to_en}" data-es="${h.open_to_es}">${open}</span>
        </div>
      </div>
      <div class="hero-visual reveal-up" style="animation-delay:.16s">
        <div class="hero-photo-wrap">
          <img src="${d.photo}" alt="Pablo Montenegro" class="hero-photo">
          <img src="${d.seal}" alt="" class="hero-seal" aria-hidden="true">
        </div>
        <div class="hero-metrics">${metrics}</div>
      </div>
    </div>
    <div class="hero-bar reveal-up" style="animation-delay:.4s">
      <span class="bar-label" data-en="Experience at" data-es="Experiencia en">${lang==='es'?'Experiencia en':'Experience at'}</span>
      <div class="bar-items">${pills}</div>
    </div>
  </section>`;
}
window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.hero = renderHero;
})();
