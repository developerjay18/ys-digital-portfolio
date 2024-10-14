import React from 'react';
import { Logo } from '../../assets';
import { calLink, navLinks } from '../data';
import { Link } from 'react-scroll';
import { useDispatch, useSelector } from 'react-redux';
import { toggleState } from '../../store/stateSlice';
import { Link as RLink } from 'react-router-dom';

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => {
    console.log(state);
    state.auth.menuClick;
  });

  return (
    <header className="z-20">
      <div className="mx-auto">
        {/* main-header */}
        <div className="main-header px-5 lg:px-10 container mx-auto flex justify-between items-center py-3 lg:py-4 pb-12 lg:pb-0">
          {/* --logo-container */}
          <Link to={'/'} className="w-[16%] lg:w-[5%]">
            <div className="logo w-full">
              <img
                src={
                  'https://res.cloudinary.com/practice-jay-cloud/image/upload/v1704374737/ysd/logo_g7tfxx.svg'
                }
                alt="logo"
                className="bg-white border-2 border-black rounded-full"
              />
            </div>
          </Link>
          {/* --links-container */}
          <div className="links text-lg hidden lg:block">
            <ul className="flex gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.slug}
                    className={`capitalize cursor-pointer`}
                    spy={true}
                    smooth={true}
                    // offset={-70}
                    duration={500}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* hamburger menu  */}
          <div
            className="hamburger block lg:hidden"
            onClick={() => dispatch(toggleState())}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
