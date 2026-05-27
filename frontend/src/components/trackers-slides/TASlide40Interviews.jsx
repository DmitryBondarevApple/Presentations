import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide40Interviews = () => (
  <TASlideContainer number={40} label="Исследование">
    <TAH>ИИ ускоряет анализ интервью, но не заменяет сами интервью</TAH>
    <TASub>Где AI реально помогает, а где появляется типичная подмена</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 max-w-4xl">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{ color: "#a1a1aa" }}>Что ИИ делает хорошо</span>
        <TALi>Разбирает повторяющиеся паттерны и боли</TALi>
        <TALi>Выделяет роли в принятии решения</TALi>
        <TALi>Собирает возражения и альтернативы</TALi>
        <TALi>Формулирует JTBD и сценарии использования</TALi>
      </div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ border: "2px solid #0a0a0a" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{ color: "#0a0a0a" }}>Что ИИ НЕ умеет</span>
        <TALi>Сходить в рынок вместо команды</TALi>
        <TALi>Получить настоящий клиентский материал</TALi>
        <TALi>Заменить наблюдение и реальный разговор</TALi>
        <TALi>Создать данные там, где их нет</TALi>
      </div>
    </div>
    <div className="rounded-md p-3 md:p-5 mt-4 max-w-4xl" style={{ backgroundColor: "#0a0a0a" }}>
      <p className="font-body text-sm md:text-base" style={{ color: "#fafafa" }}>
        Вопрос трекера: у вас есть реальный материал — или ИИ красиво структурирует фантазию?
      </p>
    </div>
  </TASlideContainer>
);
export default TASlide40Interviews;
