import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const stages = [
  { s: "Problem discovery", q: "Есть ли у кого-то острая боль и насколько она сильная?" },
  { s: "Customer discovery", q: "Кто клиент и как он решает проблему сейчас?" },
  { s: "MVP, validation", q: "Готов ли клиент действовать или платить?" },
  { s: "Product-market fit", q: "Повторяем ли спрос?" },
  { s: "Efficiency", q: "Можем ли расти при нормальной экономике?" },
  { s: "Scale", q: "Выдержит ли компания рост?" },
  { s: "Sustain", q: "Как управлять зрелой компанией?" },
];
const TASlide10Lifecycle = () => (
  <TASlideContainer number={10} label="Жизненный цикл">
    <TAH>Жизненный цикл стартапа</TAH>
    <TASub>Содержательные стадии важнее инвестиционных раундов</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-[1fr_2fr] font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#0a0a0a", borderBottom: "none", color: "#ffffff" }}>
        <span>Стадия</span><span>Главный вопрос</span>
      </div>
      {stages.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_2fr] px-4 py-2 md:py-3 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < stages.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.s}</span>
          <span style={{ color: "#52525b" }}>{r.q}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide10Lifecycle;
