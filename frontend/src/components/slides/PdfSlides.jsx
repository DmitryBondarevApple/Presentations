/**
 * PDF-optimised slide components — FULL REDESIGN for A4 landscape (1920×1358).
 *
 * Design rules:
 *  – Every slide MUST fill the full 1920×1358 area visually
 *  – Content is vertically centered (or distributed) in the page
 *  – Fonts are 2-3× larger than web: headings 72-80px, body 28-32px
 *  – Cards/grids use flex:1 to stretch and fill available height
 *  – All inline styles (no Tailwind) for reliable html2canvas rendering
 */
import React from "react";
import {
  Package, Search, Rocket, Target, FileText, Users, HeartPulse,
  Network, DollarSign, Presentation, FlaskConical, ShieldCheck, Map,
  BarChart3, ListChecks, ArrowRight, User, UserCheck, Palette,
  CalendarClock, Phone, Send, Mail,
} from "lucide-react";

/* ─── Color tokens ─── */
const bg = "hsl(240 100% 10%)";
const fg = "hsl(0 0% 98%)";
const accent = "hsl(15 88% 56%)";
const muted = "hsl(225 18% 62%)";
const card = "hsl(240 50% 15%)";
const border = "hsl(240 30% 26%)";
const heading = "'Space Grotesk', sans-serif";
const body = "'Inter', sans-serif";

/* ─── Page wrapper — every slide uses this ─── */
const Page = ({ children, label, number, center = false }) => (
  <div style={{
    width: "100%", height: "100%",
    display: "flex", flexDirection: "column",
    background: bg, color: fg, fontFamily: body,
    overflow: "hidden", position: "relative",
    padding: "56px 80px 48px",
    boxSizing: "border-box",
  }}>
    {/* decorative corner glow */}
    <div style={{
      position: "absolute", top: 0, right: 0, width: 500, height: 500,
      background: "radial-gradient(circle at top right, hsl(240 100% 55% / .06), transparent 70%)",
      pointerEvents: "none",
    }} />
    {/* header bar */}
    {(label || number) && (
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        marginBottom: 0, flexShrink: 0, height: 28,
      }}>
        {label
          ? <span style={{ fontFamily: heading, fontSize: 16, letterSpacing: "0.2em", textTransform: "uppercase", color: muted }}>{label}</span>
          : <span />}
        {number && <span style={{ fontFamily: body, fontSize: 16, color: muted }}>{String(number).padStart(2, "0")} / 14</span>}
      </div>
    )}
    {/* content area — centered or top-aligned */}
    <div style={{
      flex: 1, display: "flex", flexDirection: "column",
      justifyContent: center ? "center" : "center",
      minHeight: 0,
    }}>
      {children}
    </div>
    {/* brand footer */}
    <div style={{
      position: "absolute", bottom: 28, left: 80,
      fontFamily: heading, fontSize: 13,
      letterSpacing: "0.22em", color: "hsl(225 18% 62% / .35)",
    }}>
      HOP<span style={{ color: "hsl(15 88% 56% / .35)" }}>.</span>AGENCY
    </div>
  </div>
);

/* ════════════════════════════════════════════════════════════════════
   1. TITLE SLIDE
   ════════════════════════════════════════════════════════════════════ */
