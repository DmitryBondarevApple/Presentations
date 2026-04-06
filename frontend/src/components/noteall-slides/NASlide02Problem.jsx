import { NASlideContainer } from './NASlideContainer';

const NASlide02Problem = () => (
  <NASlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="na-problem-title">
      Информация <span className="text-accent">не превращается в данные</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed max-w-4xl">
      Команды живут в потоке созвонов, интервью, вебинаров и документов. Ценная информация распределена по десяткам форматов, а ручная обработка занимает часы. Бизнесу нужен не сырой контент, а готовый результат.
    </p>
    <div className="flex flex-col sm:flex-row gap-3 md:gap-5 mb-4 md:mb-6">
      <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6">
        <span className="font-heading text-3xl md:text-5xl font-bold text-accent">78%</span>
        <p className="font-body text-xs md:text-base text-foreground/80 mt-2 leading-snug">сотрудников говорят, что перегрузка встречами мешает основной работе</p>
        <p className="font-body text-[10px] md:text-xs text-muted-foreground/50 mt-2">Atlassian</p>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6">
        <span className="font-heading text-3xl md:text-5xl font-bold text-accent">275</span>
        <p className="font-body text-xs md:text-base text-foreground/80 mt-2 leading-snug">прерываний в день — встречами, письмами или чатами. В среднем раз в 2 минуты</p>
        <p className="font-body text-[10px] md:text-xs text-muted-foreground/50 mt-2">Microsoft, 2025</p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
      <p className="font-body text-sm md:text-lg text-foreground/80 leading-relaxed">
        <span className="font-semibold text-foreground">Суть проблемы: </span>
        информация в аудио и видео не превращается в данные, доступные для использования. Бизнес теряет контекст, решения и задачи.
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide02Problem;
