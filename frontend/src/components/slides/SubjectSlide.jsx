import { SlideContainer } from "./SlideContainer";
import { Package, Search, Rocket } from "lucide-react";

const areas = [
  {
    icon: Package,
    title: "Упаковка продукта",
    subtitle: "для внешнего рынка",
    desc: "Позиционирование, целевая аудитория, ценность, коммерческие материалы"
  },
  {
    icon: Search,
    title: "Проверка спроса",
    subtitle: "в контролируемом формате",
    desc: "Короткие циклы валидации на заранее согласованных сегментах"
  },
  {
    icon: Rocket,
    title: "Маршрутизация",
    subtitle: "в коммерческий запуск",
    desc: "План пилотов, критерии готовности, поддержка продаж и партнёрского запуска"
  }
];

const SubjectSlide = () => (
  <SlideContainer number={3} label="Предмет предложения">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 md:mb-14">
      Три фокуса <span className="text-accent">сотрудничества</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
      {areas.map((area, i) => (
        <div
          key={i}
          className="animate-item bg-card rounded-xl p-6 md:p-8 border border-border/50 flex flex-col"
          style={{ animationDelay: `${(i + 2) * 0.1}s` }}
        >
          <area.icon className="h-9 w-9 text-accent mb-5" strokeWidth={1.5} />
          <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-1">
            {area.title}
          </h3>
          <p className="font-heading text-sm text-accent/80 mb-4">{area.subtitle}</p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mt-auto">
            {area.desc}
          </p>
        </div>
      ))}
    </div>
  </SlideContainer>
);

export default SubjectSlide;
