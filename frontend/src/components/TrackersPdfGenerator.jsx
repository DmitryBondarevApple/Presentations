/**
 * Trackers Academy Presentation PDF Generator
 * 32 slides, A4 Landscape, monochrome Swiss style
 * Pre-generates Light and Dark themes.
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;
const TOTAL = 32;

const THEMES = {
  light: {
    bg: "#ffffff", fg: "#0a0a0a", fg2: "#3f3f46",
    muted: "#52525b", dim: "#a1a1aa",
    border: "#e5e5e5", card: "#fafafa",
    badge: "#0a0a0a", badgeFg: "#ffffff",
  },
  dark: {
    bg: "#0f0f0f", fg: "#fafafa", fg2: "#d4d4d8",
    muted: "#a1a1aa", dim: "#71717a",
    border: "#27272a", card: "#18181b",
    badge: "#fafafa", badgeFg: "#0a0a0a",
  },
};
let T = THEMES.light;

const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: "28 36" });
const Header = ({ num, label }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 18 }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.dim, letterSpacing: 2, textTransform: "uppercase" }}>{label || ""}</Text>
    {num && <Text style={{ fontSize: 11, color: T.dim, letterSpacing: 1.5 }}>{String(num).padStart(2, "0")} / {TOTAL}</Text>}
  </View>
);
const H = ({ children }) => <Text style={{ fontSize: 30, fontWeight: 700, color: T.fg, marginBottom: 10, lineHeight: 1.2 }}>{children}</Text>;
const Sub = ({ children }) => <Text style={{ fontSize: 16, color: T.muted, lineHeight: 1.5, marginBottom: 18, maxWidth: 600 }}>{children}</Text>;
const Li = ({ children }) => (
  <View style={{ flexDirection: "row", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
    <View style={{ width: 6, height: 6, borderRadius: 3, backgroundColor: T.fg, marginTop: 6, opacity: 0.6 }} />
    <Text style={{ fontSize: 14, color: T.fg2, lineHeight: 1.5, flex: 1 }}>{children}</Text>
  </View>
);
const TRow = ({ cells, header, last }) => (
  <View style={{ flexDirection: "row", borderBottomWidth: last ? 0 : 0.5, borderBottomColor: T.border, paddingVertical: header ? 8 : 10, paddingHorizontal: 12, backgroundColor: header ? T.badge : "transparent" }}>
    {cells.map((c, i) => (
      <Text key={i} style={{ flex: i === 0 ? 1 : 2, fontSize: header ? 10 : 14, fontWeight: i === 0 || header ? 700 : 400, color: header ? T.badgeFg : (i === 0 ? T.fg : T.fg2), letterSpacing: header ? 1.5 : 0, textTransform: header ? "uppercase" : "none", lineHeight: 1.4 }}>{c}</Text>
    ))}
  </View>
);
const Table = ({ headers, rows }) => (
  <View style={{ borderWidth: 0.5, borderColor: T.border, borderRadius: 4, overflow: "hidden", maxWidth: 700 }}>
    <TRow cells={headers} header />
    {rows.map((r, i) => <TRow key={i} cells={r} last={i === rows.length - 1} />)}
  </View>
);
const Card = ({ children, accent }) => (
  <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 14, borderWidth: accent ? 2 : 0.5, borderColor: accent ? T.fg : T.border }}>{children}</View>
);
const Badge = ({ children }) => (
  <View style={{ backgroundColor: T.badge, borderRadius: 3, paddingHorizontal: 10, paddingVertical: 4, alignSelf: "flex-start" }}>
    <Text style={{ fontSize: 10, fontWeight: 700, color: T.badgeFg, letterSpacing: 1.5, textTransform: "uppercase" }}>{children}</Text>
  </View>
);

/* ══ SLIDES ══ */

