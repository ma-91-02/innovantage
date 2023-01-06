import { Col } from "react-bootstrap";

import "./childChooseUs.scss";

const ChildChooseUs = ({ title, imgSrc, alt }) => {
  return (
    <Col lg={4} xs={12}>
      <div className="child__choose__us">
        <img src={imgSrc} alt={alt} />
        <h4>{title}</h4>
      </div>
    </Col>
  );
};
export default ChildChooseUs;
