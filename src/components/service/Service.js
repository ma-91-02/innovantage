import { Col } from "react-bootstrap";
import "./service.scss";

const Service = ({ content, to }) => {
  return (
    <Col  lg={4} xs={12}>
      <div className="col__Services">

      <h4>{content}</h4>
      <a href={to} >More</a> 
      </div>
    </Col>
  );
};

export default Service;
