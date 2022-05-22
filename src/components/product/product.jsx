import React from "react";
import {useSelector} from "react-redux";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {selectObject} from "../../store/objectSlise";
import {selectProducts} from "../../store/productsSlise";
import {renderPrice} from "../../utils";
import {addToCart} from "../../store/cardSlise";
import Ratings from "../ratings/ratings";

import Footer from "../footer/footer";
import Header from "../header/header";


function Product() {

  const productId = useSelector(selectObject);
  const products = useSelector(selectProducts);
  let itemProduct = products.find((index) => index.articul === productId.id);
  const dispatch = useDispatch();
  const onClickAddToBasket = (evt) => {
    let target = evt.target;
    let objArticul = target.getAttribute(`data-key`);
    dispatch(addToCart(objArticul));
  };

  return (
    <>
      <Header />
      <main className="product">
        <div className="product__container">
          <h1 className="product__title">{itemProduct.name}</h1>
          <ul className="product__breadcrumps">
            <li className="product__breadcrumps-item">
              <a className="product__breadcrumps-link" href="/home">Главная</a>
            </li>
            <li className="product__breadcrumps-item">
              <Link className="product__breadcrumps-link" to="/">Каталог</Link>
            </li>
            <li className="product__breadcrumps-item product__breadcrumps-item--last">
              <p className="product__breadcrumps-text">О товаре</p>
            </li>
          </ul>
          <div className="product__content">
            <div className="product__item-img">
              <img className="product__item-img-img" src={itemProduct.image} alt="фото товара" width="68" height="190"/>
            </div>
            <div className="product__info-content">
              <div className="product__item-info">
                <p className="product__item-desc">{itemProduct.desc}</p>
                <p className="product__item-price">{renderPrice(itemProduct.price)} ₽</p>
              </div>
              <div className="product__item-rate">
                <Ratings rating={itemProduct.rating}/>
                <p className="product__item-rate-text">{itemProduct.reviews}</p>
              </div>
              <div className="product__item-btns">
                <a href="/" className="product__item-btn product__item-btn--main">Вернуться</a>
                <button className="product__item-btn product__item-btn--basket" type="button" data-key={itemProduct.articul} onClick={onClickAddToBasket}>Купить</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>

  );
}

Product.propTypes = {
  onModalActive: PropTypes.func,
};
export default Product;
