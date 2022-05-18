import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function Home() {
  return (
    <>
      <Header />
      <main className="home">
        <div className="home__container">
          <h1 className="home__title">Швейное производство МАНУФУКТУРА приветствует вас</h1>
          <div className="home__content">
            <p className="home__text">Швейное производство полного цикла предоставляет услуги пошива под ключ. Специализируемся на пошиве женской одежды второго и третьего слоя из легких, средне-тяжелых и трикотажных полотен. Добиваемся высокого качества и количества за счет узкопрофильных филиалов нашего производства. Наша фабрика работает на базе своего конструкторского бюро, что обеспечивает оперативную разработку лекал и отработку образцов. Наши дизайнеры подберут ткани и фурнитуру по вашему техническому заданию, проконсультируют по актуальности материалов. Наше производство максимально оснащено всем спец оборудованием. Работаем с проверенными подрядчиками по брендированию продукции.</p>
          </div>
          <div className="home__item-btns">
            <a href="/" className="home__item-btn-buy">Перейти в каталог</a>
            <a href="https://www.youtube.com/watch?v=MH5s3jLZ_us&feature=emb_logo" className="home__item-btn-more">Посмотреть видео</a>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}
export default Home;
