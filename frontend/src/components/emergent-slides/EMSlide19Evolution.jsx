import { EMSlideContainer } from './EMSlideContainer';

const directions = [
  {
    num: "01",
    title: "Исправлять пробелы в сценариях",
    items: ["Нет редактирования записей", "Не хватает фильтрации", "Нужна валидация форм"],
  },
  {
    num: "02",
    title: "Углублять предметную область",
    items: ["Расширить карточку препарата", "Добавить протоколы лечения", "Связать симптомы и диагнозы"],
  },
  {
    num: "03",
    title: "Повышать ценность для пользователя",
    items: ["Расчёт дозировки по массе", "Уведомления о сроках", "Экспорт отчётов"],
  },
];

const EMSlide19Evolution = () => (
  <EMSlideContainer number={19} label="Развитие">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-2 md:mb-4" data-testid="em-evolution-title">
      После первого релиза <span className="text-accent">работа только начинается</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8 max-w-3xl">
      Первый рабочий вариант — это отправная точка. Дальше продукт уточняется, дополняется и развивается.
    </p>

    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
      {directions.map((d, i) => (
        <div key={i} className="flex-1 bg-card rounded-lg border-t-[3px] border-t-accent border border-border p-4 md:p-6">
          <span className="font-heading text-2xl md:text-3xl font-bold text-accent/25">{d.num}</span>
          <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mt-1 mb-2 md:mb-4">{d.title}</h3>
          <div className="space-y-1.5 md:space-y-2">
            {d.items.map((item, j) => (
              <div key={j} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5 md:mt-2" />
                <p className="font-body text-xs md:text-base text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </EMSlideContainer>
);

export default EMSlide19Evolution;
