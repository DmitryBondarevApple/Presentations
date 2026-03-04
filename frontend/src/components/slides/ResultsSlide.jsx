import { SlideContainer } from "./SlideContainer";
import {
  FileText, Users, HeartPulse, Network,
  DollarSign, Presentation, FlaskConical, ShieldCheck, Map
} from "lucide-react";

const items = [
  { icon: FileText, label: "Позиционирование", desc: "1-2 варианта для внешней аудитории" },
  { icon: Users, label: "Карта сегментов", desc: "Профили идеальных клиентов" },
  { icon: HeartPulse, label: "Боли и эффекты", desc: "Ключевые боли и измеримые результаты" },
  { icon: Network, label: "Карта ЛПР", desc: "SPACE по определению ЛПР" },
  { icon: DollarSign, label: "Ценообразование", desc: "Гипотезы и варианты упаковки" },
  { icon: Presentation, label: "Материалы продаж", desc: "Одностраничник, презентация, шаблоны" },
  { icon: FlaskConical, label: "План пилотов", desc: "Кого берём, что измеряем, критерии" },
  { icon: ShieldCheck, label: "Реестр рисков", desc: "Правовые и репутационные ограничения" },
  { icon: Map, label: "Маршрут запуска", desc: "Через каналы Ростелекома" },
];

const ResultsSlide = () => (
  <SlideContainer number={6} label="Результаты">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3">
      Пакет готовности <span className="text-accent">к рынку</span>
    </h2>
    <p className="animate-item stagger-2 font-body text-sm text-muted-foreground mb-8">
      По каждому продукту — до 5 продуктов на цикл
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 lg:gap-5">
      {items.map((item, i) => (
        <div
          key={i}
          className="animate-item flex items-start gap-3 bg-card/50 rounded-lg p-3.5 md:p-4 border border-border/30"
          style={{ animationDelay: `${(i + 3) * 0.06}s` }}
        >
          <item.icon className="h-6 w-6 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
          <div>
            <p className="font-heading text-sm md:text-base font-medium text-foreground">{item.label}</p>
            <p className="font-body text-xs md:text-sm text-muted-foreground mt-0.5">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </SlideContainer>
);

export default ResultsSlide;
