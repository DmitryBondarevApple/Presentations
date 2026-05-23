import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide16Efficiency = () => (
  <TASlideContainer number={16} label="Efficiency">
    <TAH>Efficiency</TAH>
    <TASub>Главный вопрос: можем ли расти при разумной экономике?</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Проверяем:</p>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 max-w-4xl">
      {["CAC", "LTV", "Gross margin", "Contribution margin", "Payback period", "Churn", "Стоимость внедрения", "Доля ручных операций"].map((m, i) => (
        <div key={i} className="rounded-md px-3 py-2 md:px-4 md:py-3 text-xs sm:text-sm md:text-base font-medium" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5", color: "#0a0a0a" }}>
          {m}
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide16Efficiency;
