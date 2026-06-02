import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SMDefn, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide19Typology = () => (
  <SMSlideContainer number={19} label="Типология">
    <SMKicker>Типология отраслевых направлений</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Типология отраслевых направлений</SMTitle>
    <SMSplit src="VIS-08.svg" alt="Типология отраслевых направлений" wide>
      <SMP className="!mb-2">По результатам исследования направления можно разделить на несколько групп.</SMP>
      <SMDefn label="Универсальные лидеры:" accent={SM.navy}>Enterprise SaaS, HealthTech, MedTech, EdTech.</SMDefn>
      <SMDefn label="Технологические домены:" accent={SM.navy}>AI, ML.</SMDefn>
      <SMDefn label="Корпоративно-стратегические:" accent={SM.terra}>Cybersecurity, Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech.</SMDefn>
      <SMDefn label="Зрелые конкурентные рынки:" accent={SM.green}>FinTech, E-commerce, RetailTech.</SMDefn>
      <SMDefn label="Специализированные технологические:" accent={SM.muted}>Biotech, Pharma, Materials, Chemistry, Robotics, Drones.</SMDefn>
    </SMSplit>
    <SMTakeaway>
      Рынок нельзя описать одним списком отраслей. Одно и то же направление может выглядеть средним в интегральном
      рейтинге, но быть сильным в корпоративной шкале. Обратная ситуация также возможна: направление может быть
      очень сильным для инвесторов, но слабее как самостоятельная зона корпоративных закупок.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide19Typology;
