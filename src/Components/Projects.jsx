import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import { ProjectCard } from './ProjectCard';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/projImg1.png'
import projImg2 from '../assets/img/projImg2.png'
import projImg3 from '../assets/img/projImg3.png'
import projImg4 from '../assets/img/projImg4.png'
import projImg5 from '../assets/img/projImg5.png'
import {Github} from 'react-bootstrap-icons'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Projects() {

    const projects = [
        {
            title:"HR Ninja Consulting Clone",
            description:"Design & Develompent",
            imgUrl:projImg1,
            gitHubUrl:<a href="https://github.com/jadavnishith/HR-Niinja-Clone" target='_blank'><Github color="white" size={25} style={{marginTop:'20px'}}></Github></a>
        },
        {
            title:"Red & White Clone",
            description:"Design & Develompent",
            imgUrl:projImg2,
            gitHubUrl:<a href="https://github.com/jadavnishith/Red-White-clone" target='_blank'><Github color="white" size={25} style={{marginTop:'20px'}}></Github></a>

        },
        {
            title:"Esigned",
            description:"Design & Develompent",
            imgUrl:projImg3,
            gitHubUrl:<a href="https://github.com/jadavnishith/Esigned-Website" target='_blank'><Github color="white" size={25} style={{marginTop:'20px'}}></Github></a>

        },
        {
            title:"Frontend Bootcamp",
            description:"Design & Develompent",
            imgUrl:projImg4,
            gitHubUrl:<a href="https://github.com/jadavnishith/Frontend-Bootcamp-Website" target='_blank'><Github color="white" size={25} style={{marginTop:'20px'}}></Github></a>

        },
        {
            title:"Weather App",
            description:"Design & Develompent",
            imgUrl:projImg5,
            gitHubUrl:<a href="https://github.com/jadavnishith/WEATHER-APP-JS" target='_blank'><Github color="white" size={25} style={{marginTop:'20px'}}></Github></a>

        },
        {
            title:"Business Startup",
            description:"Design & Develompent",
            imgUrl:projImg3,
            gitHubUrl:<a href="https://github.com/jadavnishith/JAVASCRIPT" target='_blank'><Github color="white" size={25} style={{marginTop:'20px'}}></Github></a>

        },
        
    ]
  return (
    <>
      <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__slideInDown" : ""}>
                    <h2>Projects</h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel dolorem perferendis laudantium consectetur, esse nulla, ad maxime fugiat veritatis, nihil voluptates et a. Deleniti aliquid voluptatibus, rerum et odio ullam.</p>
                    </div>}
                    </TrackVisibility>
                    <Tab.Container id='projects-tabs' defaultActiveKey="first">
                    <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
                    <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                    </Nav>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <Row>
                                {
                                    projects.map((project,index) => {
                                        return(
                                            <ProjectCard 
                                            key={index}
                                            {...project}
                                            />
                                        )
                                    })
                                }
                            </Row>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">UpComing...</Tab.Pane>
                        <Tab.Pane eventKey="third">UpComing...</Tab.Pane>
                    </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className="background-image-right" src={colorSharp2} alt="" />
      </section>
    </>
  )
}

export default Projects
