import { SMSlideContainer, SMKicker, SMTitle, SMP, SMRule, SM } from "./SMSlideContainer";

const SMSlide02Conclusion = () => (
  <SMSlideContainer number={2} label="Главный вывод">
    <SMKicker>Главный вывод исследования</SMKicker>
    <SMTitle>Российский рынок стартапов развивается как система нескольких видов спроса</SMTitle>
    <SMRule />
    <SMP className="text-base md:text-xl">
      В одних направлениях ключевую роль играет спрос со стороны инвесторов, в других — корпоративные заказчики,
      в третьих — институты развития, отраслевые программы, пилоты и стратегические партнёрства.
    </SMP>
    <SMP className="text-base md:text-xl">
      Поэтому привлекательность стартапа определяется не только отраслью, но и зрелостью продукта, доказанным
      спросом, юридической структурой, правами на технологию, готовностью к внедрению и понятным сценарием
      роста или выхода.
    </SMP>
  </SMSlideContainer>
);
export default SMSlide02Conclusion;
