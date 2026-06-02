import { SMSlideContainer, SMKicker, SMTitle, SMP, SMRule } from "./SMSlideContainer";

const SMSlide20EnterpriseSaaS = () => (
  <SMSlideContainer number={20} label="Универсальный лидер">
    <SMKicker>Enterprise SaaS: универсальный лидер</SMKicker>
    <SMTitle>Enterprise SaaS: универсальный лидер</SMTitle>
    <SMP className="text-base md:text-lg">
      Enterprise SaaS занимает 1-е место по интегральному показателю, 3-е место по спросу со стороны инвесторов
      и 1-е место по корпоративному спросу.
    </SMP>
    <SMRule />
    <SMP className="text-base md:text-lg">
      Сила направления связана с прямой применимостью корпоративного ПО, платформ, автоматизации, API, MDM,
      аналитики, интеграций и отраслевых цифровых решений.
    </SMP>
    <SMP className="text-base md:text-lg mb-0">
      Для стартапов в этом сегменте критичны безопасность, интеграции, экономический эффект, поддержка
      пользователей и способность пройти длинный цикл корпоративных продаж.
    </SMP>
  </SMSlideContainer>
);
export default SMSlide20EnterpriseSaaS;
