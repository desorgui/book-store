import PropTypes from 'prop-types';
import swal from 'sweetalert';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/actions/books';

/* eslint-disable camelcase */
function BookItem({ item_id, title, author }) {
  const dispatch = useDispatch();

  const removeBookwithId = (id) => {
    swal({
      title: 'Are you sure?',
      text: 'Once deleted, you will not be able to recover this imaginary file!',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          dispatch(deleteBook(id));
          swal('Poof! Your imaginary file has been deleted!', {
            icon: 'success',
          });
        } else {
          swal('Your imaginary file is safe!');
        }
      });
  };
  return (
    <>
      <li className="bookItem">
        <ul className="bookItem">
          <li className="book-category">Action</li>
          <li key={item_id} className="bookTitle">
            {title}
          </li>
          <li className="bookAuthor">
            {author}
          </li>
          <li>
            <ul className="book-action">
              <li>
                <input type="button" value="Comment" />
              </li>
              <li>
                <input type="button" onClick={() => removeBookwithId(item_id)} value="Remove" />
              </li>
              <li>
                <input type="button" value="Edit" />
              </li>
            </ul>
          </li>
        </ul>
      </li>
      <div className="progressbar">
        <svg className="progressbar__svg">
          <circle cx="40" cy="40" r="35" className="progressbar__svg-circle circle-scss shadow-scss" />
        </svg>
        <span className="progressbar__text shadow-scss">60%</span>
      </div>
      <div className="book-progress">
        <span className="progress-title">Current Chapter</span>
        <span>Chapter 17</span>
        <button className="bookBigButton" type="button">
          Update Progress
        </button>
      </div>
    </>
  );
}

BookItem.propTypes = {
  item_id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
export default BookItem;
