import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const features = [
  { t: "Учёт животных", d: "Карточки, группы, площадки" },
  { t: "Мероприятия", d: "Вакцинации, обработки, осмотры" },
  { t: "Заболевания", d: "Симптомы, диагнозы, лечение" },
  { t: "Аналитика и отчёты", d: "Графики, сводки, экспорт" },
];
const TASlide45System = () => (
  <TASlideContainer number={45} label="Демонстрация">
    <TAH>Это уже не идея, а рабочая система</TAH>
    <TASub>Полноценный цифровой продукт, с которым можно взаимодействовать</TASub>
    <div className="flex flex-col lg:flex-row gap-4 md:gap-6">
      <div className="lg:w-[55%] rounded-md overflow-hidden" style={{ border: "1px solid #e5e5e5" }}>
        <img src={`${process.env.PUBLIC_URL || ''}/images/emergent/vc-analytics.png`} alt="VetControl — Аналитика" className="w-full h-auto" />
      </div>
      <div className="lg:w-[45%] grid grid-cols-2 gap-2 md:gap-3">
        {features.map((f, i) => (
          <div key={i} className="rounded-md p-3 md:p-5" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
            <div className="flex items-center gap-2 mb-1 md:mb-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full" style={{ backgroundColor: "#0a0a0a" }} />
              <p className="font-heading text-sm md:text-lg font-bold" style={{ color: "#0a0a0a" }}>{f.t}</p>
            </div>
            <p className="font-body text-xs md:text-base" style={{ color: "#52525b" }}>{f.d}</p>
          </div>
        ))}
      </div>
    </div>
  </TASlideContainer>
);
export default TASlide45System;
