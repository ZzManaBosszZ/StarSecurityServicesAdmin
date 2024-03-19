
function Navheader() {
    return(
        <div class="header">
        <nav class="navbar py-4">
            <div class="container-xxl">

                <div class="h-right d-flex align-items-center mr-5 mr-lg-0 order-1">
                    <div class="d-flex">
                        
                        <div class="avatar-list avatar-list-stacked px-3">
                            <img class="avatar rounded-circle" src="assets/images/xs/avatar2.jpg" alt=""/>
                            <img class="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt=""/>
                            <img class="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                            <img class="avatar rounded-circle" src="assets/images/xs/avatar4.jpg" alt=""/>
                            <img class="avatar rounded-circle" src="assets/images/xs/avatar7.jpg" alt=""/>
                            <img class="avatar rounded-circle" src="assets/images/xs/avatar8.jpg" alt=""/>
                            <span class="avatar rounded-circle text-center pointer" data-bs-toggle="modal" data-bs-target="#addUser"><i class="icofont-ui-add"></i></span>
                        </div>
                    </div>
                    <div class="dropdown notifications">
                        <a class="nav-link dropdown-toggle pulse" href="#" role="button" data-bs-toggle="dropdown">
                            <i class="icofont-alarm fs-5"></i>
                            <span class="pulse-ring"></span>
                        </a>
                        <div id="NotificationsDiv" class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-sm-end p-0 m-0">
                            <div class="card border-0 w380">
                                <div class="card-header border-0 p-3">
                                    <h5 class="mb-0 font-weight-light d-flex justify-content-between">
                                        <span>Notifications</span>
                                        <span class="badge text-white">11</span>
                                    </h5>
                                </div>
                                <div class="tab-content card-body">
                                    <div class="tab-pane fade show active">
                                        <ul class="list-unstyled list mb-0">
                                            <li class="py-2 mb-1 border-bottom">
                                                <a href="javascript:void(0);" class="d-flex">
                                                    <img class="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt=""/>
                                                    <div class="flex-fill ms-2">
                                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Dylan Hunter</span> <small>2MIN</small></p>
                                                        <span class="">Added  2021-02-19 my-Task ui/ux Design <span class="badge bg-success">Review</span></span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="py-2 mb-1 border-bottom">
                                                <a href="javascript:void(0);" class="d-flex">
                                                    <div class="avatar rounded-circle no-thumbnail">DF</div>
                                                    <div class="flex-fill ms-2">
                                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                        <span class="">Task added Get Started with Fast Cad project</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="py-2 mb-1 border-bottom">
                                                <a href="javascript:void(0);" class="d-flex">
                                                    <img class="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                                                    <div class="flex-fill ms-2">
                                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                        <span class="">Quality Assurance Task Completed</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="py-2 mb-1 border-bottom">
                                                <a href="javascript:void(0);" class="d-flex">
                                                    <img class="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" alt=""/>
                                                    <div class="flex-fill ms-2">
                                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Diane Fisher</span> <small>13MIN</small></p>
                                                        <span class="">Add New Project for App Developemnt</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="py-2 mb-1 border-bottom">
                                                <a href="javascript:void(0);" class="d-flex">
                                                    <img class="avatar rounded-circle" src="assets/images/xs/avatar6.jpg" alt=""/>
                                                    <div class="flex-fill ms-2">
                                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Andrea Gill</span> <small>1HR</small></p>
                                                        <span class="">Add Timesheet For Rhinestone project</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li class="py-2">
                                                <a href="javascript:void(0);" class="d-flex">
                                                    <img class="avatar rounded-circle" src="assets/images/xs/avatar7.jpg" alt=""/>
                                                    <div class="flex-fill ms-2">
                                                        <p class="d-flex justify-content-between mb-0 "><span class="font-weight-bold">Zoe Wright</span> <small class="">1DAY</small></p>
                                                        <span class="">Add Calander Event</span>
                                                    </div>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <a class="card-footer text-center border-top-0" href="#"> View all notifications</a>
                            </div>
                        </div>
                    </div>
                    <div class="dropdown user-profile ml-2 ml-sm-3 d-flex align-items-center">
                        <div class="u-info me-2">
                            <p class="mb-0 text-end line-height-sm "><span class="font-weight-bold">Dylan Hunter</span></p>
                            <small>Admin Profile</small>
                        </div>
                        <a class="nav-link dropdown-toggle pulse p-0" href="#" role="button" data-bs-toggle="dropdown" data-bs-display="static">
                            <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/profile_av.png" alt="profile"/>
                        </a>
                        <div class="dropdown-menu rounded-lg shadow border-0 dropdown-animation dropdown-menu-end p-0 m-0">
                            <div class="card border-0 w280">
                                <div class="card-body pb-0">
                                    <div class="d-flex py-1">
                                        <img class="avatar rounded-circle" src="assets/images/profile_av.png" alt="profile"/>
                                        <div class="flex-fill ms-3">
                                            <p class="mb-0"><span class="font-weight-bold">Dylan Hunter</span></p>
                                            <small class="">Dylan.hunter@gmail.com</small>
                                        </div>
                                    </div>
                                    
                                    <div><hr class="dropdown-divider border-dark"/></div>
                                </div>
                                <div class="list-group m-2 ">
                                    <a href="task.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-tasks fs-5 me-3"></i>My Task</a>
                                    <a href="members.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-ui-user-group fs-6 me-3"></i>members</a>
                                    <a href="ui-elements/auth-signin.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-logout fs-6 me-3"></i>Signout</a>
                                    <div><hr class="dropdown-divider border-dark"/></div>
                                    <a href="ui-elements/auth-signup.html" class="list-group-item list-group-item-action border-0 "><i class="icofont-contact-add fs-5 me-3"></i>Add personal account</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="px-md-1">
                        <a href="#offcanvas_setting" data-bs-toggle="offcanvas" aria-expanded="false" title="template setting">
                            <svg class="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"></path>
                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                            </svg>
                        </a>
                    </div>
                </div>


                <button class="navbar-toggler p-0 border-0 menu-toggle order-3" type="button" data-bs-toggle="collapse" data-bs-target="#mainHeader">
                    <span class="fa fa-bars"></span>
                </button>


                <div class="order-0 col-lg-4 col-md-4 col-sm-12 col-12 mb-3 mb-md-0 ">
                    <div class="input-group flex-nowrap input-group-lg">
                        <button type="button" class="input-group-text" id="addon-wrapping"><i class="fa fa-search"></i></button>
                        <input type="search" class="form-control" placeholder="Search" aria-label="search" aria-describedby="addon-wrapping"/>
                        <button type="button" class="input-group-text add-member-top" id="addon-wrappingone" data-bs-toggle="modal" data-bs-target="#addUser"><i class="fa fa-plus"></i></button>
                    </div>
                </div>

            </div>
        </nav>
    </div>
    
    );
}

export default Navheader;