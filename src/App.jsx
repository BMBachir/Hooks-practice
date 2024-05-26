import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseEffect from "./pages/UseEffect";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/*  <Route path="/useref" element={<UseRef />} /> */}
        <Route path="/useEffect" element={<UseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
