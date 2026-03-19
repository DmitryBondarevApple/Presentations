import { FCSlideContainer } from './FCSlideContainer';

const blocks = [
  {
    tag: "NOTEALL",
    title: "Слушать клиента",
    desc: "Разбирать встречи и документы, получать транскрипт, summary, задачи, материалы для CRM и коммерческих предложений",
    url: "noteall.ru",
  },
  {
    tag: "ECHOMIND",
    title: "Слушать продавца",
    desc: "Анализировать 100% звонков и переписок, находить потери воронки, дообучать менеджеров и повышать конверсию",
    url: "unit.echomind.ru",
  },
  {
    tag: "EMERGENT",
    title: "Собирать инструменты",
    desc: "Создавать сайты, лендинги, дэшборды и внутренние решения для сети — за часы, а не недели и месяцы",
    url: "emergent.sh",
  },
];

const FCBlocksSlide = () => {
  return (
    <FCSlideContainer number={4} label="Программа">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-2" data-testid="fc-blocks-title">
        Программа строится вокруг{' '}
        <span className="text-accent">3 практических блоков</span>
      </h2>
      <p className="font-body text-sm text-muted-foreground mb-6">
        От понимания клиента → к качеству продаж → к быстрым digital-инструментам
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-5">
        {blocks.map((b, i) => (
          <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-5" data-testid={`fc-block-${i}`}>
            <span className="inline-block px-2.5 py-1 rounded bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase mb-3">
              {b.tag}
            </span>
            <h3 className="font-heading text-base font-bold text-foreground mb-2">{b.title}</h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed mb-3">{b.desc}</p>
            <span className="font-body text-xs text-accent">{b.url}</span>
          </div>
        ))}
      </div>

      <p className="font-body text-sm text-foreground/80">
        <span className="font-semibold">Маршрут обучения: </span>
        услышать клиента, увидеть слабые места в продажах, быстро внедрить нужный инструмент в точке или по всей сети.
      </p>
    </FCSlideContainer>
  );
};

export default FCBlocksSlide;
