function BookItem({ id, title, author, }) {
  return (
      <li><ul>
        <li key={id}>
          {title}
        </li>
        <li> {author}</li>
      </ul>
      </li>
  );
}

export default BookItem;
