import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide17Danger = () => (
  <TASlideContainer number={17} label="Опасность">
    <TAH>Главная опасность — преждевременное масштабирование</TAH>
    <TASub>Если модель работает — масштабирование усиливает рост. Если модель не работает — масштабирование усиливает убытки.</TASub>
    <p className="font-body text-xs md:text-sm mb-2 md:mb-4" style={{ color: "#71717a" }}>Типичные ошибки:</p>
    <div className="space-y-1.5 md:space-y-3 max-w-4xl">
      <TALi>Нанять отдел продаж до упаковки продаж</TALi>
      <TALi>Запустить маркетинг до подтверждения retention</TALi>
      <TALi>Строить платформу до доказательства ценности, которую можно купить</TALi>
      <TALi>Расширяться по регионам до оптимизации экономики</TALi>
    </div>
  </TASlideContainer>
);
export default TASlide17Danger;
