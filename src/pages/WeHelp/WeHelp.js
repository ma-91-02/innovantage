import { Container, Row, Col, Button } from "react-bootstrap";
import "./weHelp.scss";

const WeHelp = () => {
  return (
    <section className="section__we__help">
      <Container fluid="xxl">
        <Row>
          <Col  lg={6} xs={12}>
            <h4>
              We Help Businesses
              <br /> Solve the Most Complex Problems
            </h4>
            <p>
              Innovantage’s core values include learning from the experience,
              growing, and helping businesses solve problems
            </p>
            <Button>More</Button>
          </Col>
          <Col lg={6} xs={12}>
            image
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeHelp;
