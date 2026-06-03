import { TKSlideContainer, TKH2, TKCard, TKBullet, TKCallout } from "./TKSlideContainer";

const focus = [
  "селлеры с командами", "проектные подрядчики и строительные бригады",
  "бухгалтерские и юридические компании", "digital-агентства",
  "ИТ-аутсорсинг", "онлайн-образование и эксперты",
];
const format = [
  "привлечь 100–200 компаний", "за 4–6 недель",
  "50–70 сценариев обработки встреч и 30–50 отраслевых фреймворков",
  "бесплатный тест и доступ с эксклюзивной скидкой для клиентов Точки",
  "сбор обратной связи", "замер экономии времени и повторного использования",
];

const TKSlide19Pilot = () => (
  <TKSlideContainer number={19} label="Предложение по пилоту">
    <TKH2 className="!mb-1.5 sm:!mb-3">Предложение <span className="text-accent">по пилоту</span></TKH2>
    <TKCallout title="Цель пилота" className="mb-2 sm:mb-3 md:mb-4">
      Проверить, насколько Noteall помогает клиентам Точки быстрее превращать встречи, консультации
      и проектные обсуждения в рабочие документы и действия.
    </TKCallout>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-5 mb-2 sm:mb-3 md:mb-4">
      <TKCard>
        <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Фокус пилота</p>
        <div className="space-y-1 sm:space-y-1.5">{focus.map((t, i) => <TKBullet key={i}>{t}</TKBullet>)}</div>
      </TKCard>
      <TKCard accent>
        <p className="font-heading text-sm sm:text-base md:text-lg font-bold text-foreground mb-1.5 md:mb-2">Формат</p>
        <div className="space-y-1 sm:space-y-1.5">{format.map((t, i) => <TKBullet key={i}>{t}</TKBullet>)}</div>
      </TKCard>
    </div>
    <TKCallout title="Результат пилота">
      Понятно, какие сегменты используют сервис чаще всего, какие сценарии дают наибольшую ценность
      и где есть потенциал масштабирования внутри клиентской базы Точки.
    </TKCallout>
  </TKSlideContainer>
);
export default TKSlide19Pilot;
