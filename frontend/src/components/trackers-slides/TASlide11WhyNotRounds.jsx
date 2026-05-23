import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide11WhyNotRounds = () => (
  <TASlideContainer number={11} label="Раунды ≠ стадия">
    <TAH>Почему pre-seed, seed и Series A недостаточно</TAH>
    <TASub>Инвестиционная стадия не всегда равна реальному состоянию бизнеса</TASub>
    <div className="space-y-1.5 md:space-y-3 max-w-3xl">
      <TALi>Команда может поднять seed без product-market fit</TALi>
      <TALi>Иметь выручку без инвестиций</TALi>
      <TALi>Называть презентацию MVP</TALi>
      <TALi>Иметь пилоты, но не иметь продаж</TALi>
      <TALi>Быть известной, но не иметь устойчивой экономики</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide11WhyNotRounds;
