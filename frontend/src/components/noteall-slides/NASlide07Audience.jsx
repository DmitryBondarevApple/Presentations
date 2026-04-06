import { NASlideContainer } from './NASlideContainer';

const segments = [
  { tag: "Продукт", title: "Продуктовые и исследовательские команды", desc: "Превращают обсуждения и интервью в структурированные требования, приоритеты и PRD" },
  { tag: "Менеджмент", title: "Руководители и операционные команды", desc: "Протоколы встреч, решения и задачи без ручного разбора записей" },
  { tag: "Команды", title: "Организации с совместной работой", desc: "Единая среда хранения, совместные сценарии анализа, общий баланс" },
  { tag: "Аналитики", title: "Маркетологи, аналитики, студенты", desc: "Ключевые тезисы из вебинаров, подкастов, выступлений, конспекты лекций с видео-хостингов" },
];

const NASlide07Audience = () => (
  <NASlideContainer number={7} label="Для кого">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-audience-title">
      Для кого <span className="text-accent">NoteAll</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
      Профессионалы и команды, которым нужен структурированный результат из неструктурированного контента
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-6">
      {segments.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-5 md:p-7" data-testid={`na-segment-${i}`}>
          <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[10px] md:text-sm font-bold tracking-wider mb-2 md:mb-4">{s.tag}</span>
          <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3">{s.title}</h3>
          <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide07Audience;
