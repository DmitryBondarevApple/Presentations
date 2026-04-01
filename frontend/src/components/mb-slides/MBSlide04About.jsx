import { MBSlideContainer } from './MBSlideContainer';

const MBSlide04About = () => {
  return (
    <MBSlideContainer number={4} label="О нас">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-about-title">
        Декор как <span className="text-accent">бизнес-инструмент</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Мы понимаем задачи бизнеса изнутри — и смотрим на оформление как на способ увеличить трафик и выручку
      </p>

      <div className="flex flex-col lg:flex-row gap-4 md:gap-8">
        <div className="flex-1 space-y-3 md:space-y-5">
          <div className="bg-card rounded-lg border border-border p-3 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <span className="font-heading text-sm md:text-xl font-bold text-accent">НР</span>
              </div>
              <div>
                <h3 className="font-heading text-sm md:text-xl font-bold text-foreground">Наталья Ромашова</h3>
                <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed mt-1">
                  Ведущий менеджер по аренде в крупнейшей сети ТРК Санкт-Петербурга. Работала с ритейл-брендами, ресторанами и операторами фастфуда.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-card rounded-lg border border-border p-3 md:p-6">
            <div className="flex items-start gap-3 md:gap-4">
              <div className="w-10 md:w-14 h-10 md:h-14 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                <span className="font-heading text-sm md:text-xl font-bold text-accent">МА</span>
              </div>
              <div>
                <h3 className="font-heading text-sm md:text-xl font-bold text-foreground">Мария Алехина</h3>
                <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed mt-1">
                  Менеджер по развитию крупных сетевых ритейлеров. Понимает задачи ритейл-бизнеса изнутри — от операционки до маркетинга.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:w-72 bg-card rounded-lg border border-border p-4 md:p-6 flex flex-col justify-center">
          <span className="font-heading text-5xl md:text-7xl font-bold text-accent leading-none">30+</span>
          <p className="font-body text-sm md:text-xl text-foreground mt-2 md:mt-3 font-semibold">лет в коммерции</p>
          <p className="font-body text-xs md:text-base text-muted-foreground mt-1 md:mt-2 leading-relaxed">
            Суммарный опыт в управлении коммерческой недвижимостью и развитии сетевого ритейла
          </p>
          <div className="w-12 h-[2px] bg-accent/40 mt-3 md:mt-5 mb-2 md:mb-3" />
          <p className="font-body text-[10px] md:text-sm text-muted-foreground/60">
            Санкт-Петербург
          </p>
        </div>
      </div>
    </MBSlideContainer>
  );
};

export default MBSlide04About;
