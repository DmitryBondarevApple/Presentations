import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rows = [
  { type: "Малый бизнес", ess: "Исполнение понятной модели" },
  { type: "Проект", ess: "Ограниченный срок, бюджет и результат" },
  { type: "Инновационный продукт", ess: "Новая технология или решение" },
  { type: "Стартап", ess: "Поиск новой масштабируемой модели" },
];
const TASlide06NotJust = () => (
  <TASlideContainer number={6} label="Отличия">
    <TAH>Стартап — это не просто новая компания</TAH>
    <TASub>Сравнение типов деятельности</TASub>
    <div className="max-w-3xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-2 font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#0a0a0a", borderBottom: "none", color: "#ffffff" }}>
        <span>Тип деятельности</span><span>Суть</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-2 px-4 py-2.5 md:py-3.5 text-xs sm:text-sm md:text-base"
          style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none", backgroundColor: r.type === "Стартап" ? "#fafafa" : "transparent" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.type}</span>
          <span style={{ color: "#52525b" }}>{r.ess}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide06NotJust;
