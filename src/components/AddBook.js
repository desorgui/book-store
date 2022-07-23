import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { v4 as uuidv4 } from 'uuid';
// import { addBook } from '../redux/books/books';
import { createBook } from '../redux/actions/books';

const initialBookState = {
  item_id: `${uuidv4()}`,
  title: '',
  author: '',
  category: 'under Construction',
};

export default function AddBook() {
  const [book, setBook] = useState(initialBookState);
  const dispatch = useDispatch();
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBook({ ...book, [name]: value });
  };

  const saveBook = () => {
    /* eslint-disable camelcase */
    const {
      item_id, title, author, category,
    } = book;
    dispatch(createBook(item_id, title, author, category))
      .then((data) => {
        setBook({
          item_id: uuidv4(),
          title,
          author,
          category: 'under construction',
        });
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <form>
      <input
        type="text"
        value={book.title || ''}
        className="input-text"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
      />
      <input
        type="text"
        value={book.author || ''}
        className="input-text"
        placeholder="Author"
        name="author"
        onChange={handleInputChange}
      />
      <button type="button" onClick={saveBook}>ADD BOOK</button>
    </form>
  );
}
