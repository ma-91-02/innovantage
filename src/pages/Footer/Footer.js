import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Footer.scss";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Tick from '../../images/Tick.svg'
import '../Modal/modal.scss'


const Footer = () => {
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
    return(
        <section className="footer">
            <Container fluid="xxl">
                
                <Row>
                <Col className="title" lg={7} xs={12}>
                    <h1>
                    Do you have some questions?
                    </h1>
                    <p>
                    Leave your contact information and <br/> we will call you back
                    </p>
                    <Row>
                        <Col className="title__mini" lg={6} xs={5}>
                        <a href="#navbar">Home</a>
                        <a href="#aboutUs">About us </a>
                        <a href="#ourApproach">Our Approach</a>
                        </Col>
                        <Col className="title__mini" lg={6} xs={7}>
                        <a href="#weHelp">Our story</a>
                        <a href="#chooseUs">Reasons to Choose Us</a>
                        <a href="#services">Services</a>
                        </Col>
                    </Row>
                </Col>
                <Col className="form" lg={5} xs={12}>
                    <Form className="form__footer" ref={form} onSubmit={sendEmail}>
                    <Form.Group  className="my__input__footer mb-4">
                        <Form.Control required type="text" placeholder="Full Name" name="to_name" />
                    </Form.Group>
                    <Form.Group className="my__input__footer mb-4">
                        <Form.Control required type="email" placeholder="Enter email" name="from_name"/>
                    </Form.Group>

                    <Form.Group className="my__input__footer mb-4">
                        <Form.Control required type="tel" placeholder="Phone number" name="message" />
                    </Form.Group>

                    <Form.Group className="my__input__footer_police">
                        <input required type="checkbox" />
                        <span>
                        I agree with <a href="https://www.freeprivacypolicy.com/live/a21ce404-d12f-48da-889f-112171cc826d">privacy policy </a>
                        </span>
                    </Form.Group>



                    <Button onClick={toggleModal} className="button__footer" variant="primary" type="submit">
                        Call Me back!
                    </Button>
                    </Form>
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
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;