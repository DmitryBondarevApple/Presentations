/**
 * PDF-optimised slide components.
 * These are rendered ONLY inside the hidden offscreen container
 * at 1920 × 1358 px (A4-landscape ratio).
 *
 * Design rules vs web slides:
 *  – justify-start, not center  → content fills from the top
 *  – fixed px font-sizes        → predictable in PDF
 *  – generous but controlled padding (80 px)
 *  – everything bigger: headings ~56-64px, body ~20-24px
 */
import React from "react";
import {
  Package, Search, Rocket, Target, FileText, Users, HeartPulse,
  Network, DollarSign, Presentation, FlaskConical, ShieldCheck, Map,
  BarChart3, ListChecks, ArrowRight, User, UserCheck, Palette,
  CalendarClock, Phone, Send, Mail,
} from "lucide-react";

/* ─── shared wrapper ─── */
const S = ({ children, label, number }) => (
  <div
    style={{
      width: "100%", height: "100%", display: "flex", flexDirection: "column",
      background: "hsl(240 100% 10%)", color: "hsl(0 0% 98%)",
      fontFamily: "'Inter', sans-serif", overflow: "hidden", position: "relative",
      padding: "60px 80px 50px",
    }}
  >
    {/* decorative glow */}
    <div style={{
      position: "absolute", top: 0, right: 0, width: 400, height: 400,
      background: "radial-gradient(circle at top right, hsl(240 100% 55% / .06), transparent 70%)",
      pointerEvents: "none",
    }} />
    {/* header */}
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 36, flexShrink: 0 }}>
      {label
        ? <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 14, letterSpacing: "0.18em", textTransform: "uppercase", color: "hsl(225 18% 62%)" }}>{label}</span>
        : <span />}
      {number && <span style={{ fontSize: 14, color: "hsl(225 18% 62%)" }}>{String(number).padStart(2,"0")} / 14</span>}
    </div>
    {/* content */}
    <div style={{ flex: 1, display: "flex", flexDirection: "column" }}>
      {children}
    </div>
    {/* brand */}
    <div style={{
      position: "absolute", bottom: 24, left: 80,
      fontFamily: "'Space Grotesk',sans-serif", fontSize: 11,
      letterSpacing: "0.22em", color: "hsl(225 18% 62% / .4)",
    }}>
      HOP<span style={{ color: "hsl(15 88% 56% / .4)" }}>.</span>AGENCY
    </div>
  </div>
);

const accent = "hsl(15 88% 56%)";
const muted = "hsl(225 18% 62%)";
const card = "hsl(240 50% 15%)";
const border = "hsl(240 30% 26%)";
const fg = "hsl(0 0% 98%)";
const heading = "'Space Grotesk', sans-serif";

/* ─── 1. Title ─── */
const PdfTitle = () => (
  <div style={{
    width: "100%", height: "100%", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    background: "hsl(240 100% 10%)", color: fg, position: "relative", overflow: "hidden",
    padding: "60px 100px",
  }}>
    <div style={{
      position: "absolute", inset: 0, opacity: 0.07, pointerEvents: "none",
      background: "radial-gradient(ellipse 70% 50% at 50% 50%, hsl(240 100% 55%), transparent)",
    }} />
    <div style={{ fontFamily: heading, fontSize: 32, letterSpacing: "0.3em", fontWeight: 700, marginBottom: 56 }}>
      HOP<span style={{ color: accent }}>.</span>AGEN<span style={{ color: accent }}>C</span>Y
    </div>
    <h1 style={{ fontFamily: heading, fontSize: 64, fontWeight: 700, lineHeight: 1.15, maxWidth: 1200, margin: 0 }}>
      Сопровождение вывода внутренних продуктов{" "}
      <span style={{ color: accent }}>ПАО «Ростелеком»</span>{" "}
      на общероссийский рынок
    </h1>
    <p style={{ fontSize: 22, color: muted, marginTop: 32, letterSpacing: "0.05em" }}>Коммерческое предложение</p>
    <div style={{ width: 64, height: 2, background: `${accent}80`, marginTop: 48 }} />
    <p style={{ fontSize: 16, color: `${muted}90`, marginTop: 20 }}>2025</p>
  </div>
);

