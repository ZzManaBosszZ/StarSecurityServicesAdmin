import Layout from "../../layouts";

function DepartmentList() {
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
                                <button type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#depadd"><i className="icofont-plus-circle me-2 fs-6"></i>Add Departments</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix g-3">
                  <div className="col-sm-12">
                        <div className="card mb-3">
                            <div className="card-body">
                                <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{width:"100%"}}>
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Department Head</th> 
                                            <th>Department Name</th> 
                                            <th>Employee UnderWork</th>   
                                            <th>Actions</th>  
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <span className="fw-bold">1</span>
                                            </td>
                                           <td>
                                               <img className="avatar rounded-circle" src="assets/images/xs/avatar1.jpg" alt=""/>
                                               <span className="fw-bold ms-1">Joan Dyer</span>
                                           </td>
                                           <td>
                                                Web Development
                                           </td>
                                           <td>
                                                40
                                           </td>
                                            <td>
                                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                    <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                                                    <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <span className="fw-bold">2</span>
                                            </td>
                                            <td>
                                                <img className="avatar rounded-circle" src="assets/images/xs/avatar2.jpg" alt=""/>
                                                <span className="fw-bold ms-1">Ryan	Randall</span>
                                            </td>
                                            <td>
                                                Accounts
                                            </td>
                                            <td>
                                                48
                                            </td>
                                             <td>
                                                 <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <span className="fw-bold">3</span>
                                            </td>
                                            <td>
                                                <img className="avatar rounded-circle" src="assets/images/xs/avatar3.jpg" alt=""/>
                                                <span className="fw-bold ms-1">Phil	Glover</span>
                                            </td>
                                            <td>
                                                Support
                                            </td>
                                            <td>
                                                 15
                                            </td>
                                             <td>
                                                 <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <span className="fw-bold">4</span>
                                            </td>
                                            <td>
                                                <img className="avatar rounded-circle" src="assets/images/xs/avatar4.jpg" alt=""/>
                                                <span className="fw-bold ms-1">Victor Rampling</span>
                                            </td>
                                            <td>
                                                App Development
                                            </td>
                                            <td>
                                                39
                                            </td>
                                             <td>
                                                 <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <span className="fw-bold">5</span>
                                            </td>
                                            <td>
                                                <img className="avatar rounded-circle" src="assets/images/xs/avatar5.jpg" alt=""/>
                                                <span className="fw-bold ms-1">Sally Graham</span>
                                            </td>
                                            <td>
                                                Recruiter 
                                            </td>
                                            <td>
                                                12
                                            </td>
                                             <td>
                                                 <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                         <tr>
                                            <td>
                                                <span className="fw-bold">6</span>
                                            </td>
                                            <td>
                                                <img className="avatar rounded-circle" src="assets/images/xs/avatar6.jpg" alt=""/>
                                                <span className="fw-bold ms-1">Robert Anderson</span>
                                            </td>
                                            <td>
                                               Admin 
                                            </td>
                                            <td>
                                                 8
                                            </td>
                                             <td>
                                                 <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                     <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></button>
                                                     <button type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></button>
                                                 </div>
                                             </td>
                                         </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                  </div>
                </div>
            </div>
        </div>

        <div className="modal fade" id="depadd" tabindex="-1"  aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title  fw-bold" id="depaddLabel"> Department Add</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label for="exampleFormControlInput1111" className="form-label">Department Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput1111"/>
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                              <div className="col-sm-6">
                                <label for="depone" className="form-label">Department Head</label>
                                <input type="text" className="form-control" id="depone"/>
                              </div>
                              <div className="col-sm-6">
                                <label for="deptwo" className="form-label">Employee UnderWork</label>
                                <input type="text" className="form-control" id="deptwo"/>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </div>
            </div>
        </div>

        {/* <!-- Edit Department--> */}
        <div className="modal fade" id="depedit" tabindex="-1"  aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title  fw-bold" id="depeditLabel"> Department Edit</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label for="exampleFormControlInput11111" className="form-label">Department Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput11111" value="Web Development"/> 
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                              <div className="col-sm-6">
                                <label className="form-label">Department Head</label>
                                <select className="form-select">
                                    <option selected>Joan Dyer</option>
                                    <option value="1">Ryan Randall</option>
                                    <option value="2">Phil Glover</option>
                                    <option value="3">Victor Rampling</option>
                                    <option value="4">Sally Graham</option>
                                </select>
                              </div>
                              <div className="col-sm-6">
                                <label for="deptwo48" className="form-label">Employee UnderWork</label>
                                <input type="text" className="form-control" id="deptwo48" value="40"/>
                              </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                    <button type="submit" className="btn btn-primary">Save</button>
                </div>
            </div>
            </div>
        </div> 
    </div>  
    </Layout>

    );
}

export default DepartmentList;