import PropTypes from 'prop-types';

function BookItem({ id, title, author }) {
  return (
    <li>
      <ul>
        <li key={id}>
          {title}
        </li>
        <li>
          {author}
        </li>
      </ul>
    </li>
  );
}

BookItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.func.isRequired,
  author: PropTypes.func.isRequired,
};
export default BookItem;
