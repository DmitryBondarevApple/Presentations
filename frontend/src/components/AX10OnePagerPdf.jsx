/**
 * AX10 One Pager PDF — Dark Swiss, DENSE layout
 * Single A4 Landscape (841.89 x 595.28 pt)
 * NO flex stretching — content packed tight at top of each cell
 */
import React from "react";
import {
  Document, Page, View, Text, Image, Link, pdf,
} from "@react-pdf/renderer";
import { registerInterFont, getImageBase } from "./pdf-shared/PdfComponents";

registerInterFont();

const PW = 841.89;
const PH = 595.28;
const COL = (PW - 14 - 8) / 3; // 3 columns with gaps

const T = {
  bg: "#0b1120", fg: "#ffffff",
  muted: "#94a3b8", dim: "#64748b", accent: "#3b82f6",
  border: "#1e293b",
};

const f = { fontFamily: "Inter" };

const Over = ({ children }) => (
  <Text style={{ fontSize: 6.5, fontWeight: 700, color: T.accent, letterSpacing: 1.5, textTransform: "uppercase", marginBottom: 2 }}>{children}</Text>
);
const Hd = ({ children }) => (
  <Text style={{ fontSize: 10, fontWeight: 700, color: T.fg, marginBottom: 2, lineHeight: 1.2 }}>{children}</Text>
);
const Li = ({ n, children }) => (
  <View style={{ flexDirection: "row", gap: 3, alignItems: "flex-start", marginBottom: 1 }}>
    <Text style={{ fontSize: 7.5, color: T.dim, width: 10, textAlign: "right" }}>{n || "—"}</Text>
    <Text style={{ fontSize: 8, color: T.muted, lineHeight: 1.3, flex: 1 }}>{children}</Text>
  </View>
);
const Callout = ({ children }) => (
  <View style={{ paddingLeft: 5, borderLeftWidth: 2, borderLeftColor: T.accent, marginTop: 2 }}>
    <Text style={{ fontSize: 8, fontWeight: 600, color: T.fg }}>{children}</Text>
  </View>
);
const BBlock = ({ label, desc, accent }) => (
  <View style={{ paddingLeft: 5, borderLeftWidth: 2, borderLeftColor: accent ? T.accent : T.border, marginBottom: 2 }}>
    <Text style={{ fontSize: 8, fontWeight: 600, color: accent ? T.accent : T.fg }}>{label}</Text>
    {desc && <Text style={{ fontSize: 7, color: T.muted, marginTop: 0.5 }}>{desc}</Text>}
  </View>
);

/* Cell: NO flex:1, fixed width per column, content-driven height */
const Cell = ({ children }) => (
  <View style={{ width: COL, backgroundColor: "rgba(15,23,42,0.4)", borderRadius: 4, padding: 8, borderWidth: 0.5, borderColor: T.border }}>
    {children}
  </View>
);

const Row = ({ children }) => (
  <View style={{ flexDirection: "row", gap: 4 }}>{children}</View>
);

