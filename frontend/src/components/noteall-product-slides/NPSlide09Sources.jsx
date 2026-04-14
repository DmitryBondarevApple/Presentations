import { NPSlideContainer } from './NPSlideContainer';

const NPSlide09Sources = () => (
  <NPSlideContainer number={8} label="Источники данных">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-sources-title">
      Анализируйте записи <span className="text-accent">из любых источников</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Аудио и видео файлы, ссылки на видео-хостинги, социальные сети и облачные хранилища, документы и внешние ресурсы — единая точка входа для всего контента.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3 md:gap-6">
      {[
        { title: "Загрузка файлов", desc: "Аудио или видео — любой формат. Полная транскрибация с определением спикеров и анализ по выбранному сценарию.", tags: ["MP3", "MP4", "WAV", "WebM"] },
        { title: "Ссылки", desc: "Вставьте ссылку на любой видео-хостинг, социальную сеть или облачное хранилище — система скачает видео, извлечёт аудио, ключевые кадры и выполнит полный анализ.", tags: ["Видео-хостинги", "Соцсети", "Облака"] },
        { title: "Дополнительный контекст", desc: "Прикрепите ссылки на сайты, PDF и другие материалы — система учтёт их при анализе для более точных выводов.", tags: ["PDF", "Ссылки", "Документы"] },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-5 md:p-8" data-testid={`np-source-${i}`}>
          <h3 className="font-heading text-sm sm:text-base md:text-2xl font-bold text-foreground mb-1 sm:mb-2 md:mb-4">{item.title}</h3>
          <p className="font-body text-xs sm:text-sm md:text-lg text-muted-foreground leading-snug sm:leading-relaxed mb-2 md:mb-4">{item.desc}</p>
          <div className="flex flex-wrap gap-1 md:gap-2">
            {item.tags.map((tag, j) => (
              <span key={j} className="px-2 py-0.5 md:px-3 md:py-1 rounded bg-accent/10 text-accent text-[10px] sm:text-xs md:text-sm font-medium">{tag}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide09Sources;
