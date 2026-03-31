import { EMSlideContainer } from './EMSlideContainer';

const usualActions = ["Ответить на вопрос", "Сгенерировать текст", "Подсказать решение"];
const agentActions = ["Спроектировать архитектуру", "Собрать работающий продукт", "Доработать и протестировать"];

const EMSlide03About = () => {
  return (
    <EMSlideContainer number={3} label="Фокус">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-about-title">
        Речь не о том, как получить ответ.{' '}
        <span className="text-accent">Речь о пути до продукта.</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Разница между инструментом и системой
      </p>

      <div className="flex flex-col md:flex-row gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1">
        <div className="flex-1 bg-card rounded-lg border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-secondary text-muted-foreground text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Обычный ИИ-инструмент
          </span>
          <div className="space-y-2 md:space-y-4">
            {usualActions.map((a, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40 shrink-0" />
                <span className="font-body text-sm md:text-xl text-foreground/60">{a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-8">
          <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-3 md:mb-5">
            Платформа с ИИ-агентами
          </span>
          <div className="space-y-2 md:space-y-4">
            {agentActions.map((a, i) => (
              <div key={i} className="flex items-center gap-3 md:gap-4">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-body text-sm md:text-xl text-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        <span className="font-semibold">Ключевое: </span>
        обычный ИИ помогает на одном шаге. Платформа с агентами проходит весь путь: от задачи до работающего продукта.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide03About;
