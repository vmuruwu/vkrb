let checkedProducts = [];
let currentProgram = null;


function init() {
  const raw = sessionStorage.getItem('testResult');
  if (!raw) {
    loadProgram('Иммунитет и энергия 2', 'Иммунитет и энергия');
    return;
  }

  const result = JSON.parse(raw);
  const prog = PROGRAMS[result.program];
  if (!prog) {
    loadProgram('Иммунитет и энергия 2', 'Иммунитет и энергия');
    return;
  }

  loadProgram(result.program, result.topic);
}

function loadProgram(programKey, topic) {
  currentProgram = programKey;
  const prog = PROGRAMS[programKey];

  document.getElementById('result-desc').textContent = prog.description;

  const benefitColors = ['#F5A623','#5BC8DC','#F08080','#90C878','#A78BFA','#FBB040'];
  const bGrid = document.getElementById('benefits-grid');
  bGrid.innerHTML = prog.benefits.map((b, i) => `
    <div style="
      background:${benefitColors[i % benefitColors.length]};
      color:#fff;
      font-weight:600;
      font-size:0.92rem;
      text-align:center;
      padding:14px 18px;
      border-radius:50px;
      line-height:1.3;
    ">${b}</div>
  `).join('');

  const pGrid = document.getElementById('products-grid');
  pGrid.innerHTML = prog.products.map(p => {
    const inner = `<div style="
      background:var(--white);
      border:1.5px solid var(--border);
      border-radius:var(--radius-sm);
      padding:12px 16px;
      font-size:0.82rem;
      font-weight:700;
      color:#323232;
      text-transform:uppercase;
      line-height:1.4;
    ">${p.name}</div>`;
    return p.url
      ? `<a href="${p.url}" target="_blank" style="text-decoration:none;">${inner}</a>`
      : inner;
  }).join('');

  const instructionFiles = {
    'Иммунитет и энергия 1': 'insructions/ИММУНИТЕТ и ЭНЕРГИЯ 1.pdf',
    'Иммунитет и энергия 2': 'insructions/ИММУНИТЕТ и ЭНЕРГИЯ 2.pdf',
    'Иммунитет и энергия 3': 'insructions/ИММУНИТЕТ и ЭНЕРГИЯ 3.pdf',
    'Зрение 1':               'insructions/ЗРЕНИЕ 1.pdf',
    'Зрение 2':               'insructions/ЗРЕНИЕ 2.pdf',
    'Очищение организма 1':   'insructions/ОЧИЩЕНИЕ 1.pdf',
    'Очищение организма 2':   'insructions/ОЧИЩЕНИЕ 2.pdf',
    'Очищение организма 3':   'insructions/ОЧИЩЕНИЕ 3.pdf',
  };
  const pdfBtn = document.getElementById('btn-pdf');
  pdfBtn.href = instructionFiles[programKey] || '#';
  pdfBtn.target = '_blank';
  pdfBtn.removeAttribute('download');

  // Total in button
  const total = prog.products.reduce((sum, p) => sum + p.price, 0);
  document.getElementById('btn-order').textContent = `Оформить заказ: ${total.toLocaleString('ru-RU')} ₽ 🛒`;
}

function placeOrder() {
  const prog = PROGRAMS[currentProgram];
  const names = prog.products.map(p => p.name).join(', ');
  alert(`Заказ оформляется!\n\nТовары: ${names}\n\nВ реальном сайте здесь откроется страница оформления заказа.`);
}


init();
