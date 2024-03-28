import Layout from "../../layouts";
import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function EmpCreate() {

    const [formEmployee, setFormEmployee] = useState({
        name: "",
        address: "",
        contactNumber: "",
        educationalQualification: "",
        role: "",
        grade: "",
        client: "",
        achievements: "",
        department: [],
    });

    // const [userRole, setUserRole] = useState(null);
    // const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});
    const [nameExistsError, setNameExistsError] = useState("");
    const [selectedDepartment, setSelectedDepartment] = useState("");
    const [setDepartment, setSelectDepartment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDepartment = async () => {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.get(url.DEPARTMENT.LIST);
                const genreData = response.data.map((department) => ({
                    value: department.departmentID,
                    label: department.departmentName,
                }));
                setSelectDepartment(genreData);
            } catch (error) { }
        };
        fetchDepartment();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = true;

        if (isFormValid) {
            // const userToken = localStorage.getItem("access_token");
            // api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.post(url.EMPLOYEE.CREATE, formEmployee, {
                    headers: { "Content-Type": "application/json" },
                });
                if (response && response.data) {
                    toast.success("Create Employee Successffuly.", {
                        // position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                    setTimeout(() => {
                        navigate(`/employee-list`); //chuyển đến trang employee-list
                    }, 3000);
                } else {
                }
            } catch (error) {
                if (error.response.status === 400 && error.response.data.message === "Employee already exists") {
                    setNameExistsError("The Employee name already exists");
                    toast.error("The Employee name already exists", {
                        // position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
                    });
                } else {
                    toast.error("Unable to create Employee, please try again", {
                        // position: toast.POSITION.TOP_RIGHT,
                        autoClose: 3000,
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
        if (formEmployee.name === "") {
            newErrors.name = "Please enter employee name ";
            valid = false;
        }
        else if (formEmployee.name.length < 3) {
            newErrors.name = "Enter at least 3 characters";
            valid = false;
        }
        else if (formEmployee.name.length > 255) {
            newErrors.name = "Enter up to 255 characters";
            valid = false;
        }
        if (formEmployee.address === "") {
            newErrors.address = "Please enter address";
            valid = false;
        }
        // if (formEmployee.employee_image === null) {
        //     newErrors.employee_image = "Please choose movie photo";
        //     valid = false;
        // }
        if (formEmployee.contactNumber === "") {
            newErrors.contact_number = "Please enter digit numbers";
            valid = false;
        }
        else if (formEmployee.contactNumber.length < 10) {
            newErrors.contact_number = "Enter at least 10 digit numbers";
            valid = false;
        }
        else if (formEmployee.contactNumber.length > 10) {
            newErrors.contact_number = "Enter at least 10 digit numbers";
            valid = false;
        }
        if (formEmployee.educationalQualification === "") {
            newErrors.educationalQualification = "Please enter Educational Qualification";
            valid = false;
        }
        if (formEmployee.role === "") {
            newErrors.role = "Please choose role";
            valid = false;
        }
        if (formEmployee.department === "") {
            newErrors.department = "Please choose department";
            valid = false;
        }
        if (formEmployee.grade === "") {
            newErrors.grade = "Please choose grade";
            valid = false;
        }
        if (formEmployee.client === "") {
            newErrors.client = "Please choose client";
            valid = false;
        }
        if (formEmployee.achievements === "") {
            newErrors.achievements = "Please enter achievements";
            valid = false;
        }
        setErrors(newErrors);
        return valid;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormEmployee({...formEmployee, [name]: value });

        setNameExistsError("");
        // setSelectedDepartment(e.target.value);
    };

    const handleDepartmentChange = (event) => {
        setSelectedDepartment(event.target.value);
    };



    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div class="">
                    <h5 class="modal-name  fw-bold" id="createprojectlLabel"> Add Employee</h5>
                </div>
                <div class="modal-body">
                <div class="mb-3">
                        <label htmlFor="id" class="form-label">Employee id</label>
                        <input type="text" class="form-control" id="id" onChange={handleChange} placeholder="Enter Employee name" />
                        {errors.id && <div className="text-danger">{errors.id}</div>}
                        {nameExistsError && <div className="text-danger">{nameExistsError}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="name" class="form-label">Employee Name</label>
                        <input type="text" class="form-control" id="name" onChange={handleChange} placeholder="Enter Employee name" />
                        {errors.name && <div className="text-danger">{errors.name}</div>}
                        {nameExistsError && <div className="text-danger">{nameExistsError}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="contactNumber" class="form-label">Phone number</label>
                        <input type="text" class="form-control" id="contactNumber" onChange={handleChange} placeholder="+840367640262" />
                        {errors.contactNumber && <div className="text-danger">{errors.contactNumber}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" onChange={handleChange} placeholder="123 Blue Street, SomeCity" />
                        {errors.address && <div className="text-danger">{errors.address}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="department" className="form-label">Department</label>
                        <select
                            className="form-control"
                            id="department"
                            value={selectedDepartment}
                            onChange={handleDepartmentChange}
                        >
                            <option value="">Select Department</option>
                            {setDepartment.map(department => (
                                <option key={department.value} value={department.value}>{department.label}</option>
                            ))}
                        </select>
                        {errors.department && <div className="text-danger">{errors.department}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="educational_qualification" class="form-label">Educational qualification</label>
                        <input class="form-control" type="text" id="educational_qualification" onChange={handleChange} placeholder="Bachelor" />
                        {errors.educationalQualification && <div className="text-danger">{errors.educationalQualification}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="role" class="form-label">Employee role</label>
                        <input class="form-control" type="text" id="role" onChange={handleChange} placeholder="Security Analyst" />
                        {errors.role && <div className="text-danger">{errors.role}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="grade" class="form-label">Employee grade</label>
                        <input class="form-control" type="text" id="grade" onChange={handleChange} placeholder="Improved security protocolst" />
                        {errors.grade && <div className="text-danger">{errors.grade}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="client" class="form-label">Client</label>
                        <input class="form-control" type="text" id="client" onChange={handleChange} placeholder="Improved security protocolst" />
                        {errors.client && <div className="text-danger">{errors.client}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="achievements" class="form-label">Employee achievements</label>
                        <input class="form-control" type="text" id="achievements" onChange={handleChange} placeholder="Improved security protocolst" />
                        {errors.achievements && <div className="text-danger">{errors.achievements}</div>}
                    </div>
                </div>
                <div>
                    <button type="submit" class="btn btn-primary" >Create</button>
                </div>
            </form>
        </Layout>
    );
}

export default EmpCreate;