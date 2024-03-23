import Layout from "../../layouts";

function OfferList() {
    return ( 
        <Layout>
            <div class="body d-flex py-lg-3 py-md-2">
            <div class="container-xxl">
                <div class="row align-items-center">
                    <div class="border-0 mb-4">
                        <div class="card-header py-3 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 class="fw-bold mb-0">Service Offer List</h3>
                        </div>
                    </div>
                </div>

                <div class="row g-3">
                    <div class="col-md-12">
                        <div class="card mb-3">
                            <div class="card-body">
                                <table id="myProjectTable" class="table table-hover align-middle mb-0" style={{width: "100%"}}>
                                    <thead>
                                        <tr>
                                            <th>NO</th>
                                            <th>Project</th>
                                            <th>Client Name</th>
                                            <th>Date Start</th>
                                            <th>Date End</th>
                                            <th>Amount</th>
                                            <th>status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00001</a></td>
                                            <td><a href="projects.html">Social Geek Made</a></td>
                                            <td>AgilSoft Tech</td>
                                            <td>10-01-2021</td>
                                            <td>10-02-2021</td>
                                            <td>$3250</td>
                                            <td><span class="badge bg-warning">Pending</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00002</a></td>
                                            <td><a href="projects.html">Practice to Perfect</a></td>
                                            <td>Macrosoft</td>
                                            <td>12-02-2021</td>
                                            <td>10-04-2021</td>
                                            <td>$1578</td>
                                            <td><span class="badge bg-success">Paid</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00003</a></td>
                                            <td><a href="projects.html">Rhinestone</a></td>
                                            <td>Google</td>
                                            <td>18-02-2021</td>
                                            <td>20-04-2021</td>
                                            <td>$1978</td>
                                            <td><span class="badge bg-lavender-purple">Draf</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00004</a></td>
                                            <td><a href="projects.html">Box of Crayons</a></td>
                                            <td>Pixelwibes</td>
                                            <td>28-02-2021</td>
                                            <td>30-04-2021</td>
                                            <td>$1978</td>
                                            <td><span class="badge bg-lavender-purple">Draf</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00005</a></td>
                                            <td><a href="projects.html">Practice to Perfect</a></td>
                                            <td>Deltasoft Tech</td>
                                            <td>11-02-2021</td>
                                            <td>10-04-2021</td>
                                            <td>$1578</td>
                                            <td><span class="badge bg-success">Paid</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00006</a></td>
                                            <td><a href="projects.html">Rhinestone</a></td>
                                            <td>Google</td>
                                            <td>17-02-2021</td>
                                            <td>20-04-2021</td>
                                            <td>$1978</td>
                                            <td><span class="badge bg-lavender-purple">Draf</span></td>
                                        </tr>
                                        <tr>
                                            <td><a href="invoices.html" class="fw-bold text-secondary">#00007</a></td>
                                            <td><a href="projects.html">Box of Crayons</a></td>
                                            <td>Pixelwibes</td>
                                            <td>14-02-2021</td>
                                            <td>30-04-2021</td>
                                            <td>$1978</td>
                                            <td><span class="badge bg-lavender-purple">Draf</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Layout>
     );
}

export default OfferList;