const S01 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 10, color: T.dim, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>АКАДЕМИЯ ТРЕКЕРОВ · СКОЛКОВО</Text>
    <Text style={{ fontSize: 36, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.25 }}>Введение в стартапы</Text>
    <Text style={{ fontSize: 16, color: T.muted, textAlign: "center", maxWidth: 500, marginTop: 14, lineHeight: 1.5 }}>Стартап как система гипотез, метрик, рисков и проверяемых действий</Text>
    <View style={{ width: 40, height: 1, backgroundColor: T.dim, marginTop: 28, opacity: 0.4 }} />
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 18 }}>
      <Image src={`${ib}/images/trackers/speaker.png`} style={{ width: 32, height: 32, borderRadius: 16, objectFit: "cover" }} />
      <Text style={{ fontSize: 12, color: T.dim }}>Дмитрий Бондарев</Text>
    </View>
  </Page>
);

const S02 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={2} label="О чём эта лекция" />
    <H>Сегодня мы разберём</H>
    <View style={{ gap: 4 }}>
      <Li>Что такое стартап и чем он отличается от малого бизнеса</Li>
      <Li>Как устроен жизненный цикл стартапа</Li>
      <Li>Какие KPI важны на разных стадиях</Li>
      <Li>Как трекер может определить главный риск</Li>
      <Li>Почему успешные и неуспешные кейсы учат одному: стадия, метрика и действие должны совпадать</Li>
    </View>
  </Page>
);

const S03 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={3} label="Взгляд трекера" />
    <H>Стартап глазами трекера</H><Sub>Трекеру нужно быстро понять четыре вещи</Sub>
    <Table headers={["Вопрос", "Что нужно выяснить"]} rows={[["Стадия", "Где команда находится сейчас"], ["Риск", "Что может помешать следующему шагу"], ["Метрика", "Какой показатель сейчас главный"], ["Действие", "Что снизит неопределённость за неделю"]]} />
  </Page>
);

const S04 = ({ ib }) => (
  <Page size={[PW, PH]} style={ps()}><Header num={4} label="Спикер" />
    <View style={{ flexDirection: "row", gap: 24 }}>
      <View style={{ flex: 1 }}>
        <H>Практическая позиция спикера</H><Sub>Я говорю об этом как практик</Sub>
        <Li>Серийный предприниматель</Li><Li>Более 10 компаний</Li><Li>Опыт привлечения инвестиций</Li><Li>Опыт бизнес-ангела</Li><Li>Опыт работы с фондами, корпорациями и стартапами</Li>
      </View>
      <View style={{ alignItems: "center" }}>
        <Image src={`${ib}/images/trackers/speaker.png`} style={{ width: 120, height: 120, borderRadius: 8, objectFit: "cover" }} />
        <Text style={{ fontSize: 12, color: T.fg2, marginTop: 8 }}>Дмитрий Бондарев</Text>
      </View>
    </View>
  </Page>
);

const S05 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={5} label="Определение" />
    <H>Что такое стартап</H>
    <Text style={{ fontSize: 16, color: T.fg2, lineHeight: 1.5, marginBottom: 18, maxWidth: 620 }}>Стартап — это <Text style={{ fontWeight: 700, color: T.fg }}>временная организация в поиске повторяемой, масштабируемой и экономически жизнеспособной бизнес-модели.</Text></Text>
    <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
      {["Поиск", "Повторяемость", "Масштабируемость", "Экономическая жизнеспособность", "Высокая неопределённость"].map((k, i) => <Badge key={i}>{k}</Badge>)}
    </View>
  </Page>
);

const S06 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={6} label="Отличия" />
    <H>Стартап — это не просто новая компания</H><Sub>Сравнение типов деятельности</Sub>
    <Table headers={["Тип деятельности", "Суть"]} rows={[["Малый бизнес", "Исполнение понятной модели"], ["Проект", "Ограниченный срок, бюджет и результат"], ["Инновационный продукт", "Новая технология или решение"], ["Стартап", "Поиск новой масштабируемой модели"]]} />
  </Page>
);

