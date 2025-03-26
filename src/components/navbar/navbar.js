import React from 'react'
import { Link } from "react-scroll";
import './navbar.css'
import logo from '../../assets/placeholder/logo.png'
import menu_icon from '../../assets/placeholder/menu_icon.png'

const Navbar = () => {

    const [sticky, setSticky] = React.useState(false);
    // Use once
    React.useEffect(() => {

        window.addEventListener('scroll', () => {

            if (window.scrollY > 150) {
                setSticky(true);
            } else {
                setSticky(false);
            }
            // Alternatively 
            // window.scrollY > 50 ? setSticky(true) : setSticky(false);
        });

    }, []);
    
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }
  
    return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu? '' : 'hide_mobile_menu'}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>
            About Me
            </Link></li>

            <li><Link to='program' smooth={true} offset={-260} duration={500}>
            Education
            </Link></li>

            <li><Link to='about' smooth={true} offset={-150} duration={500}>
            University Projects</Link></li>
            
            <li><Link to='campus' smooth={true} offset={-260} duration={500}>
            Personal Projects</Link></li>
            
            <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Other Skills</Link></li>
            
            <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>
            Contact Me</Link></li>

        </ul>
        <img src={menu_icon} alt="" className='menu_icon'onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar

