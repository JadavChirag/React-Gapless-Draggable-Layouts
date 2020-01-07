import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Rnd } from "react-rnd";
import GridLayout from "react-grid-layout";
import "./../node_modules/react-grid-layout/css/styles.css";
import "./../node_modules/react-resizable/css/styles.css";

function App() {
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 }
  ];
  return (
    <div className="App">
      <GridLayout
        className="layout"
        layout={layout}
        cols={12}
        rowHeight={30}
        width={1200}
      >
        <div key="a">a</div>
        <div key="b">b</div>
        <div key="c">c</div>
      </GridLayout>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
