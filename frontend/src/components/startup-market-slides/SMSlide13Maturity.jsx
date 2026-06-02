import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SM } from "./SMSlideContainer";

const SMSlide13Maturity = () => (
  <SMSlideContainer number={13} label="Общий тренд">
    <SMKicker>Общий тренд: от интереса к теме к проверке зрелости</SMKicker>
    <SMTitle>От интереса к теме — к проверке зрелости</SMTitle>
    <SMP>
      Идея или сырой MVP редко являются достаточным основанием для финансирования, пилота или стратегического
      интереса. Участники рынка всё чаще требуют доказательств зрелости:
    </SMP>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl">
      <div>
        <SMLi>Работающий продукт;</SMLi>
        <SMLi>Клиенты и выручка;</SMLi>
        <SMLi>Пилот или внедрение;</SMLi>
        <SMLi>Оформленные права на технологию;</SMLi>
      </div>
      <div>
        <SMLi>Готовность к масштабированию;</SMLi>
        <SMLi>Понятная экономика;</SMLi>
        <SMLi>Команда, способная пройти длинный цикл продаж или финансирования.</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide13Maturity;
