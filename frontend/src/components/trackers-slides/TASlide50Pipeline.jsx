import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide52Pipeline = () => (
  <TASlideContainer number={52} label="Деплой">
    <TAH>Как код выходит в инфраструктуру проекта</TAH>
    <TASub>Простой путь от среды разработки до рабочего продукта</TASub>
    <div className="flex items-center gap-0 max-w-3xl mb-6 md:mb-10">
      {["Emergent","GitHub","Ваш сервер"].map((n,i)=>(
        <div key={i} className="flex items-center">
          <div className="rounded-md px-5 py-4 md:px-8 md:py-6 text-center" style={{border:i===2?"2px solid #0a0a0a":"1px solid #e5e5e5",backgroundColor:i===2?"#fafafa":"#ffffff"}}>
            <p className="font-heading text-base md:text-xl font-bold" style={{color:"#0a0a0a"}}>{n}</p>
          </div>
          {i<2&&(<div className="flex items-center px-2 md:px-4"><div className="w-6 md:w-10 h-px" style={{backgroundColor:"#0a0a0a"}} /><span style={{color:"#0a0a0a"}}>→</span></div>)}
        </div>
      ))}
    </div>
    <div className="rounded-md p-4 md:p-5 max-w-3xl" style={{backgroundColor:"#fafafa",borderLeft:"3px solid #0a0a0a",border:"1px solid #e5e5e5",borderLeftWidth:3,borderLeftColor:"#0a0a0a"}}>
      <p className="font-body text-sm md:text-lg" style={{color:"#3f3f46"}}><span className="font-bold" style={{color:"#0a0a0a"}}>GitHub</span> — это не просто хранилище кода. Для трекера это маркер того, что у команды есть управляемый процесс разработки и переноса изменений между средами.</p>
    </div>
  </TASlideContainer>
);
export default TASlide52Pipeline;
