import "./Styles.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Fashions from "./Routes/Fashions";
import Jewelry from "./Routes/Jewelry";
import Payment from "./Routes/Payment";
import Children from "./Routes/Children";
import Female from "./Routes/Female";
import Male from "./Routes/Male";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fashions" element={<Fashions />} />
        <Route path="/jewelry" element={<Jewelry />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/children" element={<Children />} />
        <Route path="/female" element={<Female />} />
        <Route path="/male" element={<Male />} />
      </Routes>
    </div>
  );
}

export default App;
