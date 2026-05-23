import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide13CustomerDisc = () => (
  <TASlideContainer number={13} label="Customer discovery">
    <TAH>Customer discovery</TAH>
    <TASub>Главный вопрос: кто клиент и как он принимает решения?</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>В B2B важно различать:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-3xl">
      <TALi>Пользователь</TALi>
      <TALi>Покупатель</TALi>
      <TALi>Лицо, принимающее решение</TALi>
      <TALi>Владелец технической реализации</TALi>
      <TALi>Финансовый согласователь</TALi>
      <TALi>Потенциальный противник изменений</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide13CustomerDisc;
