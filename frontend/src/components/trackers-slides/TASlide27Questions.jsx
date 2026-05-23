import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const qs = [
  "На какой стадии находится стартап?",
  "Главный риск?",
  "Какая ключевая метрика сейчас?",
  "О чём трекер должен спросить в первую очередь?",
  "Какое действие на следующую неделю?",
];
const TASlide27Questions = () => (
  <TASlideContainer number={27} label="Вопросы">
    <TAH>Вопросы к упражнению</TAH>
    <TASub>Ответьте за 5 минут</TASub>
    <div className="max-w-3xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      {qs.map((q, i) => (
        <div key={i} className="flex items-center gap-4 px-4 py-3 md:py-4 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < qs.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-mono text-sm md:text-lg font-bold shrink-0" style={{ color: "#d4d4d8" }}>{String(i + 1).padStart(2, '0')}</span>
          <span style={{ color: "#3f3f46" }}>{q}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide27Questions;
