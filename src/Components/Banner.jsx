import { useState , useEffect} from 'react'

import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {ArrowRightCircle} from 'react-bootstrap-icons'
import headerImg from '../assets/img/header-img.svg'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

function Banner() {

    const [loopNum,setLoopNum] = useState(0);
    const [isDeleting,setIsDeleting] = useState(false);
    const toRotate = ['Full Stack Developer'];
    const [text,setText] = useState('')
    const [delta,setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick()
        },delta);

        return () => {clearInterval(ticker)}
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period)
        }else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500)
        }
    }

  return (
    <>
      <section className='banner' id='home'>
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({isVisible})=>
                    <div className={isVisible ? "animate__animated animate__slideInDown" : ""}>
                    <span className='tagline'>Welcome to My Portfolio</span>
                    <h1>{`Hello I'm Nishit `} 
                        <span className='warp'>{text}</span>
                    </h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Inventore ex error cupiditate minima in ad ut voluptatem officiis! Nobis, blanditiis! Accusantium, eos cum consequatur voluptas amet repellat dolore rem quaerat cumque, facilis enim consequuntur eligendi pariatur nostrum officiis qui velit sint, quia vero iste. Perspiciatis pariatur expedita totam facere mollitia.</p>
                    <button onClick={() => console.log('connect')}>Let's Connect<ArrowRightCircle size={25}/></button>
                    </div>
                    }
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header img" />
                </Col>
            </Row>
        </Container>
      </section>
    </>
  )
}

export default Banner
