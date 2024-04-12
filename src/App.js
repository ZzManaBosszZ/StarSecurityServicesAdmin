import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/home";
import Login from "./components/pages/auth/login";
import ForgotPassword from "./components/pages/auth/forgot-password";
import ResetPassword from "./components/pages/auth/reset-password";
import ClientDetail from "./components/pages/clients/detail";
import ClientList from "./components/pages/clients/index";
import EmpList from "./components/pages/employee/index";
import EmpDetail from "./components/pages/employee/detail";
import DepartmentList from "./components/pages/department/index";
import ServiceList from "./components/pages/star-services";
import ServiceCreate from "./components/pages/star-services/create";
import ServiceEdit from "./components/pages/star-services/edit";
import ServiceDelete from "./components/pages/star-services/delete";
import ServiceDetail from "./components/pages/star-services/detail";
import OfferDetail from "./components/pages/star-services-offer/detail";
import OfferList from "./components/pages/star-services-offer";
import Profile from "./components/pages/auth/profile";
import EmpCreate from "./components/pages/employee/create";
import ChangePasswordAdmin from "./components/pages/auth/change-password";
import { useJwt } from "react-jwt";
import { getAccessToken, removeAccessToken } from "./components/pages/utils/auth";
import DepartmentEdit from "./components/pages/department/edit";
import DepartmentCreate from "./components/pages/department/create";
import DepartmentDelete from "./components/pages/department/delete";
import MissionList from "./components/pages/mission";
import MissionCreate from "./components/pages/mission/create";


function App() {

  const ProtectedRoute = ({ element }) => {
    const token = getAccessToken();
    const { isExpired, isInvalid } = useJwt(token);

    if (!token || isExpired || isInvalid) {
        removeAccessToken();
        return <Navigate to="/login" />;
    }

    return element;
};

const ProtectedLoginRoute = ({ element }) => {
    const token = getAccessToken();
    const { isExpired, isInvalid } = useJwt(token);

    if (token && !isExpired && !isInvalid) {
        return <Navigate to="/" />;
    }

    return element;
};

  return (
    <div className="App">
      <Router>
      <Routes>

        {/* Start Auth */}
        <Route path="/login" element={<ProtectedLoginRoute element={<Login />} />} />
        <Route path="/profile" element={<ProtectedRoute element={<Profile />} />} />
        <Route path="/forgot-password" element={<ProtectedLoginRoute element={<ForgotPassword />} />}/>
        <Route path="/change-password" element={<ProtectedRoute element={<ChangePasswordAdmin />} />}/>
        <Route path="/reset-password/:resetToken" element={<ProtectedLoginRoute element={<ResetPassword />} />} />
        {/* End Auth */}
        
        {/* Start Dashboard */}
        {/* <Route path="/" element={<Dashboard />}/> */}
        <Route path="/" element={<ProtectedRoute element={<Dashboard />} />} />
        {/* End Dashboard */}

        {/* Start Client */}
        {/* <Route path="/client-detail/:id" element={<ProfileClient />}/> */}
        {/* <Route path="/client-detail" element={<ClientDetail />}/> */}
        {/* <Route path="/client-create" element={<ClientCreate />}/>
        <Route path="/client-list" element={<ClientList />}/> */}
        <Route path="/client-detail/:id" element={<ProtectedRoute element={<ClientDetail />} />} />
        <Route path="/client-list" element={<ProtectedRoute element={<ClientList />} />} />
        {/* End Client */}

        {/* Start Employee */}
        <Route path="/employee-detail/:id" element={<ProtectedRoute element={<EmpDetail />} />}/>
        <Route path="/employee-create" element={<ProtectedRoute element={<EmpCreate />} />} />
        <Route path="/employee-list" element={<ProtectedRoute element={<EmpList />} />} />
        {/* <Route path="/employee-detail" element={<ProtectedRoute element={<EmpDetail />} />} /> */}
        
        
        {/* End Employee */}

        {/* Start Department */}
        <Route path="/department-list" element={<ProtectedRoute element={<DepartmentList />} />}/>
        <Route path="/department-create" element={<ProtectedRoute element={<DepartmentCreate />} />}/>
        <Route path="/department-edit/:id" element={<ProtectedRoute element={<DepartmentEdit />} />}/>
        <Route path="/department-delete-at" element={<ProtectedRoute element={<DepartmentDelete />} />}/>
        {/* End Department */}

        
        {/* Start Services */}
        <Route path="/service-create" element={<ProtectedRoute element={<ServiceCreate />} />} />
        <Route path="/service-edit/:id" element={<ProtectedRoute element={<ServiceEdit />} />} />
        <Route path="/service-detail/:id" element={<ProtectedRoute element={<ServiceDetail />} />} />
        <Route path="/service-delete-at" element={<ProtectedRoute element={<ServiceDelete />} />} />
        <Route path="/service-list" element={<ProtectedRoute element={<ServiceList />} />} />
        {/* End Services */}

        {/* Start Services Offer */}  
        {/* <Route path="/service-edit/:id" element={<ServiceList />}/> */}
        {/* <Route path="/service-offer-detail" element={<OfferDetail />}/>
        <Route path="/service-offer-list" element={<OfferList />}/> */}

        <Route path="/service-offer-detail/:id" element={<ProtectedRoute element={<OfferDetail />} />} />
        <Route path="/service-offer-list" element={<ProtectedRoute element={<OfferList />} />} />
        {/* End Services Offer */}

        {/* Start Mission */}
        <Route path="/mission-create" element={<ProtectedRoute element={<MissionCreate />} />} />
        <Route path="/service-edit/:id" element={<ProtectedRoute element={<ServiceEdit />} />} />
        <Route path="/service-detail/:id" element={<ProtectedRoute element={<ServiceDetail />} />} />
        <Route path="/service-delete-at" element={<ProtectedRoute element={<ServiceDelete />} />} />
        <Route path="/mission-list" element={<ProtectedRoute element={<MissionList />} />} />
        {/* End Mission */}

      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
