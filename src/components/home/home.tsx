import { FiArrowUpRight } from "react-icons/fi";
import { TbArmchair, TbTruckDelivery, TbPaperBag  } from "react-icons/tb";
import './home.css';
import IMAGE from '../../assets/bg.png';
import { NavLink } from "react-router";
import Footer from '../footer/footer.tsx';

const Home = () => {
    return (
        <div id="hero">
            <section id="section-1">
                <div className="container" id="left-hero">
                    <h1>The taste of tradition,
                        with a modern twist.</h1>
                    <p>La Piazzetta serves food so delicious it transports you
                        straight to the heart of Italy, with authentic flavors and
                        fresh ingredients that leave a lasting impression on every
                        bite; it’s the perfect spot for food enthusiasts, couples, and
                        families looking to enjoy a genuine Italian dining
                        experience in a cozy, welcoming atmosphere.</p>
                    <div>
                        <NavLink to='explore'>
                            <button className="btn-container" id='explore-btn'>Explore</button>
                        </NavLink>
                        
                        <NavLink to='menu'>
                            <button className="btn-container" id="menu-btn">See Menu <FiArrowUpRight size={20} color="#ff533d"/></button>
                        </NavLink>
                    </div>
                </div>
                <div className="container" id="right-hero">
                    <img src={IMAGE} alt="background" width={'100%'} height={'100%'} id="background-img" />
                </div>
            </section>
            <section className="container" id="benefits-container">
                <p id="benefits-p">Why <span id="benefits-span">La Piazzetta?</span></p>
                <div id="benefits">
                    <div className="benefit">
                        <TbArmchair size={90} color="#ff533d"/>
                        <p>Outdoor Seating</p>
                    </div>
                    <div className="benefit">
                        <TbTruckDelivery size={90} color="#ff533d"/>
                        <p>Delivery</p>
                    </div>
                    <div className="benefit">
                        <TbPaperBag size={90} color="#ff533d"/>
                        <p>Takeaway</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home