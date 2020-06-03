import React from 'react';

const Footer = () => (
  <footer className="container mx-auto py-16 px-3 mt-48 mb-8 text-gray-800">
    <div className="flex -mx-3">
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Наши принципы</h2>
        <p className="mt-5">
          Постоянно развиваемся и помогаем расти вам. Погружаемся в специфику вашего бизнеса.
        </p>

        <p className="mt-5">Быстро работаем, всегда на связи.</p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Как мы работаем</h2>
        <p className="mt-5">
          Наш работа основывается на сочетании научных разработок и креативного подхода для
          реализации задач наших клиентов.
        </p>
        <p className="mt-5">
          Стратегическое видение и внимание к мельчайшим деталям, отличные идеи и их тщательное
          выполнение – все это помогает нам максимально эффективно решать поставленные задачи.
        </p>
      </div>
      <div className="flex-1 px-3">
        <h2 className="text-lg font-semibold">Ссылки</h2>
        <ul className="mt-4 leading-loose">
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Тренинги</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer;
