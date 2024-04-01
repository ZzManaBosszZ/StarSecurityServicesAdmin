import Layout from "../../layouts";
import React from "react";
import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";

function ClientList() {
    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const [clients, setClient] = useState([]);
    const [employees, setEmployees] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
        const loadClient = async () => {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.get(url.CLIENT.LIST);
                setClient(response.data);
                setPageCount(Math.ceil(response.data.length / clientsPerPage));
            } catch (error) { }
        };
        loadClient();
    }, [currentPage]);

    useEffect(() => {
        const fetchEmployee = async () => {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.get(url.EMPLOYEE.LIST);
                const departmentData = response.data.map((employee) => ({
                    value: employee.id,
                    label: employee.name,
                }));
                setEmployees(departmentData);
            } catch (error) { }
        };
        fetchEmployee();
    }, []);

    //paginate
    const clientsPerPage = 6;
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedClients = clients.slice(
        currentPage * clientsPerPage,
        (currentPage + 1) * clientsPerPage
    );

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
            <div className="body d-flex py-lg-3 py-md-2">
                <div className="container-xxl">
                    <div className="row clearfix">
                        <div className="col-md-12">
                            <div className="card border-0 mb-4 no-bg">
                                <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                                    <h3 className=" fw-bold flex-fill mb-0">Clients</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 row-cols-1 row-cols-sm-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-2 row-cols-xxl-2 row-deck py-1 pb-4">

                        {displayedClients.map((item, index) => {
                            return (
                                <div className="col">
                                    <div className="card teacher-card">
                                        <div className="card-body  d-flex">
                                            <div className="profile-av pe-xl-4 pe-md-2 pe-sm-4 pe-4 text-center w220">
                                                <img src="assets/images/lg/avatar3.jpg" alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                                                <div className="about-info d-flex align-items-center mt-1 justify-content-center flex-column">
                                                    <h6 className="mb-0 fw-bold d-block fs-6 mt-2">{item.name}</h6>
                                                    <div className="btn-group mt-2" role="group" aria-label="Basic outlined example">
                                                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#editproject"><i className="icofont-edit text-success"></i></button>
                                                        <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#deleteproject"><i className="icofont-ui-delete text-danger"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                                                <h6 className="mb-0 mt-2  fw-bold d-block fs-6">Services: AgilSoft Tech</h6>
                                                <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">Employee in charge: {index.employeeName}</span>
                                                <div className="video-setting-icon mt-3 pt-3 border-top">
                                                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices.Vestibulum ante ipsum primis in faucibus orci luctus et ultrices</p>
                                                </div>
                                                <div className="d-flex flex-wrap align-items-center ct-btn-set">
                                                <Link to={`/client-detail/${item.id}`} className="btn btn-dark btn-sm mt-1"><i className="icofont-invisible me-2 fs-6"></i>Profile</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

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
export default ClientList;