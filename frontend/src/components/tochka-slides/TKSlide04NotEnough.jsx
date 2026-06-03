import { TKSlideContainer, TKH2, TKLead, TKCard, TKCardTitle, TKBullet, TKCallout } from "./TKSlideContainer";

const ordinary = ["Аудиозапись", "Текстовую расшифровку", "Краткое summary", "Иногда — список задач"];
const needed = [
  "что пообещали клиенту", "что передать команде", "что отправить после встречи",
  "что нужно сделать", "что занести в CRM", "какие документы запросить",
  "какие риски выявлены", "какие требования зафиксированы",
];

const TKSlide04NotEnough = () => (
  <TKSlideContainer number={4} label="Почему недостаточно">
    <TKH2>Почему обычного <span className="text-accent">транскрипта недостаточно</span></TKH2>
    <TKLead>Транскрипт сам по себе редко решает задачу предпринимателя. Ему нужен не просто текст, а понятный следующий шаг.</TKLead>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3 md:gap-5 mb-2 sm:mb-4">
      <TKCard>
        <TKCardTitle className="!text-muted-foreground">Обычные сервисы дают</TKCardTitle>
        <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
          {ordinary.map((t, i) => <TKBullet key={i} muted>{t}</TKBullet>)}
        </div>
      </TKCard>
      <TKCard accent>
        <TKCardTitle className="!text-accent">Предпринимателю нужен следующий шаг</TKCardTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1 sm:gap-y-1.5">
          {needed.map((t, i) => <TKBullet key={i}>{t}</TKBullet>)}
        </div>
      </TKCard>
    </div>
    <TKCallout title="Вывод">
      Рынку нужен инструмент, который превращает разговор в рабочий результат.
    </TKCallout>
  </TKSlideContainer>
);
export default TKSlide04NotEnough;
