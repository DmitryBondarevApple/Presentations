import { SlideContainer } from "./SlideContainer";
import { BarChart3, ListChecks, ArrowRight } from "lucide-react";

const results = [
  {
    icon: BarChart3,
    title: "Рейтинг продуктов",
    desc: "По готовности к выходу на рынок и по силе подтверждённого спроса"
  },
  {
    icon: ListChecks,
    title: "Рекомендации по запуску",
    desc: "Какие продукты выводить первыми, какие доработать, какие отложить"
  },
  {
    icon: ArrowRight,
    title: "План следующего цикла",
    desc: "Предложение по масштабированию подхода и следующей волне продуктов"
  }
];

const SummarySlide = () => (
  <SlideContainer number={7} label="Сводные результаты">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10 md:mb-14">
      Сводные результаты <span className="text-accent">программы</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 lg:gap-8">
      {results.map((r, i) => (
        <div
          key={i}
          className="animate-item bg-card rounded-xl p-6 md:p-8 border border-border/50 flex flex-col"
          style={{ animationDelay: `${(i + 2) * 0.12}s` }}
        >
          <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5">
            <r.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
          </div>
          <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{r.title}</h3>
          <p className="font-body text-sm text-muted-foreground leading-relaxed mt-auto">{r.desc}</p>
        </div>
      ))}
    </div>
  </SlideContainer>
);

export default SummarySlide;
