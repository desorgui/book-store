import React from 'react';
import { useDispatch } from 'react-redux/es/exports';

const Categories = () => {
  const dispatch = useDispatch();
  const CHECK_STATUS = 'book-store/categories/CHECK_STATUS';
  return (
    <>
      <button type="button" onClick={() => dispatch({ type: CHECK_STATUS })}>
        Check Status
      </button>
    </>
  );
};

export default Categories;
