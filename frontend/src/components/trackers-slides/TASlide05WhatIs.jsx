import { TASlideContainer, TAH, TABadge } from './TASlideContainer';
const kw = ["Поиск", "Повторяемость", "Масштабируемость", "Экономическая жизнеспособность", "Высокая неопределённость"];
const TASlide05WhatIs = () => (
  <TASlideContainer number={5} label="Определение">
    <TAH>Что такое стартап</TAH>
    <p className="font-body text-sm sm:text-base md:text-xl leading-relaxed max-w-4xl mb-4 md:mb-8" style={{ color: "#3f3f46" }}>
      Стартап — это <span className="font-bold" style={{ color: "#0a0a0a" }}>временная организация в поиске повторяемой, масштабируемой и экономически жизнеспособной бизнес-модели.</span>
    </p>
    <div className="flex flex-wrap gap-2 md:gap-3">
      {kw.map((k, i) => <TABadge key={i}>{k}</TABadge>)}
    </div>
  </TASlideContainer>
);
export default TASlide05WhatIs;
