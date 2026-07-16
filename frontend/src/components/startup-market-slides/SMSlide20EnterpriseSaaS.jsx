import { SMSlideContainer, SMKicker, SMTitle, SMP, SMCols } from "./SMSlideContainer";

const SMSlide20EnterpriseSaaS = () => (
  <SMSlideContainer number={20} label="Универсальный лидер">
    <SMKicker>Enterprise Solution: универсальный лидер</SMKicker>
    <SMTitle className="!mb-3 md:!mb-4">Enterprise Solution: наиболее сильное и сбалансированное направление</SMTitle>
    <SMCols>
      <div>
        <SMP className="mb-0">
          Enterprise Solution является наиболее сильным и сбалансированным направлением рынка. Его лидерство
          объясняется тем, что корпоративные цифровые решения одновременно интересны инвесторам, крупным
          заказчикам и институтам развития. В качественном анализе этот вывод подтверждается повторяющимся
          интересом к B2B-решениям, корпоративному ПО, ERP, промышленному ПО, API, интеграциям, платформам
          и продуктам с измеримым экономическим эффектом.
        </SMP>
      </div>
      <div>
        <SMP className="mb-0">
          Для стартапов в этом направлении ключевыми требованиями становятся не только продукт и рынок, но
          и готовность к корпоративным продажам: безопасность, интеграции, понятный владелец процесса,
          экономический эффект и способность пройти длинный цикл согласований.
        </SMP>
      </div>
    </SMCols>
  </SMSlideContainer>
);
export default SMSlide20EnterpriseSaaS;
