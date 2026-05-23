import { TASlideContainer, TAH } from './TASlideContainer';
const items = [
  "Стартап — это поиск модели, а не просто новая компания",
  "Стадия определяет правильный вопрос, метрику и действие",
  "Пилот, интервью и интерес — ещё не доказательство спроса",
  "PMF виден по поведению клиента: оплата, retention, повторяемость",
  "Задача трекера — помочь команде найти главный риск и превратить его в проверяемый шаг",
];
const TASlide30Finals = () => (
  <TASlideContainer number={30} label="Выводы">
    <TAH>Финальные выводы</TAH>
    <p className="font-body text-xs md:text-sm mb-3 md:mb-6" style={{ color: "#71717a" }}>5 мыслей, которые стоит запомнить</p>
    <div className="space-y-2 md:space-y-4 max-w-4xl">
      {items.map((t, i) => (
        <div key={i} className="flex items-start gap-3 md:gap-4">
          <span className="font-mono text-sm md:text-lg font-bold shrink-0 mt-0.5" style={{ color: "#d4d4d8" }}>{String(i + 1).padStart(2, '0')}</span>
          <p className="font-body text-xs sm:text-sm md:text-lg leading-relaxed" style={{ color: "#3f3f46" }}>{t}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide30Finals;
