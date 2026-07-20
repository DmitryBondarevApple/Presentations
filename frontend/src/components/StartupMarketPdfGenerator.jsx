/**
 * Startup Market (Рынок стартапов в России) — PDF Generator
 * 27 slides, A4 Landscape, premium consulting palette, text-dense (verbatim report text + tables).
 * Pre-generates Light and Dark themes. Charts are pre-rendered PNGs.
 */
import React from "react";
import { Document, Page, View, Text, Image, Link, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;
const TOTAL = 39;

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
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: "24 36" });

const Header = ({ num, label, color }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
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

const RESEARCH_URL = "https://startupscoring.ru/research";
const DownloadCTA = ({ ib, w }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 11, backgroundColor: "#1B3A5B", borderRadius: 6, padding: 10, width: w }}>
    <View style={{ backgroundColor: "#ffffff", borderRadius: 5, padding: 4.5 }}>
      <Image src={`${ib}/images/startup-market/qr-research.png`} style={{ width: 58, height: 58 }} />
    </View>
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 7.5, fontWeight: 700, color: "#E8A66A", letterSpacing: 1.4, textTransform: "uppercase", marginBottom: 3 }}>Полное исследование</Text>
      <Text style={{ fontSize: 12.5, fontWeight: 700, color: "#F7F5EF", lineHeight: 1.2 }}>Скачайте полную версию исследования</Text>
      <Link src={RESEARCH_URL} style={{ fontSize: 9, fontWeight: 700, color: "#EAF0F5", marginTop: 4, textDecoration: "none" }}>startupscoring.ru/research →</Link>
    </View>
  </View>
);

const GroupHead = ({ children, accent }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 8, marginBottom: 14 }}>
    <View style={{ width: 5, height: 20, borderRadius: 2, backgroundColor: accent }} />
    <Text style={{ fontSize: 16, fontWeight: 700, color: T.fg }}>{children}</Text>
  </View>
);

const TeamMember = ({ ib, photo, initials, name, role, accent }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginBottom: 13 }}>
    {photo ? (
      <Image src={`${ib}/images/startup-market/team/${photo}`} style={{ width: 58, height: 58, borderRadius: 29, objectFit: "cover" }} />
    ) : (
      <View style={{ width: 58, height: 58, borderRadius: 29, backgroundColor: T.navySoft, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 15.5, fontWeight: 700, color: accent }}>{initials}</Text>
      </View>
    )}
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg }}>{name}</Text>
      <Text style={{ fontSize: 11, color: T.muted, marginTop: 2 }}>{role}</Text>
    </View>
  </View>
);

const STeam = ({ ib }) => (
  <Page size={[PW, PH]} style={ps()}><Header num={2} label="Рабочая группа исследования" />
    <H size={22}>Рабочая группа исследования</H>
    <View style={{ height: 6 }} />
    <View style={{ flexDirection: "row", gap: 44, flex: 1 }}>
      <View style={{ flex: 1 }}>
        <GroupHead accent={T.terra}>Газпромнефть  |  Startup Drive</GroupHead>
        <TeamMember ib={ib} photo="onishchenko.jpg" name="Максим Онищенко" role="Руководитель корпоративного акселератора StartupDrive" accent={T.terra} />
        <TeamMember ib={ib} photo="kateneva.jpg" name="Кристина Катенева" role="Менеджер по масштабированию активов" accent={T.terra} />
        <TeamMember ib={ib} photo="kopytova.jpg" name="Елизавета Копытова" role="Дизайнер" accent={T.terra} />
      </View>
      <View style={{ flex: 1 }}>
        <GroupHead accent={T.navy}>Команда Hop.Agency</GroupHead>
        <TeamMember ib={ib} photo="bondarev.jpg" name="Дмитрий Бондарев" role="Руководитель проекта исследования" accent={T.navy} />
        <TeamMember ib={ib} photo="tyrkba-v2.jpg" initials="ХТ" name="Ханифа Тыркба" role="Аналитик, выпускающий редактор" accent={T.navy} />
        <TeamMember ib={ib} photo="starostina.jpg" initials="НС" name="Наталья Старостина" role="Аналитик-интервьюер" accent={T.navy} />
        <TeamMember ib={ib} photo="bondarenko.jpg" name="Сергей Бондаренко" role="Аналитик-интервьюер" accent={T.navy} />
        <TeamMember ib={ib} photo="bataeva.jpg" initials="ЕБ" name="Екатерина Батаева" role="Координатор проекта" accent={T.navy} />
      </View>
    </View>
  </Page>
);


const H = ({ children, size = 22 }) => <Text style={{ fontSize: size, fontWeight: 700, color: T.fg, marginBottom: 9, lineHeight: 1.12 }}>{children}</Text>;
const P = ({ children, size = 11, mb = 7 }) => <Text style={{ fontSize: size, color: T.body, lineHeight: 1.45, marginBottom: mb, textAlign: "justify" }}>{children}</Text>;
const Label = ({ children }) => <Text style={{ fontSize: 10.5, fontWeight: 700, color: T.fg, marginBottom: 5 }}>{children}</Text>;

const Li = ({ children, accent, size = 10.5 }) => (
  <View style={{ flexDirection: "row", gap: 6, alignItems: "flex-start", marginBottom: 4 }}>
    <View style={{ width: 4, height: 4, backgroundColor: accent || T.navy, marginTop: 5, transform: "rotate(45deg)" }} />
    <Text style={{ fontSize: size, color: T.body, lineHeight: 1.38, flex: 1 }}>{children}</Text>
  </View>
);

const Defn = ({ label, children, accent, size = 10 }) => (
  <Text style={{ fontSize: size, color: T.body, lineHeight: 1.4, marginBottom: 5 }}>
    <Text style={{ fontWeight: 700, color: accent || T.navy }}>{label}</Text>
    <Text> {children}</Text>
  </Text>
);

const Cols = ({ children, gap = 44 }) => <View style={{ flexDirection: "row", gap }}>{children}</View>;
const Col = ({ children }) => <View style={{ flex: 1 }}>{children}</View>;

const NumHead = ({ n, children, accent }) => (
  <View style={{ flexDirection: "row", gap: 5, alignItems: "baseline", marginBottom: 4 }}>
    <Text style={{ fontSize: 12, fontWeight: 700, color: accent || T.navy }}>{n}.</Text>
    <Text style={{ fontSize: 10.5, fontWeight: 700, color: T.fg, flex: 1, lineHeight: 1.2 }}>{children}</Text>
  </View>
);

const Subhead = ({ children, accent }) => (
  <Text style={{ fontSize: 11, fontWeight: 700, color: T.fg, marginBottom: 5, borderLeftWidth: 3, borderLeftColor: accent || T.navy, paddingLeft: 7 }}>{children}</Text>
);

const NoteP = ({ children, label = "Практическое следствие:", accent }) => (
  <Text style={{ fontSize: 8.5, color: T.muted, lineHeight: 1.35, marginTop: 4, marginBottom: 7 }}>
    <Text style={{ fontWeight: 700, color: accent || T.navy }}>{label} </Text>{children}
  </Text>
);

const Card = ({ children, accent }) => (
  <View style={{
    flex: 1, backgroundColor: T.panel, borderRadius: 5, padding: 11,
    borderTopWidth: accent ? 2.5 : 1, borderTopColor: accent || T.line,
    borderBottomWidth: 1, borderBottomColor: T.line,
    borderLeftWidth: 1, borderLeftColor: T.line, borderRightWidth: 1, borderRightColor: T.line,
  }}>{children}</View>
);

const Stat = ({ value, label, accent }) => (
  <View style={{
    flex: 1, backgroundColor: T.panel, borderRadius: 5, padding: 10,
    borderTopWidth: 1, borderTopColor: T.line, borderBottomWidth: 1, borderBottomColor: T.line,
    borderRightWidth: 1, borderRightColor: T.line, borderLeftWidth: 3, borderLeftColor: accent || T.navy,
  }}>
    <Text style={{ fontSize: 19, fontWeight: 700, color: T.fg }}>{value}</Text>
    <Text style={{ fontSize: 7.5, color: T.muted, marginTop: 4, letterSpacing: 0.4, textTransform: "uppercase", lineHeight: 1.25 }}>{label}</Text>
  </View>
);

