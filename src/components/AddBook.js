import { useDispatch } from "react-redux/es/exports";
import { addBook } from "../redux/books/books";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function AddBook() {
  const dispatch = useDispatch();

  const [titleInput, setBookInput] = useState('');
  const [authorInput, setAuthorInput] = useState('');

  const handleTitle = (e) => {
    setBookInput(e.target.value);
  };
  const handleAuthor = (e) => {
    setAuthorInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook({
      title: titleInput,
      author: authorInput,
      id: uuidv4(),
    }));
  };

  return (
    <form>
      <input
        type="text"
        value={titleInput}
        className="input-text"
        placeholder="Title"
        name="title"
        onChange={(e) => handleTitle(e)}
      />
      <input
        type="text"
        value={authorInput}
        className="input-text"
        placeholder="Author"
        name="author"
        onChange={(e) => handleAuthor(e)}
      />
      <button type="button" onClick={handleSubmit}>ADD BOOK</button>
    </form>
  );
}
