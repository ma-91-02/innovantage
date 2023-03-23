import { Container, Row } from "react-bootstrap";
import Service from "../../components/service/Service";
import "./services.scss";

const Services = () => {
  return (
    <section className="section__Services">
      <Container fluid="xxl">
        <h4>Services</h4>
        <Row className="row__services">
          
          <Service content="Agile Coaching" to="ali" />
          <Service content="Application Development" to="ali" />
          <Service content="Cloud DevOps" to="ali" />
        </Row>
        <Row className="row__services">
          <Service content="Cloud Migration" to="ali" />
          <Service content="Data Engineering" to="ali" />
          <Service content="Data Science" to="ali" />
        </Row>
        <Row className="row__services">
          <Service content="Center of Excellence" to="ali" />
          <Service content="User Experience Design" to="ali" />
          <Service content="Web Development" to="ali" />
        </Row>
      </Container>
    </section>
  );
};

export default Services;
