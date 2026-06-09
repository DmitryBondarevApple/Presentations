/**
 * «Анализ конкурентов, SWOT и поиск ниши с помощью ИИ» — PDF Generator.
 * Light + Dark, teal accent. Data-driven (см. data/aiCompetitorsSlides).
 * Оба PDF пре-генерируются на загрузке страницы и хранятся как blob.
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";
import { SLIDES, COVER, LECTURER, fmtList, TOTAL } from "@/data/aiCompetitorsSlides";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const THEMES = {
  light: { bg: "#ffffff", fg: "#0f172a", fg2: "#1e293b", muted: "#475569", dim: "#94a3b8",
    accent: "#0d9488", neg: "#e11d48", border: "#e2e8f0", card: "#f8fafc", accentBg: "rgba(13,148,136,0.08)" },
  dark: { bg: "#0f172a", fg: "#f1f5f9", fg2: "#e2e8f0", muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4bf", neg: "#fb7185", border: "#334155", card: "#1e293b", accentBg: "rgba(45,212,191,0.12)" },
};

let T = THEMES.light;
const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, paddingHorizontal: 34, paddingVertical: 28 });

/* ── primitives ── */
const Header = ({ num, label }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 10 }}>
    <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, letterSpacing: 1.4, textTransform: "uppercase" }}>{label}</Text>
    <Text style={{ fontSize: 9.5, color: T.dim }}>Анализ конкурентов · ИИ   ·   {String(num).padStart(2, "0")} / {TOTAL}</Text>
  </View>
);
const H = ({ t, a, size = 22, m = 1 }) => (
  <Text style={{ fontSize: size * m, fontWeight: 700, color: T.fg, marginBottom: 9, lineHeight: 1.18 }}>
    {t} {a ? <Text style={{ color: T.accent }}>{a}</Text> : null}
  </Text>
);
const Lead = ({ children, m = 1 }) => (
  <Text style={{ fontSize: 11.5 * m, color: T.muted, lineHeight: 1.4, marginBottom: 8, maxWidth: 700 }}>{children}</Text>
);
const Eyebrow = ({ children }) => (
  <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 1, marginBottom: 4 }}>{children}</Text>
);
const Note = ({ children, m = 1 }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 10, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 8 }}>
    <Text style={{ fontSize: 11 * m, color: T.fg2, lineHeight: 1.4 }}>{children}</Text>
  </View>
);
const Callout = ({ title, children, m = 1 }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 10, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 8 }}>
    {title && <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 3 }}>{title}</Text>}
    <Text style={{ fontSize: 11.5 * m, color: T.fg2, lineHeight: 1.4 }}>{children}</Text>
  </View>
);
const Bullet = ({ children, w, m = 1 }) => (
  <View style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 3 * m, width: w, paddingRight: 10 }}>
    <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent, marginTop: 4 * m }} />
    <Text style={{ fontSize: 10.5 * m, color: T.fg2, lineHeight: 1.32, flex: 1 }}>{children}</Text>
  </View>
);

const colW = (cols) => (cols === 4 ? "23.5%" : cols === 3 ? "32%" : cols === 2 ? "48.5%" : "100%");
const liW = (cols) => (cols === 3 ? "33.33%" : cols === 2 ? "50%" : "100%");

const Bullets = ({ eyebrow, items, cols, m = 1 }) => (
  <View style={{ marginBottom: 8 }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {fmtList(items).map((it, i) => <Bullet key={i} w={liW(cols)} m={m}>{it}</Bullet>)}
    </View>
  </View>
);

const Cards = ({ items, cols, m = 1 }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 8 }}>
    {items.map((c, i) => (
      <View key={i} style={{ width: colW(cols), marginBottom: 8, backgroundColor: T.card, borderRadius: 4, padding: 9,
        borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
        borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
        {c.n && <Text style={{ fontSize: 13, fontWeight: 700, color: T.accent, marginBottom: 2 }}>{c.n}</Text>}
        {c.title && <Text style={{ fontSize: 12 * m, fontWeight: 700, color: T.fg, lineHeight: 1.2, marginBottom: c.desc ? 3 : 0 }}>{c.title}</Text>}
        {c.desc && <Text style={{ fontSize: 10 * m, color: T.muted, lineHeight: 1.32 }}>{c.desc}</Text>}
      </View>
    ))}
  </View>
);

const Compare = ({ items }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 8 }}>
    {items.map((c, i) => (
      <View key={i} style={{ width: "32%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
        <Text style={{ fontSize: 11.5, fontWeight: 700, color: T.fg, lineHeight: 1.25, marginBottom: 6 }}>{c.name}</Text>
        <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Сильные стороны</Text>
        <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.32, marginBottom: 6 }}>{c.strong}</Text>
        <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.neg, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 2 }}>Слабые стороны</Text>
        <Text style={{ fontSize: 10, color: T.muted, lineHeight: 1.32 }}>{c.weak}</Text>
      </View>
    ))}
  </View>
);

