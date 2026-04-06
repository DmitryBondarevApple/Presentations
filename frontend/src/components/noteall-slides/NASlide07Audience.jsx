import { NASlideContainer } from './NASlideContainer';

const segments = [
  { tag: "Продукт", title: "Продуктовые и исследовательские команды", desc: "Превращают обсуждения и интервью в структурированные требования, приоритеты и PRD" },
  { tag: "Менеджмент", title: "Руководители и операционные команды", desc: "Протоколы встреч, решения и задачи без ручного разбора записей" },
  { tag: "Команды", title: "Организации с совместной работой", desc: "Единая среда хранения, совместные сценарии анализа, общий баланс" },
  { tag: "Аналитики", title: "Маркетологи, аналитики, студенты", desc: "Ключевые тезисы из вебинаров, подкастов, выступлений, конспекты лекций с видео-хостингов" },
];

const NASlide07Audience = () => (
  <NASlideContainer number={7} label="Для кого">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-audience-title">
      Для кого <span className="text-accent">NoteAll</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
      Профессионалы и команды, которым нужен структурированный результат из неструктурированного контента
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
      {segments.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-4 md:p-6" data-testid={`na-segment-${i}`}>
          <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider mb-2 md:mb-3">{s.tag}</span>
          <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{s.title}</h3>
          <p className="font-body text-xs md:text-base text-muted-foreground leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide07Audience;