const Takeaway = ({ children, label = "Главный вывод", accent }) => (
  <View style={{ flexDirection: "row", gap: 12, backgroundColor: T.panel, borderRadius: 5, padding: 11, marginTop: 9, borderLeftWidth: 3, borderLeftColor: accent || T.navy }}>
    <Text style={{ fontSize: 9, fontWeight: 700, color: accent || T.navy, letterSpacing: 1, textTransform: "uppercase", width: 80 }}>{label}</Text>
    <Text style={{ fontSize: 10, color: T.body, lineHeight: 1.4, flex: 1 }}>{children}</Text>
  </View>
);

const TableC = ({ headers, rows, weights = [1.1, 1.5, 1.5], accent }) => {
  const total = weights.reduce((a, b) => a + b, 0);
  const pct = weights.map((w) => `${((w / total) * 100).toFixed(2)}%`);
  return (
    <View style={{ borderWidth: 1, borderColor: T.line, borderRadius: 4, overflow: "hidden" }}>
      <View style={{ flexDirection: "row", backgroundColor: accent || T.navy, paddingVertical: 5, paddingHorizontal: 9 }}>
        {headers.map((h, i) => (
          <Text key={i} style={{ width: pct[i], fontSize: 7, fontWeight: 700, color: "#EAF0F5", textTransform: "uppercase", letterSpacing: 0.4, paddingRight: 6 }}>{h}</Text>
        ))}
      </View>
      {rows.map((cells, i) => (
        <View key={i} style={{ flexDirection: "row", paddingVertical: 5, paddingHorizontal: 9, backgroundColor: i % 2 ? T.panel : T.bg, borderTopWidth: 1, borderTopColor: T.line }}>
          {cells.map((c, j) => (
            <Text key={j} style={{ width: pct[j], fontSize: 8.5, lineHeight: 1.3, color: j === 0 ? T.fg : T.body, fontWeight: j === 0 ? 700 : 400, paddingRight: 6 }}>{c}</Text>
          ))}
        </View>
      ))}
    </View>
  );
};

const ChartText = ({ ib, num, label, accent, vis, title, children, footer }) => (
  <Page size={[PW, PH]} style={ps()}>
    <Header num={num} label={label} color={accent} />
    <H size={20}>{title}</H>
    <View style={{ flexDirection: "row", gap: 18, flex: 1 }}>
      <View style={{ width: 300, paddingTop: 21 }}>{children}</View>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "flex-start" }}>
        <Image src={`${ib}/images/startup-market/${T.png}/${vis}.png`} style={{ width: 445, height: 258 }} />
      </View>
    </View>
    {footer}
  </Page>
);

/* ═══════════ SLIDES ═══════════ */

const S01 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: "28 44", color: T.fg }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: T.muted, letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
      <Text style={{ fontSize: 9, color: T.dim, letterSpacing: 2, textTransform: "uppercase" }}>Аналитическое исследование</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "center" }}>
      <Text style={{ fontSize: 11, fontWeight: 700, color: T.terra, letterSpacing: 2, textTransform: "uppercase", marginBottom: 11 }}>Отчёт об исследовании рынка</Text>
      <Text style={{ fontSize: 38, fontWeight: 700, color: T.fg, lineHeight: 1.05 }}>Рынок стартапов в России</Text>
      <Text style={{ fontSize: 15, fontWeight: 700, color: T.fg, marginTop: 11, maxWidth: 640, lineHeight: 1.35 }}>Различие спроса со стороны инвесторов, корпораций и институтов развития</Text>
      <Text style={{ fontSize: 11, color: T.body, marginTop: 9, maxWidth: 720, lineHeight: 1.5 }}>
        Исследование показывает, что российский рынок стартапов нельзя описывать одной шкалой привлекательности. Для разных участников рынка важны разные признаки: инвесторы оценивают потенциал роста и возврата инвестиций, корпорации — применимость решения к задачам бизнеса, институты развития — технологическую значимость, локализацию и вклад в экономику.
      </Text>
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginTop: 16 }}>
        <View style={{ width: 9, height: 18, borderRadius: 2, backgroundColor: T.navy }} />
        <View style={{ width: 9, height: 28, borderRadius: 2, backgroundColor: T.green }} />
        <View style={{ width: 9, height: 38, borderRadius: 2, backgroundColor: T.terra }} />
      </View>
    </View>
    <View style={{ marginBottom: 11 }}>
      <DownloadCTA ib={ib} w={360} />
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: T.line, paddingTop: 11 }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: T.muted, letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
      <Text style={{ fontSize: 9, color: T.muted }}>hop.agency · startupdrive.ru</Text>
    </View>
  </Page>
);

const S02 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={3} label="Главный вывод" />
    <H>Рынок как система нескольких видов спроса</H>
    <Cols>
      <Col><P size={12} mb={0}>Исследование описывает российский рынок стартапов как систему нескольких видов спроса: рыночного, инвесторского и корпоративного. Такой подход позволяет одновременно оценить масштаб отраслевых направлений и основные сценарии развития и коммерциализации стартапов: привлечение венчурного капитала и последующие раунды, корпоративные пилоты и внедрения, стратегические партнёрства, закупки, долгосрочные договоры, M&A и гибридные сценарии. Поэтому в отчёте сопоставляются три вида спроса: со стороны рынка в целом, со стороны инвесторов и со стороны корпоративного сектора.</P></Col>
      <Col><P size={12} mb={0}>Исследование показывает, что российский рынок стартапов развивается как совокупность нескольких механизмов спроса. В одних сегментах ключевую роль играет венчурный капитал, в других — корпоративные заказчики, в третьих — институты развития, отраслевые программы, пилоты и стратегические партнёрства. Поэтому ценность стартапа определяется не только принадлежностью к перспективной отрасли, но и зрелостью продукта, доказанным спросом, юридической структурой, правами на технологию, готовностью к внедрению и понятным сценарием роста или выхода.</P></Col>
    </Cols>
  </Page>
);

const S03 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={4} label="Методология" />
    <H>Комбинированный анализ количественных и качественных данных</H>
    <P>Исследование построено как комбинированный анализ количественных и качественных данных. Количественная часть показывает структуру предложения стартапов и относительную силу спроса со стороны инвесторов и корпоративного сектора. Качественная часть объясняет, какие критерии фактически используют инвесторы, корпорации и институты развития при отборе стартапов.</P>
    <Cols gap={10}>
      <Stat value="4 445" label="стартапов" accent={T.navy} />
      <Stat value="2 944" label="сигнала интереса" accent={T.navy} />
      <Stat value="1 820" label="инвесторов · 244 корпорации" accent={T.green} />
      <Stat value="12" label="экспертных интервью" accent={T.terra} />
    </Cols>
    <View style={{ height: 9 }} />
    <P mb={0}>Качественный анализ основан на экспертных интервью с представителями фондов, корпоративных участников рынка, институтов развития и операторов отраслевых программ. Интервью использовались как способ проверить выводы, объяснить расхождения между шкалами спроса и описать реальные требования к зрелости стартапов, юридической структуре, наличию интеллектуальной собственности, выручке, пилотам, интеграциям и сценариям выхода.</P>
  </Page>
);

const S04 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={5} label="Методология" />
    <H>Поиск и проверка публичных подтверждений интереса</H>
    <Cols>
      <Col>
        <P>Основой количественной части стал поиск и проверка публичных подтверждений внешнего интереса к стартапам. Для каждой компании сопоставлялись юридическое название, короткое название, бренд, название продукта, сайт, технологический домен, ИНН и отраслевые признаки.</P>
        <P mb={0}>Поиск проводился по официальным сайтам компаний, инвесторов, компаний-покупателей, акселераторов, технопарков, институтов развития, городских и отраслевых платформ, а также по профильным деловым медиа и вспомогательным базам. Найденные сигналы фиксировались только при наличии проверяемой связи между компанией, продуктом, датой события и источником.</P>
      </Col>
      <Col>
        <P>По результатам поиска события разделялись на несколько типов: инвестиции, покупки, гранты, субсидии, акселераторы, пилоты, внедрения, резидентство, реестры, витрины и другие подтверждённые признаки интереса.</P>
        <P mb={0}>На этой базе рассчитывались три показателя спроса, анализировалась сила рыночных сигналов и сопоставлялись интересы стартапов, инвесторов и корпоративных участников.</P>
      </Col>
    </Cols>
  </Page>
);

