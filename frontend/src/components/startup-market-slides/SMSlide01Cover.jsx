import { SM, FONTS } from "./SMSlideContainer";

const IMG = (process.env.PUBLIC_URL || "");

const SMSlide01Cover = () => (
  <div className="w-full h-full flex flex-col relative px-6 sm:px-10 md:px-16 lg:px-24 py-5 md:py-8"
    style={{ backgroundColor: SM.bg, color: SM.ink, fontFamily: FONTS.TEXT }} data-testid="sm-slide-1">
    <div className="flex items-center justify-between shrink-0">
      <span className="text-[10px] md:text-xs tracking-[0.26em] uppercase font-semibold" style={{ color: SM.muted }}>
        Hop.Agency <span style={{ color: SM.line }}>×</span> Startup Drive
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.26em] uppercase" style={{ color: SM.dim }}>
        Аналитическое исследование
      </span>
    </div>

    <div className="flex-1 flex flex-col justify-center min-h-0">
      <span className="text-xs md:text-sm tracking-[0.22em] uppercase font-bold mb-3 md:mb-5" style={{ color: SM.terra }}>
        Отчёт об исследовании рынка
      </span>
      <h1 className="font-bold leading-[1.02] text-3xl sm:text-5xl md:text-6xl lg:text-7xl"
        style={{ color: SM.ink, fontFamily: FONTS.DISP, letterSpacing: "-0.02em" }}>
        Рынок стартапов<br />в России
      </h1>
      <p className="mt-4 md:mt-6 text-base sm:text-lg md:text-2xl leading-snug max-w-3xl font-medium" style={{ color: SM.ink }}>
        Различие спроса со стороны инвесторов, корпораций и институтов развития
      </p>
      <p className="mt-3 md:mt-5 text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl" style={{ color: SM.body }}>
        Исследование показывает, что российский рынок стартапов нельзя описывать одной шкалой привлекательности.
        Для разных участников рынка важны разные признаки: инвесторы оценивают потенциал роста и возврата
        инвестиций, корпорации — применимость решения к задачам бизнеса, институты развития — технологическую
        значимость, локализацию и вклад в экономику.
      </p>
      <div className="flex items-end gap-2 mt-5 md:mt-7">
        <span className="w-2.5 h-5 md:h-7 rounded-sm" style={{ backgroundColor: SM.navy }} />
        <span className="w-2.5 h-8 md:h-11 rounded-sm" style={{ backgroundColor: SM.green }} />
        <span className="w-2.5 h-11 md:h-14 rounded-sm" style={{ backgroundColor: SM.terra }} />
      </div>
    </div>

    <div className="shrink-0 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 pt-4 md:pt-5"
      style={{ borderTop: `1px solid ${SM.line}` }}>
      <div className="flex items-center gap-3.5">
        <img src={`${IMG}/images/startup-market/speaker.png`} alt="Дмитрий Бондарев"
          className="w-11 h-11 md:w-14 md:h-14 rounded-full object-cover" style={{ border: `1px solid ${SM.line}` }} />
        <div>
          <div className="text-sm md:text-base font-bold" style={{ color: SM.ink, fontFamily: FONTS.DISP }}>Дмитрий Бондарев</div>
          <div className="text-[11px] md:text-xs leading-snug" style={{ color: SM.muted }}>
            Руководитель исследования · аналитический департамент Hop.Agency
          </div>
        </div>
      </div>
      <div className="text-[11px] md:text-xs leading-relaxed sm:text-right" style={{ color: SM.muted }}>
        <span style={{ color: SM.ink, fontWeight: 600 }}>hop.agency</span> · <span style={{ color: SM.ink, fontWeight: 600 }}>startupdrive.ru</span>
      </div>
    </div>
  </div>
);
export default SMSlide01Cover;
