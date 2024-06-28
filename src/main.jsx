import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min.js";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Cvmenu from "./components/CvMenu";
import Footer from "./components/Footer.jsx";
import Myproject from "./components/MyProject.jsx";
import Contactme from "./components/ContactMe.jsx";
import TodoList from "./components/TodoList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <>
      <div className="container">
        <Navbar />
        <hr />
        <Jumbotron />
        <hr />
        <Cvmenu />
        <hr />
        <Myproject />
        <hr />
        <Contactme />
        <hr />
        <TodoList />
        <hr />
      </div>
      <Footer />
    </>
  </React.StrictMode>
);
