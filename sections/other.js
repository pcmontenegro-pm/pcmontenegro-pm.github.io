(function() {

// ── ABOUT ──────────────────────────────────────────────
function renderAbout(lang) {
  const d = window.SITE;

  const specs = [
    { icon:'📍', label_en:'Location', label_es:'Ubicación', val:'Dublin, Ireland', sub_en:'Open to relocation', sub_es:'Abierto a reubicación' },
    { icon:'🎯', label_en:'Open to', label_es:'Abierto a', val:'Ireland · Spain · Europe', sub_en:'Remote LatAm welcome', sub_es:'Remoto LatAm bienvenido' },
    { icon:'⏱️', label_en:'Availability', label_es:'Disponibilidad', val_en:'Immediately', val_es:'Inmediata', sub_en:'Critical Skills Permit eligible', sub_es:'Elegible Critical Skills Permit' },
    { icon:'🗣️', label_en:'Languages', label_es:'Idiomas', val:'Spanish · English C1', sub_en:'Native · CEFR Advanced', sub_es:'Nativo · MCER Avanzado' },
  ].map(s=>`
    <div class="spec-item">
      <span class="spec-icon">${s.icon}</span>
      <div>
        <div class="spec-label" data-en="${s.label_en}" data-es="${s.label_es}">${lang==='es'?s.label_es:s.label_en}</div>
        <div class="spec-val">${s.val||(lang==='es'?s.val_es:s.val_en)}</div>
        <div class="spec-sub" data-en="${s.sub_en}" data-es="${s.sub_es}">${lang==='es'?s.sub_es:s.sub_en}</div>
      </div>
    </div>`).join('');

  const recs = d.recommendations.map((r,i)=>`
    <div class="rec-card reveal" style="transition-delay:${i*0.06}s">
      <div class="rec-quote" data-en="&ldquo;${r.quote_en}&rdquo;" data-es="&ldquo;${r.quote_es}&rdquo;">&ldquo;${lang==='es'?r.quote_es:r.quote_en}&rdquo;</div>
      <div class="rec-meta">
        <div>
          <span class="rec-name">${r.name}</span>
          <span class="rec-role" data-en=" · ${r.role_en}" data-es=" · ${r.role_es}"> · ${lang==='es'?r.role_es:r.role_en}</span>
        </div>
        <a href="${r.url}" class="rec-link" target="_blank" rel="noopener" data-en="LinkedIn →" data-es="LinkedIn →">LinkedIn →</a>
      </div>
    </div>`).join('');

  return `
  <section id="about">
    <div class="si">
      <span class="sec-tag" data-en="About" data-es="Sobre mí">${lang==='es'?'Sobre mí':'About'}</span>
      <h2 class="sec-h2" data-en="Payments. Collections. <em>10 years.</em>" data-es="Pagos. Cobranza. <em>10 años.</em>">${lang==='es'?'Pagos. Cobranza. <em>10 años.</em>':'Payments. Collections. <em>10 years.</em>'}</h2>
      <div class="spec-strip reveal">${specs}</div>
      <div class="about-grid">
        <div class="about-body">
          <p data-lang="en" ${lang==='es'?'style="display:none"':''}><strong>I build payment systems that work</strong> — and fix the ones that don't. 10+ years in banking and financial services, 7 of them at Itaú Chile owning the roadmap for payments and collections at the country's largest private bank.</p>
          <p data-lang="en" ${lang==='es'?'style="display:none"':''}>I've shipped PAC 2.0, ePAC, QR Interoperability and a multi-bank payment layer from scratch. I know how SEPA equivalents behave, why direct debit fails, and how to build retry logic that doesn't annoy customers or frustrate operations. <strong>I understand the full stack</strong> — rails, failure modes, mandate lifecycle, notification infrastructure.</p>
          <p data-lang="en" ${lang==='es'?'style="display:none"':''}>Now based in Dublin. Targeting Senior PM roles in payments, banking or collections — Ireland, Spain, or broader Europe. Available immediately. Critical Skills Permit eligible.</p>
          <p data-lang="es" ${lang==='en'?'style="display:none"':''}><strong>Construyo sistemas de pago que funcionan</strong> — y arreglo los que no. 10+ años en banca y servicios financieros, 7 de ellos en Itaú Chile siendo responsable del roadmap de pagos y cobranza en el banco privado más grande del país.</p>
          <p data-lang="es" ${lang==='en'?'style="display:none"':''}>Entregué PAC 2.0, ePAC, Interoperabilidad QR y una capa de pago multibanco desde cero. Sé cómo se comportan los equivalentes de SEPA, por qué falla el débito directo y cómo construir lógica de reintento que no frustre a clientes ni a operaciones. <strong>Entiendo el stack completo</strong> — rieles, modos de falla, ciclo de vida del mandato, infraestructura de notificaciones.</p>
          <p data-lang="es" ${lang==='en'?'style="display:none"':''}>Basado en Dublín. Buscando roles Senior PM en pagos, banca o cobranza — Irlanda, España o Europa en general. Disponible de inmediato. Elegible para Critical Skills Permit.</p>
        </div>
        <div>
          <div class="recs-header">
            <h3 class="recs-h3" data-en="What colleagues <em>say.</em>" data-es="Lo que dicen <em>los colegas.</em>">${lang==='es'?'Lo que dicen <em>los colegas.</em>':'What colleagues <em>say.</em>'}</h3>
            <p class="recs-sub" data-en="4 LinkedIn recommendations from direct managers and partners" data-es="4 recomendaciones de LinkedIn de managers directos y partners">${lang==='es'?'4 recomendaciones de LinkedIn de managers directos y partners':'4 LinkedIn recommendations from direct managers and partners'}</p>
          </div>
          <div class="recs-grid">${recs}</div>
        </div>
      </div>
    </div>
  </section>`;
}

// ── BACKGROUND ─────────────────────────────────────────
function renderBackground(lang) {
  const d = window.SITE;

  const skillIcons = {
    'Payments & Banking':'💳', 'Payment Management':'💳',
    'Product Management':'🗂️', 'Technical':'⚙️',
    'Research & Design':'🔍', 'Delivery':'🚀', 'Tools':'🛠️',
  };

  const exp = d.experience.map(e=>{
    const role = lang==='es' ? e.role_es : e.role_en;
    const bullets = lang==='es' ? e.bullets_es : e.bullets_en;
    return `
    <div class="exp-item reveal">
      <div class="exp-meta">
        <span class="exp-years">${e.years}</span>
        <span class="exp-company">${e.company}</span>
        <span class="exp-loc">${e.location}</span>
      </div>
      <div>
        <div class="exp-role" data-en="${e.role_en}" data-es="${e.role_es}">${role}</div>
        <ul class="exp-bullets">
          ${bullets.map(b=>`<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>`;
  }).join('');

  const skills = d.skills.map(s=>{
    const cat = lang==='es' ? s.cat_es : s.cat_en;
    const icon = skillIcons[s.cat_en] || '◆';
    return `
    <div class="skill-group">
      <div class="skill-cat">
        <span class="skill-cat-icon">${icon}</span>
        <span class="skill-cat-label" data-en="${s.cat_en}" data-es="${s.cat_es}">${cat}</span>
      </div>
      <div class="skill-chips">
        ${s.items.map(i=>`<span class="skill-chip">${i}</span>`).join('')}
      </div>
    </div>`;
  }).join('');

  const edu = d.education.map(e=>{
    const deg = lang==='es' ? e.degree_es : e.degree_en;
    return `
    <div class="edu-item">
      <span class="edu-year">${e.year}</span>
      <div>
        <div class="edu-degree" data-en="${e.degree_en}" data-es="${e.degree_es}">${deg}</div>
        <div class="edu-school">${e.school}</div>
      </div>
    </div>`;
  }).join('');

  return `
  <section id="background">
    <div class="si">
      <div class="bg-grid">
        <div>
          <span class="sec-tag" data-en="Experience" data-es="Experiencia">${lang==='es'?'Experiencia':'Experience'}</span>
          <h2 class="sec-h2" data-en="Where the work <em>happened.</em>" data-es="Donde ocurrió <em>el trabajo.</em>">${lang==='es'?'Donde ocurrió <em>el trabajo.</em>':'Where the work <em>happened.</em>'}</h2>
          <div class="exp-list">${exp}</div>
        </div>
        <div>
          <span class="sec-tag" data-en="Skills" data-es="Habilidades">${lang==='es'?'Habilidades':'Skills'}</span>
          <h2 class="sec-h2" data-en="What I <em>bring.</em>" data-es="Lo que <em>aporto.</em>">${lang==='es'?'Lo que <em>aporto.</em>':'What I <em>bring.</em>'}</h2>
          <div class="skills-cols">${skills}</div>
          <span class="sec-tag" data-en="Education" data-es="Educación">${lang==='es'?'Educación':'Education'}</span>
          <div class="edu-list">${edu}</div>
        </div>
      </div>
    </div>
  </section>`;
}

// ── PRODUCTS ────────────────────────────────────────────
function renderProducts(lang) {
  const d = window.SITE;
  const PROD_ICONS = ['📋','📘','⚖️','💰'];

  const cards = d.products.map((p,i)=>{
    const type  = lang==='es' ? p.type_es  : p.type_en;
    const title = lang==='es' ? p.title_es : p.title_en;
    const desc  = lang==='es' ? p.desc_es  : p.desc_en;
    const foot  = p.coming_soon
      ? `<span class="prod-soon" data-en="Coming soon" data-es="Próximamente">${lang==='es'?'Próximamente':'Coming soon'}</span>`
      : `<a href="${p.url}" class="prod-cta" target="_blank" rel="noopener" data-en="Get it →" data-es="Obtener →">${lang==='es'?'Obtener →':'Get it →'}</a>`;
    return `
    <div class="prod-card reveal">
      <div class="prod-icon-row">${PROD_ICONS[i]}</div>
      <div class="prod-body">
        <span class="prod-type" data-en="${p.type_en}" data-es="${p.type_es}">${type}</span>
        <div class="prod-title" data-en="${p.title_en}" data-es="${p.title_es}">${title}</div>
        <p class="prod-desc" data-en="${p.desc_en}" data-es="${p.desc_es}">${desc}</p>
        <div class="prod-foot">
          <span class="prod-price">${p.price} <small data-en="one-time" data-es="pago único">${lang==='es'?'pago único':'one-time'}</small></span>
          ${foot}
        </div>
      </div>
    </div>`;
  }).join('');

  return `
  <section id="products">
    <div class="si">
      <span class="sec-tag" data-en="Resources" data-es="Recursos">${lang==='es'?'Recursos':'Resources'}</span>
      <h2 class="sec-h2" data-en="Tools built from <em>real PM work.</em>" data-es="Herramientas de <em>trabajo PM real.</em>">${lang==='es'?'Herramientas de <em>trabajo PM real.</em>':'Tools built from <em>real PM work.</em>'}</h2>
      <p class="sec-sub reveal" data-en="Guides, templates and models for fintech product teams — written from 10 years of hands-on delivery." data-es="Guías, plantillas y modelos para equipos de producto fintech — escritos desde 10 años de entrega real.">${lang==='es'?'Guías, plantillas y modelos para equipos de producto fintech — escritos desde 10 años de entrega real.':'Guides, templates and models for fintech product teams — written from 10 years of hands-on delivery.'}</p>
      <div class="prods-grid" style="margin-top:32px;">${cards}</div>
    </div>
  </section>`;
}

// ── WRITING ─────────────────────────────────────────────
function renderWriting(lang) {
  const d = window.SITE;
  const cards = d.writing.map(w=>{
    const type  = lang==='es' ? w.type_es  : w.type_en;
    const title = lang==='es' ? w.title_es : w.title_en;
    const desc  = lang==='es' ? w.desc_es  : w.desc_en;
    return `
    <a href="${w.url}" class="writing-card reveal" target="_blank" rel="noopener">
      <div class="writing-icon">📝</div>
      <div class="writing-meta">
        <span class="writing-type" data-en="${w.type_en}" data-es="${w.type_es}">${type}</span>
        <span class="writing-year">${w.year}</span>
      </div>
      <div class="writing-title" data-en="${w.title_en}" data-es="${w.title_es}">${title}</div>
      <p class="writing-desc" data-en="${w.desc_en}" data-es="${w.desc_es}">${desc}</p>
      <span class="writing-cta" data-en="Read on LinkedIn →" data-es="Leer en LinkedIn →">${lang==='es'?'Leer en LinkedIn →':'Read on LinkedIn →'}</span>
    </a>`;
  }).join('');

  return `
  <section id="writing">
    <div class="si">
      <span class="sec-tag" data-en="Writing" data-es="Publicaciones">${lang==='es'?'Publicaciones':'Writing'}</span>
      <h2 class="sec-h2" data-en="Payment industry <em>perspectives.</em>" data-es="Perspectivas de la <em>industria de pagos.</em>">${lang==='es'?'Perspectivas de la <em>industria de pagos.</em>':'Payment industry <em>perspectives.</em>'}</h2>
      <div class="writing-grid" style="margin-top:32px;">${cards}</div>
    </div>
  </section>`;
}

// ── CONTACT ─────────────────────────────────────────────
function renderContact(lang) {
  const d = window.SITE;

  const interests = d.interests.map(it=>`
    <div class="interest-item">
      <span class="interest-icon">${it.title_en==='Films'?'🎬':it.title_en==='Cycling'?'🚲':'📚'}</span>
      <div class="interest-body">
        <div class="interest-title" data-en="${it.title_en}" data-es="${it.title_es}">${lang==='es'?it.title_es:it.title_en}</div>
        <div class="interest-desc" data-en="${it.desc_en}" data-es="${it.desc_es}">${lang==='es'?it.desc_es:it.desc_en}</div>
      </div>
    </div>`).join('');

  return `
  <section id="contact">
    <div class="si contact-grid">
      <div>
        <img src="${d.sig}" alt="" class="contact-sig reveal" aria-hidden="true">
        <h2 class="contact-h2 reveal" data-en="Open to the right <em>opportunity.</em>" data-es="Abierto a la <em>oportunidad correcta.</em>">${lang==='es'?'Abierto a la <em>oportunidad correcta.</em>':'Open to the right <em>opportunity.</em>'}</h2>
        <p class="contact-sub reveal"
           data-en="Senior PM roles in payments, collections or digital banking. Ireland and Spain preferred. Remote LatAm welcome."
           data-es="Roles Senior PM en pagos, cobranza o banca digital. Irlanda y España preferidos. Remoto LatAm bienvenido."
        >${lang==='es'?'Roles Senior PM en pagos, cobranza o banca digital. Irlanda y España preferidos. Remoto LatAm bienvenido.':'Senior PM roles in payments, collections or digital banking. Ireland and Spain preferred. Remote LatAm welcome.'}</p>
        <p class="contact-detail reveal"
           data-en="Based in <strong>Dublin</strong> · Critical Skills Permit eligible · Alumni Universidad de Cantabria · Available immediately."
           data-es="Basado en <strong>Dublín</strong> · Elegible Critical Skills Permit · Alumni Universidad de Cantabria · Disponible de inmediato."
        >${lang==='es'?'Basado en <strong>Dublín</strong> · Elegible Critical Skills Permit · Alumni Universidad de Cantabria · Disponible de inmediato.':'Based in <strong>Dublin</strong> · Critical Skills Permit eligible · Alumni Universidad de Cantabria · Available immediately.'}</p>
        <div class="contact-links reveal">
          <a href="${d.cv_url}" class="contact-link-btn" target="_blank">
            <span class="clb-icon">📄</span>
            <div><span class="clb-type" data-en="Download" data-es="Descargar">${lang==='es'?'Descargar':'Download'}</span>
            <span class="clb-label" data-en="CV (PDF)" data-es="CV (PDF)">CV (PDF)</span></div>
          </a>
          <a href="mailto:${d.email}" class="contact-link-btn">
            <span class="clb-icon">✉️</span>
            <div><span class="clb-type">Email</span><span class="clb-val">${d.email}</span></div>
          </a>
          <a href="${d.linkedin}" class="contact-link-btn" target="_blank" rel="noopener">
            <span class="clb-icon">💼</span>
            <div><span class="clb-type">LinkedIn</span><span class="clb-val">montenegrofp</span></div>
          </a>
        </div>
      </div>
      <div>
        <h3 class="interests-h3" data-en="Beyond work" data-es="Más allá del trabajo">${lang==='es'?'Más allá del trabajo':'Beyond work'}</h3>
        <div class="interests-list">${interests}</div>
      </div>
    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.about      = renderAbout;
window.SECTIONS.background = renderBackground;
window.SECTIONS.products   = renderProducts;
window.SECTIONS.writing    = renderWriting;
window.SECTIONS.contact    = renderContact;
})();
