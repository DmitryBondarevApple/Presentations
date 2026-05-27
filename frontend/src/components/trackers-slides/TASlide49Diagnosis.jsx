import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const plans = [
  { n: "01", t: "Продукт", d: "Что болит, кто пользователь и кто покупатель, за какой результат платят" },
  { n: "02", t: "Стадия", d: "Discovery, validation, первые продажи или попытка масштабировать недоказанное" },
  { n: "03", t: "Реализуемость", d: "Что собирается в агентской среде, а где нужна глубокая разработка" },
  { n: "04", t: "Внедрение", d: "Интеграции, данные, безопасность, юридика, барьеры на старт" },
  { n: "05", t: "Экономика", d: "Это продукт или ручной консалтинг, упакованный как SaaS" },
  { n: "06", t: "Зрелость процесса", d: "Документация, контроль кода, dev vs production, схема релиза" },
];
const TASlide49Diagnosis = () => (
  <TASlideContainer number={49} label="Диагностика">
    <TAH>Шесть плоскостей, в которых трекер видит AI-продукт</TAH>
    <TASub>Не «рынок» отдельно, не «технологии» отдельно — единая картина</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-5xl">
      {plans.map((p, i) => (
        <div key={i} className="rounded-md p-3 md:p-4" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5", borderTopWidth: 3, borderTopColor: "#0a0a0a" }}>
          <span className="font-mono text-lg md:text-xl font-bold" style={{ color: "#d4d4d8" }}>{p.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-1.5" style={{ color: "#0a0a0a" }}>{p.t}</p>
          <p className="font-body text-xs md:text-sm leading-relaxed" style={{ color: "#52525b" }}>{p.d}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide49Diagnosis;
