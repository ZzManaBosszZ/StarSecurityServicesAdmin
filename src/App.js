import {BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Dashboard from "./components/pages/dashboard/home";
import Login from "./components/pages/auth/login";
import ResetPass from "./components/pages/auth/reset-password";
import Verifycode from "./components/pages/auth/verifycode";
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
        {/* <Route path="/client-detail/:id" element={<ProfileClient />}/> */}
        <Route path="/client-detail" element={<ClientDetail />}/>
        <Route path="/client-create" element={<ClientCreate />}/>
        <Route path="/client-list" element={<ClientList />}/>
        {/* End Client */}

        {/* Start Employee */}
        <Route path="/employee-list" element={<EmpList />}/>
        {/* <Route path="/employee-detail/:id" element={<EmpProfile />}/> */}
        <Route path="/employee-detail" element={<EmpDetail />}/>
        {/* End Employee */}

        {/* Start Department */}
        <Route path="/department-list" element={<DepartmentList />}/>
        {/* End Department */}

        
        {/* Start Services */}
        <Route path="/service-create" element={<ServiceCreate />}/>
        {/* <Route path="/service-edit/:id" element={<ServiceList />}/> */}
        <Route path="/service-edit" element={<ServiceEdit />}/>
        <Route path="/service-detail" element={<ServiceDetail />}/>
        <Route path="/service-delete-at" element={<ServiceDelete />}/>
        <Route path="/service-list" element={<ServiceList />}/>
        {/* End Services */}

        {/* Start Services Offer */}  
        {/* <Route path="/service-edit/:id" element={<ServiceList />}/> */}
        <Route path="/service-offer-detail" element={<OfferDetail />}/>
        <Route path="/service-offer-list" element={<OfferList />}/>
        {/* End Services Offer */}

      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
