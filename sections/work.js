(function() {

const VIS = {
  monevol: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#0b1a2e,#0a2010)">
    <span class="case-num">01</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <rect x="35" y="6" width="130" height="108" rx="10" fill="rgba(255,255,255,.03)" stroke="rgba(196,160,90,.2)" stroke-width="1"/>
      <text x="100" y="22" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.65)" text-anchor="middle">9:41</text>
      <rect x="44" y="28" width="112" height="18" rx="4" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.18)" stroke-width=".5"/>
      <text x="50" y="39" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(250,247,242,.4)">Balance</text>
      <text x="50" y="50" font-family="DM Mono,monospace" font-size="8.5" fill="rgba(196,160,90,.9)">$425.300 CLP</text>
      <rect x="44" y="56" width="52" height="26" rx="3" fill="rgba(196,160,90,.05)" stroke="rgba(196,160,90,.14)" stroke-width=".5"/>
      <rect x="100" y="56" width="56" height="26" rx="3" fill="rgba(196,160,90,.05)" stroke="rgba(196,160,90,.14)" stroke-width=".5"/>
      <text x="70" y="67" font-family="DM Sans,sans-serif" font-size="5.5" fill="rgba(250,247,242,.38)" text-anchor="middle">Vivienda</text>
      <rect x="47" y="72" width="46" height="4" rx="2" fill="rgba(196,160,90,.28)"/>
      <text x="128" y="67" font-family="DM Sans,sans-serif" font-size="5.5" fill="rgba(250,247,242,.38)" text-anchor="middle">Transporte</text>
      <rect x="103" y="72" width="28" height="4" rx="2" fill="rgba(53,160,112,.4)"/>
      <text x="100" y="104" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">98% usability · 34 interviews · 60 screens</text>
    </svg></div>`,

  remesas: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#0a1828,#091e10)">
    <span class="case-num">02</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="14" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">EUROPE → BOLIVIA</text>
      <circle cx="36" cy="64" r="20" fill="rgba(196,160,90,.07)" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="36" y="60" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,.45)" text-anchor="middle">EUR</text>
      <text x="36" y="72" font-family="DM Mono,monospace" font-size="11" fill="rgba(196,160,90,.88)" text-anchor="middle">€</text>
      <line x1="58" y1="64" x2="142" y2="64" stroke="rgba(196,160,90,.22)" stroke-width="1.5" stroke-dasharray="5,3"/>
      <rect x="78" y="54" width="44" height="20" rx="3" fill="rgba(53,160,112,.08)" stroke="rgba(53,160,112,.25)" stroke-width=".5"/>
      <text x="100" y="62" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(53,160,112,.85)" text-anchor="middle">TXN-084</text>
      <text x="100" y="71" font-family="DM Mono,monospace" font-size="6" fill="rgba(53,160,112,.7)" text-anchor="middle">MATCH ✓</text>
      <circle cx="164" cy="64" r="20" fill="rgba(53,160,112,.07)" stroke="rgba(53,160,112,.28)" stroke-width="1"/>
      <text x="164" y="60" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(250,247,242,.45)" text-anchor="middle">BOB</text>
      <text x="164" y="72" font-family="DM Mono,monospace" font-size="10" fill="rgba(53,160,112,.88)" text-anchor="middle">Bs.</text>
      <text x="100" y="102" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">−70% workload · 100% traceable · €0 tooling</text>
    </svg></div>`,

  karigab: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#18101e,#0c1810)">
    <span class="case-num">03</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="13" font-family="DM Mono,monospace" font-size="6" fill="rgba(196,160,90,.6)" text-anchor="middle">TIKTOK → WHATSAPP → SHEETS</text>
      <rect x="8" y="22" width="34" height="34" rx="7" fill="rgba(254,44,85,.1)" stroke="rgba(254,44,85,.32)" stroke-width="1"/>
      <text x="25" y="44" font-family="DM Sans,sans-serif" font-size="15" fill="rgba(254,44,85,.88)" text-anchor="middle">♪</text>
      <line x1="42" y1="39" x2="58" y2="39" stroke="rgba(196,160,90,.22)" stroke-width="1.5" stroke-dasharray="3,2"/>
      <rect x="58" y="22" width="34" height="34" rx="7" fill="rgba(37,211,102,.09)" stroke="rgba(37,211,102,.3)" stroke-width="1"/>
      <text x="75" y="43" font-family="DM Sans,sans-serif" font-size="13" fill="rgba(37,211,102,.88)" text-anchor="middle">💬</text>
      <line x1="92" y1="39" x2="108" y2="39" stroke="rgba(196,160,90,.22)" stroke-width="1.5" stroke-dasharray="3,2"/>
      <rect x="108" y="22" width="34" height="34" rx="7" fill="rgba(52,168,83,.09)" stroke="rgba(52,168,83,.3)" stroke-width="1"/>
      <text x="125" y="43" font-family="DM Sans,sans-serif" font-size="11" fill="rgba(52,168,83,.88)" text-anchor="middle">▦</text>
      <line x1="142" y1="39" x2="158" y2="39" stroke="rgba(196,160,90,.22)" stroke-width="1.5" stroke-dasharray="3,2"/>
      <rect x="158" y="22" width="34" height="34" rx="7" fill="rgba(196,160,90,.09)" stroke="rgba(196,160,90,.36)" stroke-width="1"/>
      <text x="175" y="37" font-family="DM Mono,monospace" font-size="6" fill="rgba(196,160,90,.88)" text-anchor="middle">MATCH</text>
      <text x="175" y="49" font-family="DM Mono,monospace" font-size="9" fill="rgba(53,160,112,.88)" text-anchor="middle">✓</text>
      <text x="100" y="78" font-family="DM Sans,sans-serif" font-size="6.5" fill="rgba(250,247,242,.35)" text-anchor="middle">Social-first retail · Bolivia</text>
      <text x="100" y="92" font-family="DM Mono,monospace" font-size="6" fill="rgba(53,160,112,.6)" text-anchor="middle">−85% workload · Bs.0 cost · 7 days</text>
    </svg></div>`,

  pac: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#0a1828,#091e12)">
    <span class="case-num">04</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="16" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">COLLECTIONS LIFECYCLE</text>
      <rect x="16" y="24" width="168" height="58" rx="4" fill="rgba(255,255,255,.02)" stroke="rgba(196,160,90,.12)" stroke-width=".5"/>
      <rect x="22" y="30" width="36" height="46" rx="2" fill="rgba(192,64,64,.06)" stroke="rgba(192,64,64,.2)" stroke-width=".5"/>
      <text x="40" y="48" font-family="DM Mono,monospace" font-size="7" fill="rgba(192,64,64,.8)" text-anchor="middle">Fail</text>
      <text x="40" y="60" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.55)" text-anchor="middle">AM04</text>
      <text x="40" y="70" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">MD01</text>
      <rect x="66" y="30" width="52" height="46" rx="2" fill="rgba(196,160,90,.05)" stroke="rgba(196,160,90,.15)" stroke-width=".5"/>
      <text x="92" y="48" font-family="DM Mono,monospace" font-size="7" fill="rgba(196,160,90,.8)" text-anchor="middle">Classify</text>
      <text x="92" y="60" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle">Retriable?</text>
      <rect x="126" y="30" width="52" height="46" rx="2" fill="rgba(53,160,112,.06)" stroke="rgba(53,160,112,.22)" stroke-width=".5"/>
      <text x="152" y="48" font-family="DM Mono,monospace" font-size="7" fill="rgba(53,160,112,.88)" text-anchor="middle">Retry ✓</text>
      <text x="152" y="60" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(53,160,112,.6)" text-anchor="middle">+Alert</text>
      <text x="100" y="102" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">−30% complaints · +20% efficiency · +15% collection</text>
    </svg></div>`,

  qr: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#0c1a0e,#1a280a)">
    <span class="case-num">05</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="14" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">QR PAYMENT FLOW</text>
      <circle cx="36" cy="60" r="18" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="36" y="65" font-family="DM Mono,monospace" font-size="10" fill="rgba(196,160,90,.88)" text-anchor="middle">▦</text>
      <line x1="56" y1="60" x2="80" y2="60" stroke="rgba(196,160,90,.3)" stroke-width="1.5"/>
      <circle cx="100" cy="60" r="18" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="100" y="65" font-family="DM Mono,monospace" font-size="10" fill="rgba(196,160,90,.88)" text-anchor="middle">✓</text>
      <line x1="120" y1="60" x2="144" y2="60" stroke="rgba(53,160,112,.5)" stroke-width="1.5"/>
      <circle cx="164" cy="60" r="18" fill="rgba(53,160,112,.08)" stroke="rgba(53,160,112,.35)" stroke-width="1"/>
      <text x="164" y="65" font-family="DM Mono,monospace" font-size="10" fill="rgba(53,160,112,.88)" text-anchor="middle">$</text>
      <text x="100" y="100" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">PIX-benchmarked · +25% adoption · $15M annual</text>
    </svg></div>`,

  epac: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#180a2e,#0a1828)">
    <span class="case-num">06</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="14" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">MANDATE ACTIVATION</text>
      <rect x="14" y="26" width="72" height="44" rx="4" fill="rgba(192,64,64,.06)" stroke="rgba(192,64,64,.2)" stroke-width="1"/>
      <text x="50" y="43" font-family="DM Sans,sans-serif" font-size="7.5" fill="rgba(250,247,242,.38)" text-anchor="middle">PAPER</text>
      <text x="50" y="60" font-family="DM Mono,monospace" font-size="11" fill="rgba(192,64,64,.7)" text-anchor="middle">45 days</text>
      <text x="100" y="52" font-family="DM Mono,monospace" font-size="15" fill="rgba(196,160,90,.55)" text-anchor="middle">→</text>
      <rect x="114" y="26" width="72" height="44" rx="4" fill="rgba(53,160,112,.07)" stroke="rgba(53,160,112,.28)" stroke-width="1"/>
      <text x="150" y="43" font-family="DM Sans,sans-serif" font-size="7.5" fill="rgba(250,247,242,.38)" text-anchor="middle">ePAC</text>
      <text x="150" y="60" font-family="DM Mono,monospace" font-size="11" fill="rgba(53,160,112,.88)" text-anchor="middle">24 hours</text>
      <text x="100" y="100" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">~70% adoption · 3-month delivery · Forpay partner</text>
    </svg></div>`,

  multibank: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#0a1828,#2a160a)">
    <span class="case-num">07</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="14" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">MULTI-BANK INTEGRATION</text>
      <rect x="10" y="24" width="52" height="14" rx="3" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.22)" stroke-width=".5"/>
      <text x="36" y="34" font-family="DM Sans,sans-serif" font-size="6.5" fill="rgba(196,160,90,.7)" text-anchor="middle">Santander</text>
      <rect x="10" y="44" width="52" height="14" rx="3" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.22)" stroke-width=".5"/>
      <text x="36" y="54" font-family="DM Sans,sans-serif" font-size="6.5" fill="rgba(196,160,90,.7)" text-anchor="middle">Itaú</text>
      <rect x="10" y="64" width="52" height="14" rx="3" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.22)" stroke-width=".5"/>
      <text x="36" y="74" font-family="DM Sans,sans-serif" font-size="6.5" fill="rgba(196,160,90,.7)" text-anchor="middle">BancoEstado</text>
      <line x1="62" y1="31" x2="96" y2="54" stroke="rgba(196,160,90,.18)" stroke-width="1"/>
      <line x1="62" y1="51" x2="96" y2="54" stroke="rgba(196,160,90,.18)" stroke-width="1"/>
      <line x1="62" y1="71" x2="96" y2="54" stroke="rgba(196,160,90,.18)" stroke-width="1"/>
      <rect x="96" y="40" width="68" height="28" rx="5" fill="rgba(53,160,112,.09)" stroke="rgba(53,160,112,.32)" stroke-width="1"/>
      <text x="130" y="52" font-family="DM Sans,sans-serif" font-size="6.5" fill="rgba(53,160,112,.88)" text-anchor="middle">One integration</text>
      <text x="130" y="62" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(53,160,112,.6)" text-anchor="middle">API + Portal</text>
      <text x="100" y="102" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">CLP 50M+ avg · 5d→1d · 3 pilot companies</text>
    </svg></div>`,

  engine: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#182a0a,#0a1828)">
    <span class="case-num">08</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="14" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">NOTIFICATION ENGINE</text>
      <circle cx="100" cy="56" r="20" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="100" y="53" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.8)" text-anchor="middle">Event</text>
      <text x="100" y="63" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.55)" text-anchor="middle">Router</text>
      <line x1="84" y1="46" x2="50" y2="30" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="38" y="28" font-size="11" text-anchor="middle">📱</text>
      <text x="38" y="40" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle">Push</text>
      <line x1="116" y1="46" x2="150" y2="30" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="162" y="28" font-size="11" text-anchor="middle">✉️</text>
      <text x="162" y="40" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle">Email</text>
      <line x1="100" y1="76" x2="100" y2="90" stroke="rgba(53,160,112,.4)" stroke-width="1"/>
      <text x="100" y="99" font-size="11" text-anchor="middle">💬</text>
      <text x="100" y="112" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">SMS · Plug-and-play · Bank-wide</text>
    </svg></div>`,

  dashboard: `<div class="case-vis-bg" style="background:linear-gradient(135deg,#0a2010,#180a2e)">
    <span class="case-num">09</span>
    <svg viewBox="0 0 200 120" style="width:100%;max-width:180px">
      <text x="100" y="14" font-family="DM Mono,monospace" font-size="6.5" fill="rgba(196,160,90,.6)" text-anchor="middle">COLLECTIONS MONITORING</text>
      <rect x="16" y="22" width="168" height="12" rx="2" fill="rgba(196,160,90,.06)" stroke="rgba(196,160,90,.14)" stroke-width=".5"/>
      <text x="22" y="31" font-family="DM Mono,monospace" font-size="6" fill="rgba(250,247,242,.38)">Collection Rate</text>
      <text x="178" y="31" font-family="DM Mono,monospace" font-size="6" fill="rgba(53,160,112,.88)" text-anchor="end">87.3% ▲</text>
      <rect x="16" y="38" width="168" height="12" rx="2" fill="rgba(196,160,90,.06)" stroke="rgba(196,160,90,.14)" stroke-width=".5"/>
      <text x="22" y="47" font-family="DM Mono,monospace" font-size="6" fill="rgba(250,247,242,.38)">Failures Today</text>
      <text x="178" y="47" font-family="DM Mono,monospace" font-size="6" fill="rgba(192,64,64,.8)" text-anchor="end">142</text>
      <rect x="16" y="54" width="168" height="30" rx="2" fill="rgba(255,255,255,.015)" stroke="rgba(196,160,90,.1)" stroke-width=".5"/>
      <polyline points="22,80 52,68 82,73 112,62 142,66 172,56" fill="none" stroke="rgba(53,160,112,.6)" stroke-width="1.5"/>
      <text x="100" y="104" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">40% faster detection · 3 audience views</text>
    </svg></div>`,
};

