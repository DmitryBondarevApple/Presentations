import { MBSlideContainer } from './MBSlideContainer';

const photos = [
  { src: "/images/mb/kp-photo-2.jpeg", label: "Новогодний декор входной группы" },
  { src: "/images/mb/kp-photo-4.jpeg", label: "Хвойная гирлянда с подсветкой" },
  { src: "/images/mb/kp-photo-1.jpeg", label: "Праздничное оформление фасада" },
  { src: "/images/mb/kp-photo-5.jpeg", label: "Вертикальные композиции у входа" },
];

const MBSlide08Portfolio = () => {
  return (
    <MBSlideContainer number={8} label="Портфолио">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="mb-portfolio-title">
        Примеры <span className="text-accent">работ</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-6">
        Реальные проекты оформления входных групп и витрин
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 flex-1 min-h-0">
        {photos.map((photo, i) => (
          <div key={i} className="relative rounded-lg overflow-hidden border border-border group" data-testid={`mb-photo-${i}`}>
            <img
              src={photo.src}
              alt={photo.label}
              className="w-full h-full object-cover"
              style={{ minHeight: '200px' }}
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
              <p className="font-body text-[10px] md:text-sm text-white/90 leading-snug">{photo.label}</p>
            </div>
          </div>
        ))}
      </div>
    </MBSlideContainer>
  );
};

export default MBSlide08Portfolio;
