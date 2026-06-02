import { SMSlideContainer, SMKicker, SMTitle, SMP, SM } from "./SMSlideContainer";

const SMSlide21Hybrid = () => (
  <SMSlideContainer number={21} label="Гибридные направления">
    <SMKicker color={SM.green}>HealthTech, MedTech и EdTech: гибридные направления</SMKicker>
    <SMTitle>HealthTech, MedTech и EdTech: гибридные направления</SMTitle>
    <SMP className="text-base md:text-lg">
      HealthTech, MedTech и EdTech входят в группу направлений, где сочетаются интерес инвесторов, корпоративная
      применимость и институциональная значимость.
    </SMP>
    <SMP className="text-base md:text-lg">
      HealthTech, MedTech требует специализированной оценки: регуляторики, доказательной базы, клинической
      или технологической проверки, прав на технологию и доступа к медицинской инфраструктуре.
    </SMP>
    <SMP className="text-base md:text-lg mb-0">
      EdTech нельзя сводить только к потребительскому онлайн-образованию. Значимая часть спроса связана
      с корпоративным обучением, HR, переподготовкой и развитием персонала.
    </SMP>
  </SMSlideContainer>
);
export default SMSlide21Hybrid;
