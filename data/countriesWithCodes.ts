const countriesWithCodes: IPlace[] = [
  { id: 1, name: 'Австралия', code: '036' },
  { id: 2, name: 'Австрия', code: '040' },
  { id: 3, name: 'Азербайджан', code: '031' },
  { id: 4, name: 'Аландские острова', code: '248' },
  { id: 5, name: 'Албания', code: '008' },
  { id: 6, name: 'Алжир', code: '012' },
  { id: 7, name: 'Американские Виргинские острова', code: '850' },
  { id: 8, name: 'Американское Самоа', code: '016' },
  { id: 9, name: 'Ангилья', code: '660' },
  { id: 10, name: 'Ангола', code: '024' },
  { id: 11, name: 'Андорра', code: '020' },
  { id: 12, name: 'Антарктида', code: '010' },
  { id: 13, name: 'Антигуа и Барбуда', code: '028' },
  { id: 14, name: 'Аргентина', code: '032' },
  { id: 15, name: 'Армения', code: '051' },
  { id: 16, name: 'Аруба', code: '533' },
  { id: 17, name: 'Афганистан', code: '004' },
  { id: 18, name: 'Багамские Острова', code: '044' },
  { id: 19, name: 'Бангладеш', code: '050' },
  { id: 20, name: 'Барбадос', code: '052' },
  { id: 21, name: 'Бахрейн', code: '048' },
  { id: 22, name: 'Белиз', code: '084' },
  { id: 23, name: 'Беларусь', code: '112' },
  { id: 24, name: 'Бельгия', code: '056' },
  { id: 25, name: 'Бенин', code: '204' },
  { id: 26, name: 'Бермудские Острова', code: '060' },
  { id: 27, name: 'Болгария', code: '100' },
  { id: 28, name: 'Боливия', code: '068' },
  { id: 29, name: 'Босния и Герцеговина', code: '070' },
  { id: 30, name: 'Ботсвана', code: '072' },
  { id: 31, name: 'Бразилия', code: '076' },
  { id: 32, name: 'Британская территория в Индийском океане', code: '086' },
  { id: 33, name: 'Британские Виргинские острова', code: '092' },
  { id: 34, name: 'Бруней', code: '096' },
  { id: 35, name: 'Буркина-Фасо', code: '854' },
  { id: 36, name: 'Бурунди', code: '108' },
  { id: 37, name: 'Бутан', code: '064' },
  { id: 38, name: 'Вануату', code: '548' },
  { id: 39, name: 'Ватикан', code: '336' },
  { id: 40, name: 'Великобритания', code: '826' },
  { id: 41, name: 'Венгрия', code: '348' },
  { id: 42, name: 'Венесуэла', code: '862' },
  { id: 43, name: 'Внешние малые острова США', code: '581' },
  { id: 44, name: 'Вьетнам', code: '704' },
  { id: 45, name: 'Габон', code: '266' },
  { id: 46, name: 'Гаити', code: '332' },
  { id: 47, name: 'Гайана', code: '328' },
  { id: 48, name: 'Гамбия', code: '270' },
  { id: 49, name: 'Гана', code: '288' },
  { id: 50, name: 'Гваделупа', code: '312' },
  { id: 51, name: 'Гватемала', code: '320' },
  { id: 52, name: 'Гвинея', code: '324' },
  { id: 53, name: 'Гвинея-Бисау', code: '624' },
  { id: 54, name: 'Германия', code: '276' },
  { id: 55, name: 'Гернси', code: '831' },
  { id: 56, name: 'Гибралтар', code: '292' },
  { id: 57, name: 'Гондурас', code: '340' },
  { id: 58, name: 'Гонконг', code: '344' },
  { id: 59, name: 'Гренада', code: '308' },
  { id: 60, name: 'Гренландия', code: '304' },
  { id: 61, name: 'Греция', code: '300' },
  { id: 62, name: 'Грузия', code: '268' },
  { id: 63, name: 'Гуам', code: '316' },
  { id: 64, name: 'Дания', code: '208' },
  { id: 65, name: 'Джерси', code: '832' },
  { id: 66, name: 'Джибути', code: '262' },
  { id: 67, name: 'Доминика', code: '212' },
  { id: 68, name: 'Доминиканская Республика', code: '214' },
  { id: 69, name: 'Египет', code: '818' },
  { id: 70, name: 'Замбия', code: '894' },
  { id: 71, name: 'Западная Сахара', code: '732' },
  { id: 72, name: 'Зимбабве', code: '716' },
  { id: 73, name: 'Израиль', code: '376' },
  { id: 74, name: 'Индия', code: '356' },
  { id: 75, name: 'Индонезия', code: '360' },
  { id: 76, name: 'Иордания', code: '400' },
  { id: 77, name: 'Ирак', code: '368' },
  { id: 78, name: 'Иран', code: '364' },
  { id: 79, name: 'Ирландия', code: '372' },
  { id: 80, name: 'Исландия', code: '352' },
  { id: 81, name: 'Испания', code: '724' },
  { id: 82, name: 'Италия', code: '380' },
  { id: 83, name: 'Йемен', code: '887' },
  { id: 84, name: 'Кабо-Верде', code: '132' },
  { id: 85, name: 'Казахстан', code: '398' },
  { id: 86, name: 'Каймановы острова', code: '136' },
  { id: 87, name: 'Камбоджа', code: '116' },
  { id: 88, name: 'Камерун', code: '120' },
  { id: 89, name: 'Канада', code: '124' },
  { id: 90, name: 'Катар', code: '634' },
  { id: 91, name: 'Кения', code: '404' },
  { id: 92, name: 'Кипр', code: '196' },
  { id: 93, name: 'Киргизия', code: '417' },
  { id: 94, name: 'Кирибати', code: '296' },
  { id: 95, name: 'Китай', code: '156' },
  { id: 96, name: 'Кокосовые острова', code: '166' },
  { id: 97, name: 'Колумбия', code: '170' },
  { id: 98, name: 'Коморские острова', code: '174' },
  { id: 99, name: 'Конго (Браззавиль)', code: '178' },
  { id: 100, name: 'Конго (Киншаса)', code: '180' },
  { id: 101, name: 'Коста-Рика', code: '188' },
  { id: 102, name: "Кот-д'Ивуар", code: '384' },
  { id: 103, name: 'Куба', code: '192' },
  { id: 104, name: 'Кувейт', code: '414' },
  { id: 105, name: 'Лаос', code: '418' },
  { id: 106, name: 'Латвия', code: '428' },
  { id: 107, name: 'Лесото', code: '426' },
  { id: 108, name: 'Либерия', code: '430' },
  { id: 109, name: 'Ливан', code: '422' },
  { id: 110, name: 'Ливия', code: '434' },
  { id: 111, name: 'Литва', code: '440' },
  { id: 112, name: 'Лихтенштейн', code: '438' },
  { id: 113, name: 'Люксембург', code: '442' },
  { id: 114, name: 'Маврикий', code: '480' },
  { id: 115, name: 'Мавритания', code: '478' },
  { id: 116, name: 'Мадагаскар', code: '450' },
  { id: 117, name: 'Майотта', code: '175' },
  { id: 118, name: 'Макао', code: '446' },
  { id: 119, name: 'Македония', code: '807' },
  { id: 120, name: 'Малави', code: '454' },
  { id: 121, name: 'Малайзия', code: '458' },
  { id: 122, name: 'Мали', code: '466' },
  { id: 123, name: 'Мальдивы', code: '462' },
  { id: 124, name: 'Мальта', code: '470' },
  { id: 125, name: 'Мартиника', code: '474' },
  { id: 126, name: 'Маршалловы острова', code: '584' },
  { id: 127, name: 'Мексика', code: '484' },
  { id: 128, name: 'Микронезия', code: '583' },
  { id: 129, name: 'Мозамбик', code: '508' },
  { id: 130, name: 'Молдавия', code: '498' },
  { id: 131, name: 'Монако', code: '492' },
  { id: 132, name: 'Монголия', code: '496' },
  { id: 133, name: 'Монтсеррат', code: '500' },
  { id: 134, name: 'Морокко', code: '504' },
  { id: 135, name: 'Мьянма', code: '104' },
  { id: 136, name: 'Намибия', code: '516' },
  { id: 137, name: 'Науру', code: '520' },
  { id: 138, name: 'Непал', code: '524' },
  { id: 139, name: 'Нигер', code: '562' },
  { id: 140, name: 'Нигерия', code: '566' },
  { id: 141, name: 'Нидерландские Антильские острова', code: '530' },
  { id: 142, name: 'Нидерланды', code: '528' },
  { id: 143, name: 'Никарагуа', code: '558' },
  { id: 144, name: 'Ниуэ', code: '570' },
  { id: 145, name: 'Новая Зеландия', code: '554' },
  { id: 146, name: 'Новая Каледония', code: '540' },
  { id: 147, name: 'Норвегия', code: '578' },
  { id: 148, name: 'Объединённые Арабские Эмираты', code: '784' },
  { id: 149, name: 'Оман', code: '512' },
  { id: 150, name: 'Остров Буве', code: '074' },
  { id: 151, name: 'Остров Мэн', code: '833' },
  { id: 152, name: 'Остров Норфолк', code: '574' },
  // { id: 153, name: 'Остров Рождества', code: '162' },
  { id: 154, name: 'Остров Святого Мартина (французская часть)', code: '663' },
  { id: 155, name: 'Остров Святой Елены', code: '654' },
  { id: 156, name: 'Остров Херд и Острова Макдоналд', code: '334' },
  { id: 157, name: 'Острова Кука', code: '184' },
  { id: 158, name: 'Острова Питкэрн', code: '612' },
  { id: 159, name: 'Пакистан', code: '586' },
  { id: 160, name: 'Палау', code: '585' },
  { id: 161, name: 'Палестина', code: '275' },
  { id: 162, name: 'Панама', code: '591' },
  { id: 163, name: 'Папуа-Новая Гвинея', code: '598' },
  { id: 164, name: 'Парагвай', code: '600' },
  { id: 165, name: 'Перу', code: '604' },
  { id: 166, name: 'Польша', code: '616' },
  { id: 167, name: 'Португалия', code: '620' },
  { id: 168, name: 'Пуэрто-Рико', code: '630' },
  { id: 169, name: 'Реюньон', code: '638' },
  { id: 170, name: 'Рождество (остров)', code: '162' },
  { id: 171, name: 'Руанда', code: '646' },
  { id: 172, name: 'Румыния', code: '642' },
  { id: 173, name: 'Сальвадор', code: '222' },
  { id: 174, name: 'Самоа', code: '882' },
  { id: 175, name: 'Сан-Марино', code: '674' },
  { id: 176, name: 'Сан-Томе и Принсипи', code: '678' },
  { id: 177, name: 'Саудовская Аравия', code: '682' },
  { id: 178, name: 'Свазиленд', code: '748' },
  { id: 179, name: 'Северная Корея', code: '408' },
  { id: 180, name: 'Северные Марианские острова', code: '580' },
  { id: 181, name: 'Сейшельские Острова', code: '690' },
  { id: 182, name: 'Сен-Бартельми', code: '652' },
  { id: 183, name: 'Сен-Пьер и Микелон', code: '666' },
  { id: 184, name: 'Сенегал', code: '686' },
  { id: 185, name: 'Сент-Винсент и Гренадины', code: '670' },
  { id: 186, name: 'Сент-Китс и Невис', code: '659' },
  { id: 187, name: 'Сент-Люсия', code: '662' },
  { id: 188, name: 'Сербия', code: '688' },
  { id: 189, name: 'Сингапур', code: '702' },
  { id: 190, name: 'Сирия', code: '760' },
  { id: 191, name: 'Словакия', code: '703' },
  { id: 192, name: 'Словения', code: '705' },
  {
    id: 193,
    name: 'Соединённые Штаты Америки',
    code: '840',
    regions: [
      { id: 301, name: 'Айдахо' },
      { id: 302, name: 'Айова' },
      { id: 303, name: 'Алабама' },
      { id: 304, name: 'Аляска' },
      { id: 305, name: 'Аризона' },
      { id: 306, name: 'Арканзас' },
      { id: 307, name: 'Вайоминг' },
      { id: 308, name: 'Вашингтон' },
      { id: 309, name: 'Вермонт' },
      { id: 310, name: 'Виргиния' },
      { id: 311, name: 'Висконсин' },
      { id: 312, name: 'Гавайи' },
      { id: 313, name: 'Делавэр' },
      { id: 314, name: 'Джорджия' },
      { id: 315, name: 'Западная Виргиния' },
      { id: 316, name: 'Иллинойс' },
      { id: 317, name: 'Индиана' },
      { id: 318, name: 'Калифорния' },
      { id: 319, name: 'Канзас' },
      { id: 320, name: 'Кентукки' },
      { id: 321, name: 'Колорадо' },
      { id: 322, name: 'Коннектикут' },
      { id: 323, name: 'Луизиана' },
      { id: 324, name: 'Массачусетс' },
      { id: 325, name: 'Миннесота' },
      { id: 326, name: 'Миссисипи' },
      { id: 327, name: 'Миссури' },
      { id: 328, name: 'Мичиган' },
      { id: 329, name: 'Монтана' },
      { id: 330, name: 'Мэн' },
      { id: 331, name: 'Мэриленд' },
      { id: 332, name: 'Небраска' },
      { id: 333, name: 'Невада' },
      { id: 334, name: 'Нью-Гэмпшир' },
      { id: 335, name: 'Нью-Джерси' },
      { id: 336, name: 'Нью-Йорк' },
      { id: 337, name: 'Нью-Мексико' },
      { id: 338, name: 'Огайо' },
      { id: 339, name: 'Оклахома' },
      { id: 340, name: 'Орегон' },
      { id: 341, name: 'Пенсильвания' },
      { id: 342, name: 'Род-Айленд' },
      { id: 343, name: 'Северная Дакота' },
      { id: 344, name: 'Северная Каролина' },
      { id: 345, name: 'Теннесси' },
      { id: 346, name: 'Техас' },
      { id: 347, name: 'Флорида' },
      { id: 348, name: 'Южная Дакота' },
      { id: 349, name: 'Южная Каролина' },
      { id: 350, name: 'Юта' },
    ],
  },
  { id: 194, name: 'Соломоновы острова', code: '090' },
  { id: 195, name: 'Сомали', code: '706' },
  { id: 196, name: 'Судан', code: '729' },
  { id: 197, name: 'Суринам', code: '740' },
  { id: 198, name: 'Сьерра-Леоне', code: '694' },
  { id: 199, name: 'Таджикистан', code: '762' },
  { id: 200, name: 'Таиланд', code: '764' },
  { id: 201, name: 'Тайвань', code: '158' },
  { id: 202, name: 'Танзания', code: '834' },
  { id: 203, name: 'Тимор-Лесте', code: '626' },
  { id: 204, name: 'Того', code: '768' },
  { id: 205, name: 'Токелау', code: '772' },
  { id: 206, name: 'Тонга', code: '776' },
  { id: 207, name: 'Тринидад и Тобаго', code: '780' },
  { id: 208, name: 'Тувалу', code: '798' },
  { id: 209, name: 'Тунис', code: '788' },
  { id: 210, name: 'Туркмения', code: '795' },
  { id: 211, name: 'Турция', code: '792' },
  { id: 212, name: 'Тёркс и Кайкос', code: '796' },
  { id: 213, name: 'Уганда', code: '800' },
  { id: 214, name: 'Узбекистан', code: '860' },
  { id: 215, name: 'Украина', code: '804' },
  { id: 216, name: 'Уоллис и Футуна', code: '876' },
  { id: 217, name: 'Уругвай', code: '858' },
  { id: 218, name: 'Фарерские острова', code: '234' },
  { id: 219, name: 'Фиджи', code: '242' },
  { id: 220, name: 'Филиппины', code: '608' },
  { id: 221, name: 'Финляндия', code: '246' },
  { id: 222, name: 'Фолклендские острова', code: '238' },
  { id: 223, name: 'Франция', code: '250' },
  { id: 224, name: 'Французская Гвиана', code: '254' },
  { id: 225, name: 'Французская Полинезия', code: '258' },
  {
    id: 226,
    name: 'Французские Южные и Антарктические территории',
    code: '260',
  },
  { id: 227, name: 'Хорватия', code: '191' },
  { id: 228, name: 'Центральноафриканская Республика', code: '140' },
  { id: 229, name: 'Чад', code: '148' },
  { id: 230, name: 'Черногория', code: '499' },
  { id: 231, name: 'Чехия', code: '203' },
  { id: 232, name: 'Чили', code: '152' },
  { id: 233, name: 'Швейцария', code: '756' },
  { id: 234, name: 'Швеция', code: '752' },
  { id: 235, name: 'Шпицберген и Ян-Майен', code: '744' },
  { id: 236, name: 'Шри-Ланка', code: '144' },
  { id: 237, name: 'Эквадор', code: '218' },
  { id: 238, name: 'Экваториальная Гвинея', code: '226' },
  { id: 239, name: 'Эритрея', code: '232' },
  { id: 240, name: 'Эстония', code: '233' },
  { id: 241, name: 'Эфиопия', code: '231' },
  { id: 242, name: 'ЮАР', code: '710' },
  { id: 243, name: 'Южная Георгия и Южные Сандвичевы острова', code: '239' },
  { id: 244, name: 'Южная Корея', code: '410' },
  { id: 245, name: 'Ямайка', code: '388' },
  { id: 246, name: 'Япония', code: '392' },
];

export default countriesWithCodes;