const S05 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={6} label="Логика исследования" />
    <H>Три вида спроса точнее описывают рынок, чем одна шкала</H>
    <P>Три вида спроса дают более точное описание российского рынка стартапов, чем одна универсальная шкала. Количество компаний в направлении показывает размер предложения, интерес инвесторов показывает вероятность финансирования, а корпоративный спрос показывает вероятность пилотов, внедрений, закупок и стратегических сделок. Эти три типа спроса пересекаются, но не заменяют друг друга.</P>
    <Cols>
      <Col><P mb={0}>Интегральный рейтинг полезен как первый ориентир, однако при самостоятельном использовании он сглаживает важные различия. Направление может быть крупным и заметным в общей карте рынка, но при этом быть сильнее для венчурного капитала, чем для корпоративных внедрений.</P></Col>
      <Col><P mb={0}>Обратная ситуация тоже возможна: сегмент может занимать умеренную позицию по общему показателю, но быть крайне важным для крупных заказчиков, потому что связан с безопасностью, инфраструктурой, снижением операционных рисков или обязательной технологической заменой.</P></Col>
    </Cols>
  </Page>
);

const S06 = ({ ib }) => (
  <ChartText ib={ib} num={7} label="Показатели спроса" vis="VIS-01" title="Три показателя спроса">
    <P size={9.5}>Интегральный показатель спроса объединяет в одной оценке качество стартапов, уровень интереса со стороны инвесторов и уровень интереса со стороны корпоративного сектора. Он показывает, в каких направлениях одновременно присутствуют стартапы с сильными сигналами, инвесторы с релевантным интересом и корпорации, для которых решения применимы.</P>
    <P size={9.5} mb={0}>Интегральный показатель задаёт общую карту привлекательности, а различия между сценариями развития становятся видны при сопоставлении его с инвесторской и корпоративной шкалами. В одном направлении стартап растёт за счёт венчурного финансирования, в другом — за счёт корпоративных пилотов, контрактов и стратегической сделки. Поэтому используются три взаимодополняющих показателя.</P>
  </ChartText>
);

const S07 = ({ ib }) => (
  <ChartText ib={ib} num={8} label="Интегральный показатель" vis="VIS-02" title="Лидеры по интегральному показателю">
    <P size={9.5}>Интегральный показатель отмечает направления, где одновременно есть значимое число стартапов, компании с сильными рыночными сигналами и релевантные инвесторы и корпоративные заказчики. Он показывает не единственного лидера, а зоны максимальной плотности предложения и спроса.</P>
    <P size={9.5}>Enterprise Solution лидирует за счёт базовой роли корпоративного ПО. AI/ML рядом, но это горизонтальный технологический домен, понятный только в привязке к отраслевым задачам. HealthTech, MedTech и EdTech — верхняя группа сбалансированных направлений.</P>
    <P size={9.5} mb={0}>Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech, FinTech, Cybersecurity и E-commerce, RetailTech входят в топ-10, но различаются основным сценарием. Поэтому топ-10 — стартовая карта, а не итоговый рейтинг привлекательности каждой компании.</P>
  </ChartText>
);

const S08 = ({ ib }) => (
  <ChartText ib={ib} num={9} label="Спрос инвесторов" accent={T.green} vis="VIS-03" title="Спрос со стороны инвесторов">
    <P size={9.5}>Спрос со стороны инвесторов показывает концентрацию релевантного капитала вокруг направления и вероятность финансирования. Важны число инвесторов, глубина совпадений со стартапами и наличие компаний, достаточно зрелых для финансирования.</P>
    <P size={9.5}>AI/ML — явный лидер, но это не отменяет требований к стартапу: нужны задача, данные, преимущество, эффект и сценарий выхода. HealthTech, MedTech, Enterprise Solution и EdTech сильны по разным причинам.</P>
    <P size={9.5} mb={0}>FinTech, Energy, CleanTech, E-commerce, RetailTech и Cybersecurity — в верхней части шкалы, но не равнозначны: одни конкурентны и требуют проверки экономики, другие — длинного цикла продаж и отраслевой экспертизы. Отраслевой интерес дополняется проверкой стадии, команды, структуры и сценария возврата капитала.</P>
  </ChartText>
);

const S09 = ({ ib }) => (
  <ChartText ib={ib} num={10} label="Корпоративный спрос" accent={T.terra} vis="VIS-04" title="Спрос со стороны корпоративного сектора">
    <P size={9.5}>Корпоративная шкала показывает, где стартап востребован как решение конкретной бизнес-задачи, в том числе без инвестиций корпорации. Важны применимость, наличие заказчиков, готовность к пилоту, интеграциям, безопасности и переходу к промышленному использованию.</P>
    <P size={9.5}>Enterprise Solution на первом месте, но требует работы с инфраструктурой, безопасностью, SLA и согласованиями. Высокие позиции EdTech и HealthTech, MedTech показывают, что корпоративный спрос не ограничен промышленностью.</P>
    <P size={9.5} mb={0}>Cybersecurity — 4-е место: безопасность, данные, локализация и доверие — условия допуска. AI/ML ниже как самостоятельная категория: корпорации покупают результат в процессе, поэтому AI/ML-продажа начинается с задачи бизнеса.</P>
  </ChartText>
);

const S10 = ({ ib }) => (
  <ChartText ib={ib} num={11} label="Сравнение шкал" vis="VIS-05" title="Что показывает сравнение трёх шкал">
    <P size={9.5}>Сравнение трёх шкал превращает набор рейтингов в карту рынка для управленческих решений: одинаковое место в общем рейтинге может скрывать разные траектории развития стартапа.</P>
    <P size={9.5}>Enterprise Solution, HealthTech, MedTech и EdTech — гибридные направления. AI/ML — другой тип: сила в инвесторском спросе, но для выручки нужна привязка к отрасли, данным и эффекту; это сквозной домен, а не вертикаль.</P>
    <P size={9.5} mb={0}>Industrial, Manufacturing и Cybersecurity держатся на корпоративном спросе — венчурный взгляд недооценивает их без учёта пилотов, договоров и сделок. Институтам развития сравнение показывает, какие инструменты нужны разным сегментам.</P>
  </ChartText>
);

const S11 = ({ ib }) => (
  <ChartText ib={ib} num={12} label="Кейс направления" accent={T.green} vis="VIS-06" title="Почему Cybersecurity выделен отдельно">
    <P size={10}>Cybersecurity выделен отдельно, потому что этот сегмент хорошо показывает ограниченность анализа рынка по одной шкале. В общем интегральном рейтинге направление занимает 9-е место, но при переходе к корпоративной шкале поднимается на 4-е место и получает высокий уровень релевантности для корпоративного выхода.</P>
    <P size={10} mb={0}>Для инвесторов Cybersecurity привлекателен не только за счёт роста выручки и раундов, но и за счёт стратегического интереса крупных покупателей. Для корпораций это зона закупок, пилотов, внедрений и приобретения компетенций. Для институтов развития — элемент технологической устойчивости и доверия к цифровой инфраструктуре.</P>
  </ChartText>
);

const S12 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={13} label="Качественная часть" />
    <H>Интервью объясняют, почему количественные шкалы расходятся</H>
    <Label>В исследовании использованы 12 интервью с тремя группами участников:</Label>
    <Li>Фонды, частные инвесторы и клубы;</Li>
    <Li accent={T.green}>Государственные и институциональные участники;</Li>
    <Li accent={T.terra}>Корпоративные участники и корпоративные инновационные функции.</Li>
    <View style={{ height: 6 }} />
    <P mb={0}>Интервью помогают отделить формальный отраслевой интерес от реального спроса. Направление может быть заметным в базе стартапов, но слабым для инвестора из-за недостаточной зрелости компаний. Другое направление может не выглядеть лидером в интегральной шкале, но быть важным для корпораций, если оно связано с безопасностью, данными, инфраструктурой, интеграциями или снижением операционных рисков.</P>
    <Takeaway>Спрос на стартапы не является единым. Каждый тип участника рынка использует собственные критерии оценки.</Takeaway>
  </Page>
);

