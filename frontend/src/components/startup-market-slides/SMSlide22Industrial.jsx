import { SMSlideContainer, SMKicker, SMTitle, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide22Industrial = () => (
  <SMSlideContainer number={22} label="Корпоративно-стратегические">
    <SMKicker color={SM.terra}>Industrial, Manufacturing и Energy, CleanTech</SMKicker>
    <SMTitle>Раскрываются через корпоративный спрос</SMTitle>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-2">
      <div>
        <SMLi accent={SM.terra}>Доступ к крупным заказчикам</SMLi>
        <SMLi accent={SM.terra}>Проверка технологии в реальных условиях</SMLi>
        <SMLi accent={SM.terra}>Промышленные пилоты</SMLi>
        <SMLi accent={SM.terra}>Локализация</SMLi>
      </div>
      <div>
        <SMLi accent={SM.terra}>Права на технологию</SMLi>
        <SMLi accent={SM.terra}>Длинный горизонт финансирования</SMLi>
        <SMLi accent={SM.terra}>Подтверждённый экономический эффект</SMLi>
      </div>
    </div>
    <SMTakeaway accent={SM.terra}>
      Без отраслевых заказчиков и пилотных площадок даже сильная технология может не перейти в коммерческое
      применение.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide22Industrial;
