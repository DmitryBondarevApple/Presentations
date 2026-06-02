import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide17CorpExit = () => (
  <SMSlideContainer number={17} label="Сценарий коммерциализации">
    <SMKicker color={SM.terra}>Корпоративный выход как отдельный сценарий</SMKicker>
    <SMTitle>Корпоративный выход как отдельный сценарий</SMTitle>
    <SMP>
      Для части российских стартапов корпоративный выход становится самостоятельным сценарием коммерциализации.
      Он может включать:
    </SMP>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl mb-1">
      <div>
        <SMLi accent={SM.terra}>Коммерческий договор;</SMLi>
        <SMLi accent={SM.terra}>Масштабирование внутри группы;</SMLi>
        <SMLi accent={SM.terra}>Стратегическое партнёрство;</SMLi>
      </div>
      <div>
        <SMLi accent={SM.terra}>CVC-инвестицию;</SMLi>
        <SMLi accent={SM.terra}>Покупку технологии или команды;</SMLi>
        <SMLi accent={SM.terra}>M&A со стороны отраслевого игрока.</SMLi>
      </div>
    </div>
    <SMTakeaway accent={SM.terra}>
      Поэтому в ряде направлений финансовый инвестор не является единственным или главным источником спроса.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide17CorpExit;
