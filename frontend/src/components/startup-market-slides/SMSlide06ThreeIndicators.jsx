import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide06ThreeIndicators = () => (
  <SMSlideContainer number={6} label="Показатели спроса">
    <SMKicker>Три показателя спроса</SMKicker>
    <SMChart src="VIS-01.svg" alt="Три показателя спроса: интегральный, инвесторский, корпоративный" />
    <SMTakeaway>
      Интегральный показатель отражает совпадение интересов, инвесторский — вероятность капитала,
      корпоративный — вероятность пилотов, внедрений, закупок, партнёрств и M&A.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide06ThreeIndicators;
