import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import { listAllBooks } from '../redux/actions/books';

const BooksList = () => {
  const books = useSelector((state) => state.rootReducer.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAllBooks());
  }, []);

  return (
    <div className="bookListContainer">
      <ul className="bookList">
        {books && books.map((bookItem) => (

          <div key={uuidv4()} className="book">
            {/* eslint-disable react/jsx-props-no-spreading */}
            <BookItem key={uuidv4()} {...bookItem} />
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
