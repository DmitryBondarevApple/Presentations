import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide09Hypothesis = () => (
  <TASlideContainer number={9} label="Гипотеза">
    <TAH>Стартап начинается с гипотезы</TAH>
    <TASub>Примеры гипотез</TASub>
    <div className="space-y-1.5 md:space-y-3 max-w-4xl">
      <TALi>Руководители сервисных компаний готовы платить за анализ звонков, если он покажет потерянные лиды</TALi>
      <TALi>Команды готовы работать на онлайн-доске, если она ускоряет совместные обсуждения</TALi>
      <TALi>Покупатели готовы доверять магазину как фильтру качества</TALi>
      <TALi>Пассажиры и водители готовы договариваться о цене поездки напрямую</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide09Hypothesis;
