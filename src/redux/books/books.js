const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((i) => i.id !== action.payload.id);
    default: return state;
  }
};
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
const removeBook = (id) => ({
  type: removeBook,
  payload: id,
});

export default bookReducer;
export { addBook, removeBook };
