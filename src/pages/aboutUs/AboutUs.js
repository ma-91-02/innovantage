import { Container, Row, Col } from "react-bootstrap";
import AboutNumber from "../../components/aboutNumber/AboutNumber";
import aboutUs from "../../images/aboutUs.svg";
import "./aboutUs.scss";

const AboutUs = () => {
  return (
    <>
      <section className="section__about">
        <Container fluid="xxl">
          <Row>
            <Col className="img__about" lg={6} xs={12}>
              <img src={aboutUs} alt="about us"/>
            </Col>
            <Col className="content__about" lg={6} xs={12}>
              <h4>
                Providing end to end highest quality and innovative solutions{" "}
              </h4>
              <p>
                We are a startup built on trust, transparency, integrity, and
                leadership with an agile mindset that focus to deliver highest
                quality and innovative solutions using cutting edge technology
                for improving lives and businesses
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <AboutNumber />
    </>
  );
};

export default AboutUs;
