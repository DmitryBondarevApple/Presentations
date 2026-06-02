import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SM } from "./SMSlideContainer";

const SMSlide25RecInstitutions = () => (
  <SMSlideContainer number={25} label="Рекомендации · Институты развития">
    <SMKicker color={SM.green}>Рекомендации для институтов развития</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Опираться на разрывы между шкалами спроса</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 max-w-6xl">
      <div>
        <SMP>
          Институтам развития особенно важны разрывы между шкалами. Если направление сильнее в корпоративной
          шкале, чем в шкале спроса со стороны инвесторов, необходимы инструменты соединения стартапов
          с заказчиками: отраслевые пилоты, доступ к корпорациям, демонстрационные площадки, поддержка внедрений
          и стандартизация требований.
        </SMP>
        <SMP className="mb-0">
          Если направление сильнее в шкале спроса со стороны инвесторов, чем в корпоративной шкале, приоритетом
          становятся коммерциализация, подтверждение спроса, первые продажи и доступ к отраслевым клиентам.
        </SMP>
      </div>
      <div>
        <p className="text-sm md:text-base font-semibold mb-2" style={{ color: SM.ink }}>Наиболее полезные инструменты:</p>
        <SMLi accent={SM.green}>Корпоративные пилоты от заранее описанных задач заказчиков;</SMLi>
        <SMLi accent={SM.green}>Отраслевые витрины решений;</SMLi>
        <SMLi accent={SM.green}>Типовой паспорт пилота;</SMLi>
        <SMLi accent={SM.green}>Софинансирование первых внедрений;</SMLi>
        <SMLi accent={SM.green}>Помощь с правами на технологию;</SMLi>
        <SMLi accent={SM.green}>Подготовка к комплексной проверке;</SMLi>
        <SMLi accent={SM.green}>Быстрый переход от пилота к коммерческому договору.</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide25RecInstitutions;
