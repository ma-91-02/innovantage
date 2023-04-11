import { Container, Row } from "react-bootstrap";
import Service from "../../components/service/Service";
import "./services.scss";

const Services = () => {
  
  return (
    <section className="section__Services" id="services">
      <Container fluid="xxl">
        <h4>Services</h4>
        <Row className="row__services">
          <Service content="Agile Coaching" to='We coming soon' />
          <Service content="Application Development" to='We coming soon' />
          <Service content="Cloud DevOps" to="We coming soon" />
        </Row>
        <Row className="row__services">
          <Service content="Cloud Migration" to='We coming soon' />
          <Service content="Data Engineering" to="We coming soon" />
          <Service content="Data Science" to="We coming soon" />
        </Row>
        <Row className="row__services">
          <Service content="Center of Excellence" to="We coming soon" />
          <Service content="User Experience Design" to="We coming soon" />
          <Service content="Web Development" to="We coming soon" />
        </Row>
      </Container>
    </section>
  );
};

export default Services;
