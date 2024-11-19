import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react";

// Importing Components
import Card from "./components/Card";
import Course from "./components/Course";
import Stores from "./components/Stores";
import Ethical from "./components/Ethical";
import Footer from "./components/Footer";
import Page3 from "./components/Page3";
import Reveal from "./components/Reveal";
import Codebox from "./components/Codebox";
import Zines from "./components/Zines";
import Signin from "./auth/Signin";
import Userbutton from "./auth/Userbutton";
// import Navbar from "./components/Navbar";

// PrivateRoute component
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const [mode, setMode] = useState("light");
  const { isLoaded, isSignedIn } = useAuth();

  // Change theme mode based on user preference
  useEffect(() => {
    const htmlElement = document.documentElement;
    if (mode === "dark") {
      htmlElement.classList.add("dark");
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [mode]);

  // Toggle between light and dark mode
  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* Routes and Conditional Rendering */}
      <Routes>
        {/* Root Route: Accessible to everyone */}
        <Route
          path="/"
          element={
            <div>
              <Course mode={mode} toggleMode={toggleMode} />
              <Card mode={mode} />
              <Page3 mode={mode} />
              <Reveal />
              <Footer mode={mode} />
            </div>
          }
        />

        {/* Protected Routes: Require Authentication */}
        <Route path="/Stores" element={<PrivateRoute element={<Stores />} />} />
        <Route
          path="/Codebox"
          element={<PrivateRoute element={<Codebox />} />}
        />
        <Route
          path="/Flashcard"
          element={<PrivateRoute element={<Zines />} />}
        />
        <Route
          path="/Course"
          element={<PrivateRoute element={<Ethical />} />}
        />
        <Route
          path="/user"
          element={<PrivateRoute element={<Userbutton />} />}
        />

        {/* Sign-in Route: Accessible to everyone */}
        <Route path="/auth/signin" element={<Signin />} />

        {/* Catch-All Route for 404 */}
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