const SKILL_ICONS = {
  'Payments & Banking':'💳','Payment Management':'🗂️','Technical':'⚙️',
  'Research & Design':'🔍','Delivery':'🚀','Tools':'🛠️',
};

function caseCard(c, lang) {
  const title = lang==='es' ? c.title_es : c.title_en;
  const desc  = lang==='es' ? c.desc_es  : c.desc_en;
  const tag   = lang==='es' ? c.tag_es   : c.tag_en;
  const sepa  = lang==='es' ? c.sepa_es  : c.sepa_en;
  const ctaLbl= lang==='es' ? c.cta_es   : c.cta_en;

  const metrics = (c.metrics||[]).map(m=>`
    <div class="oc">
      <div class="oc-n">${m.num}</div>
      <div class="oc-l" data-en="${m.label_en}" data-es="${m.label_es}">${lang==='es'?m.label_es:m.label_en}</div>
    </div>`).join('');

  const cta = c.cta_url ? `
    <a href="${c.cta_url}" class="case-cta"
       data-en="${c.cta_en}" data-es="${c.cta_es}"
       ${c.cta_url.startsWith('http')?'target="_blank" rel="noopener"':''}>${ctaLbl} →</a>` : '';

  return `
  <div class="cc reveal">
    ${VIS[c.vis_type]||''}
    <div class="cc-body">
      <p class="cc-tag" data-en="${c.tag_en}" data-es="${c.tag_es}">${tag}</p>
      <h3 class="cc-title" data-en="${c.title_en}" data-es="${c.title_es}">${title}</h3>
      <p class="cc-desc" data-en="${c.desc_en}" data-es="${c.desc_es}">${desc}</p>
      <span class="eu-note" data-en="${c.sepa_en}" data-es="${c.sepa_es}">${sepa}</span>
      <div class="cc-metrics">${metrics}</div>
      ${cta}
    </div>
  </div>`;
}

