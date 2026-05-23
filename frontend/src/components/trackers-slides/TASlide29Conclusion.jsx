import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide29Conclusion = () => (
  <TASlideContainer number={29} label="Вывод">
    <TAH>Главный вывод упражнения</TAH>
    <TASub>Команда НЕ должна сразу:</TASub>
    <div className="flex flex-wrap gap-2 md:gap-3 max-w-4xl mb-4 md:mb-8">
      {["Искать инвестиции", "Нанимать отдел продаж", "Строить полную платформу", "Добавлять 10 фич"].map((t, i) => (
        <span key={i} className="inline-block font-mono text-[10px] md:text-xs tracking-[0.15em] uppercase px-2.5 py-1.5 md:px-3 md:py-2 rounded-sm" style={{ backgroundColor: "#0a0a0a", color: "#ffffff" }}>
          {t}
        </span>
      ))}
    </div>
    <div className="rounded-md p-3 md:p-5 max-w-4xl" style={{ backgroundColor: "#0a0a0a" }}>
      <p className="font-body text-xs sm:text-sm md:text-lg" style={{ color: "#fafafa" }}>
        Сначала нужно доказать: <span className="font-bold">клиент платит за конкретный измеримый результат.</span>
      </p>
    </div>
  </TASlideContainer>
);
export default TASlide29Conclusion;
