import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";
import GlobalContext, { reducer, InitialState } from "./store/global";

function App() {
  const [title] = useState("My React App");
  const [state, dispatch] = React.useReducer(reducer, InitialState);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      <Router>
        <Header title={title} />
        <div className="h-screen">
          <div className="flex justify-center">
            <div className="w-10/12 mt-10">
              <AppRouter />
            </div>
          </div>
        </div>
        <Footer />
      </Router>
    </GlobalContext.Provider>
  );
}

export default App;
