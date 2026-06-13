/**
 * Инвестиционная презентация Noteall — PDF Generator (Light + Dark).
 * Фирменный teal Noteall. Data-driven (см. data/noteallInvestSlides).
 * Типографика: заголовок 28, основной текст 14 (BP) / 11 (BS, плотные слайды).
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";
import { SLIDES, COVER, LECTURER, fmtList, isDense, TOTAL } from "@/data/noteallInvestSlides";

registerInterFont();

const PW = 841.89;
const PH = 595.28;
const TITLE = 28;
const BP = 14;
const BS = 11;

const THEMES = {
  light: { bg: "#ffffff", fg: "#0f172a", fg2: "#1e293b", muted: "#475569", dim: "#94a3b8",
    accent: "#0e9c8c", neg: "#e11d48", border: "#e2e8f0", card: "#f8fafc",
    accentBg: "rgba(14,156,140,0.08)", accentRgb: "14,156,140" },
  dark: { bg: "#0f172a", fg: "#f1f5f9", fg2: "#e2e8f0", muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4c0", neg: "#fb7185", border: "#334155", card: "#1e293b",
    accentBg: "rgba(45,212,192,0.12)", accentRgb: "45,212,192" },
};

let T = THEMES.light;
const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, paddingHorizontal: 34, paddingVertical: 30 });

const Header = ({ num, label }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
    <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, letterSpacing: 1.4, textTransform: "uppercase" }}>{label}</Text>
    <Text style={{ fontSize: 9.5, color: T.dim }}>Noteall · Invest   ·   {String(num).padStart(2, "0")} / {TOTAL}</Text>
  </View>
);
const H = ({ t, a }) => (
  <Text style={{ fontSize: TITLE, fontWeight: 700, color: T.fg, marginBottom: 14, lineHeight: 1.16 }}>
    {t} {a ? <Text style={{ color: T.accent }}>{a}</Text> : null}
  </Text>
);
const Lead = ({ children, bs = BP }) => (
  <Text style={{ fontSize: bs, color: T.muted, lineHeight: 1.4, marginBottom: 9, maxWidth: 740 }}>{children}</Text>
);
const Eyebrow = ({ children }) => (
  <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 1, marginBottom: 5 }}>{children}</Text>
);
const Note = ({ children, bs = BP }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 11, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 9 }}>
    <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.4 }}>{children}</Text>
  </View>
);
const Callout = ({ title, children, bs = BP }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 11, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 9 }}>
    {title && <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 4 }}>{title}</Text>}
    <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.4 }}>{children}</Text>
  </View>
);
const Quote = ({ children }) => (
  <View style={{ backgroundColor: T.accentBg, borderRadius: 4, padding: 16, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 9 }}>
    <Text style={{ fontSize: 22, fontWeight: 700, color: T.fg, lineHeight: 1.25 }}>{children}</Text>
  </View>
);

const liW = (cols) => (cols === 3 ? "33.33%" : cols === 2 ? "50%" : "100%");
const Bullet = ({ children, w, bs = BP }) => (
  <View style={{ flexDirection: "row", gap: 6, alignItems: "flex-start", marginBottom: 4.5, width: w, paddingRight: 12 }}>
    <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: T.accent, marginTop: bs * 0.42 }} />
    <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.34, flex: 1 }}>{children}</Text>
  </View>
);
const Bullets = ({ eyebrow, items, cols, bs = BP }) => (
  <View style={{ marginBottom: 9 }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
      {fmtList(items).map((it, i) => <Bullet key={i} w={liW(cols)} bs={bs}>{it}</Bullet>)}
    </View>
  </View>
);

const cardW = (cols) => (cols === 4 ? "23%" : cols === 3 ? "31%" : cols === 2 ? "48%" : "100%");
const Cards = ({ items, cols }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", columnGap: 14, marginBottom: 9 }}>
    {items.map((c, i) => (
      <View key={i} style={{ width: cardW(cols), marginBottom: 9, backgroundColor: T.card, borderRadius: 4, padding: 10,
        borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
        borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
        {c.title && <Text style={{ fontSize: BP, fontWeight: 700, color: T.fg, lineHeight: 1.2, marginBottom: c.desc ? 3 : 0 }}>{c.title}</Text>}
        {c.desc && <Text style={{ fontSize: BS, color: T.muted, lineHeight: 1.34 }}>{c.desc}</Text>}
      </View>
    ))}
  </View>
);

const Columns = ({ items, bs = BP }) => {
  const w = items.length >= 3 ? "31.5%" : "48.5%";
  return (
    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", columnGap: 14, marginBottom: 9 }}>
      {items.map((c, i) => (
        <View key={i} style={{ width: w, marginBottom: 9, borderRadius: 4, padding: 10,
          backgroundColor: c.accent ? T.accentBg : T.card,
          borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: c.accent ? 3 : 0.5,
          borderTopColor: c.accent ? T.accent : T.border, borderRightColor: c.accent ? T.accent : T.border,
          borderBottomColor: c.accent ? T.accent : T.border, borderLeftColor: c.accent ? T.accent : T.border }}>
          <Text style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: c.desc ? 4 : 6, color: c.accent ? T.accent : T.fg2 }}>{c.title}</Text>
          {c.desc && <Text style={{ fontSize: BS, color: T.muted, lineHeight: 1.34, marginBottom: 5 }}>{c.desc}</Text>}
          {fmtList(c.list).map((it, j) => (
            <View key={j} style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 3 }}>
              <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: T.accent, marginTop: bs * 0.45 }} />
              <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.3, flex: 1 }}>{it}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
};

const Funnel = ({ tiers, arppu, note }) => {
  const PWp = 440;
  const widths = [PWp, PWp * 0.74, PWp * 0.48];
  return (
    <View style={{ flexDirection: "row", gap: 20, marginBottom: 9 }}>
      <View style={{ width: PWp, alignItems: "center" }}>
        {tiers.map((t, i) => (
          <View key={i} style={{ width: widths[i], marginBottom: 8, borderRadius: 5, paddingVertical: 9, paddingHorizontal: 12,
            backgroundColor: `rgba(${T.accentRgb},${0.2 - i * 0.05})`, borderWidth: 0.5, borderColor: T.accent,
            flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg }}>{t.name}
                <Text style={{ fontSize: 8.5, fontWeight: 400, color: T.muted }}>  {t.sub}</Text>
              </Text>
              <Text style={{ fontSize: 8.5, color: T.muted, marginTop: 1.5 }}>{t.label}</Text>
            </View>
            <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent }}>{t.value}</Text>
          </View>
        ))}
      </View>
      <View style={{ flex: 1 }}>
        <View style={{ backgroundColor: T.card, borderRadius: 4, borderWidth: 0.5, borderColor: T.border, padding: 11, marginBottom: 8 }}>
          <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 7 }}>Расчёт ARPPU</Text>
          {arppu.map((a, i) => (
            <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 4,
              paddingTop: i >= 2 ? 4 : 0, borderTopWidth: i >= 2 ? 0.5 : 0, borderTopColor: T.border }}>
              <Text style={{ fontSize: 10, color: T.muted, flex: 1, paddingRight: 6 }}>{a.k}</Text>
              <Text style={{ fontSize: i >= 2 ? 12 : 10.5, fontWeight: 700, color: i >= 2 ? T.accent : T.fg }}>{a.v}</Text>
            </View>
          ))}
        </View>
        {note && <Text style={{ fontSize: 9, color: T.muted, lineHeight: 1.35 }}>{note}</Text>}
      </View>
    </View>
  );
};

const Timeline = ({ phases }) => (
  <View style={{ flexDirection: "row", gap: 16, marginBottom: 9 }}>
    {phases.map((p, i) => (
      <View key={i} style={{ flex: 1, backgroundColor: T.card, borderRadius: 5, padding: 12,
        borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
        borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
        <View style={{ alignSelf: "flex-start", backgroundColor: T.accentBg, borderRadius: 10, paddingVertical: 4, paddingHorizontal: 10, marginBottom: 9 }}>
          <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent }}>{p.date}</Text>
        </View>
        {[{ t: "Техническое развитие", arr: p.tech }, { t: "Коммерческое развитие", arr: p.comm }].map((sec, k) => (
          <View key={k} style={{ marginTop: k ? 9 : 0 }}>
            <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.dim, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 4 }}>{sec.t}</Text>
            {fmtList(sec.arr).map((it, j) => (
              <View key={j} style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 3 }}>
                <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: T.accent, marginTop: 5 }} />
                <Text style={{ fontSize: 11, color: T.fg2, lineHeight: 1.3, flex: 1 }}>{it}</Text>
              </View>
            ))}
          </View>
        ))}
      </View>
    ))}
  </View>
);

const Stats = ({ items }) => (
  <View style={{ flexDirection: "row", gap: 14, marginBottom: 10 }}>
    {items.map((s, i) => (
      <View key={i} style={{ flex: 1, backgroundColor: T.card, borderRadius: 5, padding: 14, alignItems: "center",
        borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
        borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
        <Text style={{ fontSize: 30, fontWeight: 700, color: T.accent }}>{s.v}</Text>
        <Text style={{ fontSize: 11, color: T.muted, marginTop: 4, textAlign: "center" }}>{s.l}</Text>
      </View>
    ))}
  </View>
);

const Person = ({ stats, imgBase }) => (
  <View style={{ flexDirection: "row", gap: 16, marginBottom: 10, alignItems: "stretch" }}>
    <Image src={`${imgBase}${LECTURER.photo}`} style={{ width: 96, height: 96, borderRadius: 10, objectFit: "cover" }} />
    <View style={{ flex: 1, flexDirection: "row", gap: 12 }}>
      {stats.map((s, i) => (
        <View key={i} style={{ flex: 1, backgroundColor: T.card, borderRadius: 5, padding: 10, alignItems: "center", justifyContent: "center",
          borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
          borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
          <Text style={{ fontSize: 26, fontWeight: 700, color: T.accent }}>{s.v}</Text>
          <Text style={{ fontSize: 9.5, color: T.muted, marginTop: 3, textAlign: "center" }}>{s.l}</Text>
        </View>
      ))}
    </View>
  </View>
);

const Contacts = ({ items, imgBase }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 12, marginBottom: 9, flexDirection: "row", alignItems: "center", gap: 18,
    borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3,
    borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent }}>
    <View style={{ flexDirection: "row", alignItems: "center", gap: 11 }}>
      <Image src={`${imgBase}${LECTURER.photo}`} style={{ width: 52, height: 52, borderRadius: 26, objectFit: "cover" }} />
      <View>
        <Text style={{ fontSize: 13, fontWeight: 700, color: T.fg }}>{LECTURER.name}</Text>
        <Text style={{ fontSize: 10, color: T.muted, marginTop: 2 }}>{LECTURER.role}</Text>
      </View>
    </View>
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      {items.map((c, i) => (
        <View key={i} style={{ width: "50%", flexDirection: "row", marginBottom: 4, paddingRight: 8 }}>
          <Text style={{ fontSize: 9, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, width: 54 }}>{c.label}</Text>
          <Text style={{ fontSize: 11, color: T.fg2 }}>{c.value}</Text>
        </View>
      ))}
    </View>
  </View>
);

const Shot = ({ src, alt, ratio = 1.899, imgBase }) => {
  const h = 252, w = Math.round(h * ratio);
  return (
    <View style={{ alignItems: "center", marginBottom: 8 }}>
      <Image src={`${imgBase}${src}`} style={{ width: w, height: h, borderWidth: 0.5, borderColor: T.border, borderRadius: 6 }} />
    </View>
  );
};

const renderBlock = (b, i, bs, imgBase) => {
  switch (b.k) {
    case "lead": return <Lead key={i} bs={bs}>{b.text}</Lead>;
    case "note": return <Note key={i} bs={bs}>{b.text}</Note>;
    case "callout": return <Callout key={i} title={b.title} bs={bs}>{b.text}</Callout>;
    case "quote": return <Quote key={i}>{b.text}</Quote>;
    case "shot": return <Shot key={i} src={b.src} alt={b.alt} ratio={b.ratio} imgBase={imgBase} />;
    case "bul": return <Bullets key={i} eyebrow={b.eyebrow} items={b.items} cols={b.cols} bs={bs} />;
    case "cards": return <Cards key={i} items={b.items} cols={b.cols} />;
    case "columns": return <Columns key={i} items={b.items} bs={bs} />;
    case "funnel": return <Funnel key={i} {...b} />;
    case "timeline": return <Timeline key={i} phases={b.phases} />;
    case "stats": return <Stats key={i} items={b.items} />;
    case "person": return <Person key={i} stats={b.stats} imgBase={imgBase} />;
    case "contacts": return <Contacts key={i} items={b.items} imgBase={imgBase} />;
    default: return null;
  }
};

const Cover = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", paddingHorizontal: 56, paddingVertical: 44 }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 2, marginBottom: 18 }}>{COVER.kicker}</Text>
    <Text style={{ fontSize: 27, fontWeight: 700, color: T.fg, lineHeight: 1.18, maxWidth: 700, marginBottom: 16 }}>
      AI-платформа, которая превращает встречи, видео и экспертные обсуждения в <Text style={{ color: T.accent }}>рабочие документы, задачи и знания</Text>
    </Text>
    <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.45, maxWidth: 640, marginBottom: 14 }}>{COVER.subtitle}</Text>
    <Text style={{ fontSize: 10.5, color: T.dim, lineHeight: 1.45, maxWidth: 640, marginBottom: 22 }}>{COVER.feature}</Text>
    <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent }}>{COVER.site}</Text>
  </Page>
);

const ContentPage = ({ slide, num, imgBase }) => {
  const bs = isDense(slide) ? BS : BP;
  return (
    <Page size={[PW, PH]} wrap={false} style={ps()}>
      <Header num={num} label={slide.label} />
      <H t={slide.t} a={slide.a} />
      {slide.blocks.map((b, i) => renderBlock(b, i, bs, imgBase))}
    </Page>
  );
};

const Deck = ({ imgBase }) => (
  <Document>
    <Cover imgBase={imgBase} />
    {SLIDES.map((s, idx) => <ContentPage key={idx} slide={s} num={idx + 2} imgBase={imgBase} />)}
  </Document>
);

export async function preGenerateNoteallInvestPdfs() {
  const imgBase = getImageBase();
  T = THEMES.light;
  const light = await pdf(<Deck imgBase={imgBase} />).toBlob();
  T = THEMES.dark;
  const dark = await pdf(<Deck imgBase={imgBase} />).toBlob();
  return { light, dark };
}
