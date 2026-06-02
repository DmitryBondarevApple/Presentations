import { SMSlideContainer, SMKicker, SMTitle, SMP } from "./SMSlideContainer";

const SMSlide04Analysis = () => (
  <SMSlideContainer number={4} label="Методология">
    <SMKicker>Как проводился анализ данных</SMKicker>
    <SMTitle>Поиск и проверка публичных подтверждений интереса</SMTitle>
    <SMP className="text-base md:text-lg">
      Основой количественной части стал поиск и проверка публичных подтверждений внешнего интереса к стартапам.
    </SMP>
    <SMP className="text-base md:text-lg">
      Для каждой компании сопоставлялись юридическое название, короткое название, бренд, продукт, сайт,
      технологический домен, ИНН и отраслевые признаки.
    </SMP>
    <SMP className="text-base md:text-lg">
      В качестве сигналов учитывались инвестиции, покупки, гранты, субсидии, акселераторы, пилоты, внедрения,
      резидентство, реестры, витрины и другие подтверждённые признаки интереса.
    </SMP>
    <SMP className="text-base md:text-lg mb-0">
      После проверки данные нормализовывались по отраслям, типам сигналов, надёжности источников и уровню
      зрелости компаний.
    </SMP>
  </SMSlideContainer>
);
export default SMSlide04Analysis;
