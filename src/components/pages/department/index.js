import { useState, useEffect } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import ReactPaginate from "react-paginate";
import Layout from "../../layouts";
import Swal from "sweetalert2";
// import axios from "axios";
function DepartmentList() {
    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const [departments, setDepartments] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    // const { id } = useParams();
    // useEffect(() => {
    //     const loadEmployee = async () => {
    //         const userToken = localStorage.getItem("access_token");
    //         api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
    //         try {
    //             const response = await api.get(url.DEPARTMENT.LIST);
    //             setDepartments(response.data);
    //             setPageCount(Math.ceil(response.data.length / departmentPerPage));
    //         } catch (error) { }
    //     };
    //     loadEmployee();
    // }, [currentPage]);

    

    useEffect(() => {
        loadEmployee();
    }, [currentPage]);
    
    const loadEmployee = async () => {
        const userToken = localStorage.getItem("access_token");
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        try {
            const response = await api.get(url.DEPARTMENT.LIST);
            setDepartments(response.data);
            setPageCount(Math.ceil(response.data.length / departmentPerPage));
        } catch (error) { }
    };

    //paginate
    const departmentPerPage = 6;
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedDepartment = departments.slice(
        currentPage * departmentPerPage,
        (currentPage + 1) * departmentPerPage
    );

    // delete department

    const handleDeleteDepartment = async (departmentId) => {
        
        const isConfirmed = await Swal.fire({
            title: "Are you sure?",
            text: "You want to delete selected movies?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "I'm sure",
        });

        if (isConfirmed.isConfirmed) {
            try {
                const id = parseInt(departmentId);
                // Send DELETE request to the API endpoint
                const deleteResponse = await api.delete(`https://localhost:7011/api/Departments/${id}`);
                // const deleteResponse = await api.delete(url.GALLERY.DELETE, {
                //     data: idDepart,
                // });
                if (deleteResponse.status === 204) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Success',
                        text: 'Department deleted successfully!',
                    });
                    loadEmployee();
                    // console.log("data:", deleteResponse.data);
                } else {
                }
            }
            catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'An error occurred while deleting the department. Please try again later.',
                });
            }
        }
    }

    

    // check role
    // const handleDeleteDepartment = async (departmentId) => {
    //     try {
    //         const id = parseInt(departmentId);
    //       const response = await api.delete(`https://localhost:7011/api/Departments/${id}`);
    //     //   setMessage(response.data.message);
    //     //   fetchDepartments();
    //     } catch (error) {
    //     //   setMessage('Error deleting department');
    //       console.error(error);
    //     }
    //   };
    useEffect(() => {
        const fetchUserRole = async () => {
            const token = localStorage.getItem("access_token");
            try {
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                setUserRole(userRole);

                if (userRole === "User" || userRole === "Star Admin Staff") {
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
                        <div className="row align-items-center">
                            <div className="border-0 mb-4">
                                <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 className="fw-bold mb-0">Departments</h3>
                                    <div className="col-auto d-flex w-sm-100">
                                        <Link to="/department-create" type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#depadd"><i className="icofont-plus-circle me-2 fs-6"></i>Add Departments</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row clearfix g-3">
                            <div className="col-sm-12">
                                <div className="card mb-3">
                                    <div className="card-body">
                                        <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{ width: "100%" }}>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    {/* <th>Department Head</th>  */}
                                                    <th>Department Name</th>
                                                    <th>Employee UnderWork</th>
                                                    <th>Actions</th>
                                                </tr>
                                            </thead>
                                            {displayedDepartment.map((item, index) => {
                                                return (
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <span className="fw-bold">{item.departmentID}</span>
                                                            </td>
                                                            {/* <td>
                                                <img className="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                                                <span className="fw-bold ms-1">Phil	Glover</span>
                                            </td> */}
                                                            <td>
                                                                {item.departmentName}
                                                            </td>
                                                            <td>
                                                                {item.employeeInDepartment}
                                                            </td>
                                                            <td>
                                                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                    <Link to={`/department-edit/${item.departmentID}`} type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></Link>
                                                                    {/* <NavLink onClick={handleDeleteDepartment}> */}
                                                                        <button type="button" className="btn btn-outline-secondary deleterow" onClick={() => handleDeleteDepartment(item.departmentID)}><i className="icofont-ui-delete text-danger"></i></button>
                                                                    {/* </NavLink> */}
                                                                </div>
                                                            </td>
                                                        </tr>

                                                    </tbody>
                                                )
                                            })}

                                        </table>
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
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>

    );
}

export default DepartmentList;