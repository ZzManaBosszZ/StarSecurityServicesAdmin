import { Link } from "react-router-dom";
function Sidebar() {
    return(

        <div class="sidebar px-4 py-4 py-md-5 me-0">
            <div class="d-flex flex-column h-100">
                <Link to="/" class="mb-0 brand-icon">
                    <span class="logo-icon">
                        <svg  width="35" height="35" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                        </svg>
                    </span>
                    <span class="logo-text">My-Task</span>
                </Link>

    
                <ul class="menu-list flex-grow-1 mt-3">
                    <li class="collapsed">
                        <a class="m-link active" data-bs-toggle="collapse" data-bs-target="#dashboard-Components" href="#">
                            <i class="icofont-home fs-5"></i> <span>Dashboard</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse show" id="dashboard-Components">
                            <li><a class="ms-link active" href="index.html"> <span>Hr Dashboard</span></a></li>
                            <li><a class="ms-link" href="project-dashboard.html"> <span>Project Dashboard</span></a></li>
                        </ul>
                    </li>
                    <li  class="collapsed">
                        <a class="m-link"  data-bs-toggle="collapse" data-bs-target="#project-Components" href="#">
                            <i class="icofont-briefcase"></i><span>Projects</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="project-Components">
                            <li><a class="ms-link" href="projects.html"><span>Projects</span></a></li>
                            <li><a class="ms-link" href="task.html"><span>Tasks</span></a></li>
                            <li><a class="ms-link" href="timesheet.html"><span>Timesheet</span></a></li>
                            <li><a class="ms-link" href="team-leader.html"><span>Leaders</span></a></li>
                        </ul>
                    </li>
                    
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#tikit-Components" href="#"><i
                                class="icofont-ticket"></i> <span>Tickets</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="tikit-Components">
                            <li><a class="ms-link" href="tickets.html"> <span>Tickets View</span></a></li>
                            <li><a class="ms-link" href="ticket-detail.html"> <span>Ticket Detail</span></a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#client-Components" href="#"><i
                                class="icofont-user-male"></i> <span>Our Clients</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="client-Components">
                            <li><a class="ms-link" href="ourclients.html"> <span>Clients</span></a></li>
                            <li><a class="ms-link" href="profile.html"> <span>Client Profile</span></a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#emp-Components" href="#"><i
                                class="icofont-users-alt-5"></i> <span>Employees</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="emp-Components">
                            <li><a class="ms-link" href="members.html"> <span>Members</span></a></li>
                            <li><a class="ms-link" href="employee-profile.html"> <span>Members Profile</span></a></li>
                            <li><a class="ms-link" href="holidays.html"> <span>Holidays</span></a></li>
                            <li><a class="ms-link" href="attendance-employees.html"> <span>Attendance Employees</span></a></li>
                            <li><a class="ms-link" href="attendance.html"> <span>Attendance</span></a></li>
                            <li><a class="ms-link" href="leave-request.html"> <span>Leave Request</span></a></li>
                            <li><a class="ms-link" href="department.html"> <span>Department</span></a></li>
                            <li><a class="ms-link" href="loan.html"> <span>Loan</span></a></li>
                        </ul>
                    </li>
                   
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#menu-Componentsone" href="#"><i
                                class="icofont-ui-calculator"></i> <span>Accounts</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="menu-Componentsone">
                            <li><a class="ms-link" href="invoices.html"><span>Invoices</span> </a></li>
                            <li><a class="ms-link" href="payments.html"><span>Payments</span> </a></li>
                            <li><a class="ms-link" href="expenses.html"><span>Expenses</span> </a></li>
                            <li><a class="ms-link" href="create-invoice.html"><span>Create Invoice</span> </a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#payroll-Components" href="#"><i
                                class="icofont-users-alt-5"></i> <span>Payroll</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="payroll-Components">
                            <li><a class="ms-link" href="salaryslip.html"><span>Employee Salary</span> </a></li>
                            
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#app-Components" href="#">
                            <i class="icofont-contrast"></i> <span>App</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="app-Components">
                            <li><a class="ms-link" href="calendar.html"> <span>Calander</span></a></li>
                            <li><a class="ms-link" href="chat.html"><span>Chat App</span></a></li>
                        </ul>
                    </li>
                    <li class="collapsed">
                        <a class="m-link" data-bs-toggle="collapse" data-bs-target="#extra-Components" href="#">
                            <i class="icofont-code-alt"></i> <span>Other Pages</span> <span class="arrow icofont-dotted-down ms-auto text-end fs-5"></span></a>

                        <ul class="sub-menu collapse" id="extra-Components">
                            <li><a class="ms-link" href="charts.html"> <span>Apex Charts</span></a></li>
                            <li><a class="ms-link" href="forms.html"><span>Forms Example</span></a></li>
                            <li><a class="ms-link" href="table.html"> <span>Table Example</span></a></li>
                            <li><a class="ms-link" href="review.html"><span>Reviews Page</span></a></li>
                             <li><a class="ms-link" href="icon.html"><span>Icons</span></a></li>
                            <li><a class="ms-link" href="contact.html"><span>Contact</span></a></li>
                            <li><a class="ms-link" href="widgets.html"><span>Widgets</span></a></li>
                            <li><a class="ms-link" href="todo-list.html"><span>Todo-List</span></a></li>
                        </ul>
                    </li>
                    <li><a class="m-link" href="ui-elements/ui-alerts.html"><i class="icofont-paint"></i> <span>UI Components</span></a></li>
                </ul>
       
                <button type="button" class="btn btn-link sidebar-mini-btn text-light">
                    <span class="ms-2"><i class="icofont-bubble-right"></i></span>
                </button>
            </div>
        </div>
    );
} export default Sidebar;