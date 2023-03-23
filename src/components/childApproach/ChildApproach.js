import { Col } from "react-bootstrap";

import "./childApproach.scss";

const ChildApproach = ({ title, content, imgSrc, alt }) => {
  return (
    <Col lg={4} xs={12} md={4}className="child__padding">
      <div className="child__approach">
        <img src={imgSrc} alt={alt} />
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
    </Col>
  );
};
export default ChildApproach;