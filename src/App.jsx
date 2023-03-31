import React from "react";
import CodeConvert from "./pages/CodeConvert";
import Menu from "./components/Menu";
import './css/style.css';
function App() {
  return (
    <div className="app">
      <Menu/>
      <CodeConvert />
    </div>
  );
}

export default App;
