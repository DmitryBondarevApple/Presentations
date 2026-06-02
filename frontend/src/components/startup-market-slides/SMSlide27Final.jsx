import { SM, FONTS } from "./SMSlideContainer";

const SMSlide27Final = () => (
  <div className="w-full h-full flex flex-col relative px-6 sm:px-10 md:px-16 lg:px-24 py-6 md:py-10"
    style={{ backgroundColor: SM.ink, color: "#F2EFE8", fontFamily: FONTS.TEXT }} data-testid="sm-slide-27">
    <div className="flex items-center justify-between shrink-0">
      <span className="text-[10px] md:text-xs tracking-[0.26em] uppercase font-semibold" style={{ color: "#A89F90" }}>
        Финальный вывод
      </span>
      <span className="text-[10px] md:text-xs tracking-[0.15em]" style={{ color: "#A89F90", fontFamily: FONTS.DISP }}>27 / 27</span>
    </div>

    <div className="flex-1 flex flex-col justify-center min-h-0 max-w-4xl">
      <div className="flex items-end gap-2 mb-7 md:mb-9">
        <span className="w-2.5 h-6 md:h-8 rounded-sm" style={{ backgroundColor: "#6AA0C8" }} />
        <span className="w-2.5 h-9 md:h-12 rounded-sm" style={{ backgroundColor: "#56B393" }} />
        <span className="w-2.5 h-12 md:h-16 rounded-sm" style={{ backgroundColor: "#D9914E" }} />
      </div>
      <h2 className="font-bold leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-[2.7rem]"
        style={{ color: "#F2EFE8", fontFamily: FONTS.DISP, letterSpacing: "-0.01em" }}>
        Выигрывают компании, которые могут доказать зрелость
      </h2>
      <p className="mt-5 md:mt-7 text-base sm:text-lg md:text-xl leading-relaxed" style={{ color: "#D4CFC4" }}>
        Не просто стартапы из популярных направлений, а те, кто проходит проверку конкретного источника спроса
        и показывает реалистичный путь к коммерциализации, росту и выходу.
      </p>
      <div className="mt-6 md:mt-8 rounded-md p-4 md:p-5" style={{ backgroundColor: "#2A2F37", borderLeft: "3px solid #6AA0C8" }}>
        <span className="text-[10px] md:text-[11px] font-bold tracking-[0.14em] uppercase" style={{ color: "#6AA0C8" }}>Практическое следствие</span>
        <p className="mt-1.5 text-sm md:text-base leading-snug" style={{ color: "#E7E3DA" }}>
          Рынок нужно анализировать не как единый рейтинг отраслей, а как сочетание трёх видов спроса —
          со стороны инвесторов, корпораций и институтов развития.
        </p>
      </div>
    </div>

    <div className="shrink-0 flex items-center justify-between pt-5 md:pt-6" style={{ borderTop: "1px solid #363B43" }}>
      <span className="text-[11px] md:text-xs tracking-[0.2em] uppercase font-semibold" style={{ color: "#A89F90" }}>
        Hop.Agency <span style={{ color: "#5B6470" }}>×</span> Startup Drive
      </span>
      <span className="text-[11px] md:text-xs" style={{ color: "#A89F90" }}>hop.agency · startupdrive.ru</span>
    </div>
  </div>
);
export default SMSlide27Final;
