import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide26RecStartups = () => (
  <SMSlideContainer number={26} label="Рекомендации · Стартапы">
    <SMKicker>Рекомендации для стартапов</SMKicker>
    <SMTitle>Определить основной тип спроса, под который они готовятся</SMTitle>
    <div className="max-w-4xl">
      <SMLi accent={SM.navy}>
        Для инвесторов важны рынок, рост, команда, выручка, unit-экономика и сценарий выхода.
      </SMLi>
      <SMLi accent={SM.terra}>
        Для корпораций важны задача заказчика, пилот, интеграции, безопасность и экономический эффект.
      </SMLi>
      <SMLi accent={SM.green}>
        Для институтов развития важны локализация, технологическая значимость, права на РИД и применимость
        в российской экономике.
      </SMLi>
    </div>
    <SMTakeaway>Одна презентация для всех аудиторий снижает вероятность сделки.</SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide26RecStartups;
