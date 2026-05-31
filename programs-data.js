const PROGRAMS = {
  'Иммунитет и энергия 1': {
    emoji: '🛡️',
    description: 'Поздравляем! Ваша иммунная система достаточно сильна, чтобы активно защищать вас от вирусов и аллергенов. Ваше отношение к укреплению физической формы и здоровому образу жизни заслуживает уважения. Чтобы поддержать потенциал защиты организма от вирусов и повысить уровень энергии, рекомендуем профилактический прием программы БАД два раза в год.',
    benefits: [
      'Укрепление иммунитета',
      'Энергия и тонус',
      'Активное восстановление',
      'Улучшение адаптации'
    ],
    products: [
      { name: 'БАД с омега-3 в высокой концентрации Welllab OMEGA-3, 60 капсул', article: '#070707', price: 2710, icon: '🐟', url: 'https://greenwayglobal.com/shop/brands/welllab/070707' },
      { name: 'Напиток с чагой для поддержки иммунитета Welllab Element Chaga Immunity Drink, 25 таблеток', article: '#07124', price: 960, icon: '🍄', url: 'https://greenwayglobal.com/shop/brands/welllab/07124' },
      { name: 'БАД с органическим йодом Welllab МОРСКОЙ ЙОД, 30 таблеток', article: '#070761', price: 560, icon: '🌊', url: 'https://greenwayglobal.com/shop/brands/welllab/070761' },
      { name: 'БАД для иммунитета Welllab ImmunoHIT ACTIVE, 60 капсул', article: '#070719', price: 1440, icon: '🛡️', url: 'https://greenwayglobal.com/shop/brands/welllab/070719' },
      { name: 'Источник магния WELLLAB MAGNESIUM & VITAMIN B6, 90 таблеток', article: '#070742', price: 1280, icon: '💊', url: 'https://greenwayglobal.com/shop/brands/welllab/070742' }
    ]
  },
  'Иммунитет и энергия 2': {
    emoji: '🛡️',
    description: 'Ваши резервы защитных сил организма от инфекций, вирусов и аллергенов ослаблены. Пора позаботиться о своем иммунитете! Обязательно обратитесь к врачу, чтобы выявить причины сбоя в иммунной системе. Специально для вас мы подобрали программу, которая поможет укрепить защитные силы организма и вывести его из состояния дефицита энергии.',
    benefits: [
      'Укрепление иммунитета',
      'Противовирусная защита',
      'Антиоксидантная защита',
      'Облегчение воспаления',
      'Баланс микрофлоры',
      'Энергия и тонус'
    ],
    products: [
      { name: 'БАД с пробиотиками и пребиотиками Welllab Synbiotic Forte, 60 капсул', article: '#070736', price: 1300, icon: '🦠', url: 'https://greenwayglobal.com/shop/brands/welllab/070736' },
      { name: 'БАД с витамином D3 2000 МЕ Welllab VITAMIN D3 PLUS, 120 капсул', article: '#070762', price: 1600, icon: '☀️', url: 'https://greenwayglobal.com/shop/brands/welllab/070762' },
      { name: 'БАД с цинком и селеном Welllab ZINC & SELENIUM, 30 таблеток', article: '#070754', price: 560, icon: '⚡', url: 'https://greenwayglobal.com/shop/brands/welllab/070754' },
      { name: 'БАД с омега-3 в высокой концентрации Welllab OMEGA-3, 60 капсул', article: '#070707', price: 2710, icon: '🐟', url: 'https://greenwayglobal.com/shop/brands/welllab/070707' },
      { name: 'БАД с незаменимой аминокислотой Welllab LYSINE PLUS, 60 капсул', article: '#070714', price: 1600, icon: '💊', url: 'https://greenwayglobal.com/shop/brands/welllab/070714' }
    ]
  },
  'Иммунитет и энергия 3': {
    emoji: '🛡️',
    description: 'Пришло время переосмыслить стиль жизни и усилить ваш иммунитет! Потенциал защиты организма от инфекций и аллергенов заметно снижен. Рекомендуем наладить режим сна и отдыха, сбалансировать питание, уменьшить влияние фактора стресса. Дополнительную поддержку вашему организму окажет специально подобранная программа БАД.',
    benefits: [
      'Укрепление иммунитета',
      'Противовирусная защита',
      'Антиоксидантная защита',
      'Улучшение общего самочувствия'
    ],
    products: [
      { name: 'БАД с омега-3 в высокой концентрации Welllab OMEGA-3, 60 капсул', article: '#070707', price: 2710, icon: '🐟', url: 'https://greenwayglobal.com/shop/brands/welllab/070707' },
      { name: 'Природный концентрат с полипренолами Welllab liquid Prenovital, 25 мл', article: '#07058', price: 2380, icon: '✨', url: 'https://greenwayglobal.com/shop/brands/welllab-liquid/07058' },
      { name: 'БАД с витамином D3 2000 МЕ Welllab VITAMIN D3 PLUS, 120 капсул', article: '#070762', price: 1600, icon: '☀️', url: 'https://greenwayglobal.com/shop/brands/welllab/070762' },
      { name: 'БАД с витамином С Welllab C-COMPLEX PLUS, 60 капсул', article: '#070701', price: 1840, icon: '🍊', url: 'https://greenwayglobal.com/shop/brands/welllab/070701' }
    ]
  },
  'Зрение 1': {
    emoji: '👁️',
    description: 'В настоящий момент у вас не выявлено серьезных проблем, но современный образ жизни оказывает значительную нагрузку на состояние зрительного аппарата. Не забывайте заботиться о зрении: регулярно посещать офтальмолога, чаще делать упражнения для глаз и давать им отдых от мониторов и гаджетов. Прием программы БАД является одной из эффективных мер профилактики по снижению остроты зрения.',
    benefits: [
      'Поддержание остроты зрения',
      'Защита сетчатки глаз от фотоповреждения',
      'Укрепление сосудов глаз',
      'Снижение зрительного напряжения'
    ],
    products: [
      { name: 'БАД с омега-3 в высокой концентрации Welllab OMEGA-3, 60 капсул', article: '#070707', price: 2710, icon: '🐟', url: 'https://greenwayglobal.com/shop/brands/welllab/070707' },
      { name: 'БАД с незаменимой аминокислотой Welllab LYSINE PLUS, 60 капсул', article: '#070714', price: 1600, icon: '💊', url: 'https://greenwayglobal.com/shop/brands/welllab/070714' }
    ]
  },
  'Зрение 2': {
    emoji: '👁️',
    description: 'Ваш взгляд заслуживает должной заботы! Позаботьтесь о своей остроте зрения с помощью регулярных осмотров у офтальмолога. Старайтесь придерживаться принципов правильного питания, чаще делайте упражнения для глаз, обязательно давайте глазам отдых от мониторов и гаджетов. В качестве дополнительной меры поддержки предлагаем усиленную программу БАД для зрения.',
    benefits: [
      'Профилактика снижения остроты зрения',
      'Улучшение светочувствительной функции сетчатки',
      'Улучшение состояния сосудов глаз',
      'Снижение зрительного напряжения'
    ],
    products: [
      { name: 'БАД с омега-3 в высокой концентрации Welllab OMEGA-3, 60 капсул', article: '#070707', price: 2710, icon: '🐟', url: 'https://greenwayglobal.com/shop/brands/welllab/070707' },
      { name: 'БАД с незаменимой аминокислотой Welllab LYSINE PLUS, 60 капсул', article: '#070714', price: 1600, icon: '💊', url: 'https://greenwayglobal.com/shop/brands/welllab/070714' },
      { name: 'БАД с дигидрокверцетином и витаминами Welllab DHQ COMPLEX, 60 капсул', article: '#070726', price: 1840, icon: '🐟', url: 'https://greenwayglobal.com/shop/brands/welllab/070726' }
    ]
  },
  'Очищение организма 1': {
    emoji: '🌀',
    description: 'Детокс — полезная практика, которая помогает вывести из организма вредные вещества и улучшить самочувствие. У вас не выявлено выраженных признаков интоксикации организма, но вы можете своевременно пройти детокс-программу. Очень важен комплексный подход. Придерживайтесь принципов рационального и сбалансированного питания, выпивайте достаточное количество воды и не забывайте про физическую активность!',
    benefits: [
      'Детокс-программа',
      'Регулярная работа кишечника',
      'Контроль веса и аппетита',
      'Баланс микрофлоры'
    ],
    products: [
      { name: 'БАД с пробиотиками и пребиотиками Welllab Synbiotic Forte, 60 капсул', article: '#070736', price: 1300, icon: '🦠', url: 'https://greenwayglobal.com/shop/brands/welllab/070736' },
      { name: 'Пребиотический напиток BALANCER PREBIO MIX, 10 стиков', article: '#01246', price: 1060, icon: '🌾', url: 'https://greenwayglobal.com/shop/brands/balancer/01246' },
      { name: 'Программа БАД WELLLAB DETOX PACK', article: '#070749', price: 1920, icon: '🌿', url: 'https://greenwayglobal.com/shop/brands/welllab/070749' }
    ]
  },
  'Очищение организма 2': {
    emoji: '🌀',
    description: 'Ваши ответы говорят о том, что организм нуждается в дополнительной поддержке. Специально подобранная программа БАД поможет активизировать процессы естественной детоксикации, улучшить общее самочувствие и вернуть организм в форму. Очень важен комплексный подход. Придерживайтесь принципов рационального и сбалансированного питания, выпивайте достаточное количество воды и не забывайте про физическую активность!',
    benefits: [
      'Активный детокс',
      'Поддержка печени',
      'Регулярная работа кишечника',
      'Контроль веса и аппетита',
      'Баланс микрофлоры'
    ],
    products: [
      { name: 'БАД для очищения организма Welllab COLOSTRUM DETOX, 60 капсул', article: '#070729', price: 2230, icon: '🌿', url: 'https://greenwayglobal.com/shop/brands/welllab/070729' },
      { name: 'БАД для поддержки углеводного обмена Welllab ANTISWEET CONTROL, 60 капсул', article: '#070728', price: 1920, icon: '🍃', url: 'https://greenwayglobal.com/shop/brands/welllab/070728' },
      { name: 'БАД с пробиотиками и пребиотиками Welllab Synbiotic Forte, 60 капсул', article: '#070736', price: 1300, icon: '🦠', url: 'https://greenwayglobal.com/shop/brands/welllab/070736' },
      { name: 'БАД с натуральными фосфолипидами Welllab LECITHIN, 60 капсул', article: '#070717', price: 990, icon: '💊', url: 'https://greenwayglobal.com/shop/brands/welllab/070717' },
      { name: 'Напиток для контроля аппетита BALANCER BAOBAB FORTE, 10 стиков', article: '#012620', price: 1590, icon: '🌳', url: 'https://greenwayglobal.com/shop/brands/balancer/012620' }
    ]
  },
  'Очищение организма 3': {
    emoji: '🌀',
    description: 'Рекомендуем вам пройти комплексную детоксикационную и антипаразитарную программу. Очищение организма от внутренних и внешних токсинов, а также паразитов и продуктов их жизнедеятельности, поможет уменьшить проявление аллергических реакций, укрепить иммунитет и улучшить общее самочувствие. Очень важен комплексный подход. Придерживайтесь принципов рационального и сбалансированного питания, выпивайте достаточное количество воды и не забывайте про физическую активность!',
    benefits: [
      'Очищение и защита от паразитов',
      'Снижение воспалений',
      'Поддержка печени',
      'Повышение сопротивляемости организма к инфекциям'
    ],
    products: [
      { name: 'БАД с антипаразитарным действием Welllab ANTIGELM PHYTO, 60 капсул', article: '#070700', price: 1840, icon: '🌿', url: 'https://greenwayglobal.com/shop/brands/welllab/070700' },
      { name: 'БАД для поддержки иммунитета Welllab UNCARIA FORTE, 60 капсул', article: '#070705', price: 1920, icon: '🌿', url: 'https://greenwayglobal.com/shop/brands/welllab/070705' },
      { name: 'БАД с противогрибковым действием Welllab FUNGISTOP PHYTO, 60 капсул', article: '#070704', price: 1920, icon: '🍃', url: 'https://greenwayglobal.com/shop/brands/welllab/070704' },
      { name: 'БАД для антиоксидантной защиты Welllab ANTISOR ACTIVE, 60 капсул', article: '#070702', price: 1920, icon: '🌿', url: 'https://greenwayglobal.com/shop/brands/welllab/070702' }
    ]
  }
};
