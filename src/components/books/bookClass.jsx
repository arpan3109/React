import React from "react";
import axios from "axios";
import BookTableBody from "./bookTableBody";
import AddNewBook from "./addNewBook";

export const apiGetRequest = function (API) {
  console.log("apiGetRequest");
  axios
    .get(API)
    .then((res) => {
      const books = res.data;
      this.setState({ books: books });
      this.setState({ keys: Object.keys(this.state.books[0]) });
    })
    .catch((error) => {
      this.errorHandler(error);
    });
};

export const errorHandler = function (error) {
  if (error.message === "Network Error") {
    console.log(error.message);
    this.setState({ errorMeaage: "Network Error" });
  }
  if (error.response) {
    console.log(error.response);
    this.setState({
      errorMeaage: error.response.status + error.response.statusText,
    });
  }
};

export const disabledOnCreateUpdateDelete = function () {
  const bookElement = {
    bookName: "",
    price: "",
    category: "",
    author: "",
  };
  let elementPropety = { ...this.state.elementPropety };
  elementPropety.disabledPropertyInput = true;
  elementPropety.disabledPropertyForCreate = true;
  elementPropety.disabledPropertyForUpdate = true;
  elementPropety.disabledPropertyForCancle = true;
  elementPropety.disabledPropertyForAdd = false;
  this.setState({
    bookElement,
    elementPropety,
  });
};

export const booksTable = function (keys, books) {
  return (
    <React.Fragment>
      <AddNewBook
        onAddButtonClick={this.handleAddClick}
        bookData={this.state.bookElement}
        elementPropety={this.state.elementPropety}
        createButtonClick={this.handleCreateClick}
        onChange={this.handleChange}
        updateButtonClick={this.handleUpdateClick}
        cancleButtonclick={this.handleCancleClick}
      />
      {/* <BookColumns /> */}
      <table className="table table-bordered table-hover">
        {this.tableHead(keys)}
        {/* {this.tableBody(books)} */}
        <tbody>
          {books.map((book) => (
            <BookTableBody
              ref="child"
              key={book.id}
              onDelete={this.handleDelete}
              book={book}
              onEdit={this.handleEdit}
            />
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export const errorTag = function (errorMeaage) {
  return <h1>{errorMeaage}</h1>;
};

export const tableHead = function (keys) {
  return (
    <thead className="thead-dark">
      <tr>
        {keys.map((key) => (
          <th key={key}>{key}</th>
        ))}
        {<th>Delete/Update</th>}
      </tr>
    </thead>
  );
};

export const handleDelete = function (bookId, API) {
  axios
    .delete(API + bookId)
    .then((res) => {
      this.setState({
        books: this.state.books.filter((book) => book.id !== bookId),
      });
    })
    .catch((err) => {
      console.log(err);
    });
  console.log("Event Delete Called " + bookId);
};
