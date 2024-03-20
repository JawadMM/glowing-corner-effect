import logo from "./logo.svg";
import "./App.css";
import Container from "./components/container/Container";
import Card from "./components/card/Card";
import React from "react";
function App() {
  const colors = ["#ff0084", "#77ff00", "#00ddff"];
  const cards = [];

  for (let i = 0; i < 3; i++) {
    cards.push(<Card key={i} color={colors[i]} reference={React.createRef()} />);
  }

  return (
    <div className="App">
      <Container>{cards}</Container>
    </div>
  );
}

export default App;
