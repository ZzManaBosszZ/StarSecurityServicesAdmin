import { useState, useEffect } from "react";
import Layout from "../../layouts";
import api from "../../services/api";
import url from "../../services/url";
import { Link, useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function DepartmentEdit() {
    const { id } = useParams();
    
    const [departmentData, setDepartmentData] = useState({});
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (departmentData.departmentName === "") {
            newErrors.productName = "Please enter name gallery";
            valid = false;
        } else if (departmentData.departmentName.length < 2) {
            newErrors.departmentName = "Enter at least 2 characters";
            valid = false;
        } else if (departmentData.departmentName.length > 255) {
            newErrors.departmentName = "Enter up to 255 characters";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    useEffect(() => {
        const userToken = localStorage.getItem("access_token");
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        api.get(`${url.DEPARTMENT.DETAIL.replace("{}", id)}`)
            .then((response) => {
                setDepartmentData(response.data);
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
                const response = await api.put(`${url.DEPARTMENT.UPDATE.replace("{}", id)}`, departmentData);
                if (response.status === 204) {
                    console.log(response.data);
                    Swal.fire({
                        title: "Edit Success",
                        showConfirmButton: true,
                        confirmButtonColor: "#3085d6",
                    });
                    setTimeout(() => {
                        navigate(`/department-list`); //chuyển đến trang department-list
                    }, 3000);
                } else {
                }
            } catch (error) {
                Swal.fire({
                    title: "Unable to update Department",
                    showConfirmButton: true,
                    confirmButtonColor: "#3085d6",
                });
            }
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setDepartmentData({ ...departmentData, [name]: value });
    };

    return (
        <Layout>

            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title  fw-bold" id="depeditLabel"> Department Edit</h5>
                </div>
                <form onSubmit={handleSubmit}>

                    <div class="modal-body">

                        <div class="mb-3">
                            <label for="departmentID" class="form-label">Department ID</label>
                            <input
                                type="text"
                                class="form-control"
                                id="departmentID"
                                value={departmentData.departmentID}
                                onChange={handleChange} />
                        </div>

                        <div class="mb-3">
                            <label for="departmentName" class="form-label">Department Name</label>
                            <input
                                type="text"
                                class="form-control"
                                id="departmentName"
                                name="departmentName"
                                value={departmentData.departmentName}
                                onChange={handleChange} />
                            {errors.departmentName && <div className="text-danger">{errors.departmentName}</div>}
                        </div>
                        <div class="row g-3 mb-3">
                            <div class="col-sm-6">
                                <label for="employeeInDepartment" class="form-label">Employee UnderWork</label>
                                <input type="text"
                                    class="form-control"
                                    name="employeeInDepartment"
                                    id="employeeInDepartment"
                                    value={departmentData.employeeInDepartment}
                                    onChange={handleChange} />
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <Link to="/department-list" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</Link>
                        <button type="submit" class="btn btn-primary">Save</button>
                    </div>
                </form>

            </div>


        </Layout>
    );
}

export default DepartmentEdit;