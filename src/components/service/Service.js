import { Col } from "react-bootstrap";
import "./service.scss";

const Service = ({ content, to }) => {
  return (
    <Col  lg={4} xs={12} md={4}>
      <div className="col__ServicesWrap">
        <div className="col__Services">
        <h3>{content}</h3>
        <a href={to} >More</a> 
        </div>
      </div>
    </Col>
  );
};

export default Service;
