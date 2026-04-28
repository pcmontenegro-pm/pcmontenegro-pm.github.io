// ═══════════════════════════════════════════════════
// SECTION: WORK
// ═══════════════════════════════════════════════════
(function() {

// ── SVG visualizations per case ──────────────────────
const VIS = {

  monevol: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#0d1a2e,#0a2818)">
      <span class="case-num">01</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <rect x="30" y="8" width="140" height="114" rx="10" fill="rgba(255,255,255,0.04)" stroke="rgba(180,150,90,0.2)" stroke-width="1"/>
        <text x="100" y="26" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.7)" text-anchor="middle">9:41</text>
        <rect x="40" y="32" width="120" height="20" rx="4" fill="rgba(180,150,90,0.08)" stroke="rgba(180,150,90,0.2)" stroke-width="0.5"/>
        <text x="50" y="45" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.5)">Saldo total</text>
        <text x="50" y="56" font-family="DM Mono,monospace" font-size="9" fill="rgba(180,150,90,0.9)" font-weight="500">$425.300 CLP</text>
        <rect x="40" y="62" width="55" height="30" rx="3" fill="rgba(180,150,90,0.06)" stroke="rgba(180,150,90,0.15)" stroke-width="0.5"/>
        <rect x="105" y="62" width="55" height="30" rx="3" fill="rgba(180,150,90,0.06)" stroke="rgba(180,150,90,0.15)" stroke-width="0.5"/>
        <text x="67" y="74" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(250,247,242,0.4)" text-anchor="middle">Vivienda</text>
        <rect x="44" y="78" width="47" height="5" rx="2" fill="rgba(180,150,90,0.3)"/>
        <text x="132" y="74" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(250,247,242,0.4)" text-anchor="middle">Transporte</text>
        <rect x="109" y="78" width="30" height="5" rx="2" fill="rgba(76,175,125,0.4)"/>
        <rect x="40" y="100" width="120" height="14" rx="7" fill="rgba(180,150,90,0.12)" stroke="rgba(180,150,90,0.3)" stroke-width="0.5"/>
        <text x="100" y="110" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(180,150,90,0.8)" text-anchor="middle">+ Crear presupuesto</text>
      </svg>
    </div>`,

  remesas: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#0a1a2e,#0d2040)">
      <span class="case-num">02</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">EUROPE → BOLIVIA</text>
        <circle cx="38" cy="68" r="22" fill="rgba(180,150,90,0.08)" stroke="rgba(180,150,90,0.3)" stroke-width="1"/>
        <text x="38" y="63" font-family="DM Sans,sans-serif" font-size="7.5" fill="rgba(250,247,242,0.5)" text-anchor="middle">EUR</text>
        <text x="38" y="76" font-family="DM Mono,monospace" font-size="12" fill="rgba(180,150,90,0.9)" text-anchor="middle">€</text>
        <line x1="62" y1="68" x2="138" y2="68" stroke="rgba(180,150,90,0.25)" stroke-width="1.5" stroke-dasharray="5,3"/>
        <text x="100" y="62" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(76,175,125,0.9)" text-anchor="middle">TXN-084</text>
        <text x="100" y="75" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(76,175,125,0.7)" text-anchor="middle">MATCH ✓</text>
        <circle cx="162" cy="68" r="22" fill="rgba(76,175,125,0.08)" stroke="rgba(76,175,125,0.3)" stroke-width="1"/>
        <text x="162" y="63" font-family="DM Sans,sans-serif" font-size="7.5" fill="rgba(250,247,242,0.5)" text-anchor="middle">BOB</text>
        <text x="162" y="76" font-family="DM Mono,monospace" font-size="10" fill="rgba(76,175,125,0.9)" text-anchor="middle">Bs.</text>
        <text x="100" y="106" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">fraud controls · reconciliation · tracking</text>
      </svg>
    </div>`,

  karigab: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#1a1020,#0d1a10)">
      <span class="case-num">03</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(180,150,90,0.6)" text-anchor="middle">TIKTOK → WHATSAPP → SHEETS</text>
        <rect x="8" y="26" width="36" height="36" rx="8" fill="rgba(254,44,85,0.12)" stroke="rgba(254,44,85,0.35)" stroke-width="1"/>
        <text x="26" y="49" font-family="DM Sans,sans-serif" font-size="16" fill="rgba(254,44,85,0.9)" text-anchor="middle">♪</text>
        <line x1="44" y1="44" x2="62" y2="44" stroke="rgba(180,150,90,0.25)" stroke-width="1.5" stroke-dasharray="3,2"/>
        <rect x="62" y="26" width="36" height="36" rx="8" fill="rgba(37,211,102,0.1)" stroke="rgba(37,211,102,0.35)" stroke-width="1"/>
        <text x="80" y="49" font-family="DM Sans,sans-serif" font-size="14" fill="rgba(37,211,102,0.9)" text-anchor="middle">💬</text>
        <line x1="98" y1="44" x2="116" y2="44" stroke="rgba(180,150,90,0.25)" stroke-width="1.5" stroke-dasharray="3,2"/>
        <rect x="116" y="26" width="36" height="36" rx="8" fill="rgba(52,168,83,0.1)" stroke="rgba(52,168,83,0.35)" stroke-width="1"/>
        <text x="134" y="49" font-family="DM Sans,sans-serif" font-size="12" fill="rgba(52,168,83,0.9)" text-anchor="middle">▦</text>
        <line x1="152" y1="44" x2="164" y2="44" stroke="rgba(180,150,90,0.25)" stroke-width="1.5" stroke-dasharray="3,2"/>
        <rect x="164" y="26" width="28" height="36" rx="6" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.4)" stroke-width="1"/>
        <text x="178" y="42" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(180,150,90,0.9)" text-anchor="middle">MATCH</text>
        <text x="178" y="55" font-family="DM Mono,monospace" font-size="10" fill="rgba(76,175,125,0.9)" text-anchor="middle">✓</text>
        <text x="100" y="84" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">Social-first retail · Bolivia</text>
        <text x="100" y="98" font-family="DM Sans,sans-serif" font-size="7.5" fill="rgba(76,175,125,0.6)" text-anchor="middle">−85% workload · Bs.0 cost · 7 days</text>
      </svg>
    </div>`,

  pac: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#0a1a2e,#0d2818)">
      <span class="case-num">04</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="20" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">MANDATE LIFECYCLE</text>
        <rect x="20" y="30" width="160" height="60" rx="4" fill="rgba(255,255,255,0.03)" stroke="rgba(180,150,90,0.15)" stroke-width="0.5"/>
        <text x="30" y="48" font-family="DM Mono,monospace" font-size="8" fill="rgba(220,80,80,0.8)">Fail</text>
        <text x="30" y="62" font-family="DM Mono,monospace" font-size="7.5" fill="rgba(180,150,90,0.6)">AM04</text>
        <text x="80" y="48" font-family="DM Mono,monospace" font-size="8" fill="rgba(76,175,125,0.9)">Retry ✓</text>
        <text x="80" y="62" font-family="DM Mono,monospace" font-size="7.5" fill="rgba(180,150,90,0.6)">MD01</text>
        <text x="135" y="48" font-family="DM Mono,monospace" font-size="7.5" fill="rgba(180,150,90,0.6)">AC01</text>
        <text x="100" y="104" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">−30% complaints · +15% collection rate</text>
      </svg>
    </div>`,

  qr: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#0d1a10,#1a2e0a)">
      <span class="case-num">05</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">QR PAYMENT FLOW</text>
        <circle cx="44" cy="62" r="16" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.3)" stroke-width="1"/>
        <text x="44" y="67" font-family="DM Mono,monospace" font-size="8" fill="rgba(180,150,90,0.9)" text-anchor="middle">▦</text>
        <line x1="62" y1="62" x2="80" y2="62" stroke="rgba(180,150,90,0.3)" stroke-width="1.5"/>
        <circle cx="100" cy="62" r="16" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.3)" stroke-width="1"/>
        <text x="100" y="67" font-family="DM Mono,monospace" font-size="8" fill="rgba(180,150,90,0.9)" text-anchor="middle">✓</text>
        <line x1="118" y1="62" x2="136" y2="62" stroke="rgba(76,175,125,0.5)" stroke-width="1.5"/>
        <circle cx="156" cy="62" r="16" fill="rgba(76,175,125,0.1)" stroke="rgba(76,175,125,0.4)" stroke-width="1"/>
        <text x="156" y="67" font-family="DM Mono,monospace" font-size="8" fill="rgba(76,175,125,0.9)" text-anchor="middle">$</text>
        <text x="100" y="104" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">PIX-benchmarked · +25% adoption · $15M</text>
      </svg>
    </div>`,

  epac: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#1a0a2e,#0a1a2e)">
      <span class="case-num">06</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">MANDATE ACTIVATION</text>
        <rect x="20" y="28" width="70" height="36" rx="4" fill="rgba(180,150,90,0.06)" stroke="rgba(180,150,90,0.2)" stroke-width="1"/>
        <text x="55" y="42" font-family="DM Sans,sans-serif" font-size="8" fill="rgba(250,247,242,0.4)" text-anchor="middle">PAPER</text>
        <text x="55" y="57" font-family="DM Mono,monospace" font-size="10" fill="rgba(220,80,80,0.7)" text-anchor="middle">45 days</text>
        <text x="100" y="50" font-family="DM Mono,monospace" font-size="14" fill="rgba(180,150,90,0.6)" text-anchor="middle">→</text>
        <rect x="110" y="28" width="70" height="36" rx="4" fill="rgba(76,175,125,0.08)" stroke="rgba(76,175,125,0.3)" stroke-width="1"/>
        <text x="145" y="42" font-family="DM Sans,sans-serif" font-size="8" fill="rgba(250,247,242,0.4)" text-anchor="middle">ePAC</text>
        <text x="145" y="57" font-family="DM Mono,monospace" font-size="10" fill="rgba(76,175,125,0.9)" text-anchor="middle">24 hours</text>
        <text x="100" y="90" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">70% end-user subscription · 3mo delivery</text>
      </svg>
    </div>`,

  multibank: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#0a1a2e,#2e1a0a)">
      <span class="case-num">07</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">MULTI-BANK PAYMENT</text>
        <rect x="20" y="26" width="50" height="16" rx="3" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.25)" stroke-width="0.5"/>
        <text x="45" y="37" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(180,150,90,0.7)" text-anchor="middle">Banco 1</text>
        <rect x="20" y="50" width="50" height="16" rx="3" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.25)" stroke-width="0.5"/>
        <text x="45" y="61" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(180,150,90,0.7)" text-anchor="middle">Banco 2</text>
        <rect x="20" y="74" width="50" height="16" rx="3" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.25)" stroke-width="0.5"/>
        <text x="45" y="85" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(180,150,90,0.7)" text-anchor="middle">Banco N</text>
        <line x1="70" y1="34" x2="110" y2="58" stroke="rgba(180,150,90,0.2)" stroke-width="1"/>
        <line x1="70" y1="58" x2="110" y2="58" stroke="rgba(180,150,90,0.2)" stroke-width="1"/>
        <line x1="70" y1="82" x2="110" y2="58" stroke="rgba(180,150,90,0.2)" stroke-width="1"/>
        <rect x="110" y="44" width="70" height="28" rx="6" fill="rgba(76,175,125,0.1)" stroke="rgba(76,175,125,0.35)" stroke-width="1"/>
        <text x="145" y="57" font-family="DM Sans,sans-serif" font-size="7.5" fill="rgba(76,175,125,0.9)" text-anchor="middle">One integration</text>
        <text x="100" y="110" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">CLP 50M+ avg ticket · same-day</text>
      </svg>
    </div>`,

  engine: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#1a2e0a,#0a1a2e)">
      <span class="case-num">08</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">NOTIFICATION ENGINE</text>
        <circle cx="100" cy="58" r="18" fill="rgba(180,150,90,0.1)" stroke="rgba(180,150,90,0.3)" stroke-width="1"/>
        <text x="100" y="54" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.8)" text-anchor="middle">Event</text>
        <text x="100" y="66" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">Router</text>
        <line x1="82" y1="48" x2="50" y2="32" stroke="rgba(180,150,90,0.3)" stroke-width="1"/>
        <text x="40" y="30" font-size="12" text-anchor="middle">📱</text>
        <text x="40" y="42" font-family="DM Mono,monospace" font-size="6" fill="rgba(180,150,90,0.6)" text-anchor="middle">Push</text>
        <line x1="118" y1="48" x2="150" y2="32" stroke="rgba(180,150,90,0.3)" stroke-width="1"/>
        <text x="160" y="30" font-size="12" text-anchor="middle">✉</text>
        <text x="160" y="42" font-family="DM Mono,monospace" font-size="6" fill="rgba(180,150,90,0.6)" text-anchor="middle">Email</text>
        <line x1="100" y1="76" x2="100" y2="90" stroke="rgba(76,175,125,0.4)" stroke-width="1"/>
        <text x="100" y="100" font-size="12" text-anchor="middle">💬</text>
        <text x="100" y="114" font-family="DM Mono,monospace" font-size="6" fill="rgba(180,150,90,0.6)" text-anchor="middle">SMS · Plug-and-play</text>
      </svg>
    </div>`,

  dashboard: `
    <div class="case-vis-bg" style="background:linear-gradient(135deg,#0a2818,#1a0a2e)">
      <span class="case-num">09</span>
      <svg viewBox="0 0 200 130" style="width:100%;max-width:190px">
        <text x="100" y="16" font-family="DM Mono,monospace" font-size="7" fill="rgba(180,150,90,0.6)" text-anchor="middle">COLLECTIONS MONITORING</text>
        <rect x="20" y="24" width="160" height="12" rx="2" fill="rgba(180,150,90,0.08)" stroke="rgba(180,150,90,0.15)" stroke-width="0.5"/>
        <text x="25" y="33" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(250,247,242,0.4)">Collection Rate</text>
        <text x="175" y="33" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(76,175,125,0.9)" text-anchor="end">87.3% ▲</text>
        <rect x="20" y="42" width="160" height="12" rx="2" fill="rgba(180,150,90,0.08)" stroke="rgba(180,150,90,0.15)" stroke-width="0.5"/>
        <text x="25" y="51" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(250,247,242,0.4)">Failures Today</text>
        <text x="175" y="51" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(220,80,80,0.8)" text-anchor="end">142</text>
        <rect x="20" y="62" width="160" height="30" rx="2" fill="rgba(255,255,255,0.02)" stroke="rgba(180,150,90,0.1)" stroke-width="0.5"/>
        <polyline points="25,88 55,75 85,80 115,68 145,72 175,62" fill="none" stroke="rgba(76,175,125,0.6)" stroke-width="1.5"/>
        <text x="100" y="108" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,0.35)" text-anchor="middle">40% faster detection · 3 audience views</text>
      </svg>
    </div>`,
};

