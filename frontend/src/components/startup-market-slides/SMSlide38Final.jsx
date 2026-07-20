import { SM, FONTS, SMDownloadCTA } from "./SMSlideContainer";

const SMSlide38Final = () => (
  <div className="w-full h-full flex flex-col relative px-6 sm:px-10 md:px-16 lg:px-24 py-5 md:py-8"
    style={{ backgroundColor: SM.bg, color: SM.ink, fontFamily: FONTS.TEXT }} data-testid="sm-slide-39">
    <div className="flex items-center justify-between shrink-0">
      <span className="text-[10px] md:text-xs tracking-[0.26em] uppercase font-semibold" style={{ color: SM.muted }}>
        Финальный вывод
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.15em]" style={{ color: SM.muted, fontFamily: FONTS.DISP }}>39 / 39</span>
    </div>

    <div className="flex-1 flex flex-col justify-start min-h-0 max-w-5xl pt-6 md:pt-10">
      <div className="flex items-end gap-2 mb-5 md:mb-7">
        <span className="w-2.5 h-5 md:h-7 rounded-sm" style={{ backgroundColor: SM.navy }} />
        <span className="w-2.5 h-8 md:h-11 rounded-sm" style={{ backgroundColor: SM.green }} />
        <span className="w-2.5 h-11 md:h-14 rounded-sm" style={{ backgroundColor: SM.terra }} />
      </div>
      <p className="font-bold leading-[1.18] text-xl sm:text-2xl md:text-3xl lg:text-[2.1rem]"
        style={{ color: SM.ink, fontFamily: FONTS.DISP, letterSpacing: "-0.01em" }}>
        На российском рынке выигрывают не просто стартапы из популярных направлений, а компании, которые могут
        доказать зрелость, пройти проверку конкретного источника спроса и показать реалистичный путь
        к коммерциализации, росту и выходу.
      </p>
      <div className="mt-6 md:mt-8 rounded-md p-4 md:p-5" style={{ backgroundColor: SM.panel, borderLeft: `3px solid ${SM.navy}` }}>
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: SM.navy }}>Главное практическое следствие</span>
        <p className="mt-1.5 text-sm md:text-lg leading-relaxed" style={{ color: SM.body }}>
          Рынок нужно анализировать не как единый рейтинг отраслей, а как сочетание трёх видов спроса —
          со стороны инвесторов, корпораций и институтов развития.
        </p>
      </div>
    </div>

    <div className="shrink-0 mb-4 md:mb-5">
      <SMDownloadCTA className="max-w-2xl" />
    </div>

    <div className="shrink-0 flex items-center justify-between pt-4 md:pt-5" style={{ borderTop: `1px solid ${SM.line}` }}>
      <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: SM.muted }}>
        Hop.Agency <span style={{ color: SM.line }}>×</span> Startup Drive
      </span>
      <span className="text-[11px] md:text-xs" style={{ color: SM.muted }}>hop.agency · startupdrive.ru</span>
    </div>
  </div>
);
export default SMSlide38Final;
