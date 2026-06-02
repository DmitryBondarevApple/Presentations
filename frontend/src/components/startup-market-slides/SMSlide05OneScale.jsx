import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide05OneScale = () => (
  <SMSlideContainer number={5} label="Логика исследования">
    <SMKicker>Почему одной шкалы недостаточно</SMKicker>
    <SMTitle>Одна универсальная шкала сглаживает различия между типами спроса</SMTitle>
    <div className="max-w-4xl mb-1">
      <SMLi>Количество стартапов показывает размер предложения в направлении.</SMLi>
      <SMLi accent={SM.green}>Спрос со стороны инвесторов показывает вероятность финансирования и следующих раундов.</SMLi>
      <SMLi accent={SM.terra}>Корпоративный спрос показывает вероятность пилотов, внедрений, закупок, стратегических партнёрств и сделок со стратегическими покупателями.</SMLi>
    </div>
    <SMTakeaway>Эти три вида спроса пересекаются, но не заменяют друг друга.</SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide05OneScale;
