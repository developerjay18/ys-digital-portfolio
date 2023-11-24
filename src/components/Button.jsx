import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, className, link }) {
  return (
    <Link to={link}>
      <button className={`${className} uppercase text-lg font-semibold`}>
        {children}
      </button>
    </Link>
  );
}

export default Button;
