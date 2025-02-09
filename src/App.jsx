import Home from "./pages/home/home";
import Anniversary from "./pages/anniversary/anniversary";
import Congratulations from "./pages/congrat/congrat";
import Cards from "./pages/cards/cards";
import Audio from "./pages/audio/audio";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accept from "./pages/accept/accept";
import Gift from "./pages/gift/gift";
import End from "./pages/fim/fim";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aniversario" element={<Anniversary />} />
        <Route path="/parabens" element={<Congratulations />} />
        <Route path="/cartoes" element={<Cards />} />
        <Route path="/audio" element={<Audio />} />
        <Route path="/eagora" element={<Accept />} />
        <Route path="/presente" element={<Gift />} />
        <Route path="/fim" element={<End />} />
      </Routes>
    </Router>
  );
}

export default App;
