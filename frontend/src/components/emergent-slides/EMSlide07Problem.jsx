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
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-2 md:mb-3" data-testid="em-problem-title">
        Продукт нужен не потому, что идея интересная
      </h2>
      <p className="font-body text-base md:text-xl lg:text-2xl text-accent mb-6 md:mb-10">
        А потому, что у пользователя есть реальная задача
      </p>

      <div className="grid grid-cols-2 gap-3 md:gap-5">
        {questions.map((item, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-4 md:p-6 lg:p-8">
            <span className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-accent/20 mb-2 block">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="font-heading text-base md:text-xl lg:text-2xl font-bold text-foreground mb-1 md:mb-2">
              {item.q}
            </h3>
            <p className="font-body text-xs md:text-base lg:text-lg text-muted-foreground">
              {item.hint}
            </p>
          </div>
        ))}
      </div>
    </EMSlideContainer>
  );
};

export default EMSlide07Problem;
