const AXSlide01Cover = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div className="absolute inset-0 opacity-[0.06] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, hsl(217 91% 45%), transparent)' }} />
    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-center px-4 sm:px-6 py-6 md:py-10 relative z-10">
      <div className="animate-item stagger-1 mb-4 md:mb-10">
        <img src={`${process.env.PUBLIC_URL || ''}/images/ax10/logo-ax10.png`} alt="AX10" className="h-10 sm:h-14 md:h-20" data-testid="ax-logo" />
      </div>
      <div className="animate-item stagger-2 mb-3 md:mb-6">
        <span className="inline-block px-4 py-1.5 md:px-6 md:py-2.5 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-base font-bold tracking-widest uppercase">
          Клиентская презентация
        </span>
      </div>
      <h1 className="animate-item stagger-3 font-heading text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight" data-testid="ax-title">
        От идеи цифрового сервиса к{' '}
        <span className="text-accent">готовому ТЗ на разработку</span>
      </h1>
      <p className="animate-item stagger-4 mt-3 md:mt-8 font-body text-sm sm:text-base md:text-xl lg:text-2xl text-muted-foreground text-center max-w-3xl leading-relaxed">
        Проверяем гипотезы, исследуем рынок и пользователей, формируем продуктовое решение и техническое задание — до начала разработки
      </p>
      <div className="animate-item stagger-5 mt-4 md:mt-10 w-16 h-[2px] bg-accent/50" />
      <p className="animate-item stagger-5 mt-3 md:mt-6 font-body text-xs sm:text-sm md:text-lg text-muted-foreground/60 text-center max-w-2xl leading-relaxed">
        Без догадок, лишних затрат и привязки к одному подрядчику
      </p>
    </div>
  </div>
);
export default AXSlide01Cover;
