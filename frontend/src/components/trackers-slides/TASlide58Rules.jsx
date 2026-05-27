import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rules = [
  { n: "01", t: "Не путайте AI-first с startup-ready", d: "Модные инструменты не равны рынку, сегменту и покупаемой ценности" },
  { n: "02", t: "Проверка гипотезы, а не производство фич", d: "Ускорять сборку интерфейса — это ещё не обязательно полезное ускорение" },
  { n: "03", t: "Давите на конкретику", d: "Не «что ещё добавить», а «какое поведение клиента должно измениться»" },
  { n: "04", t: "Проверяйте платформу раньше времени", d: "Большой продукт почти всегда хочется делать раньше, чем он реально нужен" },
  { n: "05", t: "Спрашивайте про ручной труд", d: "Многие AI-сервисы внутри работают куда более вручную, чем выглядят снаружи" },
  { n: "06", t: "Проверяйте зрелость разработки", d: "Где код, кто его контролирует, есть ли GitHub, production, документация" },
  { n: "07", t: "Помогайте выбирать, что именно делать", d: "В мире, где код стал дешевле, главным дефицитом становится ясность" },
];
const TASlide58Rules = () => (
  <TASlideContainer number={58} label="Чек-лист трекера">
    <TAH>Семь правил для работы с AI-командой</TAH>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 max-w-5xl">
      {rules.map((r, i) => (
        <div key={i} className="flex items-start gap-3 rounded-md p-3 md:p-4" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-mono text-base md:text-xl font-bold shrink-0" style={{ color: "#d4d4d8" }}>{r.n}</span>
          <div>
            <p className="font-heading text-sm md:text-base font-bold mb-0.5" style={{ color: "#0a0a0a" }}>{r.t}</p>
            <p className="font-body text-xs md:text-sm leading-relaxed" style={{ color: "#52525b" }}>{r.d}</p>
          </div>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide58Rules;
