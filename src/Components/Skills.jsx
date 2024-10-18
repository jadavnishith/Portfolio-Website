import React from 'react'
import Carousel from 'react-multi-carousel'
import "react-multi-carousel/lib/styles.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import meter1 from '../assets/img/icons8-html5.svg'
import meter2 from '../assets/img/icons8-css.svg'
import meter3 from '../assets/img/icons8-c-programming.svg'
import meter4 from '../assets/img/jquery-4.svg'
import meter5 from '../assets/img/icons8-bootstrap.svg'
import meter6 from '../assets/img/icons8-javascript.svg'
import meter7 from '../assets/img/icons8-react-js.svg'
import colorSharp from '../assets/img/color-sharp.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Skills() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <>
      <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                    <div className='skill-bx'>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio corrupti sed placeat libero quis earum dicta? Sit ipsa ex reprehenderit numquam facere quia dolorem cum, obcaecati quod consequuntur odit nobis.</p>
                        </div>}
                        </TrackVisibility>
                        <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                            <div className='item'>
                                <img src={meter1} alt="image" />
                                <h5>HTML 5</h5>
                            </div>
                            <div className='item'>
                                <img src={meter2} alt="image" />
                                <h5>CSS 3</h5>
                            </div>
                            <div className='item'>
                                <img src={meter3} alt="image" />
                                <h5>C Language</h5>
                            </div>
                            <div className='item'>
                                <img src={meter4} alt="image" />
                                <h5>J QUERY</h5>
                            </div>
                            <div className='item'>
                                <img src={meter5} alt="image" />
                                <h5>BOOTSTRAP 5</h5>
                            </div>
                            <div className='item'>
                                <img src={meter6} alt="image" />
                                <h5>JAVASCRIPT</h5>
                            </div>
                            <div className='item'>
                                <img src={meter7} alt="image" />
                                <h5>REACT JS</h5>
                            </div>
                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp} alt="" />
      </section>
    </>
  )
}

export default Skills
