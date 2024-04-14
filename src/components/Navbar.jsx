import React , {useState} from 'react';
import { Link } from 'react-scroll';
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
    const [show, setShow] = useState(false)
  return (
    <nav>
        <div className="logo">Eventify</div>
        <div className = {show ? "navLinks showmenu": "navLinks"}>
            <div className="links">
                <Link to = "landing" spy={true} smooth= {true} duration= {500}>Home</Link>
                <Link to = "services" spy={true} smooth= {true} duration= {500}>About Us</Link>
                <Link to = "about" spy={true} smooth= {true} duration= {500}>Services</Link>
                <Link to = "contact" spy={true} smooth= {true} duration= {500}>Contact Us</Link>

            </div>
        </div>
        <div className="hamburger" conClick={()=> setShow(!show)}>
<GiHamburgerMenu/>
        </div>
    </nav>
  )
}
