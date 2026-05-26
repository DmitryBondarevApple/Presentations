import { TASlideContainer, TAH, TASub, TALi } from './TASlideContainer';
const TASlide49Environments = () => (
  <TASlideContainer number={49} label="Инфраструктура">
    <TAH>Разработка и рабочий продукт — это не одно и то же</TAH>
    <TASub>У любого реального продукта есть как минимум две среды</TASub>
    <div className="flex flex-col md:flex-row gap-3 md:gap-6">
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
        <p className="font-heading text-lg md:text-2xl font-bold mb-3" style={{ color: "#0a0a0a" }}>Development</p>
        <p className="font-body text-xs md:text-sm mb-3" style={{ color: "#a1a1aa" }}>Сервер разработки</p>
        <TALi>Здесь тестируют новые функции</TALi>
        <TALi>Здесь можно ломать и экспериментировать</TALi>
        <TALi>Здесь живут промежуточные решения</TALi>
      </div>
      <div className="flex-1 rounded-md p-4 md:p-6" style={{ border: "2px solid #0a0a0a" }}>
        <p className="font-heading text-lg md:text-2xl font-bold mb-3" style={{ color: "#0a0a0a" }}>Production</p>
        <p className="font-body text-xs md:text-sm mb-3" style={{ color: "#a1a1aa" }}>Сервер для пользователей</p>
        <TALi>Здесь работают реальные пользователи</TALi>
        <TALi>Сюда попадает только проверенное</TALi>
        <TALi>Здесь критична стабильность</TALi>
      </div>
    </div>
  </TASlideContainer>
);
export default TASlide49Environments;
