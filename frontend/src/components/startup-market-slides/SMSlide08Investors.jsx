import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide08Investors = () => (
  <SMSlideContainer number={8} label="Спрос инвесторов">
    <SMKicker color={SM.green}>Спрос со стороны инвесторов</SMKicker>
    <SMChart src="VIS-03.svg" alt="Топ-10 направлений по спросу со стороны инвесторов" />
    <SMTakeaway accent={SM.green}>
      Высокий интерес инвесторов к направлению не означает автоматическую привлекательность каждого стартапа:
      важны стадия, рынок, команда, traction, юридическая структура и сценарий выхода.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide08Investors;
