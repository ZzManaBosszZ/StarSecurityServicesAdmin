import Layout from "../../layouts";
import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import Select from "react-select";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
// import axios from "axios";
function EmpCreate() {

    const [formEmployee, setFormEmployee] = useState({
        id: "",
        employeeName: "",
        address: "",
        employeeContactNumber: "",
        educationalQualification: "",
        role: "",
        grade: "",
        client: "",
        achievements: "",
        imageURL: null,
        employee_image_preview: null,
        departmentIDs: [],
    });

    // const [userRole, setUserRole] = useState(null);
    // const [error, setError] = useState(null);
    const [errors, setErrors] = useState({});
    const [nameExistsError, setNameExistsError] = useState("");
    // const [selectedDepartment, setSelectedDepartment] = useState("");
    const [setDepartment, setSelectDepartment] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDepartment = async () => {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.get(url.DEPARTMENT.LIST);
                const departmentData = response.data.map((department) => ({
                    value: department.departmentID,
                    label: department.departmentName,
                }));
                setSelectDepartment(departmentData);
            } catch (error) { }
        };
        fetchDepartment();
    }, []);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const isFormValid = validateForm();

        if (isFormValid) {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.post(url.EMPLOYEE.CREATE, formEmployee);
                if (response && response.data) {
                    Swal.fire({
                        title: " Success create Employee",
                        showConfirmButton: true,
                        icon: "success",
                        confirmButtonColor: "#3085d6",
                    });
                    setTimeout(() => {
                        navigate(`/employee-list`); //chuyển đến trang employee-list
                    }, 1000);
                } else {
                }
            } catch (error) {
                if (error.response.status === 400 && error.response.data.message === "Employee already exists") {
                    setNameExistsError("The Employee name already exists");
                    Swal.fire({
                        title: " Unable to create Employee",
                        showConfirmButton: true,
                        icon: "error",
                        confirmButtonColor: "#3085d6",
                    });
                } else {
                    Swal.fire({
                        title: " Unable to create Employee",
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

    // const handleFileEmployeeChange = (e, fieldName) => {
    //     const { files } = e.target;
    //     const selectedImage = files.length > 0 ? URL.createObjectURL(files[0]) : null;

    //     setFormEmployee({
    //         ...formEmployee,
    //         [fieldName]: fieldName === "imageUrl" ? (files.length > 0 ? files[0] : null) : null,
    //         employee_image_preview: selectedImage,
    //     });
    // };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};
        if (formEmployee.id === "") {
            newErrors.id = "Please enter employee ID ";
            valid = false;
        }
        if (formEmployee.employeeName === "") {
            newErrors.employeeName = "Please enter employee name ";
            valid = false;
        }
        else if (formEmployee.employeeName.length < 3) {
            newErrors.employeeName = "Enter at least 3 characters";
            valid = false;
        }
        else if (formEmployee.employeeName.length > 255) {
            newErrors.employeeName = "Enter up to 255 characters";
            valid = false;
        }
        if (formEmployee.address === "") {
            newErrors.address = "Please enter address";
            valid = false;
        }
        if (formEmployee.imageURL === null) {
            newErrors.imageURL = "Please choose employee photo";
            valid = false;
        }
        if (formEmployee.employeeContactNumber === "") {
            newErrors.employeeContactNumber = "Please enter digit numbers";
            valid = false;
        }
        else if (formEmployee.employeeContactNumber.length < 10) {
            newErrors.employeeContactNumber = "Enter at least 10 digit numbers";
            valid = false;
        }
        else if (formEmployee.employeeContactNumber.length > 10) {
            newErrors.employeeContactNumber = "Enter at least 10 digit numbers";
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
        if (formEmployee.departmentIDs === "") {
            newErrors.departmentIDs = "Please choose department";
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
        // if (name === "imageUrl") {
        //     handleFileEmployeeChange(e, name);
        // }else{
        setFormEmployee({ ...formEmployee, [name]: value });
        // }
        setNameExistsError("");
    };

    return (
        <Layout>
            <form onSubmit={handleSubmit}>
                <div class="">
                    <h5 class="modal-name  fw-bold" id="createprojectlLabel"> Add Employee</h5>
                </div>
                <div class="modal-body">
                    <div class="mb-3">
                        <label htmlFor="id" class="form-label">Employee ID</label>
                        <input type="text"
                            class="form-control"
                            id="id"
                            name="id"
                            value={formEmployee.id}
                            onChange={handleChange}
                            placeholder="EMP 01 " />
                        {errors.id && <div className="text-danger">{errors.id}</div>}
                    </div>
                    {/* <div class="mb-3">
                        <label for="imageUrl" class="form-label">Employee Image Profile</label>
                        <input class="form-control"
                            type="file"
                            name="imageUrl"
                            id="imageUrl" 
                            // value={formEmployee.imageURL}
                            onChange={handleChange}
                            accept=".jpg, .png, .etc"
                        />
                        {errors.imageUrl && <div className="text-danger">{errors.imageUrl}</div>}
                    </div> */}
                    <div class="mb-3">
                        <label htmlFor="employeeName" class="form-label">Employee Name</label>
                        <input type="text"
                            class="form-control"
                            id="employeeName"
                            name="employeeName"
                            value={formEmployee.employeeName}
                            onChange={handleChange}
                            placeholder="Enter Employee name" />
                        {errors.employeeName && <div className="text-danger">{errors.employeeName}</div>}
                        {nameExistsError && <div className="text-danger">{nameExistsError}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="employeeContactNumber" class="form-label">Phone number</label>
                        <input type="text"
                            class="form-control"
                            id="employeeContactNumber"
                            name="employeeContactNumber"
                            value={formEmployee.employeeContactNumber}
                            onChange={handleChange}
                            placeholder="+840367640262" />
                        {errors.employeeContactNumber && <div className="text-danger">{errors.employeeContactNumber}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="address" class="form-label">Address</label>
                        <input type="text"
                            class="form-control"
                            id="address"
                            name="address"
                            value={formEmployee.address}
                            onChange={handleChange}
                            placeholder="123 Blue Street, SomeCity" />
                        {errors.address && <div className="text-danger">{errors.address}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="departmentIDs" className="form-label">Department</label>
                        <Select
                            name="departmentIDs"
                            value={setDepartment.filter((option) => formEmployee.departmentIDs.includes(option.value))}
                            isMulti
                            closeMenuOnSelect={false}
                            onChange={(selectedOption) => {
                                setFormEmployee({ ...formEmployee, departmentIDs: selectedOption.map((option) => option.value) });
                            }}
                            options={setDepartment}
                            placeholder="Select Departments"
                        />
                        {errors.departmentIDs && <div className="text-danger">{errors.departmentIDs}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="educational_qualification" class="form-label">Educational qualification</label>
                        <input class="form-control"
                            type="text"
                            id="educational_qualification"
                            name="educationalQualification"
                            value={formEmployee.educationalQualification}
                            onChange={handleChange} placeholder="Bachelor" />
                        {errors.educationalQualification && <div className="text-danger">{errors.educationalQualification}</div>}
                    </div>
                    <div class="mb-3">
                        <label htmlFor="role" class="form-label">Employee role</label>
                        <input
                            class="form-control"
                            type="text" id="role"
                            name="role"
                            value={formEmployee.role}
                            onChange={handleChange}
                            placeholder="Security Analyst" />
                        {errors.role && <div className="text-danger">{errors.role}</div>}
                    </div>
                    {/* <div class="mb-3">
                        <label htmlFor="grade" class="form-label">Employee grade</label>
                        <select
                            class="form-control"
                            id="grade"
                            name="grade"
                            value={formEmployee.grade}
                            onChange={handleChange}
                        >
                            <option value="">Select Grade</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="C">C</option>
                            <option value="D">D</option>
                        </select>
                        {errors.grade && <div className="text-danger">{errors.grade}</div>}
                    </div> */}
                    <div class="mb-3">
                        <label htmlFor="achievements" class="form-label">Employee achievements</label>
                        <input class="form-control"
                            name="achievements"
                            type="text" id="achievements"
                            value={formEmployee.achievements}
                            onChange={handleChange}
                            placeholder="Improved security protocolst" />
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