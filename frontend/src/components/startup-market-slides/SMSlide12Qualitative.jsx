import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const Label = ({ children }) => (
  <p className="text-sm md:text-base font-semibold mb-2 mt-1" style={{ color: SM.ink }}>{children}</p>
);

const SMSlide12Qualitative = () => (
  <SMSlideContainer number={12} label="Качественная часть">
    <SMKicker>Качественная часть исследования</SMKicker>
    <SMTitle>Интервью объясняют, почему количественные шкалы расходятся</SMTitle>
    <Label>В исследовании использованы 12 интервью с тремя группами участников:</Label>
    <div className="max-w-4xl">
      <SMLi>Фонды, частные инвесторы и клубы;</SMLi>
      <SMLi accent={SM.green}>Государственные и институциональные участники;</SMLi>
      <SMLi accent={SM.terra}>Корпоративные участники и корпоративные инновационные функции.</SMLi>
    </div>
    <SMTakeaway label="Главный вывод">
      Спрос на стартапы не является единым. Каждый тип участника рынка использует собственные критерии оценки.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide12Qualitative;
