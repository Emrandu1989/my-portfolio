import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
      const navLinks = <>
             <li> <Link to='/'>Home</Link></li>
              <li> <Link to='/about'>About</Link></li>
              <li> <Link to='/contact'>Contact</Link></li>
              <li> <Link to='/projects'>Projects</Link></li>
       </>
    return (
        <>
           <div className="navbar bg-blue-700 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             {navLinks}
      </ul>
    </div>
   <div>
   <div className="btn btn-ghost text-xl">
      <img className='w-[80px] h-[80px] rounded-full' src="https://media.licdn.com/dms/image/D5603AQElIzXTxegXXQ/profile-displayphoto-shrink_800_800/0/1718464569380?e=1725494400&v=beta&t=ISTKuVsvizBjeiVxTF6JBh-yKLHws-kqkOLKUlS7Jdw" alt="ImranImg" />
      <h3>Md Emran Hossain</h3>

    </div>
   
   </div>
     
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       
          {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Download Resume</a>
  </div>
</div>   
        </>
    );
};

export default NavBar;