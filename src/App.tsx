import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';

function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <Content />
      </div>
    </BrowserRouter>
  );
}

export default App;
