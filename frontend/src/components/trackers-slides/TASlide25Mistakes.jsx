import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rows = [
  { m: "Строит продукт до понимания боли", d: "Вернуть к problem discovery" },
  { m: "Считает интервью подтверждением спроса", d: "Искать поведенческие сигналы" },
  { m: "Путает пилот с продажей", d: "Зафиксировать критерии оплаты" },
  { m: "Принимает первую сделку за PMF", d: "Проверить повторяемость" },
  { m: "Нанимает продавцов до упаковки продаж", d: "Разобрать процесс продажи" },
  { m: "Масштабирует ручной труд", d: "Замерить долю ручных операций" },
];
const TASlide25Mistakes = () => (
  <TASlideContainer number={25} label="Ошибки основателей">
    <TAH>Типовые ошибки основателей</TAH>
    <TASub>Что делает трекер</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-2 font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#0a0a0a", borderBottom: "none", color: "#ffffff" }}>
        <span>Ошибка</span><span>Что должен сделать трекер</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-2 px-4 py-2 md:py-3 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span style={{ color: "#52525b" }}>{r.m}</span>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.d}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide25Mistakes;
