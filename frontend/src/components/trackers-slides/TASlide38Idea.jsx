import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide38Idea = () => (
  <TASlideContainer number={38} label="Шаг 1 · Идея">
    <TAH>Плохая формулировка = плохой результат</TAH>
    <TASub>Даже если инструмент сильный</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{ color: "#a1a1aa" }}>Слишком общее</span>
        <p className="font-body text-sm md:text-lg mb-2" style={{ color: "#71717a" }}>«Хочу сервис для студентов»</p>
        <p className="font-body text-xs md:text-sm" style={{ color: "#a1a1aa" }}>Непонятно, что делает сервис, для кого именно, какую задачу решает</p>
      </div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ border: "2px solid #0a0a0a" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{ color: "#0a0a0a" }}>Достаточно конкретно</span>
        <p className="font-body text-sm md:text-lg" style={{ color: "#0a0a0a" }}>«Хочу сервис, который помогает студентам готовиться к экзаменам по билетам и автоматически собирать персональный план подготовки»</p>
      </div>
    </div>
  </TASlideContainer>
);
export default TASlide38Idea;
