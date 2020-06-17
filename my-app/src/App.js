import React from "react";
import { render } from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "My React App" };
  }

  //  Component LifeCycle

  render() {
    return (
      <>
        <header className="bg-purple-800 text-white p-4">
          {this.state.title}
        </header>
        <div className="h-screen"></div>
        <footer className="bg-purple-800 text-white p-4">Footer</footer>
      </>
    );
  }
}

// function App() {
//   return (
//     <>
//       <header className="bg-purple-800 text-white p-4">Header</header>
//       <div className="h-screen"></div>
//       <footer className="bg-purple-800 text-white p-4">Footer</footer>
//     </>
//   );
// }

export default App;
