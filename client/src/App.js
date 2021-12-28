import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import SideFilter from "./components/sideFilter/SideFilter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <div className="contentWrap">
          <SideFilter />
          <Main />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
