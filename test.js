
const STEP1_QUESTIONS = [
  {
    id: 's1q1', type: 'number', text: 'Укажите возраст человека, для которого подбираете БАД',
    min: 18, max: 120, hint_low: 'Возраст должен быть больше 18 лет', hint_high: 'Введите корректное значение'
  },
  {
    id: 's1q2', type: 'radio', text: 'Укажите пол человека, для которого подбираете БАД',
    options: ['Мужской', 'Женский']
  },
  {
    id: 's1q3', type: 'number', text: 'Укажите рост (см) человека, для которого подбираете БАД',
    min: 67, max: 255, hint_low: 'Введите корректное значение', hint_high: 'Введите корректное значение'
  },
  {
    id: 's1q4', type: 'number', text: 'Укажите вес (кг) человека, для которого подбираете БАД',
    min: 20, max: 500, hint_low: 'Введите корректное значение', hint_high: 'Введите корректное значение'
  },
  {
    id: 's1q5', type: 'radio', text: 'Охарактеризуйте ваше питание',
    options: ['Регулярное', 'Скорее не регулярное (пропускаю приёмы пищи, перекусываю фастфудом)']
  },
  {
    id: 's1q6', type: 'radio', text: 'Как часто вы употребляете молочные продукты?',
    options: ['Очень редко', '2-3 раза в неделю', 'Каждый день']
  },
  {
    id: 's1q7', type: 'radio', text: 'Как часто вы употребляете овощи и фрукты?',
    options: ['Очень редко', '2-3 раза в неделю', 'Каждый день']
  },
  {
    id: 's1q8', type: 'radio', text: 'Как часто вы употребляете рыбу?',
    options: ['Очень редко', '2-3 раза в неделю', 'Каждый день']
  },
  {
    id: 's1q9', type: 'radio', text: 'Испытываете ли вы тягу к сладкому?',
    options: ['Да', 'Нет']
  },
  {
    id: 's1q10', type: 'radio', text: 'Выберите интересующее Вас направление для улучшения самочувствия',
    options: ['Иммунитет и энергия', 'Зрение', 'Очищение организма']
  }
];

const STEP2_QUESTIONS = {
  'Иммунитет и энергия': [
    { id: 'iq1', type: 'radio', text: 'Как часто вы простужаетесь?', options: ['Редко', '2-3 раза в год', 'Чаще 4 раз в год'], scores: [0,1,2] },
    { id: 'iq2', type: 'radio', text: 'Как быстро у вас протекает ОРВИ?', options: ['2-4 дня', '5-7 дней', 'Более 8 дней'], scores: [0,1,2] },
    { id: 'iq3', type: 'radio', text: 'Беспокоит ли вас герпес?', options: ['Да', 'Нет'], scores: [2,0] },
    { id: 'iq4', type: 'radio', text: 'Есть ли у вас аллергия?', options: ['Да', 'Нет'], scores: [2,0] },
    { id: 'iq5', type: 'radio', text: 'Принимали ли вы в последние полгода антибиотики?', options: ['Да', 'Нет'], scores: [2,0] },
    { id: 'iq6', type: 'radio', text: 'Вы курите?', options: ['Да', 'Нет'], scores: [2,0] },
    { id: 'iq7', type: 'radio', text: 'Какой образ жизни вы ведёте?', options: ['Активный, занимаюсь спортом, часто бываю на свежем воздухе', 'Небольшие нагрузки, прогулки', 'Малоподвижный образ жизни'], scores: [0,2,1] },
    { id: 'iq8', type: 'radio', text: 'Какой уровень стресса вы испытываете?', options: ['Высокий', 'Умеренный', 'Почти не испытываю'], scores: [0,2,1] },
    { id: 'iq9', type: 'radio', text: 'Страдаете ли вы от частой утомляемости?', options: ['Нет', 'Иногда испытываю усталость к вечеру', 'Испытываю усталость с самого утра'], scores: [1,0,2] }
  ],
  'Зрение': [
    { id: 'vq1', type: 'radio', text: 'Вы носите очки или контактные линзы?', options: ['Да', 'Нет'], scores: [1,0] },
    { id: 'vq2', type: 'radio', text: 'Как много времени в течение дня вы пользуетесь компьютером или гаджетами?', options: ['Постоянно', 'Несколько часов в день', 'Немного'], scores: [2,1,0] },
    { id: 'vq3', type: 'radio', text: 'Бывает ли, что у вас воспаляются глаза или лопаются сосуды в глазах?', options: ['Да', 'Нет'], scores: [1,0] },
    { id: 'vq4', type: 'radio', text: 'Испытываете ли вы сухость в глазах («синдром сухого глаза»)?', options: ['Да', 'Нет'], scores: [1,0] },
    { id: 'vq5', type: 'radio', text: 'Испытываете ли вы проблемы при различении предметов в сумерках (например, при вождении)?', options: ['Да', 'Нет'], scores: [1,0] },
    { id: 'vq6', type: 'radio', text: 'Испытываете ли вы головные боли, боль в висках?', options: ['Да', 'Нет'], scores: [1,0] }
  ],
  'Очищение организма': [
    { id: 'dq1', type: 'radio', text: 'Страдаете ли вы от частой утомляемости?', options: ['Нет', 'Иногда испытываю усталость к вечеру', 'Испытываю усталость с самого утра'], scores: [0,2,1] },
    { id: 'dq2', type: 'radio', text: 'Есть ли проблемы с кожей, которые вас беспокоят?', options: ['Беспокоят высыпания, воспаление, акне', 'Тусклый цвет лица, круги под глазами', 'Шелушение, зуд кожи', 'Ничего не беспокоит'], scores: [2,2,1,0] },
    { id: 'dq3', type: 'radio', text: 'Испытываете ли вы сложности в снижении или наборе веса?', options: ['Да', 'Нет'], scores: [1,0] },
    { id: 'dq4', type: 'radio', text: 'Есть ли у вас аллергия?', options: ['Да', 'Нет'], scores: [2,0] },
    { id: 'dq5', type: 'radio', text: 'Принимали ли вы в последние полгода антибиотики?', options: ['Да', 'Нет'], scores: [1,0] },
    { id: 'dq6', type: 'radio', text: 'Регулярно ли работает ваш кишечник?', options: ['Да', 'Нет'], scores: [0,1] },
    { id: 'dq7', type: 'radio', text: 'Употребляете ли вы алкоголь?', options: ['Нет', 'Не реже 1 раза в неделю', '1-2 раза в месяц'], scores: [0,1,2] },
    { id: 'dq8', type: 'radio', text: 'Вы курите?', options: ['Да', 'Нет'], scores: [2,0] },
    { id: 'dq9', type: 'radio', text: 'Ощущаете во рту горький привкус, на языке виден плотный налёт?', options: ['Да', 'Нет'], scores: [2,0] }
  ]
};

