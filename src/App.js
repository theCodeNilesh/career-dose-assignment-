import logo from "./logo.svg";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import { Container } from "reactstrap";

const url = "https://source.unsplash.com/random";

function App() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return (
    <Container className="App md-12 module">
      <style>{"body { background-color: #2F3042; }"}</style>
      <img className="img" src={url} alt="img" />
    </Container>
  );
}

export default App;
