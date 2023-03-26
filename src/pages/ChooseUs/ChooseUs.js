import { Container, Row} from "react-bootstrap";
import ChildChooseUs from "../../components/childChooseUs/ChildChooseUs";
import expenced from "../../images/expenced.svg";
import product from "../../images/product.svg";
import cutting from "../../images/cutting.svg";
import value from "../../images/value.svg";
import center from "../../images/center.svg";
import innovative from "../../images/innovative.svg";
import "./chooseUs.scss";

const ChooseUs = () => {
  return (
    <section className="section__choose__us" id="chooseUs">
      <Container fluid="xxl">
        <h4>Reasons to Choose Us</h4>
        <Row>
          <ChildChooseUs
            title="Experienced Team"
            imgSrc={expenced}
            alt="Experienced Team"
          />
          <ChildChooseUs
            title="Innovative mindset"
            imgSrc={innovative}
            alt="Innovative mindset"
          />
          <ChildChooseUs
            title="Center of Excellence"
            imgSrc={center}
            alt="Center of Excellence"
          />
        </Row>
        <Row>
          <ChildChooseUs
            title="Product Accelerators"
            imgSrc={product}
            alt="Product Accelerators"
          />
          <ChildChooseUs
            title="Cutting edge technolgy"
            imgSrc={cutting}
            alt="Cutting edge technolgy"
          />
          <ChildChooseUs
            title="Adding value"
            imgSrc={value}
            alt="Adding value"
          />
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
