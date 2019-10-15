import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import PaginationComp from "./components/PaginationComp/PaginationComp";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardsArr: [
        {
          id: 1,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
        },
        {
          id: 2,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
        },
        {
          id: 3,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
        },
        {
          id: 4,
          price: "$87.68",
          product_name: "Amitriptyline Hydrochloride",
          description: "synergize efficient metrics",
          product_image: "http://dummyimage.com/307x328.bmp/ff4444/ffffff"
        }
      ]
    };
  }

  async componentDidMount() {
    // let url =
    //   "https://raw.githubusercontent.com/nishkaush/fakedata/master/db.json";
    // const resp = await fetch(url);
    // const data = await resp.json();
    // this.setState({ cardsArr: [...data] });
  }

  render() {
    return (
      <div className="App">
        <Container fluid>
          <Header />
          <CardsContainer cards={this.state.cardsArr} />
          <PaginationComp />
        </Container>
      </div>
    );
  }
}

export default App;
