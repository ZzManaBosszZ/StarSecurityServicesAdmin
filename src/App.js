import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/home";
import Login from "./components/pages/auth/login";
import ResetPass from "./components/pages/auth/reset-password";
import Verifycode from "./components/pages/auth/verifycode";
import EmpProfile from "./components/pages/employee/profile";
import EmpList from "./components/pages/employee";
import ProfileClient from "./components/pages/clients/profileclient";
import ClientList from "./components/pages/clients";
import DepartmentList from "./components/pages/department";
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>

        {/* Start Auth */}
        <Route path="/" element={<Login />}/>
        <Route path="/reset-password" element={<ResetPass />}/>
        <Route path="/verify" element={<Verifycode />}/>
        {/* End Auth */}
        
        {/* Start Dashboard */}
        <Route path="/home" element={<Dashboard />}/>
        {/* End Dashboard */}

        {/* Start Client */}
        <Route path="/profileclient" element={<ProfileClient />}/>
        <Route path="/profileclientlist" element={<ClientList />}/>
        {/* End Client */}

        {/* Start Employee */}
        <Route path="/profileemplist" element={<EmpList />}/>
        <Route path="/profileemp" element={<EmpProfile />}/>
        {/* End Employee */}

        {/* Start Department */}
        <Route path="/department" element={<DepartmentList />}/>
        {/* End Department */}

      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
