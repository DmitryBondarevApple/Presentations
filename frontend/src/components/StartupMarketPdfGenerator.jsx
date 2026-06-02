/**
 * Startup Market (Рынок стартапов в России) — PDF Generator
 * 27 slides, A4 Landscape, premium consulting palette.
 * Pre-generates Light and Dark themes. Charts are pre-rendered PNGs.
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;
const TOTAL = 27;

const THEMES = {
  light: {
    bg: "#F7F5EF", fg: "#20242B", body: "#3A3F49", muted: "#6B6256", dim: "#9A9384",
    line: "#D8D2C4", panel: "#F1EEE6", panel2: "#ECE8DF",
    navy: "#1B3A5B", green: "#2E6E5A", terra: "#B5612A",
    navySoft: "#E7ECF1", headFg: "#EAF0F5", png: "png-light",
  },
  dark: {
    bg: "#181B20", fg: "#F2EFE8", body: "#D4CFC4", muted: "#A89F90", dim: "#7C818B",
    line: "#363B43", panel: "#23272F", panel2: "#2A2F37",
    navy: "#6AA0C8", green: "#56B393", terra: "#D9914E",
    navySoft: "#212A35", headFg: "#EAF0F5", png: "png-dark",
  },
};
let T = THEMES.light;

const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: "26 36" });

const Header = ({ num, label, color }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
      <View style={{ width: 18, height: 1.4, backgroundColor: color || T.terra }} />
      <Text style={{ fontSize: 9, fontWeight: 700, color: color || T.terra, letterSpacing: 2, textTransform: "uppercase" }}>{label || ""}</Text>
    </View>
    {num && (
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <Text style={{ fontSize: 8, color: T.dim, letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
        <Text style={{ fontSize: 10, color: T.muted, letterSpacing: 1 }}>{String(num).padStart(2, "0")} / {TOTAL}</Text>
      </View>
    )}
  </View>
);

const H = ({ children, size = 26 }) => <Text style={{ fontSize: size, fontWeight: 700, color: T.fg, marginBottom: 10, lineHeight: 1.12 }}>{children}</Text>;
const Lead = ({ children }) => <Text style={{ fontSize: 13, color: T.body, lineHeight: 1.5, marginBottom: 14, maxWidth: 640 }}>{children}</Text>;
const Body = ({ children }) => <Text style={{ fontSize: 12.5, color: T.body, lineHeight: 1.5, maxWidth: 620 }}>{children}</Text>;

const Li = ({ children, accent }) => (
  <View style={{ flexDirection: "row", gap: 7, alignItems: "flex-start", marginBottom: 5 }}>
    <View style={{ width: 5, height: 5, backgroundColor: accent || T.navy, marginTop: 5, transform: "rotate(45deg)" }} />
    <Text style={{ fontSize: 11.5, color: T.body, lineHeight: 1.45, flex: 1 }}>{children}</Text>
  </View>
);

const Card = ({ children, accent }) => (
  <View style={{
    flex: 1, backgroundColor: T.panel, borderRadius: 5, padding: 14,
    borderTopWidth: accent ? 2.5 : 1, borderTopColor: accent || T.line,
    borderBottomWidth: 1, borderBottomColor: T.line,
    borderLeftWidth: 1, borderLeftColor: T.line,
    borderRightWidth: 1, borderRightColor: T.line,
  }}>{children}</View>
);
const CardTitle = ({ children }) => <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 6 }}>{children}</Text>;

const Stat = ({ value, label, accent }) => (
  <View style={{
    flex: 1, backgroundColor: T.panel, borderRadius: 5, padding: 12,
    borderTopWidth: 1, borderTopColor: T.line, borderBottomWidth: 1, borderBottomColor: T.line,
    borderRightWidth: 1, borderRightColor: T.line, borderLeftWidth: 3, borderLeftColor: accent || T.navy,
  }}>
    <Text style={{ fontSize: 24, fontWeight: 700, color: T.fg }}>{value}</Text>
    <Text style={{ fontSize: 8.5, color: T.muted, marginTop: 5, letterSpacing: 0.5, textTransform: "uppercase", lineHeight: 1.3 }}>{label}</Text>
  </View>
);

const Takeaway = ({ children, label = "Главный вывод", accent }) => (
  <View style={{ flexDirection: "row", gap: 12, backgroundColor: T.panel, borderRadius: 5, padding: 12, marginTop: 12, borderLeftWidth: 3, borderLeftColor: accent || T.navy }}>
    <Text style={{ fontSize: 9, fontWeight: 700, color: accent || T.navy, letterSpacing: 1, textTransform: "uppercase", width: 80 }}>{label}</Text>
    <Text style={{ fontSize: 11, color: T.body, lineHeight: 1.45, flex: 1 }}>{children}</Text>
  </View>
);

const Chart = ({ ib, vis }) => (
  <View style={{ flex: 1, alignItems: "center", justifyContent: "center", marginVertical: 4 }}>
    <View style={{ borderWidth: 1, borderColor: T.line, borderRadius: 5, overflow: "hidden" }}>
      <Image src={`${ib}/images/startup-market/${T.png}/${vis}.png`} style={{ width: 700, height: 406 }} />
    </View>
  </View>
);

const ChartPage = ({ ib, num, label, vis, accent, take, takeLabel }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={num} label={label} color={accent} />
    <Chart ib={ib} vis={vis} />
    <Takeaway accent={accent} label={takeLabel}>{take}</Takeaway>
  </Page>
);

const Col = ({ children }) => <View style={{ flex: 1, gap: 0 }}>{children}</View>;
const Row = ({ children, gap = 14 }) => <View style={{ flexDirection: "row", gap }}>{children}</View>;

/* ═══════════ SLIDES ═══════════ */

