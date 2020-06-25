import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./router";

function App() {
  const [title] = useState("My React App");
  return (
    <Router>
      <Header title={title} />
      <div className="h-screen">
        <div className="flex justify-center">
          <div className="w-10/12 text-center mt-10">
            <AppRouter />
          </div>
        </div>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
