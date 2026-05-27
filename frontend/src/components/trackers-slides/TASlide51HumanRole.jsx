const roles = [
  { n: "01", t: "Трекер возвращает команду к стадии" },
  { n: "02", t: "Трекер отделяет скорость сборки от реального спроса" },
  { n: "03", t: "Трекер помогает выбрать следующий проверяемый шаг" },
];
const TASlide51HumanRole = () => (
  <div className="w-full h-full flex flex-col justify-center items-center px-6 md:px-20 py-10" style={{ backgroundColor: "#ffffff" }}>
    <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-center max-w-5xl leading-tight mb-6 md:mb-10" style={{ color: "#0a0a0a" }}>
      ИИ ускоряет разработку. Роль трекера не исчезает.
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
      Когда делать стало проще, особенно важно понимать, что именно стоит делать сейчас, для кого и ради какого проверяемого результата.
    </p>
  </div>
);
export default TASlide51HumanRole;
