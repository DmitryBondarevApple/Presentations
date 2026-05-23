import { TASlideContainer, TAH, TACard, TACardTitle, TALi } from './TASlideContainer';
const TASlide07Example = () => (
  <TASlideContainer number={7} label="Пример">
    <TAH>Магазин у дома и ВкусВилл</TAH>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 mt-2 md:mt-4">
      <TACard>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase" style={{ color: "#a1a1aa" }}>Обычный бизнес</span>
        <TACardTitle>Магазин у дома</TACardTitle>
        <TALi>Модель понятна</TALi>
        <TALi>Основные риски: трафик, аренда, ассортимент, персонал</TALi>
        <TALi>Это предпринимательство, но не обязательно стартап</TALi>
      </TACard>
      <TACard className="!border-2" style={{ borderColor: "#0a0a0a" }}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase" style={{ color: "#0a0a0a" }}>Стартап</span>
        <TACardTitle>ВкусВилл (ранняя стадия)</TACardTitle>
        <TALi>Гипотеза собственной марки</TALi>
        <TALi>Доверие к магазину как фильтру качества</TALi>
        <TALi>Частотная потребность</TALi>
        <TALi>Новый сценарий потребления в привычном ритейле</TALi>
      </TACard>
    </div>
  </TASlideContainer>
);
export default TASlide07Example;
