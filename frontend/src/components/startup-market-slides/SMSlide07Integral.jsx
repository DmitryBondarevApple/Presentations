import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP } from "./SMSlideContainer";

const SMSlide07Integral = () => (
  <SMSlideContainer number={7} label="Интегральный показатель">
    <SMKicker>Лидеры по интегральному показателю</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Лидеры по интегральному показателю</SMTitle>
    <SMSplit src="VIS-02.svg" alt="Топ-10 направлений по интегральному показателю спроса" wide>
      <SMP className="!mb-2">
        Интегральный показатель отмечает направления, где одновременно есть значимое число стартапов, компании
        с сильными рыночными сигналами и релевантные инвесторы и корпоративные заказчики. Он показывает не
        единственного лидера, а зоны максимальной плотности предложения и спроса.
      </SMP>
      <SMP className="!mb-2">
        Enterprise SaaS лидирует за счёт базовой роли корпоративного ПО: крупная база стартапов, высокий интерес
        инвесторов и широкая применимость. AI/ML рядом, но это горизонтальный технологический домен, понятный
        только в привязке к отраслевым задачам. HealthTech, MedTech и EdTech — верхняя группа сбалансированных
        направлений с инвесторским, корпоративным и институциональным интересом.
      </SMP>
      <SMP className="mb-0">
        Industrial, Manufacturing, Energy, CleanTech, PropTech, ConstructionTech, FinTech, Cybersecurity
        и E-commerce, RetailTech входят в топ-10, но различаются основным сценарием: часть сильнее в корпоративном
        спросе, часть — в венчурном, часть — в смешанном. Поэтому топ-10 — стартовая карта, а не итоговый рейтинг
        привлекательности каждой компании.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide07Integral;
