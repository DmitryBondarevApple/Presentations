/**
 * Startup Market (Рынок стартапов в России) — PDF Generator
 * 27 slides, A4 Landscape, premium consulting palette, text-dense.
 * Verbatim report text. Chart pages are two-column (text + chart).
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
    navySoft: "#E7ECF1", png: "png-light",
  },
  dark: {
    bg: "#181B20", fg: "#F2EFE8", body: "#D4CFC4", muted: "#A89F90", dim: "#7C818B",
    line: "#363B43", panel: "#23272F", panel2: "#2A2F37",
    navy: "#6AA0C8", green: "#56B393", terra: "#D9914E",
    navySoft: "#212A35", png: "png-dark",
  },
};
let T = THEMES.light;

const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: "26 36" });

const Header = ({ num, label, color }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
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

const H = ({ children, size = 24 }) => <Text style={{ fontSize: size, fontWeight: 700, color: T.fg, marginBottom: 10, lineHeight: 1.12 }}>{children}</Text>;
const P = ({ children, size = 11.5, mb = 7 }) => <Text style={{ fontSize: size, color: T.body, lineHeight: 1.5, marginBottom: mb }}>{children}</Text>;
const Label = ({ children }) => <Text style={{ fontSize: 11, fontWeight: 700, color: T.fg, marginBottom: 5 }}>{children}</Text>;

const Li = ({ children, accent }) => (
  <View style={{ flexDirection: "row", gap: 7, alignItems: "flex-start", marginBottom: 4.5 }}>
    <View style={{ width: 4.5, height: 4.5, backgroundColor: accent || T.navy, marginTop: 5, transform: "rotate(45deg)" }} />
    <Text style={{ fontSize: 11, color: T.body, lineHeight: 1.4, flex: 1 }}>{children}</Text>
  </View>
);

const Defn = ({ label, children, accent }) => (
  <Text style={{ fontSize: 11.5, color: T.body, lineHeight: 1.45, marginBottom: 7 }}>
    <Text style={{ fontWeight: 700, color: accent || T.navy }}>{label}</Text>
    <Text> {children}</Text>
  </Text>
);

const Card = ({ children, accent }) => (
  <View style={{
    flex: 1, backgroundColor: T.panel, borderRadius: 5, padding: 13,
    borderTopWidth: accent ? 2.5 : 1, borderTopColor: accent || T.line,
    borderBottomWidth: 1, borderBottomColor: T.line,
    borderLeftWidth: 1, borderLeftColor: T.line, borderRightWidth: 1, borderRightColor: T.line,
  }}>{children}</View>
);
const CardTitle = ({ children }) => <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg, marginBottom: 5 }}>{children}</Text>;

const Stat = ({ value, label, accent }) => (
  <View style={{
    flex: 1, backgroundColor: T.panel, borderRadius: 5, padding: 11,
    borderTopWidth: 1, borderTopColor: T.line, borderBottomWidth: 1, borderBottomColor: T.line,
    borderRightWidth: 1, borderRightColor: T.line, borderLeftWidth: 3, borderLeftColor: accent || T.navy,
  }}>
    <Text style={{ fontSize: 21, fontWeight: 700, color: T.fg }}>{value}</Text>
    <Text style={{ fontSize: 8, color: T.muted, marginTop: 4, letterSpacing: 0.5, textTransform: "uppercase", lineHeight: 1.25 }}>{label}</Text>
  </View>
);

const Takeaway = ({ children, label = "Главный вывод", accent }) => (
  <View style={{ flexDirection: "row", gap: 12, backgroundColor: T.panel, borderRadius: 5, padding: 12, marginTop: 10, borderLeftWidth: 3, borderLeftColor: accent || T.navy }}>
    <Text style={{ fontSize: 9, fontWeight: 700, color: accent || T.navy, letterSpacing: 1, textTransform: "uppercase", width: 80 }}>{label}</Text>
    <Text style={{ fontSize: 10.5, color: T.body, lineHeight: 1.4, flex: 1 }}>{children}</Text>
  </View>
);

const Col = ({ children }) => <View style={{ flex: 1 }}>{children}</View>;
const Row = ({ children, gap = 14 }) => <View style={{ flexDirection: "row", gap }}>{children}</View>;

const ChartText = ({ ib, num, label, accent, vis, title, children }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={num} label={label} color={accent} />
    <H size={22}>{title}</H>
    <View style={{ flexDirection: "row", gap: 18, flex: 1 }}>
      <View style={{ width: 300 }}>{children}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <View style={{ borderWidth: 1, borderColor: T.line, borderRadius: 5, overflow: "hidden" }}>
          <Image src={`${ib}/images/startup-market/${T.png}/${vis}.png`} style={{ width: 451, height: 262 }} />
        </View>
      </View>
    </View>
  </Page>
);

/* ═══════════ SLIDES ═══════════ */

