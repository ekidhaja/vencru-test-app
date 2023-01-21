import { BrowserRouter } from "react-router-dom";
import Sidebar from './components/layout/Sidebar';
import Content from './components/layout/Content';
import Header from './components/layout/Header';
import MobileNav from "./components/layout/MobileNav";
import MenuContextProvider from "./contexts/MenuContext";

function App() {
  return (
    <BrowserRouter>
      <MenuContextProvider>
        <div className="md:flex h-screen overflow-y-hidden">
          <div className="md:hidden">
            <Header />
          </div>
          <MobileNav />
          <Sidebar />
          <Content />
        </div>
      </MenuContextProvider>
    </BrowserRouter>
  );
}

export default App;