const S07 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={7} label="Пример" />
    <H>Магазин у дома и ВкусВилл</H>
    <View style={{ flexDirection: "row", gap: 12 }}>
      <Card><Text style={{ fontSize: 10, color: T.dim, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>ОБЫЧНЫЙ БИЗНЕС</Text><Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginBottom: 8 }}>Магазин у дома</Text><Li>Модель понятна</Li><Li>Риски: трафик, аренда, ассортимент</Li><Li>Предпринимательство, но не стартап</Li></Card>
      <Card accent><Text style={{ fontSize: 10, color: T.fg, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 6 }}>СТАРТАП</Text><Text style={{ fontSize: 16, fontWeight: 700, color: T.fg, marginBottom: 8 }}>ВкусВилл (ранняя стадия)</Text><Li>Гипотеза собственной марки</Li><Li>Доверие к магазину как фильтру качества</Li><Li>Новый сценарий потребления</Li></Card>
    </View>
  </Page>
);

const S08 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={8} label="Свойства" />
    <H>Три свойства стартапа</H>
    <View style={{ flexDirection: "row", gap: 12 }}>
      {[{n:"01",t:"Гипотеза",d:"Что должно быть истинным, чтобы бизнес работал?"},{n:"02",t:"Неопределённость",d:"Что команда ещё не знает о клиенте, продукте, канале, цене, экономике?"},{n:"03",t:"Рост",d:"Можно ли быстро и значимо увеличить бизнес, не разрушив модель?"}].map((p,i)=>(
        <Card key={i}><Text style={{fontSize:20,fontWeight:700,color:T.dim,opacity:0.4,marginBottom:4}}>{p.n}</Text><Text style={{fontSize:16,fontWeight:700,color:T.fg,marginBottom:6}}>{p.t}</Text><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5}}>{p.d}</Text></Card>
      ))}
    </View>
  </Page>
);

const S09 = () => (<Page size={[PW, PH]} style={ps()}><Header num={9} label="Гипотеза" /><H>Стартап начинается с гипотезы</H><Sub>Примеры гипотез</Sub><Li>Руководители сервисных компаний готовы платить за анализ звонков, если он покажет потерянные лиды</Li><Li>Команды готовы работать на онлайн-доске, если она ускоряет совместные обсуждения</Li><Li>Покупатели готовы доверять магазину как фильтру качества</Li><Li>Пассажиры и водители готовы договариваться о цене поездки напрямую</Li></Page>);

const S10 = () => (<Page size={[PW, PH]} style={ps()}><Header num={10} label="Жизненный цикл" /><H>Жизненный цикл стартапа</H><Sub>Содержательные стадии важнее инвестиционных раундов</Sub><Table headers={["Стадия","Главный вопрос"]} rows={[["Problem discovery","Есть ли у кого-то острая боль?"],["Customer discovery","Кто клиент и как решает проблему?"],["MVP, validation","Готов ли клиент действовать или платить?"],["Product-market fit","Повторяем ли спрос?"],["Efficiency","Можем ли расти при нормальной экономике?"],["Scale","Выдержит ли компания рост?"],["Sustain","Как управлять зрелой компанией?"]]}/></Page>);

const S11 = () => (<Page size={[PW, PH]} style={ps()}><Header num={11} label="Раунды ≠ стадия" /><H>Почему pre-seed, seed и Series A недостаточно</H><Sub>Инвестиционная стадия не всегда равна реальному состоянию бизнеса</Sub><Li>Команда может поднять seed без product-market fit</Li><Li>Иметь выручку без инвестиций</Li><Li>Называть презентацию MVP</Li><Li>Иметь пилоты, но не иметь продаж</Li><Li>Быть известной, но не иметь устойчивой экономики</Li></Page>);