const S01 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: "30 44", color: T.fg }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: T.muted, letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
      <Text style={{ fontSize: 9, color: T.dim, letterSpacing: 2, textTransform: "uppercase" }}>Аналитическое исследование</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 11, fontWeight: 700, color: T.terra, letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>Отчёт об исследовании рынка</Text>
      <Text style={{ fontSize: 40, fontWeight: 700, color: T.fg, lineHeight: 1.05 }}>Рынок стартапов в России</Text>
      <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginTop: 12, maxWidth: 620, lineHeight: 1.35 }}>Различие спроса со стороны инвесторов, корпораций и институтов развития</Text>
      <Text style={{ fontSize: 11.5, color: T.body, marginTop: 10, maxWidth: 700, lineHeight: 1.5 }}>
        Исследование показывает, что российский рынок стартапов нельзя описывать одной шкалой привлекательности. Для разных участников рынка важны разные признаки: инвесторы оценивают потенциал роста и возврата инвестиций, корпорации — применимость решения к задачам бизнеса, институты развития — технологическую значимость, локализацию и вклад в экономику.
      </Text>
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginTop: 18 }}>
        <View style={{ width: 9, height: 18, borderRadius: 2, backgroundColor: T.navy }} />
        <View style={{ width: 9, height: 28, borderRadius: 2, backgroundColor: T.green }} />
        <View style={{ width: 9, height: 38, borderRadius: 2, backgroundColor: T.terra }} />
      </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-end", borderTopWidth: 1, borderTopColor: T.line, paddingTop: 12 }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image src={`${ib}/images/startup-market/speaker.png`} style={{ width: 36, height: 36, borderRadius: 18, objectFit: "cover" }} />
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
    <H>Российский рынок стартапов развивается как система нескольких видов спроса</H>
    <View style={{ height: 1, backgroundColor: T.line, marginBottom: 16, marginTop: 2 }} />
    <P size={14} mb={14}>В одних направлениях ключевую роль играет спрос со стороны инвесторов, в других — корпоративные заказчики, в третьих — институты развития, отраслевые программы, пилоты и стратегические партнёрства.</P>
    <P size={14} mb={0}>Поэтому привлекательность стартапа определяется не только отраслью, но и зрелостью продукта, доказанным спросом, юридической структурой, правами на технологию, готовностью к внедрению и понятным сценарием роста или выхода.</P>
  </Page>
);

const S03 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={3} label="Методология" />
    <H>Исследование объединяет количественный и качественный анализ</H>
    <P>Количественная часть построена на анализе 4 445 стартапов, дедуплицированных из 8 524 исходных записей. По стартапам зафиксировано 2 944 сигнала интереса, по 1 571 стартапу рассчитаны скоринговые показатели.</P>
    <P>Для анализа спроса использованы данные о 1 820 инвесторах, 244 корпорациях, отраслевых интересах инвесторов, корпоративных потребностях и технологических запросах.</P>
    <Row gap={10}>
      <Stat value="4 445" label="стартапов" accent={T.navy} />
      <Stat value="2 944" label="сигнала интереса" accent={T.navy} />
      <Stat value="1 820" label="инвесторов" accent={T.green} />
      <Stat value="12" label="экспертных интервью" accent={T.terra} />
    </Row>
    <View style={{ height: 10 }} />
    <P mb={0}>Качественная часть основана на 12 экспертных интервью с фондами, корпорациями, институтами развития и операторами отраслевых программ.</P>
  </Page>
);

