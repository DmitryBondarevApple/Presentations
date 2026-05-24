const TASlide01Cover = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-20 py-10" style={{ backgroundColor: "#ffffff" }}>
    <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase mb-8 md:mb-12" style={{ color: "#a1a1aa" }}>
      АТТЕСТАЦИЯ ТРЕКЕРОВ · СКОЛКОВО
    </span>
    <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-center leading-tight mb-4 md:mb-8" style={{ color: "#0a0a0a" }}>
      Введение в стартапы
    </h1>
    <p className="font-body text-base sm:text-lg md:text-2xl text-center max-w-3xl leading-relaxed mb-8 md:mb-12" style={{ color: "#52525b" }}>
      Стартап как система гипотез, метрик, рисков<br />и проверяемых действий
    </p>
    <div className="w-12 h-px mb-6 md:mb-8" style={{ backgroundColor: "#d4d4d8" }} />
    <div className="flex items-center gap-3 md:gap-4">
      <img src={`${process.env.PUBLIC_URL || ''}/images/trackers/speaker.png`} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
      <p className="font-body text-sm md:text-base" style={{ color: "#71717a" }}>Дмитрий Бондарев</p>
    </div>
  </div>
);
export default TASlide01Cover;
