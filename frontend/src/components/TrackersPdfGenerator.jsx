/**
 * Trackers Academy Presentation PDF Generator
 * 54 slides, A4 Landscape, monochrome Swiss style
 * Pre-generates Light and Dark themes.
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;
const TOTAL = 59;

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
  <View style={{ borderTopWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5, borderRightWidth: 0.5, borderColor: T.border, borderRadius: 4, overflow: "hidden", maxWidth: 700 }}>
    <TRow cells={headers} header />
    {rows.map((r, i) => <TRow key={i} cells={r} last={i === rows.length - 1} />)}
  </View>
);
const Card = ({ children, accent }) => (
  <View style={{ flex: 1, backgroundColor: T.card, borderRadius: 4, padding: 14, borderTopWidth: accent ? 2 : 0.5, borderTopColor: accent ? T.fg : T.border, borderBottomWidth: accent ? 2 : 0.5, borderBottomColor: accent ? T.fg : T.border, borderLeftWidth: accent ? 2 : 0.5, borderLeftColor: accent ? T.fg : T.border, borderRightWidth: accent ? 2 : 0.5, borderRightColor: accent ? T.fg : T.border }}>{children}</View>
);
const Badge = ({ children }) => (
  <View style={{ backgroundColor: T.badge, borderRadius: 3, paddingHorizontal: 10, paddingVertical: 4, alignSelf: "flex-start" }}>
    <Text style={{ fontSize: 10, fontWeight: 700, color: T.badgeFg, letterSpacing: 1.5, textTransform: "uppercase" }}>{children}</Text>
  </View>
);

/* ══ SLIDES ══ */

const S01 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 10, color: T.dim, letterSpacing: 3, textTransform: "uppercase", marginBottom: 24 }}>АТТЕСТАЦИЯ ТРЕКЕРОВ · СКОЛКОВО</Text>
    <Text style={{ fontSize: 36, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.25 }}>Введение в стартапы</Text>
    <Text style={{ fontSize: 16, color: T.muted, textAlign: "center", maxWidth: 500, marginTop: 14, lineHeight: 1.5 }}>{"Стартап как система гипотез, метрик, рисков\nи проверяемых действий"}</Text>
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
        <H>Практическая позиция спикера</H>
        <Li>Серийный предприниматель, более 10 компаний</Li><Li>Опыт привлечения инвестиций</Li><Li>Опыт бизнес-ангела</Li><Li>Опыт работы с фондами, корпорациями и стартапами</Li>
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

const S12 = () => (<Page size={[PW, PH]} style={ps()}><Header num={12} label="Problem discovery" /><H>Problem discovery</H><Sub>Главный вопрос: есть ли проблема, которую стоит решать?</Sub><Li>У кого именно есть боль</Li><Li>Как часто проблема возникает</Li><Li>Как клиент решает её сейчас</Li><Li>Сколько это стоит</Li><Li>Что произойдёт, если не решить</Li><Li>Есть ли бюджет на решение</Li></Page>);

const S13 = () => (<Page size={[PW, PH]} style={ps()}><Header num={13} label="Customer discovery" /><H>Customer discovery</H><Sub>Главный вопрос: кто клиент и как он принимает решения?</Sub><Text style={{fontSize:13,color:T.muted,marginBottom:10}}>В B2B важно различать:</Text><Li>Пользователь</Li><Li>Покупатель</Li><Li>Лицо, принимающее решение</Li><Li>Владелец технической реализации</Li><Li>Финансовый согласователь</Li><Li>Потенциальный противник изменений</Li></Page>);

const S14 = () => (<Page size={[PW, PH]} style={ps()}><Header num={14} label="MVP и валидация" /><H>MVP и validation</H><Sub>MVP — это не маленькая версия большой платформы. MVP — это минимальный способ проверить ключевую гипотезу.</Sub><Text style={{fontSize:13,color:T.muted,marginBottom:10}}>Проверяем поведение клиента:</Text><Li>Зарегистрировался ли сам</Li><Li>Загрузил ли данные</Li><Li>Вернулся ли снова</Li><Li>Подключил ли коллегу</Li><Li>Попросил ли счёт</Li><Li>Заплатил ли за пилот</Li></Page>);

const S15 = () => (<Page size={[PW, PH]} style={ps()}><Header num={15} label="Product-market fit" /><H>Product-market fit</H><Sub>PMF — это когда рынок начинает тянуть продукт</Sub><Li>Клиенты покупают по похожей причине</Li><Li>Возражения повторяются</Li><Li>Продажи становятся понятнее</Li><Li>Пользователи возвращаются</Li><Li>Появляются продления и рекомендации</Li><Li>Команда обслуживает спрос, а не придумывает его</Li></Page>);

const S16 = () => (<Page size={[PW, PH]} style={ps()}><Header num={16} label="Efficiency" /><H>Efficiency</H><Sub>Главный вопрос: можем ли расти при разумной экономике?</Sub><View style={{flexDirection:"row",gap:8,flexWrap:"wrap"}}>{["CAC","LTV","Gross margin","Contribution margin","Payback period","Churn","Стоимость внедрения","Доля ручных операций"].map((m,i)=>(<Badge key={i}>{m}</Badge>))}</View></Page>);

const S17 = () => (<Page size={[PW, PH]} style={ps()}><Header num={17} label="Опасность" /><H>Главная опасность — преждевременное масштабирование</H><Sub>Если модель работает — масштабирование усиливает рост. Если не работает — усиливает убытки.</Sub><Li>Нанять отдел продаж до упаковки продаж</Li><Li>Запустить маркетинг до подтверждения retention</Li><Li>Строить платформу до доказательства ценности</Li><Li>Расширяться по регионам до оптимизации экономики</Li></Page>);

const S18 = () => (<Page size={[PW, PH]} style={ps()}><Header num={18} label="Метрики" /><H>KPI зависят от стадии</H><Sub>Каждой стадии — своя главная метрика</Sub><Table headers={["Стадия","Главная метрика"]} rows={[["Discovery","% клиентов с сильной оплачиваемой болью"],["Customer discovery","Повторяемость проблемы в сегменте"],["MVP","Activation rate, time to value"],["Validation","Конверсия пилотов в оплату"],["Product-market fit","Retention, churn, повторные продажи"],["Efficiency","CAC, LTV, маржа, payback"],["Scale","Выполнение плана, качество внедрений"]]}/></Page>);

