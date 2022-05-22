import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import ReactPaginate from "react-paginate";

import {selectProducts} from "../../store/productsSlise";
import {selectPagination} from "../../store/paginationSlise";
import {selectPage} from "../../store/paginationSlise";
import {selectFilter, selectSort} from "../../store/filterSlise";


import {renderProductSortByPriceUp, renderProductSortByPriceDown, renderProductSortByReviewsUp, renderProductSortByReviewsDown, filterByPrice} from "../../utils";
import {DIRECTION_DOWN, DIRECTION_UP, SORT_BY_REVIEW, SORT_BY_PRICE} from "../../utils";
import CatalogItem from "../catalog-item/catalog-item";
import Modal from "../modal/modal";
import AddContent from "../add-content/add-content";
import SortPanel from "../sort-panel/sort-panel";

function Catalog() {
  const [modalActive, setModalActive] = useState(false);
  const [successModal, setSuccessModal] = useState(false);

  const PRODUCTS_PER_PAGE = 9;
  let pageCount = 1;

  const products = useSelector(selectProducts);
  const pageNumber = useSelector(selectPagination);
  const filter = useSelector(selectFilter);
  const sort = useSelector(selectSort);
  const dispatch = useDispatch();

  let cloneProducts = JSON.parse(JSON.stringify(products));

  useEffect(() => {
    onSortingProducts();
  }, [sort]);

  useEffect(() => {
    renderProducts();
  }, [cloneProducts]);

  useEffect(() => {
    setSuccessModal(false);
  }, [modalActive]);

  const renderPageCount = () => {
    pageCount = Math.ceil(cloneProducts.length / PRODUCTS_PER_PAGE);
    return pageCount;
  };

  const pagesVisites = pageNumber * PRODUCTS_PER_PAGE;

  const onPageChangeClick = ({selected}) => {
    dispatch(selectPage(selected));
  };

  function filterChechbox(array = [], filters = {}) {
    const keys = Object.keys(filters).filter((key) => filters.hasOwnProperty(key));
    return array.filter((elem) => {
      const commonKeys = keys.filter((key) => elem.hasOwnProperty(key));
      return commonKeys.reduce((flag, key) => (flag && filters[key].includes(elem[key])), true);
    });
  }

  // фильтры

  let type = filter.typeFilterArr;
  let strings = filter.stringFilterArr;

  let filterType = {
    type,
  };

  let filterStrings = {
    strings
  };

  // eslint-disable-next-line consistent-return
  const onFilterByCheckbox = () => {

    if (type.length > 0) {
      return (cloneProducts = filterChechbox(cloneProducts, filterType));
    }

    if (strings.length > 0) {
      return (cloneProducts = filterChechbox(cloneProducts, filterStrings));
    }
    return cloneProducts;
  };


  const onFilters = () => {
    if (Object.keys(filter).length !== 0) {
      if (type.length === 0 && strings.length === 0) {
        return cloneProducts;
      }

      onFilterByCheckbox();
      // по цене

      cloneProducts = filterByPrice(cloneProducts, filter.tempMin, filter.tempMax);
    }
    return cloneProducts;
  };


  const onSortingProducts = () => {

    if (sort.type === SORT_BY_PRICE && sort.direction === DIRECTION_UP) {
      renderProductSortByPriceUp(cloneProducts);
    }

    // цена по убыванию

    if (sort.type === SORT_BY_PRICE && sort.direction === DIRECTION_DOWN) {
      renderProductSortByPriceDown(cloneProducts);
    }

    // рейтинг по возрастанию

    if (sort.type === SORT_BY_REVIEW && sort.direction === DIRECTION_UP) {
      renderProductSortByReviewsUp(cloneProducts);
    }
    // рейтинг по убыванию

    if (sort.type === SORT_BY_REVIEW && sort.direction === DIRECTION_DOWN) {
      renderProductSortByReviewsDown(cloneProducts);
    }

    if (sort.type === SORT_BY_PRICE) {
      renderProductSortByPriceUp(cloneProducts);
    }
    if (sort.type === SORT_BY_REVIEW) {
      renderProductSortByReviewsDown(cloneProducts);
    }

    if (sort.direction === DIRECTION_UP) {
      renderProductSortByPriceUp(cloneProducts);
    }
    if (sort.direction === DIRECTION_DOWN) {
      renderProductSortByPriceDown(cloneProducts);
    }
  };

  // отрисовка основного массива

  const renderProducts = () => {
    onFilters();
    onSortingProducts();
    renderPageCount();

    if (cloneProducts.length === 0) {
      cloneProducts = products;
    }

    return (cloneProducts.slice(pagesVisites, pagesVisites + PRODUCTS_PER_PAGE)
      .map((item) => <CatalogItem key={item.articul}
        item={item}
        onModalActive={setModalActive}
      />));
  };

  let ProductPage = renderProducts();

  return (
    <>
      <section className="catalog">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__sort-panel sort-panel" >
          <SortPanel/>
        </div>
        <ul className="catalog__list">
          {ProductPage}
        </ul>
        <ReactPaginate
          previousLabel={`Назад`}
          nextLabel={`Далее`}
          breakLabel={`...`}
          breakClassName={`pagination__break`}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={onPageChangeClick}
          pageClassName={`catalog__pagination-item`}
          containerClassName={`catalog__pagination`}
          activeClassName={`catalog__pagination--active`}
          previousClassName={`catalog__pagination--prev`}
          nextClassName={`catalog__pagination--next`}
          disabledClassName={`catalog__pagination-controls--disabled`}
        />
      </section>

      <Modal
        modalActive={modalActive}
        onModalActive={setModalActive}
      >
        <AddContent
          onModalAddActive={setModalActive}
          successModal={successModal}
          onSuccessModal={setSuccessModal}

        />
      </Modal>
    </>
  );
}

export default Catalog;
