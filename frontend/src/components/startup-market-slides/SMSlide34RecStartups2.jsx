import { SMSlideContainer, SMKicker, SMTitle, SMNumHead, SMLi, SM } from "./SMSlideContainer";

const SMSlide34RecStartups2 = () => (
  <SMSlideContainer number={34} label="Рекомендации · Стартапы">
    <SMKicker color={SM.navy}>Рекомендации для стартапов</SMKicker>
    <SMTitle className="!mb-3 md:!mb-4">Готовность к пилоту и к сделке — до переговоров</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-5 items-start">
      <div>
        <SMNumHead n="3">Не выходить к корпорации без готовности к пилоту</SMNumHead>
        <p className="text-[11px] md:text-xs leading-snug mb-2" style={{ color: SM.muted }}>
          Для корпоративного заказчика недостаточно рассказать о технологии. Нужно показать, как решение будет
          проверено и внедрено. Перед разговором с корпорацией стартап должен подготовить:
        </p>
        <SMLi>Описание конкретной бизнес-задачи;</SMLi>
        <SMLi>Метрики пилота;</SMLi>
        <SMLi>План доступа к данным;</SMLi>
        <SMLi>Техническую схему интеграции;</SMLi>
        <SMLi>Требования к безопасности;</SMLi>
        <SMLi>Смету пилота и внедрения;</SMLi>
        <SMLi>Расчёт экономического эффекта;</SMLi>
        <SMLi>План перехода к промышленной эксплуатации.</SMLi>
      </div>
      <div>
        <SMNumHead n="4">Подготовить юридическую структуру до переговоров о сделке</SMNumHead>
        <p className="text-[11px] md:text-xs leading-snug mb-2" style={{ color: SM.muted }}>
          Слабая юридическая структура может заблокировать сделку на позднем этапе. Заранее привести в порядок:
        </p>
        <SMLi>Российское юридическое лицо или понятную структуру владения;</SMLi>
        <SMLi>Права на результаты интеллектуальной деятельности;</SMLi>
        <SMLi>Договоры с разработчиками и ключевыми сотрудниками;</SMLi>
        <SMLi>Cap table и мотивацию основателей;</SMLi>
        <SMLi>Отсутствие критических обязательств перед одним заказчиком;</SMLi>
        <SMLi>Права на данные, модели, код, патенты или ноу-хау;</SMLi>
        <SMLi>Документы для комплексной проверки.</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide34RecStartups2;
