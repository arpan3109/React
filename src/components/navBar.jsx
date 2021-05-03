import React, { Component } from "react";

class NavBar extends Component {
  state = {
    count: 1,
  };

  sample() {
    console.log("call from NavBar as parent");
  }

  doIncrement = (data) => {
    this.setState({ count: data + 1 });
    console.log(this.state.count);
    console.log(this);
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
            <a
              className="nav-item nav-link"
              href="#"
              onClick={() => this.doIncrement(this.state.count)}
            >
              {this.state.count}
            </a>
            <a className="nav-item nav-link" href="#">
              Pricing
            </a>
            <a
              className="nav-item nav-link disabled"
              href="#"
              tabIndex="-1"
              aria-disabled="true"
            >
              Disabled
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
