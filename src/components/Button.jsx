import React from 'react';
import { Link } from 'react-router-dom';

function Button({ children, className, link }) {
  return (
    <Link to={link}>
      <button
        className={`${className} uppercase text-md hover:bg-[#CA0606] hover:text-white`}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;
