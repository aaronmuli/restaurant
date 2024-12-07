import './header.css';
import { NavLink, Link } from "react-router";
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosMenu, IoIosClose } from "react-icons/io";
import { useState } from 'react';

const Header = () => {

  const [open, setOpen] = useState(false);

  const openMenu = () => {
    setOpen(!open);
  }

  const close = () => {
    setOpen(false);
  }
  
  return (
    <header>
        <span><Link to='/'>La Piazzetta &trade;</Link></span>
        <ul className='desktop-menu'>
            <NavLink to='/' 
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
              isActive ? "active" : ""}>
                Home
            </NavLink>
            <NavLink to='menu'>Menu</NavLink>
            <NavLink to='about'>About Us</NavLink>
            <NavLink to='facility' onClick={close} >Facility</NavLink>
        </ul>
        <ul className='desktop-menu'>
            <NavLink to='search'><IoSearch color='#fff' size={25} /></NavLink>
            <NavLink to='cart'><MdOutlineShoppingCart color='#fff' size={25} /></NavLink>
            <NavLink className='active-remove' to='login'>
                <button>Login</button>
            </NavLink>
        </ul>

        <div id='mobile-menu-container'>
          <div id='menu-harmburger' onClick={openMenu}>
            {
              open 
              ?
              <IoIosClose color='#fff' size={40} />
              :
              <IoIosMenu color='#fff' size={30} /> 
            }
          </div>

           {
              (open) 
                ?  (
                <div id='mobile-menu'>
                  <ul>
                    <NavLink to='/' 
                      className={({ isActive }) =>
                      isActive ? "active" : ""}>
                        Home
                    </NavLink>
                    <NavLink to='menu'>Menu</NavLink>
                    <NavLink to='about'>About Us</NavLink>
                    <NavLink to='facility'>Facility</NavLink>
                  
                    <NavLink className="menu-flex" to='search'><IoSearch color='#fff' size={25} /> Search</NavLink>
                    <NavLink className="menu-flex" to='cart'><MdOutlineShoppingCart color='#fff' size={25} /> Cart</NavLink>
                  
                    <NavLink className='active-remove' to='login'>
                        <button>Login</button>
                    </NavLink>
                  </ul>
                </div>
                ) 
                : <></>
           }
          
        </div>
    </header>
  )
}

export default Header