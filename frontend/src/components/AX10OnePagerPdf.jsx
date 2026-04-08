/**
 * AX10 One Pager PDF Generator
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
  bg: "#0b1120", bg2: "#131d2e", fg: "#f0f4f8", fg2: "#c4d0dc",
  muted: "#7a8d9e", dim: "#5a6d80", accent: "#3b82f6",
  accentBg: "rgba(59,130,246,0.12)", border: "#1a2a3e",
};

const f = { fontFamily: "Inter" };

const SectionLabel = ({ children }) => (
  <Text style={{ fontSize: 9, fontWeight: 700, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 5 }}>{children}</Text>
);
const SectionTitle = ({ children }) => (
  <Text style={{ fontSize: 14, fontWeight: 700, color: T.fg, marginBottom: 5, lineHeight: 1.2 }}>{children}</Text>
);
const Body = ({ children, style }) => (
  <Text style={{ fontSize: 10, color: T.muted, lineHeight: 1.5, ...style }}>{children}</Text>
);
const DotItem = ({ children }) => (
  <View style={{ flexDirection: "row", gap: 4, alignItems: "flex-start", marginBottom: 3 }}>
    <View style={{ width: 3.5, height: 3.5, borderRadius: 2, backgroundColor: T.accent, marginTop: 3.5 }} />
    <Text style={{ fontSize: 9.5, color: T.muted, lineHeight: 1.5, flex: 1 }}>{children}</Text>
  </View>
);
const StepItem = ({ num, title }) => (
  <View style={{ flexDirection: "row", gap: 4, alignItems: "flex-start", marginBottom: 3 }}>
    <Text style={{ fontSize: 8, fontWeight: 700, color: T.accent, opacity: 0.6, width: 12 }}>{num}</Text>
    <Text style={{ fontSize: 9.5, color: T.muted, lineHeight: 1.4, flex: 1 }}>{title}</Text>
  </View>
);
const MiniCard = ({ children, accent, style }) => (
  <View style={{ backgroundColor: T.bg2, borderRadius: 4, borderWidth: accent ? 1 : 0.5, borderColor: accent ? T.accent : T.border, padding: 7, ...style }}>
    {children}
  </View>
);
const Cell = ({ children, style }) => (
  <View style={{ flex: 1, backgroundColor: T.bg2, borderRadius: 5, padding: 12, borderWidth: 0.5, borderColor: T.border, ...style }}>
    {children}
  </View>
);

const AX10OnePagerDoc = ({ imgBase }) => (
  <Document title="AX10 — One Pager" author="AX10">
    <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: 0 }}>

      {/* HEADER */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 20, paddingVertical: 10, borderBottomWidth: 0.5, borderBottomColor: T.border }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
          <Image src={`${imgBase}/images/ax10/logo-ax10.png`} style={{ width: 70, height: 24, objectFit: "contain" }} />
          <View style={{ width: 0.5, height: 20, backgroundColor: T.border }} />
          <View>
            <Text style={{ fontSize: 10, fontWeight: 700, color: T.fg }}>От идеи цифрового сервиса к готовому ТЗ на разработку</Text>
            <View style={{ flexDirection: "row", gap: 12, marginTop: 2 }}>
              <Link src="https://t.me/smartfincons" style={{ fontSize: 8, color: T.fg2, textDecoration: "none" }}>@smartfincons</Link>
              <Text style={{ fontSize: 8, color: T.fg2 }}>+7 (900) 916-73-69</Text>
              <Link src="https://ax10.ru" style={{ fontSize: 8, color: T.fg2, textDecoration: "none" }}>ax10.ru</Link>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 7, fontWeight: 700, color: T.accent, letterSpacing: 1.5 }}>ONE PAGER</Text>
      </View>

      {/* GRID */}
      <View style={{ flex: 1, padding: 10, gap: 5 }}>

        {/* ROW 1: Проблема | Решение | Процесс */}
        <View style={{ flexDirection: "row", gap: 5, flex: 1 }}>
          <Cell>
            <SectionLabel>ПРОБЛЕМА</SectionLabel>
            <SectionTitle>Запуск на догадках</SectionTitle>
            <Body style={{ marginBottom: 5 }}>На старте есть идея, но ключевые вопросы без ответа:</Body>
            <DotItem>Кто станет ранним пользователем</DotItem>
            <DotItem>Какие сценарии действительно нужны</DotItem>
            <DotItem>Какие гипотезы подтверждаются рынком</DotItem>
            <DotItem>Что должно войти в первый релиз</DotItem>
            <Text style={{ fontSize: 9.5, color: T.accent, fontWeight: 600, marginTop: 4 }}>Разработка без проверки = месяцы и миллионы впустую</Text>
          </Cell>

          <Cell>
            <SectionLabel>РЕШЕНИЕ</SectionLabel>
            <SectionTitle>AX10 готовит основу для разработки</SectionTitle>
            <Body style={{ marginBottom: 5 }}>Исследовательский и продуктово-аналитический проект. На выходе:</Body>
            <DotItem>Подтверждённые или опровергнутые гипотезы</DotItem>
            <DotItem>Приоритетные пользовательские сценарии</DotItem>
            <DotItem>Портрет раннего пользователя</DotItem>
            <DotItem>Структура MVP и техническое задание</DotItem>
          </Cell>

          <Cell>
            <SectionLabel>ПРОЦЕСС</SectionLabel>
            <SectionTitle>7 этапов за 7–9 недель</SectionTitle>
            <StepItem num="01" title="Параметры проекта" />
            <StepItem num="02" title="Дизайн исследования" />
            <StepItem num="03" title="Полевой этап (интервью, анкеты)" />
            <StepItem num="04" title="ИИ-аналитика интервью" />
            <StepItem num="05" title="Кабинетное исследование рынка" />
            <StepItem num="06" title="Синтез выводов и сценарии" />
            <StepItem num="07" title="ТЗ и дорожная карта" />
          </Cell>
        </View>

        {/* ROW 2: Данные и ИИ | Результат | Независимое ТЗ */}
        <View style={{ flexDirection: "row", gap: 5, flex: 1 }}>
          <Cell>
            <SectionLabel>ДАННЫЕ И ИИ</SectionLabel>
            <SectionTitle>Мультиисточниковая аналитика</SectionTitle>
            <MiniCard style={{ marginBottom: 5 }}>
              <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent }}>4 источника данных</Text>
              <Text style={{ fontSize: 9, color: T.muted, marginTop: 2 }}>Интервью, рынок, инфраструктура, материалы клиента</Text>
            </MiniCard>
            <MiniCard accent style={{ marginBottom: 5 }}>
              <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent }}>ИИ полного цикла</Text>
              <Text style={{ fontSize: 9, color: T.muted, marginTop: 2 }}>Транскрипт → Summary → Структура → Выводы</Text>
            </MiniCard>
            <Body>Онлайн-дашборд с доступом к материалам на <Text style={{ color: T.accent, fontWeight: 600 }}>3 года</Text></Body>
          </Cell>

          <Cell>
            <SectionLabel>РЕЗУЛЬТАТ</SectionLabel>
            <SectionTitle>Полный пакет для старта</SectionTitle>
            <DotItem>База инсайтов из интервью</DotItem>
            <DotItem>Кабинетное исследование рынка</DotItem>
            <DotItem>Сводный аналитический документ</DotItem>
            <DotItem>Карта пользовательских сценариев</DotItem>
            <DotItem>Портрет раннего пользователя</DotItem>
            <DotItem>Приоритизированный функционал MVP</DotItem>
            <MiniCard accent style={{ marginTop: 4 }}>
              <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.accent }}>+ ТЗ и дорожная карта</Text>
            </MiniCard>
          </Cell>

          <Cell>
            <SectionLabel>СВОБОДА ВЫБОРА</SectionLabel>
            <SectionTitle>ТЗ не привязано к AX10</SectionTitle>
            <View style={{ backgroundColor: T.bg, borderRadius: 4, borderWidth: 1, borderColor: T.accent, padding: 10, alignItems: "center", marginBottom: 6 }}>
              <Text style={{ fontSize: 22, fontWeight: 700, color: T.accent, lineHeight: 1 }}>100%</Text>
              <Text style={{ fontSize: 8, color: T.muted, marginTop: 3 }}>материалов у клиента</Text>
            </View>
            <DotItem>Передайте любой команде разработки</DotItem>
            <DotItem>Достаточно для оценки сроков и стоимости</DotItem>
            <DotItem>Не требует консультаций с AX10</DotItem>
          </Cell>
        </View>

        {/* ROW 3: AI-first | Бизнес-эффект | Команда */}
        <View style={{ flexDirection: "row", gap: 5, flex: 0.9 }}>
          <Cell>
            <SectionLabel>AI-FIRST РАЗРАБОТКА</SectionLabel>
            <SectionTitle>Опциональный следующий шаг</SectionTitle>
            <View style={{ flexDirection: "row", gap: 5, marginBottom: 5 }}>
              <MiniCard accent style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: T.accent }}>5-6x</Text>
                <Text style={{ fontSize: 8, color: T.muted, marginTop: 2 }}>дешевле</Text>
              </MiniCard>
              <MiniCard accent style={{ flex: 1, alignItems: "center" }}>
                <Text style={{ fontSize: 16, fontWeight: 700, color: T.accent }}>10x+</Text>
                <Text style={{ fontSize: 8, color: T.muted, marginTop: 2 }}>быстрее</Text>
              </MiniCard>
            </View>
            <DotItem>Читаемый, структурированный код</DotItem>
            <DotItem>Полная документация</DotItem>
            <DotItem>Свобода смены исполнителя</DotItem>
          </Cell>

          <Cell>
            <SectionLabel>БИЗНЕС-ЭФФЕКТ</SectionLabel>
            <SectionTitle>Управляемый путь к запуску</SectionTitle>
            <View style={{ gap: 4 }}>
              <MiniCard accent>
                <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.fg }}>Снижение риска</Text>
                <Text style={{ fontSize: 9, color: T.muted, marginTop: 2 }}>Первый релиз на данных, а не догадках</Text>
              </MiniCard>
              <MiniCard accent>
                <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.fg }}>Экономия бюджета</Text>
                <Text style={{ fontSize: 9, color: T.muted, marginTop: 2 }}>Инвестиции только в подтверждённое</Text>
              </MiniCard>
              <MiniCard accent>
                <Text style={{ fontSize: 9.5, fontWeight: 700, color: T.fg }}>Ускорение запуска</Text>
                <Text style={{ fontSize: 9, color: T.muted, marginTop: 2 }}>Готовое ТЗ сокращает планирование</Text>
              </MiniCard>
            </View>
          </Cell>

          <Cell>
            <SectionLabel>КОМАНДА</SectionLabel>
            <View style={{ gap: 4, marginBottom: 6 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg }}>С. Мартюшев</Text>
                <Text style={{ fontSize: 9, color: T.accent }}>Финансы, 20+ лет</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg }}>С. Бобылев</Text>
                <Text style={{ fontSize: 9, color: T.accent }}>Продажи, 7+ лет</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg }}>Д. Бондарев</Text>
                <Text style={{ fontSize: 9, color: T.accent }}>Разработка, 30+ лет</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 10, fontWeight: 600, color: T.fg }}>С. Томилов</Text>
                <Text style={{ fontSize: 9, color: T.accent }}>PR, 7+ лет</Text>
              </View>
            </View>
            <MiniCard accent style={{ alignItems: "center" }}>
              <Text style={{ fontSize: 10, fontWeight: 700, color: T.accent }}>Диагностическая сессия</Text>
              <Text style={{ fontSize: 8, color: T.muted, marginTop: 2 }}>Бесплатная аналитика на первом звонке</Text>
            </MiniCard>
          </Cell>
        </View>
      </View>
    </Page>
  </Document>
);

export async function generateAX10OnePagerPdf() {
  const imgBase = getImageBase();
  const blob = await pdf(<AX10OnePagerDoc imgBase={imgBase} />).toBlob();
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "AX10_One_Pager.pdf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
