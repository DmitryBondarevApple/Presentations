import { SMSlideContainer, SMKicker, SMTitle, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide15CheckCorporate = () => (
  <SMSlideContainer number={15} label="Критерии · Корпорации">
    <SMKicker color={SM.terra}>Что проверяют корпорации</SMKicker>
    <SMTitle>Применимость к конкретной задаче бизнеса</SMTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-2">
      <div>
        <SMLi accent={SM.terra}>Наличие бизнес-задачи</SMLi>
        <SMLi accent={SM.terra}>Владелец процесса внутри корпорации</SMLi>
        <SMLi accent={SM.terra}>Интеграции и работа с данными</SMLi>
        <SMLi accent={SM.terra}>Информационная безопасность</SMLi>
      </div>
      <div>
        <SMLi accent={SM.terra}>Юридические требования</SMLi>
        <SMLi accent={SM.terra}>Экономический эффект</SMLi>
        <SMLi accent={SM.terra}>Возможность масштабирования после пилота</SMLi>
      </div>
    </div>
    <SMTakeaway accent={SM.terra}>
      Корпоративный спрос — это самостоятельная шкала, а не дополнение к инвестиционной.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide15CheckCorporate;
