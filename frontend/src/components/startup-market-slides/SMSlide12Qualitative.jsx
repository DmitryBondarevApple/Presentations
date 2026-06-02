import { SMSlideContainer, SMKicker, SMTitle, SMCard, SMCardTitle, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide12Qualitative = () => (
  <SMSlideContainer number={12} label="Качественная часть">
    <SMKicker>Качественная часть исследования</SMKicker>
    <SMTitle>12 интервью с тремя группами участников</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-6" style={{ color: SM.body }}>
      Интервью объясняют, почему количественные шкалы расходятся между собой.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <SMCard accent={SM.navy}>
        <SMCardTitle>Фонды и инвесторы</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Фонды, частные инвесторы и инвестиционные клубы</p>
      </SMCard>
      <SMCard accent={SM.green}>
        <SMCardTitle>Институциональные</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Государственные и институциональные участники</p>
      </SMCard>
      <SMCard accent={SM.terra}>
        <SMCardTitle>Корпорации</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Корпоративные участники и инновационные функции</p>
      </SMCard>
    </div>
    <SMTakeaway>
      Спрос на стартапы не является единым. Каждый тип участника рынка использует собственные критерии оценки.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide12Qualitative;
