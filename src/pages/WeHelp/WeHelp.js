import { Container, Row, Col, Button } from "react-bootstrap";
import story from "../../images/story.svg";
import "./weHelp.scss";

const WeHelp = () => {
  return (
    <section className="section__we__help">
      <Container fluid="xxl">
        <Row>
          <Col lg={6} xs={12} className="we__help__padding">
            <h4>
              We Help Businesses
              <br /><span> Solve the Most Complex Problems</span>
            </h4>
            <p>
              Innovantage’s core values include learning from the experience,
              growing, and helping businesses solve problems
            </p>
            <Button className="button__we__help">More</Button>
          </Col>
          <Col lg={6} xs={12}>
            <img src={story} alt="story" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WeHelp;
