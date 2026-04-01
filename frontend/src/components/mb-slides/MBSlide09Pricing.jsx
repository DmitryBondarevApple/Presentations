import { MBSlideContainer } from './MBSlideContainer';

const packages = [
  {
    tag: "Старт",
    title: "Концепция и смета",
    price: "от 5 000 ₽",
    items: ["Выезд на объект", "Анализ входной группы", "Эскиз концепции", "Смета материалов и работ"],
    popular: false,
  },
  {
    tag: "Базовый",
    title: "Базовое оформление",
    price: "от 15 000 ₽",
    items: ["Концепция включена", "Базовые материалы", "Монтаж и демонтаж", "Гарантия на сезон"],
    popular: false,
  },
  {
    tag: "Премиум",
    title: "Авторский дизайн",
    price: "от 35 000 ₽",
    items: ["Уникальная концепция", "Премиум материалы", "3D-визуализация", "Полное сопровождение", "Поддержка в сезон"],
    popular: true,
  },
  {
    tag: "Обновление",
    title: "Переоформление",
    price: "от 20 000 ₽",
    items: ["Демонтаж старого декора", "Новая концепция", "Обновление материалов", "Быстрые сроки"],
    popular: false,
  },
];

const MBSlide09Pricing = () => {
  return (
    <MBSlideContainer number={9} label="Стоимость">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-pricing-title">
        Прозрачные <span className="text-accent">цены</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6">
        Понятный состав работ, без скрытых платежей. Точная смета — после замера.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        {packages.map((pkg, i) => (
          <div
            key={i}
            className={`bg-card rounded-lg border p-3 md:p-6 flex flex-col ${
              pkg.popular ? 'border-accent border-2' : 'border-border'
            }`}
            data-testid={`mb-package-${i}`}
          >
            <div className="flex items-center gap-2 mb-2 md:mb-3">
              <span className="inline-block px-2 py-0.5 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider">
                {pkg.tag}
              </span>
              {pkg.popular && (
                <span className="inline-block px-2 py-0.5 rounded bg-accent text-background text-[10px] md:text-xs font-bold">
                  Хит
                </span>
              )}
            </div>
            <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-1 md:mb-2">{pkg.title}</h3>
            <span className="font-heading text-lg md:text-3xl font-bold text-accent mb-2 md:mb-4">{pkg.price}</span>
            <div className="space-y-1 md:space-y-2 flex-1">
              {pkg.items.map((item, j) => (
                <div key={j} className="flex items-start gap-1.5 md:gap-2">
                  <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                  <span className="font-body text-[10px] md:text-sm text-muted-foreground leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <p className="font-body text-[10px] md:text-sm text-muted-foreground/60 mt-2 md:mt-4 italic">
        Для объектов с 4+ входными группами — индивидуальные условия. Стоимость фиксируется в смете до начала работ.
      </p>
    </MBSlideContainer>
  );
};

export default MBSlide09Pricing;
