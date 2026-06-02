import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SMDefn, SM } from "./SMSlideContainer";

const SMSlide19Typology = () => (
  <SMSlideContainer number={19} label="Типология">
    <SMKicker>Типология отраслевых направлений</SMKicker>
    <SMTitle>Типология отраслевых направлений</SMTitle>
    <SMSplit src="VIS-08.svg" alt="Типология отраслевых направлений" wide>
      <SMP>По результатам исследования направления можно разделить на несколько групп.</SMP>
      <SMDefn label="Универсальные лидеры:" accent={SM.navy}>Enterprise SaaS, HealthTech, MedTech, EdTech.</SMDefn>
      <SMDefn label="Технологические домены:" accent={SM.navy}>AI, ML.</SMDefn>
      <SMDefn label="Корпоративно-стратегические сегменты:" accent={SM.terra}>Cybersecurity, Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech.</SMDefn>
      <SMDefn label="Зрелые конкурентные рынки:" accent={SM.green}>FinTech, E-commerce, RetailTech.</SMDefn>
      <SMDefn label="Специализированные технологические направления:" accent={SM.muted}>Biotech, Pharma, Materials, Chemistry, Robotics, Drones.</SMDefn>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide19Typology;
