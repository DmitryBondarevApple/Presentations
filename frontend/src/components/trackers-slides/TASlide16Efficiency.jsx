import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide16Efficiency = () => (
  <TASlideContainer number={16} label="Efficiency">
    <TAH>Efficiency</TAH>
    <TASub>Главный вопрос: можем ли расти при разумной экономике?</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Проверяем:</p>
    <div className="flex flex-wrap gap-2 md:gap-3 max-w-4xl">
      {["CAC", "LTV", "Gross margin", "Contribution margin", "Payback period", "Churn", "Стоимость внедрения", "Доля ручных операций"].map((m, i) => (
        <span key={i} className="inline-block font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase px-2.5 py-1.5 md:px-3 md:py-2 rounded-sm" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
          {m}
        </span>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide16Efficiency;