const S04 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={4} label="Методология" />
    <H>Поиск и проверка публичных подтверждений интереса</H>
    <P size={13}>Основой количественной части стал поиск и проверка публичных подтверждений внешнего интереса к стартапам.</P>
    <P size={13}>Для каждой компании сопоставлялись юридическое название, короткое название, бренд, продукт, сайт, технологический домен, ИНН и отраслевые признаки.</P>
    <P size={13}>В качестве сигналов учитывались инвестиции, покупки, гранты, субсидии, акселераторы, пилоты, внедрения, резидентство, реестры, витрины и другие подтверждённые признаки интереса.</P>
    <P size={13} mb={0}>После проверки данные нормализовывались по отраслям, типам сигналов, надёжности источников и уровню зрелости компаний.</P>
  </Page>
);

const S05 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={5} label="Логика исследования" />
    <H>Одна универсальная шкала сглаживает различия между типами спроса</H>
    <Li>Количество стартапов показывает размер предложения в направлении.</Li>
    <Li accent={T.green}>Спрос со стороны инвесторов показывает вероятность финансирования и следующих раундов.</Li>
    <Li accent={T.terra}>Корпоративный спрос показывает вероятность пилотов, внедрений, закупок, стратегических партнёрств и сделок со стратегическими покупателями.</Li>
    <Takeaway>Эти три вида спроса пересекаются, но не заменяют друг друга.</Takeaway>
  </Page>
);

const S06 = ({ ib }) => (
  <ChartText ib={ib} num={6} label="Показатели спроса" vis="VIS-01" title="Три показателя спроса">
    <Defn label="Интегральный показатель спроса" accent={T.navy}> показывает, где одновременно сильны стартапы, инвесторы и корпоративные заказчики.</Defn>
    <Defn label="Показатель спроса со стороны инвесторов" accent={T.green}> показывает, где выше вероятность привлечения капитала и последующих раундов.</Defn>
    <Defn label="Показатель спроса со стороны корпоративного сектора" accent={T.terra}> показывает, где выше вероятность пилотов, внедрений, закупок, стратегических партнёрств и M&A.</Defn>
  </ChartText>
);

const S07 = ({ ib }) => (
  <ChartText ib={ib} num={7} label="Интегральный показатель" vis="VIS-02" title="Лидеры по интегральному показателю">
    <P>По интегральному показателю лидируют направления, где одновременно присутствуют значимое число стартапов, сильные рыночные сигналы, релевантные инвесторы и корпоративные заказчики.</P>
    <P mb={0}>Enterprise SaaS выступает наиболее сбалансированным направлением, поскольку сочетает крупную базу стартапов, интерес инвесторов и высокий корпоративный спрос.</P>
  </ChartText>
);

const S08 = ({ ib }) => (
  <ChartText ib={ib} num={8} label="Спрос инвесторов" accent={T.green} vis="VIS-03" title="Спрос со стороны инвесторов">
    <P>В инвесторской шкале лидирует AI, ML. Это технологический домен с максимальной концентрацией интереса со стороны инвесторов.</P>
    <Text style={{ fontSize: 11.5, color: T.body, lineHeight: 1.5 }}>
      <Text style={{ fontWeight: 700, color: T.green }}>Главный вывод:</Text>
      <Text> высокий интерес инвесторов к направлению не означает автоматическую привлекательность каждого стартапа. Для инвестора важны стадия, рынок, команда, traction, юридическая структура и сценарий выхода.</Text>
    </Text>
  </ChartText>
);

const S09 = ({ ib }) => (
  <ChartText ib={ib} num={9} label="Корпоративный спрос" accent={T.terra} vis="VIS-04" title="Спрос со стороны корпоративного сектора">
    <P>Корпоративная шкала показывает, где выше вероятность прикладного спроса: пилотов, внедрений, закупок и стратегических сделок.</P>
    <Text style={{ fontSize: 11.5, color: T.body, lineHeight: 1.5 }}>
      <Text style={{ fontWeight: 700, color: T.terra }}>Главный вывод:</Text>
      <Text> корпорации покупают не технологию как таковую, а решение конкретной бизнес-задачи.</Text>
    </Text>
  </ChartText>
);

