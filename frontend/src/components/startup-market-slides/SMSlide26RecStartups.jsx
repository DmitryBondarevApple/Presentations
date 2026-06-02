import { SMSlideContainer, SMKicker, SMTitle, SMCard, SMCardTitle, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide26RecStartups = () => (
  <SMSlideContainer number={26} label="Рекомендации · Стартапы">
    <SMKicker>Рекомендации для стартапов</SMKicker>
    <SMTitle>Определить основной тип спроса</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-1">
      <SMCard accent={SM.navy}>
        <SMCardTitle>Для инвесторов</SMCardTitle>
        <SMLi>Рынок, рост, команда</SMLi>
        <SMLi>Выручка и unit-экономика</SMLi>
        <SMLi>Сценарий выхода</SMLi>
      </SMCard>
      <SMCard accent={SM.terra}>
        <SMCardTitle>Для корпораций</SMCardTitle>
        <SMLi accent={SM.terra}>Задача заказчика и пилот</SMLi>
        <SMLi accent={SM.terra}>Интеграции и безопасность</SMLi>
        <SMLi accent={SM.terra}>Экономический эффект</SMLi>
      </SMCard>
      <SMCard accent={SM.green}>
        <SMCardTitle>Для институтов развития</SMCardTitle>
        <SMLi accent={SM.green}>Локализация и значимость</SMLi>
        <SMLi accent={SM.green}>Права на РИД</SMLi>
        <SMLi accent={SM.green}>Применимость в экономике</SMLi>
      </SMCard>
    </div>
    <SMTakeaway>Одна презентация для всех аудиторий снижает вероятность сделки.</SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide26RecStartups;
