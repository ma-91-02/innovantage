import { Container, Row, Col } from "react-bootstrap";
import "./aboutNumber.scss";

const AboutNumber = () => {
  return (
    <section className="section__info__number">
      <Container>
        <Row>
          <Col>
            <div>
              <span>23</span>
              <p>Team Members</p>
            </div>
          </Col>
          <Col>
            <span>35+</span>
            <p>Customers</p>
          </Col>
          <Col>
            <span>50+</span>
            <p>Projects</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutNumber;