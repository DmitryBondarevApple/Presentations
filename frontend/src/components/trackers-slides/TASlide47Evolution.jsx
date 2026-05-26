import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const dirs = [
  { n: "01", t: "Исправлять пробелы в сценариях", items: ["Нет редактирования записей", "Не хватает фильтрации", "Нужна валидация форм"] },
  { n: "02", t: "Углублять предметную область", items: ["Расширить карточку препарата", "Добавить протоколы лечения", "Связать симптомы и диагнозы"] },
  { n: "03", t: "Повышать ценность для пользователя", items: ["Расчёт дозировки по массе", "Уведомления о сроках", "Экспорт отчётов"] },
];
const TASlide47Evolution = () => (
  <TASlideContainer number={47} label="Развитие">
    <TAH>После первого релиза работа только начинается</TAH>
    <TASub>Первый рабочий вариант — это отправная точка</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {dirs.map((d, i) => (
        <div key={i} className="rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", borderTop: "3px solid #0a0a0a", border: "1px solid #e5e5e5", borderTopWidth: 3, borderTopColor: "#0a0a0a" }}>
          <span className="font-mono text-xl md:text-2xl font-bold" style={{ color: "#d4d4d8" }}>{d.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-3" style={{ color: "#0a0a0a" }}>{d.t}</p>
          {d.items.map((item, j) => <TALi key={j}>{item}</TALi>)}
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide47Evolution;
