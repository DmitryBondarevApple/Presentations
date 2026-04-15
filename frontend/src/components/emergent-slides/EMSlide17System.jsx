import { EMSlideContainer } from './EMSlideContainer';

const features = [
  { title: "Учёт животных", desc: "Карточки, группы, площадки" },
  { title: "Мероприятия", desc: "Вакцинации, обработки, осмотры" },
  { title: "Заболевания", desc: "Симптомы, диагнозы, лечение" },
  { title: "Аналитика и отчёты", desc: "Графики, сводки, экспорт" },
];

const EMSlide17System = () => (
  <EMSlideContainer number={17} label="Демонстрация">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-system-title">
      Это уже не идея, <span className="text-accent">а рабочая система</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-3xl">
      Не макет и не текстовое описание — полноценный цифровой продукт, с которым можно взаимодействовать
    </p>

    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="lg:w-[55%] rounded-lg overflow-hidden border border-border shadow-lg">
        <img
          src={`${process.env.PUBLIC_URL || ''}/images/emergent/vc-analytics.png`}
          alt="VetControl — Аналитика"
          className="w-full h-auto"
        />
      </div>
      <div className="lg:w-[45%] grid grid-cols-2 gap-2 md:gap-3">
        {features.map((f, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-5">
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent" />
              <h3 className="font-heading text-sm md:text-lg font-bold text-foreground">{f.title}</h3>
            </div>
            <p className="font-body text-xs md:text-base text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </EMSlideContainer>
);

export default EMSlide17System;
