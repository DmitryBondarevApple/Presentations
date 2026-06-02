import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const Label = ({ children }) => (
  <p className="text-sm md:text-base font-semibold mb-2 mt-1" style={{ color: SM.ink }}>{children}</p>
);

const SMSlide12Qualitative = () => (
  <SMSlideContainer number={12} label="Качественная часть">
    <SMKicker>Качественная часть исследования</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Интервью объясняют, почему количественные шкалы расходятся</SMTitle>
    <Label>В исследовании использованы 12 интервью с тремя группами участников:</Label>
    <div className="max-w-5xl mb-2">
      <SMLi>Фонды, частные инвесторы и клубы;</SMLi>
      <SMLi accent={SM.green}>Государственные и институциональные участники;</SMLi>
      <SMLi accent={SM.terra}>Корпоративные участники и корпоративные инновационные функции.</SMLi>
    </div>
    <SMP>
      Интервью помогают отделить формальный отраслевой интерес от реального спроса. Направление может быть
      заметным в базе стартапов, но слабым для инвестора из-за недостаточной зрелости компаний. Другое
      направление может не выглядеть лидером в интегральной шкале, но быть важным для корпораций, если оно
      связано с безопасностью, данными, инфраструктурой, интеграциями или снижением операционных рисков.
    </SMP>
    <SMTakeaway>Спрос на стартапы не является единым. Каждый тип участника рынка использует собственные критерии оценки.</SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide12Qualitative;