// ── Card renderer ─────────────────────────────────────
function caseCard(c, lang) {
  const title   = lang === 'es' ? c.title_es   : c.title_en;
  const desc    = lang === 'es' ? c.desc_es    : c.desc_en;
  const tag     = lang === 'es' ? c.tag_es     : c.tag_en;
  const sepa    = lang === 'es' ? c.sepa_es    : c.sepa_en;
  const cta_lbl = lang === 'es' ? c.cta_es     : c.cta_en;

  const metrics = (c.metrics || []).map(m => `
    <div class="oc">
      <div class="oc-n">${m.num}</div>
      <div class="oc-l" data-en="${m.label_en}" data-es="${m.label_es}">${lang==='es'?m.label_es:m.label_en}</div>
    </div>`).join('');

  const ctaBtn = c.cta_url ? `
    <a href="${c.cta_url}" class="case-cta"
       data-en="${c.cta_en}" data-es="${c.cta_es}"
       ${c.cta_url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>${cta_lbl}</a>` : '';

  return `
    <div class="cc reveal-up">
      ${VIS[c.vis_type] || ''}
      <div class="cc-body">
        <p class="cc-tag" data-en="${c.tag_en}" data-es="${c.tag_es}">${tag}</p>
        <h3 class="cc-title" data-en="${c.title_en}" data-es="${c.title_es}">${title}</h3>
        <p class="cc-desc" data-en="${c.desc_en}" data-es="${c.desc_es}">${desc}</p>
        <span class="eu-note" data-en="${c.sepa_en}" data-es="${c.sepa_es}">${sepa}</span>
        <div class="cc-metrics">${metrics}</div>
        ${ctaBtn}
      </div>
    </div>`;
}