const S19 = () => (<Page size={[PW, PH]} style={ps()}><Header num={19} label="AARRR" /><H>AARRR как карта продукта</H><Sub>Пиратские метрики для понимания воронки</Sub><Table headers={["Этап","Вопрос"]} rows={[["Acquisition","Как пользователь приходит?"],["Activation","Получает ли первую ценность?"],["Retention","Возвращается ли?"],["Referral","Рекомендует ли другим?"],["Revenue","Платит ли, сколько, как часто?"]]}/></Page>);

const S20 = () => (<Page size={[PW, PH]} style={ps()}><Header num={20} label="Деньги" /><H>Burn rate и runway</H><Sub>Финансовая подушка стартапа</Sub><View style={{flexDirection:"row",gap:12,marginBottom:14}}><Card><Text style={{fontSize:16,fontWeight:700,color:T.fg,marginBottom:4}}>Burn rate</Text><Text style={{fontSize:14,color:T.fg2}}>Сколько компания тратит в месяц</Text></Card><Card><Text style={{fontSize:16,fontWeight:700,color:T.fg,marginBottom:4}}>Runway</Text><Text style={{fontSize:14,color:T.fg2}}>На сколько месяцев хватит денег</Text></Card></View><View style={{backgroundColor:T.badge,borderRadius:4,padding:14}}><Text style={{fontSize:14,color:T.badgeFg,lineHeight:1.5}}><Text style={{fontWeight:700}}>Ключевой вопрос трекера:</Text> Если ничего хорошего не произойдёт — сколько месяцев компания проживёт?</Text></View></Page>);

const S21 = () => (<Page size={[PW, PH]} style={ps()}><Header num={21} label="Успешные кейсы" /><H>Что именно сработало</H><Sub>Рабочая гипотеза в основе каждого успеха</Sub><Table headers={["Кейс","Рабочая гипотеза"]} rows={[["ВкусВилл","Магазин как бренд и фильтр качества"],["Авито","Ликвидность маркетплейса и сетевой эффект"],["Miro","Совместная работа на общей доске"],["inDrive","Прямая договорённость о цене"],["Revolut","Вход через боль международных платежей"]]}/></Page>);

const S22 = () => (<Page size={[PW, PH]} style={ps()}><Header num={22} label="Анализ кейсов" /><H>Как смотреть на успешные кейсы</H><Sub>Не спрашивайте «Почему они стали большими?»</Sub><Text style={{fontSize:13,color:T.muted,marginBottom:10}}>Спрашивайте:</Text><Li>Какую гипотезу тестировали?</Li><Li>Какой сегмент первым сгенерировал спрос?</Li><Li>Какой канал сработал?</Li><Li>Что обеспечило повторяемость?</Li><Li>Что позволило масштабировать?</Li></Page>);

const S23 = () => (<Page size={[PW, PH]} style={ps()}><Header num={23} label="Негативные кейсы" /><H>Провалы, которые учат</H><Sub>Уроки для трекера</Sub><Table headers={["Кейс","Урок для трекера"]} rows={[["Юлмарт","Рост без контроля может уничтожить компанию"],["KupiVIP","Product-market fit не вечен"],["Getir","Частотный спрос ≠ хорошая юнит-экономика"],["Arrival","Hardware требует проверки производства"],["Cazoo","Онлайн-интерфейс не отменяет тяжёлой операционки"],["Babylon Health","В регулируемых отраслях продукт — только часть модели"]]}/></Page>);

const S24 = () => (<Page size={[PW, PH]} style={ps()}><Header num={24} label="Общее в провалах" /><H>Что объединяет провалы</H><Sub>Типичные причины</Sub><Li>Масштабирование до доказательства экономики</Li><Li>Рост оборота без устойчивой маржи</Li><Li>Зависимость от капитала и скидок</Li><Li>Недооценка операционной сложности</Li><Li>Слабое корпоративное управление</Li><Li>Подмена спроса красивой историей</Li></Page>);

const S25 = () => (<Page size={[PW, PH]} style={ps()}><Header num={25} label="Ошибки основателей" /><H>Типовые ошибки основателей</H><Sub>Что делает трекер</Sub><Table headers={["Ошибка","Что должен сделать трекер"]} rows={[["Строит продукт до понимания боли","Вернуть к problem discovery"],["Считает интервью спросом","Искать поведенческие сигналы"],["Путает пилот с продажей","Зафиксировать критерии оплаты"],["Принимает первую сделку за PMF","Проверить повторяемость"],["Нанимает продавцов до упаковки","Разобрать процесс продажи"],["Масштабирует ручной труд","Замерить долю ручных операций"]]}/></Page>);

const S26 = () => (<Page size={[PW, PH]} style={ps()}><Header num={26} label="Практика" /><H>Практическое упражнение</H><Sub>Кейс для разбора</Sub><View style={{backgroundColor:T.card,borderRadius:4,padding:14,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border,marginBottom:14}}><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5}}>Команда разрабатывает AI-сервис для автоматического анализа клиентских звонков в сервисных компаниях.</Text></View><Li>20 интервью</Li><Li>3 пилота</Li><Li>Один клиент готов платить после интеграции с CRM</Li><View style={{flexDirection:"row",alignItems:"center",gap:8,marginTop:10}}><Badge>Запрос команды</Badge><Text style={{fontSize:14,color:T.fg2}}>Инвестиции на полную платформу и найм отдела продаж</Text></View></Page>);

const S27 = () => (<Page size={[PW, PH]} style={ps()}><Header num={27} label="Вопросы" /><H>Вопросы к упражнению</H><Sub>Ответьте за 5 минут</Sub>{["На какой стадии находится стартап?","Главный риск?","Какая ключевая метрика сейчас?","О чём трекер должен спросить в первую очередь?","Какое действие на следующую неделю?"].map((q,i)=>(<View key={i} style={{flexDirection:"row",gap:10,alignItems:"center",paddingVertical:10,borderBottomWidth:i<4?0.5:0,borderBottomColor:T.border}}><Text style={{fontSize:18,fontWeight:700,color:T.dim,opacity:0.4,width:30}}>{String(i+1).padStart(2,"0")}</Text><Text style={{fontSize:14,color:T.fg2,flex:1}}>{q}</Text></View>))}</Page>);

const S28 = () => (<Page size={[PW, PH]} style={ps()}><Header num={28} label="Разбор" /><H>Разбор упражнения</H><Table headers={["Вопрос","Ответ"]} rows={[["Стадия","Валидация, переход к первым продажам"],["Главный риск","Переход от пилотов к оплачиваемому внедрению"],["Ключевая метрика","Конверсия пилотов в оплату"],["Первый вопрос","За какой результат клиент готов платить?"],["Действие на неделю","Оформить платный пилот с суммой, сроком и критериями"]]}/></Page>);

