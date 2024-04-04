import Navheader from "./nav-header";
import Sidebar from "./sidebar";
import ModalUser from "./modal-user";
import Custom from "./custom-template";
// import { useState, useEffect } from "react";
// import { Helmet } from "react-helmet";
function Layout({ children }) {
   
    return (
        <div id="mytask-layout">
            <Sidebar />
            <div className="main px-lg-4 px-md-4">
                <Navheader />
                <div className="content-body">
                    <div className="container-fluid">
                        <div>{children}</div>
                    </div>
                </div>
            </div>
            <ModalUser />
            <Custom />
        </div>
    );
}

export default Layout;