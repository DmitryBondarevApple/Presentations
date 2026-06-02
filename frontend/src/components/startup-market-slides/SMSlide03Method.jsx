import { SMSlideContainer, SMKicker, SMTitle, SMStat, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide03Method = () => (
  <SMSlideContainer number={3} label="Методология">
    <SMKicker>Методологическая база</SMKicker>
    <SMTitle>Количественный и качественный анализ</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-6" style={{ color: SM.body }}>
      Количественная часть построена на анализе базы стартапов и сигналов внешнего интереса.
      Качественная часть основана на серии экспертных интервью.
    </p>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      <SMStat value="4 445" label="стартапов после дедупликации" accent={SM.navy} />
      <SMStat value="8 524" label="исходных записей" accent={SM.navy} />
      <SMStat value="2 944" label="сигнала интереса" accent={SM.green} />
      <SMStat value="1 571" label="стартап со скорингом" accent={SM.green} />
      <SMStat value="1 820" label="инвесторов в анализе спроса" accent={SM.terra} />
      <SMStat value="244" label="корпорации в анализе спроса" accent={SM.terra} />
    </div>
    <SMTakeaway label="Качественная часть" accent={SM.terra}>
      12 экспертных интервью с фондами, корпорациями, институтами развития и операторами отраслевых программ
      объясняют, почему количественные шкалы расходятся.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide03Method;
