import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rows = [
  { s: "Discovery", m: "Процент клиентов с сильной оплачиваемой болью" },
  { s: "Customer discovery", m: "Повторяемость проблемы в одном сегменте" },
  { s: "MVP", m: "Activation rate, time to value" },
  { s: "Validation", m: "Конверсия пилотов в оплату" },
  { s: "Product-market fit", m: "Retention, churn, повторные продажи" },
  { s: "Efficiency", m: "CAC, LTV, маржа, payback" },
  { s: "Scale", m: "Выполнение плана, качество внедрений, нагрузка на поддержку" },
];
const TASlide18KPI = () => (
  <TASlideContainer number={18} label="Метрики">
    <TAH>KPI зависят от стадии</TAH>
    <TASub>Каждой стадии — своя главная метрика</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-[1fr_2fr] font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#0a0a0a", borderBottom: "none", color: "#ffffff" }}>
        <span>Стадия</span><span>Главная метрика</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_2fr] px-4 py-2 md:py-3 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.s}</span>
          <span style={{ color: "#52525b" }}>{r.m}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide18KPI;
