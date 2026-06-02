import { SMSlideContainer, SMKicker, SMTitle, SMCard, SMCardTitle, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide02Conclusion = () => (
  <SMSlideContainer number={2} label="Главный вывод">
    <SMKicker>Главный вывод исследования</SMKicker>
    <SMTitle>Рынок развивается как система нескольких видов спроса</SMTitle>
    <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mb-4 md:mb-6" style={{ color: SM.body }}>
      В одних направлениях ключевую роль играет спрос со стороны инвесторов, в других — корпоративные заказчики,
      в третьих — институты развития, отраслевые программы, пилоты и стратегические партнёрства.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
      <SMCard accent={SM.navy}>
        <SMCardTitle>Инвесторы</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Оценивают потенциал роста и возврата инвестиций</p>
      </SMCard>
      <SMCard accent={SM.green}>
        <SMCardTitle>Корпорации</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Оценивают применимость решения к задачам бизнеса</p>
      </SMCard>
      <SMCard accent={SM.terra}>
        <SMCardTitle>Институты развития</SMCardTitle>
        <p className="text-sm md:text-base leading-snug" style={{ color: SM.body }}>Оценивают технологическую значимость, локализацию и вклад в экономику</p>
      </SMCard>
    </div>
    <SMTakeaway label="Следствие">
      Привлекательность стартапа определяется не только отраслью, но и зрелостью продукта, доказанным спросом,
      юридической структурой, правами на технологию, готовностью к внедрению и понятным сценарием роста или выхода.
    </SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide02Conclusion;
