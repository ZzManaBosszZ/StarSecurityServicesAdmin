import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import Swal from "sweetalert2";
import Breadcrumb from "../../layouts/breadcrumb";
function DepartmentCreate() {

    const [formDepartment, setFormDepartment] = useState({
        departmentName: "",
        employeeInDepartment: "",
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
                const response = await api.post(url.DEPARTMENT.CREATE, formDepartment);
                if (response && response.data) {
                    Swal.fire({
                        title: " Success create Department",
                        showConfirmButton: true,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                    setTimeout(() => {
                        navigate(`/department-list`); //chuyển đến trang department-list
                    }, 1000);
                } else {
                }
            } catch (error) {
                if (error.response.status === 400 && error.response.data.message === "Department already exists") {
                    setNameExistsError("The Department name already exists");
                    Swal.fire({
                        title: "Unable to update Department",
                        showConfirmButton: true,
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                } else {
                    Swal.fire({
                        title: "Unable to create Department, please try again",
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

        if (formDepartment.departmentName === "") {
            newErrors.departmentName = "Please enter department name ";
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormDepartment({ ...formDepartment, [name]: value });

        setNameExistsError("");
    };

    return (
        
        <Layout>
            <Breadcrumb title="Create" />
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depaddLabel"> Department Add</h5>
                </div>
                <div class="modal-body">
                    <div class="deadline-form">
                        <form onSubmit={handleSubmit}>
                            <div class="mb-3">
                                <label for="departmentName" class="form-label">Department Name</label>
                                <input type="text"
                                    class="form-control"
                                    id="departmentName"
                                    name="departmentName"
                                    onChange={handleChange}
                                    placeholder="Enter Department name" />
                                    {errors.departmentName && <div className="text-danger">{errors.departmentName}</div>}
                                    {nameExistsError && <div className="text-danger">{nameExistsError}</div>}
                            </div>
                            <div class="row g-3 mb-3">
                                {/* <div class="col-sm-6">
                                    <label for="depone" class="form-label">Department Head</label>
                                    <input type="text" class="form-control" id="depone" />
                                </div> */}
                                <div class="col-sm-6">
                                    <label for="employeeInDepartment" class="form-label">Employee UnderWork</label>
                                    <input type="text"
                                        class="form-control"
                                        id="employeeInDepartment"
                                        name="employeeInDepartment"
                                        onChange={handleChange}
                                        placeholder="Enter total employee" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <Link to="/service-list" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</Link>
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