import Layout from "../../layouts";

function ServiceEdit() {
    return ( 
        <Layout>
            <div class="" id="editproject" tabindex="-1"  aria-hidden="true">
            <div class="">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="editprojectLabel"> Edit Project</h5>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput78" class="form-label">Project Name</label>
                        <input type="text" class="form-control" id="exampleFormControlInput78" value="Social Geek Made"/>
                    </div>
                    <div class="mb-3">
                        <label  class="form-label">Project Category</label>
                        <select class="form-select" aria-label="Default select example">
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
                    <div class="mb-3">
                        <label for="formFileMultiple456" class="form-label">Project Images & Document</label>
                        <input class="form-control" type="file" id="formFileMultiple456"/>
                    </div>
                    <div class="deadline-form">
                        <form>
                            <div class="row g-3 mb-3">
                              <div class="col">
                                <label for="datepickerded123" class="form-label">Project Start Date</label>
                                <input type="date" class="form-control" id="datepickerded123" value="2021-01-10"/>
                              </div>
                              <div class="col">
                                <label for="datepickerded456" class="form-label">Project End Date</label>
                                <input type="date" class="form-control" id="datepickerded456" value="2021-04-10"/>
                              </div>
                            </div>
                            <div class="row g-3 mb-3">
                                <div class="col-sm-12">
                                    <label class="form-label">Notifation Sent</label>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>All</option>
                                        <option value="1">Team Leader Only</option>
                                        <option value="2">Team Member Only</option>
                                    </select>
                                </div>
                                <div class="col-sm-12">
                                    <label for="formFileMultipleone" class="form-label">Task Assign Person</label>
                                    <select class="form-select" multiple aria-label="Default select Priority">
                                        <option selected>Lucinda Massey</option>
                                        <option selected value="1">Ryan Nolan</option>
                                        <option selected value="2">Oliver Black</option>
                                        <option selected value="3">Adam Walker</option>
                                        <option selected value="4">Brian Skinner</option>
                                        <option value="5">Dan Short</option>
                                        <option value="5">Jack Glover</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="row g-3 mb-3">
                        <div class="col-sm">
                            <label for="formFileMultipleone" class="form-label">Priority</label>
                            <select class="form-select" aria-label="Default select Priority">
                                <option selected>Medium</option>
                                <option value="1">Highest</option>
                                <option value="2">Low</option>
                                <option value="3">Lowest</option>
                            </select>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea786" class="form-label">Description (optional)</label>
                        <textarea class="form-control" id="exampleFormControlTextarea786" rows="3">Social Geek Made,lorem urna commodo sem. Pellentesque venenatis leo quam, sed mattis sapien lobortis ut. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
                        </textarea>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary">Edit</button>
                </div>
            </div>
            </div>
        </div>
        </Layout>
     );
}

export default ServiceEdit;