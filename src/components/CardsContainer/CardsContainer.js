import React from "react";
import { Row, Col } from "react-bootstrap";
import SingleCard from "./../SingleCard/SingleCard";

const CardsContainer = props => {
  if (props.cards.length) {
    return (
      <Row className="mx-3">
        {props.cards.map(({ id, ...props }) => (
          <SingleCard key={id} {...props} />
        ))}
      </Row>
    );
  }

  return (
    <Row>
      <Col xs={6} className="mx-auto">
        No Products Found
      </Col>
    </Row>
  );
};

export default CardsContainer;