// ── Main render ───────────────────────────────────────
function renderWork(lang) {
  const d = window.SITE;

  const consultLabel = lang==='es' ? d.consulting.label_es : d.consulting.label_en;
  const consultDesc  = lang==='es' ? d.consulting.desc_es  : d.consulting.desc_en;
  const itauLabel    = lang==='es' ? d.itau.label_es       : d.itau.label_en;
  const itauDesc     = lang==='es' ? d.itau.desc_es        : d.itau.desc_en;

  const consultCards = d.consulting.cases.map(c => caseCard(c, lang)).join('');
  const itauCards    = d.itau.cases.map(c => caseCard(c, lang)).join('');

  return `
  <section id="work">
    <div class="section-inner">
      <div class="section-header reveal-up">
        <span class="section-tag" data-en="Selected work" data-es="Trabajo seleccionado">${lang==='es'?'Trabajo seleccionado':'Selected work'}</span>
        <h2 class="section-h2">
          ${lang==='es'
            ? 'Proyectos que <em>construí</em>'
            : 'Work I\'ve <em>built</em>'}
        </h2>
      </div>

      <div class="work-tabs reveal-up">
        <button class="work-tab active" onclick="switchTab('consulting',this)" data-tab="consulting">
          <span class="tab-dot consulting-dot"></span>
          <span class="tab-label">
            <strong data-en="Consulting" data-es="Consultoría">${lang==='es'?'Consultoría':'Consulting'}</strong>
            <small data-en="${d.consulting.label_en}" data-es="${d.consulting.label_es}">${consultLabel}</small>
          </span>
        </button>
        <button class="work-tab" onclick="switchTab('itau',this)" data-tab="itau">
          <span class="tab-dot itau-dot"></span>
          <span class="tab-label">
            <strong data-en="Itaú Bank" data-es="Itaú Bank">${lang==='es'?'Itaú Bank':'Itaú Bank'}</strong>
            <small data-en="${d.itau.label_en}" data-es="${d.itau.label_es}">${itauLabel}</small>
          </span>
        </button>
      </div>

      <div id="tab-consulting" class="tab-panel active">
        <p class="tab-desc reveal-up" data-en="${d.consulting.desc_en}" data-es="${d.consulting.desc_es}">${consultDesc}</p>
        <div class="cases-grid">${consultCards}</div>
      </div>

      <div id="tab-itau" class="tab-panel hidden">
        <p class="tab-desc reveal-up" data-en="${d.itau.desc_en}" data-es="${d.itau.desc_es}">${itauDesc}</p>
        <div class="cases-grid">${itauCards}</div>
      </div>

    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.work = renderWork;

})();