function renderWork(lang) {
  const d = window.SITE;
  const cl = lang==='es' ? d.consulting.label_es : d.consulting.label_en;
  const cd = lang==='es' ? d.consulting.desc_es  : d.consulting.desc_en;
  const il = lang==='es' ? d.itau.label_es        : d.itau.label_en;
  const id = lang==='es' ? d.itau.desc_es         : d.itau.desc_en;

  return `
  <section id="work">
    <div class="si">
      <div class="work-header">
        <div>
          <span class="sec-tag" data-en="Selected work" data-es="Trabajo seleccionado">${lang==='es'?'Trabajo seleccionado':'Selected work'}</span>
          <h2 class="sec-h2" style="margin-bottom:0" data-en="Work I've <em>built.</em>" data-es="Trabajo que <em>construí.</em>">${lang==='es'?'Trabajo que <em>construí.</em>':'Work I\'ve <em>built.</em>'}</h2>
        </div>
      </div>

      <div class="work-tabs reveal">
        <button class="work-tab active" onclick="switchTab('consulting',this)">
          <span class="tab-dot consulting-dot"></span>
          <span class="tab-label">
            <strong data-en="Consulting" data-es="Consultoría">${lang==='es'?'Consultoría':'Consulting'}</strong>
            <small data-en="${d.consulting.label_en}" data-es="${d.consulting.label_es}">${cl}</small>
          </span>
        </button>
        <button class="work-tab" onclick="switchTab('itau',this)">
          <span class="tab-dot itau-dot"></span>
          <span class="tab-label">
            <strong>Itaú Bank</strong>
            <small data-en="${d.itau.label_en}" data-es="${d.itau.label_es}">${il}</small>
          </span>
        </button>
      </div>

      <div id="tab-consulting" class="tab-panel active">
        <div class="tab-intro"><span class="tab-intro-icon">💼</span>
          <span data-en="${d.consulting.desc_en}" data-es="${d.consulting.desc_es}">${cd}</span>
        </div>
        <div class="cases-grid">${d.consulting.cases.map(c=>caseCard(c,lang)).join('')}</div>
      </div>

      <div id="tab-itau" class="tab-panel hidden">
        <div class="tab-intro"><span class="tab-intro-icon">🏦</span>
          <span data-en="${d.itau.desc_en}" data-es="${d.itau.desc_es}">${id}</span>
        </div>
        <div class="cases-grid">${d.itau.cases.map(c=>caseCard(c,lang)).join('')}</div>
      </div>
    </div>
  </section>`;
}

window.SECTIONS = window.SECTIONS || {};
window.SECTIONS.work = renderWork;
})();