const S01 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: "34 48", color: T.fg }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: T.muted, letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
      <Text style={{ fontSize: 9, color: T.dim, letterSpacing: 2, textTransform: "uppercase" }}>Аналитическое исследование</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 11, fontWeight: 700, color: T.terra, letterSpacing: 2, textTransform: "uppercase", marginBottom: 14 }}>Отчёт об исследовании рынка</Text>
      <Text style={{ fontSize: 46, fontWeight: 700, color: T.fg, lineHeight: 1.05 }}>Рынок стартапов{"\n"}в России</Text>
      <Text style={{ fontSize: 16, color: T.body, marginTop: 16, maxWidth: 560, lineHeight: 1.4 }}>Различие спроса со стороны инвесторов, корпораций и институтов развития</Text>
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginTop: 22 }}>
        <View style={{ width: 9, height: 22, borderRadius: 2, backgroundColor: T.navy }} />
        <View style={{ width: 9, height: 32, borderRadius: 2, backgroundColor: T.green }} />
        <View style={{ width: 9, height: 42, borderRadius: 2, backgroundColor: T.terra }} />
      </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", borderTopWidth: 1, borderTopColor: T.line, paddingTop: 14 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image src={`${ib}/images/startup-market/speaker.png`} style={{ width: 38, height: 38, borderRadius: 19, objectFit: "cover" }} />
        <View>
          <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg }}>Дмитрий Бондарев</Text>
          <Text style={{ fontSize: 9, color: T.muted, marginTop: 2 }}>Руководитель исследования · аналитический департамент Hop.Agency</Text>
        </View>
      </View>
      <Text style={{ fontSize: 9, color: T.muted }}>hop.agency · startupdrive.ru</Text>
    </View>
  </Page>
);