const PdfTitle = () => (
  <div style={{
    width: "100%", height: "100%", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    background: bg, color: fg, position: "relative", overflow: "hidden",
    padding: "80px 120px", boxSizing: "border-box",
  }}>
    <div style={{
      position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
      background: "radial-gradient(ellipse 70% 50% at 50% 50%, hsl(240 100% 55%), transparent)",
    }} />
    <div style={{ fontFamily: heading, fontSize: 38, letterSpacing: "0.3em", fontWeight: 700, marginBottom: 72 }}>
      HOP<span style={{ color: accent }}>.</span>AGEN<span style={{ color: accent }}>C</span>Y
    </div>
    <h1 style={{ fontFamily: heading, fontSize: 76, fontWeight: 700, lineHeight: 1.12, maxWidth: 1400, margin: 0 }}>
      Сопровождение вывода внутренних продуктов{" "}
      <span style={{ color: accent }}>ПАО «Ростелеком»</span>{" "}
      на общероссийский рынок
    </h1>
    <p style={{ fontFamily: body, fontSize: 28, color: muted, marginTop: 48, letterSpacing: "0.06em" }}>Коммерческое предложение</p>
    <div style={{ width: 80, height: 2, background: `${accent}80`, marginTop: 56 }} />
    <p style={{ fontFamily: body, fontSize: 20, color: `${muted}90`, marginTop: 28 }}>2025</p>
  </div>
);

/* ════════════════════════════════════════════════════════════════════
   2. CONTEXT SLIDE
   ════════════════════════════════════════════════════════════════════ */
const PdfContext = () => (
  <Page label="Контекст" number={2} center>
    <h2 style={{ fontFamily: heading, fontSize: 72, fontWeight: 700, margin: 0, lineHeight: 1.15 }}>
      Контекст и основание<br /><span style={{ color: accent }}>для предложения</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, marginTop: 64 }}>
      <p style={{ fontFamily: body, fontSize: 28, color: muted, lineHeight: 1.7, margin: 0 }}>
        Предложение подготовлено по итогам рабочей встречи команд
        Hop.Agency и ПАО «Ростелеком», на которой обсуждались
        практические форматы сотрудничества и отдельный трек по проверке
        внешнего спроса на внутренние продукты.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
        {[
          "Определён трек по проверке внешнего спроса на внутренние продукты",
          "Продукты проходят масштабное внутреннее тестирование и доработку",
          "Выход во внешние продажи привязан к завершению внутреннего цикла",
          "Существует интерес к ранней проверке внешнего спроса",
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: accent, marginTop: 12, flexShrink: 0 }} />
            <p style={{ fontFamily: body, fontSize: 26, color: `${fg}cc`, margin: 0, lineHeight: 1.55 }}>{t}</p>
          </div>
        ))}
      </div>
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   3. SUBJECT — 3 focus areas
   ════════════════════════════════════════════════════════════════════ */
const areas = [
  { Icon: Package, title: "Упаковка продукта", sub: "для внешнего рынка", desc: "Позиционирование, целевая аудитория, ценность, коммерческие материалы" },
  { Icon: Search, title: "Проверка спроса", sub: "в контролируемом формате", desc: "Короткие циклы валидации на заранее согласованных сегментах" },
  { Icon: Rocket, title: "Маршрутизация", sub: "в коммерческий запуск", desc: "План пилотов, критерии готовности, поддержка продаж и партнёрского запуска" },
];
const PdfSubject = () => (
  <Page label="Предмет предложения" number={3}>
    <h2 style={{ fontFamily: heading, fontSize: 72, fontWeight: 700, margin: "0 0 56px" }}>
      Три фокуса <span style={{ color: accent }}>сотрудничества</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 36, flex: 1 }}>
      {areas.map((a, i) => (
        <div key={i} style={{
          background: card, borderRadius: 20, padding: "48px 44px",
          border: `1px solid ${border}80`, display: "flex", flexDirection: "column",
        }}>
          <a.Icon size={52} color={accent} strokeWidth={1.5} style={{ marginBottom: 32 }} />
          <div style={{ fontFamily: heading, fontSize: 32, fontWeight: 600 }}>{a.title}</div>
          <div style={{ fontFamily: heading, fontSize: 22, color: `${accent}cc`, marginTop: 8, marginBottom: 32 }}>{a.sub}</div>
          <p style={{ fontFamily: body, fontSize: 24, color: muted, lineHeight: 1.55, margin: 0, marginTop: "auto" }}>{a.desc}</p>
        </div>
      ))}
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   4. GOAL
   ════════════════════════════════════════════════════════════════════ */