const S10 = ({ ib }) => (
  <ChartText ib={ib} num={10} label="Сравнение шкал" vis="VIS-05" title="Что показывает сравнение трёх шкал">
    <P size={11}>Сравнение трёх шкал позволяет выделить разные типы привлекательности направлений.</P>
    <P size={11}>Enterprise SaaS, HealthTech, MedTech и EdTech являются гибридными направлениями, сильными и для инвесторов, и для корпораций.</P>
    <P size={11}>AI, ML является технологическим доменом с выраженным спросом со стороны инвесторов, но требует отраслевой привязки для корпоративного применения.</P>
    <P size={11} mb={0}>Cybersecurity, Industrial, Manufacturing и часть Energy, CleanTech сильнее раскрываются через корпоративный спрос, пилоты, внедрения и стратегические сделки.</P>
  </ChartText>
);

const S11 = ({ ib }) => (
  <ChartText ib={ib} num={11} label="Кейс направления" accent={T.green} vis="VIS-06" title="Почему Cybersecurity выделен отдельно">
    <P size={11}>Cybersecurity занимает 9-е место по интегральному показателю, но поднимается на 4-е место по корпоративной шкале и имеет высокую релевантность для корпоративного выхода.</P>
    <P size={11}>Это показывает, что сегмент нельзя оценивать только по общему рейтингу.</P>
    <P size={11}>Его значимость связана с защитой данных, инфраструктурой, локализацией, надёжностью поставщика, регуляторными требованиями и высокой ценой ошибки.</P>
    <P size={11} mb={0}>Для инвесторов Cybersecurity интересен не только как венчурный рынок, но и как область возможных стратегических сделок.</P>
  </ChartText>
);

const S12 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={12} label="Качественная часть" />
    <H>Интервью объясняют, почему количественные шкалы расходятся</H>
    <Label>В исследовании использованы 12 интервью с тремя группами участников:</Label>
    <Li>Фонды, частные инвесторы и клубы;</Li>
    <Li accent={T.green}>Государственные и институциональные участники;</Li>
    <Li accent={T.terra}>Корпоративные участники и корпоративные инновационные функции.</Li>
    <Takeaway>Спрос на стартапы не является единым. Каждый тип участника рынка использует собственные критерии оценки.</Takeaway>
  </Page>
);

const S13 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={13} label="Общий тренд" />
    <H>Общий тренд: от интереса к теме к проверке зрелости</H>
    <P>Идея или сырой MVP редко являются достаточным основанием для финансирования, пилота или стратегического интереса. Участники рынка всё чаще требуют доказательств зрелости:</P>
    <Row gap={28}>
      <Col><Li>Работающий продукт;</Li><Li>Клиенты и выручка;</Li><Li>Пилот или внедрение;</Li><Li>Оформленные права на технологию;</Li></Col>
      <Col><Li>Готовность к масштабированию;</Li><Li>Понятная экономика;</Li><Li>Команда, способная пройти длинный цикл продаж или финансирования.</Li></Col>
    </Row>
  </Page>
);

const S14 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={14} label="Критерии · Инвесторы" />
    <H>Что проверяют инвесторы</H>
    <P>Инвесторы оценивают не только отрасль, но и способность стартапа превратить отраслевой интерес в рост выручки, капитализации и вероятность выхода. Ключевые критерии:</P>
    <Row gap={28}>
      <Col><Li>Размер и доступность рынка;</Li><Li>Traction и выручка;</Li><Li>Команда и фокус основателей;</Li></Col>
      <Col><Li>Юридическая структура и права;</Li><Li>Понятный сценарий выхода;</Li><Li>Возможность следующего раунда.</Li></Col>
    </Row>
    <Takeaway>Спрос со стороны инвесторов показывает сегменты, где капитал готов рассматривать проекты, но итоговая оценка зависит от конкретной компании.</Takeaway>
  </Page>
);

