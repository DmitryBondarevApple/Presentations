import { TASlideContainer, TAH, TASub, TACard, TABadge } from './TASlideContainer';
const TASlide34Known = () => (
  <TASlideContainer number={36} label="Контекст">
    <TAH>Вы уже знаете ИИ как отдельные сервисы</TAH>
    <TASub>Сегодня посмотрим на ИИ как на среду сборки продукта</TASub>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5">
      {[{t:"Чат и поиск",items:["GigaChat","ChatGPT","Perplexity","Алиса"]},{t:"Генерация",items:["Midjourney","DALL-E","Suno","NotebookLM"]},{t:"Инструменты для кода",items:["Cursor","Claude Code","Codex"]}].map((c,i)=>(
        <TACard key={i}>
          <TABadge>{c.t}</TABadge>
          <div className="space-y-1.5 md:space-y-2 mt-3">
            {c.items.map((item,j)=>(<div key={j} className="rounded px-3 py-2" style={{backgroundColor:"#f0f0f0"}}><span className="font-body text-sm md:text-base" style={{color:"#3f3f46"}}>{item}</span></div>))}
          </div>
        </TACard>
      ))}
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Для трекера важно различать: отдельный ИИ-сервис помогает на одном шаге, агентская среда помогает пройти путь до рабочего сервиса.</p>
  </TASlideContainer>
);
export default TASlide34Known;
