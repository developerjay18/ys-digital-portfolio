import React from 'react';
import { Logo } from '../../assets';
import { navLinks } from '../data';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';

function Header() {
  return (
    <header className="z-20">
      <div className="mx-auto">
        {/* offer bar */}
        <div className="offerbar capitalize bg-black text-white flex justify-center items-center py-2 text-lg gap-10 mt-5">
          <span>grab your 7 day free trial : valid only for next 3 days</span>
          <button className="bg-lightGrey text-black p-1 px-2 rounded-full capitalize">
            claim now
          </button>
        </div>
        {/* main-header */}
        <div className="main-header px-5 lg:px-0 container mx-auto flex justify-between items-center py-4">
          {/* --logo-container */}
          <Link to={'/'} className="w-[5%]">
            <div className="logo w-full">
              <img
                src={Logo}
                alt="logo"
                className="bg-white border-2 border-black rounded-full"
              />
            </div>
          </Link>
          {/* --links-container */}
          <div className="links text-lg">
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
        </div>
      </div>
    </header>
  );
}

export default Header;
