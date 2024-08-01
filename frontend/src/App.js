// Import necessary dependencies from react-router-dom for routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the main CSS file for the App component
import './App.css';

// Import various components and pages used in the application
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './pages/LandingPage/Landing';
import LoginPage from './pages/LoginPage/LoginPage';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import ForgotPassword from './Components/ForgotPassword/ForgotPassword';
import Role from './Components/Role/role';
import CreateCampaigns from './Components/Campaigns/CreateCamp';
import RegisterPage from './pages/RegisterPage/RegisterPage';

// Define the main App component
function App() {
  return (
    <div className="App">
      {/* Set up the Router component to enable routing in the app */}
      <Router>
        {/* Render the Navbar component, which will be visible on all pages */}
        <Navbar />

        {/* Define the routes for the application using the Routes component */}
        <Routes>
          {/* Route for the landing page (home page) */}
          <Route path="/" element={<LandingPage />} />

          {/* Route for the login page */}
          <Route path='/login' element={<LoginPage />} />

          {/* Route for the registration page */}
          <Route path='/register' element={<RegisterPage />} />

          {/* Route for the password reset page */}
          <Route path='/reset' element={<ResetPassword />} />

          {/* Route for the forgot password page */}
          <Route path='/forgot' element={<ForgotPassword />} />

          {/* Route for the role selection page */}
          <Route path='/role' element={<Role />} />

          {/*Route for the create campaigns page */}
          <Route path='/campaigns' element={<CreateCampaigns />} />

        </Routes>
      </Router>
    </div>
  );
}

// Export the App component as the default export
export default App;