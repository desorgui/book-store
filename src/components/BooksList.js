import React from 'react';
import BookItem from './BookItem';

const BooksList = () => (
  <div>
    <ul className="BookList" />
    <BookItem />
    <button type="button">Delete</button>
  </div>
);

export default BooksList;