const S12 = () => (<Page size={[PW, PH]} style={ps()}><Header num={12} label="Problem discovery" /><H>Problem discovery</H><Sub>Главный вопрос: есть ли проблема, которую стоит решать?</Sub><View style={{flexDirection:"row",gap:12,flexWrap:"wrap"}}><Li>У кого именно есть боль</Li><Li>Как часто проблема возникает</Li><Li>Как клиент решает её сейчас</Li><Li>Сколько это стоит</Li><Li>Что произойдёт, если не решить</Li><Li>Есть ли бюджет на решение</Li></View></Page>);

const S13 = () => (<Page size={[PW, PH]} style={ps()}><Header num={13} label="Customer discovery" /><H>Customer discovery</H><Sub>Главный вопрос: кто клиент и как он принимает решения?</Sub><Text style={{fontSize:13,color:T.muted,marginBottom:10}}>В B2B важно различать:</Text><Li>Пользователь</Li><Li>Покупатель</Li><Li>Лицо, принимающее решение</Li><Li>Владелец технической реализации</Li><Li>Финансовый согласователь</Li><Li>Потенциальный противник изменений</Li></Page>);

const S14 = () => (<Page size={[PW, PH]} style={ps()}><Header num={14} label="MVP и валидация" /><H>MVP и validation</H><Sub>MVP — это не маленькая версия большой платформы. MVP — это минимальный способ проверить ключевую гипотезу.</Sub><Text style={{fontSize:13,color:T.muted,marginBottom:10}}>Проверяем поведение клиента:</Text><Li>Зарегистрировался ли сам</Li><Li>Загрузил ли данные</Li><Li>Вернулся ли снова</Li><Li>Подключил ли коллегу</Li><Li>Попросил ли счёт</Li><Li>Заплатил ли за пилот</Li></Page>);

const S15 = () => (<Page size={[PW, PH]} style={ps()}><Header num={15} label="Product-market fit" /><H>Product-market fit</H><Sub>PMF — это когда рынок начинает тянуть продукт</Sub><Li>Клиенты покупают по похожей причине</Li><Li>Возражения повторяются</Li><Li>Продажи становятся понятнее</Li><Li>Пользователи возвращаются</Li><Li>Появляются продления и рекомендации</Li><Li>Команда обслуживает спрос, а не придумывает его</Li></Page>);

const S16 = () => (<Page size={[PW, PH]} style={ps()}><Header num={16} label="Efficiency" /><H>Efficiency</H><Sub>Главный вопрос: можем ли расти при разумной экономике?</Sub><View style={{flexDirection:"row",gap:8,flexWrap:"wrap"}}>{["CAC","LTV","Gross margin","Contribution margin","Payback period","Churn","Стоимость внедрения","Доля ручных операций"].map((m,i)=>(<View key={i} style={{backgroundColor:T.card,borderRadius:4,padding:"8 14",borderWidth:0.5,borderColor:T.border}}><Text style={{fontSize:13,fontWeight:600,color:T.fg}}>{m}</Text></View>))}</View></Page>);

const S17 = () => (<Page size={[PW, PH]} style={ps()}><Header num={17} label="Опасность" /><H>Главная опасность — преждевременное масштабирование</H><Sub>Если модель работает — масштабирование усиливает рост. Если не работает — усиливает убытки.</Sub><Li>Нанять отдел продаж до упаковки продаж</Li><Li>Запустить маркетинг до подтверждения retention</Li><Li>Строить платформу до доказательства ценности</Li><Li>Расширяться по регионам до оптимизации экономики</Li></Page>);

const S18 = () => (<Page size={[PW, PH]} style={ps()}><Header num={18} label="Метрики" /><H>KPI зависят от стадии</H><Sub>Каждой стадии — своя главная метрика</Sub><Table headers={["Стадия","Главная метрика"]} rows={[["Discovery","% клиентов с сильной оплачиваемой болью"],["Customer discovery","Повторяемость проблемы в сегменте"],["MVP","Activation rate, time to value"],["Validation","Конверсия пилотов в оплату"],["Product-market fit","Retention, churn, повторные продажи"],["Efficiency","CAC, LTV, маржа, payback"],["Scale","Выполнение плана, качество внедрений"]]}/></Page>);