const PdfGoal = () => (
  <Page label="Цель программы" number={4} center>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <Target size={72} color={accent} strokeWidth={1.5} style={{ marginBottom: 48 }} />
      <h2 style={{ fontFamily: heading, fontSize: 64, fontWeight: 700, lineHeight: 1.2, maxWidth: 1500, margin: 0 }}>
        Сформировать для выбранных внутренних продуктов Ростелекома{" "}
        <span style={{ color: accent }}>готовность к внешнему рынку</span>{" "}
        и подтвердить спрос на целевых сегментах
      </h2>
      <div style={{ width: 100, height: 2, background: border, marginTop: 56 }} />
      <p style={{ fontFamily: body, fontSize: 30, color: muted, marginTop: 40, maxWidth: 1100, lineHeight: 1.55 }}>
        Чтобы ускорить коммерческий запуск в масштабе РФ
        после завершения внутренних циклов доработки
      </p>
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   5. TASKS
   ════════════════════════════════════════════════════════════════════ */
const tasks = [
  "Определение целевых сегментов и сценариев применения",
  "Формирование конкурентного позиционирования и ценностного предложения",
  "Уточнение модели монетизации и структуры коммерческого предложения",
  "Подготовка комплекта материалов для продаж и партнёрского продвижения",
  "Организация коротких циклов проверки спроса на внешней аудитории",
  "Формирование плана пилотов и критериев готовности к масштабированию",
  "Синхронизация с внутренними владельцами продукта и подразделениями",
];
const PdfTasks = () => (
  <Page label="Задачи" number={5}>
    <h2 style={{ fontFamily: heading, fontSize: 72, fontWeight: 700, margin: "0 0 56px" }}>
      Задачи <span style={{ color: accent }}>программы</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px 100px", flex: 1, alignContent: "start" }}>
      {tasks.map((t, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 22 }}>
          <span style={{ fontFamily: heading, fontSize: 28, fontWeight: 700, color: accent, flexShrink: 0, width: 48 }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <p style={{ fontFamily: body, fontSize: 26, color: `${fg}dd`, lineHeight: 1.5, margin: 0 }}>{t}</p>
        </div>
      ))}
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   6. RESULTS PACKAGE — 9 items
   ════════════════════════════════════════════════════════════════════ */
const results = [
  { Icon: FileText, l: "Позиционирование", d: "1-2 варианта для внешней аудитории" },
  { Icon: Users, l: "Карта сегментов", d: "Профили идеальных клиентов" },
  { Icon: HeartPulse, l: "Боли и эффекты", d: "Ключевые боли и измеримые результаты" },
  { Icon: Network, l: "Карта ЛПР", d: "SPACE по определению ЛПР" },
  { Icon: DollarSign, l: "Ценообразование", d: "Гипотезы и варианты упаковки" },
  { Icon: Presentation, l: "Материалы продаж", d: "Одностраничник, презентация, шаблоны" },
  { Icon: FlaskConical, l: "План пилотов", d: "Кого берём, что измеряем, критерии" },
  { Icon: ShieldCheck, l: "Реестр рисков", d: "Правовые и репутационные ограничения" },
  { Icon: Map, l: "Маршрут запуска", d: "Через каналы Ростелекома" },
];
const PdfResults = () => (
  <Page label="Результаты" number={6}>
    <h2 style={{ fontFamily: heading, fontSize: 68, fontWeight: 700, margin: 0 }}>
      Пакет готовности <span style={{ color: accent }}>к рынку</span>
    </h2>
    <p style={{ fontFamily: body, fontSize: 24, color: muted, margin: "16px 0 40px" }}>По каждому продукту — до 5 продуктов на цикл</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 24, flex: 1 }}>
      {results.map((r, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "flex-start", gap: 20,
          background: `${card}`, borderRadius: 16, padding: "28px 28px",
          border: `1px solid ${border}50`,
        }}>
          <r.Icon size={32} color={accent} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 4 }} />
          <div>
            <div style={{ fontFamily: heading, fontSize: 24, fontWeight: 600 }}>{r.l}</div>
            <div style={{ fontFamily: body, fontSize: 20, color: muted, marginTop: 8 }}>{r.d}</div>
          </div>
        </div>
      ))}
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   7. SUMMARY — 3 cards
   ════════════════════════════════════════════════════════════════════ */
