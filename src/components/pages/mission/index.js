import Layout from "../../layouts";
import ReactPaginate from "react-paginate";

function MissionList() {
    return (
        <Layout>
            <div class="row">
                <div class="col-sm-12">
                    <div class="card mb">
                        <div class="card-header">
                            <div class="border-0 mb-4">
                                <div class="card-header p-0 no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                                    <h3 class="fw-bold py-3 mb-0">Mission List</h3>
                                    <div class="d-flex py-2 project-tab flex-wrap w-sm-100">
                                        <a href="/mission-create">
                                            <button type="button" class="btn btn-dark w-sm-100" data-bs-toggle="modal" data-bs-target="#createproject">
                                                <i class="icofont-plus-circle me-2 fs-6"></i>Create Mission</button></a>
                                        <ul class="nav nav-tabs tab-body-header rounded ms-3 prtab-set w-sm-100" role="tablist">
                                            <li class="nav-item"><a class="nav-link active" data-bs-toggle="tab" href="#All-list" role="tab">All</a></li>
                                            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Started-list" role="tab">Started</a></li>
                                            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Approval-list" role="tab">Approval</a></li>
                                            <li class="nav-item"><a class="nav-link" data-bs-toggle="tab" href="#Completed-list" role="tab">Completed</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card-body">

                            <div id="DataTables_Table_0_wrapper" class="dataTables_wrapper dt-bootstrap4 no-footer">
                                <div class="row">
                                    <div class="col-sm-12 col-md-6">
                                        <div class="dataTables_length" id="DataTables_Table_0_length">

                                        </div>
                                    </div>
                                    <div class="col-sm-12 col-md-6">
                                    </div></div><div class="row">
                                    <div class="col-sm-12">
                                        <table class="datatable table table-stripped mb-0 dataTable no-footer" id="DataTables_Table_0" role="grid" aria-describedby="DataTables_Table_0_info">
                                            <thead>
                                                <tr role="row">
                                                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={{ width: " 50px" }}>ID</th>
                                                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={{ width: " 200px" }}>Client Name</th>
                                                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={{ width: " 150px" }}>Mail</th>
                                                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={{ width: "200px" }}>Service Offer</th>
                                                    <th class="sorting" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={{ width: "125.5px" }}>Department</th>
                                                    <th class="sorting_desc" tabindex="0" aria-controls="DataTables_Table_0" rowspan="1" colspan="1" style={{ width: "125.5px" }} aria-sort="descending">Status</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr class="odd">
                                                    <td>1</td>
                                                    <td class="">Angelica Ramos</td>
                                                    <td class="">Chief Executive Officer (CEO)</td>
                                                    <td>London</td>
                                                    <td>47</td>
                                                    <td class="sorting_1">$1,200,000</td>
                                                </tr>
                                                {/* <tr class="even">
                                                    <td class="">Fiona Green</td>
                                                    <td class="">Chief Operating Officer (COO)</td>
                                                    <td>San Francisco</td>
                                                    <td>48</td>
                                                    <td class="sorting_1">$850,000</td>
                                                </tr><tr class="odd">
                                                    <td class="">Paul Byrd</td>
                                                    <td class="">Chief Financial Officer (CFO)</td>
                                                    <td>New York</td>
                                                    <td>64</td>
                                                    <td class="sorting_1">$725,000</td>
                                                </tr><tr class="even">
                                                    <td class="">Yuri Berry</td>
                                                    <td class="">Chief Marketing Officer (CMO)</td>
                                                    <td>New York</td>
                                                    <td>40</td>
                                                    <td class="sorting_1">$675,000</td>
                                                </tr><tr class="odd">
                                                    <td class="">Charde Marshall</td>
                                                    <td class="">Regional Director</td>
                                                    <td>San Francisco</td>
                                                    <td>36</td>
                                                    <td class="sorting_1">$470,600</td>
                                                </tr><tr class="even">
                                                    <td class="">Cedric Kelly</td>
                                                    <td class="">Senior Javascript Developer</td>
                                                    <td>Edinburgh</td>
                                                    <td>22</td>
                                                    <td class="sorting_1">$433,060</td>
                                                </tr><tr class="odd">
                                                    <td class="">Tatyana Fitzpatrick</td>
                                                    <td class="">Regional Director</td>
                                                    <td>London</td>
                                                    <td>19</td>
                                                    <td class="sorting_1">$385,750</td>
                                                </tr><tr class="even">
                                                    <td class="">Brielle Williamson</td>
                                                    <td class="">Integration Specialist</td>
                                                    <td>New York</td>
                                                    <td>61</td>
                                                    <td class="sorting_1">$372,000</td>
                                                </tr><tr class="odd">
                                                    <td class="">Jennifer Chang</td>
                                                    <td class="">Regional Director</td>
                                                    <td>Singapore</td>
                                                    <td>28</td>
                                                    <td class="sorting_1">$357,650</td>
                                                </tr><tr class="even">
                                                    <td class="">Jenette Caldwell</td>
                                                    <td class="">Development Lead</td>
                                                    <td>New York</td>
                                                    <td>30</td>
                                                    <td class="sorting_1">$345,000</td>
                                                </tr> */}
                                            </tbody>
                                        </table>
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

export default MissionList;