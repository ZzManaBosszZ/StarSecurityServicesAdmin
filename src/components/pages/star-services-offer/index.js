import { Link } from "react-router-dom";
import Layout from "../../layouts";
import { useState, useEffect } from "react";
import api from "../../services/api";
import url from "../../services/url";
import ReactPaginate from "react-paginate";

function OfferList() {

    const [userRole, setUserRole] = useState(null);
    const [error, setError] = useState(null);
    const [servicesOffer, setServicesOffer] = useState([]);
    const [selectClient, setSelectClient] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);



    useEffect(() => {
        loadServicesOffer();
    }, [currentPage]);

    const loadServicesOffer = async () => {
        const userToken = localStorage.getItem("access_token");
        api.defaults.headers.common["Authorization"] = `Bearer ${userToken}`;
        try {
            const response = await api.get(url.SERVICE_OFFER.LIST);
            setServicesOffer(response.data);
            setPageCount(Math.ceil(response.data.length / OfferPerPage));
        } catch (error) { }
    };

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

    const OfferPerPage = 6;
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

    const displayedServiceOffer = servicesOffer.slice(
        currentPage * OfferPerPage,
        (currentPage + 1) * OfferPerPage
    );


    useEffect(() => {
        const fetchUserRole = async () => {
            const token = localStorage.getItem("access_token");
            try {
                const decodedToken = JSON.parse(atob(token.split(".")[1]));
                const userRole = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];
                setUserRole(userRole);

                if (userRole === "User" || userRole === "Star Admin Staff") {
                    setError(true);
                }
            } catch (error) {
                console.error("Error loading user role:", error);
            }
        };

        fetchUserRole();
    }, []);

    const getStatusColor = (status) => {
        switch (status) {
            case "Pending":
                return "bg-warning";
            case "Approved":
                return "bg-success";
            case "Cancel":
                return "bg-danger";
            default:
                return "bg-secondary";
        }
    };

    const getStatusText = (status) => {
        switch (status) {
            case "Pending":
                return "Pending";
            case "Approved":
                return "Approved";
            case "Cancel":
                return "Cancel";
            default:
                return "Unknown";
        }
    };


    return (
        <Layout>
            <div className="body d-flex py-lg-3 py-md-2">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="border-0 mb-4">
                            <div className="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                <h3 className="fw-bold mb-0">Service Offer List</h3>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-md-12">
                            <div className="card mb-3">
                                <div className="card-body">
                                    <table id="myProjectTable" className="table table-hover align-middle mb-0" style={{ width: "100%" }}>
                                        <thead>
                                            <tr>
                                                <th>NO</th>
                                                <th>Client Name Hire</th>
                                                <th>Client Name</th>
                                                <th>Date</th>
                                                <th>Price</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {displayedServiceOffer.map((item, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td> <Link className="fw-bold text-secondary">{item.serviceOfferedId}</Link> </td>
                                                        <td> <Link to={`/service-offer-detail/${item.serviceOfferedId}`}>{item.serviceName}</Link></td>
                                                        <td>{item.client?.clientName}</td>
                                                        <td>{item.createdAt}</td>
                                                        <td>$3250</td>
                                                        <td><span className={`badge ${getStatusColor(item.status)}`}>
                                                            {getStatusText(item.status)}
                                                        </span></td>

                                                    </tr>
                                                )
                                            })}
                                        </tbody>

                                    </table>
                                </div>
                                <ReactPaginate
                                    previousLabel="Previous"
                                    nextLabel="Next"
                                    pageClassName="page-item"
                                    pageLinkClassName="page-link"
                                    previousClassName="page-item"
                                    previousLinkClassName="page-link"
                                    nextClassName="page-item"
                                    nextLinkClassName="page-link"
                                    breakLabel="..."
                                    breakClassName="page-item"
                                    breakLinkClassName="page-link"
                                    pageCount={pageCount}
                                    marginPagesDisplayed={2}
                                    pageRangeDisplayed={5}
                                    onPageChange={handlePageClick}
                                    containerClassName="pagination"
                                    activeClassName="active"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default OfferList;