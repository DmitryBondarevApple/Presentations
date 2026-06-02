import { SMSlideContainer, SMKicker, SMTitle, SMP, SMCard, SMCardTitle, SMTakeaway, SM, FONTS } from "./SMSlideContainer";

const Step = ({ n, title, text, accent }) => (
  <SMCard accent={accent}>
    <div className="flex items-baseline gap-2.5 mb-1.5">
      <span className="font-bold text-xl md:text-2xl leading-none" style={{ color: accent, fontFamily: FONTS.DISP }}>{n}</span>
      <SMCardTitle className="!mb-0">{title}</SMCardTitle>
    </div>
    <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>{text}</p>
  </SMCard>
);

const SMSlide23RecInvestors = () => (
  <SMSlideContainer number={23} label="Рекомендации · Инвесторы">
    <SMKicker>Рекомендации для инвесторов</SMKicker>
    <SMTitle>Общий рейтинг — только первый фильтр</SMTitle>
    <SMP>Инвесторам следует использовать общий рейтинг только как первый фильтр. Далее нужны три проверочных шага:</SMP>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <Step n="1" title="Рыночный фильтр" text="есть ли у направления достаточный спрос" accent={SM.navy} />
      <Step n="2" title="Фильтр зрелости" text="готов ли стартап к сделке" accent={SM.green} />
      <Step n="3" title="Фильтр выхода" text="как инвестор вернёт капитал" accent={SM.terra} />
    </div>
    <SMTakeaway>
      Особое внимание стоит уделять корпоративно-стратегическим сегментам: Cybersecurity, Industrial,
      Manufacturing, Energy, CleanTech и части Enterprise SaaS.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide23RecInvestors;
