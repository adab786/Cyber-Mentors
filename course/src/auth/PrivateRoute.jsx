// src/PrivateRoute.js or src/PrivateRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";

// PrivateRoute component to protect routes
const PrivateRoute = ({ element }) => {
  const { isSignedIn } = useAuth();

  // If user is not signed in, redirect to the sign-in page
  if (!isSignedIn) {
    return <Navigate to="/auth/signin" />;
  }

  // If signed in, render the requested element
  return element;
};

export default PrivateRoute;
