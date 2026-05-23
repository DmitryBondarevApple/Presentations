import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide24Failures = () => (
  <TASlideContainer number={24} label="Общее в провалах">
    <TAH>Что объединяет провалы</TAH>
    <TASub>Типичные причины</TASub>
    <div className="space-y-1.5 md:space-y-3 max-w-4xl">
      <TALi>Масштабирование до доказательства экономики</TALi>
      <TALi>Рост оборота без устойчивой маржи</TALi>
      <TALi>Зависимость от капитала и скидок</TALi>
      <TALi>Недооценка операционной сложности</TALi>
      <TALi>Слабое корпоративное управление</TALi>
      <TALi>Подмена спроса красивой историей</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide24Failures;
