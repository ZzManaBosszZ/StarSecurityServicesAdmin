import { useState, useEffect } from "react";
import Layout from "../../layouts";
import api from "../../services/api";
import url from "../../services/url";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function ServiceEdit() {

    const { id } = useParams();

    const [serviceData, setServiceData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (serviceData.serviceName === "") {
            newErrors.serviceName = "Please enter service name";
            valid = false;
        } else if (serviceData.serviceName.length < 2) {
            newErrors.serviceName = "Enter at least 2 characters";
            valid = false;
        } else if (serviceData.serviceName.length > 255) {
            newErrors.serviceName = "Enter up to 255 characters";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    useEffect(() => {
        const userToken = localStorage.getItem("access_token");
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        api.get(`${url.SERVICE.DETAIL.replace("{}", id)}`)
            .then((response) => {
                setServiceData(response.data);
            })
            .catch((error) => {
                // console.error("Error fetching promotion details:", error);
            });
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.put(`${url.SERVICE.UPDATE.replace("{}", id)}`, serviceData);
                if (response.status === 204) {
                    console.log(response.data);
                    Swal.fire({
                        title: "Edit Success",
                        showConfirmButton: true,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                    setTimeout(() => {
                        navigate(`/service-list`); //chuyển đến trang service-list
                    }, 3000);
                } else {
                }
            } catch (error) {
                Swal.fire({
                    title: "Unable to update Service",
                    showConfirmButton: true,
                    confirmButtonColor: "#3085d6",
                });
            }
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setServiceData({ ...serviceData, [name]: value });
    };


    return (
        <Layout>
            <div className="" id="editproject" tabindex="-1" aria-hidden="true">
                <div className="">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title  fw-bold" id="editprojectLabel"> Edit Service</h5>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <label for="serviceName" className="form-label">Service Name</label>
                                    <input type="text"
                                        className="form-control"
                                        id="serviceName"
                                        name="serviceName"
                                        value={serviceData.serviceName}
                                        onChange={handleChange} />
                                        {errors.serviceName && <div className="text-danger">{errors.serviceName}</div>}
                                </div>
                                {/* <div className="mb-3">
                                <label className="form-label">Project Category</label>
                                <select className="form-select" aria-label="Default select example">
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
                            </div> */}
                                {/* <div className="mb-3">
                                    <label for="formFileMultiple456" className="form-label">Project Images & Document</label>
                                    <input className="form-control" type="file" id="formFileMultiple456" />
                                </div> */}
                                <div className="deadline-form">

                                    {/* <div className="row g-3 mb-3">
                                        <div className="col">
                                            <label for="datepickerded123" className="form-label">Project Start Date</label>
                                            <input type="date" className="form-control" id="datepickerded123" value="2021-01-10" />
                                        </div>
                                        <div className="col">
                                            <label for="datepickerded456" className="form-label">Project End Date</label>
                                            <input type="date" className="form-control" id="datepickerded456" value="2021-04-10" />
                                        </div>
                                    </div> */}
                                    <div className="row g-3 mb-3">
                                        {/* <div className="col-sm-12">
                                            <label className="form-label">Notifation Sent</label>
                                            <select className="form-select" aria-label="Default select example">
                                                <option selected>All</option>
                                                <option value="1">Team Leader Only</option>
                                                <option value="2">Team Member Only</option>
                                            </select>
                                        </div> */}
                                        {/* <div className="col-sm-12">
                                            <label for="formFileMultipleone" className="form-label">Task Assign Person</label>
                                            <select className="form-select" multiple aria-label="Default select Priority">
                                                <option selected>Lucinda Massey</option>
                                                <option selected value="1">Ryan Nolan</option>
                                                <option selected value="2">Oliver Black</option>
                                                <option selected value="3">Adam Walker</option>
                                                <option selected value="4">Brian Skinner</option>
                                                <option value="5">Dan Short</option>
                                                <option value="5">Jack Glover</option>
                                            </select>
                                        </div> */}
                                    </div>
                                </div>
                                {/* <div className="row g-3 mb-3">
                                <div className="col-sm">
                                    <label for="formFileMultipleone" className="form-label">Priority</label>
                                    <select className="form-select" aria-label="Default select Priority">
                                        <option selected>Medium</option>
                                        <option value="1">Highest</option>
                                        <option value="2">Low</option>
                                        <option value="3">Lowest</option>
                                    </select>
                                </div>
                            </div> */}
                                <div className="mb-3">
                                    <label for="serviceDescription" className="form-label">Description (optional)</label>
                                    <textarea className="form-control"
                                        id="serviceDescription"
                                        rows="3"
                                        name="serviceDescription"
                                        value={serviceData.serviceDescription}
                                        onChange={handleChange}>                            
                                    </textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <Link to="/service-list" type="button" className="btn btn-secondary">Cancel</Link>
                                <button type="submit" className="btn btn-primary">Edit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default ServiceEdit;