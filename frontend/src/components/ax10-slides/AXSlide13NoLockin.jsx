import { AXSlideContainer } from './AXSlideContainer';

const guarantees = [
  { title: "Читаемый код", desc: "Структурированный, понятный код с документацией — не «чёрный ящик»" },
  { title: "Полная документация", desc: "Техническая документация, API-описания и архитектурные решения передаются заказчику" },
  { title: "Возможность передачи", desc: "Код и документы можно передать другой команде без жёсткой привязки к исходному разработчику" },
];

const AXSlide13NoLockin = () => (
  <AXSlideContainer number={13} label="Независимость">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="ax-nolockin-title">
      AI-first <span className="text-accent">не создаёт зависимость</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Результат нейросетевой разработки — не хаотичный набор артефактов. Код можно хранить, читать, передавать и развивать дальше.
    </p>
    <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 md:gap-6 mb-2 sm:mb-4 md:mb-8">
      {guarantees.map((g, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-2.5 sm:p-5 md:p-7" data-testid={`ax-guarantee-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-xl font-bold text-foreground mb-1 sm:mb-2 md:mb-4">{g.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed">{g.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-2.5 sm:p-4 md:p-6">
      <p className="font-body text-sm sm:text-base md:text-xl text-foreground/80 leading-snug sm:leading-relaxed">
        <span className="font-semibold text-foreground">Для клиента это редкое сочетание: </span>
        высокая скорость, более низкий бюджет и свобода смены исполнителя в будущем.
      </p>
    </div>
  </AXSlideContainer>
);
export default AXSlide13NoLockin;
