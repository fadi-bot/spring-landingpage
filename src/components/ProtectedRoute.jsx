import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

function ProtectedRoute({ session, children }) {
  const location = useLocation();

  if (!session) {
    // If there is no active session, redirect the user to the login page.
    // We also pass the current location in the state, so we can redirect
    // back to this page after a successful login.
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // If there is an active session, render the child component (the protected page).
  return children;
}

export default ProtectedRoute;