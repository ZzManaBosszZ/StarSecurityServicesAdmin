import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/home";
import Login from "./components/pages/auth/login";
import ResetPass from "./components/pages/auth/reset-password";
import Verifycode from "./components/pages/auth/verifycode";

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
      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
