import { TASlideContainer, TAH, TALi } from './TASlideContainer';
const TASlide45TrackerQs = () => (
  <TASlideContainer number={45} label="Диагностика">
    <TAH>Какие вопросы трекер задаёт команде, работающей через Emergent</TAH>
    <div className="space-y-1 md:space-y-2 mt-2 md:mt-4 max-w-4xl">
      <TALi>Какую гипотезу вы проверяете этой сборкой</TALi>
      <TALi>Что клиент должен сделать после первой демонстрации</TALi>
      <TALi>Какая часть ценности создаётся продуктом, а какая пока ручной работой команды</TALi>
      <TALi>Что уже можно показать клиенту, а что пока существует только в dev</TALi>
      <TALi>Какой факт вы хотите получить на этой неделе</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide45TrackerQs;
