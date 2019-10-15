import React from "react";
import { Row } from "react-bootstrap";
import SingleCard from "./../SingleCard/SingleCard";

const CardsContainer = props => {
  return (
    <Row className="mx-3">
      {props.cards.map(({ id, ...props }) => (
        <SingleCard key={id} {...props} />
      ))}
    </Row>
  );
};

export default CardsContainer;