const summary = [
  { Icon: BarChart3, t: "Рейтинг продуктов", d: "По готовности к выходу на рынок и по силе подтверждённого спроса" },
  { Icon: ListChecks, t: "Рекомендации по запуску", d: "Какие продукты выводить первыми, какие доработать, какие отложить" },
  { Icon: ArrowRight, t: "План следующего цикла", d: "Предложение по масштабированию подхода и следующей волне продуктов" },
];
const PdfSummary = () => (
  <Page label="Сводные результаты" number={7}>
    <h2 style={{ fontFamily: heading, fontSize: 72, fontWeight: 700, margin: "0 0 56px" }}>
      Сводные результаты <span style={{ color: accent }}>программы</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 36, flex: 1 }}>
      {summary.map((s, i) => (
        <div key={i} style={{
          background: card, borderRadius: 20, padding: "52px 44px",
          border: `1px solid ${border}80`, display: "flex", flexDirection: "column",
        }}>
          <div style={{
            width: 72, height: 72, borderRadius: 16,
            background: "hsl(15 88% 56% / .1)", display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 36,
          }}>
            <s.Icon size={36} color={accent} strokeWidth={1.5} />
          </div>
          <div style={{ fontFamily: heading, fontSize: 32, fontWeight: 600, marginBottom: 20 }}>{s.t}</div>
          <p style={{ fontFamily: body, fontSize: 26, color: muted, lineHeight: 1.55, margin: 0, marginTop: "auto" }}>{s.d}</p>
        </div>
      ))}
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   8. WHY HOP — stats
   ════════════════════════════════════════════════════════════════════ */
const stats = [
  { n: "38", l: "программ", s: "акселерации за 2023–2025" },
  { n: "600+", l: "проектов", s: "прошли полную оценку" },
  { n: "900+", l: "участников", s: "инвестиционного клуба" },
];
const PdfWhyHop = () => (
  <Page label="О нас" number={8} center>
    <h2 style={{ fontFamily: heading, fontSize: 76, fontWeight: 700, margin: "0 0 80px" }}>
      Почему <span style={{ color: accent }}>Hop.Agency</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 60, marginBottom: 80 }}>
      {stats.map((s, i) => (
        <div key={i}>
          <div style={{ fontFamily: heading, fontSize: 140, fontWeight: 700, color: accent, lineHeight: 1 }}>{s.n}</div>
          <div style={{ fontFamily: heading, fontSize: 30, fontWeight: 600, marginTop: 16 }}>{s.l}</div>
          <div style={{ fontFamily: body, fontSize: 24, color: muted, marginTop: 10 }}>{s.s}</div>
        </div>
      ))}
    </div>
    <p style={{ fontFamily: body, fontSize: 28, color: muted, lineHeight: 1.65, margin: 0, maxWidth: 1500 }}>
      Работаем на стыке корпоративных инноваций, управления развитием компаний
      на ранних стадиях и инвестиционной экспертизы. Практический опыт продвижения
      внутренних продуктов корпоративных партнёров на внешний рынок через программы
      пилотирования и коммерциализации.
    </p>
  </Page>
);

