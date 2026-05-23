import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rows = [
  { q: "Стадия", a: "Валидация, переход к первым продажам" },
  { q: "Главный риск", a: "Переход от пилотов к оплачиваемому повторяемому внедрению" },
  { q: "Ключевая метрика", a: "Конверсия пилотов в оплату при достижении критериев успеха" },
  { q: "Первый вопрос трекера", a: "За какой конкретный результат клиент готов платить после интеграции с CRM?" },
  { q: "Действие на неделю", a: "Оформить платный пилот или письменное обязательство с суммой, сроком, ответственным и критериями успеха" },
];
const TASlide28Debrief = () => (
  <TASlideContainer number={28} label="Разбор">
    <TAH>Разбор упражнения</TAH>
    <TASub>Ответы</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-[1fr_2fr] font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#fafafa", borderBottom: "1px solid #e5e5e5", color: "#a1a1aa" }}>
        <span>Вопрос</span><span>Ответ</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_2fr] px-4 py-2 md:py-3 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.q}</span>
          <span style={{ color: "#52525b" }}>{r.a}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide28Debrief;
