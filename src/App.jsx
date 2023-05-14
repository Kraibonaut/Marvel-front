import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Comics from "./pages/Comics";
import Favoris from "./pages/Favoris";

function App() {
  return (
    <Router>
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to={"/home"}>Home</Link>
              </li>
              <li>
                <Link to={"/characters"}>Characters</Link>
              </li>
              <li>
                <Link to={"/comics"}>Comics</Link>
              </li>
              <li>
                <Link to={"/favoris"}>Favoris</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr />
      </div>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/characters" element={<Characters />}></Route>
        <Route path="/comics" element={<Comics />}></Route>
        <Route path="/favoris" element={<Favoris />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
