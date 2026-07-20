import { SMSlideContainer, SMTitle, SM, FONTS } from "./SMSlideContainer";

const IMG = process.env.PUBLIC_URL || "";
const TEAM = `${IMG}/images/startup-market/team`;

const Member = ({ photo, initials, name, role, accent = SM.navy }) => (
  <div className="flex items-center gap-4 md:gap-5" data-testid={`sm-team-member-${initials}`}>
    {photo ? (
      <img src={`${TEAM}/${photo}`} alt={name}
        className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full object-cover object-top shrink-0"
        style={{ border: `2px solid ${SM.line}` }} />
    ) : (
      <span className="w-[70px] h-[70px] md:w-[85px] md:h-[85px] rounded-full shrink-0 flex items-center justify-center font-bold text-lg md:text-xl"
        style={{ backgroundColor: SM.navySoft, color: accent, fontFamily: FONTS.DISP, border: `2px solid ${SM.line}` }}>
        {initials}
      </span>
    )}
    <div className="min-w-0">
      <div className="text-base md:text-[1.3rem] font-bold leading-tight" style={{ color: SM.ink, fontFamily: FONTS.DISP }}>{name}</div>
      <div className="text-[14px] md:text-[16px] leading-snug mt-0.5" style={{ color: SM.muted }}>{role}</div>
    </div>
  </div>
);

const GroupHeader = ({ children, accent }) => (
  <div className="flex items-center gap-2.5 mb-4 md:mb-5">
    <span className="w-1.5 h-8 md:h-9 rounded-sm" style={{ backgroundColor: accent }} />
    <span className="text-base md:text-xl font-bold tracking-tight" style={{ color: SM.ink, fontFamily: FONTS.DISP }}>{children}</span>
  </div>
);

const SMSlideTeam = () => (
  <SMSlideContainer number={2} label="Рабочая группа исследования">
    <SMTitle className="!mb-5 md:!mb-8">Рабочая группа исследования</SMTitle>

    <div className="flex-1 min-h-0 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      {/* Газпром нефть | Startup Drive */}
      <div>
        <GroupHeader accent={SM.terra}>Газпромнефть&nbsp;<span style={{ color: SM.line }}>|</span>&nbsp;Startup Drive</GroupHeader>
        <div className="flex flex-col gap-4 md:gap-5">
          <Member photo="onishchenko.jpg" initials="МО" name="Максим Онищенко"
            role="Руководитель корпоративного акселератора StartupDrive" accent={SM.terra} />
          <Member photo="kateneva.jpg" initials="КК" name="Кристина Катенева" role="Менеджер по масштабированию активов" accent={SM.terra} />
          <Member photo="kopytova.jpg" initials="ЕК" name="Елизавета Копытова" role="Дизайнер" accent={SM.terra} />
        </div>
      </div>

      {/* Hop.Agency */}
      <div>
        <GroupHeader accent={SM.navy}>Команда Hop.Agency</GroupHeader>
        <div className="flex flex-col gap-3.5 md:gap-4">
          <Member photo="bondarev.jpg" initials="ДБ" name="Дмитрий Бондарев" role="Руководитель проекта исследования" />
          <Member photo="tyrkba-v3.jpg" initials="ХТ" name="Ханифа Тыркба" role="Аналитик, выпускающий редактор" />
          <Member photo="starostina.jpg" initials="НС" name="Наталья Старостина" role="Аналитик-интервьюер" />
          <Member photo="bondarenko.jpg" initials="СБ" name="Сергей Бондаренко" role="Аналитик-интервьюер" />
          <Member photo="bataeva.jpg" initials="ЕБ" name="Екатерина Батаева" role="Координатор проекта" />
        </div>
      </div>
    </div>
  </SMSlideContainer>
);

export default SMSlideTeam;
