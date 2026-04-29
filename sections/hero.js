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

  const pills = [
    {icon:'🏦', text: lang==='es'?'Itaú Bank Chile · 2017–2024':'Itaú Bank Chile · 2017–2024'},
    {icon:'🌍', text: lang==='es'?'Consultor Independiente · 2024–Presente':'Independent Consultant · 2024–Present'},
    {icon:'🏛️', text: lang==='es'?'Santander · SURA':'Santander · SURA'},
  ].map(p=>`<span class="bar-pill"><span class="bar-pill-icon">${p.icon}</span>${p.text}</span>`).join('');

  return `
  <section id="hero" class="hero-section">
    <div class="hero-bg"></div>
    <div class="hero-inner">
      <div class="hero-text">
        <div class="hero-kicker reveal-up">
          <span class="hero-kicker-dot"></span>
          <span class="hero-kicker-text" data-en="Available · Dublin, Ireland" data-es="Disponible · Dublín, Irlanda">${lang==='es'?'Disponible · Dublín, Irlanda':'Available · Dublin, Ireland'}</span>
        </div>
        <h1 class="hero-h1 reveal-up" style="animation-delay:.08s">${hl[0]}</h1>
        <p class="hero-h1-sub reveal-up" style="animation-delay:.14s">${hl[1]}</p>
        <p class="hero-summary reveal-up" style="animation-delay:.2s"
           data-en="${h.quote_en}" data-es="${h.quote_es}">${quote}</p>
        <div class="hero-ctas reveal-up" style="animation-delay:.26s">
          <a href="#work" class="btn-gold" data-en="See my work →" data-es="Ver mi trabajo →">${lang==='es'?'Ver mi trabajo →':'See my work →'}</a>
          <a href="${d.cv_url}" class="btn-outline" target="_blank" data-en="↓ Download CV" data-es="↓ Descargar CV">${lang==='es'?'↓ Descargar CV':'↓ Download CV'}</a>
          <a href="mailto:${d.email}" class="btn-outline" data-en="Get in touch" data-es="Contactar">${lang==='es'?'Contactar':'Get in touch'}</a>
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
