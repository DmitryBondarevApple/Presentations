import { NPSlideContainer } from './NPSlideContainer';

const NPSlide10Sharing = () => (
  <NPSlideContainer number={9} label="Шаринг и экспорт">
    <div className="flex flex-col md:flex-row gap-3 md:gap-8 items-start">
      <div className="flex-1 min-w-0">
        <h2 className="font-heading text-xl sm:text-2xl md:text-5xl font-bold text-foreground mb-1.5 sm:mb-3 md:mb-6" data-testid="np-sharing-title">
          Делитесь <span className="text-accent">результатами</span>
        </h2>
        <p className="font-body text-sm sm:text-base md:text-xl text-muted-foreground mb-2 sm:mb-5 md:mb-8 leading-snug sm:leading-relaxed">
          Отправьте коллеге ссылку — результат откроется в браузере без регистрации. Или экспортируйте в DOCX по вашему шаблону.
        </p>
        <div className="space-y-1.5 sm:space-y-2 md:space-y-4">
          {[
            { title: "Одна ссылка — доступ для всех", desc: "Без регистрации, на любом устройстве" },
            { title: "Адаптивный вид", desc: "Удобное чтение на смартфоне, планшете и компьютере" },
            { title: "Экспорт в DOCX", desc: "По шаблону с плейсхолдерами — под ваш корпоративный формат" },
            { title: "AI-переформулировка", desc: "Перефразируйте отдельные блоки результата одним кликом" },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-2 md:gap-3">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-accent mt-1.5 md:mt-2.5 shrink-0" />
              <div>
                <p className="font-heading text-xs sm:text-sm md:text-lg font-semibold text-foreground">{item.title}</p>
                <p className="font-body text-[10px] sm:text-xs md:text-base text-muted-foreground leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-[35%] shrink-0 flex justify-center">
        <img
          src={`${process.env.PUBLIC_URL || ''}/images/noteall/screenshot-phone.png`}
          alt="Мобильный вид транскрипта"
          className="h-48 sm:h-56 md:h-[420px] w-auto object-contain"
          data-testid="np-sharing-screenshot"
        />
      </div>
    </div>
  </NPSlideContainer>
);
export default NPSlide10Sharing;
