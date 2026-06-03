import { TKSlideContainer, TKH2, TKLead, TKCard, TKCallout } from "./TKSlideContainer";

const outputs = [
  "Черновик КП", "Оценка трудозатрат", "Протокол договорённостей",
  "Документ по фреймворкам (JTBD, MEDDIC, PPVVC, PRD Builder…)",
  "Список задач по исполнителям", "Готовый follow-up",
  "Саммари встречи для импорта в CRM", "Функциональные и технические требования",
];

const TKSlide02WhyTochka = () => (
  <TKSlideContainer number={2} label="Контекст">
    <TKH2>Почему это подходит <span className="text-accent">для Точки</span></TKH2>
    <TKLead>
      Точка развивает AI-ассистента для предпринимателей. Его задача — помогать получать практический навык,
      принимать решения и пользоваться продуктами экосистемы Точки в реальных рабочих сценариях.
      <span className="text-foreground"> Noteall может стать прикладным AI-решением:</span> предприниматель проводит
      встречу, консультацию или созвон — и сразу получает рабочий результат.
    </TKLead>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-2 sm:mb-4 md:mb-5">
      {outputs.map((o, i) => (
        <TKCard key={i} className="flex items-start gap-1.5 md:gap-2.5" data-testid={`tk-output-${i}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
          <p className="font-body text-[11px] sm:text-sm md:text-[15px] text-foreground/85 leading-snug">{o}</p>
        </TKCard>
      ))}
    </div>
    <TKCallout title="Позиционирование для клиентов Точки">
      Noteall — это не сервис анализа ВКС и не просто транскрибатор. Это AI-инструмент, который помогает
      предпринимателю быстрее переходить от разговора к действию.
    </TKCallout>
  </TKSlideContainer>
);
export default TKSlide02WhyTochka;