const SCORE_RANGES = {
  'Иммунитет и энергия': [
    { max: 6,  label: 'Иммунитет и энергия 1' },
    { max: 12, label: 'Иммунитет и энергия 2' },
    { max: 18, label: 'Иммунитет и энергия 3' }
  ],
  'Зрение': [
    { max: 3, label: 'Зрение 1' },
    { max: 7, label: 'Зрение 2' }
  ],
  'Очищение организма': [
    { max: 5,  label: 'Очищение организма 1' },
    { max: 10, label: 'Очищение организма 2' },
    { max: 15, label: 'Очищение организма 3' }
  ]
};

const state = {
  currentStep: 1,
  currentQ: 0,
  answers: {},
  step2Questions: null,
  step2Done: false,
  step1Completed: false,
};

function getCurrentQuestions() {
  return state.currentStep === 1 ? STEP1_QUESTIONS : state.step2Questions;
}

function renderQuestion() {
  const qs = getCurrentQuestions();
  const q = qs[state.currentQ];
  const total = qs.length;


  const t1 = document.getElementById('track-1');
  const t2 = document.getElementById('track-2');
  if (state.currentStep === 1) {
    t1.className = 'step-track active';
    t2.className = state.step1Completed ? 'step-track done' : 'step-track';
  } else {
    t1.className = 'step-track done';
    t2.className = 'step-track active';
  }

  const stepLabel = state.currentStep === 1 ? 'Шаг 1/2' : 'Шаг 2/2';
  document.getElementById('step-label').textContent = stepLabel;
  document.getElementById('question-counter').textContent = `Вопрос ${state.currentQ + 1} / ${total}`;
  document.getElementById('q-text').textContent = q.text;


  const imgWrap = document.getElementById('question-image-wrap');
  const img = document.getElementById('question-image');
  const anketa  = ['s1q1','s1q2','s1q3','s1q4'];
  const diet    = ['s1q5','s1q6','s1q7','s1q8','s1q9'];
  const systems = ['s1q10'];
  const topicImages = {
    'Иммунитет и энергия': 'pictures/иммунитет.jpg',
    'Зрение':              'pictures/зрение.jpg',
    'Очищение организма':  'pictures/детокс.jpg'
  };
  if (anketa.includes(q.id)) {
    img.src = 'pictures/анкета.jpg';
    imgWrap.style.display = 'block';
  } else if (diet.includes(q.id)) {
    img.src = 'pictures/диета.jpg';
    imgWrap.style.display = 'block';
  } else if (systems.includes(q.id)) {
    img.src = 'pictures/системы организма.jpg';
    imgWrap.style.display = 'block';
  } else if (state.currentStep === 2) {
    const topic = state.answers['s1q10'];
    img.src = topicImages[topic] || '';
    imgWrap.style.display = img.src ? 'block' : 'none';
  } else {
    imgWrap.style.display = 'none';
  }

  const area = document.getElementById('q-answer-area');
  area.innerHTML = '';

  if (q.type === 'number') {
    area.innerHTML = `
      <input class="input-field" id="num-input" type="number"
        min="${q.min}" max="${q.max}" maxlength="3"
        placeholder="Введите значение"
        value="${state.answers[q.id] !== undefined ? state.answers[q.id] : ''}"
      />
      <div class="input-hint" id="num-hint"></div>
    `;
    const inp = document.getElementById('num-input');
    inp.addEventListener('input', () => validateNumber(q));
    inp.addEventListener('change', () => validateNumber(q));
    if (state.answers[q.id] !== undefined) validateNumber(q);
  } else {
    const opts = q.options.map((opt) => {
      const sel = state.answers[q.id] === opt ? 'selected' : '';
      return `
        <label class="option-label ${sel}" data-opt="${opt}">
          <span class="option-radio"></span>
          ${opt}
        </label>`;
    }).join('');
    area.innerHTML = `<div class="options-list">${opts}</div>`;

    area.querySelectorAll('.option-label').forEach(lbl => {
      lbl.addEventListener('click', () => {
        area.querySelectorAll('.option-label').forEach(l => l.classList.remove('selected'));
        lbl.classList.add('selected');
        state.answers[q.id] = lbl.dataset.opt;

        if (q.id === 's1q10') {
          state.step2Questions = STEP2_QUESTIONS[state.answers['s1q10']] || null;
        }

        checkNextBtn();
      });
    });
  }

  const backBtn = document.getElementById('btn-back');
  const isFirstQ = state.currentStep === 1 && state.currentQ === 0;
  backBtn.disabled = isFirstQ;

  checkNextBtn();
}

