import logo from "./logo.svg";
import "./App.scss";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./links/Home";
import Blog from "./links/Blog";
import Contact from "./links/Contact";
import Shopping from "./links/Shopping";
import About from "./links/About";
import Footer from "./component/Footer";

function App() {
  return (
    // <Navbar/>
    <div className="App">
      <Navbar />
      <Router>
        <div className="app">
          <div className="content">
            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/about" exact element={<About />} />
              <Route path="/Blog" exact element={<Blog />} />
              <Route path="/Contact" exact element={<Contact />} />
              <Route path="/Shopping" exact element={<Shopping />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
