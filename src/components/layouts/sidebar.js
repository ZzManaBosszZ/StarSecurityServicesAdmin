import React, { useState } from 'react';
import { Link } from "react-router-dom";

function Sidebar() {
    

    const [collapsedMenus, setCollapsedMenus] = useState({});

    const toggleSubMenu = (menuId) => {
        setCollapsedMenus(prevState => ({
            ...prevState,
            [menuId]: !prevState[menuId]
        }));
    };

    return (
        <div className="sidebar px-4 py-4 py-md-5 me-0">
            <div className="d-flex flex-column h-100">
                <Link to="/" className="mb-0 brand-icon">
                    <span className="logo-icon">
                        <svg width="35" height="35" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                        </svg>
                    </span>
                    <span className="logo-text">StarAdmin</span>
                </Link>


                <ul className="menu-list flex-grow-1 mt-3">
                    <li class={collapsedMenus.client ? "active" : "collapsed"}>
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#client-Components" onClick={() => toggleSubMenu('client')}><i
                            class="icofont-user-male"></i> <span>Our Clients</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                        <ul className={collapsedMenus.client ? "sub-menu collapse show" : "sub-menu collapse"} id="client-Components">
                            <Link to="/client-list"><li><a class="ms-link" ><span>Clients</span></a></li></Link>
                        </ul>
                    </li>
                    <li className={collapsedMenus.emp ? "active" : "collapsed"}>
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#emp-Components" onClick={() => toggleSubMenu('emp')}><i
                            className="icofont-users-alt-5"></i> <span>Employees</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul className={collapsedMenus.emp ? "sub-menu collapse show" : "sub-menu collapse"} id="emp-Components">
                            <li><Link to="/employee-list" className="ms-link"> <span>Members</span></Link></li>
                            <li><Link to="/department-list" className="ms-link" href="department.html"> <span>Department</span></Link></li>
                            {/* <li><a className="ms-link" href="employee-profile.html"> <span>Members Profile</span></a></li>
                            <li><a className="ms-link" href="holidays.html"> <span>Holidays</span></a></li>
                            <li><a className="ms-link" href="attendance-employees.html"> <span>Attendance Employees</span></a></li>
                            <li><a className="ms-link" href="attendance.html"> <span>Attendance</span></a></li>
                            <li><a className="ms-link" href="leave-request.html"> <span>Leave Request</span></a></li>
                            <li><a className="ms-link" href="loan.html"> <span>Loan</span></a></li> */}
                        </ul>
                    </li>

                    <li className={collapsedMenus.servicesorder ? "active" : "collapsed"}>
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Componentsone" onClick={() => toggleSubMenu('servicesorder')}><i
                            className="icofont-ui-calculator"></i> <span>Services</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                        <ul className={collapsedMenus.servicesorder ? "sub-menu collapse show" : "sub-menu collapse"} id="menu-Componentsone">
                            <Link to="/service-list"><li><a className="ms-link"><span>List</span> </a></li></Link>
                        </ul>
                    </li>
                    <li className={collapsedMenus.task ? "active" : "collapsed"}>
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Componentsone" onClick={() => toggleSubMenu('task')}><i
                            className="icofont-briefcase"></i> <span>Mission</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>
                        <ul className={collapsedMenus.task ? "sub-menu collapse show" : "sub-menu collapse"} id="menu-Componentsone">
                            <Link to="/service-list"><li><a className="ms-link"><span>List</span> </a></li></Link>
                        </ul>
                    </li>
                    <li className="collapsed">
                        <a className="m-link" data-bs-toggle="collapse" data-bs-target="#payroll-Components"><i
                            className="icofont-users-alt-5"></i> <span>Service Offer</span> <span className="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul className="sub-menu collapse" id="payroll-Components">
                            <li><a className="ms-link" href="salaryslip.html"><span>Offer Detail</span> </a></li>

                        </ul>
                    </li>
                </ul>

                {/* <button type="button" className="btn btn-link sidebar-mini-btn text-light">
                    <span className="ms-2"><i className="icofont-bubble-right"></i></span>
                </button> */}
            </div>
        </div>
    );
} export default Sidebar;