const S13 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={14} label="Общий тренд" />
    <H>От интереса к теме — к проверке зрелости</H>
    <P>Идея или сырой MVP редко являются достаточным основанием для финансирования, пилота или стратегического интереса. Участники рынка всё чаще требуют доказательств зрелости:</P>
    <TableC
      headers={["Критерий зрелости", "Что проверяет участник рынка", "Практическое следствие для стартапа"]}
      rows={[
        ["Выручка и клиенты", "Есть ли подтверждённый спрос и готовность платить", "Стартап должен показывать не только потенциал рынка, но и фактические продажи или понятный путь к ним"],
        ["Работающий продукт", "Можно ли проверить решение в реальном или близком к реальному процессе", "Презентации недостаточно, особенно для B2B, B2G, промышленности и корпоративного ПО"],
        ["Пилот или внедрение", "Есть ли доказательство применимости у заказчика", "Пилот должен иметь метрики, владельца процесса и понятный переход к договору"],
        ["Права на технологию", "Контролирует ли команда ключевой актив", "Для deep tech, AI/ML, Industrial, Biotech, MedTech и Cybersecurity — часть инвестиционной и институциональной оценки"],
        ["Готовность к масштабированию", "Может ли продукт выдержать рост спроса или корпоративное внедрение", "Для Media for Equity, CVC и крупных заказчиков важна способность сохранить рост после первого успеха"],
      ]}
    />
  </Page>
);

const S14 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={15} label="Критерии · Инвесторы" />
    <H>Критерии инвестиционной привлекательности</H>
    <P>Инвесторы оценивают не только отрасль, но и способность стартапа превратить отраслевой интерес в рост выручки, капитализации и вероятность выхода.</P>
    <TableC
      headers={["Критерий", "Как он влияет на оценку", "Где особенно важен"]}
      rows={[
        ["Размер и доступность рынка", "Определяет, может ли проект вырасти до масштаба, интересного инвестору", "AI/ML, HealthTech, MedTech, Enterprise Solution, FinTech, EdTech"],
        ["Traction и выручка", "Снижает риск того, что спрос существует только на уровне гипотезы", "Consumer, B2B SaaS, маркетплейсы, Media for Equity, корпоративные продукты"],
        ["Команда и фокус основателей", "Показывает способность пройти длинный цикл разработки, продаж и финансирования", "Почти все направления, особенно deep tech и B2B"],
        ["Юридическая структура и права", "Влияют на возможность сделки, следующего раунда, соинвестирования или стратегического входа", "Deep tech, AI/ML, Industrial, Biotech, MedTech, Cybersecurity"],
        ["Понятный сценарий выхода", "Объясняет, как инвестор сможет выйти из сделки или зафиксировать результат", "Венчурные фонды, бизнес-ангелы, CVC, частные инвесторы"],
      ]}
    />
  </Page>
);

const S15 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={16} label="Критерии · Корпорации" color={T.terra} />
    <H>Критерии готовности к корпоративному пилоту</H>
    <P>Корпоративные участники оценивают стартап по применимости к задаче бизнеса и готовности перейти от тестирования к промышленному использованию.</P>
    <TableC accent={T.terra}
      headers={["Элемент готовности", "Что проверяет корпорация", "Управленческий вывод"]}
      rows={[
        ["Бизнес-задача", "Решает ли продукт конкретную проблему подразделения", "Без задачи и владельца процесса пилот остаётся демонстрацией"],
        ["Владелец процесса", "Есть ли внутренний заказчик, готовый защищать пилот", "Инновационная функция сильна только в связке с бизнесом"],
        ["Интеграции и данные", "Может ли продукт работать с системами, API, MDM, справочниками и инфраструктурой", "Технологическая полезность не превращается во внедрение без совместимости"],
        ["Безопасность и право", "Проходит ли решение требования по данным, инфраструктуре, договору и SLA", "Особенно важно для Enterprise Solution, Cybersecurity, FinTech, Industrial, Energy"],
        ["Экономический эффект", "Можно ли обосновать внедрение после пилота", "Метрики пилота должны быть согласованы до запуска"],
        ["Масштабирование", "Можно ли распространить решение на другие подразделения, регионы или дочерние общества", "Успешный пилот должен иметь путь к договору и промышленной эксплуатации"],
      ]}
    />
  </Page>
);

const S16 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={17} label="Критерии · Институты развития" color={T.green} />
    <H>Институциональные критерии значимости</H>
    <P>Институты развития добавляют к оценке стартапа критерии технологической и институциональной значимости.</P>
    <TableC accent={T.green}
      headers={["Институциональный критерий", "Что он означает", "Практическое следствие"]}
      rows={[
        ["Технологическая зрелость", "Решение прошло лабораторную, пилотную или промышленную проверку", "Поддержка ранней идеи без валидации ограничена"],
        ["Локализация и права", "Ключевые активы, команда и интеллектуальная собственность находятся в контролируемой структуре", "Юридическая чистота становится частью технологической оценки"],
        ["Прикладная значимость", "Решение связано с задачами отрасли, города, промышленности или инфраструктуры", "Проекту нужен не только инвестор, но и площадка применения"],
        ["Стратегический интерес", "Есть заказчик, соинвестор или потенциальный покупатель", "Интерес стратега снижает риск и помогает выстроить путь к рынку"],
      ]}
    />
  </Page>
);

const S17 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={18} label="Сценарий коммерциализации" color={T.terra} />
    <H>Корпоративный выход как самостоятельный сценарий</H>
    <P>Для части российских стартапов корпоративный выход становится самостоятельным сценарием коммерциализации и может принимать разные форматы.</P>
    <TableC accent={T.terra}
      headers={["Формат коммерциализации и выхода", "Что происходит", "Для каких компаний релевантно"]}
      rows={[
        ["Коммерческий договор", "Стартап становится поставщиком решения", "Enterprise Solution, Cybersecurity, PropTech, Industrial, FinTech"],
        ["Масштабирование внутри группы", "Решение распространяется на дочерние общества, регионы или бизнес-единицы", "Oil, Gas, Energy, RetailTech, Enterprise Solution, Industrial"],
        ["Стратегическое партнёрство", "Корпорация становится каналом продаж, интегратором или отраслевым партнёром", "B2B, B2G, AI/ML, HealthTech, Industrial"],
        ["CVC-инвестиция", "Корпоративный фонд входит в капитал после проверки стратегической применимости", "Более зрелые B2B-tech компании"],
        ["Покупка технологии или команды", "Корпорация покупает актив, компетенцию или команду", "Cybersecurity, AI/ML, Enterprise Solution, deep tech"],
        ["M&A со стороны отраслевого игрока", "Стартап становится частью корпоративной группы", "Зрелые компании с подтверждённым рынком и стратегической применимостью"],
      ]}
    />
  </Page>
);

const S18 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={19} label="Технологический домен" />
    <H>AI/ML: технологический домен, а не обычная отрасль</H>
    <P>AI/ML лидирует по спросу со стороны инвесторов, но слабее выглядит в корпоративной шкале как самостоятельная категория. Причина в том, что корпоративный заказчик покупает не AI/ML как технологию, а прикладной результат: снижение затрат, ускорение процесса, повышение точности, автоматизацию ручного труда, безопасность, аналитику или повышение выручки.</P>
    <P mb={0}>Поэтому AI/ML нужно анализировать с учётом отраслей применения. Один AI-стартап может быть частью Enterprise Solution, другой — промышленной автоматизацией, третий — медицинской диагностикой, четвёртый — инструментом для ритейла, строительства, энергетики или безопасности. Для отчёта это означает, что AI/ML является не только отраслевой строкой рейтинга, но и сквозным технологическим доменом.</P>
  </Page>
);

const S19 = ({ ib }) => (
  <ChartText ib={ib} num={20} label="Типология" vis="VIS-08" title="Типология отраслевых направлений"
    footer={<Takeaway>Рынок нельзя описать одним списком отраслей. Одно и то же направление может выглядеть средним в интегральном рейтинге, но быть сильным в корпоративной шкале. Обратная ситуация также возможна.</Takeaway>}>
    <P size={9.5} mb={5}>По результатам исследования направления можно разделить на несколько групп.</P>
    <Defn label="Универсальные лидеры:" accent={T.navy}>Enterprise Solution, HealthTech, MedTech, EdTech.</Defn>
    <Defn label="Технологические домены:" accent={T.navy}>AI, ML.</Defn>
    <Defn label="Корпоративно-стратегические:" accent={T.terra}>Cybersecurity, Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech.</Defn>
    <Defn label="Зрелые конкурентные рынки:" accent={T.green}>FinTech, E-commerce, RetailTech.</Defn>
    <Defn label="Специализированные:" accent={T.muted}>Biotech, Pharma, Materials, Chemistry, Robotics, Drones.</Defn>
  </ChartText>
);

