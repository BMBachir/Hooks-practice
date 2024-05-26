import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Effect from "./pages/Effect";
import Ref from "./pages/Ref";
import Context from "./pages/Context";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/use-effect" element={<Effect />} />
        <Route path="/use-ref" element={<Ref />} />
        <Route path="/use-context" element={<Context />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
