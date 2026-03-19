import { FCSlideContainer } from './FCSlideContainer';

const features = [
  { title: "AI-платформа", desc: "Описать идею на естественном языке и получить рабочее приложение без опыта программирования" },
  { title: "Для сети", desc: "Продающие лендинги, локальные сайты точек и мини-сервисы для внутренних нужд" },
  { title: "Для франчайзи", desc: "Калькуляторы, формы, справочники, страницы акций, вакансий и лидогенерации" },
  { title: "Для УК", desc: "Быстро проверять идеи и запускать MVP без подрядчика и долгих согласований" },
];

const FCEmergentSlide = () => {
  return (
    <FCSlideContainer number={7} label="Блок 3 · Emergent.sh">
      <span className="inline-block px-2 py-1 md:px-3 md:py-1.5 rounded bg-accent/10 text-accent text-xs md:text-sm font-bold tracking-wider uppercase mb-2 md:mb-4">
        БЛОК 3
      </span>
      <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold text-foreground mb-1 md:mb-2" data-testid="fc-emergent-title">
        Emergent.sh
      </h2>
      <p className="font-body text-base md:text-2xl text-accent mb-4 md:mb-8">
        Сайты, лендинги и инструменты в 100 раз быстрее
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 mb-4 md:mb-6">
        {features.map((f, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-6" data-testid={`fc-emergent-card-${i}`}>
            <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-2 md:mb-4">
              <span className="font-heading text-sm md:text-lg font-bold text-accent">{i + 1}</span>
            </div>
            <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-1 md:mb-3">{f.title}</h3>
            <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
        <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
          <span className="font-semibold text-foreground">Тезис: </span>
          не просто AI ради AI, а ускорение запуска реального цифрового инструмента для точки или всей сети.
        </p>
      </div>
    </FCSlideContainer>
  );
};

export default FCEmergentSlide;
