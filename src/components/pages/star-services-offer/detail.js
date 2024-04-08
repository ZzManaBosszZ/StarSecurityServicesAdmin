import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import url from "../../services/url";
import Layout from "../../layouts";

function OfferDetail() {

    const { id } = useParams();
    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const [selectClient, setSelectClient] = useState([]);
    const [servicesOfferDetail, setServicesOfferDetail] = useState([]);

    useEffect(() => {
        const userToken = localStorage.getItem("access_token");
        // api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        api.get(`${url.SERVICE_OFFER.DETAIL.replace("{}", id)}`)
            .then((response) => {
                setServicesOfferDetail(response.data);
            })
            .catch((error) => {
                // console.error("Error fetching promotion details:", error);
            });
    }, [id]);

    useEffect(() => {
        const fetchClient = async () => {
            const userToken = localStorage.getItem("access_token");
            api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
            try {
                const response = await api.get(url.CLIENT.LIST);
                const clientData = response.data.map((client) => ({
                    value: client.id,
                    label: client.clientName,
                }));
                setSelectClient(clientData);
            } catch (error) { }
        };
        fetchClient();
    }, []);

    useEffect(() => {
        const fetchUserRole = async () => {
            const token = localStorage.getItem("access_token");
            try {
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                setUserRole(userRole);

                if (userRole === "User" || userRole === "") {
                    setError(true);
                }
            } catch (error) {
                console.error("Error loading user role:", error);
            }
        };

        fetchUserRole();
    }, []);

    return (  
        <Layout>
            <div className="body d-flex py-lg-3 py-md-2">
            <div className="container-xxl">
                
                <div className="row align-items-center">
                    <div className="border-0 mb-4">
                        <div className="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 className="fw-bold mb-0 py-3 pb-2">Services Offer Detail</h3>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-12 col-md-12">
                        <div className="card p-xl-5 p-lg-4 p-0">
                            <div className="card-body">
                                <div className="mb-3 pb-3 border-bottom">
                                    SalarySlip
                                    <strong>01/Nov/2020</strong>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-sm-6">
                                        <h6 className="mb-3">From:</h6>
                                        <div><strong>{selectClient.name}</strong></div>
                                        <div>111  Berkeley Rd</div>
                                        <div>STREET ON THE FOSSE, Poland</div>
                                        <div>Email: {selectClient.email}</div>
                                        <div>Phone: {selectClient.contactNumber}</div>
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <h6 className="mb-3">To:</h6>
                                        <div><strong>5 Dump</strong></div>
                                        <div>Star Security Service</div>
                                        <div>Address: </div>

                                        <div>Phone: +66 243 456 789</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg">
                                        <div className="table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th>Earnings</th>
                                                        <th className="text-end">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">1</td>
                                                        <td>Basic Salary</td>
                                                        <td className="text-end">$8000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">2</td>
                                                        <td>House Rent Allowance (H.R.A.)</td>
                                                        <td className="text-end">$50,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">3</td>
                                                        <td>Conveyance</td>
                                                        <td className="text-end">$50,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">4</td>
                                                        <td>Other Allowance</td>
                                                        <td className="text-end">$50,00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
        
                                        <div className="row">
                                            <div className="col-lg-4 col-sm-5">
                                            
                                            </div>
                                            
                                            <div className="col-lg-4 col-sm-5 ms-auto">
                                                <table className="table table-clear">
                                                    <tbody>
                                                        <tr>
                                                            <td ><strong>Total</strong></td>
                                                            <td className="text-end">$8150,00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                

                                <div className="row">
                                    {/* <div className="col-lg-12">
                                        <h6>Terms &amp; Condition</h6>
                                        <p className="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin literature from 45 BC, making it over</p>
                                    </div> */}
                                    <div className="col-lg-12 text-end">
                                        <button type="button" className="btn btn-primary btn-lg my-1"><i className="fa fa-paper-plane-o"></i> Accept Offer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        </Layout>
    );
}

export default OfferDetail;