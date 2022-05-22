import React, {useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import PropTypes from 'prop-types';

import {renderPrice} from "../../utils";
import {selectObject} from "../../store/objectSlise";
import {selectProducts} from "../../store/productsSlise";
import {deleteToCard, selectCard} from "../../store/cardSlise";

const RemoveContent = ({...props}) => {
  const {onModalActive} = props;
  const productId = useSelector(selectObject);
  const products = useSelector(selectProducts);
  const cart = useSelector(selectCard);
  let temp = {
    ...cart
  };

  const dispatch = useDispatch();

  let itemProduct = products.find((index) => index.articul === productId.id);

  useEffect(() => {
    renderAddContent();
  }, [itemProduct]);

  const onRemoveItemClick = () => {
    delete temp[itemProduct.articul];
    dispatch(deleteToCard(temp));
    onModalActive(false);
  };

  // eslint-disable-next-line consistent-return
  const renderAddContent = () => {
    if (itemProduct !== undefined) {
      return (
        <>
          <div className="remove-content__img">
            <img className="remove-content__img-img" src={itemProduct.image} alt="фото товара" />
          </div>
          <div className="remove-content__info-date">
            <p className="remove-content__info-name">{itemProduct.name}</p>
            <p className="remove-content__info-article">Артикул: {itemProduct.articul}</p>
            <p className="remove-content__info-price">Цена: {renderPrice(itemProduct.price)} ₽</p>
          </div>
        </>
      );
    }
  };

  let item = renderAddContent();

  return (
    <div className="remove-content">
      <h2 className="visually-hidden">Подтверждение</h2>
      <p className="remove-content__title">Удалить этот товар?</p>
      <div className="remove-content__info">
        {item}
        <div className="remove-content__control">
          <button className="remove-content__btn remove-content__btn--remove" type="button" onClick={onRemoveItemClick}>Удалить товар</button>
          <button className="remove-content__btn remove-content__btn--close" type="button" onClick={() => onModalActive(false)}>Продолжить покупки</button>
        </div>
      </div>
    </div>
  );

};

RemoveContent.propTypes = {
  onModalActive: PropTypes.func,
};


export default RemoveContent;
