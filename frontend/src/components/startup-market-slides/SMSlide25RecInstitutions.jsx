import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SM } from "./SMSlideContainer";

const SMSlide25RecInstitutions = () => (
  <SMSlideContainer number={25} label="Рекомендации · Институты развития">
    <SMKicker color={SM.green}>Рекомендации для институтов развития</SMKicker>
    <SMTitle>Поддерживать не только стартапы, но и доступ к спросу</SMTitle>
    <SMP>
      Институтам развития следует поддерживать не только стартапы, но и доступ стартапов к спросу.
      Наиболее полезные инструменты:
    </SMP>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl">
      <div>
        <SMLi accent={SM.green}>Корпоративные пилоты от заранее описанных задач заказчиков;</SMLi>
        <SMLi accent={SM.green}>Отраслевые витрины решений;</SMLi>
        <SMLi accent={SM.green}>Типовой паспорт пилота;</SMLi>
        <SMLi accent={SM.green}>Софинансирование первых внедрений;</SMLi>
      </div>
      <div>
        <SMLi accent={SM.green}>Помощь с правами на технологию;</SMLi>
        <SMLi accent={SM.green}>Подготовка к комплексной проверке;</SMLi>
        <SMLi accent={SM.green}>Быстрый переход от пилота к коммерческому договору.</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide25RecInstitutions;
