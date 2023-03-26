import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./landing.scss";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Landing = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hgbq63s', 'template_9v7cp2t', form.current, 'MtKPthrY_gOVlakqO')
      .then((result) => {
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
                <Form.Control type="text" placeholder="Full Name" name="to_name"/>
              </Form.Group>

              <Form.Group className="my__input__landing" >
                <Form.Control type="email" placeholder="Enter email" name="from_name" />
              </Form.Group>

              <Form.Group className="my__input__landing">
                <Form.Control type="tel" placeholder="Phone number" name="message" />
              </Form.Group>

              <Button className="button__landing" variant="primary" type="submit">
                Call Me back!
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Landing;
