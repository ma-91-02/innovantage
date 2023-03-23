import { Container, Row, Col, Button, Form } from "react-bootstrap";
import "./landing.scss";

const Landing = () => {
  return (
    <section className="landing">
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
            <Form className="form__landing">
              <Form.Group  className="my__input__landing ">
                <Form.Control type="Text" placeholder="Full Name" />
              </Form.Group>
              <Form.Group className="my__input__landing">
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="my__input__landing">
                <Form.Control type="tel" placeholder="Phone number" />
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
