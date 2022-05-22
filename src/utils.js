const MAX_PERCENT = 100;

export const body = document.querySelector(`.body`);
export const ESC_PRESS = 27;

export const HIT_SALE = 0.1;
export const SUPER_SALE = 700;
export const SUPER2022_SALE = 0.3;
export const SUPER2022_SALE_MAX = 3000;

export const MAX_SALE = (SUPER2022_SALE_MAX * MAX_PERCENT) / (SUPER2022_SALE * MAX_PERCENT);

export const SORT_BY_PRICE = `price`;
export const SORT_BY_REVIEW = `reviews`;
export const DIRECTION_UP = `up`;
export const DIRECTION_DOWN = `down`;


export const renderTypeText = (type) => {
  if (type === `dressType`) {
    return (`Платья`);
  } else if (type === `suitType`) {
    return (`Костюмы`);
  }
  return (`Блузки`);
};

export const renderPrice = (el) => {
  let separator = ` `;
  // eslint-disable-next-line indent
    if (el > 0) {
    let price = el.toString();
    return price.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, `$1` + separator);
  }
  return el;
};

export const filterByPrice = (arr, a, b) => {
  return arr.filter((item) => (a <= item.price && item.price <= b));
};

// сортировка по цене

export const renderProductSortByPriceUp = (arr) => {
  arr.sort((a, b) => a.price > b.price ? 1 : -1);
  return (arr);
};

// по убыванию
export const renderProductSortByPriceDown = (arr) => {
  arr.sort((a, b) => a.price <= b.price ? 1 : -1);
  return (arr);
};

// рейтинг
// по возрастанию

export const renderProductSortByReviewsUp = (arr) => {
  arr.sort((a, b) => a.reviews > b.reviews ? 1 : -1);
  return (arr);
};

// по убыванию

export const renderProductSortByReviewsDown = (arr) => {
  arr.sort((a, b) => a.reviews < b.reviews ? 1 : -1);
  return (arr);
};
