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
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-16 items-start lg:items-center">
        <div className="flex-1">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-2 md:mb-4">
            БЛОК 1
          </span>
          <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-1 md:mb-2" data-testid="fc-noteall-title">
            Noteall
          </h2>
          <p className="font-body text-base md:text-2xl text-accent mb-3 md:mb-5">
            Разговор превращается в артефакт
          </p>
          <p className="font-body text-sm md:text-xl text-muted-foreground leading-relaxed mb-3 md:mb-6">
            Научить франчайзи не терять ценность после встреч и переговоров.
            Одна встреча должна давать не хаотичные записи, а готовые действия
            и материалы для следующего шага продажи.
          </p>
          <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
            <p className="font-heading text-sm md:text-lg font-semibold text-foreground mb-1">Ключевой тезис</p>
            <p className="font-body text-xs md:text-lg text-foreground/80 leading-relaxed">
              Одна встреча = готовые действия и материалы для следующего шага продажи
            </p>
          </div>
        </div>

        <div className="flex-1">
          <p className="font-heading text-base md:text-2xl font-semibold text-foreground mb-3 md:mb-6">
            Что показываем на мастер-классе
          </p>
          <div className="space-y-2 md:space-y-5">
            {items.map((t, i) => (
              <div key={i} className="flex items-start gap-2 md:gap-4">
                <span className="font-heading text-base md:text-2xl font-bold text-accent w-6 md:w-8 shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-body text-xs md:text-lg text-foreground/80 leading-relaxed">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </FCSlideContainer>
  );
};

export default FCNoteallSlide;
