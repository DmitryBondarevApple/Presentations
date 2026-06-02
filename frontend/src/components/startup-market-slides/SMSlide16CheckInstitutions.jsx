import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide16CheckInstitutions = () => (
  <SMSlideContainer number={16} label="Критерии · Институты развития">
    <SMKicker color={SM.green}>Что важно для институтов развития</SMKicker>
    <SMTitle>Что важно для институтов развития</SMTitle>
    <SMP>
      Институты развития добавляют к оценке стартапа критерии технологической и институциональной значимости.
      Для них важны:
    </SMP>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-1">
      <div>
        <SMLi accent={SM.green}>Технологическая зрелость;</SMLi>
        <SMLi accent={SM.green}>Локализация;</SMLi>
        <SMLi accent={SM.green}>Права на результаты интеллектуальной деятельности;</SMLi>
        <SMLi accent={SM.green}>Применимость в российской экономике;</SMLi>
      </div>
      <div>
        <SMLi accent={SM.green}>Снижение зависимости от внешних решений;</SMLi>
        <SMLi accent={SM.green}>Наличие отраслевого заказчика;</SMLi>
        <SMLi accent={SM.green}>Возможность коммерциализации технологии.</SMLi>
      </div>
    </div>
    <SMTakeaway accent={SM.green}>
      Такие критерии особенно важны для Industrial, Energy, CleanTech, Biotech, Materials, Robotics
      и части AI, ML-решений.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide16CheckInstitutions;
