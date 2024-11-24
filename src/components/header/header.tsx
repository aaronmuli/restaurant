import './header.css';
import { NavLink, Link } from "react-router";
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  
  return (
    <header>
        <span><Link to='/'>La Piazzetta &trade;</Link></span>
        <ul>
            <NavLink to='/' 
              className={({ isActive }) =>
              isActive ? "active" : ""}>
                Home
            </NavLink>
            <NavLink to='menu'>Menu</NavLink>
            <NavLink to='about'>About Us</NavLink>
            <NavLink to='facility'>Facility</NavLink>
        </ul>
        <ul>
            <NavLink to='search'><IoSearch color='#fff' size={25} /></NavLink>
            <NavLink to='cart'><MdOutlineShoppingCart color='#fff' size={25} /></NavLink>
            <NavLink className='active-remove' to='login'>
                <button>Login</button>
            </NavLink>
        </ul>
    </header>
  )
}

export default Header