import { NASlideContainer } from './NASlideContainer';

const segments = [
  { tag: "Продукт", title: "Продуктовые и исследовательские команды", desc: "Превращают обсуждения и интервью в структурированные требования, приоритеты и PRD" },
  { tag: "Менеджмент", title: "Руководители и операционные команды", desc: "Протоколы встреч, решения и задачи без ручного разбора записей" },
  { tag: "Команды", title: "Организации с совместной работой", desc: "Единая среда хранения, совместные сценарии анализа, общий баланс" },
  { tag: "Аналитики", title: "Маркетологи, аналитики, студенты", desc: "Ключевые тезисы из вебинаров, подкастов, выступлений, конспекты лекций с видео-хостингов" },
];

const NASlide07Audience = () => (
  <NASlideContainer number={7} label="Для кого">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-audience-title">
      Для кого <span className="text-accent">Noteall</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10">
      Профессионалы и команды, которым нужен структурированный результат из неструктурированного контента
    </p>
    <div className="grid grid-cols-2 gap-2 sm:gap-4 md:gap-8">
      {segments.map((s, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-2.5 sm:p-5 md:p-7" data-testid={`na-segment-${i}`}>
          <span className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-4 md:py-1.5 rounded bg-accent/10 text-accent text-[9px] sm:text-[10px] md:text-sm font-bold tracking-wider mb-1 sm:mb-2 md:mb-4">{s.tag}</span>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-0.5 sm:mb-1 md:mb-3">{s.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{s.desc}</p>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide07Audience;
