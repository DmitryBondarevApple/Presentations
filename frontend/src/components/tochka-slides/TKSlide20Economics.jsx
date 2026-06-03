import { TKSlideContainer, TKH2, TKLead } from "./TKSlideContainer";

const rows = [
  ["селлеры с командами", "100 000", "2%", "2 000", "15 000 ₽", "15 млн ₽"],
  ["проектные подрядчики, стройбригады", "50 000", "1%", "500", "8 000 ₽", "2 млн ₽"],
  ["бухгалтерские и юридические компании", "25 000", "3%", "750", "10 000 ₽", "3,25 млн ₽"],
  ["digital-агентства", "15 000", "5%", "750", "15 000 ₽", "5,63 млн ₽"],
  ["ИТ-аутсорсинг", "10 000", "8%", "800", "15 000 ₽", "6 млн ₽"],
  ["онлайн-образование и эксперты", "10 000", "5%", "500", "10 000 ₽", "2,5 млн ₽"],
  ["прочие клиенты", "250 000", "0,5%", "1 250", "5 000 ₽", "3,13 млн ₽"],
];

const Cell = ({ children, flex, head, strong, right }) => (
  <div className={`${flex} px-1.5 sm:px-2.5 md:px-3 py-1 sm:py-1.5 md:py-2 ${right ? "text-right" : "text-left"} ${head ? "font-heading text-[8px] sm:text-[10px] md:text-xs font-bold text-accent uppercase tracking-tight leading-tight" : `font-body text-[9px] sm:text-[11px] md:text-sm leading-tight ${strong ? "text-foreground font-semibold" : "text-muted-foreground"}`}`}>
    {children}
  </div>
);

const FL = ["flex-[2.3]", "flex-1", "flex-[0.8]", "flex-1", "flex-1", "flex-[1.3]"];

const TKSlide20Economics = () => (
  <TKSlideContainer number={20} label="Экономика сотрудничества">
    <TKH2 className="!mb-1 sm:!mb-2">Оценка возможного <span className="text-accent">экономического эффекта</span></TKH2>
    <TKLead className="!mb-1.5 sm:!mb-3 !text-[11px] sm:!text-sm md:!text-base">Доход банка рассчитан как 50% revenue share от выручки Noteall.</TKLead>

    <div className="rounded-lg border border-border overflow-hidden">
      <div className="flex bg-accent/10 border-b border-border items-stretch">
        <Cell flex={FL[0]} head>Тип клиента</Cell>
        <Cell flex={FL[1]} head right>База</Cell>
        <Cell flex={FL[2]} head right>Конв.</Cell>
        <Cell flex={FL[3]} head right>Клиентов</Cell>
        <Cell flex={FL[4]} head right>ARPU / мес</Cell>
        <Cell flex={FL[5]} head right>Доход банка / мес</Cell>
      </div>
      {rows.map((r, i) => (
        <div key={i} className={`flex items-stretch ${i % 2 ? "bg-card/40" : "bg-card/70"} border-b border-border`}>
          <Cell flex={FL[0]} strong>{r[0]}</Cell>
          <Cell flex={FL[1]} right>{r[1]}</Cell>
          <Cell flex={FL[2]} right>{r[2]}</Cell>
          <Cell flex={FL[3]} right>{r[3]}</Cell>
          <Cell flex={FL[4]} right>{r[4]}</Cell>
          <Cell flex={FL[5]} right strong>{r[5]}</Cell>
        </div>
      ))}
    </div>

    <div className="mt-2 sm:mt-3 md:mt-4 grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
      <div className="bg-accent/10 border border-accent/40 rounded-lg px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between" data-testid="tk-total-month">
        <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Итого в месяц</span>
        <span className="font-heading text-base sm:text-2xl md:text-3xl font-bold text-accent">37,51 млн ₽</span>
      </div>
      <div className="bg-accent/10 border border-accent/40 rounded-lg px-3 sm:px-5 py-2 sm:py-3 flex items-center justify-between" data-testid="tk-total-year">
        <span className="font-body text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-wide">Итого в год</span>
        <span className="font-heading text-base sm:text-2xl md:text-3xl font-bold text-accent">450,1 млн ₽</span>
      </div>
    </div>
  </TKSlideContainer>
);
export default TKSlide20Economics;
