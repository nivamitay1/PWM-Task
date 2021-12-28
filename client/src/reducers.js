export const productsListReducer = (
  state = { arr: [], originalArr: [] },
  action
) => {
  switch (action.type) {
    case "SET_PRODUCTS_ֹֹLIST":
      state.originalArr = action.productsList;
      state.arr = action.productsList;
      return (state = {
        arr: action.productsList,
        originalArr: action.productsList,
      });

    case "SEARCH_FILTER_PRODUCTS_ֹֹLIST":
      const filter = state.originalArr.filter(
        (product) =>
          product.name.toLowerCase().indexOf(action.searchValue.toLowerCase()) >
            -1 ||
          product.price.toString().indexOf(action.searchValue) > -1 ||
          product.rate.toString().indexOf(action.searchValue) > -1 ||
          product.description
            .toLowerCase()
            .indexOf(action.searchValue.toLowerCase()) > -1
      );
      return (state = {
        arr: filter,
        originalArr: state.originalArr,
      });

    case "PRICE_RANGE_FILTER":
      state.arr = state.originalArr.filter(
        (product) =>
          product.price < action.range[1] && product.price > action.range[0]
      );

      return (state = {
        arr: state.arr,
        originalArr: state.originalArr,
      });

    case "CUSTOMER_REVIEWS_FILTER":
      state.arr = state.arr.filter((product) => product.rate >= action.rate);
      return (state = {
        arr: state.arr,
        originalArr: state.originalArr,
      });

    case "SORT_BY":
      let sort;
      if (action.value === "expensive") {
        sort = state.arr.slice().sort(function (a, b) {
          return b.price - a.price;
        });
      } else if (action.value === "cheap") {
        sort = state.arr.slice().sort(function (a, b) {
          return a.price - b.price;
        });
      } else if (action.value === "rate") {
        sort = state.arr.slice().sort(function (a, b) {
          return b.rate - a.rate;
        });
      } else {
        sort = state.originalArr.slice();
      }

      return (state = {
        arr: sort,
        originalArr: state.originalArr,
      });

    default:
      return state;
  }
};

export const watchListReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_WATCH_ֹֹLIST":
      return (state = action.watchList);
    default:
      return state;
  }
};
