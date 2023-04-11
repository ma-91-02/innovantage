import { Container, Row, Col, Button } from "react-bootstrap";
import { useState } from "react";
import story from "../../images/story.svg";
import "./weHelp.scss";

const WeHelp = () => {
  const [modal,setModal] = useState(false)

  const toggleModal = () => {
    setModal(!modal)
  }
  const backModal = () => {
    setModal()
  }

  if(modal){
    document.body.classList.add('modalHidden')
  } else {
    document.body.classList.remove('modalHidden')
  }
  return (
    <section className="section__we__help" id="weHelp">
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
            <Button className="button__we__help" onClick={toggleModal}>More</Button>
          </Col>
          <Col lg={6} xs={12}>
            <img src={story} alt="story" />
          </Col>
        </Row>
        {modal && (
        <div className="wrapper_more">
        <div className="box_more ">
          <h1>We coming soon</h1>
          <button onClick={backModal}> Back </button>
        </div>
        </div>
      )}
      </Container>
    </section>
  );
};

export default WeHelp;
