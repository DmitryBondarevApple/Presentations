import { TKSlideContainer, TKH2, TKLead, TKCard } from "./TKSlideContainer";

const variants = [
  { n: "Вариант 1", t: "Навык внутри AI-ассистента Точки", d: "Пользователь загружает запись встречи или указывает ссылку, выбирает сценарий анализа и получает результат в нужном формате.", tag: "Требует API-интеграции" },
  { n: "Вариант 2", t: "Партнёрский сервис в каталоге Точки", d: "Noteall предлагается всем клиентам или сегментам, где встречи — важная часть работы: селлеры, бухгалтеры, digital-агентства, юристы, онлайн-школы, ИТ-команды.", tag: "Каталог сервисов" },
  { n: "Вариант 3", t: "Интеграция с продуктами Точки", d: "В результаты встреч встраиваются ссылки на продукты Точки: бухгалтерия, ЭДО, 1С, CRM-партнёры, сервисы для селлеров, юридические сервисы, закупки, платёжные решения.", tag: "Кросс-продажи" },
  { n: "Вариант 4", t: "Пилотный лендинг для выбранных сегментов", d: "Отдельные сценарии и офферы для разных типов предпринимателей.", tag: "Быстрый запуск" },
];

const TKSlide15Ecosystem = () => (
  <TKSlideContainer number={15} label="Интеграция">
    <TKH2>Как Noteall может быть <span className="text-accent">встроен в экосистему Точки</span></TKH2>
    <TKLead>Четыре сценария встраивания — от быстрого лендинга до глубокой API-интеграции в AI-ассистента.</TKLead>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 md:gap-5">
      {variants.map((v, i) => (
        <TKCard key={i} className="!border-t-2 !border-t-accent" data-testid={`tk-variant-${i}`}>
          <p className="font-heading text-[11px] sm:text-xs md:text-sm font-bold text-accent uppercase tracking-wider mb-0.5 sm:mb-1">{v.n}</p>
          <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 md:mb-2 leading-snug">{v.t}</p>
          <p className="font-body text-[11px] sm:text-sm md:text-[15px] text-muted-foreground leading-snug mb-2">{v.d}</p>
          <span className="inline-block font-body text-[10px] sm:text-xs md:text-sm text-accent bg-accent/10 rounded-full px-2.5 py-0.5">{v.tag}</span>
        </TKCard>
      ))}
    </div>
  </TKSlideContainer>
);
export default TKSlide15Ecosystem;
