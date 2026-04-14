import { NPSlideContainer } from './NPSlideContainer';

const NPSlide06Speakers = () => (
  <NPSlideContainer number={5} label="Спикеры">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-speakers-title">
      Система <span className="text-accent">знает ваших собеседников</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Голосовые профили участников — система узнаёт спикеров автоматически и с каждой записью становится точнее.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {[
        { title: "Справочник контактов", desc: "Ведите базу участников встреч. Система сохраняет голосовые профили каждого и узнаёт их в будущих записях автоматически." },
        { title: "Авто-определение", desc: "В быстром режиме спикеры назначаются по голосовым профилям. Можно подтвердить или скорректировать одним кликом." },
        { title: "Растущая точность", desc: "С каждой записью голосовые профили становятся точнее. Чем больше встреч — тем надёжнее определение каждого участника." },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8" data-testid={`np-speaker-${i}`}>
          <div className="w-8 h-8 md:w-12 md:h-12 rounded-full bg-accent/10 flex items-center justify-center mb-2 md:mb-4">
            <span className="text-accent font-bold text-sm md:text-xl">{String(i + 1).padStart(2, '0')}</span>
          </div>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground">{item.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed mt-1 sm:mt-2 md:mt-4">{item.desc}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide06Speakers;