/* ─── 2. Context ─── */
const PdfContext = () => (
  <S label="Контекст" number={2}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: 0, lineHeight: 1.2 }}>
      Контекст и основание<br /><span style={{ color: accent }}>для предложения</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, marginTop: 48 }}>
      <p style={{ fontSize: 22, color: muted, lineHeight: 1.65, margin: 0 }}>
        Предложение подготовлено по итогам рабочей встречи команд
        Hop.Agency и ПАО «Ростелеком», на которой обсуждались
        практические форматы сотрудничества и отдельный трек по проверке
        внешнего спроса на внутренние продукты.
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          "Определён трек по проверке внешнего спроса на внутренние продукты",
          "Продукты проходят масштабное внутреннее тестирование и доработку",
          "Выход во внешние продажи привязан к завершению внутреннего цикла",
          "Существует интерес к ранней проверке внешнего спроса",
        ].map((t, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14 }}>
            <div style={{ width: 8, height: 8, borderRadius: "50%", background: accent, marginTop: 10, flexShrink: 0 }} />
            <p style={{ fontSize: 20, color: `${fg}cc`, margin: 0, lineHeight: 1.55 }}>{t}</p>
          </div>
        ))}
      </div>
    </div>
  </S>
);

/* ─── 3. Subject ─── */
const areas = [
  { Icon: Package, title: "Упаковка продукта", sub: "для внешнего рынка", desc: "Позиционирование, целевая аудитория, ценность, коммерческие материалы" },
  { Icon: Search, title: "Проверка спроса", sub: "в контролируемом формате", desc: "Короткие циклы валидации на заранее согласованных сегментах" },
  { Icon: Rocket, title: "Маршрутизация", sub: "в коммерческий запуск", desc: "План пилотов, критерии готовности, поддержка продаж и партнёрского запуска" },
];
const PdfSubject = () => (
  <S label="Предмет предложения" number={3}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 48px" }}>
      Три фокуса <span style={{ color: accent }}>сотрудничества</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
      {areas.map((a, i) => (
        <div key={i} style={{
          background: card, borderRadius: 16, padding: "40px 36px",
          border: `1px solid ${border}80`, display: "flex", flexDirection: "column",
        }}>
          <a.Icon size={40} color={accent} strokeWidth={1.5} style={{ marginBottom: 24 }} />
          <div style={{ fontFamily: heading, fontSize: 26, fontWeight: 600 }}>{a.title}</div>
          <div style={{ fontFamily: heading, fontSize: 17, color: `${accent}cc`, marginTop: 4, marginBottom: 20 }}>{a.sub}</div>
          <p style={{ fontSize: 19, color: muted, lineHeight: 1.55, margin: 0, marginTop: "auto" }}>{a.desc}</p>
        </div>
      ))}
    </div>
  </S>
);

/* ─── 4. Goal ─── */
const PdfGoal = () => (
  <S label="Цель программы" number={4}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1, justifyContent: "center" }}>
      <Target size={56} color={accent} strokeWidth={1.5} style={{ marginBottom: 36 }} />
      <h2 style={{ fontFamily: heading, fontSize: 50, fontWeight: 700, lineHeight: 1.25, maxWidth: 1400, margin: 0 }}>
        Сформировать для выбранных внутренних продуктов Ростелекома{" "}
        <span style={{ color: accent }}>готовность к внешнему рынку</span>{" "}
        и подтвердить спрос на целевых сегментах
      </h2>
      <div style={{ width: 80, height: 2, background: border, marginTop: 40 }} />
      <p style={{ fontSize: 24, color: muted, marginTop: 32, maxWidth: 900, lineHeight: 1.55 }}>
        Чтобы ускорить коммерческий запуск в масштабе РФ
        после завершения внутренних циклов доработки
      </p>
    </div>
  </S>
);

/* ─── 5. Tasks ─── */
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
  <S label="Задачи" number={5}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 48px" }}>
      Задачи <span style={{ color: accent }}>программы</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 80px" }}>
      {tasks.map((t, i) => (
        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 18 }}>
          <span style={{ fontFamily: heading, fontSize: 20, fontWeight: 700, color: accent, flexShrink: 0, width: 36 }}>
            {String(i + 1).padStart(2, "0")}
          </span>
          <p style={{ fontSize: 21, color: `${fg}dd`, lineHeight: 1.5, margin: 0 }}>{t}</p>
        </div>
      ))}
    </div>
  </S>
);

