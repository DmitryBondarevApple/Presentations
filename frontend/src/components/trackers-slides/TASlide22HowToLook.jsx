import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide22HowToLook = () => (
  <TASlideContainer number={22} label="Анализ кейсов">
    <TAH>Как смотреть на успешные кейсы</TAH>
    <TASub>Не спрашивайте «Почему они стали большими?»</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Спрашивайте:</p>
    <div className="space-y-1.5 md:space-y-3 max-w-3xl">
      <TALi>Какую гипотезу тестировали?</TALi>
      <TALi>Какой сегмент первым сгенерировал спрос?</TALi>
      <TALi>Какой канал сработал?</TALi>
      <TALi>Что обеспечило повторяемость?</TALi>
      <TALi>Что позволило масштабировать?</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide22HowToLook;
