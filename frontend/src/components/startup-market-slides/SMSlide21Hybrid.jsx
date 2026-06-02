import { SMSlideContainer, SMKicker, SMTitle, SMCard, SMCardTitle, SMLi, SM } from "./SMSlideContainer";

const SMSlide21Hybrid = () => (
  <SMSlideContainer number={21} label="Гибридные направления">
    <SMKicker color={SM.green}>HealthTech, MedTech и EdTech</SMKicker>
    <SMTitle>Интерес инвесторов, корпораций и институтов</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-1">
      <SMCard accent={SM.green}>
        <SMCardTitle>HealthTech, MedTech</SMCardTitle>
        <SMLi accent={SM.green}>Регуляторика и доказательная база</SMLi>
        <SMLi accent={SM.green}>Клиническая или технологическая проверка</SMLi>
        <SMLi accent={SM.green}>Права на технологию</SMLi>
        <SMLi accent={SM.green}>Доступ к медицинской инфраструктуре</SMLi>
      </SMCard>
      <SMCard accent={SM.navy}>
        <SMCardTitle>EdTech</SMCardTitle>
        <SMLi>Не сводится к потребительскому онлайн-образованию</SMLi>
        <SMLi>Корпоративное обучение и HR</SMLi>
        <SMLi>Переподготовка и развитие персонала</SMLi>
      </SMCard>
    </div>
  </SMSlideContainer>
);
export default SMSlide21Hybrid;
