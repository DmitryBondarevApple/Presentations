import { Phone, Send, Mail } from "lucide-react";

const contacts = [
  { name: "Ширшов Ярослав", phone: "+7-985-364-0416", telegram: "@veronaj" },
  { name: "Старостина Наталья", phone: "+7-926-295-8288", telegram: "@NataschaStar" },
];

const ContactSlide = () => (
  <div className="w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-background">
    {/* Background glow */}
    <div
      className="absolute inset-0 opacity-[0.05] pointer-events-none"
      style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 60%, hsl(15 88% 56%), transparent)' }}
    />

    <h2 className="animate-item stagger-1 font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-12">
      Спасибо за внимание
    </h2>

    <div className="animate-item stagger-2 flex flex-col sm:flex-row gap-8 md:gap-16 mb-10">
      {contacts.map((c, i) => (
        <div key={i} className="text-center">
          <p className="font-heading text-lg font-semibold text-foreground mb-3">{c.name}</p>
          <div className="flex items-center justify-center gap-2 mb-1.5">
            <Phone className="h-3.5 w-3.5 text-accent" />
            <span className="font-body text-sm text-muted-foreground">{c.phone}</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Send className="h-3.5 w-3.5 text-accent" />
            <span className="font-body text-sm text-muted-foreground">{c.telegram}</span>
          </div>
        </div>
      ))}
    </div>

    <div className="animate-item stagger-3 flex items-center gap-2 mb-8">
      <Mail className="h-4 w-4 text-accent" />
      <span className="font-body text-sm text-muted-foreground">hello@hop.agency</span>
    </div>

    <div className="animate-item stagger-4 mt-4">
      <span className="font-heading text-xl md:text-2xl tracking-[0.3em] text-foreground font-bold">
        HOP<span className="text-accent">.</span>AGEN<span className="text-accent">C</span>Y
      </span>
    </div>
  </div>
);

export default ContactSlide;
