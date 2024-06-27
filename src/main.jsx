import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/js/bootstrap.min.js";
import Navbar from "./pages/Navbar";
import Jumbotron from "./pages/Jumbotron";
import Cvmenu from "./pages/CvMenu";
import Footer from "./pages/Footer.jsx";
import Myproject from "./pages/MyProject.jsx";
import Contactme from "./pages/ContactMe.jsx";
import TodoList from "./pages/TodoList.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container">
      <Navbar />
      <hr />
      <Jumbotron />
      <hr />
      <Cvmenu />
      <hr />
      <Myproject/>
      <hr />
      <Contactme />
      <hr />
      <TodoList />
    </div>
    <Footer />
  </React.StrictMode>
);