const S20 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={21} label="Универсальный лидер" />
    <H>Enterprise Solution: наиболее сильное и сбалансированное направление</H>
    <Cols>
      <Col><P size={12} mb={0}>Enterprise Solution является наиболее сильным и сбалансированным направлением рынка. Его лидерство объясняется тем, что корпоративные цифровые решения одновременно интересны инвесторам, крупным заказчикам и институтам развития. В качественном анализе этот вывод подтверждается повторяющимся интересом к B2B-решениям, корпоративному ПО, ERP, промышленному ПО, API, интеграциям, платформам и продуктам с измеримым экономическим эффектом.</P></Col>
      <Col><P size={12} mb={0}>Для стартапов в этом направлении ключевыми требованиями становятся не только продукт и рынок, но и готовность к корпоративным продажам: безопасность, интеграции, понятный владелец процесса, экономический эффект и способность пройти длинный цикл согласований.</P></Col>
    </Cols>
  </Page>
);

const S21 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={22} label="Гибридные направления" color={T.green} />
    <H>HealthTech, MedTech и EdTech: гибридные направления</H>
    <Cols>
      <Col>
        <P>HealthTech, MedTech является одним из наиболее сбалансированных направлений. Оно занимает 3-е место по интегральному показателю, 2-е место по спросу со стороны инвесторов и 3-е место по корпоративному спросу. Это говорит о сочетании трёх факторов: интереса инвесторов, прикладной применимости и институциональной значимости.</P>
        <P mb={0}>В этом направлении нельзя использовать универсальные критерии оценки. Для медицинских и биотехнологических решений важны стадия разработки, регуляторная готовность, клиническая или технологическая проверка, права на технологию, экспортный потенциал и способность пройти долгий цикл вывода продукта на рынок.</P>
      </Col>
      <Col>
        <P>EdTech занимает 4-е место по интегральному показателю и 2-е место по корпоративному спросу. Это показывает, что направление связано не только с потребительским образованием, но и с корпоративным обучением, HR, развитием персонала и прикладными образовательными сервисами.</P>
        <P mb={0}>Для стартапов в EdTech важна не только пользовательская база, но и доказанная готовность заказчиков платить, повторяемость продаж, измеримый эффект для обучения или HR-процессов, а также способность встроиться в существующую инфраструктуру клиента.</P>
      </Col>
    </Cols>
  </Page>
);

const S22 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={23} label="Корпоративно-стратегические" color={T.terra} />
    <H>Направления с преимущественно корпоративным спросом</H>
    <Cols>
      <Col>
        <P>Industrial, Manufacturing занимает 5-е место по интегральному показателю и относится к направлениям с преимущественно корпоративным спросом. Практика показывает, что промышленные технологии требуют доступа к крупным заказчикам, технологической зрелости, длительного финансирования, защиты прав, проверки в реальных условиях и способности пройти промышленное внедрение.</P>
        <P mb={0}>Для этого сегмента особенно важны корпоративные партнёрства и отраслевые заказчики. Без доступа к промышленным компаниям даже сильная технология может не перейти в коммерческое применение.</P>
      </Col>
      <Col>
        <P>Energy, CleanTech занимает 6-е место по интегральному показателю, 6-е по спросу инвесторов и 8-е по корпоративному спросу. Направление имеет смешанную природу: с одной стороны, связано с технологической и инфраструктурной повесткой, с другой — часто требует крупных заказчиков, длинного горизонта внедрения и понятной экономики проекта.</P>
        <P mb={0}>В таких направлениях особенно важны промышленная применимость, локализация, снижение издержек, энергоэффективность и способность показать эффект в конкретной инфраструктурной задаче.</P>
      </Col>
    </Cols>
  </Page>
);

const S24 = ({ ib }) => (
  <ChartText ib={ib} num={27} label="Рекомендации · Корпорации" accent={T.terra} vis="VIS-07" title="Путь корпоративного пилота: от бизнес-задачи к внедрению">
    <P size={9.5}>Корпорациям следует смотреть прежде всего на шкалу корпоративного спроса. Она показывает направления, где выше вероятность найти решения для пилотов, внедрений, закупок и стратегических партнёрств. Наиболее сильные — Enterprise Solution, EdTech, HealthTech, MedTech, Cybersecurity, FinTech, E-commerce, RetailTech, Industrial, Manufacturing, Energy, CleanTech.</P>
    <P size={9.5}>Работу следует начинать не с поиска стартапов, а с карты бизнес-задач. Перед пилотом нужно определить бизнес-заказчика; процесс, который должен измениться; метрики успеха; данные и системы; ответственных за IT, безопасность, закупки и юридические вопросы; решение после успешного пилота.</P>
    <P size={9.5} mb={0}>Без владельца процесса даже хороший стартап часто не доходит до внедрения.</P>
  </ChartText>
);

const S27 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={24} label="Рекомендации · Назначение раздела" />
    <H size={20}>От анализа — к решениям для четырёх аудиторий</H>
    <P size={10}>Результаты анализа переводятся в практические действия для четырёх групп участников рынка: инвесторов, корпораций, институтов развития и стартапов. Рекомендации основаны на трёх источниках: статистических показателях спроса, отраслевых профилях и интервью с участниками рынка. Главная задача раздела — показать, как использовать результаты исследования для принятия решений, а не только для описания состояния рынка.</P>
    <Cols gap={22}>
      <Col>
        <Subhead>Общий вывод для всех аудиторий</Subhead>
        <P size={9.5} mb={0}>Российский рынок стартапов представляет собой несколько разных рынков с разными сценариями развития и коммерциализации. В одних направлениях главным драйвером является инвестор, в других — корпоративный заказчик, в третьих — технологическая значимость, локализация, государственная повестка или стратегический покупатель. Поэтому для принятия решений следует использовать не один общий рейтинг, а три показателя:</P>
      </Col>
      <Col>
        <TableC headers={["Показатель", "Для чего использовать"]} weights={[1.3, 2]}
          rows={[
            ["Интегральный показатель спроса", "Для определения направлений, где одновременно есть стартапы, инвесторы и корпоративный спрос"],
            ["Спрос со стороны инвесторов", "Для поиска направлений, где выше вероятность финансирования и последующих раундов"],
            ["Спрос со стороны корпоративного сектора", "Для поиска направлений, где выше вероятность пилотов, внедрений, закупок и стратегических сделок"],
          ]}
        />
      </Col>
    </Cols>
    <Takeaway label="Главная ошибка">Трактовать место направления в интегральном рейтинге как окончательный вывод о его привлекательности. Cybersecurity показывает обратное: направление не входит в верхнюю группу по общему показателю, но поднимается в корпоративной шкале и должно рассматриваться как один из ключевых сегментов для крупных заказчиков.</Takeaway>
  </Page>
);

const S28 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={25} label="Рекомендации · Инвесторы" />
    <H size={20}>Разделить направления и применять три фильтра</H>
    <NumHead n={1}>Разделить направления по сценарию развития и коммерциализации</NumHead>
    <P size={9}>Инвесторам следует оценивать направления по размеру рынка, числу стартапов и наиболее вероятному сценарию возврата капитала: следующему раунду, росту капитализации, вторичной продаже доли, M&A или сделке со стратегическим покупателем.</P>
    <TableC headers={["Тип направления", "Что это означает для инвестора", "Примеры"]} weights={[1.2, 1.7, 1.2]}
      rows={[
        ["Универсальные лидеры", "Можно искать как классические венчурные сделки, так и компании с потенциалом стратегического покупателя", "Enterprise Solution, HealthTech, MedTech, EdTech"],
        ["Высокий спрос со стороны инвесторов", "Подходят для поиска компаний, способных привлекать следующие раунды и расти за счёт инвестиций", "AI/ML, HealthTech, MedTech, FinTech, Energy, CleanTech"],
        ["Корпоративно-ориентированные", "Нужно оценивать не только рост, но и применимость для крупных заказчиков, пилоты и M&A", "Cybersecurity, Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech"],
        ["Специализированные технологические", "Требуют длинного горизонта, отраслевой экспертизы, прав на технологию и специальных источников инвестиций", "Biotech, Pharma, Materials, Chemistry, Robotics, Drones"],
      ]}
    />
    <NoteP>в корпоративно-ориентированных направлениях стандартная венчурная оценка может занижать привлекательность компании, если не учитывать стратегического покупателя, внедрения и долгосрочные корпоративные договоры.</NoteP>
    <NumHead n={2}>Использовать три фильтра при первичном отборе</NumHead>
    <TableC headers={["Фильтр", "Вопрос", "Что проверять"]} weights={[1.1, 1.2, 2]}
      rows={[
        ["Рыночный фильтр", "Есть ли у направления достаточный спрос", "Позиция в трёх шкалах, число стартапов с сильными сигналами, число релевантных инвесторов и корпораций"],
        ["Фильтр зрелости", "Готов ли стартап к сделке", "Продукт, клиенты, выручка, пилоты, unit-экономика, команда"],
        ["Фильтр выхода и возврата капитала", "Как инвестор вернёт капитал", "Следующий раунд, M&A, вторичная продажа доли, стратегический покупатель, масштабирование с участием корпоративного заказчика"],
      ]}
    />
  </Page>
);

