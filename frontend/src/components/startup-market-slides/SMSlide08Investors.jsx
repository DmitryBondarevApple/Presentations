import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SM } from "./SMSlideContainer";

const SMSlide08Investors = () => (
  <SMSlideContainer number={8} label="Спрос инвесторов">
    <SMKicker color={SM.green}>Спрос со стороны инвесторов</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Спрос со стороны инвесторов</SMTitle>
    <SMSplit src="VIS-03.svg" alt="Топ-10 направлений по спросу со стороны инвесторов" wide>
      <SMP className="!mb-2">
        Спрос со стороны инвесторов показывает концентрацию релевантного капитала вокруг направления
        и вероятность финансирования. Здесь важны число инвесторов, глубина совпадений со стартапами и наличие
        компаний, достаточно зрелых для финансирования.
      </SMP>
      <SMP className="!mb-2">
        AI/ML — явный лидер: инвесторы видят широкий потенциал роста, но это не отменяет требований к стартапу —
        нужны понятная задача, данные, устойчивое преимущество, экономический эффект и сценарий выхода.
        HealthTech, MedTech, Enterprise Solution и EdTech сильны по разным причинам: масштабируемая B2B-модель,
        медицинская и технологическая значимость, платформенный EdTech и корпоративное обучение.
      </SMP>
      <SMP className="mb-0">
        FinTech, Energy, CleanTech, E-commerce, RetailTech и Cybersecurity — в верхней части шкалы, но не
        равнозначны. FinTech и E-commerce, RetailTech конкурентны и требуют строгой проверки экономики. Energy,
        CleanTech и Cybersecurity требуют длинного цикла продаж и отраслевой экспертизы. Для инвестора отраслевой
        интерес дополняется проверкой стадии, команды, юридической структуры и сценария возврата капитала.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide08Investors;
