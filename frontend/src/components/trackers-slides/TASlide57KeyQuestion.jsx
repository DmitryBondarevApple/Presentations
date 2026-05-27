import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const kinds = [
  { t: "Рыночная", d: "Клиент что-то делает в ответ: даёт данные, подключает CRM, готовится к пилоту, обсуждает оплату" },
  { t: "Продуктовая", d: "Понимаем, какая часть ценности создаётся продуктом, а какая ручным трудом команды" },
  { t: "Техническая", d: "Появился модуль, роль, форма, интерфейс или аналитика — но бизнес-смысл не изменился" },
];
const TASlide57KeyQuestion = () => (
  <TASlideContainer number={57} label="Главный вопрос">
    <TAH>Какую неопределённость снижает следующая итерация?</TAH>
    <TASub>Сейчас стало легко снижать техническую — но это не всегда двигает бизнес</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 max-w-5xl">
      {kinds.map((k, i) => (
        <div key={i} className="rounded-md p-4 md:p-5" style={{ backgroundColor: i === 0 ? "#0a0a0a" : "#fafafa", border: i === 0 ? "none" : "1px solid #e5e5e5" }}>
          <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-2 md:mb-3 block" style={{ color: i === 0 ? "#a1a1aa" : "#a1a1aa" }}>Неопределённость</span>
          <p className="font-heading text-lg md:text-2xl font-bold mb-2 md:mb-3" style={{ color: i === 0 ? "#ffffff" : "#0a0a0a" }}>{k.t}</p>
          <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: i === 0 ? "#d4d4d8" : "#52525b" }}>{k.d}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold max-w-4xl" style={{ color: "#3f3f46" }}>
      Если за неделю стало больше кода, но не стало меньше критической неопределённости, трекер должен это увидеть.
    </p>
  </TASlideContainer>
);
export default TASlide57KeyQuestion;
