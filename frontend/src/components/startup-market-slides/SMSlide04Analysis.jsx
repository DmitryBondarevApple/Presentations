import { SMSlideContainer, SMKicker, SMTitle, SMCard, SMCardTitle, SMLi, SMBody, SM } from "./SMSlideContainer";

const SMSlide04Analysis = () => (
  <SMSlideContainer number={4} label="Методология">
    <SMKicker>Как проводился анализ данных</SMKicker>
    <SMTitle>Поиск и проверка публичных подтверждений интереса</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mb-3 md:mb-4">
      <SMCard accent={SM.navy}>
        <SMCardTitle>Сопоставление компании</SMCardTitle>
        <SMLi>Юридическое и короткое название, бренд</SMLi>
        <SMLi>Продукт, сайт, технологический домен</SMLi>
        <SMLi>ИНН и отраслевые признаки</SMLi>
      </SMCard>
      <SMCard accent={SM.green}>
        <SMCardTitle>Сигналы интереса</SMCardTitle>
        <SMLi accent={SM.green}>Инвестиции, покупки, гранты, субсидии</SMLi>
        <SMLi accent={SM.green}>Акселераторы, пилоты, внедрения</SMLi>
        <SMLi accent={SM.green}>Резидентство, реестры, витрины</SMLi>
      </SMCard>
    </div>
    <SMBody className="max-w-4xl">
      После проверки данные нормализовывались по отраслям, типам сигналов, надёжности источников и уровню
      зрелости компаний.
    </SMBody>
  </SMSlideContainer>
);
export default SMSlide04Analysis;
