import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const PaginationComp = props => {
  const btnArr = ["Prev", 1, 2, 3, "...", "Next"];

  if (props.length) {
    return (
      <Row className="py-5">
        <Col className="d-flex align-items-center justify-content-end mx-5">
          {btnArr.map(btn => (
            <Button
              variant={props.currentPage === btn ? "success" : "dark"}
              key={btn}
              className="mx-1"
              onClick={() => props.pageClickFunc(btn)}
              disabled={btn === "Prev" && props.currentPage === 1}
            >
              {btn}
            </Button>
          ))}
        </Col>
      </Row>
    );
  }
  return null;
};

export default PaginationComp;
