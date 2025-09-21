import React from 'react';
import { Navigate } from 'react-router-dom';
import { getUser } from '../utils/auth';

const AdminProtectedRoute = ({ children }) => {
  const user = getUser();

  if (!user || user.role !== 'SELLER') {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default AdminProtectedRoute;
