import { EMSlideContainer } from './EMSlideContainer';

const questions = [
  { q: "У кого эта проблема есть?", hint: "Определите целевую аудиторию" },
  { q: "В чём она проявляется?", hint: "Опишите конкретные ситуации" },
  { q: "Как решают сейчас?", hint: "Текущие альтернативы и конкуренты" },
  { q: "Почему не устраивает?", hint: "Что именно можно улучшить" },
];

const EMSlide07Problem = () => {
  return (
    <EMSlideContainer number={7} label="Шаг 2 · Пользователь">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-problem-title">
        Продукт нужен не потому, что идея интересная
      </h2>
      <p className="font-body text-sm md:text-xl text-accent mb-4 md:mb-8">
        А потому, что у пользователя есть реальная задача
      </p>

      <div className="grid grid-cols-2 gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1 auto-rows-fr">
        {questions.map((item, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-6">
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
              <span className="font-heading text-sm md:text-lg font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3">{item.q}</h3>
            <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{item.hint}</p>
          </div>
        ))}
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 italic">
        Если на эти вопросы нет ответа — продукт строится на догадках.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide07Problem;