const Bcol = ({ n, accent, title, intro, items }) => (
  <View style={{ flex: 1 }}>
    <NumHead n={n} accent={accent}>{title}</NumHead>
    <Text style={{ fontSize: 8.5, color: T.muted, lineHeight: 1.35, marginBottom: 5 }}>{intro}</Text>
    {items.map((it, i) => <Li key={i} accent={accent} size={8.5}>{it}</Li>)}
  </View>
);

const S29 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={26} label="Рекомендации · Инвесторы" />
    <H size={20}>Проверять отраслевую привязку, стратегию и юридическую структуру</H>
    <View style={{ flexDirection: "row", gap: 16, flex: 1 }}>
      <Bcol n={3} title="Оценивать AI/ML с учётом отраслевой привязки"
        intro="AI/ML — лидер по спросу со стороны инвесторов, но это требует проверки отраслевой привязки конкретного стартапа, а не автоматического решения по любому AI-проекту. Инвестору следует проверять:"
        items={["Какую отраслевую задачу решает продукт;", "Какие данные использует компания и есть ли к ним устойчивый доступ;", "Почему решение лучше существующих инструментов;", "Как измеряется эффект для клиента;", "Есть ли собственное преимущество, а не только использование внешней модели;", "Кто может стать следующим инвестором, партнёром или покупателем."]}
      />
      <Bcol n={4} title="Учитывать корпоративно-стратегические сегменты"
        intro="Cybersecurity, Industrial, Manufacturing, Energy, CleanTech и часть Enterprise Solution привлекательны не только за счёт роста оценки, но и за счёт внедрений, договоров, партнёрств и M&A. Стоит оценивать:"
        items={["Наличие крупных заказчиков или пилотов;", "Готовность продукта к безопасности, интеграциям и промышленной эксплуатации;", "Возможность масштабирования внутри группы компаний или отрасли;", "Наличие стратегических покупателей;", "Экономический эффект для заказчика;", "Длину цикла продаж и достаточность капитала до следующего события, влияющего на оценку."]}
      />
      <Bcol n={5} title="Усилить проверку юридической структуры и прав на технологию"
        intro="Для российского рынка юридическая подготовка стала самостоятельным фактором привлекательности: юрисдикция, локализация, права на РИД и структура владения — обязательные условия. Минимальный список:"
        items={["Российское юридическое лицо или понятная структура владения;", "Права на технологию внутри компании;", "Отсутствие блокирующих ограничений со стороны иностранных участников;", "Здоровый состав акционеров;", "Сохранённая мотивация основателей;", "Отсутствие зависимости от одного заказчика или поставщика критической технологии."]}
      />
    </View>
  </Page>
);

const S30 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={28} label="Рекомендации · Корпорации" color={T.terra} />
    <H size={20}>Начать с карты бизнес-задач и владельца процесса</H>
    <Cols gap={22}>
      <Col>
        <NumHead n={1} accent={T.terra}>Начинать не с поиска стартапов, а с карты бизнес-задач</NumHead>
        <P size={9}>Корпоративная работа со стартапами эффективна, когда начинается с задач бизнеса. Поток входящих презентаций без внутреннего заказчика редко приводит к внедрению. Сначала нужно сформировать карту задач:</P>
        <TableC accent={T.terra} headers={["Блок задач", "Примеры"]} weights={[1.1, 2]}
          rows={[
            ["Снижение затрат", "Автоматизация ручных операций, роботизация, оптимизация закупок, снижение брака"],
            ["Рост выручки", "Новые клиентские сервисы, рост конверсии, персонализация, повышение удержания"],
            ["Управление рисками", "Кибербезопасность, контроль данных, соответствие требованиям, снижение операционных ошибок"],
            ["Повышение эффективности", "Enterprise Solution, аналитика, управление процессами, интеграция данных"],
            ["Технологическое развитие", "AI/ML, промышленная автоматизация, новые материалы, энергоэффективность"],
          ]}
        />
        <Text style={{ fontSize: 8.5, color: T.muted, lineHeight: 1.35, marginTop: 5 }}>После этого под каждую задачу нужно искать решения, а не наоборот.</Text>
      </Col>
      <Col>
        <NumHead n={2} accent={T.terra}>Назначать владельца процесса до запуска пилота</NumHead>
        <P size={9}>Наличие владельца процесса повышает вероятность того, что пилот перейдёт от демонстрации к внедрению. Владелец отвечает за задачу, данные, доступ к пользователям, оценку результата и переход к внедрению. Перед запуском пилота корпорация должна определить:</P>
        <Li accent={T.terra} size={9.5}>Кто является бизнес-заказчиком;</Li>
        <Li accent={T.terra} size={9.5}>Какой процесс меняется;</Li>
        <Li accent={T.terra} size={9.5}>Какие метрики будут улучшены;</Li>
        <Li accent={T.terra} size={9.5}>Какие данные и системы нужны стартапу;</Li>
        <Li accent={T.terra} size={9.5}>Кто отвечает за IT, безопасность, юридические вопросы и закупку;</Li>
        <Li accent={T.terra} size={9.5}>Какое решение будет принято после успешного пилота.</Li>
      </Col>
    </Cols>
  </Page>
);

const S31 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={29} label="Рекомендации · Корпорации" color={T.terra} />
    <H size={20}>Ввести стандартный паспорт пилота</H>
    <NumHead n={3} accent={T.terra}>Единый паспорт пилота снижает неопределённость для всех сторон</NumHead>
    <P size={10}>Для ускорения работы со стартапами корпорациям нужен единый паспорт пилота. Он снижает неопределённость для всех сторон и помогает отделить эксперимент от будущего внедрения. Паспорт пилота должен включать:</P>
    <TableC accent={T.terra} headers={["Раздел", "Содержание"]} weights={[1.1, 3]}
      rows={[
        ["Бизнес-задача", "Какая проблема решается и почему она важна"],
        ["Владелец процесса", "Кто отвечает за результат внутри корпорации"],
        ["Границы пилота", "Подразделение, объект, регион, пользователи, данные, срок"],
        ["Метрики успеха", "Экономия, рост выручки, сокращение времени, снижение ошибок, безопасность"],
        ["Интеграции", "Системы, API, MDM, справочники, обмен данными"],
        ["Безопасность", "Требования к данным, инфраструктуре, доступам и хранению информации"],
        ["Экономика", "Стоимость пилота, стоимость внедрения, ожидаемый эффект"],
        ["Решение после пилота", "Договор, масштабирование, повторный пилот, отказ или инвестиционное рассмотрение"],
      ]}
    />
  </Page>
);

const S32 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={30} label="Рекомендации · Корпорации" color={T.terra} />
    <H size={20}>Разделять сценарии и приоритизировать направления</H>
    <Cols gap={22}>
      <Col>
        <NumHead n={4} accent={T.terra}>Разделять пилот, закупку и инвестицию</NumHead>
        <P size={9}>Важно разделять разные сценарии: протестировать продукт, купить решение или войти в капитал. Для многих стартапов коммерческий договор реалистичнее и полезнее инвестиции.</P>
        <TableC accent={T.terra} headers={["Сценарий", "Когда подходит"]} weights={[1.2, 2]}
          rows={[
            ["Пилот", "Когда нужно проверить применимость решения на реальном процессе"],
            ["Закупка", "Когда продукт зрелый, эффект понятен, внедрение не требует изменения стратегии"],
            ["Стратегическое партнёрство", "Когда продукт усиливает каналы, данные, клиентскую базу или отраслевую позицию"],
            ["Инвестиция CVC", "Когда есть стратегическая синергия, потенциал роста капитализации и готовность к долгосрочному участию"],
            ["M&A", "Когда технология, команда или рынок настолько значимы, что их нужно встроить в группу компаний"],
          ]}
        />
      </Col>
      <Col>
        <NumHead n={5} accent={T.terra}>Приоритизировать направления с высокой корпоративной релевантностью</NumHead>
        <TableC accent={T.terra} headers={["Направление", "Почему важно"]} weights={[1.3, 2]}
          rows={[
            ["Enterprise Solution", "Прямая применимость к цифровизации процессов, данным, аналитике и автоматизации"],
            ["Cybersecurity", "Защита данных, инфраструктуры, цифровых сервисов и соответствие требованиям безопасности"],
            ["FinTech", "Платежи, скоринг, финансовые процессы, безопасность, проектное финансирование"],
            ["Industrial, Manufacturing", "Производительность, снижение затрат, безопасность, автоматизация и промышленная эффективность"],
            ["Energy, CleanTech", "Энергоэффективность, инфраструктура, электромобильность, снижение рисков и затрат"],
            ["E-commerce, RetailTech", "Клиентские сервисы, торговые процессы, маркетинг, лояльность, ритейловые операции"],
            ["PropTech, ConstructionTech", "Контроль строительства, BIM, цифровые двойники, интеграции, проектное финансирование"],
          ]}
        />
      </Col>
    </Cols>
  </Page>
);

