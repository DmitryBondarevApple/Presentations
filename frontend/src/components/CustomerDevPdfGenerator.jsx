/**
 * «Customer Development: как перестать угадывать и начать проверять» — PDF Generator.
 * Light + Dark, teal accent. Data-driven (см. data/customerDevSlides).
 * Единая типографика: один размер заголовка (28) + два размера основного
 * текста — основной (BP=14) и меньший для плотных слайдов (BS=11).
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";
import { SLIDES, COVER, LECTURER, fmtList, fmtSteps, isDense, TOTAL } from "@/data/customerDevSlides";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const TITLE = 28;   // единый размер заголовка
const BP = 14;      // основной размер текста
const BS = 11;      // меньший размер (плотные слайды)

const THEMES = {
  light: { bg: "#ffffff", fg: "#0f172a", fg2: "#1e293b", muted: "#475569", dim: "#94a3b8",
    accent: "#0d9488", neg: "#e11d48", border: "#e2e8f0", card: "#f8fafc", accentBg: "rgba(13,148,136,0.08)" },
  dark: { bg: "#0f172a", fg: "#f1f5f9", fg2: "#e2e8f0", muted: "#94a3b8", dim: "#64748b",
    accent: "#2dd4bf", neg: "#fb7185", border: "#334155", card: "#1e293b", accentBg: "rgba(45,212,191,0.12)" },
};

let T = THEMES.light;
const f = { fontFamily: "Inter" };
const ps = () => ({ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, paddingHorizontal: 34, paddingVertical: 30 });

/* ── primitives ── */
const Header = ({ num, label }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
    <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent, letterSpacing: 1.4, textTransform: "uppercase" }}>{label}</Text>
    <Text style={{ fontSize: 9.5, color: T.dim }}>Customer Development   ·   {String(num).padStart(2, "0")} / {TOTAL}</Text>
  </View>
);
const H = ({ t, a }) => (
  <Text style={{ fontSize: TITLE, fontWeight: 700, color: T.fg, marginBottom: 14, lineHeight: 1.16 }}>
    {t} {a ? <Text style={{ color: T.accent }}>{a}</Text> : null}
  </Text>
);
const Lead = ({ children, bs = BP }) => (
  <Text style={{ fontSize: bs, color: T.muted, lineHeight: 1.4, marginBottom: 9, maxWidth: 720 }}>{children}</Text>
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
const Quote = ({ children, bs = BP }) => (
  <View style={{ backgroundColor: T.accentBg, borderRadius: 4, padding: 12, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent, marginBottom: 9 }}>
    <Text style={{ fontSize: bs, fontWeight: 700, color: T.fg, lineHeight: 1.4 }}>{children}</Text>
  </View>
);

const liW = (cols) => (cols === 3 ? "33.33%" : cols === 2 ? "50%" : "100%");
const colW = (cols) => (cols === 4 ? "23%" : cols === 3 ? "31%" : cols === 2 ? "48%" : "100%");

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

const Steps = ({ eyebrow, items, bs = BP }) => (
  <View style={{ marginBottom: 9 }}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    {fmtSteps(items).map((it, i) => (
      <View key={i} style={{ flexDirection: "row", gap: 7, alignItems: "flex-start", marginBottom: 4.5 }}>
        <Text style={{ fontSize: bs, fontWeight: 700, color: T.accent, opacity: 0.85 }}>{i + 1}.</Text>
        <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.34, flex: 1 }}>{it}</Text>
      </View>
    ))}
  </View>
);

const Cards = ({ items, cols }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "flex-start", columnGap: 14, marginBottom: 9 }}>
    {items.map((c, i) => (
      <View key={i} style={{ width: colW(cols), marginBottom: 9, backgroundColor: T.card, borderRadius: 4, padding: 10,
        borderTopWidth: 2.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
        borderTopColor: T.accent, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.border }}>
        {c.n && <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent, marginBottom: 2 }}>{c.n}</Text>}
        {c.title && <Text style={{ fontSize: BP, fontWeight: 700, color: T.fg, lineHeight: 1.2, marginBottom: c.desc ? 3 : 0 }}>{c.title}</Text>}
        {c.desc && <Text style={{ fontSize: BS, color: T.muted, lineHeight: 1.34 }}>{c.desc}</Text>}
      </View>
    ))}
  </View>
);

const Formula = ({ text }) => (
  <View style={{ backgroundColor: T.accentBg, borderWidth: 0.5, borderColor: T.accent, borderRadius: 6, paddingVertical: 16, paddingHorizontal: 14, alignItems: "center", marginBottom: 9 }}>
    <Text style={{ fontSize: BP, fontWeight: 700, color: T.accent, textAlign: "center", lineHeight: 1.3 }}>{text}</Text>
  </View>
);

