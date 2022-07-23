import PropTypes from 'prop-types';

/* eslint-disable camelcase */
function BookItem({ item_id, title, author }) {
  return (
    <li className="bookItem">
      <ul className="bookItem">
        <li key={item_id} className="bookTitle">
          {title}
        </li>
        <li className="bookAuthor">
          {author}
        </li>
      </ul>
    </li>
  );
}

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookItem;
