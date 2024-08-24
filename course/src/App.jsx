// App.js
import { useState, useEffect } from "react";
import "./App.css"; // Ensure this includes Tailwind CSS imports
import Card from "./components/Card";
import Course from "./components/Course";
import { Routes, Route } from "react-router-dom";
import Stores from "./components/Stores";
import Ethical from "./components/Ethical";
import Footer from "./components/Footer";
import Page3 from "./components/Page3";
import LocomotiveScroll from "locomotive-scroll";
import { Analytics } from "@vercel/analytics/react";
import Reveal from "./components/Reveal";
// import Cube from "./components/cube";
import Codebox from "./components/Codebox";
import Zines from "./components/Zines";
// import CursorCircle from "./components/CursorCircle";

function App() {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    const htmlElement = document.documentElement;
    if (mode === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Course mode={mode} toggleMode={toggleMode} />
              <Card mode={mode} />
              <Page3 mode={mode} />
              <Reveal></Reveal>
              <Footer mode={mode} />

              {/* <CursorCircle />  */}
            </div>
          }
        ></Route>

        <Route path="/Stores" element={<Stores />} />
        <Route path="/Codebox" element={<Codebox />} />
        <Route path="/Flashcard" element={<Zines />} />

        <Route path="*" element={<h1>404 Not Found</h1>} />

        <Route path="/Course" element={<Ethical />} />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