const S19 = () => (<Page size={[PW, PH]} style={ps()}><Header num={19} label="AARRR" /><H>AARRR как карта продукта</H><Sub>Пиратские метрики для понимания воронки</Sub><Table headers={["Этап","Вопрос"]} rows={[["Acquisition","Как пользователь приходит?"],["Activation","Получает ли первую ценность?"],["Retention","Возвращается ли?"],["Referral","Рекомендует ли другим?"],["Revenue","Платит ли, сколько, как часто?"]]}/></Page>);

const S20 = () => (<Page size={[PW, PH]} style={ps()}><Header num={20} label="Деньги" /><H>Burn rate и runway</H><Sub>Финансовая подушка стартапа</Sub><View style={{flexDirection:"row",gap:12,marginBottom:14}}><Card><Text style={{fontSize:16,fontWeight:700,color:T.fg,marginBottom:4}}>Burn rate</Text><Text style={{fontSize:14,color:T.fg2}}>Сколько компания тратит в месяц</Text></Card><Card><Text style={{fontSize:16,fontWeight:700,color:T.fg,marginBottom:4}}>Runway</Text><Text style={{fontSize:14,color:T.fg2}}>На сколько месяцев хватит денег</Text></Card></View><View style={{backgroundColor:T.badge,borderRadius:4,padding:14}}><Text style={{fontSize:14,color:T.badgeFg,lineHeight:1.5}}><Text style={{fontWeight:700}}>Ключевой вопрос трекера:</Text> Если ничего хорошего не произойдёт — сколько месяцев компания проживёт?</Text></View></Page>);

const S21 = () => (<Page size={[PW, PH]} style={ps()}><Header num={21} label="Успешные кейсы" /><H>Что именно сработало</H><Sub>Рабочая гипотеза в основе каждого успеха</Sub><Table headers={["Кейс","Рабочая гипотеза"]} rows={[["ВкусВилл","Магазин как бренд и фильтр качества"],["Авито","Ликвидность маркетплейса и сетевой эффект"],["Miro","Совместная работа на общей доске"],["inDrive","Прямая договорённость о цене"],["Revolut","Вход через боль международных платежей"]]}/></Page>);

const S22 = () => (<Page size={[PW, PH]} style={ps()}><Header num={22} label="Анализ кейсов" /><H>Как смотреть на успешные кейсы</H><Sub>Не спрашивайте «Почему они стали большими?»</Sub><Text style={{fontSize:13,color:T.muted,marginBottom:10}}>Спрашивайте:</Text><Li>Какую гипотезу тестировали?</Li><Li>Какой сегмент первым сгенерировал спрос?</Li><Li>Какой канал сработал?</Li><Li>Что обеспечило повторяемость?</Li><Li>Что позволило масштабировать?</Li></Page>);

const S23 = () => (<Page size={[PW, PH]} style={ps()}><Header num={23} label="Негативные кейсы" /><H>Провалы, которые учат</H><Sub>Уроки для трекера</Sub><Table headers={["Кейс","Урок для трекера"]} rows={[["Юлмарт","Рост без контроля может уничтожить компанию"],["KupiVIP","Product-market fit не вечен"],["Getir","Частотный спрос ≠ хорошая юнит-экономика"],["Arrival","Hardware требует проверки производства"],["Cazoo","Онлайн-интерфейс не отменяет тяжёлой операционки"],["Babylon Health","В регулируемых отраслях продукт — только часть модели"]]}/></Page>);

const S24 = () => (<Page size={[PW, PH]} style={ps()}><Header num={24} label="Общее в провалах" /><H>Что объединяет провалы</H><Sub>Типичные причины</Sub><Li>Масштабирование до доказательства экономики</Li><Li>Рост оборота без устойчивой маржи</Li><Li>Зависимость от капитала и скидок</Li><Li>Недооценка операционной сложности</Li><Li>Слабое корпоративное управление</Li><Li>Подмена спроса красивой историей</Li></Page>);

