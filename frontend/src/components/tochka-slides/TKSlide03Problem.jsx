import { TKSlideContainer, TKH2, TKLead, TKCard, TKCallout } from "./TKSlideContainer";

const scattered = [
  "Запись — отдельно", "Заметки — отдельно", "Задачи — отдельно",
  "Документы — отдельно", "Договорённости — в мессенджерах", "Часть деталей — только в памяти участников",
];

const TKSlide03Problem = () => (
  <TKSlideContainer number={3} label="Проблема">
    <TKH2>Большая часть ценности <span className="text-accent">теряется после встречи</span></TKH2>
    <TKLead>
      Продажи, консультации, найм, обучение, согласования, проектные встречи, разбор задач, обсуждения
      с подрядчиками. Но после встречи информация часто остаётся в разрозненном виде:
    </TKLead>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-3 mb-2 sm:mb-4 md:mb-5">
      {scattered.map((s, i) => (
        <TKCard key={i} className="flex items-center gap-1.5 md:gap-2.5" data-testid={`tk-scatter-${i}`}>
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 shrink-0" />
          <p className="font-body text-[11px] sm:text-sm md:text-[15px] text-muted-foreground leading-snug">{s}</p>
        </TKCard>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-4">
      <TKCallout title="Что происходит дальше">
        Сотрудник прослушивает запись или перечитывает транскрипт, вспоминает договорённости и переносит
        информацию в документы, CRM, списки задач или письма.
      </TKCallout>
      <TKCallout title="Главная потеря">
        Встреча уже состоялась, но её результат ещё не стал рабочим материалом.
        <span className="text-accent font-semibold"> Может стать им через 1–2 дня или никогда.</span>
      </TKCallout>
    </div>
  </TKSlideContainer>
);
export default TKSlide03Problem;
