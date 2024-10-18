import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import logo from '../assets/img/nishit-logo.png'
import navIcon1 from '../assets/img/icons8-linkedin.svg'
import navIcon2 from '../assets/img/icons8-github.svg'
import navIcon3 from '../assets/img/icons8-gmail1.svg'



function NavBar() {
    const [activeLink,setActiveLink] = useState('home');
    const [scrolled,seScrolled] = useState(false)

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
               seScrolled(true); 
            }else{
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll",onScroll)
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    } 

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : "" }>
      <Container>
        <Navbar.Brand href="#home">
            <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Contact</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
                <a href="https://www.linkedin.com/in/nishit-jadav-9a85b1292/" target='_blank'><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/jadavnishith" target='_blank'><img src={navIcon2} alt="" /></a>
                <a href="mailto:mrnick076@gmail.com" target='_blank'><img src={navIcon3} alt="" /></a>
            </div>
            <button className='vvd' onClick={()=>console.log("connect")}>
                <span>Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
