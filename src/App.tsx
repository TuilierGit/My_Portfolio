import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Lab from "./pages/Lab";
import Projects from "./pages/Projects";

const App = () => {
  // Need it to awake the backend on render.com free plan
  useEffect(() => {
    setInterval(() => {
      fetch("https://message-form-backend-qzki.onrender.com", {
        method: "GET",
        headers: {
          "Content-type": "application/x-www-form-urlencoded",
        },
      });
    }, 1000 * 60 * 5); // keep alive every 5 minutes
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/lab" element={<Lab />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