/* ─── 6. Results package ─── */
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
  <S label="Результаты" number={6}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: 0 }}>
      Пакет готовности <span style={{ color: accent }}>к рынку</span>
    </h2>
    <p style={{ fontSize: 19, color: muted, margin: "12px 0 36px" }}>По каждому продукту — до 5 продуктов на цикл</p>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}>
      {results.map((r, i) => (
        <div key={i} style={{
          display: "flex", alignItems: "flex-start", gap: 16,
          background: `${card}90`, borderRadius: 12, padding: "20px 24px",
          border: `1px solid ${border}50`,
        }}>
          <r.Icon size={26} color={accent} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontFamily: heading, fontSize: 19, fontWeight: 600 }}>{r.l}</div>
            <div style={{ fontSize: 16, color: muted, marginTop: 4 }}>{r.d}</div>
          </div>
        </div>
      ))}
    </div>
  </S>
);

/* ─── 7. Summary ─── */
const summary = [
  { Icon: BarChart3, t: "Рейтинг продуктов", d: "По готовности к выходу на рынок и по силе подтверждённого спроса" },
  { Icon: ListChecks, t: "Рекомендации по запуску", d: "Какие продукты выводить первыми, какие доработать, какие отложить" },
  { Icon: ArrowRight, t: "План следующего цикла", d: "Предложение по масштабированию подхода и следующей волне продуктов" },
];
const PdfSummary = () => (
  <S label="Сводные результаты" number={7}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 56px" }}>
      Сводные результаты <span style={{ color: accent }}>программы</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32 }}>
      {summary.map((s, i) => (
        <div key={i} style={{
          background: card, borderRadius: 16, padding: "40px 36px",
          border: `1px solid ${border}80`, display: "flex", flexDirection: "column",
        }}>
          <div style={{
            width: 56, height: 56, borderRadius: 12,
            background: "hsl(15 88% 56% / .1)", display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 24,
          }}>
            <s.Icon size={28} color={accent} strokeWidth={1.5} />
          </div>
          <div style={{ fontFamily: heading, fontSize: 24, fontWeight: 600, marginBottom: 14 }}>{s.t}</div>
          <p style={{ fontSize: 20, color: muted, lineHeight: 1.5, margin: 0, marginTop: "auto" }}>{s.d}</p>
        </div>
      ))}
    </div>
  </S>
);

/* ─── 8. Why Hop ─── */
const stats = [
  { n: "38", l: "программ", s: "акселерации за 2023–2025" },
  { n: "600+", l: "проектов", s: "прошли полную оценку" },
  { n: "900+", l: "участников", s: "инвестиционного клуба" },
];
const PdfWhyHop = () => (
  <S label="О нас" number={8}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 56px" }}>
      Почему <span style={{ color: accent }}>Hop.Agency</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 48, marginBottom: 56 }}>
      {stats.map((s, i) => (
        <div key={i}>
          <div style={{ fontFamily: heading, fontSize: 96, fontWeight: 700, color: accent, lineHeight: 1 }}>{s.n}</div>
          <div style={{ fontFamily: heading, fontSize: 22, fontWeight: 600, marginTop: 12 }}>{s.l}</div>
          <div style={{ fontSize: 18, color: muted, marginTop: 6 }}>{s.s}</div>
        </div>
      ))}
    </div>
    <p style={{ fontSize: 22, color: muted, lineHeight: 1.6, margin: 0, maxWidth: 1200 }}>
      Работаем на стыке корпоративных инноваций, управления развитием компаний
      на ранних стадиях и инвестиционной экспертизы. Практический опыт продвижения
      внутренних продуктов корпоративных партнёров на внешний рынок через программы
      пилотирования и коммерциализации.
    </p>
  </S>
);

/* ─── helper for scope cards ─── */
const ScopeCard = ({ num, title, tasks: t, results: r }) => (
  <div style={{
    background: `${card}99`, borderRadius: 16, padding: "28px 32px",
    borderLeft: `3px solid ${accent}99`,
  }}>
    <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 14 }}>
      <span style={{
        fontFamily: heading, fontSize: 14, fontWeight: 700, color: accent,
        background: "hsl(15 88% 56% / .1)", padding: "4px 12px", borderRadius: 6,
      }}>{num}</span>
      <span style={{ fontFamily: heading, fontSize: 20, fontWeight: 600 }}>{title}</span>
    </div>
    <p style={{ fontSize: 17, color: muted, margin: "0 0 8px" }}>
      <span style={{ color: `${fg}99`, fontWeight: 500 }}>Задачи: </span>{t}
    </p>
    <p style={{ fontSize: 17, color: muted, margin: 0 }}>
      <span style={{ color: `${fg}99`, fontWeight: 500 }}>Результаты: </span>{r}
    </p>
  </div>
);

