import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMDefn, SM } from "./SMSlideContainer";

const SMSlide06ThreeIndicators = () => (
  <SMSlideContainer number={6} label="Показатели спроса">
    <SMKicker>Три показателя спроса</SMKicker>
    <SMTitle>Три показателя спроса</SMTitle>
    <SMSplit src="VIS-01.svg" alt="Три показателя спроса" wide>
      <SMDefn label="Интегральный показатель спроса" accent={SM.navy}>
        показывает, где одновременно сильны стартапы, инвесторы и корпоративные заказчики.
      </SMDefn>
      <SMDefn label="Показатель спроса со стороны инвесторов" accent={SM.green}>
        показывает, где выше вероятность привлечения капитала и последующих раундов.
      </SMDefn>
      <SMDefn label="Показатель спроса со стороны корпоративного сектора" accent={SM.terra}>
        показывает, где выше вероятность пилотов, внедрений, закупок, стратегических партнёрств и M&A.
      </SMDefn>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide06ThreeIndicators;
