/**
 * Флайер «АНО «РМААТ» × AX 10» — PDF (premium redesign)
 * A4 Portrait (595.28 x 841.89 pt) · одна страница
 */
import React from "react";
import { Document, Page, View, Text, Image, Link, Font, Svg, Circle, Line, pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { getImageBase } from "./pdf-shared/PdfComponents";
import { flyer, REGISTER_URL } from "@/data/rmaatFlyer";

Font.register({
  family: "Montserrat",
  fonts: [
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/cyrillic-700-normal.ttf", fontWeight: 700 },
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/cyrillic-800-normal.ttf", fontWeight: 800 },
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/montserrat@latest/cyrillic-900-normal.ttf", fontWeight: 900 },
  ],
});
Font.register({
  family: "Manrope",
  fonts: [
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/manrope@latest/cyrillic-400-normal.ttf", fontWeight: 400 },
    { src: "https://cdn.jsdelivr.net/fontsource/fonts/manrope@latest/cyrillic-600-normal.ttf", fontWeight: 600 },
  ],
});

const PW = 595.28;
const PH = 841.89;

const C = {
  bg: "#0A1225", surface: "#121C36", elevated: "#1A2748", dark: "#060C1B",
  orange: "#F97316", accent: "#FDBA74", border: "#2A3A60",
  white: "#ffffff", slate: "#C7D2E0", dim: "#94A3B8",
};

const mont = (w = 800) => ({ fontFamily: "Montserrat", fontWeight: w });
const man = (w = 400) => ({ fontFamily: "Manrope", fontWeight: w });

const Eyebrow = ({ children }) => (
  <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginBottom: 5 }}>
    <View style={{ width: 18, height: 1.4, backgroundColor: C.orange }} />
    <Text style={{ ...man(600), fontSize: 8, letterSpacing: 1.8, textTransform: "uppercase", color: C.accent }}>{children}</Text>
  </View>
);

const ClockIcon = () => (
  <Svg width={15} height={15} viewBox="0 0 24 24">
    <Circle cx="12" cy="12" r="9" stroke="#0A1225" strokeWidth="2.2" fill="none" />
    <Line x1="12" y1="12" x2="12" y2="7.5" stroke="#0A1225" strokeWidth="2.2" />
    <Line x1="12" y1="12" x2="15.5" y2="13.5" stroke="#0A1225" strokeWidth="2.2" />
  </Svg>
);

