import { EMSlideContainer } from './EMSlideContainer';

const usualActions = ["Ответить на вопрос", "Сгенерировать текст", "Подсказать решение"];
const agentActions = ["Спроектировать архитектуру", "Собрать работающий продукт", "Доработать и протестировать"];

const EMSlide03About = () => {
  return (
    <EMSlideContainer number={3} label="Фокус">
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 md:mb-10" data-testid="em-about-title">
        Речь не о том, как получить ответ.{' '}
        <span className="text-accent">Речь о пути до продукта.</span>
      </h2>

      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <div className="flex-1 bg-card rounded-lg border border-border p-5 md:p-8">
          <span className="font-heading text-muted-foreground text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 block">
            Обычный ИИ-инструмент
          </span>
          <div className="space-y-3 md:space-y-4">
            {usualActions.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-muted-foreground/40 shrink-0" />
                <span className="font-body text-base md:text-lg lg:text-xl text-foreground/70">{a}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 bg-card rounded-lg border border-accent/30 border-l-[3px] border-l-accent p-5 md:p-8">
          <span className="font-heading text-accent text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 block">
            Платформа с ИИ-агентами
          </span>
          <div className="space-y-3 md:space-y-4">
            {agentActions.map((a, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="font-body text-base md:text-lg lg:text-xl text-foreground">{a}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide03About;