const S02 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={2} label="Главный вывод" />
    <H>Рынок развивается как система нескольких видов спроса</H>
    <Lead>В одних направлениях ключевую роль играет спрос инвесторов, в других — корпоративные заказчики, в третьих — институты развития, отраслевые программы, пилоты и стратегические партнёрства.</Lead>
    <Row>
      <Card accent={T.navy}><CardTitle>Инвесторы</CardTitle><Body>Оценивают потенциал роста и возврата инвестиций</Body></Card>
      <Card accent={T.green}><CardTitle>Корпорации</CardTitle><Body>Оценивают применимость решения к задачам бизнеса</Body></Card>
      <Card accent={T.terra}><CardTitle>Институты развития</CardTitle><Body>Технологическая значимость, локализация и вклад в экономику</Body></Card>
    </Row>
    <Takeaway label="Следствие">Привлекательность стартапа определяется не только отраслью, но и зрелостью продукта, доказанным спросом, юридической структурой, правами на технологию и понятным сценарием роста или выхода.</Takeaway>
  </Page>
);

const S03 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={3} label="Методология" />
    <H>Количественный и качественный анализ</H>
    <Row><Stat value="4 445" label="стартапов после дедупликации" accent={T.navy} /><Stat value="8 524" label="исходных записей" accent={T.navy} /><Stat value="2 944" label="сигнала интереса" accent={T.green} /></Row>
    <View style={{ height: 12 }} />
    <Row><Stat value="1 571" label="стартап со скорингом" accent={T.green} /><Stat value="1 820" label="инвесторов в анализе" accent={T.terra} /><Stat value="244" label="корпорации в анализе" accent={T.terra} /></Row>
    <Takeaway label="Качественная часть" accent={T.terra}>12 экспертных интервью с фондами, корпорациями, институтами развития и операторами отраслевых программ объясняют, почему количественные шкалы расходятся.</Takeaway>
  </Page>
);

const S04 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={4} label="Методология" />
    <H>Поиск и проверка публичных подтверждений интереса</H>
    <Row>
      <Card accent={T.navy}><CardTitle>Сопоставление компании</CardTitle>
        <Li>Юридическое и короткое название, бренд</Li><Li>Продукт, сайт, технологический домен</Li><Li>ИНН и отраслевые признаки</Li></Card>
      <Card accent={T.green}><CardTitle>Сигналы интереса</CardTitle>
        <Li accent={T.green}>Инвестиции, покупки, гранты, субсидии</Li><Li accent={T.green}>Акселераторы, пилоты, внедрения</Li><Li accent={T.green}>Резидентство, реестры, витрины</Li></Card>
    </Row>
    <View style={{ marginTop: 14 }}><Body>После проверки данные нормализовывались по отраслям, типам сигналов, надёжности источников и уровню зрелости компаний.</Body></View>
  </Page>
);

const S05 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={5} label="Логика исследования" />
    <H>Одна универсальная шкала сглаживает различия</H>
    <Lead>Чтобы увидеть структуру рынка, спрос нужно разложить на разные измерения — каждое отвечает на свой вопрос.</Lead>
    <Row>
      <Card accent={T.navy}><CardTitle>Количество стартапов</CardTitle><Body>Показывает размер предложения в направлении</Body></Card>
      <Card accent={T.green}><CardTitle>Спрос инвесторов</CardTitle><Body>Вероятность финансирования и следующих раундов</Body></Card>
      <Card accent={T.terra}><CardTitle>Корпоративный спрос</CardTitle><Body>Вероятность пилотов, внедрений, закупок и сделок</Body></Card>
    </Row>
    <Takeaway>Эти три вида спроса пересекаются, но не заменяют друг друга.</Takeaway>
  </Page>
);

