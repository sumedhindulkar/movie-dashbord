import "./App.css";
import Home from "./pages/Home";
import Temp from "./pages/Temp";
import { Routes, Route, Redirect } from "react-router-dom";
import luca from "./assets/images/2.jpg";
function App() {
  const styles = {
    backgroundImage: `url("${luca}")`,
  };
  return (
    <div className="app">
      <div className="app-bg">
        {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/popular" element={<Temp />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
