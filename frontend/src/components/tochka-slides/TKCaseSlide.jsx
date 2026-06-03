import { TKSlideContainer, TKH2, TKCard, TKBullet, TKCallout } from "./TKSlideContainer";

/**
 * Reusable use-case slide (Кейс N).
 * props: number, label, title, situation, problem (string|array), does (array), benefit, products
 */
const TKCaseSlide = ({ number, label, title, situation, problem, does, benefit, products }) => (
  <TKSlideContainer number={number} label={label}>
    <TKH2 className="!mb-1.5 sm:!mb-2 md:!mb-3">{title}</TKH2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-5 items-start mb-2 sm:mb-3 md:mb-4">
      <div className="space-y-2 sm:space-y-3">
        <div>
          <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.12em] mb-0.5 sm:mb-1">Ситуация</p>
          <p className="font-body text-[11px] sm:text-sm md:text-[15px] text-foreground/85 leading-snug">{situation}</p>
        </div>
        <div>
          <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-[0.12em] mb-0.5 sm:mb-1">Проблема</p>
          {Array.isArray(problem) ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0.5 sm:gap-y-1">
              {problem.map((p, i) => <TKBullet key={i} muted>{p}</TKBullet>)}
            </div>
          ) : (
            <p className="font-body text-[11px] sm:text-sm md:text-[15px] text-muted-foreground leading-snug">{problem}</p>
          )}
        </div>
      </div>
      <TKCard accent>
        <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Что делает Noteall</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-0.5 sm:gap-y-1.5">
          {does.map((d, i) => <TKBullet key={i}>{d}</TKBullet>)}
        </div>
      </TKCard>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-5 items-stretch">
      <TKCallout title="Польза для клиента Точки">{benefit}</TKCallout>
      <div className="bg-card rounded-lg border border-border p-2.5 sm:p-4 md:p-5">
        <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-1">Связь с продуктами Точки</p>
        <p className="font-body text-xs sm:text-sm md:text-[15px] text-foreground/80 leading-snug">{products}</p>
      </div>
    </div>
  </TKSlideContainer>
);
export default TKCaseSlide;
