import { TASlideContainer, TAH, TASub } from './TASlideContainer';
const TASlide38Map = () => (
  <TASlideContainer number={38} label="Маршрут">
    <TAH>Три шага к коммерческому ИТ-сервису</TAH>
    <TASub>Каждый шаг создаёт основу для следующего</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {[{n:"01",t:"Сформулировать идею",d:"Точно сказать, что вы делаете, для кого и зачем"},{n:"02",t:"Понять проблему пользователя",d:"У кого болит, как болит и почему текущие решения не устраивают"},{n:"03",t:"Превратить в требования",d:"Перевести потребности в набор функций и критериев ценности"}].map((s,i)=>(
        <div key={i} className="rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",borderLeft:"3px solid #0a0a0a",border:"1px solid #e5e5e5",borderLeftWidth:3,borderLeftColor:"#0a0a0a"}}>
          <span className="font-mono text-lg md:text-2xl font-bold" style={{color:"#d4d4d8"}}>{s.n}</span>
          <p className="font-heading text-base md:text-xl font-bold mt-1 mb-2" style={{color:"#0a0a0a"}}>{s.t}</p>
          <p className="font-body text-sm md:text-base" style={{color:"#52525b"}}>{s.d}</p>
        </div>
      ))}
    </div>
  </TASlideContainer>
);
export default TASlide38Map;