const Pairs = ({ items, m = 1 }) => (
  <View style={{ marginBottom: 8 }}>
    {items.map((p, i) => (
      <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <View style={{ width: "48.5%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
          <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>Слабо</Text>
          <Text style={{ fontSize: 11 * m, color: T.muted, lineHeight: 1.38 }}>{p.weak}</Text>
        </View>
        <View style={{ width: "48.5%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent }}>
          <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>Сильнее</Text>
          <Text style={{ fontSize: 11 * m, color: T.fg2, lineHeight: 1.38 }}>{p.strong}</Text>
        </View>
      </View>
    ))}
  </View>
);

const Prompt = ({ intro, paras, m = 1 }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 14, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 8 }}>
    {intro && <Text style={{ fontSize: 10, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.8, marginBottom: 8 }}>{intro}</Text>}
    {paras.map((p, i) => (
      <View key={i} style={{ flexDirection: "row", gap: 8, alignItems: "flex-start", marginBottom: 6 }}>
        <Text style={{ fontSize: 11 * m, fontWeight: 700, color: T.accent, opacity: 0.7 }}>{String(i + 1).padStart(2, "0")}</Text>
        <Text style={{ fontSize: 11 * m, color: T.fg2, lineHeight: 1.4, flex: 1 }}>{p}</Text>
      </View>
    ))}
  </View>
);

const SwotQuad = ({ title, items, pos }) => (
  <View style={{ width: "48.5%", marginBottom: 8, backgroundColor: T.card, borderRadius: 4, padding: 10,
    borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
    borderTopColor: pos ? T.accent : T.neg, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
    <Text style={{ fontSize: 10.5, fontWeight: 700, color: pos ? T.accent : T.neg, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 5 }}>{title}</Text>
    {fmtList(items).map((it, i) => (
      <View key={i} style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 2.5 }}>
        <View style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: pos ? T.accent : T.neg, marginTop: 4 }} />
        <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.3, flex: 1 }}>{it}</Text>
      </View>
    ))}
  </View>
);
const Swot = ({ s, w, o, t }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 8 }}>
    <SwotQuad title="Сильные стороны" items={s} pos />
    <SwotQuad title="Слабые стороны" items={w} />
    <SwotQuad title="Возможности" items={o} pos />
    <SwotQuad title="Угрозы" items={t} />
  </View>
);

const MapAxes = ({ x, y, points, hypothesis }) => (
  <View style={{ marginBottom: 8 }}>
    <View style={{ flexDirection: "row", gap: 8, marginBottom: 8 }}>
      <Text style={{ fontSize: 9.5, color: T.accent, backgroundColor: T.accentBg, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 }}>Ось X · {x}</Text>
      <Text style={{ fontSize: 9.5, color: T.accent, backgroundColor: T.accentBg, borderRadius: 8, paddingHorizontal: 8, paddingVertical: 3 }}>Ось Y · {y}</Text>
    </View>
    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
      {points.map((p, i) => (
        <View key={i} style={{ width: "48.5%", marginBottom: 8, backgroundColor: T.card, borderRadius: 4, padding: 9, borderWidth: 0.5, borderColor: T.border }}>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.fg, lineHeight: 1.2, marginBottom: 2 }}>{p.label}</Text>
          <Text style={{ fontSize: 9.5, color: T.muted, lineHeight: 1.3 }}>{p.desc}</Text>
        </View>
      ))}
    </View>
    {hypothesis && <Note>{hypothesis}</Note>}
  </View>
);

const Actions = ({ items, m = 1 }) => (
  <View style={{ marginBottom: 8 }}>
    {items.map((a, i) => (
      <View key={i} style={{ flexDirection: "row", alignItems: "center", gap: 10, marginBottom: 7, backgroundColor: T.card, borderRadius: 4, padding: 10, borderWidth: 0.5, borderColor: T.border }}>
        <Text style={{ flex: 1, fontSize: 10.5 * m, color: T.muted, lineHeight: 1.32 }}>{a.factor}</Text>
        <Text style={{ fontSize: 14, color: T.accent, fontWeight: 700 }}>→</Text>
        <Text style={{ flex: 1.15, fontSize: 10.5 * m, color: T.fg2, fontWeight: 600, lineHeight: 1.32 }}>{a.action}</Text>
      </View>
    ))}
  </View>
);