const S15 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={15} label="Критерии · Корпорации" color={T.terra} />
    <H>Что проверяют корпорации</H>
    <P>Корпоративные участники оценивают стартап по применимости к задаче бизнеса. Ключевые критерии:</P>
    <Row gap={28}>
      <Col><Li accent={T.terra}>Наличие бизнес-задачи;</Li><Li accent={T.terra}>Владелец процесса внутри корпорации;</Li><Li accent={T.terra}>Интеграции и работа с данными;</Li><Li accent={T.terra}>Информационная безопасность;</Li></Col>
      <Col><Li accent={T.terra}>Юридические требования;</Li><Li accent={T.terra}>Экономический эффект;</Li><Li accent={T.terra}>Возможность масштабирования после пилота.</Li></Col>
    </Row>
    <Takeaway accent={T.terra}>Корпоративный спрос является самостоятельной шкалой, а не дополнением к инвестиционной.</Takeaway>
  </Page>
);

const S16 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={16} label="Критерии · Институты развития" color={T.green} />
    <H>Что важно для институтов развития</H>
    <P>Институты развития добавляют к оценке стартапа критерии технологической и институциональной значимости. Для них важны:</P>
    <Row gap={28}>
      <Col><Li accent={T.green}>Технологическая зрелость;</Li><Li accent={T.green}>Локализация;</Li><Li accent={T.green}>Права на результаты интеллектуальной деятельности;</Li><Li accent={T.green}>Применимость в российской экономике;</Li></Col>
      <Col><Li accent={T.green}>Снижение зависимости от внешних решений;</Li><Li accent={T.green}>Наличие отраслевого заказчика;</Li><Li accent={T.green}>Возможность коммерциализации технологии.</Li></Col>
    </Row>
    <Takeaway accent={T.green}>Такие критерии особенно важны для Industrial, Energy, CleanTech, Biotech, Materials, Robotics и части AI, ML-решений.</Takeaway>
  </Page>
);

const S17 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={17} label="Сценарий коммерциализации" color={T.terra} />
    <H>Корпоративный выход как отдельный сценарий</H>
    <P>Для части российских стартапов корпоративный выход становится самостоятельным сценарием коммерциализации. Он может включать:</P>
    <Row gap={28}>
      <Col><Li accent={T.terra}>Коммерческий договор;</Li><Li accent={T.terra}>Масштабирование внутри группы;</Li><Li accent={T.terra}>Стратегическое партнёрство;</Li></Col>
      <Col><Li accent={T.terra}>CVC-инвестицию;</Li><Li accent={T.terra}>Покупку технологии или команды;</Li><Li accent={T.terra}>M&A со стороны отраслевого игрока.</Li></Col>
    </Row>
    <Takeaway accent={T.terra}>Поэтому в ряде направлений финансовый инвестор не является единственным или главным источником спроса.</Takeaway>
  </Page>
);

const S18 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={18} label="Технологический домен" />
    <H>AI, ML: технологический домен, а не обычная отрасль</H>
    <P>AI, ML лидирует по спросу со стороны инвесторов, но слабее выглядит в корпоративной шкале как самостоятельная категория. Причина в том, что корпоративный заказчик покупает не AI, ML как технологию, а прикладной результат:</P>
    <Row gap={28}>
      <Col><Li>Снижение затрат;</Li><Li>Ускорение процесса;</Li><Li>Повышение точности;</Li><Li>Автоматизацию ручного труда;</Li></Col>
      <Col><Li>Безопасность;</Li><Li>Аналитику;</Li><Li>Рост выручки.</Li></Col>
    </Row>
    <Takeaway>AI, ML-стартапы должны начинать корпоративную продажу с задачи бизнеса, данных и измеримого эффекта.</Takeaway>
  </Page>
);

const S19 = ({ ib }) => (
  <ChartText ib={ib} num={19} label="Типология" vis="VIS-08" title="Типология отраслевых направлений">
    <P size={11}>По результатам исследования направления можно разделить на несколько групп.</P>
    <Defn label="Универсальные лидеры:" accent={T.navy}> Enterprise SaaS, HealthTech, MedTech, EdTech.</Defn>
    <Defn label="Технологические домены:" accent={T.navy}> AI, ML.</Defn>
    <Defn label="Корпоративно-стратегические сегменты:" accent={T.terra}> Cybersecurity, Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech.</Defn>
    <Defn label="Зрелые конкурентные рынки:" accent={T.green}> FinTech, E-commerce, RetailTech.</Defn>
    <Defn label="Специализированные технологические направления:" accent={T.muted}> Biotech, Pharma, Materials, Chemistry, Robotics, Drones.</Defn>
  </ChartText>
);

