import React from "react";
import { Row } from "react-bootstrap";

const Header = props => {
  return (
    <Row>
      <header>
        <h2>All Products</h2>
        <p>24 Products</p>
        <input type="text" placeholder="items per page" />
      </header>
    </Row>
  );
};

export default Header;
