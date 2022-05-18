import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {selectObject} from "../../store/objectSlise";
import {selectGuitars} from "../../store/giutarsSlise";
import {renderPrice} from "../../utils";
import Ratings from "../ratings/ratings";

import Footer from "../footer/footer";
import Header from "../header/header";


function Product() {

  const guitarId = useSelector(selectObject);
  const guitars = useSelector(selectGuitars);
  let itemGuitar = guitars.find((index) => index.articul === guitarId.id);
  return (
    <>
      <Header />
      <main className="product">
        <div className="product__container">
          <h1 className="product__title">Подробнее</h1>
          <ul className="product__breadcrumps">
            <li className="product__breadcrumps-item">
              <a className="product__breadcrumps-link" href="#">Главная</a>
            </li>
            <li className="product__breadcrumps-item">
              <Link className="product__breadcrumps-link" to="/">Каталог</Link>
            </li>
            <li className="product__breadcrumps-item product__breadcrumps-item--last">
              <p className="product__breadcrumps-text">О товаре</p>
            </li>
          </ul>
          <div className="catalog__item-img">
            <img className="catalog__item-img-img" src={itemGuitar.image} alt="фото товара" width="68" height="190"/>
          </div>
          <div className="catalog__item-rate">
            <Ratings rating={itemGuitar.rating}/>
            <p className="catalog__item-rate-text">{itemGuitar.reviews}</p>
          </div>
          <div className="catalog__item-info">
            <p className="catalog__item-title">{itemGuitar.name}</p>
            <p className="catalog__item-price">{renderPrice(itemGuitar.price)} ₽</p>
          </div>
          <div className="catalog__item-btns">
            <a href="/" className="catalog__item-btn-more">Вернуться</a>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}
export default Product;
