import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./Footer.scss";

const Footer = () => {
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
                        <a href="#services">Software Leasing</a>
                        </Col>
                    </Row>
                </Col>
                <Col className="form" lg={5} xs={12}>
                    <Form className="form__footer">
                    <Form.Group  className="my__input__footer mb-4">
                        <Form.Control type="Text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group className="my__input__footer mb-4">
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="my__input__footer mb-4">
                        <Form.Control type="tel" placeholder="Phone number" />
                    </Form.Group>
                    <Button className="button__footer" variant="primary" type="submit">
                        Call Me back!
                    </Button>
                    </Form>
                </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Footer;