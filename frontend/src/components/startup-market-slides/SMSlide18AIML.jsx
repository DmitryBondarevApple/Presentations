import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide18AIML = () => (
  <SMSlideContainer number={18} label="Технологический домен">
    <SMKicker>AI, ML: технологический домен, а не обычная отрасль</SMKicker>
    <SMTitle>AI, ML: технологический домен, а не обычная отрасль</SMTitle>
    <SMP>
      AI, ML лидирует по спросу со стороны инвесторов, но слабее выглядит в корпоративной шкале как
      самостоятельная категория. Причина в том, что корпоративный заказчик покупает не AI, ML как технологию,
      а прикладной результат:
    </SMP>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-1">
      <div>
        <SMLi>Снижение затрат;</SMLi>
        <SMLi>Ускорение процесса;</SMLi>
        <SMLi>Повышение точности;</SMLi>
        <SMLi>Автоматизацию ручного труда;</SMLi>
      </div>
      <div>
        <SMLi>Безопасность;</SMLi>
        <SMLi>Аналитику;</SMLi>
        <SMLi>Рост выручки.</SMLi>
      </div>
    </div>
    <SMTakeaway>
      AI, ML-стартапы должны начинать корпоративную продажу с задачи бизнеса, данных и измеримого эффекта.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide18AIML;
