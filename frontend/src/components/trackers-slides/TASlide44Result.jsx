import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide46Result = () => (
  <TASlideContainer number={46} label="Результат">
    <TAH>Что это меняет для трекера</TAH>
    <TASub>От PRD к первому рабочему прототипу за один короткий цикл</TASub>
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="lg:w-[55%] rounded-md overflow-hidden" style={{border:"1px solid #e5e5e5"}}>
        <img src={`${process.env.PUBLIC_URL||''}/images/emergent/vc-dashboard.png`} alt="VetControl" className="w-full h-auto" />
      </div>
      <div className="lg:w-[45%] flex flex-col gap-3 md:gap-4 justify-center">
        <div className="rounded-md p-4 md:p-5 flex items-center gap-4" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
          <span className="font-heading text-2xl md:text-4xl font-bold" style={{color:"#0a0a0a"}}>17:43</span>
          <div><p className="font-mono text-[10px] md:text-xs tracking-wider uppercase" style={{color:"#a1a1aa"}}>Запуск задачи</p><p className="font-body text-xs md:text-sm" style={{color:"#71717a"}}>PRD.md передан платформе</p></div>
        </div>
        <div className="flex justify-center"><div className="w-px h-4 md:h-6" style={{backgroundColor:"#0a0a0a"}} /></div>
        <div className="rounded-md p-4 md:p-5 flex items-center gap-4" style={{border:"2px solid #0a0a0a"}}>
          <span className="font-heading text-2xl md:text-4xl font-bold" style={{color:"#0a0a0a"}}>18:23</span>
          <div><p className="font-mono text-[10px] md:text-xs tracking-wider uppercase" style={{color:"#0a0a0a"}}>Готовый результат</p><p className="font-body text-xs md:text-sm" style={{color:"#71717a"}}>Первый рабочий прототип отраслевого SaaS-продукта</p></div>
        </div>
      </div>
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Если первую версию можно собрать за один вечер, главное ограничение чаще находится уже не в коде, а в ясности гипотезы и требований.</p>
  </TASlideContainer>
);
export default TASlide46Result;
