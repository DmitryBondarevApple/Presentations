import { NPSlideContainer } from './NPSlideContainer';

const NPSlide13Growth = () => (
  <NPSlideContainer number={13} label="Механики продвижения">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-growth-title">
      Встроенные механики <span className="text-accent">продвижения</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Платформа растёт вместе с пользователями — через реферальные программы, партнёрскую сеть и контент-маркетинг.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-6">
      {[
        { title: "Промо-коды", desc: "Гибкая система выдачи промо-кодов для привлечения новых пользователей и активации существующих." },
        { title: "Реферальная программа", desc: "Двусторонняя реферальная программа — бонусы и приглашающему, и приглашённому." },
        { title: "Revenue Share аффилиат", desc: "Партнёрская программа с личным кабинетом партнёра и возможностью контрольной закупки. Прозрачное отчисление от выручки." },
        { title: "SEO и контент-маркетинг", desc: "Системное продвижение через поисковую оптимизацию и контент-стратегию." },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8" data-testid={`np-growth-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-1 md:mb-3">{item.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide13Growth;
