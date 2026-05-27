import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide47System = () => (
  <TASlideContainer number={47} label="Демонстрация">
    <TAH>Это уже не просто идея, а объект для проверки</TAH>
    <TASub>Такой прототип можно показывать клиенту, обсуждать и дорабатывать</TASub>
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="lg:w-[55%] rounded-md overflow-hidden" style={{border:"1px solid #e5e5e5"}}>
        <img src={`${process.env.PUBLIC_URL||''}/images/emergent/vc-analytics.png`} alt="Аналитика" className="w-full h-auto" />
      </div>
      <div className="lg:w-[45%] space-y-1 md:space-y-2">
        <TALi>Роли и сценарии работы</TALi>
        <TALi>Сущности и карточки</TALi>
        <TALi>Базовая аналитика</TALi>
        <TALi>Административная часть</TALi>
        <TALi>Данные для предметного разговора с клиентом</TALi>
      </div>
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Трекер здесь спрашивает не «красиво ли получилось», а «что именно теперь можно проверить на клиенте».</p>
  </TASlideContainer>
);
export default TASlide47System;
