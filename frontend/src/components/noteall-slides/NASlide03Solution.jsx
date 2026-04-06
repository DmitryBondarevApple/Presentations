import { NASlideContainer } from './NASlideContainer';

const features = [
  { title: "Транскрибация", desc: "Полная расшифровка аудио и видео с автоматическим определением спикеров по голосовым профилям" },
  { title: "Сценарный анализ", desc: "Готовые и кастомные сценарии: от краткого саммари до детального протокола с решениями и задачами" },
  { title: "Работа с видео", desc: "Загрузка с любых видеохостингов, извлечение ключевых кадров по обсуждаемым темам" },
  { title: "Документы и контекст", desc: "Прикрепляйте PDF, ссылки и материалы — система учтёт их при анализе для глубоких выводов" },
];

const NASlide03Solution = () => (
  <NASlideContainer number={3} label="Решение">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-4" data-testid="na-solution-title">
      Noteall забирает <span className="text-accent">рутинную работу</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-5 md:mb-10 leading-relaxed max-w-5xl">
      Пользователь загружает запись, документ или ссылку — а сервис превращает материал в понятный, структурированный и пригодный для работы результат
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
      {features.map((f, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-5 md:p-7" data-testid={`na-feature-${i}`}>
          <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
            <div className="w-2.5 md:w-3 h-2.5 md:h-3 rounded-full bg-accent" />
            <h3 className="font-heading text-sm md:text-xl font-bold text-foreground">{f.title}</h3>
          </div>
          <p className="font-body text-xs md:text-lg text-muted-foreground leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
    <div className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-6 mt-3 md:mt-6">
      <p className="font-body text-sm md:text-xl text-foreground/80 leading-relaxed">
        На выходе — не транскрипт, а <span className="font-semibold text-accent">заранее заданный формат результата</span>: саммари, ТЗ/PRD, анализ проблем, список задач, аналитическая выжимка.
      </p>
    </div>
  </NASlideContainer>
);
export default NASlide03Solution;
