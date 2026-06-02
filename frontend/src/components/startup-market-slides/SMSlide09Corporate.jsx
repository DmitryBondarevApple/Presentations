import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SM } from "./SMSlideContainer";

const SMSlide09Corporate = () => (
  <SMSlideContainer number={9} label="Корпоративный спрос">
    <SMKicker color={SM.terra}>Спрос со стороны корпоративного сектора</SMKicker>
    <SMTitle>Спрос со стороны корпоративного сектора</SMTitle>
    <SMSplit src="VIS-04.svg" alt="Топ-10 направлений по корпоративному спросу">
      <SMP>
        Корпоративная шкала показывает, где выше вероятность прикладного спроса: пилотов, внедрений, закупок
        и стратегических сделок.
      </SMP>
      <SMP className="mb-0">
        <span className="font-bold" style={{ color: SM.terra }}>Главный вывод:</span> корпорации покупают
        не технологию как таковую, а решение конкретной бизнес-задачи.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide09Corporate;
