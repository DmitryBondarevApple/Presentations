import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide04Speaker = () => (
  <TASlideContainer number={4} label="Спикер">
    <TAH>Практическая позиция спикера</TAH>
    <TASub>Я говорю об этом как практик</TASub>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-3xl">
      <TALi>Серийный предприниматель</TALi>
      <TALi>Более 10 компаний</TALi>
      <TALi>Опыт привлечения инвестиций</TALi>
      <TALi>Опыт бизнес-ангела</TALi>
      <TALi>Опыт работы с фондами, корпорациями и стартапами</TALi>
      <TALi>Работа со стартапами с разных сторон: основатель, инвестор, борд, консультант</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide04Speaker;
