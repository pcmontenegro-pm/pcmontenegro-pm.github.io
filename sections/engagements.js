(function() {

function renderEngagements(lang) {
  const d = window.SITE;
  const e = d.engagements;
  const h2 = lang==='es' ? e.h2_es : e.h2_en;
  const sub = lang==='es' ? e.sub_es : e.sub_en;
  const note = lang==='es' ? e.note_es : e.note_en;
  const cta = lang==='es' ? e.cta_es : e.cta_en;

  const cards = e.packages.map(p => {
    const includes = (lang==='es' ? p.includes_es : p.includes_en)
      .map(item => `<li class="eng-item">${item}</li>`).join('');
    return `
    <div class="eng-card reveal">
      <div class="eng-card-head">
        <span class="eng-num">${p.num}</span>
        <span class="eng-duration" data-en="${p.duration_en}" data-es="${p.duration_es}">${lang==='es'?p.duration_es:p.duration_en}</span>
      </div>
      <h3 class="eng-name" data-en="${p.name_en}" data-es="${p.name_es}">${lang==='es'?p.name_es:p.name_en}</h3>
      <p class="eng-for" data-en="${p.for_en}" data-es="${p.for_es}">${lang==='es'?p.for_es:p.for_en}</p>
      <ul class="eng-list">${includes}</ul>
      <p class="eng-proof" data-en="${p.proof_en}" data-es="${p.proof_es}">${lang==='es'?p.proof_es:p.proof_en}</p>
    </div>`;
  }).join('');

  return `
  <section id="engagements">
    <div class="si">
      <span class="sec-tag" data-en="${e.tag_en}" data-es="${e.tag_es}">${lang==='es'?e.tag_es:e.tag_en}</span>
      <h2 class="sec-h2" data-en="${e.h2_en}" data-es="${e.h2_es}">${h2}</h2>
      <p class="sec-sub reveal" data-en="${e.sub_en}" data-es="${e.sub_es}">${sub}</p>
      <div class="eng-grid">${cards}</div>
      <p class="eng-note reveal" data-en="${e.note_en}" data-es="${e.note_es}">${note}</p>
      <div class="services-cta-row reveal">
        <a href="mailto:${d.email}?subject=Let's%20talk" class="btn-gold" data-en="${e.cta_en}" data-es="${e.cta_es}">${cta}</a>
      </div>
    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.engagements = renderEngagements;
})();