const AX10OnePagerDoc = ({ imgBase }) => (
  <Document title="AX10 — One Pager" author="AX10">
    <Page size={[PW, PH]} style={{ ...f, width: PW, height: PH, backgroundColor: T.bg, color: T.fg, padding: 0 }}>

      {/* HEADER */}
      <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 16, paddingVertical: 7, borderBottomWidth: 0.5, borderBottomColor: T.border }}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          <Image src={`${imgBase}/images/ax10/logo-ax10.png`} style={{ width: 60, height: 20, objectFit: "contain" }} />
          <View style={{ width: 0.5, height: 16, backgroundColor: T.border }} />
          <View>
            <Text style={{ fontSize: 8.5, fontWeight: 700, color: T.fg }}>От идеи цифрового сервиса к готовому ТЗ</Text>
            <View style={{ flexDirection: "row", gap: 10, marginTop: 1 }}>
              <Link src="https://t.me/smartfincons" style={{ fontSize: 6.5, color: T.dim, textDecoration: "none" }}>@smartfincons</Link>
              <Text style={{ fontSize: 6.5, color: T.dim }}>+7 (900) 916-73-69</Text>
              <Link src="https://ax10.ru" style={{ fontSize: 6.5, color: T.dim, textDecoration: "none" }}>ax10.ru</Link>
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 6, fontWeight: 700, color: T.accent, letterSpacing: 1.5 }}>ONE PAGER</Text>
      </View>

      {/* GRID — natural flow, no forced heights */}
      <View style={{ padding: 7, gap: 4 }}>

        {/* ROW 1 */}
        <Row>
          <Cell>
            <Over>ПРОБЛЕМА</Over>
            <Hd>Запуск на догадках</Hd>
            <Li n="—">Кто станет ранним пользователем</Li>
            <Li n="—">Какие сценарии действительно нужны</Li>
            <Li n="—">Какие гипотезы подтверждаются рынком</Li>
            <Li n="—">Что должно войти в первый релиз</Li>
            <Callout>Без проверки = месяцы и миллионы впустую</Callout>
          </Cell>

          <Cell>
            <Over>РЕШЕНИЕ</Over>
            <Hd>Основа для разработки</Hd>
            <Text style={{ fontSize: 7.5, color: T.muted, lineHeight: 1.3, marginBottom: 2 }}>Исследовательский проект. На выходе — пакет для запуска:</Text>
            <Li n="—">Подтверждённые гипотезы</Li>
            <Li n="—">Пользовательские сценарии</Li>
            <Li n="—">Портрет раннего пользователя</Li>
            <Li n="—">Структура MVP и техническое задание</Li>
          </Cell>

          <Cell>
            <Over>ПРОЦЕСС</Over>
            <Hd>7 этапов · 7–9 недель</Hd>
            <Li n="01">Параметры проекта</Li>
            <Li n="02">Дизайн исследования</Li>
            <Li n="03">Полевой этап</Li>
            <Li n="04">ИИ-аналитика интервью</Li>
            <Li n="05">Кабинетное исследование</Li>
            <Li n="06">Синтез выводов и сценарии</Li>
            <Li n="07">ТЗ и дорожная карта</Li>
          </Cell>
        </Row>

        {/* ROW 2 */}
        <Row>
          <Cell>
            <Over>ДАННЫЕ И ИИ</Over>
            <Hd>Мультиисточниковая аналитика</Hd>
            <BBlock accent label="4 источника данных" desc="Интервью · Рынок · Инфраструктура · Клиент" />
            <BBlock accent label="ИИ полного цикла" desc="Транскрипт → Summary → Структура → Выводы" />
            <Text style={{ fontSize: 7, color: T.dim, marginTop: 2 }}>Онлайн-дашборд · доступ <Text style={{ color: T.accent, fontWeight: 600 }}>3 года</Text></Text>
          </Cell>

          <Cell>
            <Over>РЕЗУЛЬТАТ</Over>
            <Hd>Полный пакет для старта</Hd>
            <Li n="—">База инсайтов из интервью</Li>
            <Li n="—">Кабинетное исследование рынка</Li>
            <Li n="—">Сводный аналитический документ</Li>
            <Li n="—">Карта пользовательских сценариев</Li>
            <Li n="—">Портрет раннего пользователя</Li>
            <Li n="—">Функционал MVP</Li>
            <Callout>+ ТЗ и дорожная карта</Callout>
          </Cell>

          <Cell>
            <Over>СВОБОДА ВЫБОРА</Over>
            <Hd>ТЗ не привязано к AX10</Hd>
            <Text style={{ fontSize: 20, fontWeight: 300, color: T.fg, letterSpacing: -1, lineHeight: 1 }}>100%</Text>
            <Text style={{ fontSize: 7, color: T.accent, fontWeight: 600, marginTop: 1, marginBottom: 3 }}>материалов остаётся у клиента</Text>
            <Li n="—">Передайте любой команде разработки</Li>
            <Li n="—">Достаточно для оценки сроков и стоимости</Li>
            <Li n="—">Не требует консультаций с AX10</Li>
          </Cell>
        </Row>

        {/* ROW 3 */}
        <Row>
          <Cell>
            <Over>AI-FIRST РАЗРАБОТКА</Over>
            <Hd>Опциональный следующий шаг</Hd>
            <View style={{ flexDirection: "row", gap: 10, marginBottom: 2 }}>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 300, color: T.fg, letterSpacing: -0.5, lineHeight: 1 }}>5-6x</Text>
                <Text style={{ fontSize: 6.5, color: T.accent, fontWeight: 600, marginTop: 1 }}>дешевле</Text>
              </View>
              <View>
                <Text style={{ fontSize: 16, fontWeight: 300, color: T.fg, letterSpacing: -0.5, lineHeight: 1 }}>10x+</Text>
                <Text style={{ fontSize: 6.5, color: T.accent, fontWeight: 600, marginTop: 1 }}>быстрее</Text>
              </View>
            </View>
            <Li n="—">Читаемый, структурированный код</Li>
            <Li n="—">Полная документация</Li>
            <Li n="—">Свобода смены исполнителя</Li>
          </Cell>

          <Cell>
            <Over>БИЗНЕС-ЭФФЕКТ</Over>
            <Hd>Управляемый путь к запуску</Hd>
            <BBlock label="Снижение риска" desc="Первый релиз на данных, а не догадках" />
            <BBlock label="Экономия бюджета" desc="Инвестиции только в подтверждённое" />
            <BBlock label="Ускорение запуска" desc="Готовое ТЗ сокращает планирование" />
          </Cell>

          <Cell>
            <Over>КОМАНДА</Over>
            <View style={{ gap: 2, marginBottom: 3 }}>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 8, fontWeight: 600, color: T.fg }}>Сергей Мартюшев</Text>
                <Text style={{ fontSize: 7, color: T.accent }}>Финансы · 20+ лет</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 8, fontWeight: 600, color: T.fg }}>Сергей Бобылев</Text>
                <Text style={{ fontSize: 7, color: T.accent }}>Продажи · 7+ лет</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 8, fontWeight: 600, color: T.fg }}>Дмитрий Бондарев</Text>
                <Text style={{ fontSize: 7, color: T.accent }}>Разработка · 30+ лет</Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Text style={{ fontSize: 8, fontWeight: 600, color: T.fg }}>Сергей Томилов</Text>
                <Text style={{ fontSize: 7, color: T.accent }}>PR · 7+ лет</Text>
              </View>
            </View>
            <View style={{ borderTopWidth: 0.5, borderTopColor: T.border, paddingTop: 2, alignItems: "center" }}>
              <Text style={{ fontSize: 8, fontWeight: 700, color: T.accent }}>Диагностическая сессия</Text>
              <Text style={{ fontSize: 6.5, color: T.dim, marginTop: 0.5 }}>Бесплатная аналитика на первом звонке</Text>
            </View>
          </Cell>
        </Row>
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