const S25 = () => (<Page size={[PW, PH]} style={ps()}><Header num={25} label="Ошибки основателей" /><H>Типовые ошибки основателей</H><Sub>Что делает трекер</Sub><Table headers={["Ошибка","Что должен сделать трекер"]} rows={[["Строит продукт до понимания боли","Вернуть к problem discovery"],["Считает интервью спросом","Искать поведенческие сигналы"],["Путает пилот с продажей","Зафиксировать критерии оплаты"],["Принимает первую сделку за PMF","Проверить повторяемость"],["Нанимает продавцов до упаковки","Разобрать процесс продажи"],["Масштабирует ручной труд","Замерить долю ручных операций"]]}/></Page>);

const S26 = () => (<Page size={[PW, PH]} style={ps()}><Header num={26} label="Практика" /><H>Практическое упражнение</H><Sub>Кейс для разбора</Sub><View style={{backgroundColor:T.card,borderRadius:4,padding:14,borderWidth:0.5,borderColor:T.border,marginBottom:14}}><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5}}>Команда разрабатывает AI-сервис для автоматического анализа клиентских звонков в сервисных компаниях.</Text></View><Li>20 интервью</Li><Li>3 пилота</Li><Li>Один клиент готов платить после интеграции с CRM</Li><View style={{flexDirection:"row",alignItems:"center",gap:8,marginTop:10}}><Badge>Запрос команды</Badge><Text style={{fontSize:14,color:T.fg2}}>Инвестиции на полную платформу и найм отдела продаж</Text></View></Page>);

const S27 = () => (<Page size={[PW, PH]} style={ps()}><Header num={27} label="Вопросы" /><H>Вопросы к упражнению</H><Sub>Ответьте за 5 минут</Sub>{["На какой стадии находится стартап?","Главный риск?","Какая ключевая метрика сейчас?","О чём трекер должен спросить в первую очередь?","Какое действие на следующую неделю?"].map((q,i)=>(<View key={i} style={{flexDirection:"row",gap:10,alignItems:"center",paddingVertical:10,borderBottomWidth:i<4?0.5:0,borderBottomColor:T.border}}><Text style={{fontSize:18,fontWeight:700,color:T.dim,opacity:0.4,width:30}}>{String(i+1).padStart(2,"0")}</Text><Text style={{fontSize:14,color:T.fg2,flex:1}}>{q}</Text></View>))}</Page>);

const S28 = () => (<Page size={[PW, PH]} style={ps()}><Header num={28} label="Разбор" /><H>Разбор упражнения</H><Table headers={["Вопрос","Ответ"]} rows={[["Стадия","Валидация, переход к первым продажам"],["Главный риск","Переход от пилотов к оплачиваемому внедрению"],["Ключевая метрика","Конверсия пилотов в оплату"],["Первый вопрос","За какой результат клиент готов платить?"],["Действие на неделю","Оформить платный пилот с суммой, сроком и критериями"]]}/></Page>);

const S29 = () => (<Page size={[PW, PH]} style={ps()}><Header num={29} label="Вывод" /><H>Главный вывод упражнения</H><Sub>Команда НЕ должна сразу:</Sub><View style={{flexDirection:"row",gap:8,marginBottom:14,flexWrap:"wrap"}}>{["Искать инвестиции","Нанимать отдел продаж","Строить полную платформу","Добавлять 10 фич"].map((t,i)=>(<View key={i} style={{backgroundColor:T.card,borderRadius:4,padding:"8 14",borderWidth:0.5,borderColor:T.border}}><Text style={{fontSize:13,color:T.fg2}}>{t}</Text></View>))}</View><View style={{backgroundColor:T.badge,borderRadius:4,padding:14}}><Text style={{fontSize:15,color:T.badgeFg,lineHeight:1.5}}>Сначала нужно доказать: <Text style={{fontWeight:700}}>клиент платит за конкретный измеримый результат.</Text></Text></View></Page>);

