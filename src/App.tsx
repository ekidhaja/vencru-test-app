import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import Header from './components/layout/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="md:flex md:h-screen">
        <div className="md:hidden">
        <Header />
        </div>
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