const S29 = () => (<Page size={[PW, PH]} style={ps()}><Header num={29} label="Вывод" /><H>Главный вывод упражнения</H><Sub>Команда НЕ должна сразу:</Sub><View style={{flexDirection:"row",gap:8,marginBottom:14,flexWrap:"wrap"}}>{["Искать инвестиции","Нанимать отдел продаж","Строить полную платформу","Добавлять 10 фич"].map((t,i)=>(<Badge key={i}>{t}</Badge>))}</View><View style={{backgroundColor:T.card,borderRadius:4,padding:14,borderTopWidth:1,borderBottomWidth:1,borderLeftWidth:1,borderRightWidth:1,borderColor:T.border}}><Text style={{fontSize:15,color:T.fg,lineHeight:1.5}}>Сначала нужно доказать: <Text style={{fontWeight:700}}>клиент платит за конкретный измеримый результат.</Text></Text></View></Page>);

const S30 = () => (<Page size={[PW, PH]} style={ps()}><Header num={30} label="Выводы" /><H>Финальные выводы</H><Text style={{fontSize:13,color:T.muted,marginBottom:12}}>5 мыслей, которые стоит запомнить</Text>{["Стартап — это поиск модели, а не просто новая компания","Стадия определяет правильный вопрос, метрику и действие","Пилот, интервью и интерес — ещё не доказательство спроса","PMF виден по поведению клиента: оплата, retention, повторяемость","Задача трекера — помочь найти главный риск и превратить его в проверяемый шаг"].map((t,i)=>(<View key={i} style={{flexDirection:"row",gap:10,alignItems:"flex-start",marginBottom:8}}><Text style={{fontSize:16,fontWeight:700,color:T.dim,opacity:0.4}}>{String(i+1).padStart(2,"0")}</Text><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5,flex:1}}>{t}</Text></View>))}</Page>);

const S31 = () => (<Page size={[PW, PH]} style={ps()}><Header num={31} label="Формула" /><H>Финальная формула трекера</H><Sub>На каждой встрече со стартапом</Sub>{["Определить стадию","Найти главный риск","Выбрать одну главную метрику","Договориться об одном действии на ближайшую неделю","Проверить факты, а не впечатления"].map((s,i)=>(<View key={i} style={{flexDirection:"row",gap:14,alignItems:"center",backgroundColor:T.card,borderRadius:4,padding:"10 14",borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border,marginBottom:6}}><Text style={{fontSize:20,fontWeight:700,color:T.fg}}>{i+1}</Text><Text style={{fontSize:14,color:T.fg2,lineHeight:1.5}}>{s}</Text></View>))}</Page>);

const S32 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 10, color: T.dim, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>АТТЕСТАЦИЯ ТРЕКЕРОВ · СКОЛКОВО</Text>
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


/* ══ PART 2: Emergent slides (33-59) ══ */

const S33 = () => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <View style={{ width: 50, height: 1, backgroundColor: T.fg, marginBottom: 20 }} />
    <Text style={{ fontSize: 10, color: T.dim, letterSpacing: 3, textTransform: "uppercase", marginBottom: 16 }}>ЧАСТЬ 2</Text>
    <Text style={{ fontSize: 34, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 600, lineHeight: 1.25 }}>От идеи до продукта с ИИ-агентами</Text>
    <Text style={{ fontSize: 16, color: T.muted, textAlign: "center", maxWidth: 500, marginTop: 14, lineHeight: 1.5 }}>Как превратить идею в работающий цифровой продукт на примере Emergent.sh</Text>
  </Page>
);

