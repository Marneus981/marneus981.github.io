import React from 'react'
import './navbar.css'
import logo from '../../assets/placeholder/logo.png'

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
  return (
    <nav className={`container ${sticky ? 'dark_nav' : ''}`}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li>About Me</li>
            <li>Education</li>
            <li>University Projects</li>
            <li>Personal Projects</li>
            <li>Other Skills</li>
            <li>About This Page</li>
            <li><button className='btn'>Contact Me</button></li>
        </ul>
    </nav>
  )
}

export default Navbar

