import { SMSlideContainer, SMKicker, SMTitle, SMSplit, SMP, SM } from "./SMSlideContainer";

const SMSlide10Comparison = () => (
  <SMSlideContainer number={10} label="Сравнение шкал">
    <SMKicker>Что показывает сравнение трёх шкал</SMKicker>
    <SMTitle>Что показывает сравнение трёх шкал</SMTitle>
    <SMSplit src="VIS-05.svg" alt="Сравнение трёх шкал спроса по направлениям" wide>
      <SMP>Сравнение трёх шкал позволяет выделить разные типы привлекательности направлений.</SMP>
      <SMP>
        Enterprise SaaS, HealthTech, MedTech и EdTech являются гибридными направлениями, сильными и для
        инвесторов, и для корпораций.
      </SMP>
      <SMP>
        AI, ML является технологическим доменом с выраженным спросом со стороны инвесторов, но требует
        отраслевой привязки для корпоративного применения.
      </SMP>
      <SMP className="mb-0">
        Cybersecurity, Industrial, Manufacturing и часть Energy, CleanTech сильнее раскрываются через
        корпоративный спрос, пилоты, внедрения и стратегические сделки.
      </SMP>
    </SMSplit>
  </SMSlideContainer>
);
export default SMSlide10Comparison;
