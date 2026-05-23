import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide12ProblemDisc = () => (
  <TASlideContainer number={12} label="Problem discovery">
    <TAH>Problem discovery</TAH>
    <TASub>Главный вопрос: есть ли проблема, которую стоит решать?</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Трекер выясняет:</p>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 max-w-4xl">
      <TALi>У кого именно есть боль</TALi>
      <TALi>Как часто проблема возникает</TALi>
      <TALi>Как клиент решает её сейчас</TALi>
      <TALi>Сколько это стоит</TALi>
      <TALi>Что произойдёт, если проблему не решить</TALi>
      <TALi>Есть ли бюджет на решение</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide12ProblemDisc;
