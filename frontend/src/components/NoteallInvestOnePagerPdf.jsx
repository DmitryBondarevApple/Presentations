/**
 * Noteall — Инвест One Pager (PDF). Один лист A4 Landscape (841.89 x 595.28).
 * Вёрстка 3×3 (как исходный /onepager). Две темы: тёмная и светлая.
 * Контент — из data/noteallInvestOnePager.js.
 */
import React from "react";
import { Document, Page, View, Text, Image, Link, pdf } from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";
import { HEAD, SECTIONS, FOUNDER_PHOTO } from "@/data/noteallInvestOnePager";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const THEMES = {
  dark: {
    bg: "#0a1118", bg2: "#111c26", inner: "#0a1118", fg: "#f0f4f8", fg2: "#c0ccd8",
    muted: "#8a9aab", dim: "#5a6d7e", accent: "#15b89b", accentBg: "rgba(21,184,155,0.14)", border: "#1c2a3a",
  },
  light: {
    bg: "#ffffff", bg2: "#f6f9fb", inner: "#ffffff", fg: "#0f172a", fg2: "#334155",
    muted: "#64748b", dim: "#94a3b8", accent: "#0e9c8c", accentBg: "rgba(14,156,140,0.10)", border: "#e2e8f0",
  },
};

const f = { fontFamily: "Inter" };
const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const SLabel = ({ t, children }) => (
  <Text style={{ fontSize: 9, fontWeight: 700, color: t.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>{children}</Text>
);
const STitle = ({ t, children }) => (
  <Text style={{ fontSize: 13, fontWeight: 700, color: t.fg, marginBottom: 4, lineHeight: 1.14 }}>{children}</Text>
);
const Body = ({ t, children, style }) => (
  <Text style={{ fontSize: 10, color: t.muted, lineHeight: 1.4, ...style }}>{children}</Text>
);
const Dot = ({ t, children }) => (
  <View style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 4.5 }}>
    <View style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: t.accent, marginTop: 4 }} />
    <Text style={{ fontSize: 10, color: t.fg2, lineHeight: 1.48, flex: 1 }}>{children}</Text>
  </View>
);
const Cell = ({ t, children, flex = 1 }) => (
  <View style={{ flex, backgroundColor: t.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: t.border }}>{children}</View>
);
const MiniCard = ({ t, children, accent, style }) => (
  <View style={{ backgroundColor: t.inner, borderRadius: 4, borderWidth: 0.5, borderLeftWidth: accent ? 2 : 0.5, borderColor: accent ? t.accent : t.border, borderLeftColor: accent ? t.accent : t.border, padding: 7, ...style }}>
    {children}
  </View>
);

