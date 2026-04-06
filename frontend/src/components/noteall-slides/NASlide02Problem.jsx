import { NASlideContainer } from './NASlideContainer';

const NASlide02Problem = () => (
  <NASlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-lg sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="na-problem-title">
      Информация <span className="text-accent">не превращается в данные</span>
    </h2>
    <p className="font-body text-xs sm:text-sm md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Команды живут в потоке созвонов, интервью, вебинаров и документов. Ценная информация распределена по десяткам форматов, а ручная обработка занимает часы. Бизнесу нужен не сырой контент, а готовый результат.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 mb-2 sm:mb-4 md:mb-8">
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="font-heading text-2xl sm:text-4xl md:text-6xl font-bold text-accent">78%</span>
        <p className="font-body text-[10px] sm:text-xs md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">сотрудников говорят, что перегрузка встречами мешает основной работе</p>
        <p className="font-body text-[9px] sm:text-[10px] md:text-sm text-muted-foreground/50 mt-1 sm:mt-2 md:mt-3"><a href="https://www.atlassian.com/blog/workplace-woes-meetings" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">Atlassian</a></p>
      </div>
      <div className="flex-1 bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8">
        <span className="font-heading text-2xl sm:text-4xl md:text-6xl font-bold text-accent">275</span>
        <p className="font-body text-[10px] sm:text-xs md:text-lg text-foreground/80 mt-1 sm:mt-2 md:mt-4 leading-snug">прерываний в день — встречами, письмами или чатами. В среднем раз в 2 минуты</p>
        <p className="font-body text-[9px] sm:text-[10px] md:text-sm text-muted-foreground/50 mt-1 sm:mt-2 md:mt-3"><a href="https://assets-c4akfrf5b4d3f4b7.z01.azurefd.net/assets/2025/04/2025-wti-one-pager-042325-rw_68094b4da3c89.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors underline underline-offset-2">Microsoft, 2025</a></p>
      </div>
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-xs sm:text-sm md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Суть проблемы: </span>
        информация в аудио и видео не превращается в данные, доступные для использования. Бизнес теряет контекст, решения и задачи.
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide02Problem;
