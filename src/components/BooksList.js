import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import BookItem from './BookItem';
import { removeBook } from '../redux/books/books';

const BooksList = () => {
  const books = useSelector((configureStore) => configureStore.book);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>List of book</h1>
      <ul className="BookList">
        {books.map((bookItem) => (
          <div key={bookItem.id}>
            <BookItem key={bookItem.id} {...bookItem}/>
            <button type="button" key={bookItem.id} onClick={() => dispatch(removeBook(bookItem.id))}>
              Delete
            </button>
          </div>
        ))};
      </ul>
    </div>
  );
};

export default BooksList;
