import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const qs = [
  { n: "01", q: "У кого эта проблема есть?", h: "Определите целевую аудиторию" },
  { n: "02", q: "В чём она проявляется?", h: "Опишите конкретные ситуации" },
  { n: "03", q: "Как решают сейчас?", h: "Текущие альтернативы и конкуренты" },
  { n: "04", q: "Почему не устраивает?", h: "Что именно можно улучшить" },
];
const TASlide39Problem = () => (
  <TASlideContainer number={39} label="Шаг 2 · Пользователь">
    <TAH>Продукт нужен не потому, что идея интересная</TAH>
    <TASub>А потому, что у пользователя есть реальная задача</TASub>
    <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-4xl">
      {qs.map((q, i) => (
        <div key={i} className="rounded-md p-4 md:p-5" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-mono text-lg md:text-xl font-bold" style={{ color: "#d4d4d8" }}>{q.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-1" style={{ color: "#0a0a0a" }}>{q.q}</p>
          <p className="font-body text-xs md:text-base" style={{ color: "#52525b" }}>{q.h}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4" style={{ color: "#71717a", fontStyle: "italic" }}>Если на эти вопросы нет ответа — продукт строится на догадках.</p>
  </TASlideContainer>
);
export default TASlide39Problem;
