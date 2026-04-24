import { PBSlideContainer } from './PBSlideContainer';

const cards = [
  { num: "01", title: "Потери", desc: "Часть проблематики клиента теряется при переходе от интервью к ТЗ" },
  { num: "02", title: "Искажения", desc: "Что-то не выявляется, что-то не фиксируется, что-то искажается при ручной обработке" },
  { num: "03", title: "Недовольство", desc: "Клиенты часто недовольны результатом доработок, потому что их не до конца поняли" },
];

const PBSlide02Problem = () => (
  <PBSlideContainer number={2} label="Проблема">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="pb-problem-title">
      Разговор с клиентом <span className="text-accent">не превращается в результат</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-3 sm:mb-5 md:mb-10 leading-relaxed max-w-4xl">
      Процесс неформализован и зависит от менеджера
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {cards.map((c, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8" data-testid={`pb-problem-${i}`}>
          <span className="font-heading text-lg md:text-2xl font-bold text-accent/30">{c.num}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mt-1 mb-1 md:mb-3">{c.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-relaxed">{c.desc}</p>
        </div>
      ))}
    </div>
  </PBSlideContainer>
);
export default PBSlide02Problem;