const S34 = () => (<Page size={[PW, PH]} style={ps()}><Header num={34} label="Сдвиг" /><H>Для многих ИТ-сервисов путь стал короче в разы</H><Sub>Барьер между идеей и первым рабочим прототипом стал ниже</Sub>
  <View style={{backgroundColor:T.card,borderRadius:4,padding:14,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border,marginBottom:10}}>
    <Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>РАНЬШЕ · МЕСЯЦЫ</Text>
    <View style={{flexDirection:"row",gap:6,alignItems:"center"}}>{["Идея","Команда","Разработка","Тесты","Запуск"].map((s,i)=>(<View key={i} style={{flexDirection:"row",alignItems:"center",gap:6}}><View style={{backgroundColor:T.bg,borderRadius:3,padding:"4 10",borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}><Text style={{fontSize:12,color:T.dim}}>{s}</Text></View>{i<4&&<Text style={{fontSize:12,color:T.dim}}>→</Text>}</View>))}</View>
  </View>
  <View style={{borderRadius:4,padding:14,borderTopWidth:2,borderBottomWidth:2,borderLeftWidth:2,borderRightWidth:2,borderColor:T.fg}}>
    <Text style={{fontSize:10,color:T.fg,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>СЕЙЧАС · ЧАСЫ ИЛИ ДНИ</Text>
    <View style={{flexDirection:"row",gap:8,alignItems:"center"}}>{["Идея","ИИ-агенты","Рабочий прототип"].map((s,i)=>(<View key={i} style={{flexDirection:"row",alignItems:"center",gap:8}}><Badge>{s}</Badge>{i<2&&<Text style={{fontSize:14,color:T.fg}}>→</Text>}</View>))}</View>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Это не отменяет проверку спроса. Это снижает стоимость первой проверки.</Text>
</Page>);

const S35 = () => (<Page size={[PW, PH]} style={ps()}><Header num={35} label="Границы" /><H>Это работает не для любого продукта</H><Sub>Где барьер разработки по-прежнему высокий</Sub>
  <View style={{flexDirection:"row",gap:10,flexWrap:"wrap"}}>
    {[{t:"Hardware и deeptech",d:"Производство, прототипирование, физика — отдельный цикл"},{t:"Regulated tech",d:"Медицина, финтех с комплаенсом, госсектор"},{t:"Тяжёлый enterprise",d:"Глубокая инфраструктура, интеграции в десятки систем"},{t:"Промышленные системы",d:"АСУТП, реальное время, отказоустойчивость"}].map((l,i)=>(
      <View key={i} style={{width:"48%",backgroundColor:T.card,borderRadius:4,padding:12,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}>
        <Text style={{fontSize:14,fontWeight:700,color:T.fg,marginBottom:4}}>{l.t}</Text>
        <Text style={{fontSize:12,color:T.fg2,lineHeight:1.4}}>{l.d}</Text>
      </View>
    ))}
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Сильнее всего эффект виден в B2B-сервисах, внутренних системах, аналитических инструментах, SaaS и автоматизации.</Text>
</Page>);

const S36 = () => (<Page size={[PW, PH]} style={ps()}><Header num={36} label="Новая реальность" /><H>Что именно меняется для трекера</H>
  <View style={{gap:6,marginTop:6,maxWidth:720}}>
    <Li>Первую версию сервиса можно собрать быстрее</Li>
    <Li>Технический прогресс всё чаще обгоняет рыночную проверку</Li>
    <Li>Командам легче начать делать, но легче и начать делать лишнее</Li>
    <Li>Теперь нужно различать: итерация снижает техническую неопределённость или рыночную</Li>
  </View>
  <View style={{backgroundColor:T.fg,borderRadius:4,padding:12,marginTop:16,maxWidth:720}}>
    <Text style={{fontSize:13,color:T.bg,lineHeight:1.5}}>Главная новая опасность — автоматизировать хаос быстрее, чем подтверждается ценность.</Text>
  </View>
</Page>);

const S37 = () => (<Page size={[PW, PH]} style={ps()}><Header num={37} label="Контекст" /><H>Вы уже знаете ИИ как отдельные сервисы</H><Sub>Сегодня посмотрим на ИИ как на среду сборки продукта</Sub>
  <View style={{ flexDirection: "row", gap: 10 }}>
    {[{t:"Чат и поиск",items:["GigaChat","ChatGPT","Perplexity","Алиса"]},{t:"Генерация",items:["Midjourney","DALL-E","Suno","NotebookLM"]},{t:"Инструменты для кода",items:["Cursor","Claude Code","Codex"]}].map((c,i)=>(
      <Card key={i}><Badge>{c.t}</Badge><View style={{marginTop:8,gap:4}}>{c.items.map((it,j)=>(<View key={j} style={{backgroundColor:T.bg,borderRadius:3,padding:"4 8",borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}><Text style={{fontSize:12,color:T.fg2}}>{it}</Text></View>))}</View></Card>
    ))}
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Для трекера важно различать: отдельный ИИ-сервис помогает на одном шаге, агентская среда помогает пройти путь до рабочего сервиса.</Text>
</Page>);

const S38 = () => (<Page size={[PW, PH]} style={ps()}><Header num={38} label="Фокус" /><H>Не отдельный ответ, а путь до рабочего сервиса</H><Sub>Разница между инструментом и средой разработки</Sub>
  <View style={{ flexDirection: "row", gap: 12 }}>
    <Card><Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>ОБЫЧНЫЙ ИИ-ИНСТРУМЕНТ</Text><Li>Ответить на вопрос</Li><Li>Сгенерировать текст</Li><Li>Подсказать решение</Li></Card>
    <Card accent><Text style={{fontSize:10,color:T.fg,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>ПЛАТФОРМА С ИИ-АГЕНТАМИ</Text><Li>Спроектировать архитектуру</Li><Li>Собрать рабочий продукт</Li><Li>Доработать и протестировать</Li></Card>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Для трекера это критично: в одном случае ускоряется операция, в другом — весь цикл проверки продуктовой гипотезы.</Text>
</Page>);

const S39 = () => (<Page size={[PW, PH]} style={ps()}><Header num={39} label="Маршрут" /><H>Три шага к коммерческому ИТ-сервису</H><Sub>Каждый шаг создаёт основу для следующего</Sub>
  <View style={{flexDirection:"row",gap:10}}>
    {[{n:"01",t:"Сформулировать идею",d:"Точно сказать, что вы делаете, для кого и зачем"},{n:"02",t:"Понять проблему пользователя",d:"У кого болит, как болит и почему текущие решения не устраивают"},{n:"03",t:"Превратить в требования",d:"Перевести потребности в набор функций и критериев ценности"}].map((s,i)=>(
      <View key={i} style={{flex:1,backgroundColor:T.card,borderRadius:4,padding:14,borderLeftWidth:3,borderLeftColor:T.fg,borderRightWidth:0.5,borderRightColor:T.border,borderTopWidth:0.5,borderTopColor:T.border,borderBottomWidth:0.5,borderBottomColor:T.border}}>
        <Text style={{fontSize:18,fontWeight:700,color:T.dim,opacity:0.4}}>{s.n}</Text>
        <Text style={{fontSize:15,fontWeight:700,color:T.fg,marginTop:4,marginBottom:6}}>{s.t}</Text>
        <Text style={{fontSize:13,color:T.fg2,lineHeight:1.5}}>{s.d}</Text>
      </View>
    ))}
  </View>
</Page>);

const S40 = () => (<Page size={[PW, PH]} style={ps()}><Header num={40} label="Исследование" /><H>ИИ ускоряет анализ интервью, но не заменяет сами интервью</H><Sub>Где AI реально помогает, а где появляется типичная подмена</Sub>
  <View style={{flexDirection:"row",gap:12}}>
    <Card><Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>ЧТО ИИ ДЕЛАЕТ ХОРОШО</Text><Li>Разбирает повторяющиеся паттерны и боли</Li><Li>Выделяет роли в принятии решения</Li><Li>Собирает возражения и альтернативы</Li><Li>Формулирует JTBD и сценарии</Li></Card>
    <Card accent><Text style={{fontSize:10,color:T.fg,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>ЧТО ИИ НЕ УМЕЕТ</Text><Li>Сходить в рынок вместо команды</Li><Li>Получить настоящий клиентский материал</Li><Li>Заменить наблюдение и реальный разговор</Li><Li>Создать данные там, где их нет</Li></Card>
  </View>
  <View style={{backgroundColor:T.fg,borderRadius:4,padding:12,marginTop:12,maxWidth:720}}>
    <Text style={{fontSize:13,color:T.bg,lineHeight:1.5}}>Вопрос трекера: у вас есть реальный материал — или ИИ красиво структурирует фантазию?</Text>
  </View>
</Page>);

const S41 = () => (<Page size={[PW, PH]} style={ps()}><Header num={41} label="Шаг 1 · Идея" /><H>Плохая формулировка = плохой результат</H><Sub>Даже если инструмент сильный</Sub>
  <View style={{flexDirection:"row",gap:12}}>
    <Card><Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>СЛИШКОМ ОБЩЕЕ</Text><Text style={{fontSize:14,color:T.dim,marginBottom:6}}>«Хочу AI-сервис для бизнеса»</Text><Text style={{fontSize:12,color:T.dim,opacity:0.7}}>Непонятно, для кого сервис, какую задачу решает, какой результат должен дать</Text></Card>
    <Card accent><Text style={{fontSize:10,color:T.fg,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>ДОСТАТОЧНО КОНКРЕТНО</Text><Text style={{fontSize:14,color:T.fg,lineHeight:1.5}}>«Хочу сервис для сервисных компаний, который анализирует клиентские звонки, показывает потерянные заявки и типовые ошибки менеджеров»</Text></Card>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Чем точнее сформулирована задача, тем полезнее первая версия продукта.</Text>
</Page>);

const S42 = () => (<Page size={[PW, PH]} style={ps()}><Header num={42} label="Шаг 2 · Пользователь" /><H>Продукт нужен не потому, что идея интересная</H><Sub>А потому что у клиента есть реальная и желательно оплачиваемая задача</Sub>
  <View style={{flexDirection:"row",gap:8,flexWrap:"wrap"}}>
    {[{n:"01",q:"У кого эта проблема есть?",h:"Целевая аудитория"},{n:"02",q:"В чём она проявляется?",h:"Конкретные ситуации"},{n:"03",q:"Как решают сейчас?",h:"Альтернативы и конкуренты"},{n:"04",q:"Почему не устраивает?",h:"Что можно улучшить"}].map((q,i)=>(
      <View key={i} style={{width:"48%",backgroundColor:T.card,borderRadius:4,padding:12,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}>
        <Text style={{fontSize:16,fontWeight:700,color:T.dim,opacity:0.4}}>{q.n}</Text>
        <Text style={{fontSize:14,fontWeight:700,color:T.fg,marginTop:2,marginBottom:4}}>{q.q}</Text>
        <Text style={{fontSize:12,color:T.fg2}}>{q.h}</Text>
      </View>
    ))}
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>ИИ ускоряет сборку решения, но не создаёт боль там, где её нет.</Text>
</Page>);

const S43 = () => (<Page size={[PW, PH]} style={ps()}><Header num={43} label="Шаг 2 · Рынок" /><H>Проверь не только проблему, но и силу спроса</H><Sub>Если продукт не решает важную и понятную задачу — он не нужен</Sub>
  <View style={{gap:6}}>
    {[{n:"01",q:"Сколько людей с этим сталкиваются?"},{n:"02",q:"Насколько это болезненно?"},{n:"03",q:"Готовы ли они платить за решение?"},{n:"04",q:"Как часто будут возвращаться?"},{n:"05",q:"Разовый сценарий или длинное использование?"}].map((c,i)=>(
      <View key={i} style={{flexDirection:"row",alignItems:"center",gap:10,backgroundColor:T.card,borderRadius:4,padding:"8 14",borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}>
        <Text style={{fontSize:14,fontWeight:700,color:T.dim,opacity:0.4,width:24}}>{c.n}</Text>
        <Text style={{fontSize:14,color:T.fg,flex:1}}>{c.q}</Text>
      </View>
    ))}
  </View>
</Page>);

const S44 = () => (<Page size={[PW, PH]} style={ps()}><Header num={44} label="Шаг 3 · Требования" /><H>Требования нельзя придумывать в отрыве от пользователя</H><Sub>Конкретный пример: от боли к ценности</Sub>
  <View style={{flexDirection:"row",gap:8,alignItems:"center"}}>
    <Card><Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>БОЛЬ</Text><Text style={{fontSize:13,color:T.fg2}}>Руководитель сервисной компании не понимает, где именно теряются заявки в звонках</Text></Card>
    <Text style={{fontSize:16,color:T.fg,fontWeight:700}}>→</Text>
    <Card><Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>ФУНКЦИЯ</Text><Text style={{fontSize:13,color:T.fg2}}>AI-анализ звонков с выявлением потерянных лидов, ошибок менеджеров и причин отказа</Text></Card>
    <Text style={{fontSize:16,color:T.fg,fontWeight:700}}>→</Text>
    <Card accent><Text style={{fontSize:10,color:T.fg,letterSpacing:1.5,textTransform:"uppercase",marginBottom:6}}>ЦЕННОСТЬ</Text><Text style={{fontSize:13,color:T.fg}}>Меньше потерь, лучше контроль качества, выше конверсия в продажу</Text></Card>
  </View>
</Page>);

const S45 = () => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 30, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 640, lineHeight: 1.25 }}>Emergent — это цифровая продуктовая команда</Text>
    <Text style={{ fontSize: 15, color: T.muted, textAlign: "center", maxWidth: 540, marginTop: 14, lineHeight: 1.5 }}>Не просто чат с ИИ. Среда, которая снижает барьер между гипотезой и рабочим сервисом.</Text>
    <View style={{ width: 50, height: 1, backgroundColor: T.dim, marginTop: 22, opacity: 0.4 }} />
    <Text style={{ fontSize: 13, color: T.fg2, marginTop: 14, textAlign: "center", maxWidth: 560, lineHeight: 1.55 }}>У вас в руках остаётся главное: постановка задачи, понимание ценности для клиента и выбор того, что считать хорошим результатом.</Text>
  </Page>
);

const S46 = () => (<Page size={[PW, PH]} style={ps()}><Header num={46} label="Emergent · Команда" /><H>Кто входит в цифровую команду</H>
  <View style={{flexDirection:"row",gap:8,flexWrap:"wrap"}}>
    {[{n:"01",t:"Бизнес-аналитик, архитектор",d:"Переводит задачу на язык реализации"},{n:"02",t:"Дизайнер",d:"Продумывает интерфейс и пользовательский путь"},{n:"03",t:"Full-stack разработчик",d:"Собирает рабочий сервис"},{n:"04",t:"Тестировщик",d:"Проверяет сценарии и ошибки"},{n:"05",t:"Project-менеджер",d:"Остаётся основным собеседником и координирует работу"}].map((r,i)=>(
      <View key={i} style={{width:"31%",backgroundColor:T.card,borderRadius:4,padding:10,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}>
        <Text style={{fontSize:16,fontWeight:700,color:T.dim,opacity:0.4}}>{r.n}</Text>
        <Text style={{fontSize:13,fontWeight:700,color:T.fg,marginTop:2,marginBottom:4}}>{r.t}</Text>
        <Text style={{fontSize:11,color:T.fg2,lineHeight:1.4}}>{r.d}</Text>
      </View>
    ))}
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Для трекера это важно, потому что первая версия продукта может появиться без классической команды разработки.</Text>
</Page>);

const S47 = ({ ib }) => (<Page size={[PW, PH]} style={ps()}><Header num={47} label="Результат" /><H>Что это меняет для трекера</H><Sub>От PRD к первому рабочему прототипу за один короткий цикл</Sub>
  <View style={{flexDirection:"row",gap:14}}>
    <View style={{width:380,borderRadius:4,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border,overflow:"hidden"}}><Image src={`${ib}/images/emergent/vc-dashboard.png`} style={{width:380,height:240,objectFit:"contain"}} /></View>
    <View style={{flex:1,gap:8,justifyContent:"center"}}>
      <View style={{backgroundColor:T.card,borderRadius:4,padding:12,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}><Text style={{fontSize:24,fontWeight:700,color:T.fg}}>17:43</Text><Text style={{fontSize:11,color:T.dim}}>PRD.md передан платформе</Text></View>
      <View style={{borderRadius:4,padding:12,borderTopWidth:2,borderBottomWidth:2,borderLeftWidth:2,borderRightWidth:2,borderColor:T.fg}}><Text style={{fontSize:24,fontWeight:700,color:T.fg}}>18:23</Text><Text style={{fontSize:11,color:T.fg2}}>Первый рабочий прототип отраслевого SaaS-продукта</Text></View>
    </View>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Если первую версию можно собрать за один вечер, главное ограничение чаще находится уже не в коде, а в ясности гипотезы и требований.</Text>
</Page>);

const S48 = ({ ib }) => (<Page size={[PW, PH]} style={ps()}><Header num={48} label="Демонстрация" /><H>Это уже не просто идея, а объект для проверки</H><Sub>Такой прототип можно показывать клиенту, обсуждать и дорабатывать</Sub>
  <View style={{flexDirection:"row",gap:14}}>
    <Image src={`${ib}/images/emergent/vc-analytics.png`} style={{width:380,height:240,objectFit:"contain",borderRadius:4,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}} />
    <View style={{flex:1,gap:4,justifyContent:"center"}}>
      <Li>Роли и сценарии работы</Li>
      <Li>Сущности и карточки</Li>
      <Li>Базовая аналитика</Li>
      <Li>Административная часть</Li>
      <Li>Данные для предметного разговора с клиентом</Li>
    </View>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Трекер здесь спрашивает не «красиво ли получилось», а «что именно теперь можно проверить на клиенте».</Text>
</Page>);

const S49 = () => (<Page size={[PW, PH]} style={ps()}><Header num={49} label="Диагностика" /><H>Шесть плоскостей, в которых трекер видит AI-продукт</H><Sub>Не «рынок» отдельно, не «технологии» отдельно — единая картина</Sub>
  <View style={{flexDirection:"row",gap:8,flexWrap:"wrap"}}>
    {[{n:"01",t:"Продукт",d:"Что болит, кто пользователь и кто покупатель, за какой результат платят"},{n:"02",t:"Стадия",d:"Discovery, validation, первые продажи или попытка масштабировать недоказанное"},{n:"03",t:"Реализуемость",d:"Что собирается в агентской среде, а где нужна глубокая разработка"},{n:"04",t:"Внедрение",d:"Интеграции, данные, безопасность, юридика, барьеры на старт"},{n:"05",t:"Экономика",d:"Это продукт или ручной консалтинг, упакованный как SaaS"},{n:"06",t:"Зрелость процесса",d:"Документация, контроль кода, dev vs production, схема релиза"}].map((p,i)=>(
      <View key={i} style={{width:"31%",backgroundColor:T.card,borderRadius:4,padding:10,borderTopWidth:3,borderTopColor:T.fg,borderBottomWidth:0.5,borderBottomColor:T.border,borderLeftWidth:0.5,borderLeftColor:T.border,borderRightWidth:0.5,borderRightColor:T.border}}>
        <Text style={{fontSize:14,fontWeight:700,color:T.dim,opacity:0.4}}>{p.n}</Text>
        <Text style={{fontSize:13,fontWeight:700,color:T.fg,marginTop:2,marginBottom:4}}>{p.t}</Text>
        <Text style={{fontSize:11,color:T.fg2,lineHeight:1.4}}>{p.d}</Text>
      </View>
    ))}
  </View>
</Page>);

const S50 = () => (<Page size={[PW, PH]} style={ps()}><Header num={50} label="Новые риски" /><H>Новые риски AI-разработки</H>
  <View style={{gap:6,marginTop:6,maxWidth:720}}>
    <Li>Красивый прототип не равен готовности платить</Li>
    <Li>Команда может ускорять код быстрее, чем discovery</Li>
    <Li>Снаружи это может выглядеть как SaaS, а внутри быть ручным трудом</Li>
    <Li>Без документации теряется память проекта</Li>
    <Li>Без production и deployment «запуск» остаётся условным</Li>
  </View>
  <View style={{backgroundColor:T.fg,borderRadius:4,padding:12,marginTop:16,maxWidth:720}}>
    <Text style={{fontSize:13,color:T.bg,lineHeight:1.5}}>Для трекера это не технические детали, а часть общей диагностики зрелости продукта.</Text>
  </View>
</Page>);

const S51 = () => (<Page size={[PW, PH]} style={ps()}><Header num={51} label="Процесс" /><H>Как проходит одна продуктовая итерация</H><Sub>Вы ставите задачу и проверяете, уменьшила ли итерация неопределённость</Sub>
  <View style={{flexDirection:"row",gap:6}}>
    {[{n:"01",r:"Вы",t:"Формулируете изменение",h:"«Нужно редактирование»"},{n:"02",r:"PM",t:"Интерпретирует задачу",h:"Анализирует структуру"},{n:"03",r:"Dev",t:"Вносят изменения",h:"UI + backend"},{n:"04",r:"QA",t:"Проверяет результат",h:"Тесты"},{n:"05",r:"Вы",t:"Ближе к ценности?",h:"Оцениваете результат"}].map((s,i)=>(
      <View key={i} style={{flex:1,backgroundColor:s.r==="Вы"?T.badge:T.card,borderRadius:4,padding:10,borderTopWidth:s.r==="Вы"?0:0.5,borderBottomWidth:s.r==="Вы"?0:0.5,borderLeftWidth:s.r==="Вы"?0:0.5,borderRightWidth:s.r==="Вы"?0:0.5,borderColor:T.border}}>
        <Text style={{fontSize:9,color:s.r==="Вы"?T.badgeFg:T.dim,letterSpacing:1.5,textTransform:"uppercase"}}>{s.r}</Text>
        <Text style={{fontSize:12,fontWeight:700,color:s.r==="Вы"?T.badgeFg:T.fg,marginTop:4}}>{s.t}</Text>
        <Text style={{fontSize:10,color:s.r==="Вы"?T.dim:T.dim,marginTop:2}}>{s.h}</Text>
      </View>
    ))}
  </View>
</Page>);

const S52 = () => (<Page size={[PW, PH]} style={ps()}><Header num={52} label="Развитие" /><H>После первого релиза работа только начинается</H><Sub>Первый рабочий вариант — это отправная точка</Sub>
  <View style={{flexDirection:"row",gap:10}}>
    {[{n:"01",t:"Исправлять пробелы",items:["Нет редактирования","Не хватает фильтрации","Нужна валидация"]},{n:"02",t:"Углублять предметную область",items:["Расширить карточку","Добавить правила","Связать сущности между собой"]},{n:"03",t:"Повышать ценность",items:["Автоматические расчёты","Уведомления","Экспорт отчётов"]}].map((d,i)=>(
      <View key={i} style={{flex:1,backgroundColor:T.card,borderRadius:4,padding:12,borderTopWidth:3,borderTopColor:T.fg,borderBottomWidth:0.5,borderBottomColor:T.border,borderLeftWidth:0.5,borderLeftColor:T.border,borderRightWidth:0.5,borderRightColor:T.border}}>
        <Text style={{fontSize:18,fontWeight:700,color:T.dim,opacity:0.4}}>{d.n}</Text>
        <Text style={{fontSize:13,fontWeight:700,color:T.fg,marginTop:2,marginBottom:6}}>{d.t}</Text>
        {d.items.map((it,j)=><Li key={j}>{it}</Li>)}
      </View>
    ))}
  </View>
  <Text style={{fontSize:11,color:T.fg2,marginTop:8,fontWeight:700}}>Вопрос трекера: какая из этих доработок реально приближает продукт к оплате, retention или повторяемому использованию?</Text>
</Page>);

const S53 = () => (<Page size={[PW, PH]} style={ps()}><Header num={53} label="Ценность" /><H>Ценность растёт с погружением в предметную область</H><Sub>Польза появляется не от количества полей, а от понимания рабочего контекста клиента</Sub>
  <View style={{flexDirection:"row",gap:12,alignItems:"stretch"}}>
    <Card><Text style={{fontSize:10,color:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>БЫЛО</Text><Text style={{fontSize:14,fontWeight:700,color:T.fg,marginBottom:6}}>Карточка лида</Text><Li>Имя</Li><Li>Телефон</Li><Li>Статус</Li></Card>
    <View style={{justifyContent:"center"}}><Text style={{fontSize:16,color:T.fg,fontWeight:700}}>→</Text></View>
    <Card accent><Text style={{fontSize:10,color:T.fg,letterSpacing:1.5,textTransform:"uppercase",marginBottom:8}}>СТАЛО</Text><Text style={{fontSize:14,fontWeight:700,color:T.fg,marginBottom:6}}>Карточка лида</Text><Li>Источник обращения</Li><Li>Причина отказа</Li><Li>Тип ошибки менеджера</Li><Li>Следующий шаг</Li><Li>Прогноз конверсии</Li><Li>Рекомендации по действию</Li></Card>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Чем глубже команда понимает предметную область, тем выше шанс, что сервис станет покупаемым.</Text>
</Page>);

const S54 = () => (<Page size={[PW, PH]} style={ps()}><Header num={54} label="Инфраструктура" /><H>Рабочий прототип и коммерческий продукт — это не одно и то же</H><Sub>У любого цифрового сервиса минимум две среды</Sub>
  <View style={{flexDirection:"row",gap:12}}>
    <Card><Text style={{fontSize:18,fontWeight:700,color:T.fg,marginBottom:4}}>Development</Text><Text style={{fontSize:11,color:T.dim,marginBottom:8}}>Сервер разработки</Text><Li>Тестируют новые функции</Li><Li>Можно ломать</Li><Li>Промежуточные решения</Li></Card>
    <Card accent><Text style={{fontSize:18,fontWeight:700,color:T.fg,marginBottom:4}}>Production</Text><Text style={{fontSize:11,color:T.dim,marginBottom:8}}>Сервер для пользователей</Text><Li>Реальные пользователи</Li><Li>Только проверенное</Li><Li>Критична стабильность</Li></Card>
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700}}>Если команда называет dev-сборку «запуском», трекеру стоит уточнить, что именно уже готово для пользователя, а что пока только в среде разработки.</Text>
</Page>);

const S55 = () => (<Page size={[PW, PH]} style={ps()}><Header num={55} label="Деплой" /><H>Как код выходит в инфраструктуру проекта</H><Sub>Простой путь от среды разработки до рабочего продукта</Sub>
  <View style={{flexDirection:"row",gap:8,alignItems:"center",marginBottom:14}}>
    {["Emergent","GitHub","Ваш сервер"].map((n,i)=>(<View key={i} style={{flexDirection:"row",alignItems:"center",gap:8}}>
      <View style={{borderRadius:4,padding:"10 20",borderTopWidth:i===2?2:0.5,borderBottomWidth:i===2?2:0.5,borderLeftWidth:i===2?2:0.5,borderRightWidth:i===2?2:0.5,borderColor:i===2?T.fg:T.border}}><Text style={{fontSize:16,fontWeight:700,color:T.fg}}>{n}</Text></View>
      {i<2&&<Text style={{fontSize:14,color:T.fg}}>→</Text>}
    </View>))}
  </View>
  <View style={{backgroundColor:T.card,borderRadius:4,padding:12,borderLeftWidth:3,borderLeftColor:T.fg,borderRightWidth:0.5,borderRightColor:T.border,borderTopWidth:0.5,borderTopColor:T.border,borderBottomWidth:0.5,borderBottomColor:T.border,maxWidth:680}}>
    <Text style={{fontSize:13,color:T.fg2,lineHeight:1.5}}><Text style={{fontWeight:700,color:T.fg}}>GitHub</Text> — это не просто хранилище кода. Для трекера это ещё и маркер того, что у команды есть управляемый процесс разработки и переноса изменений между средами.</Text>
  </View>
</Page>);

const S56 = () => (<Page size={[PW, PH]} style={ps()}><Header num={56} label="Диагностика" /><H>Какие вопросы трекер задаёт команде, работающей через Emergent</H>
  <View style={{gap:6,marginTop:6,maxWidth:720}}>
    <Li>Какую гипотезу вы проверяете этой сборкой</Li>
    <Li>Что клиент должен сделать после первой демонстрации</Li>
    <Li>Какая часть ценности создаётся продуктом, а какая пока ручной работой команды</Li>
    <Li>Что уже можно показать клиенту, а что пока существует только в dev</Li>
    <Li>Какой факт вы хотите получить на этой неделе</Li>
  </View>
</Page>);

const S57 = () => (<Page size={[PW, PH]} style={ps()}><Header num={57} label="Главный вопрос" /><H>Какую неопределённость снижает следующая итерация?</H><Sub>Сейчас стало легко снижать техническую — но это не всегда двигает бизнес</Sub>
  <View style={{flexDirection:"row",gap:10}}>
    {[{t:"Рыночная",d:"Клиент что-то делает в ответ: даёт данные, подключает CRM, готовится к пилоту, обсуждает оплату"},{t:"Продуктовая",d:"Понимаем, какая часть ценности создаётся продуктом, а какая ручным трудом команды"},{t:"Техническая",d:"Появился модуль, роль, форма, интерфейс или аналитика — но бизнес-смысл не изменился"}].map((k,i)=>(
      <View key={i} style={{flex:1,backgroundColor:i===0?T.badge:T.card,borderRadius:4,padding:12,borderTopWidth:i===0?0:0.5,borderBottomWidth:i===0?0:0.5,borderLeftWidth:i===0?0:0.5,borderRightWidth:i===0?0:0.5,borderColor:T.border}}>
        <Text style={{fontSize:9,color:i===0?T.dim:T.dim,letterSpacing:1.5,textTransform:"uppercase",marginBottom:4}}>Неопределённость</Text>
        <Text style={{fontSize:18,fontWeight:700,color:i===0?T.badgeFg:T.fg,marginBottom:6}}>{k.t}</Text>
        <Text style={{fontSize:12,color:i===0?T.dim:T.fg2,lineHeight:1.45}}>{k.d}</Text>
      </View>
    ))}
  </View>
  <Text style={{fontSize:12,color:T.fg2,marginTop:10,fontWeight:700,maxWidth:680}}>Если за неделю стало больше кода, но не стало меньше критической неопределённости, трекер должен это увидеть.</Text>
</Page>);

const S58 = () => (<Page size={[PW, PH]} style={ps()}><Header num={58} label="Чек-лист трекера" /><H>Семь правил для работы с AI-командой</H>
  <View style={{flexDirection:"row",gap:6,flexWrap:"wrap"}}>
    {[{n:"01",t:"Не путайте AI-first с startup-ready",d:"Модные инструменты не равны рынку, сегменту и покупаемой ценности"},{n:"02",t:"Проверка гипотезы, а не производство фич",d:"Ускорять сборку интерфейса — это ещё не обязательно полезное ускорение"},{n:"03",t:"Давите на конкретику",d:"Не «что ещё добавить», а «какое поведение клиента должно измениться»"},{n:"04",t:"Проверяйте платформу раньше времени",d:"Большой продукт почти всегда хочется делать раньше, чем он реально нужен"},{n:"05",t:"Спрашивайте про ручной труд",d:"Многие AI-сервисы внутри работают куда более вручную, чем выглядят снаружи"},{n:"06",t:"Проверяйте зрелость разработки",d:"Где код, кто его контролирует, есть ли GitHub, production, документация"},{n:"07",t:"Помогайте выбирать, что именно делать",d:"В мире, где код стал дешевле, главным дефицитом становится ясность"}].map((r,i)=>(
      <View key={i} style={{width:"48%",backgroundColor:T.card,borderRadius:4,padding:10,borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}>
        <View style={{flexDirection:"row",alignItems:"center",gap:8,marginBottom:3}}>
          <Text style={{fontSize:14,fontWeight:700,color:T.dim,opacity:0.4}}>{r.n}</Text>
          <Text style={{fontSize:12,fontWeight:700,color:T.fg,flex:1}}>{r.t}</Text>
        </View>
        <Text style={{fontSize:10,color:T.fg2,lineHeight:1.4}}>{r.d}</Text>
      </View>
    ))}
  </View>
</Page>);

const S59 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", alignItems: "center", padding: 40 }}>
    <Text style={{ fontSize: 28, fontWeight: 700, color: T.fg, textAlign: "center", maxWidth: 640, lineHeight: 1.25 }}>ИИ ускоряет разработку. Роль трекера не исчезает.</Text>
    <View style={{ width: 50, height: 1, backgroundColor: T.dim, marginTop: 18, opacity: 0.4 }} />
    <View style={{ gap: 8, marginTop: 18, maxWidth: 540 }}>
      {[{n:"01",t:"Трекер возвращает команду к стадии"},{n:"02",t:"Трекер отделяет скорость сборки от реального спроса"},{n:"03",t:"Трекер помогает выбрать следующий проверяемый шаг"}].map((r,i)=>(
        <View key={i} style={{flexDirection:"row",alignItems:"center",gap:12,backgroundColor:T.card,borderRadius:4,padding:"10 16",borderTopWidth:0.5,borderBottomWidth:0.5,borderLeftWidth:0.5,borderRightWidth:0.5,borderColor:T.border}}>
          <Text style={{fontSize:18,fontWeight:700,color:T.dim,opacity:0.4}}>{r.n}</Text>
          <Text style={{fontSize:13,color:T.fg2,lineHeight:1.4}}>{r.t}</Text>
        </View>
      ))}
    </View>
    <Text style={{ fontSize: 12, color: T.dim, textAlign: "center", maxWidth: 540, marginTop: 16, lineHeight: 1.5 }}>Когда делать стало проще, особенно важно понимать, что именно стоит делать сейчас, для кого и ради какого проверяемого результата.</Text>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 16 }}>
      <Image src={`${ib}/images/trackers/speaker.png`} style={{ width: 32, height: 32, borderRadius: 16, objectFit: "cover" }} />
      <Text style={{ fontSize: 12, color: T.dim }}>Дмитрий Бондарев</Text>
    </View>
  </Page>
);

const TADoc = ({ ib }) => (
  <Document title="Введение в стартапы — Аттестация трекеров" author="Дмитрий Бондарев">
    <S01 ib={ib}/><S02/><S03/><S04 ib={ib}/><S05/><S06/><S07/><S08/><S09/><S10/><S11/><S12/><S13/><S14/><S15/><S16/><S17/><S18/><S19/><S20/><S21/><S22/><S23/><S24/><S25/><S26/><S27/><S28/><S29/><S30/><S31/><S32 ib={ib}/>
    <S33/><S34/><S35/><S36/><S37/><S38/><S39/><S40/><S41/><S42/><S43/><S44/><S45/><S46/><S47 ib={ib}/><S48 ib={ib}/><S49/><S50/><S51/><S52/><S53/><S54/><S55/><S56/><S57/><S58/><S59 ib={ib}/>
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
