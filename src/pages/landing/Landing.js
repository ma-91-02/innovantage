import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./landing.scss";
import React, { useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import Tick from '../../images/Tick.svg';
import '../Modal/modal.scss';
// import { Link } from "react-router-dom";








const Landing = () => {
  const[modal, setModal] = useState(false)
  const toggleModal = () => {
    setModal()
  }

  if(modal){
    document.body.classList.add('modalHidden')
  } else {
    document.body.classList.remove('modalHidden')
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgbq63s', 'template_9v7cp2t', form.current, 'MtKPthrY_gOVlakqO')
      .then((result) => {
          setModal(!modal)
          console.log(result.text);
          console.log('message sent');
      }, (error) => {
          console.log(error.text);
      });
  };
  

  return (
    <section className="landing" id="landing">
      <Container fluid="xxl">
        <Row >
          <Col className="title" lg={8} xs={12}>
            <h1>
              We are <br /> <span>the Superheroes</span>
              <br /> of Technologies
            </h1>
            <p>
              Doesn’t matter what the mission is yours, we can help you solve it
            </p>
          </Col>
          <Col className="form" lg={4} xs={12}>
            <p>Leave your contact information and we will call you back!</p>
            <Form className="form__landing" ref={form} onSubmit={sendEmail}>
              <Form.Group  className="my__input__landing ">
                <Form.Control required type="text" placeholder="Full Name" name="to_name"/>
              </Form.Group>

              <Form.Group className="my__input__landing" >
                <Form.Control required type="email" placeholder="Enter email" name="from_name" />
              </Form.Group>

              <Form.Group className="my__input__landing">
                <Form.Control required type="tel" placeholder="Phone number" name="message" />
              </Form.Group>

              <Form.Group className="my__input__landing_checkbox">
                <input required type="checkbox" />
                <span>
                  I agree with <a href="https://www.freeprivacypolicy.com/live/a21ce404-d12f-48da-889f-112171cc826d">privacy policy </a>
                </span>
              </Form.Group>
        
              <Button onClick={toggleModal}  className="button__landing" variant="primary" type="submit">
                Call Me back!
              </Button>
            </Form>
           
          </Col>
        </Row>
        {modal && (
              <div className='modal active'>
              <Row>               
                <Col>
                <img src={Tick} alt="Tick"></img>
                <h3>Thank you</h3>
                <Button className="close-modal" onClick={toggleModal}>Back</Button>
                </Col>
              </Row>            
            </div>
            )}
      </Container>
    </section>
    
  );
};

export default Landing;
