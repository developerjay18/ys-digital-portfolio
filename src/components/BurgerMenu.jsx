import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navLinks } from './data';
import { Link } from 'react-scroll';
import { toggleState } from '../store/stateSlice';

function BurgerMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);
  return (
    <div
      className={`${
        state ? 'block' : 'hidden'
      }  lg:hidden absolute z-50 bg-black text-white w-full h-screen`}
    >
      {/* navlinks  */}
      <div className="links h-full flex justify-center items-start pt-[12rem]">
        <ul className="flex gap-8 flex-col text-2xl w-full text-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.slug}
                className={`capitalize cursor-pointer`}
                spy={true}
                smooth={true}
                // offset={-70}
                duration={500}
                onClick={() => dispatch(toggleState())}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BurgerMenu;
