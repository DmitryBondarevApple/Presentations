import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide10Comparison = () => (
  <SMSlideContainer number={10} label="Сравнение шкал">
    <SMKicker>Что показывает сравнение трёх шкал</SMKicker>
    <SMChart src="VIS-05.svg" alt="Сравнение трёх шкал спроса по направлениям" />
    <SMTakeaway>
      Enterprise SaaS, HealthTech, MedTech и EdTech — гибридные направления. AI, ML — технологический домен
      с инвесторским спросом. Cybersecurity, Industrial и часть Energy раскрываются через корпоративный спрос.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide10Comparison;
