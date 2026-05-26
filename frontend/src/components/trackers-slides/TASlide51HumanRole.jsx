const roles = [
  { n: "01", t: "Человек формулирует задачу" },
  { n: "02", t: "Человек определяет ценность для пользователя" },
  { n: "03", t: "Человек решает, что считать хорошим результатом" },
];
const TASlide51HumanRole = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-20 py-10" style={{ backgroundColor: "#ffffff" }}>
    <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-5xl leading-tight mb-6 md:mb-10" style={{ color: "#0a0a0a" }}>
      ИИ ускоряет разработку. Роль человека не исчезает.
    </h1>
    <div className="w-16 h-px mb-6 md:mb-10" style={{ backgroundColor: "#d4d4d8" }} />
    <div className="flex flex-col md:flex-row gap-3 md:gap-6 w-full max-w-4xl mb-6 md:mb-10">
      {roles.map((r, i) => (
        <div key={i} className="flex-1 rounded-md p-4 md:p-6 text-center" style={{ backgroundColor: "#fafafa", border: "1px solid #e5e5e5" }}>
          <span className="font-mono text-xl md:text-2xl font-bold block mb-2" style={{ color: "#d4d4d8" }}>{r.n}</span>
          <p className="font-body text-sm md:text-lg" style={{ color: "#3f3f46" }}>{r.t}</p>
        </div>
      ))}
    </div>
    <p className="font-body text-sm md:text-lg text-center max-w-3xl" style={{ color: "#71717a" }}>
      Не обязательно делать всё руками. Но по-прежнему необходимо понимать — что, для кого и зачем.
    </p>
  </div>
);
export default TASlide51HumanRole;
