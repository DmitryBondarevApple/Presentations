import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide29Conclusion = () => (
  <TASlideContainer number={29} label="Вывод">
    <TAH>Главный вывод упражнения</TAH>
    <TASub>Команда НЕ должна сразу:</TASub>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-4 max-w-4xl mb-4 md:mb-8">
      {["Искать инвестиции", "Нанимать отдел продаж", "Строить полную платформу", "Добавлять 10 фич"].map((t, i) => (
        <div key={i} className="rounded-md px-3 py-2.5 md:px-4 md:py-3.5 text-xs sm:text-sm md:text-base" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5", color: "#52525b" }}>
          {t}
        </div>
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
