import { SlideContainer } from "./SlideContainer";

const PricingSlide = () => (
  <SlideContainer number={13} label="Стоимость">
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
      <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-12 md:mb-16">
        Стоимость <span className="text-accent">проекта</span>
      </h2>

      {/* Old price */}
      <div className="animate-item stagger-2">
        <span className="font-heading text-xl md:text-2xl text-muted-foreground line-through decoration-accent/50">
          3 500 000 ₽
        </span>
      </div>

      {/* Discount badge */}
      <div className="animate-item stagger-3 mt-4">
        <span className="font-heading text-[11px] font-bold text-accent bg-accent/10 px-4 py-1.5 rounded-full tracking-wider">
          СКИДКА 15%
        </span>
      </div>

      {/* New price */}
      <div className="animate-item stagger-4 mt-6">
        <span className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground">
          2 975 000
          <span className="text-2xl md:text-3xl text-muted-foreground ml-2">₽</span>
        </span>
      </div>

      {/* Divider */}
      <div className="animate-item stagger-5 mt-8 w-16 h-[2px] bg-border" />

      {/* Notes */}
      <p className="animate-item stagger-6 mt-6 font-body text-sm text-muted-foreground">
        НДС не облагается (УСН)
      </p>
      <p className="animate-item stagger-7 mt-2 font-body text-xs text-muted-foreground/50">
        Предложение действительно 2 месяца
      </p>
    </div>
  </SlideContainer>
);

export default PricingSlide;
