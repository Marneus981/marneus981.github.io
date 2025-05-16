import React from 'react'
import { Link } from "react-scroll";
import Hamburger from 'hamburger-react'
import './navbar.css'
import '../../config'

// import logo from '../../assets/placeholder/logo.png'
// import menu_icon from '../../assets/placeholder/menu_icon.png'

const Navbar = () => {

    // Trigger a boolean when screen size is less than 1633 px
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1633);
        };

        // Initial check
        handleResize();

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    // Trigger a boolean when scroll is greater than 150 px
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
    // Trigger a boolean when the hamburger menu is clicked
    const [mobileMenu, setMobileMenu] = React.useState(false);
    const toggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }
  
    return (
    <nav className={`container ${sticky ? 'dark_nav' : 'light_nav'}`}>
        {/* <img src={logo} alt="" className='logo'/> */}
        <h1 className={`${sticky ? 'dark_h1' : 'light_h1'}`}>
            Marcos David Madrigal Albores <br/>
            <span className='un'>Software Engineer </span>
            <span className='deux'>Storyteller </span>
            <span className='trois'>Artist</span>
        </h1>
        
        
        {/* <ul className={mobileMenu? '' : 'hide_mobile_menu'}>
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

        </ul> */}
        <ul class= {`menu-hover-fill ${((!sticky)&&(!isMobile)) || ((!sticky)&&(!mobileMenu))? 'light_menu' : 'dark_menu' } flex flex-col items-start leading-none text-2xl uppercase space-y-4 ${mobileMenu ? '' : 'hide_mobile_menu'}`}>
            <li><a href="#" data-text="About Me"><Link to='hero' smooth={true} offset={0} duration={500}>
            About Me</Link></a></li>
            <li><a href="#" data-text="Academic Life"><Link to='program' smooth={true} offset={-260} duration={500}>
            Academic Life</Link></a></li>
            <li><a href="#" data-text="University Projects"><Link to='about' smooth={true} offset={-150} duration={500}>
            University Projects</Link></a></li>
            <li><a href="#" data-text="Personal Projects"><Link to='campus' smooth={true} offset={-260} duration={500}>
            Personal Projects</Link></a></li>
            <li><a href="#" data-text="Other Passions"><Link to='testimonials' smooth={true} offset={-260} duration={500}>
            Other Passions</Link></a></li>
            <li><a href="#" data-text="Contact Me"><Link to='contact' smooth={true} offset={-260} duration={500}>
            Contact Me</Link></a></li>
        </ul>
        <Hamburger className= 'hamburger' toggled={mobileMenu} toggle={setMobileMenu}
            size={30} color={((!sticky)&&(!isMobile)) || ((!sticky)&&(!mobileMenu))?  'var(--quatre)':'var(--cinq)'}
            distance="sm" rounded label="Menu" />
        {/* <Hamburger toggled={mobileMenu} toggle={setMobileMenu} size={20} color={sticky ? '#fff' : '#000'} distance="sm" rounded label="Show menu" /> */}
        {/* <div className='menu_icon' onClick={toggleMenu}></div> */}
        {/* <img src={menu_icon} alt="" className='menu_icon'/> */}
        {/* <img src={menu_icon} alt="" className='menu_icon'onClick={toggleMenu}/> */}
    </nav>

  )
}

export default Navbar

