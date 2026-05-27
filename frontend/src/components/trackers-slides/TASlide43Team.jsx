import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const roles = [
  {n:"01",t:"Бизнес-аналитик, архитектор",d:"Переводит задачу на язык реализации"},
  {n:"02",t:"Дизайнер",d:"Продумывает интерфейс и пользовательский путь"},
  {n:"03",t:"Full-stack разработчик",d:"Собирает рабочий сервис"},
  {n:"04",t:"Тестировщик",d:"Проверяет сценарии и ошибки"},
  {n:"05",t:"Project-менеджер",d:"Остаётся основным собеседником и координирует работу"},
];
const TASlide44Team = () => (
  <TASlideContainer number={44} label="Emergent · Команда">
    <TAH>Кто входит в цифровую команду</TAH>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-4xl">
      {roles.map((r,i)=>(
        <div key={i} className="rounded-md p-3 md:p-5" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
          <span className="font-mono text-lg md:text-xl font-bold" style={{color:"#d4d4d8"}}>{r.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-1" style={{color:"#0a0a0a"}}>{r.t}</p>
          <p className="font-body text-xs md:text-base" style={{color:"#52525b"}}>{r.d}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Для трекера это важно, потому что первая версия продукта может появиться без классической команды разработки.</p>
  </TASlideContainer>
);
export default TASlide44Team;
