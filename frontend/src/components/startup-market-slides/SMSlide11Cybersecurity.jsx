import { SMSlideContainer, SMKicker, SMChart, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide11Cybersecurity = () => (
  <SMSlideContainer number={11} label="Кейс направления">
    <SMKicker color={SM.green}>Почему Cybersecurity выделен отдельно</SMKicker>
    <SMChart src="VIS-06.svg" alt="Разрыв Cybersecurity между интегральным и корпоративным рейтингом" />
    <SMTakeaway accent={SM.green}>
      9-е место по интегральному показателю, но 4-е по корпоративной шкале. Сегмент нельзя оценивать только по
      общему рейтингу: важны защита данных, локализация, надёжность поставщика и стратегические сделки.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide11Cybersecurity;
