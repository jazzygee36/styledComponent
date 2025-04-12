import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Overview from './pages/overview/index';
import Users from './pages/users/index';
import SignUp from './pages/signup/index';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect from the root to /welcome */}
        <Route path='/' element={<Navigate to='/signup' />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/overview' element={<Overview />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
