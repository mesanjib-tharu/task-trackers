import './App.css'
// import { taskConstants } from './constants/task-constant';
// import { Loader } from './components/shared/Loaders';
import Wrapper from './components/shared/Wrapper';
// import TaskAdd from './components/TaskAdd';
import TaskList from './components/TaskList';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
// const { TITLE, Task_URL } = taskConstants;
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/auth/ProtectedRoute';
function App() {



  return (<>

<Wrapper className="flex justify-center items-center gap-10 pt-20 md:flex-row flex-col">
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Navigate to="/login" replace="/"/>} />
    <Route path="/login" element={<Login />} />
    <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
<Route path="*" element={<Navigate to="/login" />} />
  </Routes>
  <ToastContainer />
  </BrowserRouter>
</Wrapper>
    </>
  )
}

export default App
