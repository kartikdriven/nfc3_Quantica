// ProtectedRoute.js
import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { auth } from '../firebase'; // Import your firebase configuration

const ProtectedRoute = ({ element: Element, ...rest }) => {
  const user = auth.currentUser;

  return (
    <Route
      {...rest}
      element={user ? <Element /> : <Navigate to="/login" />}
    />
  );
};

export default ProtectedRoute;
