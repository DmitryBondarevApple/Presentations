import { FCSlideContainer } from './FCSlideContainer';

const offers = [
  { num: "01", title: "Бонус к стартовому пакету", desc: "Франчайзи получает серию вводных AI-сессий в первые месяцы после запуска точки" },
  { num: "02", title: "Модуль для действующей сети", desc: "Для действующих партнёров — как способ поднять продажи, дисциплину CRM и скорость маркетинга" },
  { num: "03", title: "Корпоративный формат для УК", desc: "Отдельный поток для команды франчайзера, кураторов и сильных партнёров сети" },
];

const programItems = [
  "Live-сессии с экспертами",
  "Шаблоны промптов",
  "Чек-листы",
  "Разбор реальных переговоров и звонков",
  "Домашние задания",
  "Материалы для масштабирования",
];

const FCOfferSlide = () => {
  return (
    <FCSlideContainer number={8} label="Предложение">
      <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2" data-testid="fc-offer-title">
        Предложение <span className="text-accent">для франчайзеров</span>
      </h2>
      <p className="font-body text-lg md:text-xl text-muted-foreground mb-8">
        Важен не только контент, но и способ монетизации и внедрения в сеть
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-6">
        {offers.map((o, i) => (
          <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-6 md:p-8" data-testid={`fc-offer-${i}`}>
            <span className="inline-block px-3 py-1.5 rounded bg-accent/10 text-accent text-sm font-bold tracking-wider mb-4">
              {o.num}
            </span>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-3">{o.title}</h3>
            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed">{o.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg border border-border p-5">
        <p className="font-heading text-base md:text-lg font-semibold text-foreground mb-3">
          Что входит в состав программы:
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-3">
          {programItems.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
              <span className="font-body text-base md:text-lg text-foreground/80">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </FCSlideContainer>
  );
};

export default FCOfferSlide;