const S20 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={20} label="Универсальный лидер" />
    <H>Enterprise SaaS: универсальный лидер</H>
    <P size={13}>Enterprise SaaS занимает 1-е место по интегральному показателю, 3-е место по спросу со стороны инвесторов и 1-е место по корпоративному спросу.</P>
    <View style={{ height: 1, backgroundColor: T.line, marginVertical: 8 }} />
    <P size={13}>Сила направления связана с прямой применимостью корпоративного ПО, платформ, автоматизации, API, MDM, аналитики, интеграций и отраслевых цифровых решений.</P>
    <P size={13} mb={0}>Для стартапов в этом сегменте критичны безопасность, интеграции, экономический эффект, поддержка пользователей и способность пройти длинный цикл корпоративных продаж.</P>
  </Page>
);

const S21 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={21} label="Гибридные направления" color={T.green} />
    <H>HealthTech, MedTech и EdTech: гибридные направления</H>
    <P size={13}>HealthTech, MedTech и EdTech входят в группу направлений, где сочетаются интерес инвесторов, корпоративная применимость и институциональная значимость.</P>
    <P size={13}>HealthTech, MedTech требует специализированной оценки: регуляторики, доказательной базы, клинической или технологической проверки, прав на технологию и доступа к медицинской инфраструктуре.</P>
    <P size={13} mb={0}>EdTech нельзя сводить только к потребительскому онлайн-образованию. Значимая часть спроса связана с корпоративным обучением, HR, переподготовкой и развитием персонала.</P>
  </Page>
);

const S22 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={22} label="Корпоративно-стратегические" color={T.terra} />
    <H>Industrial, Manufacturing и Energy, CleanTech</H>
    <P>Industrial, Manufacturing и Energy, CleanTech требуют анализа с учётом корпоративного спроса. Для этих направлений важны:</P>
    <Row gap={28}>
      <Col><Li accent={T.terra}>Доступ к крупным заказчикам;</Li><Li accent={T.terra}>Проверка технологии в реальных условиях;</Li><Li accent={T.terra}>Промышленные пилоты;</Li><Li accent={T.terra}>Локализация;</Li></Col>
      <Col><Li accent={T.terra}>Права на технологию;</Li><Li accent={T.terra}>Длинный горизонт финансирования;</Li><Li accent={T.terra}>Подтверждённый экономический эффект.</Li></Col>
    </Row>
    <Takeaway accent={T.terra}>Без отраслевых заказчиков и пилотных площадок даже сильная технология может не перейти в коммерческое применение.</Takeaway>
  </Page>
);

const S23 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={23} label="Рекомендации · Инвесторы" />
    <H>Общий рейтинг — только первый фильтр</H>
    <P>Инвесторам следует использовать общий рейтинг только как первый фильтр. Далее нужны три проверочных шага:</P>
    <Row>
      {[["1", "Рыночный фильтр", "есть ли у направления достаточный спрос", T.navy], ["2", "Фильтр зрелости", "готов ли стартап к сделке", T.green], ["3", "Фильтр выхода", "как инвестор вернёт капитал", T.terra]].map(([n, t, d, a], i) => (
        <Card key={i} accent={a}>
          <View style={{ flexDirection: "row", alignItems: "baseline", gap: 7, marginBottom: 5 }}>
            <Text style={{ fontSize: 20, fontWeight: 700, color: a }}>{n}</Text>
            <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg }}>{t}</Text>
          </View>
          <Text style={{ fontSize: 11.5, color: T.body, lineHeight: 1.4 }}>{d}</Text>
        </Card>
      ))}
    </Row>
    <Takeaway>Особое внимание стоит уделять корпоративно-стратегическим сегментам: Cybersecurity, Industrial, Manufacturing, Energy, CleanTech и части Enterprise SaaS.</Takeaway>
  </Page>
);

