import { SlideContainer } from "./SlideContainer";

const bullets = [
  "Определён трек по проверке внешнего спроса на внутренние продукты",
  "Продукты проходят масштабное внутреннее тестирование и доработку",
  "Выход во внешние продажи привязан к завершению внутреннего цикла",
  "Существует интерес к ранней проверке внешнего спроса"
];

const ContextSlide = () => (
  <SlideContainer number={2} label="Контекст">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 md:mb-10">
      Контекст и основание<br />
      <span className="text-accent">для предложения</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <p className="animate-item stagger-2 font-body text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
        Предложение подготовлено по итогам рабочей встречи команд
        Hop.Agency и ПАО «Ростелеком», на которой обсуждались
        практические форматы сотрудничества и отдельный трек по проверке
        внешнего спроса на внутренние продукты.
      </p>

      <div className="space-y-3.5">
        {bullets.map((text, i) => (
          <div
            key={i}
            className="animate-item flex items-start gap-3"
            style={{ animationDelay: `${(i + 3) * 0.08}s` }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
            <p className="font-body text-sm text-foreground/80">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </SlideContainer>
);

export default ContextSlide;
