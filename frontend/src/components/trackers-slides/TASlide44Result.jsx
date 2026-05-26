import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide44Result = () => (
  <TASlideContainer number={44} label="Результат">
    <TAH>Что получилось за 40 минут</TAH>
    <TASub>От PRD-документа к первому рабочему продукту</TASub>
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="lg:w-[55%] rounded-md overflow-hidden" style={{ border: "1px solid #e5e5e5" }}>
        <img src={`${process.env.PUBLIC_URL || ''}/images/emergent/vc-dashboard.png`} alt="VetControl" className="w-full h-auto" />
      </div>
      <div className="lg:w-[45%] flex flex-col gap-3 md:gap-4 justify-center">
        <div className="rounded-md p-4 md:p-5 flex items-center gap-4" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-heading text-2xl md:text-4xl font-bold" style={{ color: "#0a0a0a" }}>17:43</span>
          <div><p className="font-mono text-[10px] md:text-xs tracking-wider uppercase" style={{ color: "#a1a1aa" }}>Запуск задачи</p><p className="font-body text-xs md:text-sm" style={{ color: "#71717a" }}>PRD.md передан платформе</p></div>
        </div>
        <div className="flex justify-center"><div className="w-px h-4 md:h-6" style={{ backgroundColor: "#0a0a0a" }} /></div>
        <div className="rounded-md p-4 md:p-5 flex items-center gap-4" style={{ border: "2px solid #0a0a0a" }}>
          <span className="font-heading text-2xl md:text-4xl font-bold" style={{ color: "#0a0a0a" }}>18:23</span>
          <div><p className="font-mono text-[10px] md:text-xs tracking-wider uppercase" style={{ color: "#0a0a0a" }}>Готовый результат</p><p className="font-body text-xs md:text-sm" style={{ color: "#71717a" }}>Рабочий прототип SaaS-продукта</p></div>
        </div>
      </div>
    </div>
  </TASlideContainer>
);
export default TASlide44Result;