/* ─── scope card helper ─── */
const ScopeCard = ({ num, title, tasks: t, results: r }) => (
  <div style={{
    background: `${card}`, borderRadius: 18, padding: "32px 36px",
    borderLeft: `4px solid ${accent}99`, flex: 1,
    display: "flex", flexDirection: "column",
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
      <span style={{
        fontFamily: heading, fontSize: 18, fontWeight: 700, color: accent,
        background: "hsl(15 88% 56% / .1)", padding: "6px 16px", borderRadius: 8,
      }}>{num}</span>
      <span style={{ fontFamily: heading, fontSize: 26, fontWeight: 600 }}>{title}</span>
    </div>
    <p style={{ fontFamily: body, fontSize: 22, color: muted, margin: "0 0 12px", lineHeight: 1.5 }}>
      <span style={{ color: `${fg}99`, fontWeight: 600 }}>Задачи: </span>{t}
    </p>
    <p style={{ fontFamily: body, fontSize: 22, color: muted, margin: 0, lineHeight: 1.5 }}>
      <span style={{ color: `${fg}99`, fontWeight: 600 }}>Результаты: </span>{r}
    </p>
  </div>
);

/* ════════════════════════════════════════════════════════════════════
   9. SCOPE 1 (stages 1-4)
   ════════════════════════════════════════════════════════════════════ */
const PdfScope1 = () => (
  <Page label="Содержание работ · 1/2" number={9}>
    <h2 style={{ fontFamily: heading, fontSize: 64, fontWeight: 700, margin: "0 0 48px" }}>
      Содержание работ <span style={{ color: muted, fontWeight: 400, fontSize: 34 }}>(этапы 1–4)</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, flex: 1 }}>
      <ScopeCard num="01" title="Запуск и процедурные решения" tasks="Список продуктов, рабочий календарь, правила работы с данными, шаблоны" results="Паспорт программы, матрица ролей, чек-лист ограничений" />
      <ScopeCard num="02" title="Отбор и приоритезация продуктов" tasks="Критерии выхода, экспресс-оценка готовности, выбор до 5 продуктов" results="Карта показателей, финальный список, карта зависимостей" />
      <ScopeCard num="03" title="Диагностика продукта и ценность" tasks="Сбор фактуры, сценарии применения, эффекты, позиционирование" results="JTBD/сценарии, ценностное предложение, профиль клиента" />
      <ScopeCard num="04" title="Анализ рынка и конкурентов" tasks="Кабинетное исследование, конкурентная карта, анализ аналогов" results="Карта конкурентов, сегментация, гипотезы дифференциации" />
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   10. SCOPE 2 (stages 5-8)
   ════════════════════════════════════════════════════════════════════ */
const PdfScope2 = () => (
  <Page label="Содержание работ · 2/2" number={10}>
    <h2 style={{ fontFamily: heading, fontSize: 64, fontWeight: 700, margin: "0 0 48px" }}>
      Содержание работ <span style={{ color: muted, fontWeight: 400, fontSize: 34 }}>(этапы 5–8)</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28, flex: 1 }}>
      <ScopeCard num="05" title="Коммерческая упаковка" tasks="Набор материалов, структура предложения, экономический эффект, возражения" results="Одностраничник, презентация, FAQ, шаблоны, калькулятор эффекта" />
      <ScopeCard num="06" title="Проверка внешнего спроса" tasks="Интервью, встречи, фиксация сигналов интереса и условий пилота" results="Реестр контактов, протоколы, карта интереса, список для пилотов" />
      <ScopeCard num="07" title="Проектирование пилотов" tasks="Дизайн пилота, критерии успеха, роли сторон, требования по безопасности" results="Паспорт пилота, KPI, план-график, реестр рисков" />
      <ScopeCard num="08" title="Финальная защита и план" tasks="Итоговая сессия, фиксация решений, рекомендации по следующей волне" results="Итоговый отчёт, решения по продуктам, дорожная карта" />
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   11. TEAM
   ════════════════════════════════════════════════════════════════════ */
