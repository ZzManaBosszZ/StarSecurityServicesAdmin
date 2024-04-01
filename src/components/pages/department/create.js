import { Link } from "react-router-dom";
import Layout from "../../layouts";

function DepartmentCreate() {
    return (
        <Layout>
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depaddLabel"> Department Add</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="deadline-form">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1111" class="form-label">Department Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1111" />
                            </div>
                            <div class="row g-3 mb-3">
                                <div class="col-sm-6">
                                    <label for="depone" class="form-label">Department Head</label>
                                    <input type="text" class="form-control" id="depone" />
                                </div>
                                <div class="col-sm-6">
                                    <label for="deptwo" class="form-label">Employee UnderWork</label>
                                    <input type="text" class="form-control" id="deptwo" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <Link to="/department-list" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</Link>
                                <button type="submit" class="btn btn-primary">Add</button>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </Layout>
    );
}

export default DepartmentCreate;