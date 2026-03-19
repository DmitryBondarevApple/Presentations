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
      <span className="inline-block px-2.5 py-1 rounded bg-accent/10 text-accent text-[10px] font-bold tracking-wider uppercase mb-3">
        БЛОК 3
      </span>
      <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-1" data-testid="fc-emergent-title">
        Emergent.sh
      </h2>
      <p className="font-body text-sm text-accent mb-5">
        Сайты, лендинги и инструменты в 100 раз быстрее
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
        {features.map((f, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-4" data-testid={`fc-emergent-card-${i}`}>
            <div className="w-8 h-8 rounded-md bg-accent/10 flex items-center justify-center mb-3">
              <span className="font-heading text-sm font-bold text-accent">{i + 1}</span>
            </div>
            <h3 className="font-heading text-xs font-bold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4">
        <p className="font-body text-xs text-foreground/80">
          <span className="font-semibold text-foreground">Тезис: </span>
          не просто AI ради AI, а ускорение запуска реального цифрового инструмента для точки или всей сети.
        </p>
      </div>
    </FCSlideContainer>
  );
};

export default FCEmergentSlide;