const team = [
  { Icon: User, role: "Аналитик", count: "2 чел.", tasks: "Анализ рынка, сбор и структурирование данных, построение моделей" },
  { Icon: UserCheck, role: "Старший аналитик", count: "1 чел.", tasks: "Методология исследования, анализ трендов, подготовка выводов" },
  { Icon: Palette, role: "Дизайнер", count: "1 чел.", tasks: "Подготовка executive-презентации и резюме проекта" },
  { Icon: CalendarClock, role: "Координатор", count: "1 чел.", tasks: "Контроль сроков, взаимодействие с заказчиком" },
];
const PdfTeam = () => (
  <Page label="Команда" number={11}>
    <h2 style={{ fontFamily: heading, fontSize: 72, fontWeight: 700, margin: "0 0 56px" }}>
      Команда <span style={{ color: accent }}>проекта</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 32, flex: 1 }}>
      {team.map((m, i) => (
        <div key={i} style={{
          background: card, borderRadius: 20, padding: "44px 36px",
          border: `1px solid ${border}66`, display: "flex", flexDirection: "column",
        }}>
          <div style={{
            width: 64, height: 64, borderRadius: 16,
            background: "hsl(15 88% 56% / .1)", display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 28,
          }}>
            <m.Icon size={32} color={accent} strokeWidth={1.5} />
          </div>
          <div style={{ fontFamily: heading, fontSize: 28, fontWeight: 600 }}>{m.role}</div>
          <div style={{ fontFamily: heading, fontSize: 20, color: accent, marginTop: 8, marginBottom: 24 }}>{m.count}</div>
          <p style={{ fontFamily: body, fontSize: 22, color: muted, lineHeight: 1.55, margin: 0, marginTop: "auto" }}>{m.tasks}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
      <span style={{ fontFamily: heading, fontSize: 24, color: muted }}>Итого:</span>
      <span style={{ fontFamily: heading, fontSize: 36, fontWeight: 700 }}>5 специалистов</span>
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   12. ROADMAP — Gantt chart
   ════════════════════════════════════════════════════════════════════ */
const TW = 12;
const stages = [
  { name: "Запуск проекта, NDA", s: 1, e: 1 },
  { name: "Отбор продуктов", s: 1, e: 2 },
  { name: "Диагностика, ценность", s: 2, e: 4 },
  { name: "Анализ рынка", s: 3, e: 4 },
  { name: "Коммерческая упаковка", s: 5, e: 6 },
  { name: "Проверка спроса", s: 6, e: 8 },
  { name: "Проектирование пилотов", s: 8, e: 12 },
  { name: "Финальная защита", s: 12, e: 12 },
];
const PdfRoadmap = () => (
  <Page label="Дорожная карта" number={12}>
    <h2 style={{ fontFamily: heading, fontSize: 68, fontWeight: 700, margin: "0 0 56px" }}>
      Дорожная карта <span style={{ color: accent }}>· 12 недель</span>
    </h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 0, flex: 1, justifyContent: "center" }}>
      {/* week numbers */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <div style={{ width: 320, flexShrink: 0 }} />
        <div style={{ flex: 1, display: "flex" }}>
          {Array.from({ length: TW }, (_, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center", fontFamily: body, fontSize: 18, color: `${muted}80` }}>{i + 1}</div>
          ))}
        </div>
      </div>
      {stages.map((st, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center", marginBottom: 12 }}>
          <div style={{ width: 320, flexShrink: 0, textAlign: "right", paddingRight: 28, fontFamily: body, fontSize: 24, color: `${fg}bb` }}>{st.name}</div>
          <div style={{ flex: 1, position: "relative", height: 48, background: `${card}60`, borderRadius: 8 }}>
            <div style={{
              position: "absolute", top: 0, height: "100%", borderRadius: 8,
              background: `${accent}bb`,
              left: `${((st.s - 1) / TW) * 100}%`,
              width: `${((st.e - st.s + 1) / TW) * 100}%`,
            }} />
          </div>
        </div>
      ))}
    </div>
    <p style={{ fontFamily: body, fontSize: 18, color: `${muted}80`, marginTop: 20, flexShrink: 0 }}>
      * Длительность зависит от скорости обработки и анализа материалов со стороны клиента
    </p>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   13. PRICING
   ════════════════════════════════════════════════════════════════════ */
const PdfPricing = () => (
  <Page label="Стоимость" number={13} center>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <h2 style={{ fontFamily: heading, fontSize: 72, fontWeight: 700, margin: "0 0 72px" }}>
        Стоимость <span style={{ color: accent }}>проекта</span>
      </h2>
      <div style={{ fontFamily: heading, fontSize: 36, color: muted, textDecoration: "line-through", textDecorationColor: `${accent}80` }}>3 500 000 ₽</div>
      <div style={{
        fontFamily: heading, fontSize: 18, fontWeight: 700, color: accent,
        background: "hsl(15 88% 56% / .1)", padding: "10px 32px", borderRadius: 999,
        letterSpacing: "0.12em", marginTop: 28,
      }}>СКИДКА 15%</div>
      <div style={{ fontFamily: heading, fontSize: 140, fontWeight: 700, marginTop: 36, lineHeight: 1 }}>
        2 975 000 <span style={{ fontSize: 56, color: muted }}>₽</span>
      </div>
      <div style={{ width: 80, height: 2, background: border, marginTop: 48 }} />
      <p style={{ fontFamily: body, fontSize: 26, color: muted, marginTop: 36 }}>В том числе НДС 5%</p>
      <p style={{ fontFamily: body, fontSize: 20, color: `${muted}80`, marginTop: 12 }}>Предложение действительно 2 месяца</p>
    </div>
  </Page>
);

/* ════════════════════════════════════════════════════════════════════
   14. CONTACT
   ════════════════════════════════════════════════════════════════════ */
const contacts = [
  { name: "Ширшов Ярослав", phone: "+7-985-364-0416", tg: "@veronaj" },
  { name: "Старостина Наталья", phone: "+7-926-295-8288", tg: "@NataschaStar" },
];
const PdfContact = () => (
  <div style={{
    width: "100%", height: "100%", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    background: bg, color: fg, position: "relative", overflow: "hidden",
    padding: "80px", boxSizing: "border-box",
  }}>
    <div style={{
      position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
      background: "radial-gradient(ellipse 60% 40% at 50% 60%, hsl(15 88% 56%), transparent)",
    }} />
    <h2 style={{ fontFamily: heading, fontSize: 80, fontWeight: 700, marginBottom: 72 }}>Спасибо за внимание</h2>
    <div style={{ display: "flex", gap: 120, marginBottom: 60 }}>
      {contacts.map((c, i) => (
        <div key={i}>
          <div style={{ fontFamily: heading, fontSize: 32, fontWeight: 600, marginBottom: 24 }}>{c.name}</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 14 }}>
            <Phone size={24} color={accent} /><span style={{ fontFamily: body, fontSize: 24, color: muted }}>{c.phone}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14 }}>
            <Send size={24} color={accent} /><span style={{ fontFamily: body, fontSize: 24, color: muted }}>{c.tg}</span>
          </div>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 56 }}>
      <Mail size={28} color={accent} /><span style={{ fontFamily: body, fontSize: 24, color: muted }}>hello@hop.agency</span>
    </div>
    <div style={{ fontFamily: heading, fontSize: 36, fontWeight: 700, letterSpacing: "0.3em" }}>
      HOP<span style={{ color: accent }}>.</span>AGEN<span style={{ color: accent }}>C</span>Y
    </div>
  </div>
);

/* ─── Export all as array ─── */
export const pdfSlides = [
  PdfTitle, PdfContext, PdfSubject, PdfGoal, PdfTasks,
  PdfResults, PdfSummary, PdfWhyHop, PdfScope1, PdfScope2,
  PdfTeam, PdfRoadmap, PdfPricing, PdfContact,
];
