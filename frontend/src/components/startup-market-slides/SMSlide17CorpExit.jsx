import { SMSlideContainer, SMKicker, SMTitle, SMP, SMTableC, SM } from "./SMSlideContainer";

const SMSlide17CorpExit = () => (
  <SMSlideContainer number={18} label="Сценарий коммерциализации">
    <SMKicker color={SM.terra}>Корпоративный выход как отдельный сценарий</SMKicker>
    <SMTitle className="!mb-2 md:!mb-3">Корпоративный выход как самостоятельный сценарий</SMTitle>
    <SMP className="!mb-3">
      Для части российских стартапов корпоративный выход становится самостоятельным сценарием коммерциализации
      и может принимать разные форматы.
    </SMP>
    <SMTableC
      accent={SM.terra}
      headers={["Формат коммерциализации и выхода", "Что происходит", "Для каких компаний релевантно"]}
      rows={[
        ["Коммерческий договор", "Стартап становится поставщиком решения", "Enterprise Solution, Cybersecurity, PropTech, Industrial, FinTech"],
        ["Масштабирование внутри группы", "Решение распространяется на дочерние общества, регионы или бизнес-единицы", "Oil, Gas, Energy, RetailTech, Enterprise Solution, Industrial"],
        ["Стратегическое партнёрство", "Корпорация становится каналом продаж, интегратором или отраслевым партнёром", "B2B, B2G, AI/ML, HealthTech, Industrial"],
        ["CVC-инвестиция", "Корпоративный фонд входит в капитал после проверки стратегической применимости", "Более зрелые B2B-tech компании"],
        ["Покупка технологии или команды", "Корпорация покупает актив, компетенцию или команду", "Cybersecurity, AI/ML, Enterprise Solution, deep tech"],
        ["M&A со стороны отраслевого игрока", "Стартап становится частью корпоративной группы", "Зрелые компании с подтверждённым рынком и стратегической применимостью"],
      ]}
    />
  </SMSlideContainer>
);
export default SMSlide17CorpExit;
