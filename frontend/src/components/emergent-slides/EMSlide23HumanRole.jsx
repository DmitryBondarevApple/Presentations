const roles = [
  { num: "01", text: "Человек формулирует задачу" },
  { num: "02", text: "Человек определяет ценность для пользователя" },
  { num: "03", text: "Человек решает, что считать хорошим результатом" },
];

const EMSlide23HumanRole = () => (
  <div className="w-full h-full flex flex-col relative bg-background">
    <div
      className="absolute inset-0 opacity-[0.07] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(82 84% 55%), transparent)' }}
    />

    <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start lg:justify-center px-6 md:px-16 lg:px-24 py-6 md:py-10 relative z-10">
      <h1 className="animate-item stagger-1 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight mb-6 md:mb-10" data-testid="em-human-title">
        ИИ ускоряет разработку.{' '}
        <span className="text-accent">Роль человека не исчезает.</span>
      </h1>

      <div className="animate-item stagger-2 w-20 h-[2px] bg-accent/50 mb-6 md:mb-10" />

      <div className="animate-item stagger-3 flex flex-col md:flex-row gap-3 md:gap-6 w-full max-w-4xl">
        {roles.map((r, i) => (
          <div key={i} className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6 text-center">
            <span className="font-heading text-2xl md:text-3xl font-bold text-accent/30 block mb-2">
              {r.num}
            </span>
            <p className="font-body text-sm md:text-lg lg:text-xl text-foreground leading-relaxed">
              {r.text}
            </p>
          </div>
        ))}
      </div>

      <p className="animate-item stagger-4 mt-6 md:mt-10 font-body text-sm md:text-lg text-muted-foreground/60 text-center max-w-3xl leading-relaxed">
        Не обязательно делать всё руками. Но по-прежнему необходимо понимать — что, для кого и зачем.
      </p>

      <p className="animate-item stagger-5 mt-4 md:mt-6 font-body text-sm md:text-lg text-muted-foreground/40 text-center">
        emergent.sh
      </p>
    </div>

    <div className="absolute bottom-4 left-6 md:left-16 lg:left-24 font-heading text-xs tracking-[0.22em] text-muted-foreground/40 pointer-events-none select-none z-10">
      EMERGENT<span className="text-accent/40">.</span>SH
    </div>
  </div>
);

export default EMSlide23HumanRole;
