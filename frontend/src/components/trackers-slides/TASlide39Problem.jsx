import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide40Problem = () => (
  <TASlideContainer number={40} label="Шаг 2 · Пользователь">
    <TAH>Продукт нужен не потому, что идея интересная</TAH>
    <TASub>А потому что у клиента есть реальная и желательно оплачиваемая задача</TASub>
    <div className="grid grid-cols-2 gap-3 md:gap-5 max-w-4xl">
      {[{n:"01",q:"У кого эта проблема есть?",h:"Целевая аудитория"},{n:"02",q:"В чём она проявляется?",h:"Конкретные ситуации"},{n:"03",q:"Как решают сейчас?",h:"Альтернативы и конкуренты"},{n:"04",q:"Почему не устраивает?",h:"Что можно улучшить"}].map((q,i)=>(
        <div key={i} className="rounded-md p-4 md:p-5" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
          <span className="font-mono text-lg md:text-xl font-bold" style={{color:"#d4d4d8"}}>{q.n}</span>
          <p className="font-heading text-sm md:text-lg font-bold mt-1 mb-1" style={{color:"#0a0a0a"}}>{q.q}</p>
          <p className="font-body text-xs md:text-base" style={{color:"#52525b"}}>{q.h}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>ИИ ускоряет сборку решения, но не создаёт боль там, где её нет.</p>
  </TASlideContainer>
);
export default TASlide40Problem;
