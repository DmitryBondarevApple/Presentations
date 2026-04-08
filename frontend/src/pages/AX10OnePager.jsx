import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { generateAX10OnePagerPdf } from '@/components/AX10OnePagerPdf';

const Lbl = ({ children }) => (
  <p className="text-[9px] md:text-[10px] font-bold tracking-[0.15em] text-accent/70 uppercase mb-0.5 md:mb-1">{children}</p>
);
const Ttl = ({ children }) => (
  <h3 className="text-xs md:text-sm font-bold text-foreground mb-0.5 md:mb-1 leading-tight">{children}</h3>
);
const Dot = ({ children }) => (
  <div className="flex items-start gap-1">
    <div className="w-1 h-1 rounded-full bg-accent mt-[4px] shrink-0" />
    <span className="text-[9px] md:text-[11px] text-muted-foreground leading-snug">{children}</span>
  </div>
);
const Step = ({ num, title }) => (
  <div className="flex items-start gap-1">
    <span className="text-[8px] md:text-[9px] font-bold text-accent/60 shrink-0 w-3">{num}</span>
    <span className="text-[9px] md:text-[11px] text-muted-foreground leading-snug">{title}</span>
  </div>
);
const Mini = ({ children, accent, className = '' }) => (
  <div className={`bg-card rounded border ${accent ? 'border-accent' : 'border-border'} p-1 md:p-1.5 ${className}`}>{children}</div>
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
      <div className="flex items-center justify-between px-3 md:px-5 py-1.5 md:py-2 border-b border-border shrink-0">
        <div className="flex items-center gap-2 min-w-0">
          <img src={`${process.env.PUBLIC_URL || ''}/images/ax10/logo-ax10.png`} alt="AX10" className="h-5 md:h-7 shrink-0" data-testid="ax-op-logo" />
          <div className="hidden sm:block w-px h-5 bg-border shrink-0" />
          <div className="hidden sm:flex flex-col min-w-0">
            <p className="text-xs md:text-sm font-bold text-foreground leading-tight">От идеи цифрового сервиса к готовому ТЗ на разработку</p>
            <div className="flex gap-3">
              <a href="https://t.me/smartfincons" target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[11px] text-foreground/60 hover:text-accent">@smartfincons</a>
              <a href="tel:+79009167369" className="text-[9px] md:text-[11px] text-foreground/60 hover:text-accent">+7 (900) 916-73-69</a>
              <a href="https://ax10.ru" target="_blank" rel="noopener noreferrer" className="text-[9px] md:text-[11px] text-foreground/60 hover:text-accent">ax10.ru</a>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="text-[9px] md:text-[10px] text-accent font-bold tracking-wider uppercase">One Pager</span>
          <Button variant="ghost" size="icon" onClick={handlePdf} disabled={pdfLoading} data-testid="ax-op-pdf-btn"
            className="h-6 w-6 md:h-7 md:w-7 text-foreground/50 hover:text-foreground hover:bg-foreground/10 rounded-full">
            {pdfLoading ? <Loader2 className="h-3 w-3 animate-spin" /> : <Download className="h-3 w-3" />}
          </Button>
        </div>
      </div>

      {/* GRID 3x3 */}
      <div className="flex-1 grid grid-cols-3 grid-rows-3 min-h-0">

        {/* R1: Проблема | Решение | Процесс */}
        <div className="p-1.5 md:p-2.5 border-b border-r border-border flex flex-col">
          <Lbl>Проблема</Lbl>
          <Ttl>Запуск на догадках</Ttl>
          <p className="text-[9px] md:text-[11px] text-muted-foreground leading-snug mb-0.5 md:mb-1">На старте есть идея, но ключевые вопросы без ответа:</p>
          <div className="space-y-px md:space-y-0.5">
            <Dot>Кто станет ранним пользователем</Dot>
            <Dot>Какие сценарии действительно нужны</Dot>
            <Dot>Какие гипотезы подтверждаются рынком</Dot>
            <Dot>Что должно войти в первый релиз</Dot>
          </div>
          <p className="text-[9px] md:text-[11px] text-accent font-semibold mt-auto pt-0.5">Без проверки = месяцы и миллионы впустую</p>
        </div>

        <div className="p-1.5 md:p-2.5 border-b border-r border-border flex flex-col">
          <Lbl>Решение</Lbl>
          <Ttl>AX10 готовит основу для разработки</Ttl>
          <p className="text-[9px] md:text-[11px] text-muted-foreground leading-snug mb-0.5 md:mb-1">Исследовательский проект. На выходе — пакет для запуска:</p>
          <div className="space-y-px md:space-y-0.5">
            <Dot>Подтверждённые или опровергнутые гипотезы</Dot>
            <Dot>Приоритетные пользовательские сценарии</Dot>
            <Dot>Портрет раннего пользователя</Dot>
            <Dot>Структура MVP и техническое задание</Dot>
          </div>
        </div>

        <div className="p-1.5 md:p-2.5 border-b border-border flex flex-col">
          <Lbl>Процесс</Lbl>
          <Ttl>7 этапов за 7–9 недель</Ttl>
          <div className="space-y-px md:space-y-0.5">
            <Step num="01" title="Параметры проекта" />
            <Step num="02" title="Дизайн исследования" />
            <Step num="03" title="Полевой этап (интервью, анкеты)" />
            <Step num="04" title="ИИ-аналитика интервью" />
            <Step num="05" title="Кабинетное исследование рынка" />
            <Step num="06" title="Синтез выводов и сценарии" />
            <Step num="07" title="ТЗ и дорожная карта" />
          </div>
        </div>

        {/* R2: Данные и ИИ | Результат | Независимое ТЗ */}
        <div className="p-1.5 md:p-2.5 border-b border-r border-border flex flex-col">
          <Lbl>Данные и ИИ</Lbl>
          <Ttl>Мультиисточниковая аналитика</Ttl>
          <div className="space-y-1 mb-1">
            <Mini>
              <p className="text-[9px] md:text-[11px] text-accent font-bold">4 источника данных</p>
              <p className="text-[9px] md:text-[10px] text-muted-foreground">Интервью, рынок, инфраструктура, клиент</p>
            </Mini>
            <Mini accent>
              <p className="text-[9px] md:text-[11px] text-accent font-bold">ИИ полного цикла</p>
              <p className="text-[9px] md:text-[10px] text-muted-foreground">Транскрипт → Summary → Структура → Выводы</p>
            </Mini>
          </div>
          <p className="text-[9px] md:text-[10px] text-muted-foreground leading-snug mt-auto">Дашборд с доступом на <span className="text-accent font-semibold">3 года</span></p>
        </div>

        <div className="p-1.5 md:p-2.5 border-b border-r border-border flex flex-col">
          <Lbl>Результат</Lbl>
          <Ttl>Полный пакет для старта</Ttl>
          <div className="space-y-px md:space-y-0.5">
            <Dot>База инсайтов из интервью</Dot>
            <Dot>Кабинетное исследование рынка</Dot>
            <Dot>Сводный аналитический документ</Dot>
            <Dot>Карта пользовательских сценариев</Dot>
            <Dot>Портрет раннего пользователя</Dot>
            <Dot>Приоритизированный функционал MVP</Dot>
          </div>
          <Mini accent className="mt-auto">
            <p className="text-[9px] md:text-[11px] text-accent font-bold">+ ТЗ и дорожная карта</p>
          </Mini>
        </div>

        <div className="p-1.5 md:p-2.5 border-b border-border flex flex-col">
          <Lbl>Свобода выбора</Lbl>
          <Ttl>ТЗ не привязано к AX10</Ttl>
          <Mini accent className="text-center mb-1">
            <span className="text-base md:text-xl font-bold text-accent leading-none">100%</span>
            <p className="text-[8px] md:text-[9px] text-muted-foreground">материалов у клиента</p>
          </Mini>
          <div className="space-y-px md:space-y-0.5">
            <Dot>Передайте любой команде разработки</Dot>
            <Dot>Достаточно для оценки сроков и стоимости</Dot>
            <Dot>Не требует консультаций с AX10</Dot>
          </div>
        </div>

        {/* R3: AI-first | Бизнес-эффект | Команда */}
        <div className="p-1.5 md:p-2.5 border-r border-border flex flex-col">
          <Lbl>AI-first разработка</Lbl>
          <Ttl>Опциональный следующий шаг</Ttl>
          <div className="flex gap-1 md:gap-1.5 mb-1">
            <Mini accent className="flex-1 text-center">
              <span className="text-sm md:text-base font-bold text-accent">5-6x</span>
              <p className="text-[8px] md:text-[9px] text-muted-foreground">дешевле</p>
            </Mini>
            <Mini accent className="flex-1 text-center">
              <span className="text-sm md:text-base font-bold text-accent">10x+</span>
              <p className="text-[8px] md:text-[9px] text-muted-foreground">быстрее</p>
            </Mini>
          </div>
          <div className="space-y-px md:space-y-0.5">
            <Dot>Читаемый, структурированный код</Dot>
            <Dot>Полная документация</Dot>
            <Dot>Свобода смены исполнителя</Dot>
          </div>
        </div>

        <div className="p-1.5 md:p-2.5 border-r border-border flex flex-col">
          <Lbl>Бизнес-эффект</Lbl>
          <Ttl>Управляемый путь к запуску</Ttl>
          <div className="space-y-0.5 md:space-y-1">
            <Mini accent>
              <p className="text-[9px] md:text-[11px] text-foreground font-bold">Снижение риска</p>
              <p className="text-[9px] md:text-[10px] text-muted-foreground">Первый релиз на данных, а не догадках</p>
            </Mini>
            <Mini accent>
              <p className="text-[9px] md:text-[11px] text-foreground font-bold">Экономия бюджета</p>
              <p className="text-[9px] md:text-[10px] text-muted-foreground">Инвестиции только в подтверждённое</p>
            </Mini>
            <Mini accent>
              <p className="text-[9px] md:text-[11px] text-foreground font-bold">Ускорение запуска</p>
              <p className="text-[9px] md:text-[10px] text-muted-foreground">Готовое ТЗ сокращает планирование</p>
            </Mini>
          </div>
        </div>

        <div className="p-1.5 md:p-2.5 border-border flex flex-col">
          <Lbl>Команда</Lbl>
          <div className="space-y-0.5 mb-1">
            <div className="flex justify-between"><span className="text-[9px] md:text-[11px] text-foreground font-semibold">С. Мартюшев</span><span className="text-[9px] md:text-[10px] text-accent">Финансы, 20+ лет</span></div>
            <div className="flex justify-between"><span className="text-[9px] md:text-[11px] text-foreground font-semibold">С. Бобылев</span><span className="text-[9px] md:text-[10px] text-accent">Продажи, 7+ лет</span></div>
            <div className="flex justify-between"><span className="text-[9px] md:text-[11px] text-foreground font-semibold">Д. Бондарев</span><span className="text-[9px] md:text-[10px] text-accent">Разработка, 30+ лет</span></div>
            <div className="flex justify-between"><span className="text-[9px] md:text-[11px] text-foreground font-semibold">С. Томилов</span><span className="text-[9px] md:text-[10px] text-accent">PR, 7+ лет</span></div>
          </div>
          <Mini accent className="text-center mt-auto">
            <p className="text-[9px] md:text-[11px] text-accent font-bold">Диагностическая сессия</p>
            <p className="text-[8px] md:text-[9px] text-muted-foreground">Бесплатная аналитика на первом звонке</p>
          </Mini>
        </div>

      </div>
    </div>
  );
}
