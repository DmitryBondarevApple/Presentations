import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { generateAX10OnePagerPdf } from '@/components/AX10OnePagerPdf';

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

const Step = ({ num, title }) => (
  <div className="flex items-start gap-1 md:gap-1.5">
    <span className="text-[9px] md:text-[10px] font-bold text-accent/60 shrink-0">{num}</span>
    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug">{title}</span>
  </div>
);

export default function AX10OnePager() {
  const [pdfLoading, setPdfLoading] = useState(false);
  useEffect(() => { document.title = 'AX10 — One Pager'; }, []);

  const handlePdf = useCallback(async () => {
    setPdfLoading(true);
    try { await generateAX10OnePagerPdf(); } catch (e) { console.error(e); }
    setPdfLoading(false);
  }, []);

  return (
    <div className="w-screen h-[100dvh] bg-background text-foreground overflow-hidden flex flex-col"
      style={{ '--accent': '217 91% 60%', '--accent-foreground': '0 0% 100%' }}
      data-testid="ax-onepager">

      {/* HEADER */}
      <div className="flex items-center justify-between px-3 sm:px-4 md:px-6 py-2.5 md:py-3 border-b border-border shrink-0">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img src={`${process.env.PUBLIC_URL || ''}/images/ax10/logo-ax10.png`} alt="AX10" className="h-6 md:h-8 shrink-0" data-testid="ax-op-logo" />
          <div className="hidden sm:block w-px h-6 bg-border shrink-0" />
          <div className="hidden sm:flex flex-col min-w-0">
            <p className="text-sm md:text-base font-bold text-foreground leading-tight">От идеи цифрового сервиса к готовому ТЗ на разработку</p>
            <div className="flex gap-3 mt-0.5">
              <a href="https://t.me/smartfincons" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs text-foreground/60 hover:text-accent">@smartfincons</a>
              <a href="tel:+79009167369" className="text-[10px] md:text-xs text-foreground/60 hover:text-accent">+7 (900) 916-73-69</a>
              <a href="https://ax10.ru" target="_blank" rel="noopener noreferrer" className="text-[10px] md:text-xs text-foreground/60 hover:text-accent">ax10.ru</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span className="text-[10px] md:text-xs text-accent font-bold tracking-wider uppercase">One Pager</span>
          <Button variant="ghost" size="icon" onClick={handlePdf} disabled={pdfLoading} data-testid="ax-op-pdf-btn"
            className="h-7 w-7 md:h-8 md:w-8 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full">
            {pdfLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
          </Button>
        </div>
      </div>

      {/* GRID 3x3 */}
      <div className="flex-1 grid grid-cols-3 grid-rows-3 min-h-0">

        {/* ROW 1: Проблема | Решение | Процесс */}
        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-r border-border">
          <Sec accent="Проблема" title="Запуск на догадках">
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug mb-1 md:mb-1.5">На старте у компании есть идея, но ключевые вопросы без ответа:</p>
            <div className="space-y-0.5 md:space-y-1">
              <Dot>Кто станет ранним пользователем</Dot>
              <Dot>Какие сценарии действительно нужны</Dot>
              <Dot>Какие гипотезы подтверждаются рынком</Dot>
              <Dot>Что именно должно войти в первый релиз</Dot>
            </div>
            <p className="text-[10px] md:text-xs text-accent font-semibold mt-1.5 md:mt-2">Разработка без проверки = месяцы и миллионы впустую</p>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-r border-border">
          <Sec accent="Решение" title="AX10 готовит основу для разработки">
            <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-snug mb-1 md:mb-1.5">Исследовательский и продуктово-аналитический проект. На выходе — пакет для запуска:</p>
            <div className="space-y-0.5 md:space-y-1">
              <Dot>Подтверждённые или опровергнутые гипотезы</Dot>
              <Dot>Приоритетные пользовательские сценарии</Dot>
              <Dot>Портрет раннего пользователя</Dot>
              <Dot>Структура MVP и техническое задание</Dot>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-b border-border">
          <Sec accent="Процесс" title="7 этапов за 7–9 недель">
            <div className="space-y-0.5 md:space-y-1">
              <Step num="01" title="Параметры проекта" />
              <Step num="02" title="Дизайн исследования" />
              <Step num="03" title="Полевой этап (интервью, анкеты)" />
              <Step num="04" title="ИИ-аналитика интервью" />
              <Step num="05" title="Кабинетное исследование рынка" />
              <Step num="06" title="Синтез выводов и сценарии" />
              <Step num="07" title="ТЗ и дорожная карта" />
            </div>
          </Sec>
        </div>

        {/* ROW 2: Данные и ИИ | Результат | Независимое ТЗ */}
        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-r border-border">
          <Sec accent="Данные и ИИ" title="Мультиисточниковая аналитика">
            <div className="space-y-1 md:space-y-1.5 mb-1.5 md:mb-2">
              <div className="bg-card rounded border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-accent font-bold">4 источника данных</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Интервью, рынок, инфраструктура, материалы клиента</p>
              </div>
              <div className="bg-card rounded border-l-2 border-l-accent border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-accent font-bold">ИИ полного цикла</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Транскрипт → Summary → Структура → Выводы</p>
              </div>
            </div>
            <p className="text-[10px] md:text-xs text-muted-foreground leading-snug">Онлайн-дашборд с доступом к материалам на <span className="text-accent font-semibold">3 года</span></p>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-r border-border">
          <Sec accent="Результат" title="Полный пакет для старта">
            <div className="space-y-0.5 md:space-y-1">
              <Dot>База инсайтов из интервью</Dot>
              <Dot>Кабинетное исследование рынка</Dot>
              <Dot>Сводный аналитический документ</Dot>
              <Dot>Карта пользовательских сценариев</Dot>
              <Dot>Портрет раннего пользователя</Dot>
              <Dot>Приоритизированный функционал MVP</Dot>
            </div>
            <div className="bg-card rounded border-2 border-accent p-1.5 md:p-2 mt-1.5 md:mt-2">
              <p className="text-[10px] md:text-xs text-accent font-bold">+ ТЗ и дорожная карта</p>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-border">
          <Sec accent="Свобода выбора" title="ТЗ не привязано к AX10">
            <div className="bg-card rounded border-2 border-accent p-1.5 md:p-2 mb-1.5 md:mb-2 text-center">
              <span className="text-base sm:text-lg md:text-2xl font-bold text-accent leading-none">100%</span>
              <p className="text-[9px] md:text-[10px] text-muted-foreground mt-0.5">материалов у клиента</p>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <Dot>Передайте любой команде разработки</Dot>
              <Dot>Достаточно для оценки сроков и стоимости</Dot>
              <Dot>Не требует консультаций с AX10</Dot>
            </div>
          </Sec>
        </div>

        {/* ROW 3: AI-first разработка | Бизнес-эффект | Команда */}
        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-r border-t border-border mt-[8px]">
          <Sec accent="AI-first разработка" title="Опциональный следующий шаг">
            <div className="flex gap-1.5 md:gap-2 mb-1.5 md:mb-2">
              <div className="bg-card rounded border-2 border-accent p-1.5 md:p-2 flex-1 text-center">
                <span className="text-sm sm:text-base md:text-lg font-bold text-accent">5-6x</span>
                <p className="text-[9px] md:text-[10px] text-muted-foreground">дешевле</p>
              </div>
              <div className="bg-card rounded border-2 border-accent p-1.5 md:p-2 flex-1 text-center">
                <span className="text-sm sm:text-base md:text-lg font-bold text-accent">10x+</span>
                <p className="text-[9px] md:text-[10px] text-muted-foreground">быстрее</p>
              </div>
            </div>
            <div className="space-y-0.5 md:space-y-1">
              <Dot>Читаемый, структурированный код</Dot>
              <Dot>Полная документация</Dot>
              <Dot>Свобода смены исполнителя</Dot>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-r border-t border-border mt-[8px]">
          <Sec accent="Бизнес-эффект" title="Управляемый путь к запуску">
            <div className="space-y-1 md:space-y-1.5">
              <div className="bg-card rounded border-l-2 border-l-accent border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-foreground font-bold">Снижение риска</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Первый релиз на данных, а не догадках</p>
              </div>
              <div className="bg-card rounded border-l-2 border-l-accent border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-foreground font-bold">Экономия бюджета</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Инвестиции только в подтверждённое</p>
              </div>
              <div className="bg-card rounded border-l-2 border-l-accent border border-border p-1.5 md:p-2">
                <p className="text-[10px] md:text-xs text-foreground font-bold">Ускорение запуска</p>
                <p className="text-[10px] md:text-xs text-muted-foreground">Готовое ТЗ сокращает планирование</p>
              </div>
            </div>
          </Sec>
        </div>

        <div className="bg-background p-2 sm:p-3 md:p-4 overflow-hidden border-t border-border mt-[8px]">
          <Sec accent="Команда" title="AX10">
            <div className="space-y-0.5 md:space-y-1 mb-1.5 md:mb-2">
              <div className="flex justify-between"><span className="text-[10px] md:text-xs text-foreground font-semibold">С. Мартюшев</span><span className="text-[10px] md:text-xs text-accent">Финансы, 20+ лет</span></div>
              <div className="flex justify-between"><span className="text-[10px] md:text-xs text-foreground font-semibold">С. Бобылев</span><span className="text-[10px] md:text-xs text-accent">Продажи, 7+ лет</span></div>
              <div className="flex justify-between"><span className="text-[10px] md:text-xs text-foreground font-semibold">Д. Бондарев</span><span className="text-[10px] md:text-xs text-accent">Разработка, 30+ лет</span></div>
              <div className="flex justify-between"><span className="text-[10px] md:text-xs text-foreground font-semibold">С. Томилов</span><span className="text-[10px] md:text-xs text-accent">PR, 7+ лет</span></div>
            </div>
            <div className="bg-card rounded border-2 border-accent p-1.5 md:p-2 text-center">
              <p className="text-[10px] md:text-xs text-accent font-bold">Диагностическая сессия</p>
              <p className="text-[9px] md:text-[10px] text-muted-foreground">Бесплатная аналитика на первом звонке</p>
            </div>
          </Sec>
        </div>

      </div>
    </div>
  );
}
