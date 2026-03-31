import { EMSlideContainer } from './EMSlideContainer';

const roles = [
  { title: "Бизнес-аналитик", desc: "Переводит задачу на язык разработки, определяет архитектуру и технологии" },
  { title: "Дизайнер", desc: "Создаёт интерфейс и отвечает за удобство взаимодействия с продуктом" },
  { title: "Full-stack разработчик", desc: "Пишет код, связывает серверную и клиентскую части, делает продукт рабочим" },
  { title: "Тестировщик", desc: "Проверяет сценарии, ищет ошибки, возвращает на доработку" },
  { title: "Project-менеджер", desc: "Распределяет задачи, сообщает статус — ваш основной собеседник" },
];

const EMSlide11Team = () => {
  return (
    <EMSlideContainer number={11} label="Emergent · Команда">
      <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold text-foreground mb-1 md:mb-2" data-testid="em-team-title">
        Кто входит в{' '}
        <span className="text-accent">цифровую команду</span>
      </h2>
      <p className="font-body text-sm md:text-xl text-muted-foreground mb-4 md:mb-8">
        Каждая роль закрывает свой участок работы
      </p>

      <div className="flex flex-col lg:flex-row gap-3 md:gap-5 mb-4 md:mb-6 md:flex-1">
        <div className="lg:w-52 flex lg:flex-col items-center justify-center bg-accent/10 rounded-lg border border-accent/20 p-4 md:p-6 shrink-0">
          <span className="font-heading text-lg md:text-2xl font-bold text-accent text-center">
            Ваша идея
          </span>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {roles.map((r, i) => (
            <div key={i} className="bg-card rounded-lg border border-border p-3 md:p-6">
              <div className="w-8 md:w-10 h-8 md:h-10 rounded-md bg-accent/10 flex items-center justify-center mb-2 md:mb-4">
                <span className="font-heading text-sm md:text-lg font-bold text-accent">{String(i + 1).padStart(2, '0')}</span>
              </div>
              <h3 className="font-heading text-sm md:text-xl font-bold text-foreground mb-1 md:mb-2">{r.title}</h3>
              <p className="font-body text-xs md:text-base text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="font-body text-xs md:text-lg text-muted-foreground/70 italic">
        У вас в руках остаётся главное — постановка задачи и направление.
      </p>
    </EMSlideContainer>
  );
};

export default EMSlide11Team;
