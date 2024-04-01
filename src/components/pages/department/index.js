import { Link } from "react-router-dom";
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
                                <Link to="/department-create" type="button" className="btn btn-dark btn-set-task w-sm-100" data-bs-toggle="modal" data-bs-target="#depadd"><i className="icofont-plus-circle me-2 fs-6"></i>Add Departments</Link>
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
                                                     <Link to="/department-edit/:id" type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#depedit"><i className="icofont-edit text-success"></i></Link>
                                                     <Link to="/department-delete-at"  type="button" className="btn btn-outline-secondary deleterow"><i className="icofont-ui-delete text-danger"></i></Link>
                                                     
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
    </div>  
    </Layout>

    );
}

export default DepartmentList;