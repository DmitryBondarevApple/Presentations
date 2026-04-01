import { MBSlideContainer } from './MBSlideContainer';

const seasons = [
  { tag: "Декабрь", title: "Новый год", desc: "Хвоя, огни, композиции, фотозоны. Самый востребованный сезон.", from: "от 15 000 ₽" },
  { tag: "Март", title: "8 Марта", desc: "Нежный весенний декор в фирменных цветах. Акцент на витрину и вход.", from: "от 15 000 ₽" },
  { tag: "Апрель", title: "Пасха", desc: "Светлые композиции в пастельных тонах. Венки, подсветка.", from: "от 15 000 ₽" },
  { tag: "Май", title: "День Победы", desc: "Сдержанное торжественное оформление. Символика, цветочные акценты.", from: "от 15 000 ₽" },
  { tag: "Июнь–Август", title: "Лето", desc: "Зелень, гирлянды, лёгкие композиции, фототочки для гостей.", from: "от 15 000 ₽" },
  { tag: "Сентябрь–Ноябрь", title: "Осень", desc: "Тёплая палитра и сезонные мотивы. Ветви, листья, подсветка.", from: "от 15 000 ₽" },
];

const MBSlide05Services = () => {
  return (
    <MBSlideContainer number={5} label="Услуги">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-services-title">
        Партнёр <span className="text-accent">на весь год</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Сезонное оформление под ключ — под праздник, сезон и стиль вашего бренда
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
        {seasons.map((s, i) => (
          <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-5" data-testid={`mb-season-${i}`}>
            <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded bg-accent/10 text-accent text-[10px] md:text-xs font-bold tracking-wider mb-2 md:mb-3">
              {s.tag}
            </span>
            <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-0.5 md:mb-2">{s.title}</h3>
            <p className="font-body text-[11px] md:text-base text-muted-foreground leading-snug md:leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </MBSlideContainer>
  );
};

export default MBSlide05Services;
