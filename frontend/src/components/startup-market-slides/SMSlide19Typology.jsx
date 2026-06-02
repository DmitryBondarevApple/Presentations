import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide19Typology = () => (
  <SMSlideContainer number={19} label="Типология">
    <SMKicker>Типология отраслевых направлений</SMKicker>
    <SMChart src="VIS-08.svg" alt="Типология отраслевых направлений" />
    <SMTakeaway>
      Универсальные лидеры, технологические домены, корпоративно-стратегические сегменты, зрелые конкурентные
      рынки и специализированные технологические направления требуют разной логики оценки.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide19Typology;
