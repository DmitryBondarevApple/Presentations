import { FCSlideContainer } from './FCSlideContainer';

const values = [
  { title: "Более сильный старт франчайзи", desc: "Меньше потерь на первых переговорах, звонках и локальном маркетинге" },
  { title: "Единые стандарты сети", desc: "Одинаково высокий уровень работы с клиентом и продажами в разных точках" },
  { title: "Новый аргумент в продаже франшизы", desc: "Не только бренд и регламенты, но и конкретный современный AI-инструментарий" },
  { title: "Платформа для допродаж и удержания", desc: "Обучение можно включать в onboarding, годовую поддержку или отдельный premium-модуль" },
];

const FCValueSlide = () => {
  return (
    <FCSlideContainer number={3} label="Ценность">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="fc-value-title">
        Ценность <span className="text-accent">для франчайзера</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Что получает франчайзер, если такая программа появится у него в пакете
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
        {values.map((v, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-6" data-testid={`fc-value-card-${i}`}>
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-3 md:mb-5">
              <span className="font-heading text-sm md:text-lg font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
            </div>
            <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3">{v.title}</h3>
            <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 mt-3 md:mt-6 italic">
        Это не просто AI-образование, а усиление пакета сопровождения франчайзи и повышение управляемости сети.
      </p>
    </FCSlideContainer>
  );
};

export default FCValueSlide;
