import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
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
          <div key={uuidv4()}>
            {/* eslint-disable react/jsx-props-no-spreading */}
            <BookItem key={uuidv4()} {...bookItem} />
            <button type="button" key={uuidv4()} onClick={() => dispatch(removeBook(bookItem.id))}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
