import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SM } from "./SMSlideContainer";

const SMSlide11Cybersecurity = () => (
  <SMSlideContainer number={11} label="Кейс направления">
    <SMKicker color={SM.green}>Почему Cybersecurity выделен отдельно</SMKicker>
    <SMTitle>Почему Cybersecurity выделен отдельно</SMTitle>
    <SMSplit src="VIS-06.svg" alt="Разрыв Cybersecurity между интегральным и корпоративным рейтингом" wide>
      <SMP>
        Cybersecurity занимает 9-е место по интегральному показателю, но поднимается на 4-е место
        по корпоративной шкале и имеет высокую релевантность для корпоративного выхода.
      </SMP>
      <SMP>Это показывает, что сегмент нельзя оценивать только по общему рейтингу.</SMP>
      <SMP>
        Его значимость связана с защитой данных, инфраструктурой, локализацией, надёжностью поставщика,
        регуляторными требованиями и высокой ценой ошибки.
      </SMP>
      <SMP className="mb-0">
        Для инвесторов Cybersecurity интересен не только как венчурный рынок, но и как область возможных
        стратегических сделок.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide11Cybersecurity;
