import { AXSlideContainer } from './AXSlideContainer';

const team = [
  { name: "Сергей Мартюшев", role: "Финансы", exp: "20+ лет" },
  { name: "Сергей Бобылев", role: "Продажи", exp: "7+ лет" },
  { name: "Ирина Радюшкина", role: "Маркетинг", exp: "15+ лет" },
  { name: "Дмитрий Бондарев", role: "Разработка", exp: "30+ лет" },
  { name: "Сергей Томилов", role: "Коммуникации", exp: "7+ лет" },
  { name: "Михаил Карпов", role: "Продукт", exp: "10+ лет" },
];

const AXSlide16Final = () => (
  <AXSlideContainer number={16} label="Контакты">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="ax-final-title">
      Начните с <span className="text-accent">проверенного фундамента</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-8 leading-snug sm:leading-relaxed max-w-4xl">
      AX10 помогает сделать первый шаг к запуску цифрового сервиса быстрым, обоснованным и управляемым.
    </p>

    <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5 sm:gap-2 md:gap-3 mb-2 sm:mb-4 md:mb-8">
      {team.map((t, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-2 sm:p-3 md:p-4 text-center" data-testid={`ax-team-${i}`}>
          <p className="font-heading text-[10px] sm:text-xs md:text-sm font-bold text-foreground truncate">{t.name}</p>
          <p className="font-body text-[10px] sm:text-xs md:text-sm text-accent mt-0.5">{t.role}</p>
          <p className="font-body text-[10px] sm:text-xs md:text-xs text-muted-foreground">{t.exp}</p>
        </div>
      ))}
    </div>

    <div className="bg-card rounded-lg border-2 border-accent p-3 sm:p-5 md:p-7">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
        <div>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-1 sm:mb-2">Следующий шаг — диагностическая сессия</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug">Расскажите о задаче. Мы зададим вопросы и дадим аналитику бесплатно на первом звонке.</p>
        </div>
        <div className="shrink-0 text-right">
          <p className="font-heading text-sm sm:text-base md:text-xl font-bold text-accent">ax10.ru</p>
        </div>
      </div>
    </div>
  </AXSlideContainer>
);
export default AXSlide16Final;