const S06 = ({ ib }) => <ChartPage ib={ib} num={6} label="Показатели спроса" vis="VIS-01" take="Интегральный показатель отражает совпадение интересов, инвесторский — вероятность капитала, корпоративный — вероятность пилотов, внедрений, закупок, партнёрств и M&A." />;
const S07 = ({ ib }) => <ChartPage ib={ib} num={7} label="Интегральный показатель" vis="VIS-02" take="Enterprise SaaS — наиболее сбалансированное направление: сочетает крупную базу стартапов, интерес инвесторов и высокий корпоративный спрос." />;
const S08 = ({ ib }) => <ChartPage ib={ib} num={8} label="Спрос инвесторов" accent={T.green} vis="VIS-03" take="Высокий интерес инвесторов к направлению не означает автоматическую привлекательность каждого стартапа: важны стадия, рынок, команда, traction, юридическая структура и сценарий выхода." />;
const S09 = ({ ib }) => <ChartPage ib={ib} num={9} label="Корпоративный спрос" accent={T.terra} vis="VIS-04" take="Корпорации покупают не технологию как таковую, а решение конкретной бизнес-задачи." />;
const S10 = ({ ib }) => <ChartPage ib={ib} num={10} label="Сравнение шкал" vis="VIS-05" take="Enterprise SaaS, HealthTech, MedTech и EdTech — гибридные направления. AI, ML — технологический домен. Cybersecurity и Industrial раскрываются через корпоративный спрос." />;
const S11 = ({ ib }) => <ChartPage ib={ib} num={11} label="Кейс направления" accent={T.green} vis="VIS-06" take="9-е место по интегральному показателю, но 4-е по корпоративной шкале. Сегмент нельзя оценивать только по общему рейтингу." />;

const S12 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={12} label="Качественная часть" />
    <H>12 интервью с тремя группами участников</H>
    <Lead>Интервью объясняют, почему количественные шкалы расходятся между собой.</Lead>
    <Row>
      <Card accent={T.navy}><CardTitle>Фонды и инвесторы</CardTitle><Body>Фонды, частные инвесторы и инвестиционные клубы</Body></Card>
      <Card accent={T.green}><CardTitle>Институциональные</CardTitle><Body>Государственные и институциональные участники</Body></Card>
      <Card accent={T.terra}><CardTitle>Корпорации</CardTitle><Body>Корпоративные участники и инновационные функции</Body></Card>
    </Row>
    <Takeaway>Спрос на стартапы не является единым. Каждый тип участника рынка использует собственные критерии оценки.</Takeaway>
  </Page>
);

const S13 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={13} label="Общий тренд" />
    <H>Идея или сырой MVP — редко достаточное основание</H>
    <Lead>Участники рынка всё чаще требуют доказательств зрелости — для финансирования, пилота или стратегического интереса.</Lead>
    <Row>
      <Col><Li>Работающий продукт</Li><Li>Клиенты и выручка</Li><Li>Пилот или внедрение</Li><Li>Оформленные права на технологию</Li></Col>
      <Col><Li>Готовность к масштабированию</Li><Li>Понятная экономика</Li><Li>Команда для длинного цикла продаж или финансирования</Li></Col>
    </Row>
  </Page>
);

const S14 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={14} label="Критерии · Инвесторы" />
    <H>Способность превратить интерес в рост и выход</H>
    <Row>
      <Col><Li>Размер и доступность рынка</Li><Li>Traction и выручка</Li><Li>Команда и фокус основателей</Li></Col>
      <Col><Li>Юридическая структура и права</Li><Li>Понятный сценарий выхода</Li><Li>Возможность следующего раунда</Li></Col>
    </Row>
    <Takeaway>Спрос инвесторов показывает сегменты, где капитал готов рассматривать проекты, но итоговая оценка зависит от конкретной компании.</Takeaway>
  </Page>
);

const S15 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={15} label="Критерии · Корпорации" color={T.terra} />
    <H>Применимость к конкретной задаче бизнеса</H>
    <Row>
      <Col><Li accent={T.terra}>Наличие бизнес-задачи</Li><Li accent={T.terra}>Владелец процесса внутри корпорации</Li><Li accent={T.terra}>Интеграции и работа с данными</Li><Li accent={T.terra}>Информационная безопасность</Li></Col>
      <Col><Li accent={T.terra}>Юридические требования</Li><Li accent={T.terra}>Экономический эффект</Li><Li accent={T.terra}>Возможность масштабирования после пилота</Li></Col>
    </Row>
    <Takeaway accent={T.terra}>Корпоративный спрос — это самостоятельная шкала, а не дополнение к инвестиционной.</Takeaway>
  </Page>
);

