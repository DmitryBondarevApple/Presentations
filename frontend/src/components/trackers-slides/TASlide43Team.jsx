import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const roles = [
  { n: "01", t: "Бизнес-аналитик", d: "Переводит задачу на язык разработки, определяет архитектуру" },
  { n: "02", t: "Дизайнер", d: "Создаёт интерфейс и отвечает за удобство" },
  { n: "03", t: "Full-stack разработчик", d: "Пишет код, связывает серверную и клиентскую части" },
  { n: "04", t: "Тестировщик", d: "Проверяет сценарии, ищет ошибки" },
  { n: "05", t: "Project-менеджер", d: "Ваш основной собеседник, распределяет задачи" },
];
const TASlide43Team = () => (
  <TASlideContainer number={43} label="Emergent · Команда">
    <TAH>Кто входит в цифровую команду</TAH>
    <TASub>Каждая роль закрывает свой участок работы</TASub>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
      {roles.map((r, i) => (
        <div key={i} className="rounded-md p-3 md:p-5" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-mono text-lg md:text-xl font-bold" style={{ color: "#d4d4d8" }}>{r.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-1" style={{ color: "#0a0a0a" }}>{r.t}</p>
          <p className="font-body text-xs md:text-base" style={{ color: "#52525b" }}>{r.d}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide43Team;
