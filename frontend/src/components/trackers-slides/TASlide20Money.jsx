import { TASlideContainer, TAH, TASub, TACard, TACardTitle } from './TASlideContainer';
const TASlide20Money = () => (
  <TASlideContainer number={20} label="Деньги">
    <TAH>Burn rate и runway</TAH>
    <TASub>Финансовая подушка стартапа</TASub>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-3xl mb-4 md:mb-8">
      <TACard>
        <TACardTitle>Burn rate</TACardTitle>
        <p className="font-body text-xs sm:text-sm md:text-base" style={{ color: "#52525b" }}>Сколько компания тратит в месяц</p>
      </TACard>
      <TACard>
        <TACardTitle>Runway</TACardTitle>
        <p className="font-body text-xs sm:text-sm md:text-base" style={{ color: "#52525b" }}>На сколько месяцев хватит денег</p>
      </TACard>
    </div>
    <div className="rounded-md p-3 md:p-5 max-w-3xl" style={{ backgroundColor: "#0a0a0a" }}>
      <p className="font-body text-xs sm:text-sm md:text-base" style={{ color: "#fafafa" }}>
        <span className="font-bold">Ключевой вопрос трекера:</span> Если ничего хорошего не произойдёт — сколько месяцев компания проживёт?
      </p>
    </div>
  </TASlideContainer>
);
export default TASlide20Money;