const S16 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={16} label="Критерии · Институты развития" color={T.green} />
    <H>Технологическая и институциональная значимость</H>
    <Row>
      <Col><Li accent={T.green}>Технологическая зрелость</Li><Li accent={T.green}>Локализация</Li><Li accent={T.green}>Права на результаты интеллектуальной деятельности</Li><Li accent={T.green}>Применимость в российской экономике</Li></Col>
      <Col><Li accent={T.green}>Снижение зависимости от внешних решений</Li><Li accent={T.green}>Наличие отраслевого заказчика</Li><Li accent={T.green}>Возможность коммерциализации технологии</Li></Col>
    </Row>
    <Takeaway accent={T.green}>Особенно важно для Industrial, Energy, CleanTech, Biotech, Materials, Robotics и части AI, ML-решений.</Takeaway>
  </Page>
);

const S17 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={17} label="Сценарий коммерциализации" color={T.terra} />
    <H>Корпоративный выход как отдельный сценарий</H>
    <Lead>Для части российских стартапов корпоративный выход становится самостоятельным путём коммерциализации.</Lead>
    <Row>
      <Col><Li accent={T.terra}>Коммерческий договор</Li><Li accent={T.terra}>Масштабирование внутри группы</Li><Li accent={T.terra}>Стратегическое партнёрство</Li></Col>
      <Col><Li accent={T.terra}>CVC-инвестиция</Li><Li accent={T.terra}>Покупка технологии или команды</Li><Li accent={T.terra}>M&A со стороны отраслевого игрока</Li></Col>
    </Row>
    <Takeaway accent={T.terra}>В ряде направлений финансовый инвестор не является единственным или главным источником спроса.</Takeaway>
  </Page>
);

const S18 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={18} label="Технологический домен" />
    <H>AI, ML: корпорация покупает прикладной результат</H>
    <Lead>AI, ML лидирует по спросу инвесторов, но слабее как самостоятельная корпоративная категория — заказчик покупает не технологию, а измеримый эффект.</Lead>
    <Row>
      <Col><Li>Снижение затрат</Li><Li>Ускорение процесса</Li><Li>Повышение точности</Li><Li>Автоматизация ручного труда</Li></Col>
      <Col><Li>Безопасность</Li><Li>Аналитика</Li><Li>Рост выручки</Li></Col>
    </Row>
    <Takeaway>AI, ML-стартапы должны начинать корпоративную продажу с задачи бизнеса, данных и измеримого эффекта.</Takeaway>
  </Page>
);

const S19 = ({ ib }) => <ChartPage ib={ib} num={19} label="Типология" vis="VIS-08" take="Универсальные лидеры, технологические домены, корпоративно-стратегические сегменты, зрелые рынки и специализированные направления требуют разной логики оценки." />;

const S20 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={20} label="Универсальный лидер" />
    <H>Enterprise SaaS: прямая применимость корпоративного ПО</H>
    <Row gap={10}>
      {[["1", "интегральный"], ["3", "инвесторы"], ["1", "корпорации"]].map(([r, l], i) => (
        <View key={i} style={{ flex: 1, backgroundColor: T.navySoft, borderRadius: 5, padding: 10 }}>
          <Text style={{ fontSize: 22, fontWeight: 700, color: T.navy }}>{r}</Text>
          <Text style={{ fontSize: 8.5, color: T.muted, marginTop: 3, textTransform: "uppercase", letterSpacing: 0.5 }}>{l}</Text>
        </View>
      ))}
    </Row>
    <View style={{ marginTop: 14, marginBottom: 6 }}><Body>Сила направления — в платформах, автоматизации, API, MDM, аналитике, интеграциях и отраслевых цифровых решениях.</Body></View>
    <Row>
      <Col><Li>Безопасность и интеграции</Li><Li>Экономический эффект</Li></Col>
      <Col><Li>Поддержка пользователей</Li><Li>Способность пройти длинный цикл корпоративных продаж</Li></Col>
    </Row>
  </Page>
);