/* ─── 9. Scope 1 ─── */
const PdfScope1 = () => (
  <S label="Содержание работ · 1/2" number={9}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 40px" }}>
      Содержание работ <span style={{ color: muted, fontWeight: 400, fontSize: 28 }}>(этапы 1–4)</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <ScopeCard num="01" title="Запуск и процедурные решения" tasks="Список продуктов, рабочий календарь, правила работы с данными, шаблоны" results="Паспорт программы, матрица ролей, чек-лист ограничений" />
      <ScopeCard num="02" title="Отбор и приоритезация продуктов" tasks="Критерии выхода, экспресс-оценка готовности, выбор до 5 продуктов" results="Карта показателей, финальный список, карта зависимостей" />
      <ScopeCard num="03" title="Диагностика продукта и ценность" tasks="Сбор фактуры, сценарии применения, эффекты, позиционирование" results="JTBD/сценарии, ценностное предложение, профиль клиента" />
      <ScopeCard num="04" title="Анализ рынка и конкурентов" tasks="Кабинетное исследование, конкурентная карта, анализ аналогов" results="Карта конкурентов, сегментация, гипотезы дифференциации" />
    </div>
  </S>
);

/* ─── 10. Scope 2 ─── */
const PdfScope2 = () => (
  <S label="Содержание работ · 2/2" number={10}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 40px" }}>
      Содержание работ <span style={{ color: muted, fontWeight: 400, fontSize: 28 }}>(этапы 5–8)</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
      <ScopeCard num="05" title="Коммерческая упаковка" tasks="Набор материалов, структура предложения, экономический эффект, возражения" results="Одностраничник, презентация, FAQ, шаблоны, калькулятор эффекта" />
      <ScopeCard num="06" title="Проверка внешнего спроса" tasks="Интервью, встречи, фиксация сигналов интереса и условий пилота" results="Реестр контактов, протоколы, карта интереса, список для пилотов" />
      <ScopeCard num="07" title="Проектирование пилотов" tasks="Дизайн пилота, критерии успеха, роли сторон, требования по безопасности" results="Паспорт пилота, KPI, план-график, реестр рисков" />
      <ScopeCard num="08" title="Финальная защита и план" tasks="Итоговая сессия, фиксация решений, рекомендации по следующей волне" results="Итоговый отчёт, решения по продуктам, дорожная карта" />
    </div>
  </S>
);

/* ─── 11. Team ─── */
const team = [
  { Icon: User, role: "Аналитик", count: "2 чел.", tasks: "Анализ рынка, сбор и структурирование данных, построение моделей" },
  { Icon: UserCheck, role: "Старший аналитик", count: "1 чел.", tasks: "Методология исследования, анализ трендов, подготовка выводов" },
  { Icon: Palette, role: "Дизайнер", count: "1 чел.", tasks: "Подготовка executive-презентации и резюме проекта" },
  { Icon: CalendarClock, role: "Координатор", count: "1 чел.", tasks: "Контроль сроков, взаимодействие с заказчиком" },
];
const PdfTeam = () => (
  <S label="Команда" number={11}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 56px" }}>
      Команда <span style={{ color: accent }}>проекта</span>
    </h2>
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 28 }}>
      {team.map((m, i) => (
        <div key={i} style={{
          background: card, borderRadius: 16, padding: "36px 32px",
          border: `1px solid ${border}66`, display: "flex", flexDirection: "column",
        }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: "hsl(15 88% 56% / .1)", display: "flex", alignItems: "center", justifyContent: "center",
            marginBottom: 20,
          }}>
            <m.Icon size={24} color={accent} strokeWidth={1.5} />
          </div>
          <div style={{ fontFamily: heading, fontSize: 22, fontWeight: 600 }}>{m.role}</div>
          <div style={{ fontFamily: heading, fontSize: 16, color: accent, marginTop: 4, marginBottom: 16 }}>{m.count}</div>
          <p style={{ fontSize: 17, color: muted, lineHeight: 1.5, margin: 0, marginTop: "auto" }}>{m.tasks}</p>
        </div>
      ))}
    </div>
    <div style={{ marginTop: 40, display: "flex", alignItems: "center", gap: 14 }}>
      <span style={{ fontFamily: heading, fontSize: 18, color: muted }}>Итого:</span>
      <span style={{ fontFamily: heading, fontSize: 26, fontWeight: 700 }}>5 специалистов</span>
    </div>
  </S>
);

