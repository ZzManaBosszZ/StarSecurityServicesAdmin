import {BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/home";
import Login from "./components/pages/auth/login";
import ForgotPassword from "./components/pages/auth/forgot-password";
import ResetPassword from "./components/pages/auth/reset-password";
import ClientCreate from "./components/pages/clients/create";
import ClientDetail from "./components/pages/clients/detail";
import ClientList from "./components/pages/clients/index";
import EmpList from "./components/pages/clients/index";
import EmpDetail from "./components/pages/clients/detail";
import DepartmentList from "./components/pages/department/index";
import ServiceList from "./components/pages/star-services";
import ServiceCreate from "./components/pages/star-services/create";
import ServiceEdit from "./components/pages/star-services/edit";
import ServiceDelete from "./components/pages/star-services/delete";
import ServiceDetail from "./components/pages/star-services/detail";
import OfferDetail from "./components/pages/star-services-offer/detail";
import OfferList from "./components/pages/star-services-offer";
import { useJwt } from "react-jwt";
import { getAccessToken, removeAccessToken } from "./components/pages/utils/auth";
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
        <Route path="/forgot-password" element={<ProtectedLoginRoute element={<ForgotPassword />} />}/>
        <Route path="/reset-password" element={<ProtectedLoginRoute element={<ResetPassword />} />}/>
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
        <Route path="/client-detail" element={<ProtectedRoute element={<ClientDetail />} />} />
        <Route path="/client-create" element={<ProtectedRoute element={<ClientCreate />} />} />
        <Route path="/client-list" element={<ProtectedRoute element={<ClientList />} />} />
        {/* End Client */}

        {/* Start Employee */}
        {/* <Route path="/employee-list" element={<EmpList />}/> */}
        {/* <Route path="/employee-detail/:id" element={<EmpProfile />}/> */}
        {/* <Route path="/employee-detail" element={<EmpDetail />}/> */}

        <Route path="/employee-list" element={<ProtectedRoute element={<EmpList />} />} />
        <Route path="/employee-detail" element={<ProtectedRoute element={<EmpDetail />} />} />
        
        {/* End Employee */}

        {/* Start Department */}
        <Route path="/department-list" element={<ProtectedRoute element={<DepartmentList />} />}/>
        {/* End Department */}

        
        {/* Start Services */}
        {/* <Route path="/service-create" element={<ServiceCreate />}/> */}
        {/* <Route path="/service-edit/:id" element={<ServiceList />}/> */}
        {/* <Route path="/service-edit" element={<ServiceEdit />}/>
        <Route path="/service-detail" element={<ServiceDetail />}/>
        <Route path="/service-delete-at" element={<ServiceDelete />}/>
        <Route path="/service-list" element={<ServiceList />}/> */}

        <Route path="/service-create" element={<ProtectedRoute element={<ServiceCreate />} />} />
        <Route path="/service-edit" element={<ProtectedRoute element={<ServiceEdit />} />} />
        <Route path="/service-detail" element={<ProtectedRoute element={<ServiceDetail />} />} />
        <Route path="/service-delete-at" element={<ProtectedRoute element={<ServiceDelete />} />} />
        <Route path="/service-list" element={<ProtectedRoute element={<ServiceList />} />} />
        {/* End Services */}

        {/* Start Services Offer */}  
        {/* <Route path="/service-edit/:id" element={<ServiceList />}/> */}
        {/* <Route path="/service-offer-detail" element={<OfferDetail />}/>
        <Route path="/service-offer-list" element={<OfferList />}/> */}

        <Route path="/service-offer-detail" element={<ProtectedRoute element={<OfferDetail />} />} />
        <Route path="/service-offer-list" element={<ProtectedRoute element={<OfferList />} />} />
        {/* End Services Offer */}

      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
