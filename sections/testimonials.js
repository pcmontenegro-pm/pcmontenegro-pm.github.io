(function () {

// Renders the testimonials strip for consulting.html
// Shows first 3 recommendations (Ignacio, Raúl, Rodrigo) as expandable cards
// with short quote visible by default, full text on tap/click.
// Language-aware: EN version links to LinkedIn with a note, ES version is verbatim.

function renderTestimonials(lang) {
  const d = window.SITE;
  // Use first 3 recommendations — ordered by relevance for consulting context
  const recs = d.recommendations.slice(0, 3);

  const tag   = lang === 'es' ? 'Lo que dicen quienes trabajaron conmigo' : 'What people who worked with me say';
  const h2    = lang === 'es'
    ? 'Palabras de <em>quienes estuvieron ahí.</em>'
    : 'Words from <em>people who were there.</em>';
  const sub   = lang === 'es'
    ? 'Recomendaciones públicas en LinkedIn — verificables en la fuente.'
    : 'Public LinkedIn recommendations — verifiable at the source.';
  const expandLabel = lang === 'es' ? 'Leer completo' : 'Read full';
  const collapseLabel = lang === 'es' ? 'Cerrar' : 'Close';
  const liNote = lang === 'es'
    ? 'Recomendación original en español · verificable en LinkedIn'
    : 'Original recommendation in Spanish · verifiable on LinkedIn';

  const cards = recs.map((r, i) => {
    const quote = lang === 'es' ? r.quote_es : r.quote_en;
    const full  = lang === 'es' ? r.full_es  : r.full_en;
    const role  = lang === 'es' ? r.role_es  : r.role_en;
    // EN version: show translated quote/full, note that original is in Spanish
    const showLiNote = lang === 'en';

    return `
    <div class="tcard reveal" style="transition-delay:${i * 0.08}s" id="tcard-${i}">
      <div class="tcard-top">
        <span class="tcard-openquote">"</span>
        <p class="tcard-quote">${quote}</p>
      </div>
      <div class="tcard-full" id="tcard-full-${i}" aria-hidden="true">
        <p class="tcard-full-text">${full}</p>
        ${showLiNote ? `<p class="tcard-li-note">${liNote}</p>` : ''}
      </div>
      <div class="tcard-footer">
        <div class="tcard-meta">
          <span class="tcard-name">${r.name}</span>
          <span class="tcard-role">${role}</span>
          <span class="tcard-date">${r.date}</span>
        </div>
        <div class="tcard-actions">
          <button
            class="tcard-expand-btn"
            onclick="toggleTestimonial(${i}, this, '${expandLabel}', '${collapseLabel}')"
            aria-expanded="false"
            aria-controls="tcard-full-${i}"
          >${expandLabel} ↓</button>
          <a href="${r.url}" class="tcard-li-link" target="_blank" rel="noopener" title="Verify on LinkedIn">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1"/>
              <path d="M3.5 5.5v5M3.5 3.5v.5" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M6.5 10.5V7.5c0-1 .5-2 2-2s2 1 2 2v3" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
    </div>`;
  }).join('');

  return `
  <section id="testimonials">
    <div class="si">
      <span class="sec-tag">${tag}</span>
      <h2 class="sec-h2">${h2}</h2>
      <p class="sec-sub reveal">${sub}</p>
      <div class="tcards-grid">
        ${cards}
      </div>
    </div>
  </section>`;
}

// Toggle expand/collapse — called inline from button
window.toggleTestimonial = function (idx, btn, expandLabel, collapseLabel) {
  const fullEl = document.getElementById('tcard-full-' + idx);
  const card   = document.getElementById('tcard-' + idx);
  const isOpen = fullEl.classList.toggle('open');
  fullEl.setAttribute('aria-hidden', String(!isOpen));
  btn.setAttribute('aria-expanded', String(isOpen));
  btn.textContent = isOpen ? collapseLabel + ' ↑' : expandLabel + ' ↓';
  card.classList.toggle('tcard--expanded', isOpen);
};

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.testimonials = renderTestimonials;

})();
