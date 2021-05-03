import React, { Component } from "react";

class BookColumns extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.bookPrpoerties.map((bookProperty) => {
          if (bookProperty === "price") {
            return (
              <td key={bookProperty}>
                <input
                  type="number"
                  name={bookProperty}
                  placeholder={bookProperty}
                  value={this.props.bookPrpoertiesValue[bookProperty]}
                  onChange={this.props.inputChange}
                  disabled={this.props.disabledProperty}
                />
              </td>
            );
          } else if (bookProperty === "id") {
            return null;
          } else {
            return (
              <td key={bookProperty}>
                <input
                  type="text"
                  name={bookProperty}
                  placeholder={bookProperty}
                  value={this.props.bookPrpoertiesValue[bookProperty]}
                  onChange={this.props.inputChange}
                  disabled={this.props.disabledProperty}
                />
              </td>
            );
          }
          // <td>
          //   {bookProperty === "price" && (
          //     <input
          //       type="number"
          //       name={bookProperty}
          //       placeholder={bookProperty}
          //       onChange={this.props.inputChange}
          //       disabled={this.props.disabledProperty}
          //     />
          //   )}
          //   {bookProperty && (
          //     <input
          //       type="text"
          //       name={bookProperty}
          //       placeholder={bookProperty}
          //       onChange={this.props.inputChange}
          //       disabled={this.props.disabledProperty}
          //     />
          //   )}
          // </td>;
        })}
      </React.Fragment>
    );
  }
}

export default BookColumns;
