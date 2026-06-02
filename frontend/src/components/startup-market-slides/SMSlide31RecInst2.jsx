import { SMSlideContainer, SMKicker, SMTitle, SMNumHead, SMLi, SM } from "./SMSlideContainer";

const SMSlide31RecInst2 = () => (
  <SMSlideContainer number={31} label="Рекомендации · Институты развития">
    <SMKicker color={SM.green}>Рекомендации для институтов развития</SMKicker>
    <SMTitle className="!mb-3 md:!mb-4">Программы пилотов и юридико-технологическая готовность</SMTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-5 items-start">
      <div>
        <SMNumHead n="3" accent={SM.green}>Создать программы корпоративных пилотов с чёткими задачами</SMNumHead>
        <p className="text-[11px] md:text-xs leading-snug mb-2" style={{ color: SM.muted }}>
          Эффективность программ зависит от того, начинаются ли они с заранее описанных задач корпораций. Более
          эффективный формат — сначала собрать задачи заказчиков, затем искать решения. Программа должна включать:
        </p>
        <SMLi accent={SM.green}>Перечень задач от корпораций и отраслевых заказчиков;</SMLi>
        <SMLi accent={SM.green}>Требования к зрелости стартапа;</SMLi>
        <SMLi accent={SM.green}>Условия доступа к данным и инфраструктуре;</SMLi>
        <SMLi accent={SM.green}>Типовой паспорт пилота;</SMLi>
        <SMLi accent={SM.green}>Механизм софинансирования;</SMLi>
        <SMLi accent={SM.green}>Порядок оценки результата;</SMLi>
        <SMLi accent={SM.green}>Быстрый маршрут к коммерческому договору;</SMLi>
        <SMLi accent={SM.green}>Публичную аналитику по завершённым пилотам.</SMLi>
      </div>
      <div>
        <SMNumHead n="4" accent={SM.green}>Помогать проходить юридическую и технологическую подготовку</SMNumHead>
        <p className="text-[11px] md:text-xs leading-snug mb-2" style={{ color: SM.muted }}>
          Юридическая неготовность может блокировать сделки даже при наличии рынка. Особенно это важно для AI/ML,
          Industrial, Biotech, Materials, Robotics, Cybersecurity. Приоритетные инструменты:
        </p>
        <SMLi accent={SM.green}>Проверка прав на результаты интеллектуальной деятельности;</SMLi>
        <SMLi accent={SM.green}>Подготовка cap table к сделке;</SMLi>
        <SMLi accent={SM.green}>Юридическая упаковка российской структуры;</SMLi>
        <SMLi accent={SM.green}>Проверка импортозависимости;</SMLi>
        <SMLi accent={SM.green}>Подготовка документов для пилота и комплексной проверки;</SMLi>
        <SMLi accent={SM.green}>Помощь с требованиями информационной безопасности.</SMLi>
      </div>
    </div>
  </SMSlideContainer>
);
export default SMSlide31RecInst2;
