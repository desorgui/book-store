import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import { listAllBooks, deleteBook } from '../redux/actions/books';

const BooksList = () => {
  const books = useSelector((state) => state.rootReducer.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listAllBooks());
  }, []);

  const removeBookwithId = (id) => {
    dispatch(deleteBook(id));
  };

  return (
    <div className="bookListContainer">
      <ul className="bookList">
        {books && books.map((bookItem) => (

          <div key={uuidv4()} className="book">
            {/* eslint-disable react/jsx-props-no-spreading */}
            <BookItem key={uuidv4()} {...bookItem} />
            <div className="progress">
              <div className="oval">
                <div className="box" />
              </div>
              <span>100%</span>
            </div>

            <button className="bookBigButton" type="button" key={uuidv4()} onClick={() => removeBookwithId(bookItem.item_id)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;
