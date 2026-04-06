/**
 * Noteall One Pager PDF Generator
 * Single A4 Landscape page (841.89 x 595.28 pt)
 * High-density layout — smaller fonts allowed (min 6pt)
 */
import React from "react";
import {
  Document, Page, View, Text, Image, Link, pdf,
} from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;

const T = {
  bg: "#0a1118", bg2: "#111c26", fg: "#f0f4f8", fg2: "#c0ccd8",
  muted: "#7a8d9e", dim: "#5a6d7e", accent: "#15b89b",
  accentBg: "rgba(21,184,155,0.12)", border: "#162030",
};

const f = { fontFamily: "Inter" };

/* ── Helpers ── */
const SectionLabel = ({ children }) => (
  <Text style={{ fontSize: 7, fontWeight: 700, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 3 }}>{children}</Text>
);
const SectionTitle = ({ children }) => (
  <Text style={{ fontSize: 10, fontWeight: 700, color: T.fg, marginBottom: 3, lineHeight: 1.2 }}>{children}</Text>
);
const Body = ({ children, style }) => (
  <Text style={{ fontSize: 8, color: T.muted, lineHeight: 1.4, ...style }}>{children}</Text>
);
const DotItem = ({ children }) => (
  <View style={{ flexDirection: "row", gap: 3, alignItems: "flex-start", marginBottom: 2 }}>
    <View style={{ width: 3, height: 3, borderRadius: 1.5, backgroundColor: T.accent, marginTop: 2.5 }} />
    <Text style={{ fontSize: 8, color: T.muted, lineHeight: 1.4, flex: 1 }}>{children}</Text>
  </View>
);
const MiniCard = ({ children, accent, style }) => (
  <View style={{ backgroundColor: T.bg2, borderRadius: 4, borderWidth: 0.5, borderColor: accent ? T.accent : T.border, padding: 5, ...style }}>
    {children}
  </View>
);

