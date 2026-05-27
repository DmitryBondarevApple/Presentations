import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const limits = [
  { t: "Hardware и deeptech", d: "Производство, прототипирование, физика — отдельный цикл" },
  { t: "Regulated tech", d: "Медицина, финтех с комплаенсом, госсектор" },
  { t: "Тяжёлый enterprise", d: "Глубокая инфраструктура, интеграции в десятки систем" },
  { t: "Промышленные системы", d: "АСУТП, реальное время, отказоустойчивость" },
];
const TASlide35Limits = () => (
  <TASlideContainer number={35} label="Границы">
    <TAH>Это работает не для любого продукта</TAH>
    <TASub>Где барьер разработки по-прежнему высокий</TASub>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5 max-w-4xl">
      {limits.map((l, i) => (
        <div key={i} className="rounded-md p-4 md:p-5" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <p className="font-heading text-base md:text-xl font-bold mb-1.5" style={{ color: "#0a0a0a" }}>{l.t}</p>
          <p className="font-body text-sm md:text-base" style={{ color: "#52525b" }}>{l.d}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{ color: "#3f3f46" }}>
      Сильнее всего эффект виден в B2B-сервисах, внутренних системах, аналитических инструментах, SaaS, автоматизации и платформах для командной работы.
    </p>
  </TASlideContainer>
);
export default TASlide35Limits;
