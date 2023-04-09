import { Container, Row, Col } from "react-bootstrap";
import "./aboutNumber.scss";
import CountUp from 'react-countup'
import React, {useState} from 'react'
import ScrollTrigger from 'react-scroll-trigger'
    

const AboutNumber = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    
    <section className="section__info__number">
      <Container>
        <Row>
          <Col>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div>
            <span>
              {counterOn && <CountUp start={0} end={23} duration={2} delay={0}/>}
            </span>
            
              <p>team members</p>
            </div>
            </ScrollTrigger>
          </Col>
          <Col>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div>
            <span>
              {counterOn && <CountUp start={0} end={35} duration={2} delay={0}/>}
              +
            </span>
            
              <p>customers</p>
            </div>
            </ScrollTrigger>
          </Col>
          <Col>
          <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=> setCounterOn(false)}>
            <div>
            <span>
              {counterOn && <CountUp start={0} end={50} duration={2} delay={0}/>}
              +
            </span>
            
              <p>projects</p>
            </div>
            </ScrollTrigger>
          </Col>
        </Row>
      </Container>
    </section>

  );
};

export default AboutNumber;