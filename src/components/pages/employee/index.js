import { useEffect, useState } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { Link } from "react-router-dom";
import Layout from "../../layouts";
import ReactPaginate from 'react-paginate';
// import Swal from "sweetalert2";
function EmpList() {
    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const [employees, setEmployees] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const loadEmployee = async () => {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.get(url.EMPLOYEE.LIST);
                setEmployees(response.data);
                setPageCount(Math.ceil(response.data.length / employeesPerPage));
            } catch (error) { }
        };
        loadEmployee();
    }, [currentPage]);

    //paginate
    const employeesPerPage = 6;
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedEmployees = employees.slice(
        currentPage * employeesPerPage,
        (currentPage + 1) * employeesPerPage
    );

    // check role
    useEffect(() => {
        const fetchUserRole = async () => {
            const token = localStorage.getItem("access_token");
            try {
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                setUserRole(userRole);

                if (userRole === "User" || userRole === "Movie Theater Manager Staff") {
                    setError(true);
                }
            } catch (error) {
                console.error("Error loading user role:", error);
            }
        };

        fetchUserRole();
    }, []);

    return (
        <Layout>
            <div className="main px-lg-4 px-md-4">
                <div className="body d-flex py-lg-3 py-md-2">
                    <div className="container-xxl">
                        <div className="row clearfix">
                            <div className="col-md-12">
                                <div className="card border-0 mb-4 no-bg">
                                    <div className="card-header py-3 px-0 d-sm-flex align-items-center  justify-content-between border-bottom">
                                        <h3 className=" fw-bold flex-fill mb-0 mt-sm-0">Employee</h3>
                                        <Link to="/employee-create" type="button" className="btn btn-dark me-1 mt-1 w-sm-100" data-bs-toggle="modal" data-bs-target="#createemp"><i className="icofont-plus-circle me-2 fs-6"></i>Add Employee</Link>
                                        <div className="dropdown">
                                            <ul className="dropdown-menu  dropdown-menu-end" aria-labelledby="dropdownMenuButton2">
                                                <li><a className="dropdown-item" href="#">All</a></li>
                                                <li><a className="dropdown-item" href="#">Task Assign Members</a></li>
                                                <li><a className="dropdown-item" href="#">Not Assign Members</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">
                                {displayedEmployees.map((item, index) => {
                                    return (
                        
                            <div className="col">
                                        <div className="card teacher-card">
                                            <div className="card-body d-flex">
                                                <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                                                    <img src={item.picture} alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                                                    <div className="about-info d-flex align-items-center mt-3 justify-content-center">
                                                        <div className="followers me-2">
                                                            <i className="icofont-tasks color-careys-pink fs-4"></i>
                                                            <span className="">04</span>
                                                        </div>
                                                        <div className="star me-2">
                                                            <i className="icofont-star text-warning fs-4"></i>
                                                            <span className="">4.5</span>
                                                        </div>
                                                        <div className="own-video">
                                                            <i className="icofont-data color-light-orange fs-4"></i>
                                                            <span className="">04</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                                                    <h6 className="mb-0 mt-2  fw-bold d-block fs-6">
                                                        {item.employeeName}</h6>
                                                    <span className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-11 mb-0 mt-1">{item.role}</span>
                                                    <div className="video-setting-icon mt-3 pt-3 border-top">
                                                        <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices</p>
                                                    </div>
                                                    <a href="task.html" className="btn btn-dark btn-sm mt-1"><i className="icofont-plus-circle me-2 fs-6"></i>Add Task</a>
                                                    <Link to={`/employee-detail/${item.id}`} className="btn btn-dark btn-sm mt-1"><i className="icofont-invisible me-2 fs-6"></i>Profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        
                                    )
                                })}
                            </div>
                            </div>
                        </div>
                    </div>
            <ReactPaginate
                previousLabel="Previous"
                nextLabel="Next"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakLabel="..."
                breakClassName="page-item"
                breakLinkClassName="page-link"
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName="pagination"
                activeClassName="active"
            />

        </Layout>
    );
}
export default EmpList;