const Dialog = ({ items, bs = BP }) => (
  <View style={{ marginBottom: 9 }}>
    {items.map((d, i) => {
      const client = d.role === "Клиент";
      return (
        <View key={i} style={{ width: "86%", alignSelf: client ? "flex-end" : "flex-start", marginBottom: 6,
          backgroundColor: client ? T.accentBg : T.card, borderRadius: 4, padding: 9,
          borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 0.5,
          borderTopColor: client ? T.accent : T.border, borderRightColor: client ? T.accent : T.border,
          borderBottomColor: client ? T.accent : T.border, borderLeftColor: client ? T.accent : T.border }}>
          <Text style={{ fontSize: 8.5, fontWeight: 700, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3,
            color: client ? T.accent : T.muted, textAlign: client ? "right" : "left" }}>{d.role}</Text>
          <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.34, textAlign: client ? "right" : "left" }}>{d.text}</Text>
        </View>
      );
    })}
  </View>
);

const Contrast = ({ aLabel, bLabel, items, bs = BP }) => (
  <View style={{ marginBottom: 9 }}>
    {items.map((c, i) => (
      <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <View style={{ width: "48.5%", backgroundColor: T.card, borderRadius: 4, borderWidth: 0.5, borderColor: T.border, padding: 10 }}>
          <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.muted, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{aLabel}</Text>
          <Text style={{ fontSize: bs, color: T.muted, lineHeight: 1.4 }}>{c.a}</Text>
        </View>
        <View style={{ width: "48.5%", backgroundColor: T.card, borderRadius: 4, padding: 10, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 3, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent }}>
          <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.5, marginBottom: 3 }}>{bLabel}</Text>
          <Text style={{ fontSize: bs, color: T.fg2, lineHeight: 1.4 }}>{c.b}</Text>
        </View>
      </View>
    ))}
  </View>
);

const renderBlock = (b, i, bs) => {
  switch (b.k) {
    case "lead": return <Lead key={i} bs={bs}>{b.text}</Lead>;
    case "note": return <Note key={i} bs={bs}>{b.text}</Note>;
    case "callout": return <Callout key={i} title={b.title} bs={bs}>{b.text}</Callout>;
    case "quote": return <Quote key={i} bs={bs}>{b.text}</Quote>;
    case "bul": return <Bullets key={i} eyebrow={b.eyebrow} items={b.items} cols={b.cols} bs={bs} />;
    case "steps": return <Steps key={i} eyebrow={b.eyebrow} items={b.items} bs={bs} />;
    case "cards": return <Cards key={i} items={b.items} cols={b.cols} />;
    case "formula": return <Formula key={i} text={b.text} />;
    case "dialog": return <Dialog key={i} items={b.items} bs={bs} />;
    case "contrast": return <Contrast key={i} {...b} bs={bs} />;
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

const BookAside = ({ aside, imgBase }) => (
  <View style={{ width: 150, alignItems: "center" }}>
    <Image src={`${imgBase}${aside.book}`} style={{ width: 150, height: 150, borderRadius: 4, objectFit: "contain", borderWidth: 0.5, borderColor: T.border }} />
    <Text style={{ fontSize: 8.5, color: T.muted, textAlign: "center", marginTop: 6, lineHeight: 1.3 }}>{aside.title}</Text>
  </View>
);

const Cover = ({ imgBase }) => (
  <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, justifyContent: "center", paddingHorizontal: 56, paddingVertical: 40 }}>
    <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 2, marginBottom: 18 }}>{COVER.kicker}</Text>
    <Text style={{ fontSize: 32, fontWeight: 700, color: T.fg, lineHeight: 1.14, maxWidth: 660, marginBottom: 18 }}>
      Customer Development: как перестать <Text style={{ color: T.accent }}>угадывать</Text> и начать <Text style={{ color: T.accent }}>проверять</Text>
    </Text>
    <Text style={{ fontSize: 13, color: T.muted, lineHeight: 1.45, maxWidth: 560, marginBottom: 28 }}>{COVER.subtitle}</Text>
    <View style={{ width: 360 }}><LecturerRow imgBase={imgBase} top /></View>
  </Page>
);

const ContentPage = ({ slide, num, imgBase }) => {
  const bs = isDense(slide) ? BS : BP;
  const blocks = slide.blocks.map((b, i) => renderBlock(b, i, bs));
  return (
    <Page size={[PW, PH]} style={ps()}>
      <Header num={num} label={slide.label} />
      <H t={slide.t} a={slide.a} />
      {slide.aside ? (
        <View style={{ flexDirection: "row", gap: 20 }}>
          <View style={{ flex: 1 }}>{blocks}</View>
          <BookAside aside={slide.aside} imgBase={imgBase} />
        </View>
      ) : blocks}
      {slide.final && <LecturerRow imgBase={imgBase} top />}
    </Page>
  );
};

const Deck = ({ imgBase }) => (
  <Document>
    <Cover imgBase={imgBase} />
    {SLIDES.map((s, idx) => <ContentPage key={idx} slide={s} num={idx + 2} imgBase={imgBase} />)}
  </Document>
);

export async function preGenerateCustomerDevPdfs() {
  const imgBase = getImageBase();
  T = THEMES.light;
  const light = await pdf(<Deck imgBase={imgBase} />).toBlob();
  T = THEMES.dark;
  const dark = await pdf(<Deck imgBase={imgBase} />).toBlob();
  return { light, dark };
}
