import React, { useState } from "react";
import styles from "./App.module.css";

const advantages = [
  ["₽", "Высокий доход", "Больше заказов — больше заработка."],
  ["%", "Низкая комиссия", "Выгодные условия сотрудничества."],
  ["🚕", "Свободный график", "Работай тогда, когда удобно тебе."],
  ["⛽", "Скидки на топливо", "Заправляйся по выгодным ценам."],
  ["✓", "Техническая поддержка", "Поможем в любой ситуации."],
  ["▣", "Современные авто", "Новые и проверенные автомобили."],
];

const steps = [
  ["1", "Оставь заявку", "Заполни форму на сайте или позвони нам."],
  ["2", "Пройди подключение", "Менеджер свяжется с тобой и расскажет все детали."],
  ["3", "Начни работать", "Получи доступ к приложению и выходи на линию."],
  ["4", "Зарабатывай", "Получай выплаты и развивайся вместе с нами."],
];

function Icon({ children }) {
  return <span className={styles.icon}>{children}</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = (event) => {
    event.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.container + " " + styles.headerInner}>
          <a className={styles.logo} href="#top" onClick={closeMenu}>
            <span>Я</span>ндекс Такси
            <i />
            <b>ПАКСОПАРК</b>
          </a>

          <button
            className={styles.burger}
            aria-label="Открыть меню"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
            <a href="#advantages" onClick={closeMenu}>Преимущества</a>
            <a href="#conditions" onClick={closeMenu}>Условия</a>
            <a href="#steps" onClick={closeMenu}>Как подключиться</a>
            <a href="#contacts" onClick={closeMenu}>Контакты</a>
            <a className={styles.headerButton} href="#form" onClick={closeMenu}>
              ☎&nbsp; Оставить заявку
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className={styles.hero}>
          <div className={styles.container + " " + styles.heroGrid}>
            <div className={styles.heroText}>
              <div className={styles.badge}>ПРИГЛАШАЕМ ВОДИТЕЛЕЙ</div>
              <h1>
                Работай в Яндекс Такси
                <strong>через наш таксопарк</strong>
              </h1>
              <p>
                Стабильный доход, поддержка 24/7 и выгодные условия
                для каждого водителя.
              </p>

              <div className={styles.heroButtons}>
                <a className={styles.primaryButton} href="#form">🚕&nbsp; Стать водителем</a>
                <a className={styles.secondaryButton} href="#conditions">▶&nbsp; Узнать подробнее</a>
              </div>

              <div className={styles.heroFacts}>
                <div><Icon>✓</Icon><span>Официальный<br />партнёр Яндекс Такси</span></div>
                <div><Icon>◷</Icon><span>Быстрое<br />подключение</span></div>
                <div><Icon>◉</Icon><span>Поддержка<br />24/7</span></div>
              </div>
            </div>

            <div className={styles.heroCar}>
              <img src={require("./assets/hero-car.jpg")} alt="Автомобиль таксопарка" />
            
            </div>
          </div>
        </section>

        <section className={styles.advantages} id="advantages">
          <div className={styles.container}>
            <h2>Почему выбирают наш таксопарк?</h2>
            <div className={styles.advantageGrid}>
              {advantages.map(([icon, title, text]) => (
                <article className={styles.advantage} key={title}>
                  <div className={styles.roundIcon}>{icon}</div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.conditions} id="conditions">
          <div className={styles.container + " " + styles.conditionGrid}>
            <div className={styles.conditionCard}>
              <h2>Условия работы</h2>
              <ul>
                <li>Подключение к Яндекс Такси с высоким приоритетом.</li>
                <li>Поддержка и обучение на старте.</li>
                <li>Возможность работать на своём авто или взять машину в аренду.</li>
                <li>Прозрачные выплаты без задержек.</li>
              </ul>

              <div className={styles.income}>
                <span>₽</span>
                <div>
                  <strong>Зарабатывай до 8 000 ₽ в день</strong>
                  <small>всё зависит от твоего графика и города</small>
                </div>
              </div>
            </div>

            <div className={styles.formCard} id="form">
              <h2>Оставить заявку</h2>
              <p>Заполни форму и мы свяжемся с тобой<br />в ближайшее время</p>

              <form onSubmit={submit}>
                <input required placeholder="Ваше имя" />
                <input required type="tel" placeholder="Телефон" />
                <select defaultValue="" required>
                  <option value="" disabled>Выберите способ связи</option>
                  <option>Позвонить по номеру </option>
                  <option>Написать в Telegram</option>
                  <option>Написать в WhatsApp</option>
                </select>
                <button className={styles.primaryButton} type="submit">
                  {sent ? "✓ Заявка отправлена" : "➤  Отправить заявку"}
                </button>
              </form>
              <small className={styles.safe}>🔒 Ваши данные в безопасности</small>
            </div>
          </div>
        </section>

        <section className={styles.steps} id="steps">
          <div className={styles.container}>
            <h2>Как стать водителем?</h2>
            <div className={styles.stepGrid}>
              {steps.map(([number, title, text]) => (
                <article className={styles.step} key={number}>
                  <div className={styles.stepTop}>
                    <span>{number}</span><i>→</i>
                  </div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </article>
              ))}
            </div>

            <div className={styles.cta}>
              <div>
                <h2>Стань частью команды<br />Яндекс Такси уже сегодня!</h2>
                <p>Больше заказов. Больше возможностей. Больше дохода.</p>
              </div>
              <a className={styles.primaryButton} href="#form">☎&nbsp; Оставить заявку</a>
            </div>
          </div>
        </section>
      </main>

      <footer id="contacts" className={styles.footer}>
        <div className={styles.container + " " + styles.footerInner}>
          <div className={styles.logo}><span>Я</span>ндекс Такси <i /> <b>ПАКСОПАРК</b></div>
          <div>⌖ &nbsp; Работаем по всей России</div>
          <a href="tel:+79114694549">☎ &nbsp;+7 (951) 465-45-45</a>
        </div>
      </footer>
    </div>
  );
}
