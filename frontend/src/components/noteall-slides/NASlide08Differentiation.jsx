import { NASlideContainer } from './NASlideContainer';

const diffs = [
  { title: "Сценарный анализ", desc: "Не просто транскрипт, а заранее заданный формат результата — под конкретную задачу и роль" },
  { title: "Работа с видеоконтентом", desc: "YouTube, Instagram, извлечение ключевых кадров и привязка к контексту обсуждения" },
  { title: "Документы + записи", desc: "Единая платформа для встреч, документов и публичного контента — не только meeting notes" },
  { title: "Кастомизируемые шаблоны", desc: "Импорт и экспорт сценариев между коллегами, библиотека готовых шаблонов под отрасли" },
];

const NASlide08Differentiation = () => (
  <NASlideContainer number={8} label="Отличие">
    <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-3" data-testid="na-diff-title">
      В чём отличие <span className="text-accent">NoteAll</span>
    </h2>
    <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6 leading-relaxed max-w-4xl">
      Первое поколение продавало расшифровку. Следующее поколение продаёт рабочий результат. Otter, Read AI, Zoom, Fellow — все двигаются к готовым заметкам и планам действий. NoteAll сфокусирован на <span className="font-semibold text-foreground">пост-анализе</span>.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-5">
      {diffs.map((d, i) => (
        <div key={i} className="bg-card rounded-lg border-l-[3px] border-l-accent border border-border p-4 md:p-6" data-testid={`na-diff-${i}`}>
          <h3 className="font-heading text-sm md:text-lg font-bold text-foreground mb-1 md:mb-2">{d.title}</h3>
          <p className="font-body text-xs md:text-base text-muted-foreground leading-relaxed">{d.desc}</p>
        </div>
      ))}
    </div>
  </NASlideContainer>
);
export default NASlide08Differentiation;
