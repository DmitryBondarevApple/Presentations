import { AXSlideContainer } from './AXSlideContainer';

const features = [
  { title: "Интервью и транскрипты", desc: "Полный доступ к записям и текстовым расшифровкам всех проведённых интервью" },
  { title: "Summary и аналитика", desc: "Автоматические выжимки и аналитические документы по каждому этапу исследования" },
  { title: "Статус проекта", desc: "Прогресс работ, завершённые и запланированные этапы в реальном времени" },
];

const AXSlide07Transparency = () => (
  <AXSlideContainer number={7} label="Прозрачность">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-transparency-title">
      Клиент видит <span className="text-accent">весь процесс</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Проект ведётся прозрачно. Все материалы собираются в едином онлайн-дашборде (дата-руме), доступном клиенту.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      {features.map((f, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7" data-testid={`ax-transp-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-4">{f.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-2.5 sm:p-5 md:p-7">
        <span className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-accent">3 года</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">доступ к материалам исследования после завершения проекта</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-5 md:p-7">
        <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
          Это упрощает контроль хода работ, согласование промежуточных выводов и использование первичных данных на следующих этапах.
        </p>
      </div>
    </div>
  </AXSlideContainer>
);
export default AXSlide07Transparency;
