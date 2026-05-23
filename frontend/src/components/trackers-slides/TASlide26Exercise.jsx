import { TASlideContainer, TAH, TASub, TALi, TABadge } from './TASlideContainer';
const TASlide26Exercise = () => (
  <TASlideContainer number={26} label="Практика">
    <TAH>Практическое упражнение</TAH>
    <TASub>Кейс для разбора</TASub>
    <div className="rounded-md p-4 md:p-6 max-w-4xl mb-3 md:mb-6" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
      <p className="font-body text-xs sm:text-sm md:text-base leading-relaxed" style={{ color: "#3f3f46" }}>
        Команда разрабатывает AI-сервис для автоматического анализа клиентских звонков в сервисных компаниях.
      </p>
    </div>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>У них есть:</p>
    <div className="space-y-1 md:space-y-2 max-w-3xl mb-4 md:mb-6">
      <TALi>20 интервью</TALi>
      <TALi>3 пилота</TALi>
      <TALi>Один клиент готов платить после интеграции с CRM</TALi>
    </div>
    <div className="flex items-center gap-3">
      <TABadge>Запрос команды</TABadge>
      <p className="font-body text-xs sm:text-sm md:text-base" style={{ color: "#52525b" }}>Инвестиции на полную платформу и найм отдела продаж</p>
    </div>
  </TASlideContainer>
);
export default TASlide26Exercise;
