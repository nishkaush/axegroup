import React from "react";
import { Row, Col, Spinner } from "react-bootstrap";
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
      <Col xs={10} sm={8} md={4} className="mx-auto">
        {props.isLoading ? (
          <Spinner animation="grow" size="lg" variant="info" />
        ) : (
          <h3 className="text-center">No Products Found</h3>
        )}
      </Col>
    </Row>
  );
};

export default CardsContainer;
