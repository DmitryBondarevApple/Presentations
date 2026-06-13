/**
 * Noteall — Инвест One Pager (PDF). Один лист A4 Landscape (841.89 x 595.28).
 * Светлая тема, фирменный teal Noteall. Высокая плотность — мелкие шрифты.
 */
import React from "react";
import { Document, Page, View, Text, Image, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";
import { HEAD, SECTIONS, FOUNDER_PHOTO } from "@/data/noteallInvestOnePager";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const T = {
  bg: "#ffffff", card: "#f8fafc", fg: "#0f172a", fg2: "#1e293b",
  muted: "#475569", dim: "#94a3b8", accent: "#0e9c8c", border: "#e2e8f0",
  accentBg: "rgba(14,156,140,0.10)",
};
const f = { fontFamily: "Inter" };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const Sec = ({ s, children }) => (
  <View style={{ backgroundColor: T.card, borderRadius: 4, padding: 4.5, marginBottom: 3,
    borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 2.5,
    borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent }}>
    <Text style={{ fontSize: 6.8, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 1 }}>{s.label}</Text>
    {s.title && <Text style={{ fontSize: 8, fontWeight: 700, color: T.fg, lineHeight: 1.1, marginTop: 1, marginBottom: 2 }}>{s.title}</Text>}
    {children}
  </View>
);

const Para = ({ children, style }) => (
  <Text style={{ fontSize: 6.8, color: T.muted, lineHeight: 1.16, marginBottom: 1.5, ...style }}>{children}</Text>
);

const Bul = ({ children, w }) => (
  <View style={{ flexDirection: "row", gap: 3, alignItems: "flex-start", marginBottom: 0.8, width: w, paddingRight: 5 }}>
    <View style={{ width: 2.2, height: 2.2, borderRadius: 1.1, backgroundColor: T.accent, marginTop: 2.6 }} />
    <Text style={{ fontSize: 6.8, color: T.fg2, lineHeight: 1.14, flex: 1 }}>{children}</Text>
  </View>
);
const Buls = ({ items, cols = 1 }) => (
  <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
    {items.map((it, i) => <Bul key={i} w={cols === 2 ? "50%" : "100%"}>{cap(it)}</Bul>)}
  </View>
);

const Mini = ({ b, cols = 2, inline = false }) => (
  <View style={{ backgroundColor: T.bg, borderRadius: 3, padding: 3.5, marginBottom: 2,
    borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderLeftWidth: 2,
    borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border, borderLeftColor: T.accent }}>
    <Text style={{ fontSize: 7, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.4 }}>{b.name}</Text>
    {b.desc && <Text style={{ fontSize: 6.6, color: T.muted, lineHeight: 1.16, marginTop: 1, marginBottom: 0.5 }}>{b.desc}</Text>}
    {inline
      ? <Text style={{ fontSize: 6.8, color: T.fg2, lineHeight: 1.2, marginTop: 1 }}>{b.items.map(cap).join(" · ")}</Text>
      : <View style={{ marginTop: 1 }}><Buls items={b.items} cols={cols} /></View>}
  </View>
);

const OnePagerDoc = ({ imgBase }) => {
  const { problem, solution, product, market, model, gtm, stage, round, team } = SECTIONS;
  return (
    <Document>
      <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, paddingHorizontal: 18, paddingVertical: 11 }}>
        {/* HEADER */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 7, paddingBottom: 6, borderBottomWidth: 0.5, borderBottomColor: T.border }}>
          <View style={{ flexDirection: "row", flex: 1, paddingRight: 18, gap: 10, alignItems: "flex-start" }}>
            <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ height: 17, width: 70, objectFit: "contain" }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10.5, fontWeight: 700, color: T.fg, lineHeight: 1.15 }}>{HEAD.title}</Text>
              <Text style={{ fontSize: 8, color: T.muted, lineHeight: 1.25, marginTop: 2 }}>{HEAD.subtitle}</Text>
            </View>
          </View>
          <View style={{ alignItems: "flex-end" }}>
            <Text style={{ fontSize: 8, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 3 }}>One Pager</Text>
            <Text style={{ fontSize: 10, fontWeight: 700, color: T.accent }}>{HEAD.site}</Text>
            <Text style={{ fontSize: 7.5, color: T.muted, marginTop: 2 }}>{HEAD.tg}</Text>
            <Text style={{ fontSize: 7.5, color: T.muted, marginTop: 1 }}>{HEAD.email}</Text>
            <Text style={{ fontSize: 7.5, color: T.muted, marginTop: 1 }}>{HEAD.phone}</Text>
          </View>
        </View>

        {/* 3 COLUMNS */}
        <View style={{ flexDirection: "row", gap: 7, flex: 1 }}>
          {/* COL 1 */}
          <View style={{ flex: 1 }}>
            <Sec s={problem}>
              {problem.paras.map((p, i) => <Para key={i}>{p}</Para>)}
              <Text style={{ fontSize: 7.2, fontWeight: 600, color: T.accent, lineHeight: 1.18 }}>{problem.loss}</Text>
            </Sec>
            <Sec s={solution}>
              <Para>{solution.intro}</Para>
              <Buls items={solution.items} cols={2} />
              <Text style={{ fontSize: 6.8, color: T.fg2, lineHeight: 1.18, marginTop: 2.5, paddingTop: 2.5, borderTopWidth: 0.5, borderTopColor: T.border }}>{solution.artifact}</Text>
            </Sec>
            <Sec s={stage}>
              <Para>{stage.intro}</Para>
              <Text style={{ fontSize: 6.8, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6, marginBottom: 1.5 }}>Ближайшее развитие</Text>
              <Buls items={stage.items} cols={1} />
            </Sec>
          </View>

          {/* COL 2 */}
          <View style={{ flex: 1 }}>
            <Sec s={product}>
              <Para>{product.intro}</Para>
              <Buls items={product.items} cols={2} />
            </Sec>
            <Sec s={market}>
              <Para>{market.intro}</Para>
              {market.tiers.map((t, i) => (
                <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: T.bg, borderRadius: 3, borderWidth: 0.5, borderColor: T.border, paddingVertical: 2.5, paddingHorizontal: 6, marginBottom: 2 }}>
                  <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.fg }}>{t.name}<Text style={{ fontSize: 6.6, fontWeight: 400, color: T.muted }}>  {t.co}</Text></Text>
                  <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.accent }}>{t.val}</Text>
                </View>
              ))}
              <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 1.5, paddingTop: 2.5, borderTopWidth: 0.5, borderTopColor: T.border }}>
                {market.arppu.map((a, i) => (
                  <View key={i} style={{ width: "50%", flexDirection: "row", justifyContent: "space-between", paddingRight: 8, marginBottom: 1 }}>
                    <Text style={{ fontSize: 6.6, color: T.muted }}>{a.k}</Text>
                    <Text style={{ fontSize: 7.5, fontWeight: 700, color: T.accent }}>{a.v}</Text>
                  </View>
                ))}
              </View>
              <Para style={{ marginTop: 2, marginBottom: 0 }}>{market.note}</Para>
            </Sec>
            <Sec s={model}>
              {model.blocks.map((b, i) => <Mini key={i} b={b} inline />)}
            </Sec>
          </View>

          {/* COL 3 */}
          <View style={{ flex: 1 }}>
            <Sec s={gtm}>
              {gtm.blocks.map((b, i) => <Mini key={i} b={b} inline />)}
              <Para style={{ marginTop: 1, marginBottom: 0 }}>{gtm.note}</Para>
            </Sec>
            <Sec s={round}>
              <View style={{ flexDirection: "row", alignItems: "baseline", gap: 6, marginBottom: 2 }}>
                <Text style={{ fontSize: 15, fontWeight: 700, color: T.accent }}>{round.amount}</Text>
                <Text style={{ fontSize: 7.5, color: T.muted }}>{round.burn}</Text>
              </View>
              {round.funds.map((b, i) => (
                <View key={i} style={{ backgroundColor: T.bg, borderRadius: 3, padding: 3, marginBottom: 1.5, borderLeftWidth: 2, borderLeftColor: T.accent, borderTopWidth: 0.5, borderRightWidth: 0.5, borderBottomWidth: 0.5, borderTopColor: T.border, borderRightColor: T.border, borderBottomColor: T.border }}>
                  <Text style={{ fontSize: 7, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.4 }}>{b.name}</Text>
                  <Text style={{ fontSize: 6.8, color: T.fg2, lineHeight: 1.18 }}>{b.items.map(cap).join(" · ")}</Text>
                </View>
              ))}
              <Text style={{ fontSize: 6.8, fontWeight: 700, color: T.accent, textTransform: "uppercase", letterSpacing: 0.6, marginTop: 1, marginBottom: 1 }}>Цели на 6 месяцев</Text>
              <Buls items={round.goals} cols={1} />
            </Sec>
            <Sec s={team}>
              <View style={{ flexDirection: "row", gap: 7, marginBottom: 2.5 }}>
                <Image src={`${imgBase}${FOUNDER_PHOTO}`} style={{ width: 34, height: 34, borderRadius: 5, objectFit: "cover" }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 7.6, fontWeight: 700, color: T.fg, lineHeight: 1.15, marginBottom: 1.5 }}>{team.name}</Text>
                  <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 2 }}>
                    {team.stats.map((s, i) => (
                      <Text key={i} style={{ fontSize: 6.2, fontWeight: 700, color: T.accent, backgroundColor: T.accentBg, borderRadius: 3, paddingVertical: 1.2, paddingHorizontal: 3 }}>{s.v} {s.l}</Text>
                    ))}
                  </View>
                </View>
              </View>
              <Buls items={team.exp} cols={1} />
              <Text style={{ fontSize: 6.6, color: T.muted, lineHeight: 1.16, marginTop: 1.5, paddingTop: 1.5, borderTopWidth: 0.5, borderTopColor: T.border }}>{team.note}</Text>
            </Sec>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export async function generateNoteallInvestOnePagerPdf() {
  const imgBase = getImageBase();
  const blob = await pdf(<OnePagerDoc imgBase={imgBase} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Noteall_Invest_OnePager.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
