import { TASlideContainer, TAH, TALi } from './TASlideContainer';
const TASlide37TrackerShift = () => (
  <TASlideContainer number={36} label="Новая реальность">
    <TAH>Что именно меняется для трекера</TAH>
    <div className="space-y-1 md:space-y-2 mt-2 md:mt-4 max-w-4xl">
      <TALi>Первую версию сервиса можно собрать быстрее</TALi>
      <TALi>Технический прогресс всё чаще обгоняет рыночную проверку</TALi>
      <TALi>Командам легче начать делать, но легче и начать делать лишнее</TALi>
      <TALi>Теперь нужно различать: итерация снижает техническую неопределённость или рыночную</TALi>
    </div>
    <div className="rounded-md p-3 md:p-5 mt-4 md:mt-6 max-w-4xl" style={{backgroundColor:"#0a0a0a"}}>
      <p className="font-body text-sm md:text-base" style={{color:"#fafafa"}}>Главная новая опасность — автоматизировать хаос быстрее, чем подтверждается ценность.</p>
    </div>
  </TASlideContainer>
);
export default TASlide37TrackerShift;
