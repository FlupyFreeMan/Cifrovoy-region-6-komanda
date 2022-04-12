const resultData = [
    {
        id: 1,
        name: "Бальзак",
        about: "Личность этого типа можно охарактеризовать как хладнокровную и флегматичную. Это серьезные люди, которые не спешат совершать действия, пока выгода не будет на их стороне. Мышление имеет критическую направленность, всегда видит недостатки, упущения и недоработки. Старается не тратить свою энергию на ненужные действия, поэтому проявляет активность только там, где видит выгоду.",
        director_header: "Как руководит Бальзак:",
        director: [
            "Лучше удается решение стратегических задач.",
            "Не склонен к лидерству. При необходимости более адекватно может выразить себя в роли фронтального лидера.",
            "Способ установления делового контакта абстрагирован от эмоционального отношения. Большое значение имеют соображения о полезности партнера.",
            "Форма деловой активности основана на принципе - «минимум усилий - максимум пользы и выгоды».",
            "Система взаимодействия с подчиненными основана на принципе коллегиальности, выявлении и максимальном использовании их возможностей.",
            "Относится к сотрудничающему типу поведения с элементами компромиссного типа.",
            "Достигает крупных результатов за счет максимального использования имеющихся ресурсов. Эмоционально воздействовать на людей не может.",
            "Управление согласуется с общепринятыми этическими и профессиональными нормами.",
        ],
        motiv: "Мотивы - добродетельные, цель - прибыль в пределах подчинения закону.",
        law: "Оправдано то, что можно делать законно.",
        strategy: "Управление с ориентацией на естественную природу человека.",
        strong_header: "Сильные стороны Бальзака:",
        strong: [
            "Умение предугадывать развитие событий и явлений;",
            "Хорошо развитое воображение;",
            "Внимательность к людям, умение стимулировать их в работе.",
        ],
        weak_header: "Слабые стороны Бальзака:",
        weak: [
            "Пассивность, вызванная скептицизмом;",
            "Неприятие радикальных решений и перемен;", 
            "Нерациональные затраты ресурсов ввиду излишней щепетильности.",
        ],
    },
    {
        id: 2,
        name: "Достоевский",
        about: "Личность данного типа конкретна и сдержана. Его беспокоят проблемы нравственности и он гуманен к другим людям. Отлично решает стратегические задачи. Хорошо разбирается в людях и видит их сильные и слабые стороны. Для продуктивной работы нуждается в теплой и благоприятной атмосфере.",
        director_header: "Как руководит Достоевский:",
        director: [
            "Лучше удается решение стратегических задач.",
            "Не склонен к лидерству. В определенных случаях может взять на себя функции фронтального лидера.",
            "Способ установления делового контакта ориентирован личностный фактор.",
            "Форма деловой активности ориентирована на предвидение и заблаговременную предосторожность.",
            "Система взаимодействия с коллегами и подчиненными основана на взаимном признании ценностных установок, исключающих волевое давление. Уважает должностную иерархию.",
            "Характеризуется компрмиссным стилем поведения.",
            "Достигает высоких результатов за счет выявления и культивирования потенциальных возможностей членов коллектива.",
            "Отношение к этическим нормам: управление строго согласуется с общепринятыми этическими и профессиональными нормами поведения.",
        ],
        motiv: "Доброжелательные. Преуспевание только в границах этических норм.",
        law: "Деловая активность только в рамках закона.",
        strategy: "Ориентация на твердые этические нормы. Избегание конфликтных ситуаций.",
        strong_header: "Сильные стороны Достоевского:",
        strong: [
            "Хорошее понимание человеческой натуры, людских взаимоотношений;",
            "Чуткость и внимательность к людям.",
        ],
        weak_header: "Слабые стороны Достоевского:",
        weak: [
            "Недостаток решительности и инициативности;",
            "Излишняя тщательность и чрезмерная детализация при планировании.", 
        ],
    },
    {
        id: 3,
        name: "Драйзер",
        about: "Этот тип негативно настроен к людям, которые нарушают нормы и порядки. Особое внимание уделяет своим знаниям, умениям и навыкам. Часто недооценивает себя, поэтому избегает ответственности, либо делит ее с кем-то. Очень долго принимает решения в сложных ситуациях.",
        director_header: "Как руководит Драйзер:",
        director: [
            "Склонен решать тактические задачи.",
            "Обладает задатками иерархического лидера.",
            "Способ установления делового контакта ориентирован на личностный фактор. Демонстрация объективности носит формальный характер.",
            "Способен проявить вариативные формы деловой активности: от предусмотрительности до волевых, бескомпромиссных действий.",
            "Характеризуется бескомпромиссным стилем поведения.",
            "Достигает высоких результатов за счет сплочения коллектива, поддержания условий стабильности.",
            "Отношение к этическим нормам: управление осуществляется в соответствии со своим пониманием этических и профессиональных норм поведения.",
        ],
        motiv: "Стремится совместить добродетельные мотивы с собственными интересами. Их реализацию ставит выше престижа.",
        law: "Деловая активность в рамках закона.",
        strategy: "Ориентация на твердые этические нормы. Бескомпромиссная защита своих интересов и интересов коллектива.",
        strong_header: "Сильные стороны Драйзера:",
        strong: [
            "Строгая приверженность выбранным морально-этическим ценностям;",
            "Умение находить индивидуальный подход к людям;",
            "Высокая работоспособность;",
            "Умение отстаивать свои интересы.", 
        ],
        weak_header: "Слабые стороны Драйзера:",
        weak: [
            "Неуверенность в себе;",
            "Неумение быстро адаптироваться к переменам;", 
            "Трудности с пониманием скрытых причин явлений, некоторая стереотипность мышления.",
        ],
    },
    {
        id: 4,
        name: "Дюма",
        about: "Личность данного типа общительна, дружелюбна по отношению к окружающим. Такой человек искренне интересуется другими людьми и готов помогать им при необходимости. Успешно справляется с тактическими задачами. Он всегда в курсе всех новых событий, поэтому знает на кого и как можно поднажать.",
        director_header: "Как руководит Дюма:",
        director: [
            "Лучше удается решение тактических задач.",
            "Адекватно может проявить себя в роли фронтального лидера.",
            "Способ установления контакта ориентирован на личностные факторы.",
            "Форма деловой активности ориентирована на предусмотрительность, недопущение рискованных шагов.",
            "Система взаимодействия с подчиненными строится в соответствии с принципом коллегиальности. Ведется поиск эмоциональной связи.",
            "Относится к компромиссному типу поведения. Способен на активное сотрудничество, если взаимодействует с инициативным в этом отношении партнером.",
            "Свою деятельность согласует с общепринятыми этическими и профессиональными нормами поведения.",
            "Достигает крупных результатов за счет создания благоприятного психологического климата в коллективе.",
        ],
        motiv: "Благие и добродетельные намерения. Приверженность к этическим ценностям. Прибыль в рамках, допустимых этикой.",
        law: "Закон дополняется этическим подходом.",
        strategy: "Берет на себя функции лидера в решении этических проблем.",
        strong_header: "Сильные стороны Дюма:",
        strong: [
            "Дипломатичность, мягкость в общении;",
            "Умение подбирать себе занятие по душе.",
        ],
        weak_header: "Слабые стороны Дюма:",
        weak: [
            "Неумение работать в неприятной обстановке или делать неинтересную, трудную работу;",
            "Плохое видение перспективы развития ситуации;", 
            "Неуверенность в себе.",
        ],
    },
    {
        id: 5,
        name: "Есенин",
        about: "Очень чувствительный психотип. Не живет в настоящем, так как постоянно думает о прошлом или будущем. Негативно относится к переменам. Нуждается в мягком и доброжелательном отношении. Если с ним будут грубо обращаться, то способен замкнуться в себе. Постоянно ищет источник опасности, чтобы предотвратить ее.",
        director_header: "Как руководит Есенин:",
        director: [
            "Лучше удается решение стратегических задач.",
            "Эмоциональный лидер в иерархической организованной системе.",
            "Способ установления контакта ориентирован на человеческий фактор.",
            "Форма деловой активности ориентирована на предвидение и заблаговременную предусмотрительность.",
            "Система взаимодействия с подчиненными предполагает эмоциональный контроль и применение эмоций как инструмента воздействия на людей.",
            "Характеризуется компромиссным типом поведения.",
            "Ценит отношения выше результатов производства.",
            "Отношение к этическим нормам зависит от симпатий.",
        ],
        motiv: "Мотивы часто эгоистические. Цель - прибыль в рамках закона.",
        law: "Предпочитается буква закона.",
        strategy: "Личная мораль может использоваться по его усмотрению.",
        strong_header: "Сильные стороны Есенина:",
        strong: [
            "Сильная интуиция;",
            "Глубокий духовный мир.",
        ],
        weak_header: "Слабые стороны Есенина:",
        weak: [
            "Неумение заниматься неинтересными делами;",
            "Неумение составлять детальный план действий.",
        ],
    },
    {
        id: 6,
        name: "Габен",
        about: "Этот человек мастер своего дела. Много времени уделяет развитию навыков, поиску новых знаний. Старается создать такую атмосферу среди рабочего коллектива, в которой было бы комфортно выполнять задачи. Данная личность при сотрудничестве с людьми, учитывает человеческие потребности и в результате получается уникальный продукт.",
        director_header: "Как руководит Габен:",
        director: [
            "Лучше удается решение тактических задач.",
            "Иерархический лидер деловой направленности.",
            "Способ установления контакта ориентирован на человеческий фактор.",
            "Форма деловой активности ориентирована на выявление и использование интеллектуальных ресурсов.",
            "Система взаимодействия с подчиненными основана на принципе патернализма — «отеческой заботы».",
            "По отношению к конфликтной ситуации характеризуется вариативностью — может успешно конкурировать, сотрудничать, идти на компромиссы в зависимости от поставленной задачи.",
            "Достигает крупных результатов за счет всесторонней заинтересованности коллектива, преследующего совместную цель. Склонен к авторитарным методам, но в мягкой, 'патерналистской' форме. Соблюдает должностную иерархию.",
            "Отношение к этическим нормам. Управление согласуется с общепринятыми этическими и профессиональными нормами поведения.",
        ],
        motiv: "Преуспевание только в границах этических норм. Придерживается этики долга. Стремление к прибыли в границах, дозволенных законом.",
        law: "Деловая активность строго в рамках закона с соблюдением этических норм.",
        strategy: "Ориентация на традиционную систему ценностей. Руководители берут на себя решение этических проблем своих работников.",
        strong_header: "Сильные стороны Габена:",
        strong: [
            "Практическая логика;",
            "Любознательность, стремление познать новое и применить на практике;",
            "Умение планировать действия;",
            "Исполнительность и работоспособность.", 
        ],
        weak_header: "Слабые стороны Габена:",
        weak: [
            "Неумения проявлять чувства;",
            "Пессимистический взгляд на будущее;", 
        ],
    },
    {
        id: 7,
        name: "Гамлет",
        about: "Эта личность способна к неожиданным эмоциональным всплескам. Может зажигать и воодушевлять других людей. Такому человеку успешно удается решать стратегические задачи. Негативно относится к событиям, которые нарушают его планы. Способен занять лидерскую позицию. В управлении подчиненных может экспериментировать различными методами влияния.",
        director_header: "Как руководит Гамлет:",
        director: [
            "Склонен к решению стратегических задач.",
            "Способен выполнять функции фронтального и иерархического лидера.",
            "Способ установления делового контакта ориентирован на личностный фактор.",
            "Форма деловой активности предполагает предусмотрительность и видение перспективы.",
            "Система взаимодействия с коллегами и подчиненными основана на отношениях иерархии.",
            "Относится к конкурирующему типу поведения с элементами сотрудничающего типа.",
            "Достигает крупных результатов за счет эмоционального воздействия на людей.",
            "Управленческие решения не рассматриваются в этической перспективе. Придерживается разных ''правил игры''.",
        ],
        motiv: "Благие намерения, личный успех, отождествляемый с успехом организации.",
        law: "Придерживается закона, если он не мешает реализации поставленной цели.",
        strategy: "Полная свобода управления. Личная мораль используется по его усмотрению.",
        strong_header: "Сильные стороны Гамлета:",
        strong: [
            "Развитая интуиция;",
            "Нимательное отношение к окружающим;",
            "Смелость и решительность;",
            "Умение устанавливать и поддерживать отношения с людьми.", 
        ],
        weak_header: "Слабые стороны Гамлета:",
        weak: [
            "Невнимание к деталям;",
            "Неспособность заниматься подолгу одной и той же работой;",
            "Вспыльчивость, недостаточная сила воли;",
            "Неумения планировать действия и слабый логический анализ.",
        ],
    },
    {
        id: 8,
        name: "Гексли",
        about: "Такой человек очень активен и непоследователен. Хорошо выполняет работу только когда заинтересован в этом. В остальное время делает работу из-под палки. Заинтересован в защите и интересах сотрудников. Может расположить к себе людей, разрядить напряженную обстановку.",
        director_header: "Как руководит Гексли",
        director: [
            "Склонен к решению стратегических задач.",
            "Может адекватно себя реализовать в качестве фронтального лидера.",
            "Способ установления делового контакта ориентирован на личностный фактор.",
            "Форма деловой активности основана на предусмотрительности, своевременности поступков, видении перспективы. Подвержен подъему и спаду настроения - импульсивная работоспособность.",
            "Система взаимодействия с коллегами и подчиненными ориентирована на глубокое постижение личностного фактора.",
            "Компромиссный тип поведения с элементами сотрудничающего типа.",
            "Достигает крупных результатов за счет оптимально подобранного коллектива, создания в нем благоприятного климата, удачного делегирования полномочий.",
            "Соблюдает принципы этики в бизнесе. В этом плане подвержен влиянию партнеров по деловой активности.",
        ],
        motiv: "Благие намерения, сочетаемые с желаниями личного успеха. Цель - реализация своих способностей, самоутверждение, материальный успех.",
        law: "Предпочтение буквы закона, если он не сковывает инициативу.",
        strategy: "Полная свобода управления. Максимальное внимание человеческому фактору. Может взять на себя функции лидера в разрешении этических проблем.",
        strong_header: "Сильные стороны Гексли:",
        strong: [
            "Внимательность к окружающим;",
            "Дальновидность, предусмотрительность;",
            "Решительность, принципиальность.",
        ],
        weak_header: "Слабые стороны Гексли:",
        weak: [
            "Неумение избегать психологически неприятных ситуаций;",
            "Неумение демонстрировать свои деловые качества.", 
        ],
    },
    {
        id: 9,
        name: "Максим Горький",
        about: "Главными характеристиками это типа является дисциплинированность, склонность к точности и порядку. Это человек слова, пообещал - значит точно сделает. Это волевой и властный человек, который добивается своего благодаря терпению и последовательности. Подозрительно относится ко всему новому и не доверяет инновациям.",
        director_header: "Как руководит Максим Горький:",
        director: [
            "Лучше удается решение тактических задач.",
            "Адекватно может проявить себя только в роли иерархического лидера.",
            "Способ установления делового контакта ориентирован на объективные критерии, ограждает себя от влияния эмоциональных оценок.",
            "Форма деловой активности характеризуется настойчивостью, целенаправленностью, учетом мельчайших деталей, относящихся к делу.",
            "Система взаимодействия с подчиненными строится по схеме ''инструктор - инструктируемые''. Самостоятельность и самоинициатива не поощряются.",
            "Относится к конкурирующему типу поведения.",
            "Достигает крупных результатов за счет создания совершенных организационных структур, основанных на контроле. Человеческий фактор не принимается во внимание.",
            "Демонстрирует приверженность к принципам этики в бизнесе. Часто такая демонстрация имеет формальный характер.",
        ],
        motiv: "Эгоизм, прибыль и успех организации любой ценой.",
        law: "Законопослушен. Вооружается юридическими знаниями, чтобы не попасть впросак.",
        strategy: "Максимальное внимание производству, минимальное - человеческому фактору.",
        strong_header: "Сильные стороны Максима Горького:",
        strong: [
            "Логичность мыслей и поступков;",
            "Ответственность;",
            "Целеустремленность, настойчивость.",
        ],
        weak_header: "Слабые стороны Максима Горького:",
        weak: [
            "Приверженность стереотипам;",
            "Плохое видение потенциальных изменений;",
            "Резкая смена поведения в общении с людьми — от любезности до грубости.",
        ],
    },
    {
        id: 10,
        name: "Гюго",
        about: "Представитель данного типа энергичен, предприимчив и готов пойти на риск. Душа компании, фантазёр и любитель хвастаться. Если видит в каких-то делах выгоду, то непременно приступает к деятельности, не откладывает их на потом. На рабочем месте старается создать дружелюбную атмосферу в коллективе. Отождествляет себя с организацией, способен переживать ее неудачи и радуется в ситуации побед.",
        director_header: "Как руководит Гюго:",
        director: [
            "Лучше удается решение тактических задач.",
            "Адекватно может себя реализовать в роли фронтального лидера в делах практически-организационного плана. Способен увлечь других.",
            "Способ установления делового контакта в значительной степени зависит от эмоциональных и ценностных установок.",
            "Форма деловой активности характеризуется настойчивостью в достижении цели путем успешного обхода препятствий и осложнений во взаимоотношениях.",
            "Система взаимодействия с подчиненными строится с учетом эмоциональных взаимоотношений.",
            "Склонен к сотрудничающему типу поведения на основе взаимной выгоды. Может проявить элементы конкурирующего типа.",
            "Достигает крупных результатов за счет энергичности, умелой мотивации и манипулирования эмоциональными отношениями.",
            "Может манипулировать этическими принципами, ориентироваться на 'разные правила игры'.",
        ],
        motiv: "Благие намерения и корыстные побуждения. Прибыль желательно в рамках закона.",
        law: "Предпочитается буква закона.",
        strategy: "Полная свобода управления в рамках закона.",
        strong_header: "Сильные стороны Гюго:",
        strong: [
            "Решительность и инициативность;",
            "Умение отстаивать свои интересы;",
            "Умение общаться с людьми;",
            "Способность быстро принимать решения.",
        ],
        weak_header: "Слабые стороны Гюго:",
        weak: [
            "Неумение отделить главное от второстепенного;",
            "Неспособность строить стратегические планы;",
            "Болезненное восприятие критики.",
        ],
    },
    {
        id: 11,
        name: "Жуков",
        about: "Это волевой и уверенный в себе человек. Его не пугает опасность и риск. Жуков общителен, старается заводить полезные знакомства. Склонен к лидерству и имеет потребность контролировать и управлять людьми. Критически относится к людям, которые не следят за своей физической формой, не уверены в себе и застенчивы.",
        director_header: "Как руководит Жуков:",
        director: [
            "Лучше удается решение тактических задач.",
            "Иерархический лидер деловой направленности.",
            "Способ установления контакта ориентирован на объективные показатели.",
            "Форма деловой активности ориентирована на волевое преодоление преград и препятствий.",
            "Система взаимодействия с подчиненными предполагает административный контроль по результатам их деятельности без промежуточного контролирования.",
            "Относится к конкурирующему типу поведения.",
            "Достигает крупных результатов в деловой активности без внимания к человеческим отношениям.",
            "Склонен к активному отрицанию этики в бизнесе. Цель оправдывает средства.",
        ],
        motiv: "Эгоизм, карьеристские планы, стремление к жизненному успеху. Озабоченность собственными прибылями и успехами своей фирмы любой ценой.",
        law: "Склонен к криминальному риску. Если есть возможность, то правовые барьеры желательно преодолеть.",
        strategy: "Хорошая ориентация в ситуации, нацеленность на благоприятные возможности для увеличения прибыли.",
        strong_header: "Сильные стороны Жукова:",
        strong: [
            "Логический анализ;",
            "Умение планировать действия и следовать принятым планам;",
            "Умение создавать комфорт себе и окружающим.",
        ],
        weak_header: "Слабые стороны Жукова:",
        weak: [
            "Неспособность гибко вести себя в неплановых ситуациях;",
            "Вспыльчивость, несдержанность", 
        ],
    },
    {
        id: 12,
        name: "Дон Кихот",
        about: "Те, у кого преобладает данный тип, отлично справляются с решением стратегических задач. Не теряются при возникновении неожиданных проблем. Положительно относятся к переменам. Способны заинтересовать и убедить подчиненных, вызывают к себе уважение со стороны.",
        director_header: "Как руководит Дон Кихот",
        director: [
            "Лучше удается решение стратегических задач.",
            "Адекватно может себя реализовать в роли фронтального лидера.",
            "В установлении делового контакта ориентируется на объективные критерии.",
            "Форма деловой активности ориентирована на видение перспективы и преодоление препятствий для ее достижения.",
            "Система взаимодействия с подчиненными строится в соответствии с принципами демократизма и коллегиальности; ориентация на самодеятельность и инициативу.",
            "Демонстрирует сотрудничающий тип поведения с элементами конкурирующего стиля.",
            "Достигает крупных результатов за счет хорошей ориентированности в потенциальных возможностях работников. Эмоциональный срез отношений не имеет для него существенного значения.",
            "Придерживается этических принципов в бизнесе. Может ориентироваться на разные 'правила игры'.",
        ],
        motiv: "Большое значение имеет мотив престижности, удовлетворение интеллектуальных потребностей.",
        law: "Стремление действовать в рамках закона, который может быть истолкован довольно широко.",
        strategy: "Смириться и жить дальше.",
        strong_header: "",
        strong: [
            "Практичность ума;",
            "Предприимчевость;",
            "Оптимизм, адекватное восприятие нового.",
        ],
        weak_header: "Слабые стороны Дон Кихота:",
        weak: [
            "Склонность растрачивать силы по мелочам;",
            "Слабый эстетический вкус.", 
        ],
    },
    {
        id: 13,
        name: "Джек Лондон",
        about: "Данный тип легко вступает в общение и у него все хорошо с юмором. Это энергичный, жизнерадостный и прагматичный человек. Свою карьеру воспринимает как игру, в которой важен выигрыш. Умеет рисковать и открыт ко всему новому. К трудностям относится спокойно, так как знает, что без них никуда.",
        director_header: "Как руководит Джек Лондон",
        director: [
            "Склонен к решению стратегических задач.",
            "Адекватно может себя реализовать в роли фронтального лидера.",
            "Способ установления делового контакта ориентирован на объективные критерии.",
            "Форма деловой активности разнообразна: проявляет трезвый расчет, предусмотрительность, Способен на волевое преодоление преград, нетерпим к бюрократизму.",
            "Система взаимодействия с подчиненными основана на стимулировании их интереса: поощряет тех, кто способствует успеху организации, наказывает тех, кто препятствует.",
            "Относится к сотрудничающему типу поведения. При необходимости может с успехом участвовать в конкуренции.",
            "Достигает крупных производственных результатов за счет предприимчивости, ориентации на новые технологии.",
            "Близок к моральному стилю менеджмента, но по необходимости может принять любой стиль.",
        ],
        motiv: "Удовлетворение получает от самого процесса работы. Главная цель - достижение крупного результата, выделяющего его среди других.",
        law: "Уважает закон, если он не защищает бюрократические порядки и не мешает разворачиванию инициативы.",
        strategy: "Свобода управления, максимальное внимание производству, новым технологиям, человеческим ресурсам.",
        strong_header: "Сильные стороны Джека Лондона:",
        strong: [
            "Любознательность;",
            "Умение постичь скрытую сущность явлений;",
            "Развитая абстрактная логика.",
        ],
        weak_header: "Слабые стороны Джека Лондона:",
        weak: [
            "Неумение разбираться в людях, их взаимоотношениях;",
            "Слабая самодисциплина.", 
        ],
    },
    {
        id: 14,
        name: "Наполеон",
        about: "Это волевой тип, который умеет манипулировать другими людьми. Легко может адаптироваться в любой социальной среде и войти в доверие. Таким людям очень важен их статус, поэтому они стремятся взойти вверх по карьерной лестнице. Не переносит критику в свой адрес.",
        director_header: "Как руководит Наполеон",
        director: [
            "клонен к решению тактических задач.",
            "Способен адекватно проявить себя в роли фронтального лидера.",
            "Способ установления делового контакта ориентирован на субъективный фактор.",
            "Форма деловой активности имеет ярко выраженный эмоциональный характер и ориентирована на защиту имеющихся достижений.",
            "Система взаимодействия с людьми предполагает атмосферу свободного раскованного общения, установку на коллегиальность.",
            "Относится к конкурирующему типу поведения с элементами компромиссного типа.",
            "Достигает крупных результатов за счет эпизодически проявляемой бурной активности и умелого манипулирования людьми.",
            "Может продемонстрировать активное отрицание этики в бизнесе.",
        ],
        motiv: "Эгоизм, прибыль и успех организации любой ценой.",
        law: "Правовые барьеры желательно преодолеть, но без криминального риска.",
        strategy: "Полная свобода управления. Максимально возможная эксплуатация потенциальных возможностей человека.",
        strong_header: "Сильные стороны Наполеона:",
        strong: [
            "Наличие строгой системы жизненных ценностей;",
            "Умение отстаивать справедливость в принципиальных вопросах;",
            "Хороший вкус;",
            "Умение общаться с людьми и доставлять им удовольствие.",
        ],
        weak_header: "Слабые стороны Наполеона:",
        weak: [
            "Слабое видение иерархии проблем (что более важно на данный момент, а что — менее);",
            "Неумение рационально использовать ресурсы.", 
        ],
    },
    {
        id: 15,
        name: "Робеспьер",
        about: "Человек данного типа мало эмоционален, уравновешен, спокоен. Живет по своим интересам и правилам, имеет небольшое количество друзей. Умело решает стратегические задачи. Может уступить в мелких вопросах, без проблем находит подход к людям.",
        director_header: "Как руководит Робеспьер:",
        director: [
            "Более успешно решает ключевые стратегические задачи.",
            "Адекватно может себя проявить в роли фронтального лидера.",
            "Способ установления делового контакта ориентирован на объективные критерии и оценку с этих позиций потенциальных возможностей партнера.",
            "Форма деловой активности характеризуется предусмотрительностью, ориентируется на анализ своих собственных возможностей.",
            "Система взаимодействия с подчиненными строится на коллегиальной основе.",
            "Относится к сотрудничающему типу поведения с элементами компромиссного типа.",
            "Достигает крупных результатов за счет учета объективных возможностей. Эмоционально воздействовать на людей не может.",
            "Управление согласуется с общепринятыми этическими и профессиональными нормами поведения.",
            
        ],
        motiv: "Мотивы - преуспевание в рамках этических представлений. Цель - прибыль в рамках закона.",
        law: "Не может работать по законам, защищающим бюрократические порядки, регламентирующим иерархическую структуру полномочий.",
        strategy: "Полная свобода управления, сообразующаяся с объективной необходимостью. Не может выполнять функции лидера в решении этических проблем.",
        strong_header: "Сильные стороны Робеспьера:",
        strong: [
            "Аналитический ум, структурное мышление;",
            "Умение отделить главное от второстепенного;",
            "Справедливость и объективность по отношению к людям.",
        ],
        weak_header: "Слабые стороны Робеспьера:",
        weak: [
            "Неуверенность в себе;",
            "Неумение отстоять свою точку зрения;",
            "Медлительность;",
            "Неумение обращаться с людьми.",
        ],
    },
    {
        id: 16,
        name: "Штирлиц",
        about: "Это люди, которые любят порядок, очень требовательны к себе и другим, трудолюбивы. Работа - это его смысл жизни, поэтому он склонен отдавать ей много сил и энергии. Умеет анализировать информацию и фильтровать ее. Придерживаются и уважает традиционные ценности. Выполняет свои обещания, часто задерживается на работе, исполнителен и пунктуален.",
        director_header: "Как руководит Штирлиц:",
        director: [
            "Лучше удается решение тактических задач.",
            "Деловой лидер в иерархически организованной системе.",
            "Способ установления контакта ориентирован на объективные критерии.",
            "Форма деловой активности ориентирована на устранение препятствий и дискомфорта в производственной деятельности подчиненных.",
            "Система взаимодействия с подчиненными предполагает контроль и выдачу указаний.",
            "Система взаимодействия с подчиненными предполагает контроль и выдачу указаний.",
            "Результаты производства ценит выше отношений.",
            "Отношение к этическим нормам: считает, что управленческие решения должны опираться на четкие законы и принятые 'правила игры'.",
        ],
        motiv: "Мотивы - благие намерения, однако воздействие принимаемых решений на других людей в расчет не принимается. Цель - прибыль в рамках закона.",
        law: "Предпочитается буква закона.",
        strategy: "Полная свобода управления в рамках закона.",
        strong_header: "Сильные стороны Штирлица:",
        strong: [
            "Смелость, решительность;",
            "Высокая активность;",
            "Ответственность;",
            "Хорошие организаторские способности.", 
        ],
        weak_header: "Слабые стороны Штирлица:",
        weak: [
            "Плохие манеры в общении;",
            "Преувеличение человеческих недостатков.", 
        ],
    },
];
export default resultData