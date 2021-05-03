import React, { Component } from "react";
import Books from "./components/books/books";
import NavBar from "./components/navBar";

class App extends Component {
  // componentDidMount() {
  //     const apiUrl = 'http://localhost:63577/api/books';
  //     fetch(apiUrl)
  //         .then((response) => response.json())
  //         .then((data) => console.log('This is your data', data));
  // }

  render() {
    // const name = 'React';
    return (
      // React.createElement('h1',{className:'App'},`Hello, ${name} (through react element)`)
      <>
        <NavBar />
        <main className="container">
          <Books />
        </main>
      </>
    );
  }
}

export default App;
