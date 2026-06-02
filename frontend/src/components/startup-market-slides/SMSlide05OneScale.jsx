import { SMSlideContainer, SMKicker, SMTitle, SMCard, SMCardTitle, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide05OneScale = () => (
  <SMSlideContainer number={5} label="Логика исследования">
    <SMKicker>Почему одной шкалы недостаточно</SMKicker>
    <SMTitle>Одна универсальная шкала сглаживает различия</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-6" style={{ color: SM.body }}>
      Чтобы увидеть структуру рынка, спрос нужно разложить на разные измерения — каждое отвечает на свой вопрос.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <SMCard accent={SM.navy}>
        <SMCardTitle>Количество стартапов</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Показывает размер предложения в направлении</p>
      </SMCard>
      <SMCard accent={SM.green}>
        <SMCardTitle>Спрос инвесторов</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Показывает вероятность финансирования и следующих раундов</p>
      </SMCard>
      <SMCard accent={SM.terra}>
        <SMCardTitle>Корпоративный спрос</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Вероятность пилотов, внедрений, закупок, партнёрств и сделок</p>
      </SMCard>
    </div>
    <SMTakeaway>Эти три вида спроса пересекаются, но не заменяют друг друга.</SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide05OneScale;
