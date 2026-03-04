import { SlideContainer } from "./SlideContainer";
import { Target } from "lucide-react";

const GoalSlide = () => (
  <SlideContainer number={4} label="Цель программы">
    <div className="max-w-5xl mx-auto flex flex-col items-center text-center">
      <Target className="animate-item stagger-1 h-12 w-12 text-accent mb-8" strokeWidth={1.5} />

      <h2 className="animate-item stagger-2 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] font-bold text-foreground leading-snug">
        Сформировать для выбранных внутренних продуктов Ростелекома{' '}
        <span className="text-accent">готовность к внешнему рынку</span>{' '}
        и подтвердить спрос на целевых сегментах
      </h2>

      <div className="animate-item stagger-3 mt-8 w-20 h-[2px] bg-border" />

      <p className="animate-item stagger-4 mt-8 font-body text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl leading-relaxed">
        Чтобы ускорить коммерческий запуск в масштабе РФ
        после завершения внутренних циклов доработки
      </p>
    </div>
  </SlideContainer>
);

export default GoalSlide;
