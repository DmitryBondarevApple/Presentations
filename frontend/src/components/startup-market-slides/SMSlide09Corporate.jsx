import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide09Corporate = () => (
  <SMSlideContainer number={9} label="Корпоративный спрос">
    <SMKicker color={SM.terra}>Спрос со стороны корпоративного сектора</SMKicker>
    <SMChart src="VIS-04.svg" alt="Топ-10 направлений по корпоративному спросу" />
    <SMTakeaway accent={SM.terra}>
      Корпорации покупают не технологию как таковую, а решение конкретной бизнес-задачи.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide09Corporate;
