import React, { Component } from "react";
import axios from "axios";
import {
  errorHandler,
  apiGetRequest,
  disabledOnCreateUpdateDelete,
  errorTag,
  tableHead,
  booksTable,
  handleDelete,
} from "./bookClass";

const API = `http://10.17.3.182:82/api/books`;
// const API = `http://localhost:8001/`;
class Books extends Component {
  errorHandler = errorHandler.bind(this);
  apiGetRequest = apiGetRequest.bind(this);
  disabledOnCreateUpdateDelete = disabledOnCreateUpdateDelete.bind(this);
  errorTag = errorTag.bind(this);
  tableHead = tableHead.bind(this);
  booksTable = booksTable.bind(this);
  handleDelete = handleDelete.bind(this);

  constructor(props) {
    super(props);
    this.state = {
      books: [],
      keys: [],
      errorMeaage: "",
      elementPropety: {
        disabledPropertyInput: true,
        disabledPropertyForAdd: false,
        disabledPropertyForUpdate: true,
        disabledPropertyForCreate: true,
        disabledPropertyForCancle: true,
      },
      bookElement: { bookName: "", price: "", category: "", author: "" },
    };
    //this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    console.log("componentDidMount");
    this.apiGetRequest(API);
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (prevState.books.length !== this.state.books.length) {
      console.log("Books state has changed.");
      this.apiGetRequest(API);
    }
  }

  render() {
    console.log(this.state.books);
    console.log(this.state.keys);
    const { books, errorMeaage, keys } = this.state;
    return (
      <div className="mt-5">
        {books.length
          ? this.booksTable(keys, books)
          : this.errorTag(errorMeaage)}
      </div>
    );
  }

  triggerChildAlert() {
    this.refs.child.showAlert();
  }

  handleCancleClick = () => {
    this.disabledOnCreateUpdateDelete();
  };

  handleUpdateClick = (bookData) => {
    this.triggerChildAlert();
    console.log(bookData);
    axios
      .put(API + bookData.id, bookData)
      .then((res) => {
        console.log("put response successfull with data " + res.data);
        this.disabledOnCreateUpdateDelete();
        this.apiGetRequest(API);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleEdit = (bookId) => {
    console.log(bookId);
    let books = [...this.state.books];
    let index = books.findIndex((book) => book.bookName === bookId);
    // books.forEach((element) => console.log(element));
    console.log(books[index]);
    const bookElement = books[index];
    this.setState({ bookElement });
    let elementPropety = { ...this.state.elementPropety };
    elementPropety.disabledPropertyForUpdate = false;
    elementPropety.disabledPropertyForAdd = true;
    elementPropety.disabledPropertyForCancle = false;
    elementPropety.disabledPropertyInput = false;
    elementPropety.disabledPropertyForCreate = true;
    this.setState({
      elementPropety,
    });
  };

  handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    let bookElement = { ...this.state.bookElement };
    if (event.target.name === "price") {
      bookElement[event.target.name] = parseFloat(event.target.value);
    } else {
      bookElement[event.target.name] = event.target.value;
    }
    this.setState({ bookElement });
  };

  handleCreateClick = (newBookObject) => {
    console.log("newBookObject " + newBookObject);
    axios
      .post(API, newBookObject)
      .then((res) => {
        this.setState({
          books: this.state.books.concat(res.data),
        });
        this.disabledOnCreateUpdateDelete();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleAddClick = () => {
    let elementPropety = { ...this.state.elementPropety };
    elementPropety.disabledPropertyInput = false;
    elementPropety.disabledPropertyForCreate = false;
    elementPropety.disabledPropertyForCancle = false;
    elementPropety.disabledPropertyForAdd = true;
    this.setState({
      elementPropety,
    });
  };

  // handleDelete = (bookId) => {
  //   axios
  //     .delete(API + bookId)
  //     .then((res) => {
  //       this.setState({
  //         books: this.state.books.filter((book) => book.id !== bookId),
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   console.log("Event Delete Called " + bookId);
  // };
}

export default Books;
