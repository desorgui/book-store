import React from 'react';
import BookItem from './BookItem';
import { v4 as uuidv4 } from "uuid";
import { useSelector } from 'react-redux/es/exports';
import { removeBook } from '../redux/books/books';
import { useDispatch } from 'react-redux/es/exports';

const BooksList = () => {
  const books = useSelector((configureStore) => configureStore.book);
  const dispatch = useDispatch();
  return (<div>    
    <h1>List of book</h1>
    <ul className="BookList">
    {books.map((bookItem) => {
      return (
        <div key={bookItem.id}>
          <BookItem key={bookItem.id} {...bookItem}/>
          <button type="button" key={uuidv4()} onClick={() => dispatch(removeBook(bookItem.id))}>
            Delete
          </button>
        </div>
      )
    })}
    </ul>
  </div>);
};

export default BooksList;
