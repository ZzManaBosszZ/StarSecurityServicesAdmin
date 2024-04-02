import Layout from "../../layouts";
import Breadcrumb from "../../layouts/breadcrumb";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import url from "../../services/url";
import api from "../../services/api";
import { getAccessToken, removeAccessToken } from "../utils/auth";
import Swal from "sweetalert2";
import { format } from "date-fns";

function ChangePasswordAdmin() {

    const [loading, setLoading] = useState(false);
    const [info, setInfo] = useState("");
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [formErrors, setFormErrors] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });
    const [isEditing, setIsEditing] = useState(false);
    const [editedInfo, setEditedInfo] = useState({});

    const [avatarFile, setAvatarFile] = useState(null);
    const [avatarPreview, setAvatarPreview] = useState(null);

    useEffect(() => {
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    }, []);

    const loadProfile = async () => {
        const userToken = getAccessToken();

        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${userToken}`,
                },
            };

            const profileResponse = await api.get(url.AUTH.PROFILE, config);
            setInfo(profileResponse.data);
        } catch (error) { }
    };

    useEffect(() => {
        loadProfile();
    }, []);

    const allowedExtensions = ["png", "jpg", "jpeg", "heic"];

    const handleAvatarChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            const fileExtension = file.name.split(".").pop().toLowerCase();

            if (!allowedExtensions.includes(fileExtension)) {
                // You can also reset the input field if needed
                e.target.value = "";
                return;
            }

            setAvatarFile(file);
            setAvatarPreview(URL.createObjectURL(file));
        }
    };

    const handleSaveClick = async () => {
        try {
            const userToken = getAccessToken();

            const config = {
                headers: {
                    Authorization: `Bearer ${userToken}`,
                },
            };

            const formData = new FormData();

            // If avatarFile is present, append it to the FormData
            //  if (avatarFile) {
            //     formData.append("avatar", avatarFile);
            // }

            for (const key in editedInfo) {
                formData.append(key, editedInfo[key]);
            }

            // Send the request
            const isConfirmed = await Swal.fire({
                title: "Are you sure?",
                text: "You want to update your information?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "I'm sure",
            });

            if (isConfirmed.isConfirmed) {
                const updateResponse = await api.put(url.AUTH.UPDATE_PROFILE, formData, config);

                if (updateResponse.status === 204) {
                    console.log("Successfully updated");
                } else {
                }
            }

            // Update the local state with edited information
            setInfo(editedInfo);
            setIsEditing(false);
        } catch (error) { }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormErrors({ ...formErrors, [name]: "" });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.currentPassword) {
            newErrors.currentPassword = "Please enter your password.";
            valid = false;
        } else if (formData.currentPassword.length < 6) {
            newErrors.currentPassword = "Password must be at least 6 characters.";
            valid = false;
        } else if (formData.currentPassword.length > 50) {
            newErrors.currentPassword = "Password must be less than 50 characters.";
            valid = false;
        }

        if (!formData.newPassword) {
            newErrors.newPassword = "Please enter a new password.";
            valid = false;
        } else if (formData.newPassword.length < 6) {
            newErrors.newPassword = "New password must be at least 6 characters.";
            valid = false;
        } else if (formData.newPassword.length > 50) {
            newErrors.newPassword = "New password must be less than 50 characters.";
            valid = false;
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword = "Please confirm your password.";
            valid = false;
        } else if (formData.confirmPassword !== formData.newPassword) {
            newErrors.confirmPassword = "Passwords do not match.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleChangePassword = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            const userToken = getAccessToken();

            if (userToken) {
                const isConfirmed = await Swal.fire({
                    title: "Are you sure?",
                    text: "you want to change your password?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "I'm sure",
                });
                if (isConfirmed.isConfirmed) {
                    try {
                        const config = {
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${userToken}`,
                            },
                        };

                        const requestData = {
                            currentPassword: formData.currentPassword,
                            newPassword: formData.newPassword,
                            confirmPassword: formData.confirmPassword,
                        };

                        const passwordResponse = await api.post(url.AUTH.CHANGE_PASSWORD, requestData, config);

                        if (passwordResponse.data.success) {
                            removeAccessToken();

                            navigate("/login");
                        }
                    } catch (error) {
                        // toast.error("Error! An error occurred. Please try again later!", {
                        //     position: "top-right",
                        //     autoClose: 3000,
                        //     hideProgressBar: false,
                        //     closeOnClick: true,
                        //     pauseOnHover: true,
                        //     draggable: true,
                        //     progress: undefined,
                        //     theme: "colored",
                        // });
                    }
                }
            } else {
            }
        }
    };
    return (
        <Layout>
            <Breadcrumb title="Change-Password"/>
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Change Password</h5>
                        </div>
                        <div className="modal-body text-start">
                            <form className="comment-form" onSubmit={handleChangePassword}>
                                <div className="row">
                                    <div className="mb-3">
                                        <label className="font-w600 form-label">
                                            Current Password <span className="required">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                                            name="currentPassword"
                                            placeholder="********"
                                            value={formData.currentPassword}
                                            onChange={handleChange}
                                        />

                                        {formErrors.currentPassword && <p className="invalid-feedback">{formErrors.currentPassword}</p>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-w600 form-label">
                                            New Password <span className="required">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${formErrors.newPassword ? "is-invalid" : ""}`}
                                            name="newPassword"
                                            placeholder="********"
                                            value={formData.newPassword}
                                            onChange={handleChange}
                                        />

                                        {formErrors.newPassword && <p className="invalid-feedback">{formErrors.newPassword}</p>}
                                    </div>

                                    <div className="mb-3">
                                        <label className="font-w600 form-label">
                                            Confirm Password <span className="required">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className={`form-control ${formErrors.confirmPassword ? "is-invalid" : ""}`}
                                            placeholder="********"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                        />

                                        {formErrors.confirmPassword && <p className="invalid-feedback">{formErrors.confirmPassword}</p>}
                                    </div>

                                    <div className="col-lg-12 mt-3">
                                        <input type="submit" value="Change Password" className="submit btn btn-primary" style={{ width: "100%" }} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

        </Layout>
    );
}

export default ChangePasswordAdmin;