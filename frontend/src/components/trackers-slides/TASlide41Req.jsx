import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide41Req = () => (
  <TASlideContainer number={41} label="Шаг 3 · Требования">
    <TAH>Требования нельзя придумывать в отрыве от пользователя</TAH>
    <TASub>Конкретный пример: от боли к ценности</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-4 items-stretch max-w-4xl">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-2 block" style={{ color: "#a1a1aa" }}>Боль</span>
        <p className="font-body text-sm md:text-lg" style={{ color: "#3f3f46" }}>Студент не понимает, что учить в первую очередь</p>
      </div>
      <div className="flex items-center justify-center shrink-0"><span className="text-xl md:text-2xl" style={{ color: "#0a0a0a" }}>→</span></div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-2 block" style={{ color: "#a1a1aa" }}>Функция</span>
        <p className="font-body text-sm md:text-lg" style={{ color: "#3f3f46" }}>Персональный план подготовки на основе билетов</p>
      </div>
      <div className="flex items-center justify-center shrink-0"><span className="text-xl md:text-2xl" style={{ color: "#0a0a0a" }}>→</span></div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ border: "2px solid #0a0a0a" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-2 block" style={{ color: "#0a0a0a" }}>Ценность</span>
        <p className="font-body text-sm md:text-lg" style={{ color: "#0a0a0a" }}>Меньше хаоса, выше шанс сдать вовремя</p>
      </div>
    </div>
  </TASlideContainer>
);
export default TASlide41Req;
