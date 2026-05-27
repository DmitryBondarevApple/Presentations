import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const steps = [
  {n:"01",r:"Вы",t:"Формулируете изменение",h:"«Нужно редактирование»"},
  {n:"02",r:"PM",t:"Интерпретирует задачу",h:"Анализирует структуру"},
  {n:"03",r:"Dev",t:"Вносят изменения",h:"UI + backend"},
  {n:"04",r:"QA",t:"Проверяет результат",h:"Тесты"},
  {n:"05",r:"Вы",t:"Оцениваете: ближе к ценности?",h:"Стало ли ближе к ценности для клиента?"},
];
const TASlide48Iteration = () => (
  <TASlideContainer number={51} label="Процесс">
    <TAH>Как проходит одна продуктовая итерация</TAH>
    <TASub>Вы ставите задачу и проверяете, уменьшила ли итерация неопределённость</TASub>
    <div className="flex flex-col md:flex-row gap-2 md:gap-3 max-w-4xl">
      {steps.map((s,i)=>(
        <div key={i} className="flex-1 rounded-md p-3 md:p-4" style={{backgroundColor:s.r==="Вы"?"#0a0a0a":"#fafafa",border:s.r==="Вы"?"none":"1px solid #e5e5e5"}}>
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-sm md:text-lg font-bold" style={{color:s.r==="Вы"?"#52525b":"#d4d4d8"}}>{s.n}</span>
            <span className="font-mono text-[9px] md:text-[11px] tracking-wider uppercase" style={{color:s.r==="Вы"?"#ffffff":"#a1a1aa"}}>{s.r}</span>
          </div>
          <p className="font-heading text-xs md:text-base font-bold mb-0.5" style={{color:s.r==="Вы"?"#ffffff":"#0a0a0a"}}>{s.t}</p>
          <p className="font-body text-[10px] md:text-sm" style={{color:s.r==="Вы"?"#a1a1aa":"#71717a"}}>{s.h}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide48Iteration;
