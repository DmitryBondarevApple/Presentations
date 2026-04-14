import { NPSlideContainer } from './NPSlideContainer';

const NPSlide05Transcription = () => (
  <NPSlideContainer number={5} label="Транскрибация">
    <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-trans-title">
      Точная транскрибация <span className="text-accent">на 78 языках</span>
    </h2>
    <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-10 leading-snug sm:leading-relaxed max-w-5xl">
      Любые аудио и видео форматы. Автоматическая разметка по спикерам, многоязычность и перевод.
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-5">
      {[
        { val: "78", label: "языков", desc: "Распознавание и автоматический перевод" },
        { val: "99%", label: "точность", desc: "На чистом аудио с современными моделями" },
        { val: "Все", label: "форматы", desc: "MP3, MP4, WAV, MOV, WebM и другие" },
        { val: "Auto", label: "спикеры", desc: "Автоматическая разметка по участникам" },
      ].map((item, i) => (
        <div key={i} className="bg-card rounded-lg border border-border p-3 sm:p-4 md:p-6" data-testid={`np-trans-${i}`}>
          <span className="font-heading text-2xl sm:text-3xl md:text-5xl font-bold text-accent">{item.val}</span>
          <p className="font-heading text-xs sm:text-sm md:text-lg font-semibold text-foreground mt-1 md:mt-2">{item.label}</p>
          <p className="font-body text-[10px] sm:text-xs md:text-base text-muted-foreground mt-1 md:mt-2 leading-snug">{item.desc}</p>
        </div>
      ))}
    </div>
  </NPSlideContainer>
);
export default NPSlide05Transcription;
