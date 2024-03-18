import Navheader from "./nav-header";
import Sidebar from "./sidebar";
import ModalUser from "./modal-user";
import Custom from "./custom-template";
function Layout({ children }) {
    return (
        <div id="main-wrapper">
            <Sidebar />
            <Navheader />
            <ModalUser/>
            <Custom/>
            <div className="content-body">
                <div className="container-fluid">
                    <div>{children}</div>
                </div>
            </div>
        </div>
    );
}

export default Layout;