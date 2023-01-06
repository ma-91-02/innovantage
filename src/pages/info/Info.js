import { Container, Row, Col } from "react-bootstrap";
import InfoNumber from "../../components/infoNumber/InfoNumber";
import "./info.scss";

const Info = () => {
  return (
    <>
    <section className="section__info">
      <Container fluid="xxl">
        <Row>
          <Col className="img__info" lg={6} xs={12}>
            image
          </Col>
          <Col className="content__info" lg={6} xs={12}>
            <h4>
              Providing end to end highest quality and innovative solutions{" "}
            </h4>
            <p>
              We are a startup built on trust, transparency, integrity, and
              leadership with an agile mindset that focus to deliver highest
              quality and innovative solutions using cutting edge technology for
              improving lives and businesses
            </p>
          </Col>
        </Row>
      </Container>
    </section>
    <InfoNumber/>
    </>
  );
};

export default Info;
