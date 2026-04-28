// ═══════════════════════════════════════════════════
// SECTIONS: ABOUT · BACKGROUND · WRITING · CONTACT
// ═══════════════════════════════════════════════════
(function() {

// ── ABOUT ────────────────────────────────────────────
function renderAbout(lang) {
  const d = window.SITE;
  const recs = d.recommendations.map((r,i) => `
    <div class="rec-card reveal-up" style="animation-delay:${i*0.08}s">
      <div class="rec-quote" data-en="${r.quote_en}" data-es="${r.quote_es}">
        "${lang==='es' ? r.quote_es : r.quote_en}"
      </div>
      <p class="rec-full" data-en="${r.full_en}" data-es="${r.full_es}">
        ${lang==='es' ? r.full_es : r.full_en}
      </p>
      <div class="rec-meta">
        <strong class="rec-name">${r.name}</strong>
        <span class="rec-role" data-en="${r.role_en}" data-es="${r.role_es}">${lang==='es' ? r.role_es : r.role_en}</span>
        <a href="${r.url}" class="rec-link" target="_blank" rel="noopener" data-en="View on LinkedIn →" data-es="Ver en LinkedIn →">${lang==='es'?'Ver en LinkedIn →':'View on LinkedIn →'}</a>
      </div>
    </div>`).join('');

  return `
  <section id="about">
    <div class="section-inner about-grid">

      <div class="about-text reveal-up">
        <span class="section-tag" data-en="About" data-es="Sobre mí">${lang==='es'?'Sobre mí':'About'}</span>
        <h2 class="section-h2">
          ${lang==='es'
            ? 'Hago que el dinero se mueva <em>mejor.</em>'
            : 'I make money move <em>better.</em>'}
        </h2>
        <div class="about-meta">
          <div class="meta-row"><span class="meta-key" data-en="Location" data-es="Ubicación">${lang==='es'?'Ubicación':'Location'}</span><span class="meta-val">Dublin, Ireland · Open to relocation</span></div>
          <div class="meta-row"><span class="meta-key" data-en="Open to" data-es="Abierto a">${lang==='es'?'Abierto a':'Open to'}</span><span class="meta-val">Ireland · Spain · Europe · Remote LatAm</span></div>
          <div class="meta-row"><span class="meta-key">Email</span><span class="meta-val"><a href="mailto:${d.email}">${d.email}</a></span></div>
          <div class="meta-row"><span class="meta-key">LinkedIn</span><span class="meta-val"><a href="${d.linkedin}" target="_blank">montenegrofp</a></span></div>
          <div class="meta-row"><span class="meta-key" data-en="Languages" data-es="Idiomas">${lang==='es'?'Idiomas':'Languages'}</span><span class="meta-val">Spanish (native) · English (C1)</span></div>
        </div>
        <div class="about-body">
          <p data-lang="en" ${lang==='es'?'style="display:none"':''}>I have <strong>10+ years in banking and financial services</strong> — 7 of them at Itaú Chile, one of Latin America's largest banks, owning the product roadmap for digital payments and collections. I built PAC 2.0, led QR interoperability, delivered ePAC (Chile's first fully digital direct debit mandate platform), and managed squads across payment infrastructure and operational tooling.</p>
          <p data-lang="en" ${lang==='es'?'style="display:none"':''}>I moved to Dublin because <strong>the same problems I solved in Chile exist in Europe</strong>. SEPA Direct Debit is functionally what PAC is. PSD2 Open Banking is what Chile is still trying to legislate. The mandate lifecycle, failure classification, retry logic, R-message handling — I've lived all of it, at scale.</p>
          <p data-lang="en" ${lang==='es'?'style="display:none"':''}>I understand the full stack: payment rails, failure modes, mandate management, notification engines. I don't just know how payments work — I know <strong>why they fail</strong>, and what to do about it.</p>
          <p data-lang="es" ${lang==='en'?'style="display:none"':''}>Tengo <strong>10+ años en banca y servicios financieros</strong> — 7 en Itaú Chile, uno de los bancos más grandes de América Latina, siendo propietario del roadmap de pagos digitales y cobranza. Construí PAC 2.0, lideré la interoperabilidad QR y entregué ePAC (la primera plataforma de mandato de débito directo completamente digital de Chile).</p>
          <p data-lang="es" ${lang==='en'?'style="display:none"':''}>Me mudé a Dublín porque <strong>los mismos problemas que resolví en Chile existen en Europa</strong>. SEPA Direct Debit es funcionalmente lo que es PAC. PSD2 Open Banking es lo que Chile aún intenta legislar. El ciclo de vida del mandato, la clasificación de fallas, la lógica de reintentos — lo viví todo, a escala.</p>
        </div>
      </div>

      <div class="about-recs">
        <div class="recs-header reveal-up">
          <span class="section-tag" data-en="What colleagues say" data-es="Lo que dicen mis colegas">${lang==='es'?'Lo que dicen mis colegas':'What colleagues say'}</span>
          <h3 class="recs-h3">
            ${lang==='es'
              ? 'Recomendado en <em>LinkedIn</em>'
              : 'Recommended on <em>LinkedIn</em>'}
          </h3>
          <p class="recs-sub" data-en="4 recommendations from direct managers and partners" data-es="4 recomendaciones de managers directos y partners">
            ${lang==='es'?'4 recomendaciones de managers directos y partners':'4 recommendations from direct managers and partners'}
          </p>
        </div>
        <div class="recs-grid">${recs}</div>
      </div>

    </div>
  </section>`;
}

// ── BACKGROUND ───────────────────────────────────────
function renderBackground(lang) {
  const d = window.SITE;

  const expHTML = d.experience.map((e,i) => {
    const role    = lang==='es' ? e.role_es    : e.role_en;
    const bullets = lang==='es' ? e.bullets_es : e.bullets_en;
    return `
    <div class="exp-item reveal-up" style="animation-delay:${i*0.06}s">
      <div class="exp-meta">
        <span class="exp-years">${e.years}</span>
        <span class="exp-company">${e.company}</span>
        <span class="exp-loc">${e.location}</span>
      </div>
      <div class="exp-body">
        <div class="exp-role" data-en="${e.role_en}" data-es="${e.role_es}">${role}</div>
        <ul class="exp-bullets">
          ${bullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
      </div>
    </div>`;
  }).join('');

  const skillsHTML = d.skills.map(s => {
    const cat = lang==='es' ? s.cat_es : s.cat_en;
    return `
    <div class="skill-group reveal-up">
      <h4 class="skill-cat" data-en="${s.cat_en}" data-es="${s.cat_es}">${cat}</h4>
      <div class="skill-tags">
        ${s.items.map(it => `<span class="skill-tag">${it}</span>`).join('')}
      </div>
    </div>`;
  }).join('');

  const eduHTML = d.education.map(e => {
    const deg = lang==='es' ? e.degree_es : e.degree_en;
    return `
    <div class="edu-item reveal-up">
      <div class="edu-year">${e.year}</div>
      <div class="edu-body">
        <div class="edu-degree" data-en="${e.degree_en}" data-es="${e.degree_es}">${deg}</div>
        <div class="edu-school">${e.school}</div>
      </div>
    </div>`;
  }).join('');

  return `
  <section id="background">
    <div class="section-inner">

      <div class="bg-grid">
        <div class="bg-col-exp">
          <div class="section-header reveal-up">
            <span class="section-tag" data-en="Experience" data-es="Experiencia">${lang==='es'?'Experiencia':'Experience'}</span>
            <h2 class="section-h2">${lang==='es'?'Donde ocurrió <em>el trabajo</em>':'Where the work <em>happened</em>'}</h2>
          </div>
          <div class="exp-list">${expHTML}</div>
        </div>

        <div class="bg-col-right">
          <div class="skills-block">
            <div class="section-header reveal-up">
              <span class="section-tag" data-en="Skills" data-es="Habilidades">${lang==='es'?'Habilidades':'Skills'}</span>
              <h2 class="section-h2">${lang==='es'?'Qué aporto a un <em>equipo</em>':'What I bring to a <em>team</em>'}</h2>
            </div>
            <div class="skills-grid">${skillsHTML}</div>
          </div>

          <div class="edu-block">
            <div class="section-header reveal-up">
              <span class="section-tag" data-en="Education" data-es="Educación">${lang==='es'?'Educación':'Education'}</span>
            </div>
            <div class="edu-list">${eduHTML}</div>
          </div>
        </div>
      </div>

    </div>
  </section>`;
}

// ── WRITING ──────────────────────────────────────────
function renderWriting(lang) {
  const d = window.SITE;
  const articles = d.writing.map((w,i) => {
    const type  = lang==='es' ? w.type_es  : w.type_en;
    const title = lang==='es' ? w.title_es : w.title_en;
    const desc  = lang==='es' ? w.desc_es  : w.desc_en;
    return `
    <a href="${w.url}" class="writing-card reveal-up" target="_blank" rel="noopener" style="animation-delay:${i*0.1}s">
      <div class="writing-meta">
        <span class="writing-type" data-en="${w.type_en}" data-es="${w.type_es}">${type}</span>
        <span class="writing-year">${w.year}</span>
      </div>
      <h3 class="writing-title" data-en="${w.title_en}" data-es="${w.title_es}">${title}</h3>
      <p class="writing-desc" data-en="${w.desc_en}" data-es="${w.desc_es}">${desc}</p>
      <span class="writing-cta" data-en="Read on LinkedIn →" data-es="Leer en LinkedIn →">${lang==='es'?'Leer en LinkedIn →':'Read on LinkedIn →'}</span>
    </a>`;
  }).join('');

  return `
  <section id="writing">
    <div class="section-inner">
      <div class="section-header reveal-up">
        <span class="section-tag" data-en="Writing" data-es="Publicaciones">${lang==='es'?'Publicaciones':'Writing'}</span>
        <h2 class="section-h2">${lang==='es'?'Publicado en <em>LinkedIn</em>':'Published on <em>LinkedIn</em>'}</h2>
      </div>
      <div class="writing-grid">${articles}</div>
    </div>
  </section>`;
}

// ── CONTACT ──────────────────────────────────────────
function renderContact(lang) {
  const d = window.SITE;

  const interests = d.interests.map(it => {
    const title = lang==='es' ? it.title_es : it.title_en;
    const desc  = lang==='es' ? it.desc_es  : it.desc_en;
    return `
    <div class="interest-item reveal-up">
      <h4 class="interest-title" data-en="${it.title_en}" data-es="${it.title_es}">${title}</h4>
      <p class="interest-desc" data-en="${it.desc_en}" data-es="${it.desc_es}">${desc}</p>
    </div>`;
  }).join('');

  return `
  <section id="contact">
    <div class="section-inner contact-grid">

      <div class="contact-main">
        <img src="${d.sig}" alt="" class="contact-sig reveal-up" aria-hidden="true">
        <h2 class="section-h2 reveal-up">
          ${lang==='es'
            ? 'Abierto a la <em>oportunidad correcta.</em>'
            : 'Open to the right <em>opportunity.</em>'}
        </h2>
        <p class="contact-sub reveal-up"
           data-en="Senior PM roles in payments, collections or digital banking. Ireland and Spain preferred, remote LatAm welcome."
           data-es="Roles Senior PM en pagos, cobranza o banca digital. Irlanda y España preferidos, remoto LatAm bienvenido.">
          ${lang==='es'
            ? 'Roles Senior PM en pagos, cobranza o banca digital. Irlanda y España preferidos, remoto LatAm bienvenido.'
            : 'Senior PM roles in payments, collections or digital banking. Ireland and Spain preferred, remote LatAm welcome.'}
        </p>
        <p class="contact-detail reveal-up">
          ${lang==='es'
            ? 'Basado en <strong>Dublin, Irlanda</strong> · Disponible para reubicación a España · Alumni Universidad de Cantabria · Disponible inmediatamente.'
            : 'Based in <strong>Dublin, Ireland</strong> · Open to relocation to Spain · Alumni of Universidad de Cantabria · Available immediately.'}
        </p>
        <div class="contact-links reveal-up">
          <a href="${d.cv_url}" class="contact-link-btn" target="_blank">
            <span class="clb-icon">↓</span>
            <span class="clb-label" data-en="Download CV (PDF)" data-es="Descargar CV (PDF)">${lang==='es'?'Descargar CV (PDF)':'Download CV (PDF)'}</span>
          </a>
          <a href="mailto:${d.email}" class="contact-link-btn">
            <span class="clb-icon">✉</span>
            <div>
              <span class="clb-type">Email</span>
              <span class="clb-val">${d.email}</span>
            </div>
          </a>
          <a href="${d.linkedin}" class="contact-link-btn" target="_blank" rel="noopener">
            <span class="clb-icon">in</span>
            <div>
              <span class="clb-type">LinkedIn</span>
              <span class="clb-val">linkedin.com/in/montenegrofp</span>
            </div>
          </a>
        </div>
      </div>

      <div class="contact-interests">
        <span class="section-tag reveal-up" data-en="Beyond work" data-es="Más allá del trabajo">${lang==='es'?'Más allá del trabajo':'Beyond work'}</span>
        <h3 class="contact-interests-h3 reveal-up">
          ${lang==='es'
            ? 'Lo que me mantiene <em>pensando</em>'
            : 'What keeps me <em>thinking</em>'}
        </h3>
        <div class="interests-list">${interests}</div>
      </div>

    </div>
  </section>`;
}

// ── PRODUCTS ─────────────────────────────────────────
function renderProducts(lang) {
  const d = window.SITE;
  const prods = d.products.map((p,i) => {
    const type  = lang==='es' ? p.type_es  : p.type_en;
    const title = lang==='es' ? p.title_es : p.title_en;
    const desc  = lang==='es' ? p.desc_es  : p.desc_en;
    const cta   = p.coming_soon
      ? `<span class="prod-soon" data-en="Coming soon" data-es="Próximamente">${lang==='es'?'Próximamente':'Coming soon'}</span>`
      : `<a href="${p.url}" class="prod-cta" target="_blank" rel="noopener" data-en="Get it →" data-es="Obtener →">${lang==='es'?'Obtener →':'Get it →'}</a>`;
    return `
    <div class="prod-card reveal-up" style="animation-delay:${i*0.08}s">
      <img src="${p.img}" alt="${title}" class="prod-img" loading="lazy">
      <div class="prod-body">
        <span class="prod-type" data-en="${p.type_en}" data-es="${p.type_es}">${type}</span>
        <h3 class="prod-title" data-en="${p.title_en}" data-es="${p.title_es}">${title}</h3>
        <p class="prod-desc" data-en="${p.desc_en}" data-es="${p.desc_es}">${desc}</p>
        <div class="prod-foot">
          <span class="prod-price">${p.price} <span data-en="one-time" data-es="pago único">${lang==='es'?'pago único':'one-time'}</span></span>
          ${cta}
        </div>
      </div>
    </div>`;
  }).join('');

  return `
  <section id="products">
    <div class="section-inner">
      <div class="section-header reveal-up">
        <span class="section-tag" data-en="Resources" data-es="Recursos">${lang==='es'?'Recursos':'Resources'}</span>
        <h2 class="section-h2">${lang==='es'?'Herramientas del <em>trabajo real</em>':'Tools built from <em>real PM work</em>'}</h2>
        <p class="section-sub reveal-up" data-en="Practical resources for fintech teams, PMs and founders — built from 10 years of hands-on payments delivery." data-es="Recursos prácticos para equipos fintech, PMs y fundadores — construidos desde 10 años de entregas reales en pagos.">
          ${lang==='es'?'Recursos prácticos para equipos fintech, PMs y fundadores — construidos desde 10 años de entregas reales en pagos.':'Practical resources for fintech teams, PMs and founders — built from 10 years of hands-on payments delivery.'}
        </p>
      </div>
      <div class="prods-grid">${prods}</div>
    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.about    = renderAbout;
window.SECTIONS.products = renderProducts;
window.SECTIONS.background = renderBackground;
window.SECTIONS.writing  = renderWriting;
window.SECTIONS.contact  = renderContact;

})();
