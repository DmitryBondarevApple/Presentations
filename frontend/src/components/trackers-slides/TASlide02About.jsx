import { TASlideContainer, TAH, TALi } from './TASlideContainer';
const TASlide02About = () => (
  <TASlideContainer number={2} label="О чём эта лекция">
    <TAH>Сегодня мы разберём</TAH>
    <div className="space-y-1 md:space-y-2 mt-2 md:mt-4 max-w-3xl">
      <TALi>Что такое стартап и чем он отличается от малого бизнеса</TALi>
      <TALi>Как устроен жизненный цикл стартапа</TALi>
      <TALi>Какие KPI важны на разных стадиях</TALi>
      <TALi>Как трекер может определить главный риск</TALi>
      <TALi>Почему успешные и неуспешные кейсы учат одному: стадия, метрика и действие должны совпадать</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide02About;
