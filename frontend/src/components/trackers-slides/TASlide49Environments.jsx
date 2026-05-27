import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide51Environments = () => (
  <TASlideContainer number={51} label="Инфраструктура">
    <TAH>Рабочий прототип и коммерческий продукт — это не одно и то же</TAH>
    <TASub>У любого цифрового сервиса минимум две среды</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{backgroundColor:"#fafafa",border:"1px solid #e5e5e5"}}>
        <p className="font-heading text-lg md:text-2xl font-bold mb-3" style={{color:"#0a0a0a"}}>Development</p>
        <p className="font-body text-xs md:text-sm mb-3" style={{color:"#a1a1aa"}}>Сервер разработки</p>
        <TALi>Тестируют новые функции</TALi><TALi>Можно ломать</TALi><TALi>Промежуточные решения</TALi>
      </div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{border:"2px solid #0a0a0a"}}>
        <p className="font-heading text-lg md:text-2xl font-bold mb-3" style={{color:"#0a0a0a"}}>Production</p>
        <p className="font-body text-xs md:text-sm mb-3" style={{color:"#a1a1aa"}}>Сервер для пользователей</p>
        <TALi>Реальные пользователи</TALi><TALi>Только проверенное</TALi><TALi>Критична стабильность</TALi>
      </div>
    </div>
    <p className="font-body text-sm md:text-base mt-4 font-semibold" style={{color:"#3f3f46"}}>Если команда называет dev-сборку «запуском», трекеру стоит уточнить, что именно уже готово для пользователя.</p>
  </TASlideContainer>
);
export default TASlide51Environments;
