import React from 'react'
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import './navbar.css'
import '../../config'
import Hamburger_Custom from '../hamburger/hamburger';

const Navbar = () => {
    const [isMobile, setIsMobile] = React.useState(false);
    const [sticky, setSticky] = React.useState(false);
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const [navHeight, setNavHeight] = React.useState(0);
    const navRef = React.useRef(null);

    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1633);
            if (navRef.current) setNavHeight(navRef.current.offsetHeight);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    React.useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        });
    }, []);

    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }
  
    return (
    <nav ref={navRef} className={`container ${sticky ? 'dark_nav' : 'light_nav'}`}>
        {/* <img src={logo} alt="" className='logo'/> */}
        <h1 className={`${sticky ? 'dark_h1' : 'light_h1'}`}>
            Marcos David Madrigal Albores <br/>
            <span className='un'>Software Engineer </span>
            <span className='deux'>Storyteller </span>
            <span className='trois'>Artist</span>
        </h1>
        
        <ul className={`menu-hover-fill ${((!sticky)&&(!isMobile)) || ((!sticky)&&(!mobileMenu))? 'light_menu' : 'dark_menu' } flex flex-col items-start leading-none text-2xl uppercase space-y-4 ${mobileMenu ? '' : 'hide_mobile_menu'}`}>
            <li><a href="#aboutme" data-text="About Me"><Link to='aboutme' smooth={true} offset={-navHeight} duration={500}>About Me</Link></a></li>
            <li><a href="#work-experience" data-text="Work Experience"><Link to='work-experience' smooth={true} offset={-navHeight} duration={500}>Work Experience</Link></a></li>
            <li><a href="#university-projects" data-text="University Projects"><Link to='university-projects' smooth={true} offset={-navHeight} duration={500}>University Projects</Link></a></li>
            <li><a href="#personal-projects" data-text="Personal Projects"><Link to='personal-projects' smooth={true} offset={-navHeight} duration={500}>Personal Projects</Link></a></li>
            <li><a href="#other-passions" data-text="Other Passions"><Link to='other-passions' smooth={true} offset={-navHeight} duration={500}>Other Passions</Link></a></li>
            <li><a href="#contact" data-text="Contact Me"><Link to='contact' smooth={true} offset={-navHeight} duration={500}>Contact Me</Link></a></li>
        </ul>
        
        <Hamburger_Custom 
            model={4} 
            onClick={toggleMenu} 
            isOpen={mobileMenu} 
            color={((!sticky)&&(!isMobile)) || ((!sticky)&&(!mobileMenu))?  'var(--quatre)':'var(--cinq)'}
            size={40}
            display={!isMobile?  'none':'block'}
            positionRight='5%'/>
    </nav>

  )
}

export default Navbar

