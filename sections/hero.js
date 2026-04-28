// ═══════════════════════════════════════════════════
// SECTION: HERO
// ═══════════════════════════════════════════════════
(function() {

function renderHero(lang) {
  const d = window.SITE;
  const h = d.hero;
  const hl = lang === 'es' ? h.headline_es : h.headline_en;
  const quote = lang === 'es' ? h.quote_es : h.quote_en;
  const openTo = lang === 'es' ? h.open_to_es : h.open_to_en;
  const metricHTML = d.metrics.map(m => `
    <div class="metric">
      <span class="metric-num">${m.num}</span>
      <span class="metric-label" data-en="${m.label_en}" data-es="${m.label_es}">${lang === 'es' ? m.label_es : m.label_en}</span>
    </div>`).join('');

  return `
  <section id="hero" class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-inner">

      <div class="hero-text">
        <div class="hero-tag reveal-up" data-en="Senior Product Manager · Payments &amp; Collections · Dublin" data-es="Senior Product Manager · Pagos y Cobranza · Dublín">
          Senior Product Manager · Payments &amp; Collections · Dublin
        </div>
        <h1 class="hero-h1 reveal-up" style="animation-delay:.1s">
          ${hl.map(l => `<span>${l}</span>`).join('')}
        </h1>
        <p class="hero-quote reveal-up" style="animation-delay:.2s"
           data-en="${h.quote_en}" data-es="${h.quote_es}">
          "${quote}"
        </p>
        <div class="hero-ctas reveal-up" style="animation-delay:.3s">
          <a href="#work" class="btn-primary" data-en="See my work" data-es="Ver mi trabajo">See my work</a>
          <a href="${d.cv_url}" class="btn-ghost" target="_blank" data-en="↓ Download CV" data-es="↓ Descargar CV">↓ Download CV</a>
          <a href="mailto:${d.email}" class="btn-ghost" data-en="Get in touch" data-es="Contacto">Get in touch</a>
        </div>
        <p class="hero-open reveal-up" style="animation-delay:.4s"
           data-en="${h.open_to_en}" data-es="${h.open_to_es}">${openTo}</p>
      </div>

      <div class="hero-visual reveal-up" style="animation-delay:.15s">
        <div class="hero-photo-wrap">
          <img src="${d.photo}" alt="Pablo Montenegro" class="hero-photo">
          <img src="${d.seal}" alt="" class="hero-seal" aria-hidden="true">
        </div>
        <div class="hero-metrics">
          ${metricHTML}
        </div>
      </div>

    </div>

    <div class="hero-companies reveal-up" style="animation-delay:.5s">
      <span class="companies-label" data-en="Experience at" data-es="Experiencia en">Experience at</span>
      <div class="companies-list">
        <span class="company-pill">Independent PM Consultant · 2024–Present</span>
        <span class="company-pill">Itaú Bank Chile · 2017–2024</span>
        <span class="company-pill">Santander Bank Chile · 2012–2016</span>
        <span class="company-pill">SURA Group · 2016–2017</span>
      </div>
    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.hero = renderHero;

})();