/* ─── 12. Roadmap ─── */
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
  <S label="Дорожная карта" number={12}>
    <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 44px" }}>
      Дорожная карта <span style={{ color: accent }}>· 12 недель</span>
    </h2>
    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      {/* week numbers */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: 280, flexShrink: 0 }} />
        <div style={{ flex: 1, display: "flex" }}>
          {Array.from({ length: TW }, (_, i) => (
            <div key={i} style={{ flex: 1, textAlign: "center", fontSize: 15, color: `${muted}80` }}>{i + 1}</div>
          ))}
        </div>
      </div>
      {stages.map((st, i) => (
        <div key={i} style={{ display: "flex", alignItems: "center" }}>
          <div style={{ width: 280, flexShrink: 0, textAlign: "right", paddingRight: 20, fontSize: 19, color: `${fg}bb` }}>{st.name}</div>
          <div style={{ flex: 1, position: "relative", height: 34, background: `${card}60`, borderRadius: 6 }}>
            <div style={{
              position: "absolute", top: 0, height: "100%", borderRadius: 6,
              background: `${accent}bb`,
              left: `${((st.s - 1) / TW) * 100}%`,
              width: `${((st.e - st.s + 1) / TW) * 100}%`,
            }} />
          </div>
        </div>
      ))}
    </div>
    <p style={{ fontSize: 15, color: `${muted}80`, marginTop: 28 }}>
      * Длительность зависит от скорости обработки и анализа материалов со стороны клиента
    </p>
  </S>
);

/* ─── 13. Pricing ─── */
const PdfPricing = () => (
  <S label="Стоимость" number={13}>
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", flex: 1, justifyContent: "center" }}>
      <h2 style={{ fontFamily: heading, fontSize: 52, fontWeight: 700, margin: "0 0 56px" }}>
        Стоимость <span style={{ color: accent }}>проекта</span>
      </h2>
      <div style={{ fontSize: 28, color: muted, textDecoration: "line-through", textDecorationColor: `${accent}80` }}>3 500 000 ₽</div>
      <div style={{
        fontFamily: heading, fontSize: 14, fontWeight: 700, color: accent,
        background: "hsl(15 88% 56% / .1)", padding: "8px 24px", borderRadius: 999,
        letterSpacing: "0.1em", marginTop: 20,
      }}>СКИДКА 15%</div>
      <div style={{ fontFamily: heading, fontSize: 108, fontWeight: 700, marginTop: 24, lineHeight: 1 }}>
        2 975 000 <span style={{ fontSize: 48, color: muted }}>₽</span>
      </div>
      <div style={{ width: 64, height: 2, background: border, marginTop: 36 }} />
      <p style={{ fontSize: 20, color: muted, marginTop: 28 }}>В том числе НДС 5%</p>
      <p style={{ fontSize: 16, color: `${muted}80`, marginTop: 8 }}>Предложение действительно 2 месяца</p>
    </div>
  </S>
);

/* ─── 14. Contact ─── */
const contacts = [
  { name: "Ширшов Ярослав", phone: "+7-985-364-0416", tg: "@veronaj" },
  { name: "Старостина Наталья", phone: "+7-926-295-8288", tg: "@NataschaStar" },
];
const PdfContact = () => (
  <div style={{
    width: "100%", height: "100%", display: "flex", flexDirection: "column",
    alignItems: "center", justifyContent: "center", textAlign: "center",
    background: "hsl(240 100% 10%)", color: fg, position: "relative", overflow: "hidden",
    padding: "60px 80px",
  }}>
    <div style={{
      position: "absolute", inset: 0, opacity: 0.05, pointerEvents: "none",
      background: "radial-gradient(ellipse 60% 40% at 50% 60%, hsl(15 88% 56%), transparent)",
    }} />
    <h2 style={{ fontFamily: heading, fontSize: 64, fontWeight: 700, marginBottom: 56 }}>Спасибо за внимание</h2>
    <div style={{ display: "flex", gap: 80, marginBottom: 44 }}>
      {contacts.map((c, i) => (
        <div key={i}>
          <div style={{ fontFamily: heading, fontSize: 24, fontWeight: 600, marginBottom: 16 }}>{c.name}</div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 8 }}>
            <Phone size={18} color={accent} /><span style={{ fontSize: 19, color: muted }}>{c.phone}</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
            <Send size={18} color={accent} /><span style={{ fontSize: 19, color: muted }}>{c.tg}</span>
          </div>
        </div>
      ))}
    </div>
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 40 }}>
      <Mail size={22} color={accent} /><span style={{ fontSize: 19, color: muted }}>hello@hop.agency</span>
    </div>
    <div style={{ fontFamily: heading, fontSize: 28, fontWeight: 700, letterSpacing: "0.3em", marginTop: 20 }}>
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
