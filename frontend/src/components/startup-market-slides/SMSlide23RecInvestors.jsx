import { SMSlideContainer, SMKicker, SMTitle, SMP, SMCols, SMCard, SMCardTitle, SM, FONTS } from "./SMSlideContainer";

const Step = ({ n, title, text, accent }) => (
  <SMCard accent={accent}>
    <div className="flex items-baseline gap-2.5 mb-1">
      <span className="font-bold text-lg md:text-xl leading-none" style={{ color: accent, fontFamily: FONTS.DISP }}>{n}</span>
      <SMCardTitle className="!mb-0 !text-sm md:!text-base">{title}</SMCardTitle>
    </div>
    <p className="text-xs md:text-sm leading-snug" style={{ color: SM.body }}>{text}</p>
  </SMCard>
);

const SMSlide23RecInvestors = () => (
  <SMSlideContainer number={23} label="Рекомендации · Инвесторы">
    <SMKicker>Рекомендации для инвесторов</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Общий рейтинг — только первый фильтр</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2.5 md:gap-3 mb-3 md:mb-4">
      <Step n="1" title="Рыночный фильтр" text="есть ли у направления достаточный спрос" accent={SM.navy} />
      <Step n="2" title="Фильтр зрелости" text="готов ли стартап к сделке" accent={SM.green} />
      <Step n="3" title="Фильтр выхода" text="как инвестор вернёт капитал" accent={SM.terra} />
    </div>
    <SMCols>
      <div>
        <SMP className="mb-0">
          Инвесторам следует использовать общий рейтинг только как первый фильтр. Для поиска направлений
          с максимальной концентрацией капитального спроса важнее шкала спроса со стороны инвесторов. Наиболее
          сильные направления здесь — AI/ML, HealthTech, MedTech, Enterprise SaaS, EdTech, FinTech, Energy,
          CleanTech, E-commerce, RetailTech и Cybersecurity.
        </SMP>
      </div>
      <div>
        <SMP className="mb-0">
          При этом корпоративно-ориентированные сегменты нельзя исключать только из-за более низкой позиции
          в общей шкале. Cybersecurity, Industrial, Manufacturing, Energy, CleanTech и часть Enterprise SaaS
          могут быть привлекательны для инвестора за счёт корпоративных внедрений, стратегических сделок
          и последующего выхода к отраслевому покупателю.
        </SMP>
      </div>
    </SMCols>
  </SMSlideContainer>
);
export default SMSlide23RecInvestors;
