import { SMSlideContainer, SMKicker, SMTitle, SMLi, SM, FONTS } from "./SMSlideContainer";

const Pos = ({ rank, label }) => (
  <div className="rounded-md px-3 py-2.5 flex-1" style={{ backgroundColor: SM.navySoft }}>
    <div className="font-bold text-xl md:text-2xl leading-none" style={{ color: SM.navy, fontFamily: FONTS.DISP }}>{rank}</div>
    <div className="text-[10px] md:text-[11px] uppercase tracking-wide mt-1" style={{ color: SM.muted }}>{label}</div>
  </div>
);

const SMSlide20EnterpriseSaaS = () => (
  <SMSlideContainer number={20} label="Универсальный лидер">
    <SMKicker>Enterprise SaaS</SMKicker>
    <SMTitle>Прямая применимость корпоративного ПО</SMTitle>
    <div className="flex gap-2.5 md:gap-3 max-w-2xl mb-4 md:mb-6">
      <Pos rank="1" label="интегральный" />
      <Pos rank="3" label="инвесторы" />
      <Pos rank="1" label="корпорации" />
    </div>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-3 md:mb-4" style={{ color: SM.body }}>
      Сила направления — в платформах, автоматизации, API, MDM, аналитике, интеграциях и отраслевых цифровых решениях.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 max-w-4xl">
      <div>
        <SMLi>Безопасность и интеграции</SMLi>
        <SMLi>Экономический эффект</SMLi>
      </div>
      <div>
        <SMLi>Поддержка пользователей</SMLi>
        <SMLi>Способность пройти длинный цикл корпоративных продаж</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide20EnterpriseSaaS;
