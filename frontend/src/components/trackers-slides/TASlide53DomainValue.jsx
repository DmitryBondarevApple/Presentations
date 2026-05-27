import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide50DomainValue = () => (
  <TASlideContainer number={53} label="Ценность">
    <TAH>Ценность растёт с погружением в предметную область</TAH>
    <TASub>Польза появляется не от количества полей, а от понимания рабочего контекста клиента</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 items-stretch max-w-4xl">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{color:"#a1a1aa"}}>Было</span>
        <p className="font-heading text-sm md:text-lg font-bold mb-3" style={{color:"#0a0a0a"}}>Карточка лида</p>
        {["Имя","Телефон","Статус"].map((t,i)=>(<div key={i} className="flex items-center gap-2 mb-1.5"><div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:"#d4d4d8"}} /><span className="font-body text-sm md:text-base" style={{color:"#a1a1aa"}}>{t}</span></div>))}
      </div>
      <div className="flex items-center justify-center"><span className="text-xl rotate-90 md:rotate-0" style={{color:"#0a0a0a"}}>→</span></div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{border:"2px solid #0a0a0a"}}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{color:"#0a0a0a"}}>Стало</span>
        <p className="font-heading text-sm md:text-lg font-bold mb-3" style={{color:"#0a0a0a"}}>Карточка лида</p>
        {["Источник обращения","Причина отказа","Тип ошибки менеджера","Следующий шаг","Прогноз конверсии","Рекомендации по действию"].map((t,i)=>(<div key={i} className="flex items-center gap-2 mb-1.5"><div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:"#0a0a0a"}} /><span className="font-body text-xs md:text-base" style={{color:"#3f3f46"}}>{t}</span></div>))}
      </div>
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Чем глубже команда понимает предметную область, тем выше шанс, что сервис станет покупаемым.</p>
  </TASlideContainer>
);
export default TASlide50DomainValue;
