import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide15PMF = () => (
  <TASlideContainer number={15} label="Product-market fit">
    <TAH>Product-market fit</TAH>
    <TASub>PMF — это когда рынок начинает тянуть продукт</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Признаки:</p>
    <div className="space-y-1.5 md:space-y-3 max-w-3xl">
      <TALi>Клиенты покупают по похожей причине</TALi>
      <TALi>Возражения повторяются</TALi>
      <TALi>Продажи становятся понятнее</TALi>
      <TALi>Пользователи возвращаются</TALi>
      <TALi>Появляются продления и рекомендации</TALi>
      <TALi>Команда обслуживает спрос, а не придумывает его</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide15PMF;
