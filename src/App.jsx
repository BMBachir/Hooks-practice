import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Effect from "./pages/Effect";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-effect" element={<Effect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
