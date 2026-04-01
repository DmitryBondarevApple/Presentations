import { MBSlideContainer } from './MBSlideContainer';

const steps = [
  { num: "01", title: "Замер", desc: "Выезд на объект, анализ входной группы и витрины, фотофиксация" },
  { num: "02", title: "Концепция", desc: "Эскиз оформления в стиле вашей точки + детальная смета" },
  { num: "03", title: "Согласование", desc: "Учитываем требования УК и собственника здания" },
  { num: "04", title: "Закупка", desc: "Материалы и крепёж от проверенных поставщиков" },
  { num: "05", title: "Монтаж", desc: "Профессиональная установка, проверка подсветки и крепежа" },
  { num: "06", title: "Сдача", desc: "Уборка зоны, фотофиксация результата, приёмка" },
  { num: "07", title: "Демонтаж", desc: "Аккуратный демонтаж после окончания сезона" },
];

const MBSlide06Process = () => {
  return (
    <MBSlideContainer number={6} label="Процесс">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-process-title">
        Как мы <span className="text-accent">работаем</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        От замера до демонтажа — всё под ключ, без сюрпризов по бюджету
      </p>

      <div className="flex flex-col md:flex-row gap-1.5 md:gap-3">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 md:p-5 min-w-0" data-testid={`mb-step-${i}`}>
            <span className="font-heading text-[10px] md:text-sm font-bold text-accent/70">{step.num}</span>
            <h3 className="font-heading text-xs md:text-lg font-bold text-foreground mt-0.5 md:mt-2">{step.title}</h3>
            <p className="font-body text-[10px] md:text-sm text-muted-foreground leading-snug mt-0.5 md:mt-2">{step.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5 mt-3 md:mt-6">
        <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Сроки: </span>
          типовой монтаж — 1–3 дня. Точная дата согласуется с учётом доступности и графика работы заведения.
        </p>
      </div>
    </MBSlideContainer>
  );
};

export default MBSlide06Process;
