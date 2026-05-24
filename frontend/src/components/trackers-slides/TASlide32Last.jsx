const TASlide32Last = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-20 py-10" style={{ backgroundColor: "#ffffff" }}>
    <span className="font-mono text-[10px] md:text-xs tracking-[0.25em] uppercase mb-8 md:mb-10" style={{ color: "#a1a1aa" }}>
      АТТЕСТАЦИЯ ТРЕКЕРОВ · СКОЛКОВО
    </span>
    <p className="font-body text-base sm:text-lg md:text-xl mb-2 md:mb-4" style={{ color: "#52525b" }}>
      Хороший результат трекерской встречи:
    </p>
    <p className="font-heading text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-center max-w-4xl leading-tight mb-3 md:mb-5" style={{ color: "#0a0a0a" }}>
      Основатель уходит не с набором советов, а с чётким пониманием:
    </p>
    <p className="font-body text-base sm:text-lg md:text-2xl text-center max-w-3xl leading-relaxed mb-8 md:mb-12" style={{ color: "#3f3f46" }}>
      что именно мы проверяем, почему это важно, какой факт должны получить и что сделаем до следующей встречи.
    </p>
    <div className="w-12 h-px mb-6 md:mb-8" style={{ backgroundColor: "#d4d4d8" }} />
    <div className="flex items-center gap-3 md:gap-4">
      <img src={`${process.env.PUBLIC_URL || ''}/images/trackers/speaker.png`} alt="" className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover" />
      <p className="font-body text-sm md:text-base" style={{ color: "#71717a" }}>Дмитрий Бондарев</p>
    </div>
  </div>
);
export default TASlide32Last;
