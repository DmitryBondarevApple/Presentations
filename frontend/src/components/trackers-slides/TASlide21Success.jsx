import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const cases = [
  { c: "ВкусВилл", h: "Магазин как бренд и фильтр качества" },
  { c: "Авито", h: "Ликвидность маркетплейса и сетевой эффект" },
  { c: "Miro", h: "Совместная командная работа на общей доске" },
  { c: "inDrive", h: "Прямая договорённость о цене между водителем и пассажиром" },
  { c: "Revolut", h: "Вход через сильную боль международных платежей" },
];
const TASlide21Success = () => (
  <TASlideContainer number={21} label="Успешные кейсы">
    <TAH>Что именно сработало</TAH>
    <TASub>Рабочая гипотеза в основе каждого успеха</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-[1fr_2fr] font-mono text-[10px] md:text-xs tracking-wider uppercase px-4 py-2 md:py-3" style={{ backgroundColor: "#fafafa", borderBottom: "1px solid #e5e5e5", color: "#a1a1aa" }}>
        <span>Кейс</span><span>Рабочая гипотеза</span>
      </div>
      {cases.map((r, i) => (
        <div key={i} className="grid grid-cols-[1fr_2fr] px-4 py-2.5 md:py-3.5 text-xs sm:text-sm md:text-base" style={{ borderBottom: i < cases.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.c}</span>
          <span style={{ color: "#52525b" }}>{r.h}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide21Success;
