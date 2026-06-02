import { SMSlideContainer, SMKicker, SMTitle, SMP, SMStat, SM } from "./SMSlideContainer";

const SMSlide03Method = () => (
  <SMSlideContainer number={3} label="Методология">
    <SMKicker>Методологическая база</SMKicker>
    <SMTitle>Исследование объединяет количественный и качественный анализ</SMTitle>
    <SMP>
      Количественная часть построена на анализе 4 445 стартапов, дедуплицированных из 8 524 исходных записей.
      По стартапам зафиксировано 2 944 сигнала интереса, по 1 571 стартапу рассчитаны скоринговые показатели.
    </SMP>
    <SMP>
      Для анализа спроса использованы данные о 1 820 инвесторах, 244 корпорациях, отраслевых интересах
      инвесторов, корпоративных потребностях и технологических запросах.
    </SMP>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 md:gap-3 my-2 md:my-3">
      <SMStat value="4 445" label="стартапов" accent={SM.navy} />
      <SMStat value="2 944" label="сигнала интереса" accent={SM.navy} />
      <SMStat value="1 820" label="инвесторов" accent={SM.green} />
      <SMStat value="12" label="экспертных интервью" accent={SM.terra} />
    </div>
    <SMP className="mb-0">
      Качественная часть основана на 12 экспертных интервью с фондами, корпорациями, институтами развития
      и операторами отраслевых программ.
    </SMP>
  </SMSlideContainer>
);
export default SMSlide03Method;