const OnePagerDoc = ({ imgBase, t }) => {
  const { problem, solution, product, market, model, gtm, stage, round, team } = SECTIONS;
  const arppuM = (market.arppu.find((a) => a.k.includes("ARPPU") && a.k.includes("мес")) || {}).v;
  const arppuY = (market.arppu.find((a) => a.k.includes("ARPPU") && a.k.includes("год")) || {}).v;
  const artifactShort = solution.artifact.split(":")[0];
  // stage parsing
  const s0 = stage.items[0];
  const s0a = s0.split(" ")[0];
  const s0b = s0.slice(s0.indexOf(" ") + 1);
  const s1 = stage.items[1].split(" — ");
  const s2 = stage.items[2];
  const s2a = s2.split(" ")[0];
  const s2b = cap(s2.slice(s2.indexOf(" ") + 1));

  return (
    <Document title="Noteall — Инвест One Pager" author="Noteall">
      <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: t.bg, color: t.fg, padding: 0 }}>

        {/* ═══ HEADER ═══ */}
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 9, borderBottomWidth: 0.5, borderBottomColor: t.border }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 9, flex: 1, paddingRight: 16 }}>
            <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 78, height: 22, objectFit: "contain" }} />
            <View style={{ width: 0.5, height: 24, backgroundColor: t.border }} />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10.5, fontWeight: 700, color: t.fg, lineHeight: 1.2 }}>{HEAD.title}</Text>
              <View style={{ flexDirection: "row", gap: 12, marginTop: 2.5 }}>
                <Link src={`https://t.me/${HEAD.tg.replace("@", "")}`} style={{ fontSize: 8, color: t.muted, textDecoration: "none" }}>{HEAD.tg}</Link>
                <Link src={`mailto:${HEAD.email}`} style={{ fontSize: 8, color: t.muted, textDecoration: "none" }}>{HEAD.email}</Link>
                <Text style={{ fontSize: 8, color: t.muted }}>{HEAD.phone}</Text>
              </View>
            </View>
          </View>
          <Text style={{ fontSize: 8, fontWeight: 700, color: t.accent, letterSpacing: 1.5 }}>ONE PAGER</Text>
        </View>

        {/* ═══ GRID ═══ */}
        <View style={{ padding: 8, gap: 4 }}>

          {/* ROW 1: Проблема | Решение | Рынок */}
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Cell t={t}>
              <SLabel t={t}>{problem.label}</SLabel>
              <STitle t={t}>{problem.title}</STitle>
              <Body t={t}>{problem.paras[0]}</Body>
              <Text style={{ fontSize: 9.5, color: t.accent, fontWeight: 600, lineHeight: 1.4, marginTop: 6 }}>{problem.loss}</Text>
            </Cell>

            <Cell t={t}>
              <SLabel t={t}>{solution.label}</SLabel>
              <STitle t={t}>{solution.title}</STitle>
              <View style={{ marginBottom: 6 }}>
                {solution.items.slice(0, 5).map((it, i) => <Dot key={i} t={t}>{cap(it)}</Dot>)}
              </View>
              <Text style={{ fontSize: 10, color: t.accent, fontWeight: 600, lineHeight: 1.35 }}>{artifactShort}</Text>
            </Cell>

            <Cell t={t}>
              <SLabel t={t}>{market.label}</SLabel>
              <STitle t={t}>{market.title}</STitle>
              <View style={{ gap: 5, marginBottom: 8 }}>
                {market.tiers.map((tr, i) => {
                  const hi = tr.name === "SOM";
                  return (
                    <View key={i} style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", backgroundColor: hi ? t.accentBg : "transparent", borderRadius: 3, paddingVertical: hi ? 3 : 0, paddingHorizontal: hi ? 4 : 0 }}>
                      <Text style={{ fontSize: 10, color: hi ? t.fg : t.muted, fontWeight: hi ? 600 : 400 }}>{tr.name} {tr.co}</Text>
                      <Text style={{ fontSize: 11, fontWeight: 700, color: t.accent }}>{tr.val.replace(" / год", "")}</Text>
                    </View>
                  );
                })}
              </View>
              <View style={{ borderTopWidth: 0.5, borderTopColor: t.border, paddingTop: 6, flexDirection: "row", gap: 18 }}>
                <View><Text style={{ fontSize: 9, color: t.muted }}>ARPPU/мес.</Text><Text style={{ fontSize: 14, fontWeight: 700, color: t.accent }}>{arppuM}</Text></View>
                <View><Text style={{ fontSize: 9, color: t.muted }}>ARPPU/год</Text><Text style={{ fontSize: 14, fontWeight: 700, color: t.accent }}>{arppuY}</Text></View>
              </View>
            </Cell>
          </View>

          {/* ROW 2: Бизнес-модель | Go-to-Market | Раунд */}
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Cell t={t}>
              <SLabel t={t}>{model.label}</SLabel>
              <STitle t={t}>{model.title}</STitle>
              <Text style={{ fontSize: 11, fontWeight: 700, color: t.accent, marginBottom: 5 }}>{model.blocks[0].name}</Text>
              {model.blocks[0].items.map((it, i) => (
                <View key={i} style={{ flexDirection: "row", gap: 5, alignItems: "flex-start", marginBottom: 4 }}>
                  <View style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: t.accent, marginTop: 3.5 }} />
                  <Text style={{ fontSize: 10.5, color: t.fg2, lineHeight: 1.4, flex: 1 }}>{cap(it)}</Text>
                </View>
              ))}
            </Cell>

            <Cell t={t}>
              <SLabel t={t}>{gtm.label}</SLabel>
              <STitle t={t}>{gtm.title}</STitle>
              <View style={{ marginTop: 3 }}>
                {gtm.blocks.map((b, i) => (
                  <View key={i} style={{ flexDirection: "row", alignItems: "center", gap: 10, paddingVertical: 8,
                    borderBottomWidth: i < gtm.blocks.length - 1 ? 0.5 : 0, borderBottomColor: t.border }}>
                    <Text style={{ fontSize: 14, fontWeight: 700, color: t.accent }}>{`0${i + 1}`}</Text>
                    <Text style={{ fontSize: 11.5, fontWeight: 700, color: t.fg, flex: 1 }}>{b.name}</Text>
                  </View>
                ))}
              </View>
            </Cell>

            <Cell t={t}>
              <SLabel t={t}>{round.label}</SLabel>
              <Text style={{ fontSize: 26, fontWeight: 700, color: t.accent, marginBottom: 3 }}>{round.amount}</Text>
              <Text style={{ fontSize: 10, color: t.muted, marginBottom: 7 }}>{round.burn}</Text>
              <Text style={{ fontSize: 9, fontWeight: 700, color: t.accent, marginBottom: 5 }}>Цели на 6 месяцев</Text>
              <View style={{ flexDirection: "row", gap: 6, marginBottom: 8 }}>
                {round.metrics.map((m, i) => (
                  <View key={i} style={{ flex: 1, alignItems: "center" }}>
                    <Text style={{ fontSize: 15, fontWeight: 700, color: t.accent }}>{m.n}</Text>
                    <Text style={{ fontSize: 8, color: t.muted, marginTop: 2 }}>{m.l}</Text>
                  </View>
                ))}
              </View>
              <View style={{ borderTopWidth: 0.5, borderTopColor: t.border, paddingTop: 6 }}>
                <Text style={{ fontSize: 9, color: t.fg2, letterSpacing: 0.3 }}>{round.funds.map((b) => b.name).join("  ·  ")}</Text>
              </View>
            </Cell>
          </View>

          {/* ROW 3: Команда (2/3) | Текущая стадия (1/3) */}
          <View style={{ flexDirection: "row", gap: 5 }}>
            <Cell t={t} flex={2}>
              <SLabel t={t}>{team.label}</SLabel>
              <View style={{ flexDirection: "row", gap: 12 }}>
                <Image src={`${imgBase}${FOUNDER_PHOTO}`} style={{ width: 58, height: 58, borderRadius: 6, objectFit: "cover" }} />
                <View style={{ flex: 1 }}>
                  <Text style={{ fontSize: 12.5, fontWeight: 700, color: t.fg, marginBottom: 5 }}>{team.name}</Text>
                  <View style={{ flexDirection: "row", gap: 4, flexWrap: "wrap", marginBottom: 5 }}>
                    {team.stats.map((s, i) => (
                      <View key={i} style={{ backgroundColor: t.accentBg, borderRadius: 2, paddingHorizontal: 5, paddingVertical: 2 }}>
                        <Text style={{ fontSize: 7.5, fontWeight: 700, color: t.accent, textTransform: "uppercase" }}>{s.v} {s.l}</Text>
                      </View>
                    ))}
                  </View>
                  <Body t={t} style={{ fontSize: 11.5, lineHeight: 1.4 }}>{team.note}</Body>
                </View>
              </View>
            </Cell>

            <Cell t={t} flex={1}>
              <SLabel t={t}>{stage.label}</SLabel>
              <STitle t={t}>{stage.title}</STitle>
              <View style={{ flexDirection: "row", gap: 6, marginBottom: 5 }}>
                <MiniCard t={t} accent style={{ flex: 1, alignItems: "center" }}>
                  <Text style={{ fontSize: 13, fontWeight: 700, color: t.accent }}>{s0a}</Text>
                  <Text style={{ fontSize: 8.5, color: t.fg2, marginTop: 2 }}>{cap(s0b)}</Text>
                </MiniCard>
                <MiniCard t={t} style={{ flex: 1.4, justifyContent: "center" }}>
                  <Text style={{ fontSize: 9.5, color: t.muted, lineHeight: 1.35 }}>{s1[0]} — <Text style={{ color: t.accent, fontWeight: 600 }}>{s1[1]}</Text></Text>
                </MiniCard>
              </View>
              <View style={{ flexDirection: "row", alignItems: "center", gap: 6, marginTop: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: 700, color: t.accent }}>{s2a}</Text>
                <Text style={{ fontSize: 10, fontWeight: 600, color: t.accent, flex: 1, lineHeight: 1.25 }}>{s2b}</Text>
              </View>
            </Cell>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export async function generateNoteallInvestOnePagerPdf(theme = "dark") {
  const imgBase = getImageBase();
  const t = THEMES[theme] || THEMES.dark;
  const blob = await pdf(<OnePagerDoc imgBase={imgBase} t={t} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `Noteall_Invest_OnePager_${theme === "light" ? "Light" : "Dark"}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
