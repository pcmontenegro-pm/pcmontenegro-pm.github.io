(function() {

const VIS = {
  monevol: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0d1a2e 0%,#16243a 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <!-- Phone frame -->
      <rect x="62" y="8" width="76" height="104" rx="10" fill="rgba(12,24,44,1)" stroke="rgba(196,160,90,.35)" stroke-width="1"/>
      <!-- Screen -->
      <rect x="66" y="14" width="68" height="92" rx="7" fill="#0a1626"/>
      <!-- Status bar -->
      <text x="100" y="23" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.5)" text-anchor="middle">9:41</text>
      <!-- Balance card -->
      <rect x="70" y="28" width="60" height="22" rx="4" fill="rgba(196,160,90,.1)" stroke="rgba(196,160,90,.25)" stroke-width=".5"/>
      <text x="100" y="36" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.6)" text-anchor="middle">BALANCE</text>
      <text x="100" y="46" font-family="DM Mono,monospace" font-size="9" fill="rgba(196,160,90,.95)" text-anchor="middle">$425K</text>
      <!-- Budget bars -->
      <text x="73" y="58" font-family="DM Sans,sans-serif" font-size="5" fill="rgba(240,223,184,.5)">Housing</text>
      <rect x="73" y="61" width="54" height="3" rx="1" fill="rgba(255,255,255,.07)"/>
      <rect x="73" y="61" width="36" height="3" rx="1" fill="rgba(196,160,90,.7)"/>
      <text x="73" y="72" font-family="DM Sans,sans-serif" font-size="5" fill="rgba(240,223,184,.5)">Groceries</text>
      <rect x="73" y="75" width="54" height="3" rx="1" fill="rgba(255,255,255,.07)"/>
      <rect x="73" y="75" width="50" height="3" rx="1" fill="rgba(192,80,80,.7)"/>
      <text x="73" y="86" font-family="DM Sans,sans-serif" font-size="5" fill="rgba(240,223,184,.5)">Transport</text>
      <rect x="73" y="89" width="54" height="3" rx="1" fill="rgba(255,255,255,.07)"/>
      <rect x="73" y="89" width="28" height="3" rx="1" fill="rgba(90,180,130,.7)"/>
      <!-- Bottom nav dots -->
      <circle cx="88" cy="101" r="2" fill="rgba(196,160,90,.8)"/>
      <circle cx="96" cy="101" r="1.5" fill="rgba(255,255,255,.2)"/>
      <circle cx="104" cy="101" r="1.5" fill="rgba(255,255,255,.2)"/>
      <circle cx="112" cy="101" r="1.5" fill="rgba(255,255,255,.2)"/>
    </svg></div>`,

  remesas: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0e1e30 0%,#141e2e 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="6" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">EUROPE → BOLIVIA</text>
      <!-- Left node -->
      <circle cx="40" cy="62" r="22" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.3)" stroke-width="1"/>
      <text x="40" y="57" font-family="DM Mono,monospace" font-size="6" fill="rgba(240,223,184,.6)" text-anchor="middle">EUR</text>
      <text x="40" y="70" font-family="DM Mono,monospace" font-size="14" fill="rgba(196,160,90,.9)" text-anchor="middle">€</text>
      <!-- Connector line with dots -->
      <line x1="64" y1="62" x2="136" y2="62" stroke="rgba(196,160,90,.2)" stroke-width="1" stroke-dasharray="4,3"/>
      <!-- Center badge -->
      <rect x="76" y="50" width="48" height="24" rx="4" fill="rgba(20,36,56,1)" stroke="rgba(196,160,90,.35)" stroke-width="1"/>
      <text x="100" y="60" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(240,223,184,.7)" text-anchor="middle">TXN-084</text>
      <text x="100" y="70" font-family="DM Mono,monospace" font-size="6" fill="rgba(90,180,130,.9)" text-anchor="middle">✓ MATCH</text>
      <!-- Right node -->
      <circle cx="160" cy="62" r="22" fill="rgba(90,180,130,.07)" stroke="rgba(90,180,130,.3)" stroke-width="1"/>
      <text x="160" y="57" font-family="DM Mono,monospace" font-size="6" fill="rgba(240,223,184,.6)" text-anchor="middle">BOB</text>
      <text x="160" y="71" font-family="DM Mono,monospace" font-size="10" fill="rgba(90,180,130,.9)" text-anchor="middle">Bs.</text>
      <!-- Stats -->
      <text x="100" y="104" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">−70% workload · 100% traceable · €0 cost</text>
    </svg></div>`,

  karigab: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0e1826 0%,#1a1428 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="1.5">LIVE · ORDER · MATCH · DELIVER</text>
      <!-- Flow boxes — consistent navy/gold style, NO brand colors -->
      <rect x="10" y="28" width="38" height="38" rx="6" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.3)" stroke-width="1"/>
      <text x="29" y="44" font-family="DM Sans,sans-serif" font-size="10" fill="rgba(196,160,90,.85)" text-anchor="middle">📹</text>
      <text x="29" y="57" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.5)" text-anchor="middle">Live</text>
      <!-- Arrow -->
      <text x="54" y="50" font-family="DM Mono,monospace" font-size="10" fill="rgba(196,160,90,.4)" text-anchor="middle">›</text>
      <rect x="62" y="28" width="38" height="38" rx="6" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.3)" stroke-width="1"/>
      <text x="81" y="44" font-family="DM Sans,sans-serif" font-size="10" fill="rgba(196,160,90,.85)" text-anchor="middle">💬</text>
      <text x="81" y="57" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.5)" text-anchor="middle">Order</text>
      <!-- Arrow -->
      <text x="106" y="50" font-family="DM Mono,monospace" font-size="10" fill="rgba(196,160,90,.4)" text-anchor="middle">›</text>
      <rect x="114" y="28" width="38" height="38" rx="6" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.3)" stroke-width="1"/>
      <text x="133" y="44" font-family="DM Mono,monospace" font-size="9" fill="rgba(90,180,130,.9)" text-anchor="middle">✓</text>
      <text x="133" y="57" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.5)" text-anchor="middle">Match</text>
      <!-- Arrow -->
      <text x="158" y="50" font-family="DM Mono,monospace" font-size="10" fill="rgba(196,160,90,.4)" text-anchor="middle">›</text>
      <rect x="162" y="28" width="28" height="38" rx="6" fill="rgba(90,180,130,.08)" stroke="rgba(90,180,130,.3)" stroke-width="1"/>
      <text x="176" y="44" font-family="DM Mono,monospace" font-size="9" fill="rgba(90,180,130,.9)" text-anchor="middle">$</text>
      <text x="176" y="57" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.5)" text-anchor="middle">Pay</text>
      <!-- Separator -->
      <line x1="10" y1="82" x2="190" y2="82" stroke="rgba(196,160,90,.1)" stroke-width=".5"/>
      <text x="100" y="95" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">−85% workload · Bs.0 cost · 7 days</text>
      <!-- Inventory note -->
      <text x="100" y="106" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.28)" text-anchor="middle">Physical + Digital inventory · WhatsApp native</text>
    </svg></div>`,

  cyclesafe: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#1a0c0c 0%,#2a1010 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(192,80,80,.65)" text-anchor="middle" letter-spacing="2">SAFETY MAP · BUENOS AIRES</text>
      <rect x="10" y="18" width="180" height="78" rx="4" fill="rgba(10,16,28,.8)" stroke="rgba(192,80,80,.2)" stroke-width=".5"/>
      <line x1="10" y1="36" x2="190" y2="36" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
      <line x1="10" y1="54" x2="190" y2="54" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
      <line x1="10" y1="72" x2="190" y2="72" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
      <line x1="52" y1="18" x2="52" y2="96" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
      <line x1="100" y1="18" x2="100" y2="96" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
      <line x1="148" y1="18" x2="148" y2="96" stroke="rgba(255,255,255,.04)" stroke-width=".5"/>
      <line x1="10" y1="54" x2="190" y2="54" stroke="rgba(255,255,255,.09)" stroke-width="3"/>
      <line x1="100" y1="18" x2="100" y2="96" stroke="rgba(255,255,255,.09)" stroke-width="3"/>
      <line x1="10" y1="54" x2="190" y2="54" stroke="rgba(192,80,80,.7)" stroke-width="2"/>
      <line x1="52" y1="18" x2="52" y2="96" stroke="rgba(90,180,130,.5)" stroke-width="2"/>
      <line x1="10" y1="36" x2="190" y2="36" stroke="rgba(196,160,90,.4)" stroke-width="1.5" stroke-dasharray="5,3"/>
      <circle cx="100" cy="54" r="5" fill="rgba(192,80,80,.25)" stroke="rgba(192,80,80,.8)" stroke-width="1"/>
      <circle cx="100" cy="54" r="2" fill="rgba(192,80,80,.9)"/>
      <circle cx="52" cy="36" r="4" fill="rgba(90,180,130,.2)" stroke="rgba(90,180,130,.8)" stroke-width="1"/>
      <circle cx="52" cy="36" r="1.5" fill="rgba(90,180,130,.9)"/>
      <circle cx="148" cy="72" r="4" fill="rgba(196,160,90,.15)" stroke="rgba(196,160,90,.7)" stroke-width="1"/>
      <circle cx="148" cy="72" r="1.5" fill="rgba(196,160,90,.8)"/>
      <rect x="14" y="99" width="5" height="5" rx="1" fill="rgba(192,80,80,.7)"/>
      <text x="22" y="105" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.4)">Ciclovía</text>
      <rect x="64" y="99" width="5" height="5" rx="1" fill="rgba(90,180,130,.7)"/>
      <text x="72" y="105" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.4)">Safe</text>
      <rect x="102" y="99" width="5" height="5" rx="1" fill="rgba(196,160,90,.6)"/>
      <text x="110" y="105" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.4)">Mixed</text>
      <text x="152" y="105" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.25)">40 users</text>
    </svg></div>`,

  pac: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0c1a2c 0%,#0e2018 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">COLLECTIONS LIFECYCLE</text>
      <!-- Step 1: Fail -->
      <rect x="10" y="24" width="44" height="60" rx="4" fill="rgba(192,80,80,.06)" stroke="rgba(192,80,80,.25)" stroke-width=".8"/>
      <text x="32" y="40" font-family="DM Mono,monospace" font-size="6" fill="rgba(192,80,80,.8)" text-anchor="middle">FAIL</text>
      <text x="32" y="52" font-family="DM Mono,monospace" font-size="9" fill="rgba(192,80,80,.7)" text-anchor="middle">✗</text>
      <text x="32" y="65" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.5)" text-anchor="middle">AM04</text>
      <text x="32" y="75" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.35)" text-anchor="middle">MD01</text>
      <!-- Arrow -->
      <text x="60" y="57" font-family="DM Mono,monospace" font-size="12" fill="rgba(196,160,90,.4)" text-anchor="middle">›</text>
      <!-- Step 2: Classify -->
      <rect x="70" y="24" width="60" height="60" rx="4" fill="rgba(196,160,90,.06)" stroke="rgba(196,160,90,.22)" stroke-width=".8"/>
      <text x="100" y="40" font-family="DM Mono,monospace" font-size="6" fill="rgba(196,160,90,.8)" text-anchor="middle">CLASSIFY</text>
      <text x="100" y="54" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(240,223,184,.55)" text-anchor="middle">Retriable?</text>
      <rect x="78" y="59" width="44" height="8" rx="2" fill="rgba(196,160,90,.12)" stroke="rgba(196,160,90,.2)" stroke-width=".5"/>
      <text x="100" y="66" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.7)" text-anchor="middle">→ Retry logic</text>
      <!-- Arrow -->
      <text x="138" y="57" font-family="DM Mono,monospace" font-size="12" fill="rgba(196,160,90,.4)" text-anchor="middle">›</text>
      <!-- Step 3: Recover -->
      <rect x="148" y="24" width="44" height="60" rx="4" fill="rgba(90,180,130,.06)" stroke="rgba(90,180,130,.28)" stroke-width=".8"/>
      <text x="170" y="40" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(90,180,130,.9)" text-anchor="middle">RECOVER</text>
      <text x="170" y="54" font-family="DM Mono,monospace" font-size="11" fill="rgba(90,180,130,.9)" text-anchor="middle">✓</text>
      <text x="170" y="68" font-family="DM Mono,monospace" font-size="5" fill="rgba(90,180,130,.6)" text-anchor="middle">+Alert</text>
      <!-- Stats -->
      <text x="100" y="104" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">−30% complaints · +20% efficiency · +15% rate</text>
    </svg></div>`,

  qr: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0c1e18 0%,#14201a 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">QR PAYMENT FLOW</text>
      <!-- Old flow: broken -->
      <text x="28" y="26" font-family="DM Mono,monospace" font-size="5" fill="rgba(240,223,184,.3)" text-anchor="middle">BEFORE</text>
      <rect x="10" y="30" width="36" height="22" rx="3" fill="rgba(196,160,90,.06)" stroke="rgba(196,160,90,.2)" stroke-width=".5"/>
      <text x="28" y="44" font-family="DM Mono,monospace" font-size="8" fill="rgba(196,160,90,.7)" text-anchor="middle">▦</text>
      <line x1="48" y1="41" x2="62" y2="41" stroke="rgba(192,80,80,.4)" stroke-width="1" stroke-dasharray="3,2"/>
      <rect x="64" y="30" width="36" height="22" rx="3" fill="rgba(192,80,80,.06)" stroke="rgba(192,80,80,.2)" stroke-width=".5"/>
      <text x="82" y="41" font-family="DM Mono,monospace" font-size="6" fill="rgba(192,80,80,.7)" text-anchor="middle">Error</text>
      <text x="82" y="50" font-family="DM Mono,monospace" font-size="5" fill="rgba(192,80,80,.5)" text-anchor="middle">↳ drop-off</text>
      <!-- Separator line -->
      <line x1="10" y1="66" x2="190" y2="66" stroke="rgba(196,160,90,.12)" stroke-width=".5" stroke-dasharray="6,4"/>
      <!-- New flow: fixed -->
      <text x="28" y="78" font-family="DM Mono,monospace" font-size="5" fill="rgba(90,180,130,.5)" text-anchor="middle">AFTER</text>
      <rect x="10" y="82" width="36" height="22" rx="3" fill="rgba(196,160,90,.06)" stroke="rgba(196,160,90,.2)" stroke-width=".5"/>
      <text x="28" y="96" font-family="DM Mono,monospace" font-size="8" fill="rgba(196,160,90,.7)" text-anchor="middle">▦</text>
      <line x1="48" y1="93" x2="62" y2="93" stroke="rgba(90,180,130,.5)" stroke-width="1"/>
      <rect x="64" y="82" width="36" height="22" rx="3" fill="rgba(90,180,130,.06)" stroke="rgba(90,180,130,.25)" stroke-width=".5"/>
      <text x="82" y="93" font-family="DM Mono,monospace" font-size="6" fill="rgba(90,180,130,.85)" text-anchor="middle">Clear</text>
      <text x="82" y="101" font-family="DM Mono,monospace" font-size="5" fill="rgba(90,180,130,.55)" text-anchor="middle">status</text>
      <line x1="102" y1="93" x2="116" y2="93" stroke="rgba(90,180,130,.5)" stroke-width="1"/>
      <rect x="118" y="82" width="36" height="22" rx="3" fill="rgba(90,180,130,.08)" stroke="rgba(90,180,130,.3)" stroke-width=".5"/>
      <text x="136" y="96" font-family="DM Mono,monospace" font-size="10" fill="rgba(90,180,130,.9)" text-anchor="middle">$</text>
      <!-- PIX badge -->
      <rect x="162" y="84" width="28" height="18" rx="2" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.2)" stroke-width=".5"/>
      <text x="176" y="95" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.65)" text-anchor="middle">PIX ref</text>
    </svg></div>`,

  epac: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#150e2a 0%,#0e1828 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">MANDATE ACTIVATION</text>
      <!-- Paper box -->
      <rect x="12" y="24" width="76" height="66" rx="5" fill="rgba(192,80,80,.05)" stroke="rgba(192,80,80,.22)" stroke-width="1"/>
      <text x="50" y="40" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(240,223,184,.38)" text-anchor="middle">PAPER</text>
      <text x="50" y="60" font-family="DM Mono,monospace" font-size="18" fill="rgba(192,80,80,.6)" text-anchor="middle">45d</text>
      <text x="50" y="76" font-family="DM Mono,monospace" font-size="6" fill="rgba(192,80,80,.45)" text-anchor="middle">manual · slow</text>
      <text x="50" y="86" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(192,80,80,.3)" text-anchor="middle">drop-off risk</text>
      <!-- Arrow -->
      <text x="100" y="62" font-family="DM Mono,monospace" font-size="16" fill="rgba(196,160,90,.5)" text-anchor="middle">→</text>
      <!-- Digital box -->
      <rect x="112" y="24" width="76" height="66" rx="5" fill="rgba(90,180,130,.06)" stroke="rgba(90,180,130,.28)" stroke-width="1"/>
      <text x="150" y="40" font-family="DM Sans,sans-serif" font-size="7" fill="rgba(240,223,184,.38)" text-anchor="middle">ePAC</text>
      <text x="150" y="60" font-family="DM Mono,monospace" font-size="16" fill="rgba(90,180,130,.9)" text-anchor="middle">24h</text>
      <text x="150" y="76" font-family="DM Mono,monospace" font-size="6" fill="rgba(90,180,130,.55)" text-anchor="middle">digital · fast</text>
      <text x="150" y="86" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(90,180,130,.4)" text-anchor="middle">~70% adoption</text>
      <!-- Stats -->
      <text x="100" y="108" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">Forpay partner · 3-month delivery</text>
    </svg></div>`,

  multibank: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0e1828 0%,#1e140e 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">MULTI-BANK INTEGRATION</text>
      <!-- Bank nodes -->
      <rect x="8" y="24" width="48" height="14" rx="3" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.22)" stroke-width=".5"/>
      <text x="32" y="34" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(240,223,184,.65)" text-anchor="middle">Santander</text>
      <rect x="8" y="44" width="48" height="14" rx="3" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.22)" stroke-width=".5"/>
      <text x="32" y="54" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(240,223,184,.65)" text-anchor="middle">Itaú</text>
      <rect x="8" y="64" width="48" height="14" rx="3" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.22)" stroke-width=".5"/>
      <text x="32" y="74" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(240,223,184,.65)" text-anchor="middle">BancoEstado</text>
      <rect x="8" y="84" width="48" height="14" rx="3" fill="rgba(196,160,90,.04)" stroke="rgba(196,160,90,.1)" stroke-width=".5"/>
      <text x="32" y="94" font-family="DM Sans,sans-serif" font-size="5.5" fill="rgba(240,223,184,.3)" text-anchor="middle">+ others</text>
      <!-- Connector lines -->
      <line x1="58" y1="31" x2="86" y2="58" stroke="rgba(196,160,90,.2)" stroke-width=".8"/>
      <line x1="58" y1="51" x2="86" y2="58" stroke="rgba(196,160,90,.2)" stroke-width=".8"/>
      <line x1="58" y1="71" x2="86" y2="58" stroke="rgba(196,160,90,.2)" stroke-width=".8"/>
      <line x1="58" y1="91" x2="86" y2="58" stroke="rgba(196,160,90,.12)" stroke-width=".5"/>
      <!-- Integration node -->
      <rect x="86" y="40" width="58" height="36" rx="6" fill="rgba(90,180,130,.08)" stroke="rgba(90,180,130,.32)" stroke-width="1"/>
      <text x="115" y="55" font-family="DM Sans,sans-serif" font-size="6" fill="rgba(90,180,130,.85)" text-anchor="middle">One layer</text>
      <text x="115" y="66" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(90,180,130,.6)" text-anchor="middle">API + Portal</text>
      <!-- Arrow to corp -->
      <line x1="146" y1="58" x2="160" y2="58" stroke="rgba(90,180,130,.5)" stroke-width="1"/>
      <!-- Corp client -->
      <rect x="160" y="44" width="32" height="28" rx="4" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.3)" stroke-width=".8"/>
      <text x="176" y="56" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.7)" text-anchor="middle">Corp</text>
      <text x="176" y="66" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.5)" text-anchor="middle">client</text>
      <text x="100" y="104" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.4)" text-anchor="middle">CLP 50M+ avg · 5d→1d · 3 pilot cos.</text>
    </svg></div>`,

  engine: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0e1e14 0%,#0c1826 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">NOTIFICATION ENGINE</text>
      <!-- Central router -->
      <circle cx="100" cy="58" r="22" fill="rgba(196,160,90,.07)" stroke="rgba(196,160,90,.28)" stroke-width="1"/>
      <text x="100" y="54" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.75)" text-anchor="middle">Event</text>
      <text x="100" y="64" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle">Router</text>
      <!-- Push -->
      <line x1="82" y1="44" x2="52" y2="28" stroke="rgba(196,160,90,.22)" stroke-width=".8"/>
      <rect x="24" y="18" width="36" height="24" rx="4" fill="rgba(196,160,90,.07)" stroke="rgba(196,160,90,.2)" stroke-width=".5"/>
      <text x="42" y="28" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(240,223,184,.55)" text-anchor="middle">Push</text>
      <text x="42" y="37" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.4)" text-anchor="middle">mobile</text>
      <!-- Email -->
      <line x1="118" y1="44" x2="148" y2="28" stroke="rgba(196,160,90,.22)" stroke-width=".8"/>
      <rect x="140" y="18" width="36" height="24" rx="4" fill="rgba(196,160,90,.07)" stroke="rgba(196,160,90,.2)" stroke-width=".5"/>
      <text x="158" y="28" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(240,223,184,.55)" text-anchor="middle">Email</text>
      <text x="158" y="37" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.4)" text-anchor="middle">async</text>
      <!-- SMS -->
      <line x1="100" y1="80" x2="100" y2="94" stroke="rgba(90,180,130,.35)" stroke-width=".8"/>
      <rect x="76" y="94" width="48" height="20" rx="4" fill="rgba(90,180,130,.06)" stroke="rgba(90,180,130,.25)" stroke-width=".5"/>
      <text x="100" y="104" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(90,180,130,.75)" text-anchor="middle">SMS · fallback</text>
      <!-- Plug-and-play badge -->
      <rect x="140" y="52" width="50" height="14" rx="2" fill="rgba(196,160,90,.08)" stroke="rgba(196,160,90,.18)" stroke-width=".5"/>
      <text x="165" y="62" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.6)" text-anchor="middle">plug-and-play</text>
    </svg></div>`,

  dashboard: `<div class="case-vis-bg" style="background:linear-gradient(150deg,#0e2016 0%,#14102a 100%)">
    
    <svg viewBox="0 0 200 120" style="width:100%;max-width:190px">
      <text x="100" y="12" font-family="DM Mono,monospace" font-size="5.5" fill="rgba(196,160,90,.55)" text-anchor="middle" letter-spacing="2">COLLECTIONS MONITORING</text>
      <!-- Dashboard frame -->
      <rect x="10" y="18" width="180" height="80" rx="5" fill="rgba(12,22,38,.8)" stroke="rgba(196,160,90,.15)" stroke-width=".5"/>
      <!-- Row 1 -->
      <rect x="16" y="24" width="168" height="14" rx="2" fill="rgba(196,160,90,.05)" stroke="rgba(196,160,90,.1)" stroke-width=".3"/>
      <text x="22" y="34" font-family="DM Mono,monospace" font-size="6" fill="rgba(240,223,184,.45)">Collection Rate</text>
      <text x="178" y="34" font-family="DM Mono,monospace" font-size="6" fill="rgba(90,180,130,.9)" text-anchor="end">87.3% ▲</text>
      <!-- Row 2 -->
      <rect x="16" y="42" width="168" height="14" rx="2" fill="rgba(196,160,90,.05)" stroke="rgba(196,160,90,.1)" stroke-width=".3"/>
      <text x="22" y="52" font-family="DM Mono,monospace" font-size="6" fill="rgba(240,223,184,.45)">Failed today</text>
      <text x="178" y="52" font-family="DM Mono,monospace" font-size="6" fill="rgba(192,80,80,.85)" text-anchor="end">142 ↓</text>
      <!-- Chart area -->
      <rect x="16" y="60" width="168" height="32" rx="2" fill="rgba(255,255,255,.015)" stroke="rgba(196,160,90,.08)" stroke-width=".3"/>
      <polyline points="20,88 48,76 76,80 104,68 132,72 160,60 180,62"
        fill="none" stroke="rgba(90,180,130,.55)" stroke-width="1.5"/>
      <polyline points="20,88 48,76 76,80 104,68 132,72 160,60 180,62"
        fill="rgba(90,180,130,.06)" stroke="none"/>
      <!-- View labels -->
      <text x="36" y="108" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.5)" text-anchor="middle">OPS</text>
      <text x="100" y="108" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.5)" text-anchor="middle">COMMERCIAL</text>
      <text x="165" y="108" font-family="DM Mono,monospace" font-size="5" fill="rgba(196,160,90,.5)" text-anchor="middle">PRODUCT</text>
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

  const visHtml = VIS[c.vis_type] || '';
  const visWithNum = visHtml.replace('</div>', `<span class="case-num">${c.num}</span></div>`);

  return `
  <div class="cc reveal">
    ${visWithNum}
    <div class="cc-body">
      <p class="cc-tag${c.advisory?' cc-tag--advisory':''}" data-en="${c.tag_en}" data-es="${c.tag_es}">${tag}</p>
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