const OnePagerDoc = ({ imgBase }) => (
  <Document title="Noteall — One Pager" author="Noteall">
    <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: 0 }}>

      {/* ═══ HEADER ═══ */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: T.border }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image src={`${imgBase}/images/noteall/logo-noteall.png`} style={{ width: 80, height: 26, objectFit: "contain" }} />
          <View style={{ width: 0.5, height: 16, backgroundColor: T.border }} />
          <Text style={{ fontSize: 9, fontWeight: 700, color: T.fg }}>AI-сервис, который превращает встречи и видео в структурированные данные</Text>
        </View>
        <Text style={{ fontSize: 7, fontWeight: 700, color: T.accent, letterSpacing: 1.5 }}>ONE PAGER</Text>
      </View>

      {/* ═══ GRID ═══ */}
      <View style={{ padding: 10, gap: 5 }}>

        {/* ROW 1: Problem | Solution | Market */}
        <View style={{ flexDirection: "row", gap: 5 }}>

          {/* PROBLEM */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>ПРОБЛЕМА</SectionLabel>
            <SectionTitle>Информация не превращается в данные</SectionTitle>
            <Body style={{ marginBottom: 4 }}>Команды тонут в созвонах и документах. Ценная информация теряется, ручная обработка занимает часы.</Body>
            <View style={{ flexDirection: "row", gap: 5 }}>
              <MiniCard style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: 700, color: T.accent, lineHeight: 1 }}>78%</Text>
                <Text style={{ fontSize: 7, color: T.muted, marginTop: 2, textAlign: "center" }}>перегрузка встречами</Text>
              </MiniCard>
              <MiniCard style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 18, fontWeight: 700, color: T.accent, lineHeight: 1 }}>275</Text>
                <Text style={{ fontSize: 7, color: T.muted, marginTop: 2, textAlign: "center" }}>прерываний в день</Text>
              </MiniCard>
            </View>
          </View>

          {/* SOLUTION */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>РЕШЕНИЕ</SectionLabel>
            <SectionTitle>Noteall забирает рутинную работу</SectionTitle>
            <View style={{ marginBottom: 3 }}>
              <DotItem>Транскрибация с определением спикеров</DotItem>
              <DotItem>Сценарный анализ под задачу и роль</DotItem>
              <DotItem>Работа с видео с любых видеохостингов</DotItem>
              <DotItem>Документы и ссылки как контекст анализа</DotItem>
            </View>
            <Text style={{ fontSize: 8, color: T.accent, fontWeight: 600 }}>На выходе — не транскрипт, а рабочий артефакт</Text>
          </View>

          {/* MARKET */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>РЫНОК</SectionLabel>
            <SectionTitle>Bottom-up (Россия)</SectionTitle>
            <View style={{ gap: 3, marginBottom: 4 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 8, color: T.muted }}>TAM ~1 млн компаний</Text>
                <Text style={{ fontSize: 9, fontWeight: 700, color: T.accent }}>48 млрд ₽</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 8, color: T.muted }}>SAM 450K компаний</Text>
                <Text style={{ fontSize: 9, fontWeight: 700, color: T.accent }}>21.6 млрд ₽</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between", backgroundColor: T.accentBg, borderRadius: 3, paddingHorizontal: 6, paddingVertical: 2 }}>
                <Text style={{ fontSize: 8, fontWeight: 600, color: T.fg }}>SOM 67.5K компаний</Text>
                <Text style={{ fontSize: 9, fontWeight: 700, color: T.accent }}>3.2 млрд ₽</Text>
              </View>
            </View>
            <View style={{ borderTopWidth: 0.5, borderTopColor: T.border, paddingTop: 4, flexDirection: "row", gap: 12 }}>
              <View><Text style={{ fontSize: 7, color: T.muted }}>ARPPU/мес.</Text><Text style={{ fontSize: 10, fontWeight: 700, color: T.accent }}>4 000 ₽</Text></View>
              <View><Text style={{ fontSize: 7, color: T.muted }}>ARPPU/год</Text><Text style={{ fontSize: 10, fontWeight: 700, color: T.accent }}>48 000 ₽</Text></View>
            </View>
          </View>
        </View>

        {/* ROW 2: Biz Model | GTM | Stage */}
        <View style={{ flexDirection: "row", gap: 5 }}>

          {/* BIZ MODEL */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>БИЗНЕС-МОДЕЛЬ</SectionLabel>
            <SectionTitle>Pay-as-you-go + подписка</SectionTitle>
            <MiniCard accent style={{ marginBottom: 3 }}>
              <Text style={{ fontSize: 8, fontWeight: 700, color: T.accent }}>Сейчас</Text>
              <Text style={{ fontSize: 8, color: T.muted, marginTop: 1 }}>Оплата за AI-вызовы, бесплатный старт</Text>
            </MiniCard>
            <MiniCard>
              <Text style={{ fontSize: 8, fontWeight: 700, color: T.dim }}>Через 2–3 мес.</Text>
              <Text style={{ fontSize: 8, color: T.muted, marginTop: 1 }}>Подписка с включёнными объёмами</Text>
            </MiniCard>
          </View>

          {/* GTM */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>GO-TO-MARKET</SectionLabel>
            <SectionTitle>Стратегия роста</SectionTitle>
            <View style={{ gap: 3 }}>
              <MiniCard><Text style={{ fontSize: 8, fontWeight: 700, color: T.accent }}>01 Встроенные механики</Text><Text style={{ fontSize: 7, color: T.muted, marginTop: 1 }}>Реферальная + аффилиат-программа</Text></MiniCard>
              <MiniCard><Text style={{ fontSize: 8, fontWeight: 700, color: T.accent }}>02 Расширение на команды</Text><Text style={{ fontSize: 7, color: T.muted, marginTop: 1 }}>Совместные сценарии, общий баланс</Text></MiniCard>
              <MiniCard><Text style={{ fontSize: 8, fontWeight: 700, color: T.accent }}>03 Точечные B2B-продажи</Text><Text style={{ fontSize: 7, color: T.muted, marginTop: 1 }}>Маркетинг, исследования, продукт</Text></MiniCard>
            </View>
          </View>

          {/* STAGE */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>ТЕКУЩАЯ СТАДИЯ</SectionLabel>
            <SectionTitle>Закрытое бета-тестирование</SectionTitle>
            <View style={{ flexDirection: "row", gap: 5, marginBottom: 3 }}>
              <MiniCard accent style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 11, fontWeight: 700, color: T.accent }}>13.04.2026</Text>
                <Text style={{ fontSize: 7, color: T.fg2, marginTop: 1 }}>Запуск</Text>
              </MiniCard>
              <MiniCard style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 11, fontWeight: 700, color: T.fg }}>AI-first</Text>
                <Text style={{ fontSize: 7, color: T.muted, marginTop: 1 }}>Разработка</Text>
              </MiniCard>
            </View>
            <Body>Сроки внедрения — <Text style={{ color: T.accent, fontWeight: 600 }}>дни вместо месяцев</Text> благодаря AI-инструментам</Body>
            <View style={{ flexDirection: "row", alignItems: "baseline", gap: 3, marginTop: 3 }}>
              <Text style={{ fontSize: 14, fontWeight: 700, color: T.accent }}>10–20x</Text>
              <Text style={{ fontSize: 8, fontWeight: 600, color: T.accent }}>Сокращение расходов на разработку</Text>
            </View>
          </View>
        </View>

        {/* ROW 3: Team (2/3) | Round (1/3) */}
        <View style={{ flexDirection: "row", gap: 5 }}>

          {/* TEAM */}
          <View style={{ flex: 2, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>КОМАНДА</SectionLabel>
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Image src={`${imgBase}/images/noteall/founder.png`}
                style={{ width: 48, height: 48, borderRadius: 6, objectFit: "cover" }} />
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 10, fontWeight: 700, color: T.fg, marginBottom: 2 }}>Дмитрий Бондарев — Основатель</Text>
                <View style={{ flexDirection: "row", gap: 3, flexWrap: "wrap", marginBottom: 2 }}>
                  <View style={{ backgroundColor: T.accentBg, borderRadius: 2, paddingHorizontal: 4, paddingVertical: 1 }}><Text style={{ fontSize: 6, fontWeight: 700, color: T.accent }}>30+ ЛЕТ В БИЗНЕСЕ</Text></View>
                  <View style={{ backgroundColor: T.accentBg, borderRadius: 2, paddingHorizontal: 4, paddingVertical: 1 }}><Text style={{ fontSize: 6, fontWeight: 700, color: T.accent }}>10+ СТАРТАПОВ</Text></View>
                  <View style={{ backgroundColor: T.accentBg, borderRadius: 2, paddingHorizontal: 4, paddingVertical: 1 }}><Text style={{ fontSize: 6, fontWeight: 700, color: T.accent }}>4 ВЫХОДА</Text></View>
                  <View style={{ backgroundColor: T.accentBg, borderRadius: 2, paddingHorizontal: 4, paddingVertical: 1 }}><Text style={{ fontSize: 6, fontWeight: 700, color: T.accent }}>25 ЛЕТ В ВЕНЧУРЕ</Text></View>
                </View>
                <Body>Опытный предприниматель. Создание продуктов с нуля до сервисов с миллионными аудиториями.</Body>
              </View>
            </View>
          </View>

          {/* ROUND */}
          <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
            <SectionLabel>РАУНД</SectionLabel>
            <Text style={{ fontSize: 16, fontWeight: 700, color: T.accent, marginBottom: 2 }}>5 млн ₽</Text>
            <Text style={{ fontSize: 8, color: T.muted, marginBottom: 3 }}>Burn-rate: 500 тыс. ₽/мес.</Text>
            <View style={{ flexDirection: "row", gap: 4, marginBottom: 3 }}>
              <View style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 11, fontWeight: 700, color: T.accent }}>400K ₽</Text><Text style={{ fontSize: 6, color: T.muted }}>MRR</Text></View>
              <View style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 11, fontWeight: 700, color: T.accent }}>&gt; 100</Text><Text style={{ fontSize: 6, color: T.muted }}>клиентов</Text></View>
              <View style={{ flex: 1, alignItems: "center" }}><Text style={{ fontSize: 11, fontWeight: 700, color: T.accent }}>&lt; 3 мес.</Text><Text style={{ fontSize: 6, color: T.muted }}>ROAS</Text></View>
            </View>
            <View style={{ borderTopWidth: 0.5, borderTopColor: T.border, paddingTop: 3 }}>
              <Text style={{ fontSize: 8, fontWeight: 700, color: T.fg, marginBottom: 1 }}>Дмитрий Бондарев</Text>
              <Link src="https://t.me/dmitrybondarev" style={{ fontSize: 7, color: T.muted, textDecoration: "none", marginBottom: 1 }}>Telegram: @dmitrybondarev</Link>
              <Link src="mailto:dmitry.bondarev@gmail.com" style={{ fontSize: 7, color: T.muted, textDecoration: "none", marginBottom: 1 }}>dmitry.bondarev@gmail.com</Link>
              <Text style={{ fontSize: 7, color: T.muted }}>+7 (921) 961-9644</Text>
            </View>
          </View>
        </View>
      </View>
    </Page>
  </Document>
);

export async function generateOnePagerPdf() {
  const imgBase = getImageBase();
  const blob = await pdf(<OnePagerDoc imgBase={imgBase} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Noteall_One_Pager.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
