import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

function About() {
  return (
    <>
      <Header />
      <main className="about">
        <div className="about__container">
          <h1 className="about__title">О компании</h1>
          <div className="about__content">
            <p className="about__text">Швейное производство полного цикла предоставляет услуги пошива под ключ. Специализируемся на пошиве женской одежды второго и третьего слоя из легких, средне-тяжелых и трикотажных полотен. Добиваемся высокого качества и количества за счет узкопрофильных филиалов нашего производства. Наша фабрика работает на базе своего конструкторского бюро, что обеспечивает оперативную разработку лекал и отработку образцов. Наши дизайнеры подберут ткани и фурнитуру по вашему техническому заданию, проконсультируют по актуальности материалов. Наше производство максимально оснащено всем спец оборудованием. Работаем с проверенными подрядчиками по брендированию продукции.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}
export default About;
