import { Col} from "react-bootstrap";
import { useState } from "react";
import '../moreButton/more.scss'
import "./service.scss";

const Service = ({ content, to }) => {
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
    
    <Col  lg={4} xs={12} md={4}>
      <div className="col__ServicesWrap">
        <div className="col__Services">
        <h3>{content}</h3>
        <button onClick={toggleModal} >More</button> 
        </div>
      </div>
      {modal && (
        <div className="wrapper_more">
        <div className="box_more ">
          <h1>{to}</h1>
          <button onClick={backModal}> Back </button>
        </div>
        </div>
      )}
    </Col>
  );
};

export default Service;
