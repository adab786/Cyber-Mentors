import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import { Analytics } from "@vercel/analytics/react";
import Loader from "./components/utils/Loader";
import Certification from "./components/Certification";
import Dashboard from "./components/Dashboard";
import NotFound from "./Notfound";
// Importing the Isonline component to show the offline loader
import Isonline from "./components/utils/Isonline";

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
import AboutUs from "./components/Aboutus";
// import Navbar from "./components/Navbar";

// PrivateRoute component
import PrivateRoute from "./auth/PrivateRoute";

function App() {
  const [mode, setMode] = useState("light");
  const { isLoaded } = useAuth();

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

  // Check if the user is offline
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    // Event listeners to handle online/offline events
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  // If user is offline, render the Isonline page only
  if (isOffline) {
    return <Isonline />;
  }

  if (!isLoaded) {
    return <Loader />;
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

        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        {/* <Route path="/Isonline" element={<Isonline />} /> */}

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
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Analytics />
    </>
  );
}

export default App;
