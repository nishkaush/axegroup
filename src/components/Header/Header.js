import React from "react";
import { Row, Col } from "react-bootstrap";
import styles from "./Header.module.css";

const Header = props => {
  return (
    <Row>
      <Col>
        <header className={styles.header}>
          <div className="heading__container">
            <h3>All Products</h3>
            <p>24 Products</p>
          </div>

          <div className="items__per__page__container">
            <input
              className={styles.items__per__page__input}
              type="number"
              placeholder="0"
            />
            <span>items per page</span>
          </div>
        </header>
        <hr />
      </Col>
    </Row>
  );
};

export default Header;
