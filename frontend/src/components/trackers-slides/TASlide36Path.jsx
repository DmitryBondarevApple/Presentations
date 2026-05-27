import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const before = ["Идея","Команда","Разработка","Тесты","Запуск"];
const after = ["Идея","ИИ-агенты","Продукт"];
const TASlide36Path = () => (
  <TASlideContainer number={36} label="Сдвиг">
    <TAH>Для многих ИТ-сервисов путь стал короче в разы</TAH>
    <TASub>Барьер между идеей и первым рабочим прототипом стал ниже</TASub>
    <div className="space-y-3 md:space-y-5 max-w-4xl">
      <div className="rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{color:"#a1a1aa"}}>Раньше · месяцы</span>
        <div className="flex items-center gap-2 md:gap-3 flex-wrap">
          {before.map((s,i)=>(<div key={i} className="flex items-center gap-2 md:gap-3"><span className="font-body text-sm md:text-lg px-3 py-1.5 rounded" style={{backgroundColor:"#f0f0f0",color:"#71717a"}}>{s}</span>{i<before.length-1&&<span style={{color:"#d4d4d8"}} className="text-lg">→</span>}</div>))}
        </div>
      </div>
      <div className="rounded-md p-4 md:p-6" style={{border:"2px solid #0a0a0a"}}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{color:"#0a0a0a"}}>Сейчас · часы или дни</span>
        <div className="flex items-center gap-3 md:gap-5 flex-wrap">
          {after.map((s,i)=>(<div key={i} className="flex items-center gap-3 md:gap-5"><span className="font-body text-sm md:text-xl font-semibold px-4 py-2 rounded" style={{backgroundColor:"#0a0a0a",color:"#ffffff"}}>{s}</span>{i<after.length-1&&<span style={{color:"#0a0a0a"}} className="text-xl">→</span>}</div>))}
        </div>
      </div>
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Это не отменяет проверку спроса. Это снижает стоимость первой проверки.</p>
  </TASlideContainer>
);
export default TASlide36Path;
