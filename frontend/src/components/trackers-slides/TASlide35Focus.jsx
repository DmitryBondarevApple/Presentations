import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide35Focus = () => (
  <TASlideContainer number={35} label="Фокус">
    <TAH>Не отдельный ответ, а путь до рабочего сервиса</TAH>
    <TASub>Разница между инструментом и средой разработки</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{color:"#a1a1aa"}}>Обычный ИИ-инструмент</span>
        {["Ответить на вопрос","Сгенерировать текст","Подсказать решение"].map((a,i)=>(<div key={i} className="flex items-center gap-2.5 mb-2"><div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:"#d4d4d8"}} /><span className="font-body text-sm md:text-lg" style={{color:"#71717a"}}>{a}</span></div>))}
      </div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",border:"2px solid #0a0a0a"}}>
        <span className="font-mono text-[10px] md:text-xs tracking-wider uppercase mb-3 block" style={{color:"#0a0a0a"}}>Платформа с ИИ-агентами</span>
        {["Спроектировать архитектуру","Собрать рабочий продукт","Доработать и протестировать"].map((a,i)=>(<div key={i} className="flex items-center gap-2.5 mb-2"><div className="w-1.5 h-1.5 rounded-full" style={{backgroundColor:"#0a0a0a"}} /><span className="font-body text-sm md:text-lg" style={{color:"#0a0a0a"}}>{a}</span></div>))}
      </div>
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Для трекера это критично: в одном случае ускоряется операция, в другом — весь цикл проверки продуктовой гипотезы.</p>
  </TASlideContainer>
);
export default TASlide35Focus;
