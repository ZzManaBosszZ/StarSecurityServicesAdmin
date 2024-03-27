import api from "../../services/api";
import url from "../../services/url";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { getDecodedToken, removeAccessToken, setAccessToken } from "../utils/auth";

function Login() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [formErrors, setFormErrors] = useState({
        email: "",
        password: "",
    });

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData({ ...formData, [name]: value });
    //     setFormErrors({ ...formErrors, [name]: "" });
    // };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = {};

        if (!formData.email) {
            newErrors.email = "Please enter your email address.";
            valid = false;
        }

        if (!formData.password) {
            newErrors.password = "Please enter your password.";
            valid = false;
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters.";
            valid = false;
        } else if (formData.password.length > 50) {
            newErrors.password = "Password must be less than 50 characters.";
            valid = false;
        }

        setFormErrors(newErrors);
        return valid;
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        if (validateForm()) {
            try {
                const loginRequest = await api.post(url.AUTH.LOGIN, formData);   
                if (loginRequest.status === 200) {
                    const token = loginRequest.data.token;
                    setAccessToken(token);
                    // Check user permissions
                    const decodedToken = getDecodedToken();

                    // let redirectUrl = "/";
                    // navigate(redirectUrl);

                    const accountRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                    if (accountRole === "User") {
                        removeAccessToken();
                        setFormErrors({
                            email: "Invalid email or password.",
                            password: "Invalid email or password.",
                        });
                    } else {
                        let redirectUrl = "/";
                        
                        navigate(redirectUrl);
                    }
                } else {
                    setFormErrors({
                        email: "Invalid email or",
                        password: "Invalid email or password.",
                    });
                }
            } 
            catch (error) {
                setFormErrors({
                    email: "Invalid email or password.",
                    password: "Invalid email or password.",
                });
            }
        }
    };

    return (
        <div id="mytask-layout">

            <div className="main p-2 py-3 p-xl-5 ">

                <div className="body d-flex p-0 p-xl-5">
                    <div className="container-xxl">

                        <div className="row g-0">
                            <div className="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                                <div style={{ maxWidth: '25rem' }}>
                                    <div className="text-center mb-5">
                                        <svg width="4rem" fill="currentColor" className="bi bi-clipboard-check" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                            <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                            <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                        </svg>
                                    </div>
                                    <div className="mb-5">
                                        <h2 className="color-900 text-center">StarAdmin Let's Management Better</h2>
                                    </div>

                                    <div className="">
                                        <img src="../assets/images/login-img.svg" alt="login-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                                <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{ maxWidth: '32rem' }}>
                                    <form className="row g-1 p-3 p-md-4" onSubmit={handleLogin}>
                                        <div className="col-12 text-center mb-1 mb-lg-5">
                                            <h1>Sign in</h1>
                                            <span>Free access to our dashboard.</span>
                                        </div>

                                        <div className="col-12">
                                            <div className="mb-2">
                                                <label className="form-label">Email address</label>
                                                <input
                                                    type="email"
                                                    className={`form-control form-control-lg ${formErrors.email ? "is-invalid" : ""}`}
                                                    id="email"
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    autoFocus
                                                    placeholder="name@example.com" />
                                                {formErrors.email && <p className="invalid-feedback">{formErrors.email}</p>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="mb-2">
                                                <div className="form-label">
                                                    <span className="d-flex justify-content-between align-items-center">
                                                        Password
                                                        <Link to="/forgot-password" className="text-secondary">Forgot Password?</Link>
                                                    </span>
                                                </div>
                                                <input
                                                    type="password"
                                                    className={`form-control form-control-lg ${formErrors.password ? "is-invalid" : ""}`}
                                                    id="password"
                                                    name="password"
                                                    value={formData.password}
                                                    onChange={handleChange}
                                                    placeholder="***************" />
                                                    {formErrors.password && <p className="invalid-feedback">{formErrors.password}</p>}
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            {/* <div className="form-check">
                                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                                <label className="form-check-label" for="flexCheckDefault">
                                                    Remember me
                                                </label>
                                            </div> */}
                                        </div>
                                        <div className="col-12 text-center mt-4">
                                            <button type="submit" className="btn btn-lg btn-block btn-light lift text-uppercase" atl="login">SIGN IN</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