const Groups = ({ items }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", marginBottom: 8 }}>
    {items.map((g, i) => (
      <View key={i} style={{ width: "32%", backgroundColor: T.card, borderRadius: 4, padding: 10,
        borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
        borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
        <Text style={{ fontSize: 12, fontWeight: 700, color: T.fg, marginBottom: 5 }}>{g.title}</Text>
        {fmtList(g.items).map((it, j) => (
          <View key={j} style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 2.5 }}>
            <View style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: T.accent, marginTop: 4 }} />
            <Text style={{ fontSize: 10, color: T.fg2, lineHeight: 1.3, flex: 1 }}>{it}</Text>
          </View>
        ))}
      </View>
    ))}
  </View>
);

const Formula = ({ text, m = 1 }) => (
  <View style={{ backgroundColor: T.accentBg, borderWidth: 0.5, borderColor: T.accent, borderRadius: 6, paddingVertical: 16, paddingHorizontal: 14, alignItems: "center", marginBottom: 8 }}>
    <Text style={{ fontSize: 16 * m, fontWeight: 700, color: T.accent, textAlign: "center", lineHeight: 1.3 }}>{text}</Text>
  </View>
);

const renderBlock = (b, i, m = 1) => {
  switch (b.k) {
    case "lead": return <Lead key={i} m={m}>{b.text}</Lead>;
    case "note": return <Note key={i} m={m}>{b.text}</Note>;
    case "callout": return <Callout key={i} title={b.title} m={m}>{b.text}</Callout>;
    case "bul": return <Bullets key={i} eyebrow={b.eyebrow} items={b.items} cols={b.cols} m={m} />;
    case "cards": return <Cards key={i} items={b.items} cols={b.cols} m={m} />;
    case "compare": return <Compare key={i} items={b.items} />;
    case "pairs": return <Pairs key={i} items={b.items} m={m} />;
    case "prompt": return <Prompt key={i} intro={b.intro} paras={b.paras} m={m} />;
    case "swot": return <Swot key={i} {...b} />;
    case "map": return <MapAxes key={i} {...b} />;
    case "actions": return <Actions key={i} items={b.items} m={m} />;
    case "groups": return <Groups key={i} items={b.items} />;
    case "formula": return <Formula key={i} text={b.text} m={m} />;
    default: return null;
  }
};

const LecturerRow = ({ imgBase, top }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 12, marginTop: top ? 14 : 0, paddingTop: top ? 14 : 0, borderTopWidth: top ? 0.5 : 0, borderTopColor: T.border }}>
    <Image src={`${imgBase}${LECTURER.photo}`} style={{ width: 46, height: 46, borderRadius: 23, objectFit: "cover" }} />
    <View>
      <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg }}>{LECTURER.name}</Text>
      <Text style={{ fontSize: 10.5, color: T.muted, marginTop: 2 }}>{LECTURER.role}</Text>
    </View>
  </View>
);

const Cover = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", paddingHorizontal: 56, paddingVertical: 40 }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 2, marginBottom: 18 }}>{COVER.kicker}</Text>
    <Text style={{ fontSize: 34, fontWeight: 700, color: T.fg, lineHeight: 1.12, maxWidth: 640, marginBottom: 18 }}>
      Анализ конкурентов, <Text style={{ color: T.accent }}>SWOT</Text> и поиск <Text style={{ color: T.accent }}>ниши</Text> с помощью ИИ
    </Text>
    <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.45, maxWidth: 560, marginBottom: 28 }}>{COVER.subtitle}</Text>
    <View style={{ width: 360 }}><LecturerRow imgBase={imgBase} top /></View>
  </Page>
);

const ContentPage = ({ slide, imgBase }) => {
  const m = slide.lvl === 3 ? 1.9 : slide.lvl === 2 ? 1.3 : 1;
  return (
    <Page size={[PW, PH]} style={ps()}>
      <Header num={slide.n} label={slide.label} />
      <H t={slide.t} a={slide.a} m={m} />
      {slide.blocks.map((b, i) => renderBlock(b, i, m))}
      {slide.final && <LecturerRow imgBase={imgBase} top />}
    </Page>
  );
};

const Deck = ({ imgBase }) => (
  <Document>
    <Cover imgBase={imgBase} />
    {SLIDES.map((s) => <ContentPage key={s.n} slide={s} imgBase={imgBase} />)}
  </Document>
);

export async function preGenerateAICPdfs() {
  const imgBase = getImageBase();
  T = THEMES.light;
  const light = await pdf(<Deck imgBase={imgBase} />).toBlob();
  T = THEMES.dark;
  const dark = await pdf(<Deck imgBase={imgBase} />).toBlob();
  return { light, dark };
}
