import React from "react";
import "./App.css";

import { Playground } from "./components/playground/playground";
import stylesContainer from "./styles/container.module.scss";

function App() {
  return (
    <div className={stylesContainer.container}>
      <Playground />
    </div>
  );
}

export default App;
