import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { generateOnePagerPdf } from '@/components/NoteAllOnePagerPdf';

/* ── Compact section wrapper ── */
const Sec = ({ title, accent, children, className = '' }) => (
  <div className={`flex flex-col min-w-0 ${className}`}>
    <p className="text-[10px] sm:text-xs md:text-sm font-bold tracking-widest text-accent/70 uppercase mb-1 md:mb-1.5">{accent || title}</p>
    {title !== accent && accent && <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 md:mb-1.5 leading-tight">{title}</h3>}
    {!accent && <div className="mb-1 md:mb-1.5" />}
    <div className="flex-1">{children}</div>
  </div>
);

const Dot = ({ children }) => (
  <div className="flex items-start gap-1 md:gap-1.5">
    <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-accent mt-[5px] md:mt-1.5 shrink-0" />
    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug">{children}</span>
  </div>
);

const Metric = ({ n, label }) => (
  <div className="text-center">
    <span className="text-base sm:text-lg md:text-2xl font-bold text-accent leading-none">{n}</span>
    <p className="text-[9px] sm:text-[10px] md:text-xs text-muted-foreground mt-0.5">{label}</p>
  </div>
);

export default function NoteAllOnePager() {
  const [pdfLoading, setPdfLoading] = useState(false);
  useEffect(() => { document.title = 'Noteall — One Pager'; }, []);

  const handlePdf = useCallback(async () => {
    setPdfLoading(true);
    try { await generateOnePagerPdf(); } catch (e) { console.error(e); }
    setPdfLoading(false);
  }, []);

  return (
    <div className="w-screen h-[100dvh] bg-background text-foreground overflow-hidden flex flex-col" data-testid="onepager">
      {/* ═══ HEADER ═══ */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 md:py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-2 md:gap-3">
          <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/logo-noteall.png`} alt="Noteall" className="h-6 md:h-8" data-testid="op-logo" />
          <div className="hidden sm:block w-px h-6 bg-border" />
          <p className="hidden sm:block text-sm md:text-base font-bold text-foreground">AI-сервис, который превращает встречи и видео в структурированные данные</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[10px] md:text-xs text-accent font-bold tracking-wider uppercase">One Pager</span>
          <Button variant="ghost" size="icon" onClick={handlePdf} disabled={pdfLoading} data-testid="op-pdf-btn"
            className="h-7 w-7 md:h-8 md:w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full">
            {pdfLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

      {/* ═══ GRID ═══ */}
      <div className="flex-1 grid grid-cols-3 grid-rows-3 min-h-0">

        {/* ROW 1: Problem | Solution | Market */}
        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-r border-border">
          <Sec accent="Проблема" title="Информация не превращается в данные">
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug">Команды живут в потоке созвонов, интервью, вебинаров и документов. Ценная информация распределена по десяткам форматов. Бизнесу нужен готовый результат, а не сырые сведения.</p>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-r border-border">
          <Sec accent="Решение" title="Noteall забирает рутинную работу">
            <div className="space-y-1 md:space-y-1.5">
              <Dot>Транскрибация с определением спикеров</Dot>
              <Dot>Сценарный анализ под задачу и роль</Dot>
              <Dot>Работа с видео с любых видеохостингов</Dot>
              <Dot>Документы и ссылки как контекст анализа</Dot>
            </div>
            <p className="text-[10px] md:text-xs text-accent font-semibold mt-1.5 md:mt-2">На выходе — не транскрипт, а рабочий артефакт</p>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-border">
          <Sec accent="Рынок" title="Bottom-up (Россия)">
            <div className="space-y-1 md:space-y-1.5">
              <div className="flex justify-between items-center"><span className="text-[10px] md:text-sm text-muted-foreground">TAM ~1 млн компаний</span><span className="text-sm md:text-base font-bold text-accent">48 млрд ₽</span></div>
              <div className="flex justify-between items-center"><span className="text-[10px] md:text-sm text-muted-foreground">SAM 450K компаний</span><span className="text-sm md:text-base font-bold text-accent">21.6 млрд ₽</span></div>
              <div className="flex justify-between items-center bg-accent/10 -mx-1 px-1"><span className="text-[10px] md:text-sm text-foreground font-semibold">SOM 67.5K компаний</span><span className="text-sm md:text-base font-bold text-accent">3.2 млрд ₽</span></div>
            </div>
            <div className="flex gap-2 mt-1.5 md:mt-2 pt-1.5 md:pt-2 border-t border-border">
              <div><p className="text-[9px] md:text-xs text-muted-foreground">ARPPU/мес.</p><p className="text-sm md:text-base font-bold text-accent">4 000 ₽</p></div>
              <div><p className="text-[9px] md:text-xs text-muted-foreground">ARPPU/год</p><p className="text-sm md:text-base font-bold text-accent">48 000 ₽</p></div>
            </div>
          </Sec>
        </div>

        {/* ROW 2: Biz Model | GTM | Stage */}
        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-r border-border">
          <Sec accent="Бизнес-модель" title="Pay-as-you-go + подписка">
            <div className="space-y-1 md:space-y-1.5 mb-1.5 md:mb-2">
              <div className="bg-card rounded border-l-2 border-l-accent border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-accent font-bold">Сейчас</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Оплата за AI-вызовы, бесплатный старт</p>
              </div>
              <div className="bg-card rounded border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-muted-foreground/70 font-bold">Через 2–3 мес.</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Подписка с включёнными объёмами</p>
              </div>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-r border-border">
          <Sec accent="Go-to-Market" title="Стратегия роста">
            <div className="space-y-1 md:space-y-1.5">
              <div className="bg-card rounded border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-accent font-bold">01 Встроенные механики</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Реферальная + аффилиат-программа</p>
              </div>
              <div className="bg-card rounded border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-accent font-bold">02 Расширение на команды</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Совместные сценарии, общий баланс</p>
              </div>
              <div className="bg-card rounded border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-accent font-bold">03 Точечные B2B-продажи</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Маркетинг, исследования, продукт</p>
              </div>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-border">
          <Sec accent="Текущая стадия" title="Закрытое бета-тестирование">
            <div className="flex gap-2 md:gap-3 mb-1.5 md:mb-2">
              <div className="bg-card rounded border-2 border-accent p-1.5 md:p-2 flex-1 text-center">
                <span className="text-sm sm:text-base md:text-lg font-bold text-accent">13.04.2026</span>
                <p className="text-[9px] md:text-xs text-foreground/80">Запуск</p>
              </div>
              <div className="bg-card rounded border border-border p-1.5 md:p-2 flex-1 text-center">
                <span className="text-sm sm:text-base md:text-lg font-bold text-foreground">AI-first</span>
                <p className="text-[9px] md:text-xs text-muted-foreground">Разработка</p>
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-snug">Сроки внедрения — <span className="text-accent font-semibold">дни вместо месяцев</span> благодаря AI-инструментам</p>
            <p className="text-[10px] md:text-xs text-accent font-semibold mt-1"><span className="text-lg md:text-xl font-bold">10–20x</span> Сокращение расходов на разработку</p>
          </Sec>
        </div>

        {/* ROW 3: Team (2 cols) | Round (1 col) */}
        <div className="bg-background p-2 sm:p-3 md:p-4 col-span-2 overflow-hidden border-r border-border">
          <Sec accent="Команда" title="Дмитрий Бондарев — Основатель">
            <div className="flex gap-2 md:gap-4">
              <img src={`${process.env.PUBLIC_URL || ''}/images/noteall/founder.png`} alt="Дмитрий Бондарев"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg object-cover border border-accent/30 shrink-0" data-testid="op-founder" />
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap gap-1 mb-1">
                  <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] md:text-[10px] font-bold">30+ ЛЕТ В БИЗНЕСЕ</span>
                  <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] md:text-[10px] font-bold">10+ СТАРТАПОВ</span>
                  <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] md:text-[10px] font-bold">4 ВЫХОДА</span>
                  <span className="px-1.5 py-0.5 rounded bg-accent/10 text-accent text-[9px] md:text-[10px] font-bold">25 ЛЕТ В ВЕНЧУРЕ</span>
                </div>
                <p className="text-[10px] md:text-xs text-muted-foreground leading-snug">Опытный предприниматель. Создание продуктов с нуля до сервисов с миллионными аудиториями. Полный стек digital-компетенций.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-3 gap-y-0 mt-1.5 pt-1.5 border-t border-border/50">
              <a href="https://t.me/dmitrybondarev" className="text-[9px] md:text-[10px] text-muted-foreground hover:text-accent">@dmitrybondarev</a>
              <a href="mailto:dmitry.bondarev@gmail.com" className="text-[9px] md:text-[10px] text-muted-foreground hover:text-accent">dmitry.bondarev@gmail.com</a>
              <a href="tel:+79219619644" className="text-[9px] md:text-[10px] text-muted-foreground hover:text-accent">+7 (921) 961-9644</a>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden">
          <Sec accent="Раунд" title="5 млн ₽">
            <p className="text-[10px] md:text-xs text-muted-foreground mb-1 md:mb-1.5">Burn-rate: 500 тыс. ₽/мес.</p>
            <p className="text-[9px] md:text-[10px] text-accent font-bold mb-1">Цели на 6 мес.</p>
            <div className="flex gap-1.5 md:gap-2">
              <Metric n="400K ₽" label="MRR" />
              <Metric n="> 100" label="клиентов" />
              <Metric n="< 3 мес." label="ROAS" />
            </div>
          </Sec>
        </div>
      </div>
    </div>
  );
}
