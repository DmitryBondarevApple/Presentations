import React, { useState, useCallback, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Loader2 } from 'lucide-react';
import { generateAX10OnePagerPdf } from '@/components/AX10OnePagerPdf';

/* ── Unified micro-components ── */
const Over = ({ children }) => (
  <p className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase text-blue-500 mb-1.5">{children}</p>
);
const Hd = ({ children }) => (
  <h3 className="text-sm sm:text-base font-semibold text-white tracking-tight leading-tight mb-1.5">{children}</h3>
);
const Li = ({ n, children }) => (
  <div className="flex gap-2 items-start">
    <span className="text-slate-600 font-mono text-[10px] sm:text-xs shrink-0 w-3 text-right">{n || '—'}</span>
    <span className="text-[10px] sm:text-xs text-slate-300 leading-snug">{children}</span>
  </div>
);
const Callout = ({ children }) => (
  <div className="pl-3 border-l-2 border-blue-500 mt-auto pt-1">
    <p className="text-[10px] sm:text-xs font-medium text-white">{children}</p>
  </div>
);
const Card = ({ children, className = '' }) => (
  <div className={`bg-slate-900/40 border border-slate-800 rounded-xl p-3 sm:p-4 flex flex-col ${className}`}>
    {children}
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
    <div className="h-[100dvh] w-full bg-[#0b1120] text-white p-2.5 sm:p-3 md:p-5 flex flex-col overflow-hidden"
      data-testid="ax-onepager">

      {/* HEADER */}
      <div className="flex items-center justify-between shrink-0 pb-2 mb-2 border-b border-slate-800">
        <div className="flex items-center gap-3 min-w-0">
          <img src={`${process.env.PUBLIC_URL || ''}/images/ax10/logo-ax10.png`} alt="AX10" className="h-6 md:h-7 shrink-0" data-testid="ax-op-logo" />
          <div className="hidden sm:block w-px h-5 bg-slate-700 shrink-0" />
          <div className="hidden sm:flex flex-col min-w-0">
            <p className="text-xs md:text-sm font-semibold text-white leading-tight tracking-tight">От идеи цифрового сервиса к готовому ТЗ</p>
            <div className="flex gap-3 mt-0.5">
              <a href="https://t.me/smartfincons" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-500 hover:text-blue-400 transition-colors">@smartfincons</a>
              <a href="tel:+79009167369" className="text-[10px] text-slate-500 hover:text-blue-400 transition-colors">+7 (900) 916-73-69</a>
              <a href="https://ax10.ru" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-500 hover:text-blue-400 transition-colors">ax10.ru</a>
            </div>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={handlePdf} disabled={pdfLoading} data-testid="ax-op-pdf-btn"
          className="h-7 w-7 text-slate-500 hover:text-white hover:bg-slate-800 rounded-full shrink-0">
          {pdfLoading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Download className="h-3.5 w-3.5" />}
        </Button>
      </div>

      {/* GRID */}
      <div className="flex-1 min-h-0 grid grid-cols-3 grid-rows-3 gap-2.5 md:gap-3">

        {/* R1: Проблема | Решение | Процесс */}
        <Card>
          <Over>Проблема</Over>
          <Hd>Запуск на догадках</Hd>
          <div className="space-y-1 flex-1">
            <Li n="—">Кто станет ранним пользователем</Li>
            <Li n="—">Какие сценарии действительно нужны</Li>
            <Li n="—">Какие гипотезы подтверждаются рынком</Li>
            <Li n="—">Что должно войти в первый релиз</Li>
          </div>
          <Callout>Без проверки = месяцы и миллионы впустую</Callout>
        </Card>

        <Card>
          <Over>Решение</Over>
          <Hd>Основа для разработки</Hd>
          <p className="text-[10px] sm:text-xs text-slate-400 leading-relaxed mb-1.5">Исследовательский проект. На выходе — пакет для запуска:</p>
          <div className="space-y-1 flex-1">
            <Li n="—">Подтверждённые гипотезы</Li>
            <Li n="—">Пользовательские сценарии</Li>
            <Li n="—">Портрет раннего пользователя</Li>
            <Li n="—">Структура MVP и техническое задание</Li>
          </div>
        </Card>

        <Card>
          <Over>Процесс</Over>
          <Hd>7 этапов · 7–9 недель</Hd>
          <div className="space-y-1 flex-1">
            <Li n="01">Параметры проекта</Li>
            <Li n="02">Дизайн исследования</Li>
            <Li n="03">Полевой этап</Li>
            <Li n="04">ИИ-аналитика интервью</Li>
            <Li n="05">Кабинетное исследование</Li>
            <Li n="06">Синтез выводов и сценарии</Li>
            <Li n="07">ТЗ и дорожная карта</Li>
          </div>
        </Card>

        {/* R2: Данные и ИИ | Результат | Свобода выбора */}
        <Card>
          <Over>Данные и ИИ</Over>
          <Hd>Мультиисточниковая аналитика</Hd>
          <div className="space-y-1.5 flex-1">
            <div className="pl-3 border-l-2 border-slate-700">
              <p className="text-[10px] sm:text-xs font-semibold text-blue-400">4 источника данных</p>
              <p className="text-[10px] text-slate-400">Интервью · Рынок · Инфраструктура · Клиент</p>
            </div>
            <div className="pl-3 border-l-2 border-blue-500">
              <p className="text-[10px] sm:text-xs font-semibold text-blue-400">ИИ полного цикла</p>
              <p className="text-[10px] text-slate-400">Транскрипт → Summary → Структура → Выводы</p>
            </div>
          </div>
          <p className="text-[10px] text-slate-500 mt-auto pt-1">Онлайн-дашборд · доступ <span className="text-blue-400 font-medium">3 года</span></p>
        </Card>

        <Card>
          <Over>Результат</Over>
          <Hd>Полный пакет для старта</Hd>
          <div className="space-y-1 flex-1">
            <Li n="—">База инсайтов из интервью</Li>
            <Li n="—">Кабинетное исследование рынка</Li>
            <Li n="—">Сводный аналитический документ</Li>
            <Li n="—">Карта пользовательских сценариев</Li>
            <Li n="—">Портрет раннего пользователя</Li>
            <Li n="—">Функционал MVP</Li>
          </div>
          <Callout>+ ТЗ и дорожная карта</Callout>
        </Card>

        <Card>
          <Over>Свобода выбора</Over>
          <Hd>ТЗ не привязано к AX10</Hd>
          <div className="flex-1 flex flex-col items-start">
            <div className="mb-2">
              <span className="text-3xl sm:text-4xl font-light text-white tracking-tighter leading-none">100%</span>
              <p className="text-[10px] text-blue-400 font-medium mt-0.5">материалов остаётся у клиента</p>
            </div>
            <div className="space-y-1">
              <Li n="—">Передайте любой команде разработки</Li>
              <Li n="—">Достаточно для оценки сроков и стоимости</Li>
              <Li n="—">Не требует консультаций с AX10</Li>
            </div>
          </div>
        </Card>

        {/* R3: AI-first | Бизнес-эффект | Команда */}
        <Card>
          <Over>AI-first разработка</Over>
          <Hd>Опциональный следующий шаг</Hd>
          <div className="flex items-end gap-5 mb-2">
            <div>
              <span className="text-2xl sm:text-3xl font-light text-white tracking-tighter leading-none">5-6x</span>
              <p className="text-[10px] text-blue-400 font-medium mt-0.5">дешевле</p>
            </div>
            <div>
              <span className="text-2xl sm:text-3xl font-light text-white tracking-tighter leading-none">10x+</span>
              <p className="text-[10px] text-blue-400 font-medium mt-0.5">быстрее</p>
            </div>
          </div>
          <div className="space-y-1 mt-auto">
            <Li n="—">Читаемый, структурированный код</Li>
            <Li n="—">Полная документация</Li>
            <Li n="—">Свобода смены исполнителя</Li>
          </div>
        </Card>

        <Card>
          <Over>Бизнес-эффект</Over>
          <Hd>Управляемый путь к запуску</Hd>
          <div className="space-y-2 flex-1">
            <div className="pl-3 border-l-2 border-blue-500">
              <p className="text-[10px] sm:text-xs font-semibold text-white">Снижение риска</p>
              <p className="text-[10px] text-slate-400">Первый релиз на данных, а не догадках</p>
            </div>
            <div className="pl-3 border-l-2 border-blue-500">
              <p className="text-[10px] sm:text-xs font-semibold text-white">Экономия бюджета</p>
              <p className="text-[10px] text-slate-400">Инвестиции только в подтверждённое</p>
            </div>
            <div className="pl-3 border-l-2 border-blue-500">
              <p className="text-[10px] sm:text-xs font-semibold text-white">Ускорение запуска</p>
              <p className="text-[10px] text-slate-400">Готовое ТЗ сокращает планирование</p>
            </div>
          </div>
        </Card>

        <Card>
          <Over>Команда</Over>
          <div className="space-y-1 flex-1">
            <div className="flex justify-between"><span className="text-[10px] sm:text-xs text-white font-medium">Сергей Мартюшев</span><span className="text-[10px] text-blue-400">Финансы · 20+ лет</span></div>
            <div className="flex justify-between"><span className="text-[10px] sm:text-xs text-white font-medium">Сергей Бобылев</span><span className="text-[10px] text-blue-400">Продажи · 7+ лет</span></div>
            <div className="flex justify-between"><span className="text-[10px] sm:text-xs text-white font-medium">Дмитрий Бондарев</span><span className="text-[10px] text-blue-400">Разработка · 30+ лет</span></div>
            <div className="flex justify-between"><span className="text-[10px] sm:text-xs text-white font-medium">Сергей Томилов</span><span className="text-[10px] text-blue-400">PR · 7+ лет</span></div>
          </div>
          <div className="mt-auto pt-2 border-t border-slate-800 text-center">
            <p className="text-[10px] sm:text-xs font-semibold text-blue-400">Диагностическая сессия</p>
            <p className="text-[9px] text-slate-500">Бесплатная аналитика на первом звонке</p>
          </div>
        </Card>

      </div>
    </div>
  );
}
