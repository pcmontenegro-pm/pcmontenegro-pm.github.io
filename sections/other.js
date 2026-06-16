(function() {

// ── SVG ICONS — custom, no emojis ──────────────────────────────
const ICO = {
  // Location pin — minimal
  location: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="7" r="2.5" stroke="rgba(196,160,90,.8)" stroke-width="1.2"/>
    <path d="M9 2C6.24 2 4 4.24 4 7c0 4 5 9 5 9s5-5 5-9c0-2.76-2.24-5-5-5z" stroke="rgba(196,160,90,.8)" stroke-width="1.2" fill="none"/>
  </svg>`,
  // Target/role
  target: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="7" stroke="rgba(196,160,90,.5)" stroke-width="1"/>
    <circle cx="9" cy="9" r="4" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
    <circle cx="9" cy="9" r="1.5" fill="rgba(196,160,90,.9)"/>
  </svg>`,
  // Clock
  clock: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="9" cy="9" r="7" stroke="rgba(196,160,90,.8)" stroke-width="1.2"/>
    <path d="M9 5v4l2.5 2.5" stroke="rgba(196,160,90,.8)" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,
  // Language/speech
  language: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 4h8M7 4v2M3 7h5" stroke="rgba(196,160,90,.8)" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M9 9l2 2 2-2m0 0l1.5 3.5" stroke="rgba(196,160,90,.8)" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M11 11c.5.8 1.5 1.5 3 2" stroke="rgba(196,160,90,.8)" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,
  // Document/CV
  document: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3.5" y="2" width="11" height="14" rx="1.5" stroke="rgba(196,160,90,.8)" stroke-width="1.2"/>
    <path d="M6 6h6M6 9h6M6 12h4" stroke="rgba(196,160,90,.6)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Email/envelope
  email: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="14" height="10" rx="1.5" stroke="rgba(196,160,90,.8)" stroke-width="1.2"/>
    <path d="M2 6l7 5 7-5" stroke="rgba(196,160,90,.8)" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,
  // LinkedIn — abstract professional network
  network: `<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="4" cy="9" r="2" stroke="rgba(196,160,90,.8)" stroke-width="1.1"/>
    <circle cx="14" cy="4" r="2" stroke="rgba(196,160,90,.8)" stroke-width="1.1"/>
    <circle cx="14" cy="14" r="2" stroke="rgba(196,160,90,.8)" stroke-width="1.1"/>
    <path d="M6 8.5l6-3.5M6 9.5l6 3.5" stroke="rgba(196,160,90,.5)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Book/fiction
  book: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 3h6v14H4z" stroke="rgba(196,160,90,.7)" stroke-width="1.2" fill="rgba(196,160,90,.06)"/>
    <path d="M10 3s2-1 5 0v14c-3-1-5 0-5 0V3z" stroke="rgba(196,160,90,.7)" stroke-width="1.2" fill="rgba(196,160,90,.04)"/>
    <path d="M6 7h3M6 10h3" stroke="rgba(196,160,90,.45)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Film/cinema
  film: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="4" width="16" height="12" rx="1.5" stroke="rgba(196,160,90,.7)" stroke-width="1.2"/>
    <path d="M7 4v12M13 4v12" stroke="rgba(196,160,90,.4)" stroke-width="1"/>
    <rect x="3" y="6" width="2" height="2" rx=".3" fill="rgba(196,160,90,.5)"/>
    <rect x="3" y="12" width="2" height="2" rx=".3" fill="rgba(196,160,90,.5)"/>
    <rect x="15" y="6" width="2" height="2" rx=".3" fill="rgba(196,160,90,.5)"/>
    <rect x="15" y="12" width="2" height="2" rx=".3" fill="rgba(196,160,90,.5)"/>
    <polygon points="8.5,8 8.5,12 13,10" fill="rgba(196,160,90,.4)"/>
  </svg>`,
  // Cycling/wheel
  cycle: `<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5" cy="13" r="3.5" stroke="rgba(196,160,90,.7)" stroke-width="1.2"/>
    <circle cx="15" cy="13" r="3.5" stroke="rgba(196,160,90,.7)" stroke-width="1.2"/>
    <path d="M10 5l-5 8h10L10 5z" stroke="rgba(196,160,90,.6)" stroke-width="1.1" fill="none" stroke-linejoin="round"/>
    <circle cx="10" cy="5" r="1.2" fill="rgba(196,160,90,.7)"/>
    <path d="M8 5h5" stroke="rgba(196,160,90,.5)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Payments chip
  payments: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
    <path d="M1 6h12" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
    <rect x="3" y="8" width="3" height="1.5" rx=".3" fill="rgba(196,160,90,.45)"/>
  </svg>`,
  // PM backlog
  pm: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="1" width="10" height="12" rx="1.2" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
    <path d="M4 4h6M4 7h6M4 10h4" stroke="rgba(196,160,90,.5)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Tech/gear
  tech: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="7" cy="7" r="2" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
    <path d="M7 1v2M7 11v2M1 7h2M11 7h2M3 3l1.4 1.4M9.6 9.6L11 11M3 11l1.4-1.4M9.6 4.4L11 3" stroke="rgba(196,160,90,.6)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Research/magnifier
  research: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="5.5" cy="5.5" r="3.5" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
    <path d="M8.5 8.5L12 12" stroke="rgba(196,160,90,.7)" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,
  // Rocket/delivery
  rocket: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 2C7 2 10 4 10 8L7 11 4 8C4 4 7 2 7 2z" stroke="rgba(196,160,90,.7)" stroke-width="1" fill="rgba(196,160,90,.07)"/>
    <circle cx="7" cy="6.5" r="1.2" fill="rgba(196,160,90,.6)"/>
    <path d="M4 8l-1.5 1.5M10 8l1.5 1.5" stroke="rgba(196,160,90,.4)" stroke-width="1" stroke-linecap="round"/>
  </svg>`,
  // Tools/wrench
  tools: `<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9 2a3 3 0 00-3 3 3 3 0 003 3 3 3 0 000-6z" stroke="rgba(196,160,90,.7)" stroke-width="1" fill="none"/>
    <path d="M7.5 7.5L3 12" stroke="rgba(196,160,90,.7)" stroke-width="1.5" stroke-linecap="round"/>
  </svg>`,
};

const SKILL_ICO = {
  'Payments & Banking': ICO.payments,
  'Product Management': ICO.pm,
  'Technical': ICO.tech,
  'Research & Design': ICO.research,
  'Delivery': ICO.rocket,
  'Tools': ICO.tools,
};

// ── ABOUT ──────────────────────────────────────────────────────
function renderAbout(lang) {
  const d = window.SITE;

  const specs = [
    { icon: ICO.location,  label_en:'Based in',     label_es:'Basado en',      val:'Dublin, Ireland',         sub_en:'Open to Europe-wide engagements', sub_es:'Abierto a proyectos en toda Europa' },
    { icon: ICO.target,    label_en:'Focus',         label_es:'Enfoque',        val:'Payments · Banking · Product', sub_en:'Applied across regulated and consumer products', sub_es:'Aplicado en productos regulados y de consumo' },
    { icon: ICO.clock,     label_en:'Engagement',    label_es:'Modalidad',      val_en:'Consulting + Senior PM roles', val_es:'Consultoría + roles Senior PM', sub_en:'Critical Skills Permit eligible', sub_es:'Elegible Critical Skills Permit' },
    { icon: ICO.language,  label_en:'Languages',     label_es:'Idiomas',        val:'Spanish · English',    sub_en:'Native · Business Proficient',       sub_es:'Nativo · Nivel Profesional' },
  ].map(s => `
    <div class="spec-item">
      <span class="spec-icon ico">${s.icon}</span>
      <div>
        <div class="spec-label" data-en="${s.label_en}" data-es="${s.label_es}">${lang==='es'?s.label_es:s.label_en}</div>
        <div class="spec-val">${s.val||(lang==='es'?s.val_es:s.val_en)}</div>
        <div class="spec-sub" data-en="${s.sub_en}" data-es="${s.sub_es}">${lang==='es'?s.sub_es:s.sub_en}</div>
      </div>
    </div>`).join('');

  const recs = d.recommendations.map((r,i) => `
    <div class="rec-card reveal" style="transition-delay:${i*0.06}s">
      <div class="rec-quote" data-en="&ldquo;${r.quote_en}&rdquo;" data-es="&ldquo;${r.quote_es}&rdquo;">&ldquo;${lang==='es'?r.quote_es:r.quote_en}&rdquo;</div>
      <div class="rec-meta">
        <div>
          <span class="rec-name">${r.name}</span>
          <span class="rec-role" data-en=" · ${r.role_en}" data-es=" · ${r.role_es}"> · ${lang==='es'?r.role_es:r.role_en}</span>
        </div>
        <a href="${r.url}" class="rec-link" target="_blank" rel="noopener">LinkedIn →</a>
      </div>
    </div>`).join('');

  return `
  <section id="about">
    <div class="si">
      <span class="sec-tag" data-en="About" data-es="Sobre mí">${lang==='es'?'Sobre mí':'About'}</span>
      <h2 class="sec-h2" data-en="Deep in payments. <em>Built for more.</em>" data-es="Profundo en pagos. <em>Construido para más.</em>">${lang==='es'?'Profundo en pagos. <em>Construido para más.</em>':'Deep in payments. <em>Built for more.</em>'}</h2>
      <div class="spec-strip reveal">${specs}</div>
      <div class="about-grid">
        <div class="about-body">
          <p ${lang==='es'?'style="display:none"':''}><strong>I make regulated, multi-stakeholder products work</strong> — and fix the ones that don't. 10+ years in banking and financial services, 7 of them at Itaú Chile owning the roadmap for payments and collections at the country's largest private bank.</p>
          <p ${lang==='es'?'style="display:none"':''}>Shipped PAC 2.0, ePAC, QR Interoperability and a multi-bank payment layer from scratch — each one a case of conflicting stakeholders, real trade-offs, and a deadline. <strong>The method transfers</strong>: structured discovery, explicit trade-offs, measurable delivery — applied since 2024 to consumer fintech, cross-border operations and a 0-to-1 mobility platform.</p>
          <p ${lang==='es'?'style="display:none"':''}>Now based in Dublin. Open to selected consulting engagements and senior product leadership roles — payments, banking, or any product where money, risk and operations collide. Critical Skills Permit eligible.</p>
          <p ${lang==='en'?'style="display:none"':''}><strong>Hago que productos regulados y multi-stakeholder funcionen</strong> — y arreglo los que no. 10+ años en banca y servicios financieros, 7 de ellos en Itaú Chile como responsable del roadmap de pagos y cobranza en el banco privado más grande del país.</p>
          <p ${lang==='en'?'style="display:none"':''}>Entregué PAC 2.0, ePAC, Interoperabilidad QR y una capa de pago multibanco desde cero — cada uno un caso de stakeholders en conflicto, trade-offs reales y un plazo. <strong>El método se traslada</strong>: discovery estructurado, trade-offs explícitos, entrega medible — aplicado desde 2024 a fintech de consumo, operaciones internacionales y una plataforma de movilidad 0 a 1.</p>
          <p ${lang==='en'?'style="display:none"':''}>Basado en Dublín. Abierto a proyectos de consultoría seleccionados y roles senior de liderazgo de producto — pagos, banca, o cualquier producto donde dinero, riesgo y operaciones se cruzan. Elegible para Critical Skills Permit.</p>
        </div>
        <div>
          <div class="recs-header">
            <h3 class="recs-h3" data-en="What colleagues <em>say.</em>" data-es="Lo que dicen <em>los colegas.</em>">${lang==='es'?'Lo que dicen <em>los colegas.</em>':'What colleagues <em>say.</em>'}</h3>
            <p class="recs-sub" data-en="4 LinkedIn recommendations · direct managers and partners" data-es="4 recomendaciones · managers directos y partners">${lang==='es'?'4 recomendaciones · managers directos y partners':'4 LinkedIn recommendations · direct managers and partners'}</p>
          </div>
          <div class="recs-grid">${recs}</div>
        </div>
      </div>
    </div>
  </section>`;
}

// ── BACKGROUND ─────────────────────────────────────────────────
function renderBackground(lang) {
  const d = window.SITE;

  const exp = d.experience.map(e => {
    const role    = lang==='es' ? e.role_es    : e.role_en;
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
          ${bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>`;
  }).join('');

  const skills = d.skills.map(s => {
    const cat  = lang==='es' ? s.cat_es : s.cat_en;
    const icon = SKILL_ICO[s.cat_en] || ICO.pm;
    return `
    <div class="skill-group">
      <div class="skill-cat">
        <span class="skill-cat-icon ico">${icon}</span>
        <span class="skill-cat-label" data-en="${s.cat_en}" data-es="${s.cat_es}">${cat}</span>
      </div>
      <div class="skill-chips">
        ${s.items.map(i => `<span class="skill-chip">${i}</span>`).join('')}
      </div>
    </div>`;
  }).join('');

  const edu = d.education.map(e => {
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
          <span class="sec-tag" style="margin-top:32px;display:block;" data-en="Education" data-es="Educación">${lang==='es'?'Educación':'Education'}</span>
          <div class="edu-list">${edu}</div>
        </div>
      </div>
    </div>
  </section>`;
}

// ── PRODUCTS ────────────────────────────────────────────────────
const PROD_ICONS_SVG = [
  // Template
  `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="28" height="28" rx="4" stroke="rgba(196,160,90,.5)" stroke-width="1.5" fill="rgba(196,160,90,.06)"/>
    <path d="M10 12h16M10 17h16M10 22h10" stroke="rgba(196,160,90,.7)" stroke-width="1.5" stroke-linecap="round"/>
    <rect x="22" y="20" width="8" height="6" rx="1" stroke="rgba(196,160,90,.4)" stroke-width="1" fill="rgba(196,160,90,.08)"/>
  </svg>`,
  // Guide/book
  `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 6h14l6 6v18H8V6z" stroke="rgba(196,160,90,.5)" stroke-width="1.5" fill="rgba(196,160,90,.06)"/>
    <path d="M22 6v6h6" stroke="rgba(196,160,90,.4)" stroke-width="1.2" fill="none"/>
    <path d="M12 16h12M12 20h12M12 24h8" stroke="rgba(196,160,90,.6)" stroke-width="1.2" stroke-linecap="round"/>
  </svg>`,
  // Matrix/grid
  `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="28" height="28" rx="3" stroke="rgba(196,160,90,.4)" stroke-width="1.2" fill="none"/>
    <line x1="4" y1="13" x2="32" y2="13" stroke="rgba(196,160,90,.35)" stroke-width="1"/>
    <line x1="4" y1="22" x2="32" y2="22" stroke="rgba(196,160,90,.35)" stroke-width="1"/>
    <line x1="14" y1="4" x2="14" y2="32" stroke="rgba(196,160,90,.35)" stroke-width="1"/>
    <line x1="23" y1="4" x2="23" y2="32" stroke="rgba(196,160,90,.35)" stroke-width="1"/>
    <rect x="15" y="5" width="7" height="7" rx="1" fill="rgba(196,160,90,.18)"/>
    <rect x="5" y="14" width="7" height="7" rx="1" fill="rgba(90,180,130,.15)"/>
    <rect x="24" y="23" width="7" height="7" rx="1" fill="rgba(196,160,90,.1)"/>
  </svg>`,
  // Financial OS — coin/chart
  `<svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="18" cy="18" r="13" stroke="rgba(196,160,90,.5)" stroke-width="1.5" fill="rgba(196,160,90,.05)"/>
    <path d="M18 10v3M18 23v3" stroke="rgba(196,160,90,.6)" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M14 14s0-2 4-2 4 2 4 2-0 2-4 3-4 3-4 3 0 2 4 2 4-2 4-2" stroke="rgba(196,160,90,.75)" stroke-width="1.3" fill="none" stroke-linecap="round"/>
  </svg>`,
];

function renderProducts(lang) {
  const d = window.SITE;

  const cards = d.products.map((p,i) => {
    const type  = lang==='es' ? p.type_es  : p.type_en;
    const title = lang==='es' ? p.title_es : p.title_en;
    const desc  = lang==='es' ? p.desc_es  : p.desc_en;
    const foot  = p.coming_soon
      ? `<span class="prod-soon" data-en="Coming soon" data-es="Próximamente">${lang==='es'?'Próximamente':'Coming soon'}</span>`
      : `<a href="${p.url}" class="prod-cta" target="_blank" rel="noopener" data-en="Get it →" data-es="Obtener →">${lang==='es'?'Obtener →':'Get it →'}</a>`;
    return `
    <div class="prod-card reveal">
      <div class="prod-banner">${PROD_ICONS_SVG[i]||''}</div>
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

// ── WRITING ─────────────────────────────────────────────────────
function renderWriting(lang) {
  const d = window.SITE;
  const cards = d.writing.map(w => {
    const type  = lang==='es' ? w.type_es  : w.type_en;
    const title = lang==='es' ? w.title_es : w.title_en;
    const desc  = lang==='es' ? w.desc_es  : w.desc_en;
    return `
    <a href="${w.url}" class="writing-card reveal" target="_blank" rel="noopener">
      <div class="writing-icon">
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4h9l4 4v11H5V4z" stroke="rgba(196,160,90,.6)" stroke-width="1.2" fill="rgba(196,160,90,.05)"/>
          <path d="M14 4v4h4" stroke="rgba(196,160,90,.4)" stroke-width="1"/>
          <path d="M8 10h7M8 13h7M8 16h5" stroke="rgba(196,160,90,.5)" stroke-width="1" stroke-linecap="round"/>
        </svg>
      </div>
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

// ── CONTACT ─────────────────────────────────────────────────────
function renderContact(lang) {
  const d = window.SITE;

  const INTEREST_ICONS = {
    'Fiction & World-Building': ICO.book,
    'Films':    ICO.film,
    'Cycling':  ICO.cycle,
  };

  const interests = d.interests.map(it => `
    <div class="interest-item">
      <span class="interest-icon ico">${INTEREST_ICONS[it.title_en]||ICO.book}</span>
      <div class="interest-body">
        <div class="interest-title" data-en="${it.title_en}" data-es="${it.title_es}">${lang==='es'?it.title_es:it.title_en}</div>
        <div class="interest-desc" data-en="${it.desc_en}" data-es="${it.desc_es}">${lang==='es'?it.desc_es:it.desc_en}</div>
      </div>
    </div>`).join('');

  return `
  <section id="contact">
    <div class="si contact-grid">
      <div>
        <div class="sig-wrap reveal">
          <img src="${d.sig}" alt="" class="contact-sig" loading="lazy" aria-hidden="true">
        </div>
        <h2 class="contact-h2 reveal" data-en="Let's talk about <em>your problem.</em>" data-es="Hablemos de <em>tu problema.</em>">${lang==='es'?'Hablemos de <em>tu problema.</em>':'Let\'s talk about <em>your problem.</em>'}</h2>
        <p class="contact-sub reveal"
           data-en="Open to selected consulting engagements — discovery sprints, implementation, or fractional product leadership — and senior or lead PM / Head of Product roles in payments, banking or digital products across Europe."
           data-es="Abierto a proyectos de consultoría seleccionados — sprints de discovery, implementación, o liderazgo de producto fractional — y roles senior o lead PM / Head of Product en pagos, banca o productos digitales en Europa."
        >${lang==='es'?'Abierto a proyectos de consultoría seleccionados — sprints de discovery, implementación, o liderazgo de producto fractional — y roles senior o lead PM / Head of Product en pagos, banca o productos digitales en Europa.':'Open to selected consulting engagements — discovery sprints, implementation, or fractional product leadership — and senior or lead PM / Head of Product roles in payments, banking or digital products across Europe.'}</p>
        <p class="contact-detail reveal"
           data-en="Based in <strong>Dublin</strong> · Critical Skills Permit eligible · Alumni Universidad de Cantabria."
           data-es="Basado en <strong>Dublín</strong> · Elegible Critical Skills Permit · Alumni Universidad de Cantabria."
        >${lang==='es'?'Basado en <strong>Dublín</strong> · Elegible Critical Skills Permit · Alumni Universidad de Cantabria.':'Based in <strong>Dublin</strong> · Critical Skills Permit eligible · Alumni Universidad de Cantabria.'}</p>
        <div class="contact-links reveal">
          <a href="mailto:${d.email}?subject=Let's%20talk" class="contact-link-btn">
            <span class="clb-icon ico">${ICO.email}</span>
            <div><span class="clb-type" data-en="Start a conversation" data-es="Iniciar conversación">${lang==='es'?'Iniciar conversación':'Start a conversation'}</span><span class="clb-val">${d.email}</span></div>
          </a>
          <a href="${d.cv_url}" class="contact-link-btn" target="_blank">
            <span class="clb-icon ico">${ICO.document}</span>
            <div><span class="clb-type" data-en="Download" data-es="Descargar">${lang==='es'?'Descargar':'Download'}</span>
            <span class="clb-val">CV (PDF)</span></div>
          </a>
          <a href="${d.linkedin}" class="contact-link-btn" target="_blank" rel="noopener">
            <span class="clb-icon ico">${ICO.network}</span>
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
