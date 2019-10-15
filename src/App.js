import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import SingleCard from "./components/SingleCard/SingleCard";
import PaginationComp from "./components/PaginationComp/PaginationComp";

function App() {
  return (
    <div className="App">
      <Container>
        <Header />
        <SingleCard />
        <PaginationComp />
      </Container>
    </div>
  );
}

export default App;
