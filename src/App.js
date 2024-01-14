import "./Styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Fashions from "./Routes/Fashions";
import Jewelry from "./Routes/Jewelry";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fashions" element={<Fashions />} />
        <Route path="/jewelry" element={<Jewelry />} />
      </Routes>
    </div>
  );
}

export default App;
