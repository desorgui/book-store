import PropTypes from 'prop-types';

/* eslint-disable camelcase */
function BookItem({ item_id, title, author }) {
  return (
    <li>
      <ul>
        <li key={item_id}>
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
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookItem;
