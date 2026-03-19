import { FCSlideContainer } from './FCSlideContainer';

const items = [
  "Как разбирать запись встречи, звонка или интервью и получать структурированную выжимку",
  "Как превращать содержание разговора в follow-up, протокол, карточку для CRM и черновик КП",
  "Как собирать единую базу переговоров для последующей AI-обработки внутри сети",
  "Как сократить рутину руководителя точки, продавца или партнёра после каждого контакта",
];

const FCNoteallSlide = () => {
  return (
    <FCSlideContainer number={5} label="Блок 1 · Noteall">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <span className="inline-block px-2.5 py-1 rounded bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase mb-3">
            БЛОК 1
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid="fc-noteall-title">
            Noteall
          </h2>
          <p className="font-body text-sm text-accent mb-4">
            Разговор превращается в артефакт
          </p>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mb-5">
            Научить франчайзи не терять ценность после встреч и переговоров.
            Одна встреча должна давать не хаотичные записи, а готовые действия
            и материалы для следующего шага продажи.
          </p>
          <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4">
            <p className="font-heading text-xs font-semibold text-foreground mb-1">Ключевой тезис</p>
            <p className="font-body text-xs text-foreground/80">
              Одна встреча = готовые действия и материалы для следующего шага продажи
            </p>
          </div>
        </div>

        <div className="flex-1">
          <p className="font-heading text-sm font-semibold text-foreground mb-4">
            Что показываем на мастер-классе
          </p>
          <div className="space-y-4">
            {items.map((t, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="font-heading text-sm font-bold text-accent w-6 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-xs text-foreground/80 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FCSlideContainer>
  );
};

export default FCNoteallSlide;
