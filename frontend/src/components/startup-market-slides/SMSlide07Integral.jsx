import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide07Integral = () => (
  <SMSlideContainer number={7} label="Интегральный показатель">
    <SMKicker>Лидеры по интегральному показателю</SMKicker>
    <SMChart src="VIS-02.svg" alt="Топ-10 направлений по интегральному показателю спроса" />
    <SMTakeaway>
      Enterprise SaaS — наиболее сбалансированное направление: сочетает крупную базу стартапов,
      интерес инвесторов и высокий корпоративный спрос.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide07Integral;
