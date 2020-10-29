import React from "react";
import SideBar from "./components/SideBar";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
