import { SlideContainer } from "./SlideContainer";

const tasks = [
  "Определение целевых сегментов и сценариев применения",
  "Формирование конкурентного позиционирования и ценностного предложения",
  "Уточнение модели монетизации и структуры коммерческого предложения",
  "Подготовка комплекта материалов для продаж и партнёрского продвижения",
  "Организация коротких циклов проверки спроса на внешней аудитории",
  "Формирование плана пилотов и критериев готовности к масштабированию",
  "Синхронизация с внутренними владельцами продукта и подразделениями"
];

const TasksSlide = () => (
  <SlideContainer number={5} label="Задачи">
    <h2 className="animate-item stagger-1 font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-10">
      Задачи <span className="text-accent">программы</span>
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5">
      {tasks.map((task, i) => (
        <div
          key={i}
          className="animate-item flex items-start gap-4"
          style={{ animationDelay: `${(i + 2) * 0.07}s` }}
        >
          <span className="font-heading text-base font-bold text-accent shrink-0 w-7 mt-0.5">
            {String(i + 1).padStart(2, '0')}
          </span>
          <p className="font-body text-sm md:text-base lg:text-lg text-foreground/85 leading-relaxed">
            {task}
          </p>
        </div>
      ))}
    </div>
  </SlideContainer>
);

export default TasksSlide;
