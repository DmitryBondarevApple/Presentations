import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide24RecCorporate = () => (
  <SMSlideContainer number={24} label="Рекомендации · Корпорации">
    <SMKicker color={SM.terra}>Рекомендации для корпораций</SMKicker>
    <SMChart src="VIS-07.svg" alt="Процесс корпоративного пилота: от бизнес-задачи к внедрению" />
    <SMTakeaway accent={SM.terra}>
      Начинать нужно не с поиска стартапов, а с карты бизнес-задач. Без владельца процесса даже хороший стартап
      часто не доходит до внедрения.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide24RecCorporate;
