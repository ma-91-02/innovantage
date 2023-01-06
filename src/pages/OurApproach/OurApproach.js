import { Container, Row } from "react-bootstrap";
import ChildApproach from "../../components/childApproach/ChildApproach";
import evaluate from "../../images/evaluate.svg";
import development from "../../images/Development.svg";
import deployment from "../../images/Deployment.svg";
import "./ourApproach.scss";
const OurApproach = () => {
  return (
    <section className="section__our__approach">
      <Container fluid="xxl">
        <Row className="our__approach__content">
          <h4>Our Approach</h4>
          <p>
            Our approach helps solve all business problems and challenges by
            creating innovative solutions
          </p>
        </Row>
        <Row className="our_approach_block">
          <ChildApproach
            title="Evaluate"
            content="Gather all the requirements from the client"
            imgSrc={evaluate}
            alt="evaluate"
          />
          <ChildApproach
            title="Development"
            content="Create a solution using the latest technology"
            imgSrc={development}
            alt="development"
          />
          <ChildApproach
            title="Deployment"
            content="Deploy the system on production environment"
            imgSrc={deployment}
            alt="deployment"
          />
        </Row>
      </Container>
    </section>
  );
};

export default OurApproach;