const S21 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={21} label="Гибридные направления" color={T.green} />
    <H>HealthTech, MedTech и EdTech</H>
    <Row>
      <Card accent={T.green}><CardTitle>HealthTech, MedTech</CardTitle>
        <Li accent={T.green}>Регуляторика и доказательная база</Li><Li accent={T.green}>Клиническая или технологическая проверка</Li><Li accent={T.green}>Права на технологию</Li><Li accent={T.green}>Доступ к медицинской инфраструктуре</Li></Card>
      <Card accent={T.navy}><CardTitle>EdTech</CardTitle>
        <Li>Не сводится к потребительскому онлайн-образованию</Li><Li>Корпоративное обучение и HR</Li><Li>Переподготовка и развитие персонала</Li></Card>
    </Row>
  </Page>
);

const S22 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={22} label="Корпоративно-стратегические" color={T.terra} />
    <H>Industrial, Manufacturing и Energy, CleanTech</H>
    <Row>
      <Col><Li accent={T.terra}>Доступ к крупным заказчикам</Li><Li accent={T.terra}>Проверка технологии в реальных условиях</Li><Li accent={T.terra}>Промышленные пилоты</Li><Li accent={T.terra}>Локализация</Li></Col>
      <Col><Li accent={T.terra}>Права на технологию</Li><Li accent={T.terra}>Длинный горизонт финансирования</Li><Li accent={T.terra}>Подтверждённый экономический эффект</Li></Col>
    </Row>
    <Takeaway accent={T.terra}>Без отраслевых заказчиков и пилотных площадок даже сильная технология может не перейти в коммерческое применение.</Takeaway>
  </Page>
);

const S23 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={23} label="Рекомендации · Инвесторы" />
    <H>Общий рейтинг — только первый фильтр</H>
    <Row>
      {[["1", "Рыночный фильтр", "Есть ли у направления достаточный спрос", T.navy], ["2", "Фильтр зрелости", "Готов ли стартап к сделке", T.green], ["3", "Фильтр выхода", "Как инвестор вернёт капитал", T.terra]].map(([n, t, d, a], i) => (
        <Card key={i} accent={a}>
          <View style={{ flexDirection: "row", alignItems: "baseline", gap: 7, marginBottom: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: a }}>{n}</Text>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg }}>{t}</Text>
          </View>
          <Body>{d}</Body>
        </Card>
      ))}
    </Row>
    <Takeaway>Особое внимание — корпоративно-стратегическим сегментам: Cybersecurity, Industrial, Manufacturing, Energy, CleanTech и части Enterprise SaaS.</Takeaway>
  </Page>
);

const S24 = ({ ib }) => <ChartPage ib={ib} num={24} label="Рекомендации · Корпорации" accent={T.terra} vis="VIS-07" takeLabel="Главный вывод" take="Начинать нужно не с поиска стартапов, а с карты бизнес-задач. Без владельца процесса даже хороший стартап часто не доходит до внедрения." />;

const S25 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={25} label="Рекомендации · Институты развития" color={T.green} />
    <H>Поддерживать не только стартапы, но и доступ к спросу</H>
    <Row>
      <Col><Li accent={T.green}>Корпоративные пилоты от заранее описанных задач заказчиков</Li><Li accent={T.green}>Отраслевые витрины решений</Li><Li accent={T.green}>Типовой паспорт пилота</Li><Li accent={T.green}>Софинансирование первых внедрений</Li></Col>
      <Col><Li accent={T.green}>Помощь с правами на технологию</Li><Li accent={T.green}>Подготовка к комплексной проверке</Li><Li accent={T.green}>Быстрый переход от пилота к коммерческому договору</Li></Col>
    </Row>
  </Page>
);

