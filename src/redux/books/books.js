const ADD_BOOK = 'book-store/books/ADD_BOOK';
const REMOVE_BOOK = 'book-store/books/REMOVE_BOOK';
const initialState = [
  {
    title: 'book 1',
    author: 'author 1',
    id: 1,
  },
  {
    title: 'book 2',
    author: 'author 2',
    id: 2,
  },
  {
    title: 'book 3',
    author: 'author 3',
    id: 3,
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((i) => i.id !== action.payload);
    default: return state;
  }
};
const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});
const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

export default bookReducer;
export { addBook, removeBook };
