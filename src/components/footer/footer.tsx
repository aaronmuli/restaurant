import './footer.css';
import { LuPhone } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className='container'>
      <div id='info'>
        <h3>La Piazzetta &trade;</h3>
        
        <div className='sub-container contact-details'>
          <LuPhone size={20} color='#fff'/>
          <p>+260 987654321</p>
        </div>
        
        <div className='sub-container contact-details'>
          <HiOutlineMail size={20} color='#fff'/>
          <p>customer@lapiazzetta.com</p>
        </div>

        <form action="">
          <input type="email" name="email" id="email-input" placeholder='email' />
          <button>subscribe</button>
        </form>

        <p>La Piazzetta &copy; 2024 All rights reserved.</p>
      </div>

      <div id='map'>
        <div className='sub-container'>
          <GrLocation size={20} color='#fff' />
          <p>La Piazzetta location</p>
        </div>
        {/* <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2990.274257380938!2d-70.56068388481569!3d41.45496659976631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e52963ac45bbcb%3A0xf05e8d125e82af10!2sDos%20Mas!5e0!3m2!1sen!2sus!4v1671220374408!5m2!1sen!2sus" 
          width="400" 
          height="250" 
          loading="lazy">
          </iframe> */}
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.5005735775244!2d28.312785410093305!3d-15.40351098512177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408baf5c4c5299%3A0xaa838b2bd52f3b83!2sLa%20Piazzetta!5e0!3m2!1sen!2szm!4v1732724783462!5m2!1sen!2szm" 
          width="400" 
          height="250"   
          loading="lazy" ></iframe>
      </div>
    </footer>
  )
}

export default Footer