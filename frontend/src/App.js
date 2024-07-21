import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage/Landing';
import Login from './Components/Login/Login';
import Register from './Components/Register/register';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/reset' element={<ResetPassword/>} />
          <Route path='/forgot' element={<ForgotPassword/>} />
          

        </Routes>
      </Router>

    </div>
  );
}

export default App;
