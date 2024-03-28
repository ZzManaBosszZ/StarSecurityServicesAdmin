import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../layouts";
import api from "../../services/api";
import url from "../../services/url";

function EmpDetail() {
    const { id } = useParams();
    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const [employeesDetail, setEmployeesDetail] = useState([]);

    useEffect(() => {
        const userToken = localStorage.getItem("access_token");
        // api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        api.get(`${url.EMPLOYEE.DETAIL.replace("{}", id)}`)
            .then((response) => {
                setEmployeesDetail(response.data);
            })
            .catch((error) => {
                // console.error("Error fetching promotion details:", error);
            });
    }, [id]);

    useEffect(() => {
        const fetchUserRole = async () => {
            const token = localStorage.getItem("access_token");
            try {
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                setUserRole(userRole);

                if (userRole === "User" || userRole === "Shopping Center Manager Staff") {
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
                                    <div className="card-header py-3 px-0 d-flex align-items-center  justify-content-between border-bottom">
                                        <h3 className=" fw-bold flex-fill mb-0">Employee Profile</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-xl-8 col-lg-12 col-md-12">
                                <div className="card teacher-card  mb-3">
                                    <div className="card-body  d-flex teacher-fulldeatil">
                                        <div className="profile-teacher pe-xl-4 pe-md-2 pe-sm-4 pe-0 text-center w220 mx-sm-0 mx-auto">
                                            <a href="#">
                                                <img src="assets/images/lg/avatar3.jpg" alt="" className="avatar xl rounded-circle img-thumbnail shadow-sm" />
                                            </a>
                                            <div className="about-info d-flex align-items-center mt-3 justify-content-center flex-column">
                                                <h6 className="mb-0 fw-bold d-block fs-6">{employeesDetail.role}</h6>
                                                <span className="text-muted small">Employee Id : {employeesDetail.id}</span>
                                            </div>
                                        </div>
                                        <div className="teacher-info border-start ps-xl-4 ps-md-3 ps-sm-4 ps-4 w-100">
                                            <h6 className="mb-0 mt-2  fw-bold d-block fs-6">{employeesDetail.name}</h6>
                                            <span className="py-1 fw-bold small-11 mb-0 mt-1 text-muted">{employeesDetail.role}</span>
                                            <p className="mt-2 small">The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy</p>
                                            <div className="row g-2 pt-2">
                                                <div className="col-xl-5">
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-ui-touch-phone"></i>
                                                        <span className="ms-2 small">{employeesDetail.contactNumber}</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5">
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-email"></i>
                                                        <span className="ms-2 small">{employeesDetail.name}@gmail.com</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5">
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-birthday-cake"></i>
                                                        <span className="ms-2 small">19/03/1980</span>
                                                    </div>
                                                </div>
                                                <div className="col-xl-5">
                                                    <div className="d-flex align-items-center">
                                                        <i className="icofont-address-book"></i>
                                                        <span className="ms-2 small">{employeesDetail.address}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h6 className="fw-bold  py-3 mb-3">Current Work Project</h6>
                                <div className="teachercourse-list">
                                    <div className="row g-3 gy-5 py-3 row-deck">
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                                        <div className="lesson_name">
                                                            <div className="project-block light-info-bg">
                                                                <i className="icofont-paint"></i>
                                                            </div>
                                                            <span className="small text-muted project_name fw-bold"> Social Geek Made </span>
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">UI/UX Design</h6>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-list avatar-list-stacked pt-2">
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar2.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar1.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar3.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar4.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar8.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 pt-4">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-paper-clip"></i>
                                                                <span className="ms-2">5 Attach</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-sand-clock"></i>
                                                                <span className="ms-2">4 Month</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students "></i>
                                                                <span className="ms-2">5 Members</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-text-chat"></i>
                                                                <span className="ms-2">10</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block"></div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Progress</h4>
                                                        <span className="small light-danger-bg  p-1 rounded"><i className="icofont-ui-clock"></i> 35 Days Left</span>
                                                    </div>
                                                    <div classNameName="progress" style={{ height: '8px' }}>
                                                        <div classNameName="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div classNameName="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div classNameName="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-12">
                                            <div className="card">
                                                <div className="card-body">
                                                    <div className="d-flex align-items-center justify-content-between mt-5">
                                                        <div className="lesson_name">
                                                            <div className="project-block bg-lightgreen">
                                                                <i className="icofont-vector-path"></i>
                                                            </div>
                                                            <span className="small text-muted project_name fw-bold"> Practice to Perfect </span>
                                                            <h6 className="mb-0 fw-bold  fs-6  mb-2">Website Design</h6>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center">
                                                        <div className="avatar-list avatar-list-stacked pt-2">
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar2.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar1.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar3.jpg" alt="" />
                                                            <img className="avatar rounded-circle sm" src="assets/images/xs/avatar4.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="row g-2 pt-4">
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-paper-clip"></i>
                                                                <span className="ms-2">4 Attach</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-sand-clock"></i>
                                                                <span className="ms-2">1 Month</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-group-students "></i>
                                                                <span className="ms-2">4 Members</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-6">
                                                            <div className="d-flex align-items-center">
                                                                <i className="icofont-ui-text-chat"></i>
                                                                <span className="ms-2">3</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="dividers-block"></div>
                                                    <div className="d-flex align-items-center justify-content-between mb-2">
                                                        <h4 className="small fw-bold mb-0">Progress</h4>
                                                        <span className="small light-danger-bg  p-1 rounded"><i className="icofont-ui-clock"></i> 15 Days Left</span>
                                                    </div>
                                                    <div classNameName="progress" style={{ height: '8px' }}>
                                                        <div classNameName="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div classNameName="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '25%' }} aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div classNameName="progress-bar bg-secondary ms-1" role="progressbar" style={{ width: '39%' }} aria-valuenow="39" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-3">
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                        <div className="card">
                                            <div className="card-header py-3 d-flex justify-content-between">
                                                <h6 className="mb-0 fw-bold ">Personal Informations</h6>
                                                <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#edit1"><i className="icofont-edit text-primary fs-6"></i></button>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Nationality</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">Indian</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Religion</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">Hindu</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Marital Status</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">Married</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Passport No.</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">5468953210</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Emergency Contact</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">7468953210</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-12">
                                        <div className="card">
                                            <div className="card-header py-3 d-flex justify-content-between">
                                                <h6 className="mb-0 fw-bold ">Bank information</h6>
                                                <button type="button" className="btn p-0" data-bs-toggle="modal" data-bs-target="#edit2"><i className="icofont-edit text-primary fs-6"></i></button>
                                            </div>
                                            <div className="card-body">
                                                <ul className="list-unstyled mb-0">
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Bank Name</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">Kotak</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Account No.</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">5436874596325486</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">IFSC Code</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">Kotak000021</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap mb-3">
                                                        <div className="col-6">
                                                            <span className="fw-bold">Pan No</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">ACQPF6584L</span>
                                                        </div>
                                                    </li>
                                                    <li className="row flex-wrap">
                                                        <div className="col-6">
                                                            <span className="fw-bold">UPI Id</span>
                                                        </div>
                                                        <div className="col-6">
                                                            <span className="text-muted">454812kotak@upi</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-md-12">
                                <div className="card mb-3">
                                    <div className="card-header py-3">
                                        <h6 className="mb-0 fw-bold ">Current Task</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="planned_task client_task">
                                            <div className="dd" data-plugin="nestable">
                                                <ol className="dd-list">
                                                    <li className="dd-item mb-3">
                                                        <div className="dd-handle">
                                                            <div className="task-info d-flex align-items-center justify-content-between">
                                                                <h6 className="light-info-bg py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">UI/UX Design</h6>
                                                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                                                    <div className="avatar-list avatar-list-stacked m-0">
                                                                        <img className="avatar rounded-circle small-avt sm" src="assets/images/xs/avatar2.jpg" alt="" />
                                                                        <img className="avatar rounded-circle small-avt sm" src="assets/images/xs/avatar1.jpg" alt="" />
                                                                    </div>
                                                                    <span className="badge bg-warning text-end mt-1">Inprogress</span>
                                                                </div>
                                                            </div>
                                                            <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                                nec scelerisque massa.</p>
                                                            <div className="tikit-info row g-3 align-items-center">
                                                                <div className="col-sm">
                                                                </div>
                                                                <div className="col-sm text-end">
                                                                    <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Social Geek Made </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </li>
                                                    <li className="dd-item">
                                                        <div className="dd-handle">
                                                            <div className="task-info d-flex align-items-center justify-content-between">
                                                                <h6 className="bg-lightgreen py-1 px-2 rounded-1 d-inline-block fw-bold small-14 mb-0">Website Design
                                                                </h6>
                                                                <div className="task-priority d-flex flex-column align-items-center justify-content-center">
                                                                    <div className="avatar-list avatar-list-stacked m-0">
                                                                        <img className="avatar rounded-circle small-avt sm" src="assets/images/xs/avatar7.jpg" alt="" />
                                                                    </div>
                                                                    <span className="badge bg-danger text-end mt-1">Review</span>
                                                                </div>
                                                            </div>
                                                            <p className="py-2 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id
                                                                nec scelerisque massa.</p>
                                                            <div className="tikit-info row g-3 align-items-center">
                                                                <div className="col-sm">
                                                                </div>
                                                                <div className="col-sm text-end">
                                                                    <div className="small text-truncate light-danger-bg py-1 px-2 rounded-1 d-inline-block fw-bold small"> Practice to Perfect </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header py-3">
                                        <h6 className="mb-0 fw-bold ">Experience</h6>
                                    </div>
                                    <div className="card-body">
                                        <div className="timeline-item ti-danger border-bottom ms-2">
                                            <div className="d-flex">
                                                <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">PW</span>
                                                <div className="flex-fill ms-3">
                                                    <div className="mb-1"><strong>Pixel Wibes</strong></div>
                                                    <span className="d-flex text-muted">Jan 2016 - Present (5 years 2 months)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item ti-info border-bottom ms-2">
                                            <div className="d-flex">
                                                <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-careys-pink">CC</span>
                                                <div className="flex-fill ms-3">
                                                    <div className="mb-1"><strong>Crest Coder</strong></div>
                                                    <span className="d-flex text-muted">Dec 2015 - 2016 (1 years)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item ti-success  ms-2">
                                            <div className="d-flex">
                                                <span className="avatar d-flex justify-content-center align-items-center rounded-circle bg-lavender-purple">MW</span>
                                                <div className="flex-fill ms-3">
                                                    <div className="mb-1"><strong>Morning Wibe</strong></div>
                                                    <span className="d-flex text-muted">Nov 2014 - 2015 (1 years)</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="timeline-item ti-danger border-bottom ms-2">
                                            <div className="d-flex">
                                                <span className="avatar d-flex justify-content-center align-items-center rounded-circle light-success-bg">FF</span>
                                                <div className="flex-fill ms-3">
                                                    <div className="mb-1"><strong>FebiFlue</strong></div>
                                                    <span className="d-flex text-muted">Jan 2010 - 2009 (1 years)</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="modal fade" id="addUser" tabindex="-1" aria-labelledby="addUserLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title  fw-bold" id="addUserLabel">Employee Invitation</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="inviteby_email">
                                    <div className="input-group mb-3">
                                        <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1" />
                                        <button className="btn btn-dark" type="button" id="button-addon2">Sent</button>
                                    </div>
                                </div>
                                <div className="members_list">
                                    <h6 className="fw-bold ">Employee </h6>
                                    <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                                        <li className="list-group-item py-3 text-center text-md-start">
                                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                <div className="no-thumbnail mb-2 mb-md-0">
                                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar2.jpg" alt="" />
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="mb-0  fw-bold">Rachel Carr(you)</h6>
                                                    <span className="text-muted">rachel.carr@gmail.com</span>
                                                </div>
                                                <div className="members-action">
                                                    <span className="members-role ">Admin</span>
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="icofont-ui-settings  fs-6"></i>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                                            <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 text-center text-md-start">
                                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                <div className="no-thumbnail mb-2 mb-md-0">
                                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar3.jpg" alt="" />
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="mb-0  fw-bold">Lucas Baker<a href="#" className="link-secondary ms-2">(Resend invitation)</a></h6>
                                                    <span className="text-muted">lucas.baker@gmail.com</span>
                                                </div>
                                                <div className="members-action">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Members
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icofont-check-circled"></i>

                                                                    <span>All operations permission</span>
                                                                </a>

                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fs-6 p-2 me-1"></i>
                                                                    <span>Only Invite & manage team</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            <i className="icofont-ui-settings  fs-6"></i>
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2"></i>Delete Member</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item py-3 text-center text-md-start">
                                            <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                                <div className="no-thumbnail mb-2 mb-md-0">
                                                    <img className="avatar lg rounded-circle" src="assets/images/xs/avatar8.jpg" alt="" />
                                                </div>
                                                <div className="flex-fill ms-3 text-truncate">
                                                    <h6 className="mb-0  fw-bold">Una Coleman</h6>
                                                    <span className="text-muted">una.coleman@gmail.com</span>
                                                </div>
                                                <div className="members-action">
                                                    <div className="btn-group">
                                                        <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Members
                                                        </button>
                                                        <ul className="dropdown-menu dropdown-menu-end">
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="icofont-check-circled"></i>

                                                                    <span>All operations permission</span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a className="dropdown-item" href="#">
                                                                    <i className="fs-6 p-2 me-1"></i>
                                                                    <span>Only Invite & manage team</span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="btn-group">
                                                        <div className="btn-group">
                                                            <button type="button" className="btn bg-transparent dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                                                <i className="icofont-ui-settings  fs-6"></i>
                                                            </button>
                                                            <ul className="dropdown-menu dropdown-menu-end">
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-ui-password fs-6 me-2"></i>ResetPassword</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-chart-line fs-6 me-2"></i>ActivityReport</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-delete-alt fs-6 me-2"></i>Suspend member</a></li>
                                                                <li><a className="dropdown-item" href="#"><i className="icofont-not-allowed fs-6 me-2"></i>Delete Member</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="edit1" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title  fw-bold" id="edit1Label"> Personal Informations</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="deadline-form">
                                    <form>
                                        <div className="row g-3 mb-3">
                                            <div className="col">
                                                <label for="exampleFormControlInput877" className="form-label">Nationality</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput877" value="Indian" />
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput977" className="form-label">Religion</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput977" value="Hindu" />
                                            </div>
                                        </div>
                                        <div className="row g-3 mb-3">
                                            <div className="col">
                                                <label for="exampleFormControlInput9777" className="form-label">Marital Status</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput9777" value="Married" />
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput2770" className="form-label">Passport No</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput2770" value="5468953210" />
                                            </div>
                                        </div>
                                        <div className="row g-3 mb-3">
                                            <div className="col-6">
                                                <label for="exampleFormControlInput4777" className="form-label">Emergency Contact</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput4777" value="7468953210" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="edit2" tabindex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title  fw-bold" id="edit2Label"> Bank information</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="deadline-form">
                                    <form>
                                        <div className="row g-3 mb-3">
                                            <div className="col">
                                                <label for="exampleFormControlInput8775" className="form-label">Bank Name</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput8775" value="Kotak" />
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput977" className="form-label">Account No.</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput9775" value="5436874596325486" />
                                            </div>
                                        </div>
                                        <div className="row g-3 mb-3">
                                            <div className="col">
                                                <label for="exampleFormControlInput97775" className="form-label">IFSC Code</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput97775" value="Kotak000021" />
                                            </div>
                                            <div className="col">
                                                <label for="exampleFormControlInput27705" className="form-label">Pan No</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput27705" value="ACQPF6584L" />
                                            </div>
                                        </div>
                                        <div className="row g-3 mb-3">
                                            <div className="col-6">
                                                <label for="exampleFormControlInput47775" className="form-label">UPI Id</label>
                                                <input type="text" className="form-control" id="exampleFormControlInput47775" value="454812kotak@upi" />
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <button type="button" className="btn btn-primary">Create</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Layout>
    );
}
export default EmpDetail;