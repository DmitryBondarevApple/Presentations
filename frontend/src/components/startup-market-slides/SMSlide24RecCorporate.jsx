import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SMLi, SM } from "./SMSlideContainer";

const SMSlide24RecCorporate = () => (
  <SMSlideContainer number={24} label="Рекомендации · Корпорации">
    <SMKicker color={SM.terra}>Рекомендации для корпораций</SMKicker>
    <SMTitle>Рекомендации для корпораций</SMTitle>
    <SMSplit src="VIS-07.svg" alt="Процесс корпоративного пилота: от бизнес-задачи к внедрению" wide>
      <SMP>Корпорациям следует начинать работу не с поиска стартапов, а с карты бизнес-задач.</SMP>
      <p className="text-sm md:text-base font-semibold mb-2" style={{ color: SM.ink }}>Перед пилотом нужно определить:</p>
      <SMLi accent={SM.terra}>Бизнес-заказчика;</SMLi>
      <SMLi accent={SM.terra}>Процесс, который должен измениться;</SMLi>
      <SMLi accent={SM.terra}>Метрики успеха;</SMLi>
      <SMLi accent={SM.terra}>Данные и системы, необходимые стартапу;</SMLi>
      <SMLi accent={SM.terra}>Ответственных за IT, безопасность, закупки и юридические вопросы;</SMLi>
      <SMLi accent={SM.terra}>Решение, которое будет принято после успешного пилота.</SMLi>
      <p className="text-sm md:text-base leading-relaxed mt-3" style={{ color: SM.body }}>
        Без владельца процесса даже хороший стартап часто не доходит до внедрения.
      </p>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide24RecCorporate;
