import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide14MVP = () => (
  <TASlideContainer number={14} label="MVP и валидация">
    <TAH>MVP и validation</TAH>
    <TASub>MVP — это не маленькая версия большой платформы. MVP — это минимальный способ проверить ключевую гипотезу.</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Проверяем не продукт, а поведение клиента:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-3xl">
      <TALi>Зарегистрировался ли сам</TALi>
      <TALi>Загрузил ли данные</TALi>
      <TALi>Вернулся ли снова</TALi>
      <TALi>Подключил ли коллегу</TALi>
      <TALi>Попросил ли счёт</TALi>
      <TALi>Заплатил ли за пилот</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide14MVP;
