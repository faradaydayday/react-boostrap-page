import React from "react";
import { ListGroup } from "react-bootstrap";
import { PersonLinesFill } from "react-bootstrap-icons";
function Lis() {
  return (
    <>
      <div className="container-lg">
        <div className="text-center">
          <h2>Lorem, ipsum dolor.</h2>
          <p className="text-muted">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
        <ListGroup>
         
            <ListGroup.Item className="py-3">
                 <h5 className="mb-1">
                    Lorem ipsum dolor sit amet consectetur.
                 </h5>
                 <p className="mb-1">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sit vel necessitatibus unde libero voluptatum perspiciatis cum neque quam quidem?
                 </p>
                 <div>
                  <PersonLinesFill/>
                 <small> riview by yudist</small>
                 </div>
                 
            </ListGroup.Item>
            <ListGroup.Item className="py-3">
                 <h5 className="mb-1">
                    Lorem ipsum dolor sit amet consectetur.
                 </h5>
                 <p className="mb-1">
                   Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio sit vel necessitatibus unde libero voluptatum perspiciatis cum neque quam quidem?
                 </p>
                 <div>
                  <PersonLinesFill/>
                 <small> riview by akbar faisal</small>
                 </div>
            </ListGroup.Item>
        </ListGroup>
      </div>
    </>
  );
}

export default Lis;
