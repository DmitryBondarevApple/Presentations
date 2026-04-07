import { AXSlideContainer } from './AXSlideContainer';

const AXSlide12AIFirst = () => (
  <AXSlideContainer number={12} label="AI-first">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="ax-aifirst-title">
      AI-first подход: <span className="text-accent">скорость и экономия</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      AX10 уже имеет опыт запуска коммерческих сервисов с использованием нейросетевых методов разработки.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 mb-2 sm:mb-4 md:mb-8">
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8 text-center">
        <span className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-accent">5-6x</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">ниже затраты на разработку по сравнению с традиционной моделью</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-8 text-center">
        <span className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold text-accent">10x+</span>
        <p className="font-body text-xs sm:text-sm md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">быстрее сроки выхода на рынок с первой версией продукта</p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Практический опыт: </span>
        коммерческие сервисы, созданные с использованием AI-first подхода, уже работают в продакшне и обслуживают реальных клиентов.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide12AIFirst;
