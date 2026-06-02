import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SM } from "./SMSlideContainer";

const SMSlide07Integral = () => (
  <SMSlideContainer number={7} label="Интегральный показатель">
    <SMKicker>Лидеры по интегральному показателю</SMKicker>
    <SMTitle>Лидеры по интегральному показателю</SMTitle>
    <SMSplit src="VIS-02.svg" alt="Топ-10 направлений по интегральному показателю спроса">
      <SMP>
        По интегральному показателю лидируют направления, где одновременно присутствуют значимое число
        стартапов, сильные рыночные сигналы, релевантные инвесторы и корпоративные заказчики.
      </SMP>
      <SMP className="mb-0">
        Enterprise SaaS выступает наиболее сбалансированным направлением, поскольку сочетает крупную базу
        стартапов, интерес инвесторов и высокий корпоративный спрос.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide07Integral;
