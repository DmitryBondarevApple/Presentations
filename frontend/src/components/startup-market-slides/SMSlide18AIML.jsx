import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide18AIML = () => (
  <SMSlideContainer number={19} label="Технологический домен">
    <SMKicker>AI/ML: технологический домен, а не обычная отрасль</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">AI/ML: технологический домен, а не обычная отрасль</SMTitle>
    <SMP>
      AI/ML лидирует по спросу со стороны инвесторов, но слабее выглядит в корпоративной шкале как
      самостоятельная категория. Причина в том, что корпоративный заказчик покупает не AI/ML как технологию,
      а прикладной результат:
    </SMP>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 max-w-5xl mb-3">
      <div>
        <SMLi>Снижение затрат;</SMLi>
        <SMLi>Ускорение процесса;</SMLi>
      </div>
      <div>
        <SMLi>Повышение точности;</SMLi>
        <SMLi>Автоматизацию труда;</SMLi>
      </div>
      <div>
        <SMLi>Безопасность;</SMLi>
        <SMLi>Аналитику;</SMLi>
      </div>
      <div>
        <SMLi>Рост выручки.</SMLi>
      </div>
    </div>
    <SMP className="mb-0">
      Поэтому AI/ML нужно анализировать с учётом отраслей применения. Один AI-стартап может быть частью
      Enterprise Solution, другой — промышленной автоматизацией, третий — медицинской диагностикой, четвёртый —
      инструментом для ритейла, строительства, энергетики или безопасности. Для отчёта это означает, что AI/ML
      является не только отраслевой строкой рейтинга, но и сквозным технологическим доменом.
    </SMP>
  </SMSlideContainer>
);
export default SMSlide18AIML;
