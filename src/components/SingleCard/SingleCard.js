import React from "react";
import { Col } from "react-bootstrap";
import styles from "./SingleCard.module.css";

const SingleCard = props => {
  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <div className={styles.single__card + " py-2 px-3 my-2"}>
        <div className={styles.img__container}>
          <img src={props.product_image} alt={props.product_name} />
        </div>

        <hr />

        <div>
          <p className="py-0 my-0 px-0" style={{ color: "grey" }}>
            <b>{props.product_name}</b>
          </p>
          <p className="py-0 my-0" style={{ color: "grey" }}>
            {props.description}
          </p>
          <p>
            <b>{props.price}</b>
          </p>
        </div>
      </div>
    </Col>
  );
};

export default SingleCard;
