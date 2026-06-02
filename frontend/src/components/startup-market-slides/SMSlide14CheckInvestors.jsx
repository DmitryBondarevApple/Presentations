import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide14CheckInvestors = () => (
  <SMSlideContainer number={14} label="Критерии · Инвесторы">
    <SMKicker>Что проверяют инвесторы</SMKicker>
    <SMTitle>Что проверяют инвесторы</SMTitle>
    <SMP>
      Инвесторы оценивают не только отрасль, но и способность стартапа превратить отраслевой интерес в рост
      выручки, капитализации и вероятность выхода. Ключевые критерии:
    </SMP>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-1">
      <div>
        <SMLi>Размер и доступность рынка;</SMLi>
        <SMLi>Traction и выручка;</SMLi>
        <SMLi>Команда и фокус основателей;</SMLi>
      </div>
      <div>
        <SMLi>Юридическая структура и права;</SMLi>
        <SMLi>Понятный сценарий выхода;</SMLi>
        <SMLi>Возможность следующего раунда.</SMLi>
      </div>
    </div>
    <SMTakeaway>
      Спрос со стороны инвесторов показывает сегменты, где капитал готов рассматривать проекты, но итоговая
      оценка зависит от конкретной компании.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide14CheckInvestors;
