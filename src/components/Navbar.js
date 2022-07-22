import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];

  return (
    <nav className="navBar">
      <h2>Bookstore CMS</h2>
      <ul className="showMenu">
        {links.map((link) => (
          <li key={link.id}>
            <NavLink
              to={link.path}
              className={(isActive) => `nav-link${!isActive ? ' unselected' : ''}`}
            >
              {link.text}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
