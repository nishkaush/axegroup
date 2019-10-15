import React from "react";
import { Row, Col } from "react-bootstrap";

const ErrorComp = props => {
  return (
    <Row>
      <Col xs={6} className="mx-auto">
        {props.msg}
      </Col>
    </Row>
  );
};

export default ErrorComp;
