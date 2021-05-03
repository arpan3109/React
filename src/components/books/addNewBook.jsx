import React, { Component } from "react";
import BookColumns from "./bookcolumns";
class AddNewBook extends Component {
  // handleChange(event) {
  //   console.log(event.target.name);
  //   console.log(event.target.value);
  //   let bookData = { ...this.props.bookData };
  //   if (event.target.name === "price") {
  //     bookData[event.target.name] = parseFloat(event.target.value);
  //   } else {
  //     bookData[event.target.name] = event.target.value;
  //   }
  //   this.setState({ bookData });
  // }

  render() {
    return (
      <React.Fragment>
        <button
          onClick={this.props.onAddButtonClick}
          book={this.props.book}
          className="float-right mb-3 mr-2 btn btn-success"
          id="addButton"
          disabled={this.props.elementPropety.disabledPropertyForAdd}
        >
          Add
        </button>
        <table className="table table-borderless ">
          <tbody>
            <tr>
              <BookColumns
                bookPrpoerties={Object.keys(this.props.bookData)}
                bookPrpoertiesValue={this.props.bookData}
                disabledProperty={
                  this.props.elementPropety.disabledPropertyInput
                }
                inputChange={this.props.onChange}
              />
              <td>
                <button
                  className="btn btn-outline-primary"
                  onClick={() =>
                    this.props.createButtonClick(this.props.bookData)
                  }
                  disabled={this.props.elementPropety.disabledPropertyForCreate}
                >
                  Create
                </button>
                <button
                  className="btn btn-outline-primary ml-2"
                  onClick={() =>
                    this.props.updateButtonClick(this.props.bookData)
                  }
                  disabled={this.props.elementPropety.disabledPropertyForUpdate}
                >
                  Update
                </button>
                <button
                  className="btn btn-outline-danger ml-2"
                  onClick={this.props["cancleButtonclick"]}
                  disabled={
                    this["props"]["elementPropety"]["disabledPropertyForCancle"]
                  }
                >
                  Cancle
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

// const AddNewBook = (props) => {
//   const newBook = {
//     bookName: "simple logic",
//     price: 5,
//     category: "SOCIAL",
//     author: "Indian",
//   };
//   return (
//     <button
//       onClick={() => props.onAdd(newBook)}
//       className="float-right mb-3 mr-2 btn btn-success"
//     >
//       Add
//     </button>
//   );
//};

export default AddNewBook;
