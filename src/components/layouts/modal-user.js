
function ModalUser () {
    return(
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
                            <input type="email" className="form-control" placeholder="Email address" id="exampleInputEmail1" aria-describedby="exampleInputEmail1"/>
                            <button className="btn btn-dark" type="button" id="button-addon2">Sent</button>
                        </div>
                    </div>
                    <div className="members_list">
                        <h6 className="fw-bold ">Employee </h6>
                        <ul className="list-unstyled list-group list-group-custom list-group-flush mb-0">
                            <li className="list-group-item py-3 text-center text-md-start">
                                <div className="d-flex align-items-center flex-column flex-sm-column flex-md-column flex-lg-row">
                                    <div className="no-thumbnail mb-2 mb-md-0">
                                        <img className="avatar lg rounded-circle" src="assets/images/xs/avatar2.jpg" alt=""/>
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
                                        <img className="avatar lg rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
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
                                        <img className="avatar lg rounded-circle" src="assets/images/xs/avatar8.jpg" alt=""/>
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
    );
}
export default ModalUser;