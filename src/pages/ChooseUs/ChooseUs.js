import { Container, Row, Col } from "react-bootstrap";
import "./chooseUs.scss";

const ChooseUs = () => {
  return (
    <section className="section__choose__us">
      <Container fluid="xxl">
        <h4>Reasons to Choose Us</h4>
        <Row>
          <Col className="col__choose_us" lg={4} xs={12}>
            img
            <h4>Experienced Team</h4>
          </Col>
          <Col className="col__choose_us" lg={4} xs={12}>
            img
            <h4>Innovative mindset</h4>{" "}
          </Col>
          <Col className="col__choose_us" lg={4} xs={12}>
            img
            <h4>Center of Excellence</h4>{" "}
          </Col>
        </Row>
        <Row>
          <Col className="col__choose_us" lg={4} xs={12}>
            img
            <h4>Product Accelerators</h4>
          </Col>
          <Col className="col__choose_us" lg={4} xs={12}>
            img
            <h4>Cutting edge technolgy</h4>
          </Col>
          <Col className="col__choose_us" lg={4} xs={12}>
            img
            <h4>Adding value</h4>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
