import { SMSlideContainer, SMKicker, SMTitle, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide18AIML = () => (
  <SMSlideContainer number={18} label="Технологический домен">
    <SMKicker>AI, ML: домен, а не обычная отрасль</SMKicker>
    <SMTitle>Корпорация покупает прикладной результат</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-5" style={{ color: SM.body }}>
      AI, ML лидирует по спросу инвесторов, но слабее как самостоятельная корпоративная категория — заказчик
      покупает не технологию, а измеримый эффект.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-2">
      <div>
        <SMLi>Снижение затрат</SMLi>
        <SMLi>Ускорение процесса</SMLi>
        <SMLi>Повышение точности</SMLi>
        <SMLi>Автоматизация ручного труда</SMLi>
      </div>
      <div>
        <SMLi>Безопасность</SMLi>
        <SMLi>Аналитика</SMLi>
        <SMLi>Рост выручки</SMLi>
      </div>
    </div>
    <SMTakeaway>
      AI, ML-стартапы должны начинать корпоративную продажу с задачи бизнеса, данных и измеримого эффекта.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide18AIML;
