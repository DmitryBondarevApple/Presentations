import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const cases = [
  { c: "Юлмарт", l: "Рост без контроля может уничтожить компанию" },
  { c: "KupiVIP", l: "Product-market fit не вечен" },
  { c: "Getir", l: "Частотный спрос не гарантирует хорошую юнит-экономику" },
  { c: "Arrival", l: "Hardware требует проверки производства и капитала" },
  { c: "Cazoo", l: "Онлайн-интерфейс не отменяет тяжёлой операционной модели" },
  { c: "Babylon Health", l: "В регулируемых отраслях продукт — только часть модели" },
];
const TASlide23NegCases = () => (
  <TASlideContainer number={23} label="Негативные кейсы">
    <TAH>Провалы, которые учат</TAH>
    <TASub>Уроки для трекера из реальных историй</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-[1fr_2fr] font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#fafafa", borderBottom: "1px solid #e5e5e5", color: "#a1a1aa" }}>
        <span>Кейс</span><span>Урок для трекера</span>
      </div>
      {cases.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_2fr] px-4 py-2 md:py-3 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < cases.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.c}</span>
          <span style={{ color: "#52525b" }}>{r.l}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide23NegCases;
