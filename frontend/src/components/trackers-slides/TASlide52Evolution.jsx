import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide49Evolution = () => (
  <TASlideContainer number={52} label="Развитие">
    <TAH>После первого релиза работа только начинается</TAH>
    <TASub>Первый рабочий вариант — это отправная точка</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {[{n:"01",t:"Исправлять пробелы",items:["Нет редактирования","Не хватает фильтрации","Нужна валидация"]},{n:"02",t:"Углублять область",items:["Расширить карточку","Добавить протоколы","Связать симптомы и диагнозы"]},{n:"03",t:"Повышать ценность",items:["Расчёт дозировки","Уведомления","Экспорт отчётов"]}].map((d,i)=>(
        <div key={i} className="rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",borderTop:"3px solid #0a0a0a",border:"1px solid #e5e5e5",borderTopWidth:3,borderTopColor:"#0a0a0a"}}>
          <span className="font-mono text-xl md:text-2xl font-bold" style={{color:"#d4d4d8"}}>{d.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-3" style={{color:"#0a0a0a"}}>{d.t}</p>
          {d.items.map((item,j)=><TALi key={j}>{item}</TALi>)}
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Вопрос трекера: какая из этих доработок реально приближает продукт к оплате, retention или повторяемому использованию?</p>
  </TASlideContainer>
);
export default TASlide49Evolution;
