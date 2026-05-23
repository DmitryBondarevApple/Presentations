import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const steps = [
  "Определить стадию",
  "Найти главный риск",
  "Выбрать одну главную метрику",
  "Договориться об одном действии на ближайшую неделю",
  "Проверить факты, а не впечатления",
];
const TASlide31Formula = () => (
  <TASlideContainer number={31} label="Формула">
    <TAH>Финальная формула трекера</TAH>
    <TASub>На каждой встрече со стартапом</TASub>
    <div className="space-y-2 md:space-y-4 max-w-3xl">
      {steps.map((s, i) => (
        <div key={i} className="flex items-center gap-3 md:gap-5 rounded-md px-4 py-3 md:px-5 md:py-4" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-mono text-lg md:text-2xl font-bold shrink-0" style={{ color: "#0a0a0a" }}>{i + 1}</span>
          <p className="font-body text-xs sm:text-sm md:text-lg" style={{ color: "#3f3f46" }}>{s}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide31Formula;
