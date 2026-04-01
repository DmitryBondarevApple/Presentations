import { MBSlideContainer } from './MBSlideContainer';

const included = [
  "Выезд на объект и замеры",
  "Разработка индивидуальной концепции",
  "Эскиз или 3D-визуализация",
  "Детальная смета до начала работ",
  "Закупка материалов и крепежа",
  "Доставка на объект",
  "Профессиональный монтаж",
  "Проверка подсветки и надёжности",
  "Уборка зоны после монтажа",
  "Фотофиксация результата",
  "Гарантия на весь сезон",
  "Демонтаж после окончания периода",
];

const conditions = [
  { title: "Доступ", desc: "Обеспечиваете доступ к входной группе и подключение к электропитанию 220В" },
  { title: "Требования УК", desc: "При ограничениях по крепежу или материалам — подберём решение под условия" },
  { title: "Оплата", desc: "50% предоплата после согласования, 50% — после приёмки монтажа" },
];

const MBSlide07Included = () => {
  return (
    <MBSlideContainer number={7} label="Что входит">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-included-title">
        Всё <span className="text-accent">включено</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6">
        Без скрытых платежей — вы знаете полную стоимость до начала работ
      </p>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
        <div className="flex-1 bg-card rounded-lg border border-border p-3 md:p-6">
          <p className="font-heading text-xs md:text-lg font-semibold text-foreground mb-2 md:mb-4">Состав работ и услуг:</p>
          <div className="grid grid-cols-2 gap-x-3 md:gap-x-6 gap-y-1.5 md:gap-y-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-start gap-1.5 md:gap-2">
                <div className="w-1 md:w-1.5 h-1 md:h-1.5 rounded-full bg-accent mt-1.5 md:mt-2 shrink-0" />
                <span className="font-body text-[11px] md:text-base text-foreground/80 leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-80 space-y-2 md:space-y-4">
          {conditions.map((c, i) => (
            <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-3 md:p-5">
              <h3 className="font-heading text-xs md:text-base font-bold text-foreground mb-0.5 md:mb-1">{c.title}</h3>
              <p className="font-body text-[10px] md:text-sm text-muted-foreground leading-snug">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </MBSlideContainer>
  );
};

export default MBSlide07Included;
