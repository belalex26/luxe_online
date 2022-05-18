import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

import {selectObject} from "../../store/objectSlise";
import {selectGuitars} from "../../store/giutarsSlise";
import {addToCart} from "../../store/cardSlise";

import {renderPrice} from "../../utils";

const AddContent = ({...props}) => {
  const {onModalAddActive, successModal, onSuccessModal} = props;

  const guitarId = useSelector(selectObject);
  const guitars = useSelector(selectGuitars);
  const dispatch = useDispatch();
  let itemGuitar = guitars.find((index) => index.articul === guitarId.id);

  useEffect(() => {
    renderAddContent();
  }, [itemGuitar]);

  const onClickAddToBasket = (evt) => {
    let target = evt.target;
    let objArticul = target.getAttribute(`data-key`);
    dispatch(addToCart(objArticul));
    onSuccessModal(true);
  };

  // eslint-disable-next-line consistent-return
  const renderAddContent = () => {
    if (itemGuitar !== undefined) {
      if (!successModal) {
        return (
          <>
            <p className="add-content__title">Добавить товар в корзину</p>
            <div className="add-content__info">
              <img className="add-content__img" src={itemGuitar.image} alt="фото товара" />
              <div className="add-content__info-date">
                <p className="add-content__info-name">{itemGuitar.name}</p>
                <p className="add-content__info-article">Артикул: {itemGuitar.articul} </p>
                <p className="add-content__info-price">Цена: {renderPrice(itemGuitar.price)} ₽</p>
              </div>
              <button className="add-content__btn" type="button" data-key={itemGuitar.articul} onClick={onClickAddToBasket}>Добавить в корзину</button>
            </div>
          </>
        );
      }
      return (
        <>
          <p className="add-content__title">Товар успешно добавлен в корзину</p>
          <div className="add-content__success-wrap">
            <Link className="add-content__success-link add-content__success-link--basket" to="/basket">Перейти в корзину</Link>
            <button className="add-content__success-link add-content__success-link--main" type="button" onClick={() => onModalAddActive(false)}>Продолжить покупки</button>
          </div>
        </>
      );
    }
  };

  let item = renderAddContent();

  return (
    <>
      <h2 className="visually-hidden">Подтверждение</h2>
      {item}
    </>
  );
};

AddContent.propTypes = {
  onModalAddActive: PropTypes.func,
  modalActive: PropTypes.bool,
  successModal: PropTypes.bool,
  onSuccessModal: PropTypes.func,
};

export default AddContent;
