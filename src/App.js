import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import UserDashboard from './components/user/UserDashboard';
import EmployerDashboard from './components/employer/EmployerDashboard';
import AppliedJobs from './components/user/AppliedJobs';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/userdash' element={<UserDashboard />} />
          <Route path='/appliedjobs' element={<AppliedJobs />} />
          <Route path='/admindash' element={<EmployerDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;