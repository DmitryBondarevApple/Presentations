import { TASlideContainer, TAH, TALi } from './TASlideContainer';
const TASlide53NewRisks = () => (
  <TASlideContainer number={50} label="Новые риски">
    <TAH>Новые риски AI-разработки</TAH>
    <div className="space-y-1 md:space-y-2 mt-2 md:mt-4 max-w-4xl">
      <TALi>Красивый прототип не равен готовности платить</TALi>
      <TALi>Команда может ускорять код быстрее, чем discovery</TALi>
      <TALi>Снаружи это может выглядеть как SaaS, а внутри быть ручным трудом</TALi>
      <TALi>Без документации теряется память проекта</TALi>
      <TALi>Без production и deployment «запуск» остаётся условным</TALi>
    </div>
    <div className="rounded-md p-3 md:p-5 mt-4 md:mt-6 max-w-4xl" style={{ backgroundColor: "#0a0a0a" }}>
      <p className="font-body text-sm md:text-base" style={{ color: "#fafafa" }}>
        Для трекера это не технические детали, а часть общей диагностики зрелости продукта.
      </p>
    </div>
  </TASlideContainer>
);
export default TASlide53NewRisks;