function validateNumber(q) {
  const inp = document.getElementById('num-input');
  const hint = document.getElementById('num-hint');
  const val = inp.value.trim();
  const num = parseInt(val, 10);

  inp.classList.remove('error');
  hint.classList.remove('visible');
  hint.textContent = '';

  if (val === '' || isNaN(num)) {
    state.answers[q.id] = undefined;
    checkNextBtn();
    return;
  }

  if (num < q.min) {
    inp.classList.add('error');
    hint.textContent = q.hint_low;
    hint.classList.add('visible');
    state.answers[q.id] = undefined;
    checkNextBtn();
    return;
  }

  if (num > q.max) {
    inp.classList.add('error');
    hint.textContent = q.hint_high;
    hint.classList.add('visible');
    state.answers[q.id] = undefined;
    checkNextBtn();
    return;
  }

  state.answers[q.id] = num;
  checkNextBtn();
}

function checkNextBtn() {
  const qs = getCurrentQuestions();
  const q = qs[state.currentQ];
  const nextBtn = document.getElementById('btn-next');
  const answered = state.answers[q.id] !== undefined;
  nextBtn.disabled = !answered;

  const isLastStep2 = state.currentStep === 2 && state.currentQ === qs.length - 1;
  nextBtn.textContent = isLastStep2 ? 'Получить результат' : 'Далее';
}

function goNext() {
  const qs = getCurrentQuestions();
  const isLast = state.currentQ === qs.length - 1;

  if (state.currentStep === 1) {
    if (isLast) {
      state.step1Completed = true;
      state.currentStep = 2;
      state.currentQ = 0;

      if (!state.step2Questions) {
        const topic = state.answers['s1q10'];
        state.step2Questions = STEP2_QUESTIONS[topic] || null;
      }
    } else {
      state.currentQ++;
    }
  } else {
    if (isLast) {
      const result = calculateResult();
      sessionStorage.setItem('testResult', JSON.stringify(result));
      window.location.href = 'result.html';
      return;
    } else {
      state.currentQ++;
    }
  }

  document.getElementById('question-card').style.animation = 'none';
  requestAnimationFrame(() => {
    document.getElementById('question-card').style.animation = '';
    renderQuestion();
  });
}

function goBack() {
  if (state.currentStep === 2 && state.currentQ === 0) {
    state.currentStep = 1;
    state.currentQ = STEP1_QUESTIONS.length - 1;
  } else if (state.currentQ > 0) {
    state.currentQ--;
  }
  renderQuestion();
}

function calculateResult() {
  const topic = state.answers['s1q10'];
  const qs = STEP2_QUESTIONS[topic];
  const ranges = SCORE_RANGES[topic];

  let total = 0;
  qs.forEach(q => {
    const ans = state.answers[q.id];
    const idx = q.options.indexOf(ans);
    if (idx >= 0) total += q.scores[idx];
  });

  let program = ranges[ranges.length - 1].label;
  for (const r of ranges) {
    if (total <= r.max) { program = r.label; break; }
  }

  return {
    topic,
    score: total,
    program,
    age: state.answers['s1q1'],
    gender: state.answers['s1q2']
  };
}


document.getElementById('btn-next').addEventListener('click', goNext);
document.getElementById('btn-back').addEventListener('click', goBack);


renderQuestion();
