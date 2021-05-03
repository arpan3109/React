import React, { Component } from "react";
import NavBar from "../navBar";

class TableBody extends NavBar {
  constructor(props) {
    super(props);
    this.sampe = this.sampe.bind(this);
  }
  sampe() {
    this.sample();
  }
  render() {
    console.log(this.props.count);
    this.sampe();
    // console.log(this.props.book);
    return <td onClick={() => this.doIncrement(2)}>sample</td>;
  }
}

class BookTableBody extends Component {
  componentWillUnmount() {
    console.log("BookTableBody componentWillUnmount");
  }
  render() {
    // console.log(this.props.book);
    return <React.Fragment>{this.tableRow(this.props.book)}</React.Fragment>;
  }

  showAlert() {
    alert("Hello World from bookTableBody");
  }

  tableRow(book) {
    return (
      <tr key={book.id}>
        {/* <TableBody></TableBody> */}
        <td>{book.id}</td>
        <th>{book.bookName}</th>
        {/* <td contentEditable="true">{book.price}</td> */}
        <td>{book.price}</td>
        <td>{book.category}</td>
        <td>{book.author}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() =>
              this.props.onDelete(book.id, "http://10.17.3.182:82/api/books")
            }
          >
            Delete
          </button>
          <button
            className="btn btn-primary ml-2"
            onClick={() => this.props.onEdit(book.bookName)}
          >
            Edit
          </button>
        </td>
      </tr>
    );
  }
}

export default BookTableBody;
