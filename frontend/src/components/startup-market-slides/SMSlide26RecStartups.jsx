import { SMSlideContainer, SMKicker, SMTitle, SMP, SMLi, SMTakeaway, SM } from "./SMSlideContainer";

const SMSlide26RecStartups = () => (
  <SMSlideContainer number={26} label="Рекомендации · Стартапы">
    <SMKicker>Рекомендации для стартапов</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Определить отраслевое направление и тип спроса</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 max-w-6xl mb-1">
      <div>
        <SMP className="mb-0">
          Стартапам нужно одновременно определять своё отраслевое направление и наиболее вероятный тип спроса.
          Для AI/ML, HealthTech, MedTech, Enterprise SaaS и части FinTech может быть релевантна траектория
          венчурного финансирования. Для Cybersecurity, Industrial, Manufacturing, Energy, CleanTech, PropTech,
          ConstructionTech и части Enterprise SaaS особенно важна траектория корпоративных пилотов, внедрений
          и стратегических сделок.
        </SMP>
      </div>
      <div>
        <SMP className="mb-0">
          Главный практический вывод для стартапов: попадание в приоритетное направление не гарантирует интерес
          рынка. Необходимы доказательства зрелости: клиенты, выручка, пилоты, права на технологию, готовность
          к интеграции, экономический эффект и команда, способная пройти длинный цикл продаж или финансирования.
        </SMP>
      </div>
    </div>
    <SMTakeaway>Одна презентация для всех аудиторий снижает вероятность сделки.</SMTakeaway>
  </SMSlideContainer>
);
export default SMSlide26RecStartups;
