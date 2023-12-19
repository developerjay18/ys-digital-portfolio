import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { navLinks, navLinks2 } from './data';
import { Link } from 'react-scroll';
import { toggleState } from '../store/stateSlice';
import { useLocation } from 'react-router-dom';
import { Link as RLink } from 'react-router-dom';

function BurgerMenu() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.menuClick);
  const location = useLocation();

  const isTNC = location.pathname === '/terms-and-conditions';
  const isPP = location.pathname === '/privacy-policy';

  return (
    <div
      className={`${
        state ? 'block' : 'hidden'
      }  lg:hidden absolute z-50 bg-black text-white w-full h-screen`}
    >
      {/* navlinks for TNC and PP */}
      {(isTNC || isPP) && (
        <div className="links h-full flex justify-center items-start pt-[12rem]">
          <ul className="flex gap-8 flex-col text-2xl w-full text-center">
            {navLinks2.map((link) => (
              <li key={link.name}>
                <RLink
                  to={link.slug}
                  className={`capitalize cursor-pointer`}
                  onClick={() => dispatch(toggleState())}
                >
                  {link.name}
                </RLink>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* navlinks for home page */}
      {!isTNC && !isPP && (
        <div className="links h-full flex justify-center items-start pt-[12rem]">
          <ul className="flex gap-8 flex-col text-2xl w-full text-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.slug}
                  className={`capitalize cursor-pointer`}
                  onClick={() => dispatch(toggleState())}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default BurgerMenu;
