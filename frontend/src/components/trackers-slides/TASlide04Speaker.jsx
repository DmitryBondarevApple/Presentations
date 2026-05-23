import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide04Speaker = () => (
  <TASlideContainer number={4} label="Спикер">
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
      <div className="flex-1">
        <TAH>Практическая позиция спикера</TAH>
        <div>
          <TALi>Серийный предприниматель, более 10 компаний</TALi>
          <TALi>Опыт привлечения инвестиций</TALi>
          <TALi>Опыт бизнес-ангела</TALi>
          <TALi>Опыт работы с фондами, корпорациями и стартапами</TALi>
          <TALi>Работа со стартапами с разных сторон: основатель, инвестор, борд, консультант</TALi>
        </div>
      </div>
      <div className="shrink-0">
        <img src={`${process.env.PUBLIC_URL || ''}/images/trackers/speaker.png`} alt="Дмитрий Бондарев"
          className="w-32 h-32 md:w-44 md:h-44 rounded-xl object-cover" style={{ border: "1px solid #e5e5e5" }} />
        <p className="font-body text-sm md:text-base mt-3 text-center" style={{ color: "#3f3f46" }}>Дмитрий Бондарев</p>
      </div>
    </div>
  </TASlideContainer>
);
export default TASlide04Speaker;