const S33 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={31} label="Рекомендации · Институты развития" color={T.green} />
    <H size={20}>Поддерживать связку «стартап — заказчик — пилот — внедрение»</H>
    <NumHead n={1} accent={T.green}>Поддерживать стартапы и доступ к спросу</NumHead>
    <P size={10}>Для многих стартапов ключевыми дефицитами становятся финансирование, доступ к заказчику, пилотная площадка, данные, отраслевая экспертиза, юридическая подготовка и понятный маршрут от пилота к договору. Институтам развития следует смещать акцент с абстрактной поддержки стартапов на поддержку связки «стартап — заказчик — пилот — внедрение».</P>
    <NumHead n={2} accent={T.green}>Использовать разные инструменты для разных типов направлений</NumHead>
    <TableC accent={T.green} headers={["Тип направления", "Приоритетная поддержка"]} weights={[1.3, 2.6]}
      rows={[
        ["Универсальные лидеры", "Ускорение сделок, поддержка масштабирования, стандарты комплексной проверки, международная и межрегиональная экспансия"],
        ["Высокий спрос со стороны инвесторов", "Подготовка к следующим раундам, отраслевые демонстрации, проверка рынка, доступ к капиталу"],
        ["Корпоративно-ориентированные сегменты", "Пилотные площадки, заказчики, паспорт пилота, софинансирование внедрений, помощь с безопасностью и закупками"],
        ["Специализированные технологические направления", "Длинный капитал, права на технологию, лаборатории, испытания, сертификация, локализация"],
        ["Нишевые направления", "Отраслевые программы, специализированные заказчики, точечная экспертиза, проверка экономического эффекта"],
      ]}
    />
  </Page>
);

const S34 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={32} label="Рекомендации · Институты развития" color={T.green} />
    <H size={20}>Программы пилотов и юридико-технологическая готовность</H>
    <View style={{ flexDirection: "row", gap: 22, flex: 1 }}>
      <Bcol n={3} accent={T.green} title="Создать программы корпоративных пилотов с чёткими задачами"
        intro="Эффективность программ зависит от того, начинаются ли они с заранее описанных задач корпораций. Более эффективный формат — сначала собрать задачи заказчиков, затем искать решения. Программа должна включать:"
        items={["Перечень задач от корпораций и отраслевых заказчиков;", "Требования к зрелости стартапа;", "Условия доступа к данным и инфраструктуре;", "Типовой паспорт пилота;", "Механизм софинансирования;", "Порядок оценки результата;", "Быстрый маршрут к коммерческому договору;", "Публичную аналитику по завершённым пилотам."]}
      />
      <Bcol n={4} accent={T.green} title="Помогать проходить юридическую и технологическую подготовку"
        intro="Юридическая неготовность может блокировать сделки даже при наличии рынка. Особенно это важно для AI/ML, Industrial, Biotech, Materials, Robotics, Cybersecurity. Приоритетные инструменты:"
        items={["Проверка прав на результаты интеллектуальной деятельности;", "Подготовка cap table к сделке;", "Юридическая упаковка российской структуры;", "Проверка импортозависимости;", "Подготовка документов для пилота и комплексной проверки;", "Помощь с требованиями информационной безопасности."]}
      />
    </View>
  </Page>
);

const S35 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={33} label="Рекомендации · Институты развития" color={T.green} />
    <H size={20}>Использовать разрывы между шкалами как карту вмешательства</H>
    <NumHead n={5} accent={T.green}>Разрывы между шкалами спроса подсказывают тип поддержки</NumHead>
    <P size={10}>Если направление сильно в корпоративной шкале, но слабее по спросу со стороны инвесторов, это сигнал, что стартапам нужен доступ к заказчикам и пилотам. Если направление сильно по спросу со стороны инвесторов, но слабее в корпоративной шкале, ему нужны коммерциализация и проверка прикладного спроса.</P>
    <TableC accent={T.green} headers={["Разрыв", "Что делать институту развития"]} weights={[1.5, 2.4]}
      rows={[
        ["Высокий корпоративный спрос, слабее спрос со стороны инвесторов", "Создавать пилоты, закупочные треки, отраслевые витрины и механизмы первых внедрений"],
        ["Высокий спрос со стороны инвесторов, слабее корпоративный спрос", "Помогать с коммерциализацией, первыми клиентами, подтверждением экономического эффекта"],
        ["Высокое качество стартапов, слабый спрос", "Искать причины: слабая упаковка, нет заказчиков, нет капитала, неясная отрасль, юридические барьеры"],
        ["Высокий спрос, мало сильных стартапов", "Развивать специализированные акселераторы, исследовательские заделы, пилотные площадки и отраслевые программы"],
      ]}
    />
  </Page>
);

const S36 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={34} label="Рекомендации · Стартапы" />
    <H size={20}>Определить тип спроса и подготовить материалы под аудиторию</H>
    <Cols gap={22}>
      <Col>
        <NumHead n={1}>Определить основной тип спроса</NumHead>
        <P size={9}>Стартапу нужно понимать, в какой траектории он находится. Ошибка в выборе траектории приводит к неправильной упаковке, не тем переговорам и потере времени.</P>
        <TableC headers={["Основной тип спроса", "Что важно показать"]} weights={[1.2, 2]}
          rows={[
            ["Спрос со стороны инвесторов", "Рынок, рост, команда, выручка, unit-экономика, следующий раунд, сценарий выхода"],
            ["Корпоративный спрос", "Задача заказчика, пилот, внедрение, интеграции, безопасность, экономический эффект"],
            ["Технологический спрос", "Права на технологию, УГТ, испытания, локализация, импортонезависимость, стратегическая значимость"],
            ["Потребительский спрос", "Массовая аудитория, бренд, дистрибуция, экономика привлечения, готовность к масштабированию"],
            ["Гибридный спрос", "Связка капитала, корпоративного заказчика, пилотов и следующего этапа роста"],
          ]}
        />
      </Col>
      <Col>
        <NumHead n={2}>Подготовить разные версии материалов для разных аудиторий</NumHead>
        <P size={9}>Венчурный фонд, корпоративный заказчик, институт развития и стратегический покупатель смотрят на разные риски.</P>
        <TableC headers={["Аудитория", "Что должно быть в материалах"]} weights={[1.2, 2.2]}
          rows={[
            ["Венчурный фонд", "Рынок, рост, команда, метрики, экономика, конкуренты, план использования средств, следующий раунд"],
            ["Корпорация", "Бизнес-задача, эффект, пилот, интеграции, безопасность, данные, внедрение, стоимость владения"],
            ["Институт развития", "Локализация, технологическая значимость, права на РИД, российская структура, эффект для отрасли или территории"],
            ["Стратегический покупатель", "Синергии, технология, команда, клиентская база, интеграция, сценарий контроля или партнёрства"],
            ["Media for Equity", "Массовый рынок, бренд, дистрибуция, средний чек, готовность к росту спроса, производственная ёмкость"],
          ]}
        />
      </Col>
    </Cols>
  </Page>
);