const RmaatFlyerDoc = ({ imgBase, qr }) => (
  <Document title="АНО РМААТ × AX10 — Флайер" author="АНО РМААТ × AX10">
    <Page size={[PW, PH]} style={{ ...man(400), width: PW, height: PH, backgroundColor: C.bg, color: C.white }}>

      {/* HERO */}
      <View style={{ position: "relative", height: 175 }}>
        <Image src={`${imgBase}/images/rmaat/hero2.jpg`} style={{ position: "absolute", width: PW, height: 175, objectFit: "cover" }} />
        <View style={{ position: "absolute", width: PW, height: 175, backgroundColor: "rgba(10,18,37,0.62)" }} />
        {/* co-brand */}
        <View style={{ position: "absolute", top: 0, left: 0, right: 0, flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 28, paddingTop: 14 }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
            <Text style={{ ...mont(800), fontSize: 11, color: C.white }}>{flyer.org}</Text>
            <Text style={{ fontSize: 13, color: C.orange }}>×</Text>
            <Image src={`${imgBase}/images/ax10/logo-ax10.png`} style={{ width: 46, height: 16, objectFit: "contain" }} />
          </View>
          <Text style={{ ...man(600), fontSize: 7, letterSpacing: 1.6, textTransform: "uppercase", color: C.dim }}>Исследование · 2026</Text>
        </View>
        {/* hero copy */}
        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: 28, paddingBottom: 13 }}>
          <Eyebrow>{flyer.hero.kickerLight}</Eyebrow>
          <Text style={{ ...mont(900), fontSize: 19, color: C.white, lineHeight: 1.08, letterSpacing: -0.3, maxWidth: "94%" }}>{flyer.hero.headline}</Text>
        </View>
      </View>

      {/* BODY */}
      <View style={{ paddingHorizontal: 28, paddingTop: 9, paddingBottom: 6 }}>

        <Text style={{ ...man(400), fontSize: 9, color: C.slate, lineHeight: 1.4, marginBottom: 8 }}>{flyer.hero.subtitle}</Text>

        {/* 30 seconds block */}
        <View style={{ flexDirection: "row", gap: 9, alignItems: "center", borderLeftWidth: 3.5, borderLeftColor: C.orange, backgroundColor: "rgba(249,115,22,0.10)", borderRadius: 8, padding: 9, marginBottom: 10 }}>
          <View style={{ backgroundColor: C.orange, borderRadius: 7, width: 26, height: 26, alignItems: "center", justifyContent: "center" }}>
            <ClockIcon />
          </View>
          <View style={{ flex: 1 }}>
            <Text style={{ ...mont(800), fontSize: 10, color: C.white }}>{flyer.time.title}</Text>
            <Text style={{ ...man(400), fontSize: 8.5, color: C.slate, marginTop: 2, lineHeight: 1.32 }}>{flyer.time.text}</Text>
          </View>
        </View>

        {/* About */}
        <Eyebrow>О чём это исследование</Eyebrow>
        <Text style={{ ...man(400), fontSize: 8.5, color: C.slate, lineHeight: 1.38, marginBottom: 5 }}>{flyer.about.intro}</Text>
        <View style={{ gap: 4, marginBottom: 10 }}>
          {flyer.about.points.map((p, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", gap: 8, backgroundColor: C.surface, borderWidth: 0.5, borderColor: C.border, borderRadius: 6, padding: 6.5 }}>
              <Text style={{ ...mont(900), fontSize: 10.5, color: C.orange }}>{String(i + 1).padStart(2, "0")}</Text>
              <Text style={{ ...man(400), fontSize: 8.5, color: C.slate, lineHeight: 1.32, flex: 1 }}>{p}</Text>
            </View>
          ))}
        </View>

        {/* Feature cards */}
        <View style={{ flexDirection: "row", gap: 8, marginBottom: 10 }}>
          {flyer.features.map((ft, i) => (
            <View key={i} style={{ flex: 1, backgroundColor: C.surface, borderRadius: 8, borderWidth: 0.5, borderColor: C.border, padding: 8 }}>
              <View style={{ width: 22, height: 3, backgroundColor: C.orange, borderRadius: 2, marginBottom: 5 }} />
              <Text style={{ ...mont(800), fontSize: 8.5, color: C.white, marginBottom: 2.5 }}>{ft.title}</Text>
              <Text style={{ ...man(400), fontSize: 7.5, color: C.dim, lineHeight: 1.32 }}>{ft.text}</Text>
            </View>
          ))}
        </View>

        {/* CTA + QR */}
        <View style={{ flexDirection: "row", gap: 11, backgroundColor: C.orange, borderRadius: 12, padding: 11, marginBottom: 10, alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ ...mont(800), fontSize: 7, letterSpacing: 1.6, textTransform: "uppercase", color: "rgba(10,18,37,0.7)", marginBottom: 3 }}>Регистрация на интервью</Text>
            <Text style={{ ...mont(900), fontSize: 11.5, color: C.bg, lineHeight: 1.16 }}>{flyer.cta.title}</Text>
            <Link src={REGISTER_URL} style={{ ...man(600), fontSize: 8.5, color: C.white, marginTop: 5, textDecoration: "none", backgroundColor: C.bg, padding: "4 7", borderRadius: 5 }}>{REGISTER_URL}</Link>
          </View>
          {qr && <View style={{ backgroundColor: C.white, borderRadius: 8, padding: 4.5 }}><Image src={qr} style={{ width: 72, height: 72 }} /></View>}
        </View>

        {/* Audience */}
        <Eyebrow>{flyer.audience.title}</Eyebrow>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 5 }}>
          {flyer.audience.items.map((a, i) => (
            <View key={i} style={{ width: (PW - 56 - 5) / 2, backgroundColor: C.elevated, borderRadius: 7, borderTopWidth: 1.5, borderTopColor: C.orange, padding: 6.5 }}>
              <Text style={{ ...mont(800), fontSize: 8.5, color: C.white, marginBottom: 2 }}>{a.title}</Text>
              <Text style={{ ...man(400), fontSize: 7, color: C.dim, lineHeight: 1.3 }}>{a.text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* FOOTER */}
      <View style={{ backgroundColor: C.dark, borderTopWidth: 1, borderTopColor: "rgba(249,115,22,0.4)", paddingHorizontal: 28, paddingVertical: 8, marginTop: 6 }}>
        <Text style={{ ...mont(800), fontSize: 9.5, color: C.white, textAlign: "center", lineHeight: 1.3 }}>{flyer.footer}</Text>
        <Text style={{ ...man(400), fontSize: 7, color: C.dim, textAlign: "center", marginTop: 3, letterSpacing: 1 }}>{flyer.org} × AX 10</Text>
      </View>
    </Page>
  </Document>
);

export async function generateRmaatFlyerPdf() {
  const imgBase = getImageBase();
  const qr = await QRCode.toDataURL(REGISTER_URL, {
    margin: 0, width: 360, errorCorrectionLevel: "M",
    color: { dark: "#0A1225", light: "#ffffff" },
  });
  const blob = await pdf(<RmaatFlyerDoc imgBase={imgBase} qr={qr} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "RMAAT_AX10_Flyer.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
