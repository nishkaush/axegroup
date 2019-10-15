import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import PaginationComp from "./components/PaginationComp/PaginationComp";
import ErrorComp from "./components/ErrorComp/ErrorComp";
import { fetchProducts } from "./actions/actionCreators";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    let url =
      "https://raw.githubusercontent.com/nishkaush/fakedata/master/db.json";
    this.props.fetchAllProducts(url);
  }

  render() {
    let mainContent = !this.props.errorMsg ? (
      <React.Fragment>
        <CardsContainer cards={this.props.productsArr} />
        <PaginationComp />
      </React.Fragment>
    ) : (
      <ErrorComp msg={this.props.errorMsg} />
    );

    return (
      <div className="App">
        <Container fluid className="px-5">
          <Header />
          {mainContent}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    productsArr: state.currentProductsToShowArr,
    errorMsg: state.errorMessage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: url => dispatch(fetchProducts(url))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
