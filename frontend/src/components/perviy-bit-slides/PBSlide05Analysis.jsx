import { PBSlideContainer } from './PBSlideContainer';

const items = [
  "Разметка спикеров и структуризация по темам",
  "Наложение специализированных фреймворков анализа",
  "Учёт дополнительных файлов и контекста (скрипты, регламенты)",
  "Коррекция по контексту предметной области",
];

const PBSlide05Analysis = () => (
  <PBSlideContainer number={5} label="Платформа">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-analysis-title">
      Noteall — это <span className="text-accent">AI-среда для анализа</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Не просто транскрибатор, а инструмент извлечения смыслов из разговора
    </p>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <div className="flex-1 space-y-2 md:space-y-4">
        {items.map((item, i) => (
          <div key={i} className="flex items-start gap-2.5 md:gap-3">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2.5" />
            <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
      <div className="flex-1 rounded-lg overflow-hidden border border-border shadow-lg">
        <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/screenshot-scenarios.png`} alt="Сценарии анализа" className="w-full h-auto" />
      </div>
    </div>
  </PBSlideContainer>
);
export default PBSlide05Analysis;
