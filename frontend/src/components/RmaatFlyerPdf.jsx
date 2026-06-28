/**
 * Флайер «АНО «РМААТ» × AX 10» — PDF
 * A4 Portrait (595.28 x 841.89 pt) · одна страница
 */
import React from "react";
import { Document, Page, View, Text, Image, Link, pdf } from "@react-pdf/renderer";
import QRCode from "qrcode";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";
import { flyer, REGISTER_URL } from "@/data/rmaatFlyer";

registerInterFont();

const PW = 595.28;
const PH = 841.89;

const C = {
  navy: "#0a1838",
  dark: "#061026",
  card: "#102348",
  orange: "#FF7A1A",
  white: "#ffffff",
  slate: "#c7d2e0",
  dim: "#9fb0c8",
};

const f = { fontFamily: "Inter" };

const Dot = () => (
  <Text style={{ color: C.orange, fontWeight: 700, fontSize: 10, marginRight: 5 }}>›</Text>
);

const RmaatFlyerDoc = ({ imgBase, qr }) => (
  <Document title="АНО РМААТ × AX10 — Флайер" author="АНО РМААТ × AX10">
    <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: C.navy, color: C.white }}>

      {/* HEADER */}
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 8, backgroundColor: C.dark, paddingVertical: 9, borderBottomWidth: 0.5, borderBottomColor: "rgba(255,255,255,0.12)" }}>
        <Text style={{ fontSize: 12, fontWeight: 700, color: C.white }}>{flyer.org}</Text>
        <Text style={{ fontSize: 13, color: C.orange }}>×</Text>
        <Image src={`${imgBase}/images/ax10/logo-ax10.png`} style={{ width: 50, height: 17, objectFit: "contain" }} />
      </View>

      {/* HERO */}
      <View style={{ position: "relative", height: 150 }}>
        <Image src={`${imgBase}/images/rmaat/plane-hero.jpg`} style={{ width: PW, height: 150, objectFit: "cover" }} />
        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0, paddingHorizontal: 24, paddingBottom: 12, paddingTop: 40, backgroundColor: "rgba(10,24,56,0.55)" }}>
          <Text style={{ fontSize: 9, fontWeight: 700, color: C.orange, letterSpacing: 2, marginBottom: 3 }}>{flyer.hero.kickerLight}</Text>
          <Text style={{ fontSize: 15, fontWeight: 700, color: C.white, lineHeight: 1.2 }}>{flyer.hero.headline}</Text>
        </View>
      </View>

      {/* BODY */}
      <View style={{ paddingHorizontal: 24, paddingTop: 12, paddingBottom: 10 }}>

        <Text style={{ fontSize: 9.5, color: C.slate, lineHeight: 1.4, marginBottom: 9 }}>{flyer.hero.subtitle}</Text>

        {/* Time block */}
        <View style={{ flexDirection: "row", gap: 8, backgroundColor: "rgba(255,122,26,0.10)", borderWidth: 0.7, borderColor: "rgba(255,122,26,0.35)", borderRadius: 8, padding: 10, marginBottom: 9 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 10, fontWeight: 700, color: C.orange }}>⏱  {flyer.time.title}</Text>
            <Text style={{ fontSize: 9, color: C.slate, marginTop: 3, lineHeight: 1.35 }}>{flyer.time.text}</Text>
          </View>
        </View>

        {/* About */}
        <View style={{ backgroundColor: C.dark, borderRadius: 8, borderWidth: 0.5, borderColor: "rgba(255,255,255,0.10)", padding: 12, marginBottom: 9 }}>
          <Text style={{ fontSize: 11.5, fontWeight: 700, color: C.white, marginBottom: 4 }}>{flyer.about.title}</Text>
          <Text style={{ fontSize: 9, color: C.slate, lineHeight: 1.4, marginBottom: 5 }}>{flyer.about.intro}</Text>
          {flyer.about.points.map((p, i) => (
            <View key={i} style={{ flexDirection: "row", alignItems: "flex-start", marginBottom: 3 }}>
              <Dot />
              <Text style={{ fontSize: 9, color: C.slate, lineHeight: 1.35, flex: 1 }}>{p}</Text>
            </View>
          ))}
        </View>

        {/* Feature cards */}
        <View style={{ flexDirection: "row", gap: 7, marginBottom: 9 }}>
          {flyer.features.map((ft, i) => (
            <View key={i} style={{ flex: 1, backgroundColor: C.card, borderRadius: 8, borderWidth: 0.5, borderColor: "rgba(255,255,255,0.06)", padding: 9 }}>
              <Text style={{ fontSize: 9, fontWeight: 700, color: C.orange, marginBottom: 3 }}>{ft.title}</Text>
              <Text style={{ fontSize: 8, color: C.dim, lineHeight: 1.35 }}>{ft.text}</Text>
            </View>
          ))}
        </View>

        {/* CTA + QR */}
        <View style={{ flexDirection: "row", gap: 12, backgroundColor: C.orange, borderRadius: 8, padding: 12, marginBottom: 9, alignItems: "center" }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 11, fontWeight: 700, color: C.white, lineHeight: 1.25 }}>{flyer.cta.title}</Text>
            <Text style={{ fontSize: 8, color: "rgba(255,255,255,0.85)", marginTop: 6 }}>{flyer.cta.label}</Text>
            <Link src={REGISTER_URL} style={{ fontSize: 8.5, fontWeight: 600, color: C.navy, marginTop: 3, textDecoration: "none", backgroundColor: C.white, padding: "3 6", borderRadius: 4 }}>{REGISTER_URL}</Link>
          </View>
          {qr && <Image src={qr} style={{ width: 84, height: 84, borderRadius: 6, backgroundColor: C.white, padding: 4 }} />}
        </View>

        {/* Audience */}
        <Text style={{ fontSize: 11.5, fontWeight: 700, color: C.white, marginBottom: 6 }}>{flyer.audience.title}</Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 6 }}>
          {flyer.audience.items.map((a, i) => (
            <View key={i} style={{ width: (PW - 48 - 6) / 2, backgroundColor: C.dark, borderRadius: 6, borderWidth: 0.5, borderColor: "rgba(255,255,255,0.06)", padding: 8 }}>
              <Text style={{ fontSize: 8.5, fontWeight: 700, color: C.orange, marginBottom: 2 }}>{a.title}</Text>
              <Text style={{ fontSize: 7.5, color: C.dim, lineHeight: 1.3 }}>{a.text}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* FOOTER */}
      <View style={{ position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: C.dark, borderTopWidth: 1, borderTopColor: "rgba(255,122,26,0.4)", paddingHorizontal: 24, paddingVertical: 9 }}>
        <Text style={{ fontSize: 9.5, fontWeight: 700, color: C.white, textAlign: "center", lineHeight: 1.3 }}>{flyer.footer}</Text>
      </View>
    </Page>
  </Document>
);

export async function generateRmaatFlyerPdf() {
  const imgBase = getImageBase();
  const qr = await QRCode.toDataURL(REGISTER_URL, {
    margin: 0, width: 320, errorCorrectionLevel: "M",
    color: { dark: "#0a1838", light: "#ffffff" },
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