const S24 = ({ ib }) => (
  <ChartText ib={ib} num={24} label="Рекомендации · Корпорации" accent={T.terra} vis="VIS-07" title="Рекомендации для корпораций">
    <P size={11}>Корпорациям следует начинать работу не с поиска стартапов, а с карты бизнес-задач.</P>
    <Label>Перед пилотом нужно определить:</Label>
    <Li accent={T.terra}>Бизнес-заказчика;</Li>
    <Li accent={T.terra}>Процесс, который должен измениться;</Li>
    <Li accent={T.terra}>Метрики успеха;</Li>
    <Li accent={T.terra}>Данные и системы, необходимые стартапу;</Li>
    <Li accent={T.terra}>Ответственных за IT, безопасность, закупки и юридические вопросы;</Li>
    <Li accent={T.terra}>Решение, которое будет принято после успешного пилота.</Li>
    <Text style={{ fontSize: 11, color: T.body, lineHeight: 1.45, marginTop: 6 }}>Без владельца процесса даже хороший стартап часто не доходит до внедрения.</Text>
  </ChartText>
);

const S25 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={25} label="Рекомендации · Институты развития" color={T.green} />
    <H>Поддерживать не только стартапы, но и доступ к спросу</H>
    <P>Институтам развития следует поддерживать не только стартапы, но и доступ стартапов к спросу. Наиболее полезные инструменты:</P>
    <Row gap={28}>
      <Col><Li accent={T.green}>Корпоративные пилоты от заранее описанных задач заказчиков;</Li><Li accent={T.green}>Отраслевые витрины решений;</Li><Li accent={T.green}>Типовой паспорт пилота;</Li><Li accent={T.green}>Софинансирование первых внедрений;</Li></Col>
      <Col><Li accent={T.green}>Помощь с правами на технологию;</Li><Li accent={T.green}>Подготовка к комплексной проверке;</Li><Li accent={T.green}>Быстрый переход от пилота к коммерческому договору.</Li></Col>
    </Row>
  </Page>
);

const S26 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={26} label="Рекомендации · Стартапы" />
    <H>Определить основной тип спроса, под который они готовятся</H>
    <Li accent={T.navy}>Для инвесторов важны рынок, рост, команда, выручка, unit-экономика и сценарий выхода.</Li>
    <Li accent={T.terra}>Для корпораций важны задача заказчика, пилот, интеграции, безопасность и экономический эффект.</Li>
    <Li accent={T.green}>Для институтов развития важны локализация, технологическая значимость, права на РИД и применимость в российской экономике.</Li>
    <Takeaway>Одна презентация для всех аудиторий снижает вероятность сделки.</Takeaway>
  </Page>
);

const S27 = () => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: "#181B20", padding: "30 44", color: "#F2EFE8" }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: "#A89F90", letterSpacing: 2, textTransform: "uppercase" }}>Финальный вывод</Text>
      <Text style={{ fontSize: 9, color: "#A89F90", letterSpacing: 1 }}>27 / 27</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "center", maxWidth: 660 }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginBottom: 18 }}>
        <View style={{ width: 9, height: 18, borderRadius: 2, backgroundColor: "#6AA0C8" }} />
        <View style={{ width: 9, height: 28, borderRadius: 2, backgroundColor: "#56B393" }} />
        <View style={{ width: 9, height: 38, borderRadius: 2, backgroundColor: "#D9914E" }} />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 700, color: "#F2EFE8", lineHeight: 1.2 }}>На российском рынке выигрывают не просто стартапы из популярных направлений, а компании, которые могут доказать зрелость, пройти проверку конкретного источника спроса и показать реалистичный путь к коммерциализации, росту и выходу.</Text>
      <View style={{ flexDirection: "row", gap: 12, backgroundColor: "#2A2F37", borderRadius: 5, padding: 14, marginTop: 18, borderLeftWidth: 3, borderLeftColor: "#6AA0C8" }}>
        <Text style={{ fontSize: 9, fontWeight: 700, color: "#6AA0C8", letterSpacing: 1, textTransform: "uppercase", width: 90 }}>Главное практическое следствие</Text>
        <Text style={{ fontSize: 12, color: "#E7E3DA", lineHeight: 1.45, flex: 1 }}>Рынок нужно анализировать не как единый рейтинг отраслей, а как сочетание трёх видов спроса — со стороны инвесторов, корпораций и институтов развития.</Text>
      </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: "#363B43", paddingTop: 12 }}>
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
