import React from "react";
import { Row, Col } from "react-bootstrap";

const ErrorComp = props => {
  return (
    <Row>
      <Col xs={10} sm={8} md={4} className="mx-auto">
        <h4 className="text-center">Error - {props.msg}</h4>
      </Col>
    </Row>
  );
};

export default ErrorComp;
