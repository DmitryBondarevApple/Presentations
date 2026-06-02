import { SMSlideContainer, SMKicker, SMTitle, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide17CorpExit = () => (
  <SMSlideContainer number={17} label="Сценарий коммерциализации">
    <SMKicker color={SM.terra}>Корпоративный выход как отдельный сценарий</SMKicker>
    <SMTitle>Не только венчурный капитал</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-5" style={{ color: SM.body }}>
      Для части российских стартапов корпоративный выход становится самостоятельным путём коммерциализации.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-2">
      <div>
        <SMLi accent={SM.terra}>Коммерческий договор</SMLi>
        <SMLi accent={SM.terra}>Масштабирование внутри группы</SMLi>
        <SMLi accent={SM.terra}>Стратегическое партнёрство</SMLi>
      </div>
      <div>
        <SMLi accent={SM.terra}>CVC-инвестиция</SMLi>
        <SMLi accent={SM.terra}>Покупка технологии или команды</SMLi>
        <SMLi accent={SM.terra}>M&A со стороны отраслевого игрока</SMLi>
      </div>
    </div>
    <SMTakeaway accent={SM.terra}>
      В ряде направлений финансовый инвестор не является единственным или главным источником спроса.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide17CorpExit;
