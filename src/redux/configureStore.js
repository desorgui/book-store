import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import categoryReducer from './categories/categories';

export default configureStore({
  reducer: {
    book: bookReducer,
    category: categoryReducer,
  },
});