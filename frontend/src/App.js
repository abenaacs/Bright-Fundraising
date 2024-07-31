import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/Landing';
import LoginPage from './pages/LoginPage/LoginPage';
import Register from './Components/Register/register';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Role from './Components/Role/role';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/reset' element={<ResetPassword/>} />
          <Route path='/forgot' element={<ForgotPassword/>} />
          <Route path='/role' element={<Role/>} />

          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
