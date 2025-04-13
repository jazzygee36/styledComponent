import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Overview from './pages/overview/index';
import Users from './pages/users/index';
import SignUp from './pages/signup/index';
import { AppProps } from './utils/interfaces';

const App = () => {
  const PrivateRoute = ({ children }: AppProps) => {
    const isAuthenticated = !!localStorage.getItem('token');
    return isAuthenticated ? <>{children}</> : (window.location.href = '/');
  };
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from the root to /welcome */}
        <Route path='/' element={<Navigate to='/signup' />} />
        <Route path='/signup' element={<SignUp />} />
        {/* Private routes */}

        <Route
          path='/overview'
          element={
            <PrivateRoute>
              <Overview />
            </PrivateRoute>
          }
        />
        <Route
          path='/users'
          element={
            <PrivateRoute>
              <Users />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
