import { Container, Row, Col } from "react-bootstrap";
import zero from "../../images/zero.svg";
import "./buildNow.scss";
const BuildNow = () => {
  return (
    <section className="section__Build__now">
      <Container fluid="xxl">
        <Row>
          <Col className="title" lg={4} xs={6}>
            <img src={zero} alt="zero" />
          </Col>
          <Col className="form" lg={8} xs={12}>
            <h4>Build Now, Pay Later</h4>
            
            <h5>What is Software Leasing?</h5>
            <p>
              Not able to pay for development immediately? Not to worry, we can
              help you build a system now, and you can pay later. Software
              leasing can allow you to pay gradually for the software being
              built for you giving you margin to promote the software{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BuildNow;
