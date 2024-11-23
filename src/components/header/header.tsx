import './header.css';
import { IoSearch } from 'react-icons/io5';
import { MdOutlineShoppingCart } from "react-icons/md";

const Header = () => {
  return (
    <header>
        <span>La Piazetta</span>
        <ul>
            <li>Home</li>
            <li>Menu</li>
            <li>About Us</li>
            <li>Facility</li>
        </ul>
        <ul>
            <li><IoSearch color='#fff' size={25} /></li>
            <li><MdOutlineShoppingCart color='#fff' size={25} /></li>
            <li>
                <button>Login</button>
            </li>
        </ul>
    </header>
  )
}

export default Header