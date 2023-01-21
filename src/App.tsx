import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import MobileNav from "./components/layout/MobileNav";

function App() {
  const [display, setDisplay] = useState(false);

  return (
    <BrowserRouter>
      <div className="md:flex h-screen overflow-y-hidden">
        <div className="md:hidden">
          <Header display={display} setDisplay={setDisplay} />
        </div>
        <MobileNav display={display} />
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
