import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SM } from "./SMSlideContainer";

const SMSlide08Investors = () => (
  <SMSlideContainer number={8} label="Спрос инвесторов">
    <SMKicker color={SM.green}>Спрос со стороны инвесторов</SMKicker>
    <SMTitle>Спрос со стороны инвесторов</SMTitle>
    <SMSplit src="VIS-03.svg" alt="Топ-10 направлений по спросу со стороны инвесторов">
      <SMP>
        В инвесторской шкале лидирует AI, ML. Это технологический домен с максимальной концентрацией интереса
        со стороны инвесторов.
      </SMP>
      <SMP className="mb-0">
        <span className="font-bold" style={{ color: SM.green }}>Главный вывод:</span> высокий интерес инвесторов
        к направлению не означает автоматическую привлекательность каждого стартапа. Для инвестора важны стадия,
        рынок, команда, traction, юридическая структура и сценарий выхода.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide08Investors;
