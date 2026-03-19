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

      <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-foreground text-center mb-8" data-testid="fc-final-title">
        Вместе — <span className="text-accent">новый образовательный пакет</span>
      </h2>

      <div className="animate-item stagger-2 flex flex-col sm:flex-row gap-8 mb-8 max-w-2xl">
        {finalBlocks.map((b, i) => (
          <div key={i} className="flex-1 text-center">
            <p className="font-heading text-base font-bold text-foreground mb-1">{b.name}</p>
            <p className="font-body text-xs text-muted-foreground">{b.desc}</p>
          </div>
        ))}
      </div>

      <p className="animate-item stagger-3 font-body text-sm text-foreground/70 text-center max-w-lg mb-8 px-6">
        Прикладной, понятный и напрямую связанный с ростом продаж и эффективности сети —
        готовый пакет для франчайзеров.
      </p>

      <div className="animate-item stagger-4 w-16 h-[2px] bg-accent/50 mb-8" />

      <div className="animate-item stagger-4 flex flex-col sm:flex-row gap-10 mb-6">
        {contacts.map((c, i) => (
          <div key={i} className="text-center">
            <p className="font-heading text-sm font-bold text-foreground mb-1">{c.name}</p>
            <p className="font-body text-xs text-muted-foreground">{c.phone}</p>
            <p className="font-body text-xs text-muted-foreground">{c.tg}</p>
          </div>
        ))}
      </div>

      <p className="animate-item stagger-5 font-body text-xs text-muted-foreground mb-6">hello@hop.agency</p>

      <div className="animate-item stagger-5">
        <span className="font-heading text-lg md:text-xl tracking-[0.3em] text-foreground font-bold">
          HOP<span className="text-accent">.</span>AGEN<span className="text-accent">C</span>Y
        </span>
      </div>
    </div>
  );
};

export default FCFinalSlide;
