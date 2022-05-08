import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import About from "./Components/About";
import Works from "./Components/Works";
import Contact from "./Components/Contact";
import "font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/works" element={<Works />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
