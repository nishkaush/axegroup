import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header/Header";
import CardsContainer from "./components/CardsContainer/CardsContainer";
import PaginationComp from "./components/PaginationComp/PaginationComp";
import ErrorComp from "./components/ErrorComp/ErrorComp";
import {
  fetchProducts,
  updateItemsPerPage,
  showNextPage,
  showPrevPage,
  showSpecificPage
} from "./actions/actionCreators";

class App extends React.Component {
  componentDidMount() {
    let url =
      "https://raw.githubusercontent.com/nishkaush/fakedata/master/db.json";
    this.props.fetchAllProducts(url);
  }

  handlePaginationClick(val) {
    if (val === "...") return;
    if (val === "Next") return this.props.showNextPage();
    if (val === "Prev") return this.props.showPrevPage();
    return this.props.showSpecificPage(val);
  }

  render() {
    let mainContent = !this.props.errorMsg ? (
      <React.Fragment>
        <CardsContainer
          cards={this.props.productsArr}
          isLoading={this.props.isLoading}
        />
        <PaginationComp
          currentPage={this.props.currentPage}
          length={this.props.productsArr.length}
          pageClickFunc={this.handlePaginationClick.bind(this)}
        />
      </React.Fragment>
    ) : (
      <ErrorComp msg={this.props.errorMsg} />
    );

    return (
      <div className="App">
        <Container fluid>
          <Header
            totalItems={this.props.totalItems}
            itemsPerPage={this.props.itemsPerPage}
            inputChangeFunc={this.props.updateItemsPerPage}
          />
          {mainContent}
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    totalItems: state.allProductsArr.length,
    productsArr: state.currentProductsToShowArr,
    errorMsg: state.errorMessage,
    itemsPerPage: state.itemsPerPage,
    isLoading: state.isLoading,
    currentPage: state.currentPage
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAllProducts: url => dispatch(fetchProducts(url)),
    updateItemsPerPage: val => dispatch(updateItemsPerPage(val)),
    showNextPage: () => dispatch(showNextPage()),
    showPrevPage: () => dispatch(showPrevPage()),
    showSpecificPage: val => dispatch(showSpecificPage(val))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
