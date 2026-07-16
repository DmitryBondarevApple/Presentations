import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SMLi, SM } from "./SMSlideContainer";

const SMSlide26RecCorpIntro = () => (
  <SMSlideContainer number={26} label="Рекомендации · Корпорации">
    <SMKicker color={SM.terra}>Рекомендации для корпораций</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Путь корпоративного пилота: от бизнес-задачи к внедрению</SMTitle>
    <SMSplit src="VIS-07.svg" alt="Процесс корпоративного пилота: от бизнес-задачи к внедрению" wide>
      <SMP className="!mb-2">
        Корпорациям следует смотреть прежде всего на шкалу корпоративного спроса. Она показывает направления,
        где выше вероятность найти решения для пилотов, внедрений, закупок и стратегических партнёрств. Наиболее
        сильные направления — Enterprise Solution, EdTech, HealthTech, MedTech, Cybersecurity, FinTech, E-commerce,
        RetailTech, Industrial, Manufacturing, Energy, CleanTech.
      </SMP>
      <SMP className="!mb-2">
        Работу следует начинать не с поиска стартапов, а с карты бизнес-задач. Перед пилотом нужно определить
        бизнес-заказчика; процесс, который должен измениться; метрики успеха; данные и системы, необходимые
        стартапу; ответственных за IT, безопасность, закупки и юридические вопросы; решение, которое будет
        принято после успешного пилота.
      </SMP>
      <SMP className="mb-0" >
        Без владельца процесса даже хороший стартап часто не доходит до внедрения.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide26RecCorpIntro;
