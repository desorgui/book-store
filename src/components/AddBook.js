export default function AddBook() {
  return (
    <form>
      <input
        type="text"
        className="input-text"
        placeholder="Title"
        name="title"
      />
      <input
        type="text"
        className="input-text"
        placeholder="Author"
        name="author"
      />
      <button type="button">ADD BOOK</button>
    </form>
  );
}
