const conclusions = [
  "Идею нужно уточнять",
  "Пользователя нужно понимать",
  "ИИ-агентами нужно управлять, а не просто ими пользоваться",
];

const EMSlide15Final = () => {
  return (
    <div className="w-full h-full flex flex-col relative bg-background">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(82 84% 55%), transparent)' }}
      />

      <div className="flex-1 overflow-y-auto flex flex-col items-center justify-start lg:justify-center px-6 md:px-16 lg:px-24 py-6 md:py-10 relative z-10">
        <h1 className="animate-item stagger-1 font-heading text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center max-w-5xl leading-tight mb-6 md:mb-10" data-testid="em-final-title">
          Преимущество получает тот, кто умеет превращать идею{' '}
          <span className="text-accent">в понятную задачу и рабочий продукт</span>
        </h1>

        <div className="animate-item stagger-2 w-20 h-[2px] bg-accent/50 mb-6 md:mb-10" />

        <div className="animate-item stagger-3 flex flex-col md:flex-row gap-3 md:gap-6 w-full max-w-4xl">
          {conclusions.map((c, i) => (
            <div key={i} className="flex-1 bg-card rounded-lg border border-border p-4 md:p-6 text-center">
              <span className="font-heading text-2xl md:text-3xl font-bold text-accent/30 block mb-2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="font-body text-sm md:text-lg lg:text-xl text-foreground leading-relaxed">
                {c}
              </p>
            </div>
          ))}
        </div>

        <p className="animate-item stagger-4 mt-6 md:mt-10 font-body text-sm md:text-lg text-muted-foreground/60 text-center">
          emergent.sh
        </p>
      </div>
    </div>
  );
};

export default EMSlide15Final;