const S30 = () => (<Page size={[PW, PH]} style={ps()}><Header num={30} label="Выводы" /><H>Финальные выводы</H><Text style={{fontSize:13,color:T.muted,marginBottom:12}}>5 мыслей, которые стоит запомнить</Text>{["Стартап — это поиск модели, а не просто новая компания","Стадия определяет правильный вопрос, метрику и действие","Пилот, интервью и интерес — ещё не доказательство спроса","PMF виден по поведению клиента: оплата, retention, повторяемость","Задача трекера — помочь найти главный риск и превратить его в проверяемый шаг"].map((t,i)=>(<View key={i} style={{flexDirection:"row",gap:10,alignItems:"flex-start",marginBottom:8}}><Text style={{fontSize:16,fontWeight:700,color:T.dim,opacity:0.4}}>{String(i+1).padStart(2,"0")}</Text><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5,flex:1}}>{t}</Text></View>))}</Page>);

const S31 = () => (<Page size={[PW, PH]} style={ps()}><Header num={31} label="Формула" /><H>Финальная формула трекера</H><Sub>На каждой встрече со стартапом</Sub>{["Определить стадию","Найти главный риск","Выбрать одну главную метрику","Договориться об одном действии на ближайшую неделю","Проверить факты, а не впечатления"].map((s,i)=>(<View key={i} style={{flexDirection:"row",gap:14,alignItems:"center",backgroundColor:T.card,borderRadius:4,padding:"10 14",borderWidth:0.5,borderColor:T.border,marginBottom:6}}><Text style={{fontSize:20,fontWeight:700,color:T.fg}}>{i+1}</Text><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5}}>{s}</Text></View>))}</Page>);

const S32 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 10, color: T.dim, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>АКАДЕМИЯ ТРЕКЕРОВ · СКОЛКОВО</Text>
    <Text style={{ fontSize: 15, color: T.muted, marginBottom: 8 }}>Хороший результат трекерской встречи:</Text>
    <Text style={{ fontSize: 26, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 560, lineHeight: 1.3, marginBottom: 6 }}>Основатель уходит не с набором советов, а с чётким пониманием:</Text>
    <Text style={{ fontSize: 16, color: T.fg2, textAlign: "center", maxWidth: 500, lineHeight: 1.5 }}>что именно мы проверяем, почему это важно, какой факт должны получить и что сделаем до следующей встречи.</Text>
    <View style={{ width: 40, height: 1, backgroundColor: T.dim, marginTop: 22, opacity: 0.4 }} />
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 16 }}>
      <Image src={`${ib}/images/trackers/speaker.png`} style={{ width: 32, height: 32, borderRadius: 16, objectFit: "cover" }} />
      <Text style={{ fontSize: 12, color: T.dim }}>Дмитрий Бондарев</Text>
    </View>
  </Page>
);

const TADoc = ({ ib }) => (
  <Document title="Введение в стартапы — Академия трекеров" author="Дмитрий Бондарев">
    <S01 ib={ib}/><S02/><S03/><S04 ib={ib}/><S05/><S06/><S07/><S08/><S09/><S10/><S11/><S12/><S13/><S14/><S15/><S16/><S17/><S18/><S19/><S20/><S21/><S22/><S23/><S24/><S25/><S26/><S27/><S28/><S29/><S30/><S31/><S32 ib={ib}/>
  </Document>
);

export async function preGenerateTrackersPdfs() {
  const ib = getImageBase();
  T = THEMES.light;
  const lightBlob = await pdf(<TADoc ib={ib}/>).toBlob();
  T = THEMES.dark;
  const darkBlob = await pdf(<TADoc ib={ib}/>).toBlob();
  return { light: lightBlob, dark: darkBlob };
}