const S37 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={35} label="Рекомендации · Стартапы" />
    <H size={20}>Готовность к пилоту и к сделке — до переговоров</H>
    <View style={{ flexDirection: "row", gap: 22, flex: 1 }}>
      <Bcol n={3} title="Не выходить к корпорации без готовности к пилоту"
        intro="Для корпоративного заказчика недостаточно рассказать о технологии. Нужно показать, как решение будет проверено и внедрено. Перед разговором с корпорацией стартап должен подготовить:"
        items={["Описание конкретной бизнес-задачи;", "Метрики пилота;", "План доступа к данным;", "Техническую схему интеграции;", "Требования к безопасности;", "Смету пилота и внедрения;", "Расчёт экономического эффекта;", "План перехода к промышленной эксплуатации."]}
      />
      <Bcol n={4} title="Подготовить юридическую структуру до переговоров о сделке"
        intro="Слабая юридическая структура может заблокировать сделку на позднем этапе. Заранее привести в порядок:"
        items={["Российское юридическое лицо или понятную структуру владения;", "Права на результаты интеллектуальной деятельности;", "Договоры с разработчиками и ключевыми сотрудниками;", "Cap table и мотивацию основателей;", "Отсутствие критических обязательств перед одним заказчиком;", "Права на данные, модели, код, патенты или ноу-хау;", "Документы для комплексной проверки."]}
      />
    </View>
  </Page>
);

const S38 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={36} label="Рекомендации · Стартапы" />
    <H size={20}>Оценивать привлекательность направления вместе со зрелостью</H>
    <NumHead n={5}>Приоритетное направление само по себе не гарантирует интереса</NumHead>
    <P size={10}>Приоритетное направление само по себе не гарантирует интереса к конкретной компании. Стартап должен сопоставить позицию направления с собственной готовностью.</P>
    <TableC headers={["Вопрос", "Почему важен"]} weights={[1.6, 2]}
      rows={[
        ["Есть ли продукт, а не только идея", "Большинство участников рынка не рассматривает идею без проверки"],
        ["Есть ли клиенты, выручка или пилот", "Это доказывает, что спрос уже существует"],
        ["Есть ли понятный рынок", "Без масштаба нет венчурной доходности или стратегического интереса"],
        ["Есть ли экономический эффект", "Без эффекта корпорация не перейдёт к внедрению"],
        ["Есть ли команда для длинного цикла", "Финансирование, пилот и внедрение требуют устойчивости"],
        ["Есть ли юридическая готовность", "Иначе сделка остановится на проверке"],
      ]}
    />
    <Takeaway>Стартап должен одновременно определить отраслевое направление, основной тип спроса и доказать зрелость — только это превращает попадание в перспективный сегмент в реальный интерес рынка.</Takeaway>
  </Page>
);

const S39 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={37} label="Рекомендации · Сводка" />
    <H size={20}>Приоритетные действия по аудиториям</H>
    <P size={10.5}>Ниже собраны действия для каждой группы участников рынка в ближайший период — переход от результатов исследования к конкретным шагам.</P>
    <View style={{ height: 6 }} />
    <TableC headers={["Аудитория", "Действия в ближайший период"]} weights={[1, 3.6]}
      rows={[
        ["Инвесторы", "Пересмотреть отраслевые тезисы с учётом трёх шкал спроса, выделить корпоративно-стратегические сегменты, усилить проверку прав, структуры и сценария выхода"],
        ["Корпорации", "Сформировать карту задач, назначить владельцев процессов, внедрить паспорт пилота, связать инновационную функцию с бизнесом и закупками"],
        ["Институты развития", "Создать программы пилотов от задач заказчиков, поддерживать юридическую и технологическую готовность, использовать разрывы между шкалами как карту поддержки"],
        ["Стартапы", "Определить основной тип спроса, подготовить разные материалы для инвесторов и корпораций, доказать зрелость, привести в порядок права и структуру"],
      ]}
    />
  </Page>
);

const S40 = () => (
  <Page size={[PW, PH]} style={ps()}><Header num={38} label="Рекомендации · Сводка" color={T.terra} />
    <H size={20}>Ошибки, которых следует избегать</H>
    <P size={10.5}>Типичные ошибки участников рынка и их последствия — карта рисков, которая помогает не потерять сделку и не перегрузить воронку нерелевантными проектами.</P>
    <View style={{ height: 6 }} />
    <TableC accent={T.terra} headers={["Участник", "Типичная ошибка", "Последствие"]} weights={[1, 1.7, 1.7]}
      rows={[
        ["Инвесторы", "Оценивать направление только по модности темы", "Сделка попадает в сегмент без понятного выхода или покупателя"],
        ["Инвесторы", "Игнорировать корпоративный спрос в B2B и инфраструктурных направлениях", "Недооцениваются Cybersecurity, Industrial, Energy, CleanTech и часть Enterprise Solution"],
        ["Корпорации", "Запускать пилоты без владельца процесса", "Пилоты не переходят во внедрения"],
        ["Корпорации", "Искать стартапы без сформулированных задач", "Воронка перегружается нерелевантными предложениями"],
        ["Институты развития", "Поддерживать стартапы без доступа к заказчикам", "Деньги не превращаются в рынок и внедрения"],
        ["Институты развития", "Использовать одинаковые инструменты для всех направлений", "Deep tech, SaaS, B2C и промышленность требуют разных программ"],
        ["Стартапы", "Делать одну презентацию для всех типов участников", "Материалы не отвечают на ключевые вопросы конкретной аудитории"],
        ["Стартапы", "Выходить к корпорации без интеграций, безопасности и экономики пилота", "Продукт останавливается на демо или первом согласовании"],
      ]}
    />
  </Page>
);

const S41 = ({ ib }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, padding: "28 44", color: T.fg }}>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: T.muted, letterSpacing: 2, textTransform: "uppercase" }}>Финальный вывод</Text>
      <Text style={{ fontSize: 9, color: T.muted, letterSpacing: 1 }}>39 / 39</Text>
    </View>
    <View style={{ flex: 1, justifyContent: "flex-start", maxWidth: 680, paddingTop: 30 }}>
      <View style={{ flexDirection: "row", alignItems: "flex-end", gap: 6, marginBottom: 18 }}>
        <View style={{ width: 9, height: 18, borderRadius: 2, backgroundColor: T.navy }} />
        <View style={{ width: 9, height: 28, borderRadius: 2, backgroundColor: T.green }} />
        <View style={{ width: 9, height: 38, borderRadius: 2, backgroundColor: T.terra }} />
      </View>
      <Text style={{ fontSize: 20, fontWeight: 700, color: T.fg, lineHeight: 1.2 }}>На российском рынке выигрывают не просто стартапы из популярных направлений, а компании, которые могут доказать зрелость, пройти проверку конкретного источника спроса и показать реалистичный путь к коммерциализации, росту и выходу.</Text>
      <View style={{ flexDirection: "row", gap: 12, backgroundColor: T.panel, borderRadius: 5, padding: 14, marginTop: 18, borderLeftWidth: 3, borderLeftColor: T.navy }}>
        <Text style={{ fontSize: 9, fontWeight: 700, color: T.navy, letterSpacing: 1, textTransform: "uppercase", width: 90 }}>Главное практическое следствие</Text>
        <Text style={{ fontSize: 12, color: T.body, lineHeight: 1.45, flex: 1 }}>Рынок нужно анализировать не как единый рейтинг отраслей, а как сочетание трёх видов спроса — со стороны инвесторов, корпораций и институтов развития.</Text>
      </View>
    </View>
    <View style={{ marginBottom: 11 }}>
      <DownloadCTA ib={ib} w={360} />
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between", borderTopWidth: 1, borderTopColor: T.line, paddingTop: 11 }}>
      <Text style={{ fontSize: 9, fontWeight: 700, color: T.muted, letterSpacing: 2, textTransform: "uppercase" }}>Hop.Agency × Startup Drive</Text>
      <Text style={{ fontSize: 9, color: T.muted }}>hop.agency · startupdrive.ru</Text>
    </View>
  </Page>
);

const SMDoc = ({ ib }) => (
  <Document title="Рынок стартапов в России — Hop.Agency × Startup Drive" author="Дмитрий Бондарев">
    <S01 ib={ib} /><STeam ib={ib} /><S02 /><S03 /><S04 /><S05 /><S06 ib={ib} /><S07 ib={ib} /><S08 ib={ib} /><S09 ib={ib} /><S10 ib={ib} />
    <S11 ib={ib} /><S12 /><S13 /><S14 /><S15 /><S16 /><S17 /><S18 /><S19 ib={ib} /><S20 />
    <S21 /><S22 />
    <S27 /><S28 /><S29 /><S24 ib={ib} /><S30 /><S31 /><S32 /><S33 /><S34 /><S35 /><S36 /><S37 /><S38 /><S39 /><S40 /><S41 ib={ib} />
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
