import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from './MailchimpForm';
import logo from '../assets/img/nishit-logo.png'
import navIcon1 from '../assets/img/icons8-linkedin.svg'
import navIcon2 from '../assets/img/icons8-github.svg'
import navIcon3 from '../assets/img/icons8-gmail1.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  return (
    <>
    
       <footer className="footer">
      <Container>
        <Row className="align-items-center">
        {/* <MailchimpForm/> */}
          <Col size={12} sm={6}>
          <TrackVisibility>
      {({isVisible})=>
        <div className={isVisible ? "animate__animated animate__fadeInTopLeft" : ""}>
            <img src={logo} alt="Logo" />
    </div>}
  </TrackVisibility>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <TrackVisibility>
      {({isVisible})=>
        <div className={isVisible ? "animate__animated animate__fadeInTopRight" : ""}>
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
              </div>}
  </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  )
}

export default Footer
