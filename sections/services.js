(function() {

function renderServices(lang) {
  const d = window.SITE;
  const s = d.services;
  const h2 = lang==='es' ? s.h2_es : s.h2_en;
  const sub = lang==='es' ? s.sub_es : s.sub_en;
  const cta = lang==='es' ? s.cta_es : s.cta_en;

  const pillars = s.pillars.map(p => `
    <div class="pillar-card reveal">
      <span class="pillar-num">${p.num}</span>
      <h3 class="pillar-title" data-en="${p.title_en}" data-es="${p.title_es}">${lang==='es'?p.title_es:p.title_en}</h3>
      <p class="pillar-desc" data-en="${p.desc_en}" data-es="${p.desc_es}">${lang==='es'?p.desc_es:p.desc_en}</p>
      <p class="pillar-proof" data-en="${p.proof_en}" data-es="${p.proof_es}">${lang==='es'?p.proof_es:p.proof_en}</p>
      <a href="${p.link_url}" class="pillar-link" data-en="${p.link_en}" data-es="${p.link_es}">${lang==='es'?p.link_es:p.link_en}</a>
    </div>`).join('');

  return `
  <section id="services">
    <div class="si">
      <span class="sec-tag" data-en="${s.tag_en}" data-es="${s.tag_es}">${lang==='es'?s.tag_es:s.tag_en}</span>
      <h2 class="sec-h2" data-en="${s.h2_en}" data-es="${s.h2_es}">${h2}</h2>
      <p class="sec-sub reveal" data-en="${s.sub_en}" data-es="${s.sub_es}">${sub}</p>
      <div class="pillars-grid">${pillars}</div>
      <div class="services-cta-row reveal">
        <a href="mailto:${d.email}?subject=Let's%20talk" class="btn-gold" data-en="${s.cta_en}" data-es="${s.cta_es}">${cta}</a>
      </div>
    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.services = renderServices;
})();
