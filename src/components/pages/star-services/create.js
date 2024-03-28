import Layout from "../../layouts";

function ServiceCreate() {
    return ( 
        <Layout>
            <div className="" id="createproject" tabindex="-1"  aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title  fw-bold" id="createprojectlLabel"> Create Service</h5>
                </div>
                <div className="modal-body">
                    <div className="mb-3">
                        <label for="exampleFormControlInput77" className="form-label">Project Name</label>
                        <input type="text" className="form-control" id="exampleFormControlInput77" placeholder="Explain what the Project Name"/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Project Category</label>
                        <select className="form-select" aria-label="Default select Project Category">
                            <option selected>UI/UX Design</option>
                            <option value="1">Website Design</option>
                            <option value="2">App Development</option>
                            <option value="3">Quality Assurance</option>
                            <option value="4">Development</option>
                            <option value="5">Backend Development</option>
                            <option value="6">Software Testing</option>
                            <option value="7">Website Design</option>
                            <option value="8">Marketing</option>
                            <option value="9">SEO</option>
                            <option value="10">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="formFileMultipleone" className="form-label">Project Images & Document</label>
                        <input className="form-control" type="file" id="formFileMultipleone"  multiple/>
                    </div>
                    <div className="deadline-form">
                        <form>
                            <div className="row g-3 mb-3">
                              <div className="col">
                                <label for="datepickerded" className="form-label">Project Start Date</label>
                                <input type="date" className="form-control" id="datepickerded"/>
                              </div>
                              <div className="col">
                                <label for="datepickerdedone" className="form-label">Project End Date</label>
                                <input type="date" className="form-control" id="datepickerdedone"/>
                              </div>
                            </div>
                            <div className="row g-3 mb-3">
                                <div className="col-sm-12">
                                    <label className="form-label">Notifation Sent</label>
                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>All</option>
                                        <option value="1">Team Leader Only</option>
                                        <option value="2">Team Member Only</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label for="formFileMultipleone" className="form-label">Task Assign Person</label>
                                    <select className="form-select" multiple aria-label="Default select Priority">
                                        <option selected>Lucinda Massey</option>
                                        <option value="1">Ryan Nolan</option>
                                        <option value="2">Oliver Black</option>
                                        <option value="3">Adam Walker</option>
                                        <option value="4">Brian Skinner</option>
                                        <option value="5">Dan Short</option>
                                        <option value="5">Jack Glover</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="row g-3 mb-3">
                        <div className="col-sm">
                            <label for="formFileMultipleone" className="form-label">Budget</label>
                            <input type="number" className="form-control"/>
                        </div>
                        <div className="col-sm">
                            <label for="formFileMultipleone" className="form-label">Priority</label>
                            <select className="form-select" aria-label="Default select Priority">
                                <option selected>Highest</option>
                                <option value="1">Medium</option>
                                <option value="2">Low</option>
                                <option value="3">Lowest</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3">
                        <label for="exampleFormControlTextarea78" className="form-label">Description (optional)</label>
                        <textarea className="form-control" id="exampleFormControlTextarea78" rows="3" placeholder="Add any extra details about the request"></textarea>
                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Done</button>
                    <button type="button" className="btn btn-primary">Create</button>
                </div>
            </div>
            </div>
        </div>
        </Layout>
     );
}

export default ServiceCreate;