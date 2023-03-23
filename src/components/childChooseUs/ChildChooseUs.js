import { Col } from "react-bootstrap";

import "./childChooseUs.scss";

const ChildChooseUs = ({ title, imgSrc, alt }) => {
  return (
    <Col lg={4} xs={12} md={4}>
      <div className="child__choose__us">
        <img src={imgSrc} alt={alt} />
        <h3>{title}</h3>
      </div>
    </Col>
  );
};
export default ChildChooseUs;
