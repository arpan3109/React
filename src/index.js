import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

// class App extends React.Component{
//   render() {
//     const name = 'React';
//     return (
//       // <div className="App">
//       //   <h1>Hello, {name}</h1>
//       // </div>

//       React.createElement('h1',{className:'App'},`Hello, ${name} (through react element)`)
//     )
//   }
// }

ReactDOM.render(<App />, document.getElementById("root"));
