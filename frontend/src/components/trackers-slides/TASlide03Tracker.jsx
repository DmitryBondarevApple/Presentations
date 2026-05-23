import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const rows = [
  { q: "Стадия", a: "Где команда находится сейчас" },
  { q: "Риск", a: "Что может помешать следующему шагу" },
  { q: "Метрика", a: "Какой показатель сейчас главный" },
  { q: "Действие", a: "Что снизит неопределённость за неделю" },
];
const TASlide03Tracker = () => (
  <TASlideContainer number={3} label="Взгляд трекера">
    <TAH>Стартап глазами трекера</TAH>
    <TASub>Трекеру нужно быстро понять четыре вещи</TASub>
    <div className="max-w-4xl" style={{ border: "1px solid #e5e5e5", borderRadius: 6, overflow: "hidden" }}>
      <div className="grid grid-cols-2 font-mono text-[10px] md:text-xs tracking-wider uppercase px-5 py-3" style={{ backgroundColor: "#0a0a0a", borderBottom: "none", color: "#ffffff" }}>
        <span>Вопрос</span><span>Что нужно выяснить</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} className="grid grid-cols-2 px-5 py-3.5 md:py-4 text-sm sm:text-base md:text-lg" style={{ borderBottom: i < rows.length - 1 ? "1px solid #e5e5e5" : "none" }}>
          <span className="font-bold" style={{ color: "#0a0a0a" }}>{r.q}</span>
          <span style={{ color: "#3f3f46" }}>{r.a}</span>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide03Tracker;
