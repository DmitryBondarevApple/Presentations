import { NPSlideContainer } from './NPSlideContainer';

const NPSlide11Research = () => (
  <NPSlideContainer number={10} label="Качественные исследования">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-research-title">
      Research Module: <span className="text-accent">Customer Development</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Полноценный инструмент для качественных исследований на основе интервью — от дизайна до синтеза.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 md:gap-5">
      {[
        { title: "Фреймворки", desc: "JTBD, SPACE/7Ways, VPC — сейчас. Десятки других в ближайшем будущем. Каждый с инструкциями для AI." },
        { title: "Дэшборд проекта", desc: "Сегменты, квоты, статусы, календарь. Полный контроль хода исследования в одном месте." },
        { title: "Полевой этап", desc: "Реестр респондентов, pipeline-статусы, контроль качества интервью." },
        { title: "AI-пайплайн", desc: "Загрузка записи, транскрипт, саммари, DOCX-артефакт — автоматически." },
        { title: "Кросс-анализ", desc: "Синтез нескольких интервью в сводный аналитический документ с выводами." },
        { title: "Команда", desc: "4 роли: владелец, менеджер, участник, клиент-просмотр. Гибкое управление доступом." },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-4 md:p-6" data-testid={`np-research-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 md:mb-2">{item.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-base text-muted-foreground leading-snug sm:leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide11Research;
