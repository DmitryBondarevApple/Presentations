/**
 * Переиспользуемые PDF-компоненты для @react-pdf/renderer
 *
 * Используются всеми PDF-генераторами презентаций.
 * Документация: /app/docs/PDF_GENERATION_GUIDE.md
 */
import React from "react";
import { View, Text, Font, Svg, Circle } from "@react-pdf/renderer";

/* ── Регистрация шрифтов ── */
export function registerInterFont() {
  Font.register({
    family: "Inter",
    fonts: [
      { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuLyfMZg.ttf", fontWeight: 400 },
      { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZg.ttf", fontWeight: 600 },
      { src: "https://fonts.gstatic.com/s/inter/v20/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZg.ttf", fontWeight: 700 },
    ],
  });
}

/* ── Константы страницы A4 Landscape ── */
export const PAGE = {
  W: 841.89,
  H: 595.28,
  PX: 36,
  PY: 30,
};

/* ── Стиль страницы (базовый) ── */
export function pageStyle(theme) {
  return {
    width: PAGE.W,
    height: PAGE.H,
    backgroundColor: theme.bg,
    color: theme.fg,
    fontFamily: "Inter",
    padding: `${PAGE.PY} ${PAGE.PX}`,
    position: "relative",
  };
}

/* ── Header: лейбл + номер слайда ── */
export const Header = ({ label, num, total, theme }) => (
  <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 12 }}>
    {label ? (
      <Text style={{ fontWeight: 700, fontSize: 11, letterSpacing: 2, color: theme.muted, textTransform: "uppercase" }}>
        {label}
      </Text>
    ) : <View />}
    {num && (
      <Text style={{ fontSize: 11, color: theme.dim }}>
        {String(num).padStart(2, "0")} / {String(total).padStart(2, "0")}
      </Text>
    )}
  </View>
);

/* ── Brand: нижний левый угол ── */
export const Brand = ({ text, accentText, theme }) => (
  <Text style={{ position: "absolute", bottom: 14, left: PAGE.PX, fontSize: 8, letterSpacing: 2, color: theme.border2 }}>
    {text}<Text style={{ color: theme.accent }}> {accentText}</Text>
  </Text>
);

/* ── Dot: маркер списка ── */
export const Dot = ({ size = 6, color }) => (
  <Svg width={size} height={size} style={{ marginTop: 5, flexShrink: 0 }}>
    <Circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
  </Svg>
);

/* ── Badge: тег/бейдж ── */
export const Badge = ({ children, solid, theme }) => (
  <View style={{
    backgroundColor: solid ? theme.accent : theme.accentBg,
    borderRadius: 4,
    padding: "4 14",
    alignSelf: "flex-start",
  }}>
    <Text style={{ fontSize: 10, fontWeight: 700, letterSpacing: 1.5, color: solid ? "#fff" : theme.accent }}>
      {children}
    </Text>
  </View>
);

/* ── Card: карточка с фоном и бордером ── */
export const Card = ({ children, accentBorder, theme, style }) => (
  <View style={[
    { backgroundColor: theme.bg2, borderRadius: 8, borderWidth: 1, borderColor: theme.border, padding: 18 },
    accentBorder && { borderLeftWidth: 3, borderLeftColor: theme.accent },
    style,
  ]}>
    {children}
  </View>
);

/* ── Divider: горизонтальная линия ── */
export const Divider = ({ width = 50, color, mt = 0, mb = 0 }) => (
  <View style={{ width, height: 2, backgroundColor: color, marginTop: mt, marginBottom: mb, opacity: 0.6 }} />
);

/* ── Размерная сетка шрифтов ── */
export const FONT = {
  h1: { fontSize: 36, fontWeight: 700, lineHeight: 1.15 },
  h2: { fontSize: 36, fontWeight: 700, lineHeight: 1.15 },
  h3: { fontSize: 18, fontWeight: 700, lineHeight: 1.3 },
  subtitle: { fontSize: 14, fontWeight: 400, lineHeight: 1.5 },
  body: { fontSize: 13, fontWeight: 400, lineHeight: 1.5 },
  cardTitle: { fontSize: 14, fontWeight: 700 },
  cardBody: { fontSize: 12, fontWeight: 400, lineHeight: 1.5 },
  small: { fontSize: 11, fontWeight: 400 },
  caption: { fontSize: 10, fontWeight: 400 },
};

/* ── Утилита скачивания PDF ── */
export function getImageBase() {
  return (typeof window !== "undefined" ? window.location.origin : "") + (process.env.PUBLIC_URL || "");
}
