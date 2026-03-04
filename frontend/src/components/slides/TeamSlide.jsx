import { SlideContainer } from "./SlideContainer";
import { User, UserCheck, Palette, CalendarClock } from "lucide-react";

const team = [
  { icon: User, role: "Аналитик", count: "2 человека", tasks: "Анализ рынка, сбор и структурирование данных, построение моделей" },
  { icon: UserCheck, role: "Старший аналитик", count: "1 человек", tasks: "Методология исследования, анализ трендов, подготовка выводов" },
  { icon: Palette, role: "Дизайнер", count: "1 человек", tasks: "Подготовка executive-презентации и резюме проекта" },
  { icon: CalendarClock, role: "Координатор", count: "1 человек", tasks: "Контроль сроков, взаимодействие с заказчиком" },
];

const TeamSlide = () => (
  <SlideContainer number={11} label="Команда">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 md:mb-14">
      Команда <span className="text-accent">проекта</span>
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
      {team.map((m, i) => (
        <div
          key={i}
          className="animate-item bg-card rounded-xl p-5 md:p-6 border border-border/40 flex flex-col"
          style={{ animationDelay: `${(i + 2) * 0.1}s` }}
        >
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
            <m.icon className="h-5 w-5 text-accent" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading text-base font-semibold text-foreground">{m.role}</h3>
          <p className="font-heading text-xs text-accent mt-1 mb-3">{m.count}</p>
          <p className="font-body text-xs text-muted-foreground leading-relaxed mt-auto">{m.tasks}</p>
        </div>
      ))}
    </div>

    <div className="animate-item stagger-7 mt-8 flex items-center gap-3">
      <span className="font-heading text-sm text-muted-foreground">Итого:</span>
      <span className="font-heading text-lg font-bold text-foreground">5 специалистов</span>
    </div>
  </SlideContainer>
);

export default TeamSlide;
