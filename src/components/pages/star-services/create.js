import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import Swal from "sweetalert2";

function ServiceCreate() {

    const [formService, setFormService] = useState({
        serviceName: "",
        serviceDescription: "",
    });

    // const [userRole, setUserRole] = useState(null);
    // const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});
    const [nameExistsError, setNameExistsError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.post(url.SERVICE.CREATE, formService);
                if (response && response.data) {
                    Swal.fire({
                        title: " Success create Service",
                        showConfirmButton: true,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                    setTimeout(() => {
                        navigate(`/service-list`); //chuyển đến trang department-list
                    }, 3000);
                } else {
                }
            } catch (error) {
                if (error.response.status === 400 && error.response.data.message === "Service already exists") {
                    setNameExistsError("The Service name already exists");
                    Swal.fire({
                        title: "Unable to create Service",
                        showConfirmButton: true,
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                } else {
                    Swal.fire({
                        title: "Unable to create Service, please try again",
                        showConfirmButton: true,
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });

                }
                // console.error("Error creating test:", error);
                // console.error("Response data:", error.response.data);
            }
        }
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (formService.serviceName === "") {
            newErrors.serviceName = "Please enter service name ";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormService({ ...formService, [name]: value });

        setNameExistsError("");
    };

    return (
        <Layout>
            <div className="" id="createproject" tabindex="-1" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-md modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  fw-bold" id="createprojectlLabel"> Create Service</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label for="serviceName" className="form-label">Project Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="serviceName"
                                        name="serviceName"
                                        onChange={handleChange}
                                        placeholder="Enter the Service Name" />
                                    {errors.departmentName && <div className="text-danger">{errors.departmentName}</div>}
                                    {nameExistsError && <div className="text-danger">{nameExistsError}</div>}
                                </div>
                                {/* <div className="mb-3">
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
                    </div> */}
                                {/* <div className="deadline-form">
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

                    </div> */}
                                {/* <div className="row g-3 mb-3">
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
                    </div> */}
                                <div className="mb-3">
                                    <label for="serviceDescription" className="form-label">Description (optional)</label>
                                    <textarea className="form-control"
                                        rows="3"
                                        id="serviceDescription"
                                        name="serviceDescription"
                                        onChange={handleChange}
                                        placeholder="Add any extra details about the request"></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Link to="/service-list" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</Link>
                                <button type="submit" className="btn btn-primary">Create</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ServiceCreate;