import { SMSlideContainer, SMKicker, SMTitle, SMLi, SM } from "./SMSlideContainer";

const SMSlide13Maturity = () => (
  <SMSlideContainer number={13} label="Общий тренд">
    <SMKicker>От интереса к теме — к проверке зрелости</SMKicker>
    <SMTitle>Идея или сырой MVP — редко достаточное основание</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-6" style={{ color: SM.body }}>
      Участники рынка всё чаще требуют доказательств зрелости — для финансирования, пилота или стратегического интереса.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl">
      <div>
        <SMLi>Работающий продукт</SMLi>
        <SMLi>Клиенты и выручка</SMLi>
        <SMLi>Пилот или внедрение</SMLi>
        <SMLi>Оформленные права на технологию</SMLi>
      </div>
      <div>
        <SMLi>Готовность к масштабированию</SMLi>
        <SMLi>Понятная экономика</SMLi>
        <SMLi>Команда для длинного цикла продаж или финансирования</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide13Maturity;
