import Layout from "../../layouts/index";
function Dashboard () {
    return(
        <Layout>
            <div class="body d-flex py-3">
            <div class="container-xxl">
                <div class="row clearfix g-3">
                    <div class="col-xl-8 col-lg-12 col-md-12 flex-column">
                        <div class="row g-3">
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 class="mb-0 fw-bold ">Employees Info</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="ac-line-transparent" id="apex-emplyoeeAnalytics"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 class="mb-0 fw-bold ">Employees Availability</h6>
                                    </div>
                                    <div class="card-body">
                                        <div class="row g-2 row-deck">
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card">
                                                    <div class="card-body ">
                                                        <i class="icofont-checked fs-3"></i>
                                                        <h6 class="mt-3 mb-0 fw-bold small-14">Attendance</h6>
                                                        <span class="text-muted">400</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card">
                                                    <div class="card-body ">
                                                            <i class="icofont-stopwatch fs-3"></i>
                                                        <h6 class="mt-3 mb-0 fw-bold small-14">Late Coming</h6>
                                                        <span class="text-muted">17</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card">
                                                    <div class="card-body ">
                                                            <i class="icofont-ban fs-3"></i>
                                                        <h6 class="mt-3 mb-0 fw-bold small-14">Absent</h6>
                                                        <span class="text-muted">06</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-6 col-sm-6">
                                                <div class="card">
                                                    <div class="card-body ">
                                                        <i class="icofont-beach-bed fs-3"></i>
                                                        <h6 class="mt-3 mb-0 fw-bold small-14">Leave Apply</h6>
                                                        <span class="text-muted">14</span> 
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="card">
                                    <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 class="mb-0 fw-bold ">Total Employees</h6>
                                        <h4 class="mb-0 fw-bold ">423</h4>
                                    </div>
                                    <div class="card-body">
                                        <div class="mt-3" id="apex-MainCategories"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="card">
                                    <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                        <h6 class="mb-0 fw-bold ">Top Hiring Sources</h6>
                                    </div>
                                    <div class="card-body">
                                        <div id="hiringsources"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-lg-12 col-md-12">
                        <div class="row g-3 row-deck">
                            <div class="col-md-6 col-lg-6 col-xl-12">
                                <div class="card bg-primary">
                                    <div class="card-body row">
                                        <div class="col">
                                            <span class="avatar lg bg-white rounded-circle text-center d-flex align-items-center justify-content-center"><i class="icofont-file-text fs-5"></i></span>
                                            <h1 class="mt-3 mb-0 fw-bold text-white">1546</h1>
                                            <span class="text-white">Applications</span>
                                        </div>
                                        <div class="col">
                                            <img class="img-fluid" src="assets/images/interview.svg" alt="interview"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-lg-6 col-xl-12  flex-column">
                                <div class="card mb-3">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center flex-fill">
                                            <span class="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i class="icofont-users-alt-2 fs-5"></i></span>
                                            <div class="d-flex flex-column ps-3  flex-fill">
                                                <h6 class="fw-bold mb-0 fs-4">246</h6>
                                                <span class="text-muted">Interviews</span>
                                            </div>
                                            <i class="icofont-chart-bar-graph fs-3 text-muted"></i>
                                        </div>
                                    </div>
                                </div>
                                <div class="card">
                                    <div class="card-body">
                                        <div class="d-flex align-items-center flex-fill">
                                            <span class="avatar lg light-success-bg rounded-circle text-center d-flex align-items-center justify-content-center"><i class="icofont-holding-hands fs-5"></i></span>
                                            <div class="d-flex flex-column ps-3 flex-fill">
                                                <h6 class="fw-bold mb-0 fs-4">101</h6>
                                                <span class="text-muted">Hired</span>
                                            </div>
                                            <i class="icofont-chart-line fs-3 text-muted"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-lg-12 col-xl-12">
                                <div class="card">
                                <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                    <h6 class="mb-0 fw-bold ">Upcomming Interviews</h6>
                                </div>
                                <div class="card-body">
                                    <div class="flex-grow-1">
                                        <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar2.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Natalie Gibson</h6>
                                                    <span class="text-muted">Ui/UX Designer</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 1.30 - 1:30
                                            </div>
                                        </div>
                                        <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar9.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Peter	Piperg</h6>
                                                    <span class="text-muted">Web Design</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 9.00 - 1:30
                                            </div>
                                        </div>
                                        <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar12.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Robert Young</h6>
                                                    <span class="text-muted">PHP Developer</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 1.30 - 2:30
                                            </div>
                                        </div>
                                        <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar8.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Victoria Vbell</h6>
                                                    <span class="text-muted">IOS Developer</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 2.00 - 3:30
                                            </div>
                                        </div>
                                        <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar7.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Mary Butler</h6>
                                                    <span class="text-muted">Writer</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 4.00 - 4:30
                                            </div>
                                        </div>
                                        <div class="py-2 d-flex align-items-center border-bottom flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar3.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Youn Bel</h6>
                                                    <span class="text-muted">Unity 3d</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 7.00 - 8.00
                                            </div>
                                        </div>
                                        <div class="py-2 d-flex align-items-center  flex-wrap">
                                            <div class="d-flex align-items-center flex-fill">
                                                <img class="avatar lg rounded-circle img-thumbnail" src="assets/images/lg/avatar2.jpg" alt="profile"/>
                                                <div class="d-flex flex-column ps-3">
                                                    <h6 class="fw-bold mb-0 small-14">Gibson Butler</h6>
                                                    <span class="text-muted">Networking</span>
                                                </div>
                                            </div>
                                            <div class="time-block text-truncate">
                                                <i class="icofont-clock-time"></i> 8.00 - 9.00
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="card light-danger-bg">
                            <div class="card-header py-3 d-flex justify-content-between bg-transparent border-bottom-0">
                                <h6 class="mb-0 fw-bold ">Top Perfrormers</h6>
                            </div>
                            <div class="card-body">
                                <div class="row g-3 align-items-center">
                                    <div class="col-md-12 col-lg-4 col-xl-4 col-xxl-2">
                                        <p>You have 140 <span class="fw-bold">influencers </span> in your company.</p>
                                        <div class="d-flex  justify-content-between text-center">
                                            <div class="">
                                                <h3 class="fw-bold">350</h3>
                                                <span class="small">New Task</span>
                                            </div>
                                            <div class="">
                                                <h3 class="fw-bold">130</h3>
                                                <span class="small">Task Completed</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-lg-12 col-xl-12 col-xxl-10">
                                        <div class="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-3 row-cols-lg-3 row-cols-xl-3 row-cols-xxl-6 row-deck top-perfomer">
                                            <div class="col">
                                                <div class="card shadow">
                                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                                        <img class="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar2.jpg" alt="profile"/>
                                                        <h6 class="fw-bold my-2 small-14">Luke Short</h6>
                                                        <span class="text-muted mb-2">@Short</span>
                                                        <h4 class="fw-bold text-primary fs-3">80%</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card shadow">
                                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                                        <img class="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar5.jpg" alt="profile"/>
                                                        <h6 class="fw-bold my-2 small-14">John Hard</h6>
                                                        <span class="text-muted mb-2">@rdacre</span>
                                                        <h4 class="fw-bold text-primary fs-3">70%</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card shadow">
                                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                                        <img class="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar8.jpg" alt="profile"/>
                                                        <h6 class="fw-bold my-2 small-14">Paul Rees</h6>
                                                        <span class="text-muted mb-2">@Rees</span>
                                                        <h4 class="fw-bold text-primary fs-3">77%</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card shadow">
                                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                                        <img class="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar9.jpg" alt="profile"/>
                                                        <h6 class="fw-bold my-2 small-14">Rachel Parr</h6>
                                                        <span class="text-muted mb-2">@Parr</span>
                                                        <h4 class="fw-bold text-primary fs-3">85%</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card shadow">
                                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                                        <img class="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar12.jpg" alt="profile"/>
                                                        <h6 class="fw-bold my-2 small-14">Eric Reid</h6>
                                                        <span class="text-muted mb-2">@Eric</span>
                                                        <h4 class="fw-bold text-primary fs-3">95%</h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card shadow">
                                                    <div class="card-body text-center d-flex flex-column justify-content-center">
                                                        <img class="avatar lg rounded-circle img-thumbnail mx-auto" src="assets/images/lg/avatar3.jpg" alt="profile"/>
                                                        <h6 class="fw-bold my-2 small-14">Jan Ince</h6>
                                                        <span class="text-muted mb-2">@Ince</span>
                                                        <h4 class="fw-bold text-primary fs-3">97%</h4>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
export default Dashboard;