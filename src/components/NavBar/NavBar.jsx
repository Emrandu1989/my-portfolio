import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const navLinks = (
    <>
      <li> <Link to='/'>Home</Link></li>
      <li> <Link to='/about'>About</Link></li>
      <li> <Link to='/contact'>Contact</Link></li>
      <li> <Link to='/projects'>Projects</Link></li>
    </>
  );

  return (
    <>
      <div className="navbar bg-blue-700 text-white">
        <div className="flex justify-between items-end">
         
          <div>
            <div className='lg:ml-36'>
               <h2 className='text-xl font-bold'>Md.Emran Hossain</h2>
               <h4 className=''>Web Developer</h4>
            </div>
          </div>
          <div className="dropdown ml-36">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-black text-white rounded-box z-[1] mt-3 w-52 p-2  shadow">
              {navLinks}
            </ul>
          </div>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-12">
            {navLinks}
          </ul>
        </div>
      
      </div>
    </>
  );
};

export default NavBar;
