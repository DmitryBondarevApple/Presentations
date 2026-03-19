const finalBlocks = [
  { name: "Noteall", desc: "помогает услышать клиента" },
  { name: "EchoMind", desc: "помогает услышать продавца" },
  { name: "Emergent.sh", desc: "помогает быстро собрать нужный инструмент" },
];

const contacts = [
  { name: "Ширшов Ярослав", phone: "+7-985-364-0416", tg: "@veronaj" },
  { name: "Старостина Наталья", phone: "+7-926-295-8288", tg: "@NataschaStar" },
];

const FCFinalSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, hsl(240 100% 55%), transparent)' }}
      />

      <h2 className="animate-item stagger-1 font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground text-center mb-10" data-testid="fc-final-title">
        Вместе — <span className="text-accent">новый образовательный пакет</span>
      </h2>

      <div className="animate-item stagger-2 flex flex-col sm:flex-row gap-12 mb-10 max-w-4xl">
        {finalBlocks.map((b, i) => (
          <div key={i} className="flex-1 text-center">
            <p className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{b.name}</p>
            <p className="font-body text-lg md:text-xl text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>

      <p className="animate-item stagger-3 font-body text-lg md:text-xl text-foreground/70 text-center max-w-2xl mb-10 px-6 leading-relaxed">
        Прикладной, понятный и напрямую связанный с ростом продаж и эффективности сети —
        готовый пакет для франчайзеров.
      </p>

      <div className="animate-item stagger-4 w-20 h-[2px] bg-accent/50 mb-10" />

      <div className="animate-item stagger-4 flex flex-col sm:flex-row gap-14 mb-8">
        {contacts.map((c, i) => (
          <div key={i} className="text-center">
            <p className="font-heading text-xl md:text-2xl font-bold text-foreground mb-2">{c.name}</p>
            <p className="font-body text-base md:text-lg text-muted-foreground">{c.phone}</p>
            <p className="font-body text-base md:text-lg text-muted-foreground">{c.tg}</p>
          </div>
        ))}
      </div>

      <p className="animate-item stagger-5 font-body text-base md:text-lg text-muted-foreground mb-8">hello@hop.agency</p>

      <div className="animate-item stagger-5">
        <span className="font-heading text-2xl md:text-3xl tracking-[0.3em] text-foreground font-bold">
          HOP<span className="text-accent">.</span>AGEN<span className="text-accent">C</span>Y
        </span>
      </div>
    </div>
  );
};

export default FCFinalSlide;
