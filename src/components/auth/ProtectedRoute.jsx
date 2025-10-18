import { Navigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ProtectedRoute = ({ children }) => {

  const token = localStorage.getItem('token');
  const rt = localStorage.getItem('rt');

  if (!token  && !rt){
    return <Navigate to="/login" replace />;
  }

  <Navigate to="/dashboard" replace />;
  return children;
  
};

export default ProtectedRoute;