const S26 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={26} label="Рекомендации · Стартапы" />
    <H>Определить основной тип спроса</H>
    <Row>
      <Card accent={T.navy}><CardTitle>Для инвесторов</CardTitle><Li>Рынок, рост, команда</Li><Li>Выручка и unit-экономика</Li><Li>Сценарий выхода</Li></Card>
      <Card accent={T.terra}><CardTitle>Для корпораций</CardTitle><Li accent={T.terra}>Задача заказчика и пилот</Li><Li accent={T.terra}>Интеграции и безопасность</Li><Li accent={T.terra}>Экономический эффект</Li></Card>
      <Card accent={T.green}><CardTitle>Для институтов развития</CardTitle><Li accent={T.green}>Локализация и значимость</Li><Li accent={T.green}>Права на РИД</Li><Li accent={T.green}>Применимость в экономике</Li></Card>
    </Row>
    <Takeaway>Одна презентация для всех аудиторий снижает вероятность сделки.</Takeaway>
  </Page>
);

const S27 = () => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: "#181B20", padding: "34 48", color: "#F2EFE8" }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: "#A89F90", letterSpacing: 2, textTransform: "uppercase" }}>Финальный вывод</Text>
      <Text style={{ fontSize: 9, color: "#A89F90", letterSpacing: 1 }}>27 / 27</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "center", maxWidth: 640 }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginBottom: 22 }}>
        <View style={{ width: 9, height: 22, borderRadius: 2, backgroundColor: "#6AA0C8" }} />
        <View style={{ width: 9, height: 32, borderRadius: 2, backgroundColor: "#56B393" }} />
        <View style={{ width: 9, height: 42, borderRadius: 2, backgroundColor: "#D9914E" }} />
      </View>
      <Text style={{ fontSize: 28, fontWeight: 700, color: "#F2EFE8", lineHeight: 1.12 }}>Выигрывают компании, которые могут доказать зрелость</Text>
      <Text style={{ fontSize: 14, color: "#D4CFC4", marginTop: 16, lineHeight: 1.5 }}>Не просто стартапы из популярных направлений, а те, кто проходит проверку конкретного источника спроса и показывает реалистичный путь к коммерциализации, росту и выходу.</Text>
      <View style={{ flexDirection: "row", gap: 12, backgroundColor: "#2A2F37", borderRadius: 5, padding: 14, marginTop: 18, borderLeftWidth: 3, borderLeftColor: "#6AA0C8" }}>
        <Text style={{ fontSize: 9, fontWeight: 700, color: "#6AA0C8", letterSpacing: 1, textTransform: "uppercase", width: 90 }}>Практическое следствие</Text>
        <Text style={{ fontSize: 11.5, color: "#E7E3DA", lineHeight: 1.45, flex: 1 }}>Рынок нужно анализировать не как единый рейтинг отраслей, а как сочетание трёх видов спроса — со стороны инвесторов, корпораций и институтов развития.</Text>
      </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: "#363B43", paddingTop: 14 }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: "#A89F90", letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
      <Text style={{ fontSize: 9, color: "#A89F90" }}>hop.agency · startupdrive.ru</Text>
    </View>
  </Page>
);

const SMDoc = ({ ib }) => (
  <Document title="Рынок стартапов в России — Hop.Agency × Startup Drive" author="Дмитрий Бондарев">
    <S01 ib={ib} /><S02 /><S03 /><S04 /><S05 /><S06 ib={ib} /><S07 ib={ib} /><S08 ib={ib} /><S09 ib={ib} /><S10 ib={ib} />
    <S11 ib={ib} /><S12 /><S13 /><S14 /><S15 /><S16 /><S17 /><S18 /><S19 ib={ib} /><S20 />
    <S21 /><S22 /><S23 /><S24 ib={ib} /><S25 /><S26 /><S27 />
  </Document>
);

export async function preGenerateStartupMarketPdfs() {
  const ib = getImageBase();
  T = THEMES.light;
  const lightBlob = await pdf(<SMDoc ib={ib} />).toBlob();
  T = THEMES.dark;
  const darkBlob = await pdf(<SMDoc ib={ib} />).toBlob();
  T = THEMES.light;
  return { light: lightBlob, dark: darkBlob };
}
