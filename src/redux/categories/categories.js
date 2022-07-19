const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';

const INITIAL_STATE = 'UNDER_CONTRUCTION';

const categoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CHECK_STATUS:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default categoriesReducer;
