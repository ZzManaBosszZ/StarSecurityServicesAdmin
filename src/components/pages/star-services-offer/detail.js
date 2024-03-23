import Layout from "../../layouts";

function OfferDetail() {
    return (  
        <Layout>
            <div class="body d-flex py-lg-3 py-md-2">
            <div class="container-xxl">
                
                <div class="row align-items-center">
                    <div class="border-0 mb-4">
                        <div class="card-header no-bg bg-transparent d-flex align-items-center px-0 justify-content-between border-bottom flex-wrap">
                            <h3 class="fw-bold mb-0 py-3 pb-2">Services Offer Detail</h3>
                        </div>
                    </div>
                </div>

                <div class="row justify-content-center">
                    <div class="col-lg-12 col-md-12">
                        <div class="card p-xl-5 p-lg-4 p-0">
                            <div class="card-body">
                                <div class="mb-3 pb-3 border-bottom">
                                    SalarySlip
                                    <strong>01/Nov/2020</strong>
                                </div>

                                <div class="row mb-4">
                                    <div class="col-sm-6">
                                        <h6 class="mb-3">From:</h6>
                                        <div><strong>PixelWibes</strong></div>
                                        <div>111  Berkeley Rd</div>
                                        <div>STREET ON THE FOSSE, Poland</div>
                                        <div>Email: info@deoweb.com</div>
                                        <div>Phone: +44 888 666 3333</div>
                                    </div>
                                    
                                    <div class="col-sm-6">
                                        <h6 class="mb-3">To:</h6>
                                        <div><strong> Dylan Hunter</strong></div>
                                        <div>Web Designer</div>
                                        <div>Employee ID: 00008</div>
                                        <div>Joining Date: 10 Feb 2017</div>
                                        <div>Phone: +66 243 456 789</div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-6">
                                        <div class="table-responsive-sm">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center">#</th>
                                                        <th>Earnings</th>
                                                        <th class="text-end">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">1</td>
                                                        <td>Basic Salary</td>
                                                        <td class="text-end">$8000,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">2</td>
                                                        <td>House Rent Allowance (H.R.A.)</td>
                                                        <td class="text-end">$50,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">3</td>
                                                        <td>Conveyance</td>
                                                        <td class="text-end">$50,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">4</td>
                                                        <td>Other Allowance</td>
                                                        <td class="text-end">$50,00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
        
                                        <div class="row">
                                            <div class="col-lg-4 col-sm-5">
                                            
                                            </div>
                                            
                                            <div class="col-lg-4 col-sm-5 ms-auto">
                                                <table class="table table-clear">
                                                    <tbody>
                                                        <tr>
                                                            <td ><strong>Subtotal</strong></td>
                                                            <td class="text-end">$8150,00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="table-responsive-sm">
                                            <table class="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th class="text-center">#</th>
                                                        <th>Deductions</th>
                                                        <th class="text-end">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="text-center">1</td>
                                                        <td>Tax Deducted at Source (T.D.S.)</td>
                                                        <td class="text-end">$15,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">2</td>
                                                        <td>Provident Fund</td>
                                                        <td class="text-end">$200,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">3</td>
                                                        <td>ESI</td>
                                                        <td class="text-end">$0,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td class="text-center">4</td>
                                                        <td>Other Deductions</td>
                                                        <td class="text-end">$0,00</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
        
                                        <div class="row">
                                            <div class="col-lg-4 col-sm-5">
                                            
                                            </div>
                                            
                                            <div class="col-lg-4 col-sm-5 ms-auto">
                                                <table class="table table-clear">
                                                    <tbody>
                                                        <tr>
                                                            <td ><strong>Subtotal</strong></td>
                                                            <td class="text-end">$215,00</td>
                                                        </tr>
                                                        <tr>
                                                            <td ><strong>(ER) - (DE)</strong></td>
                                                            <td class="text-end">$7935</td>
                                                        </tr>
                                                        <tr>
                                                            <td ><strong>Total</strong></td>
                                                            <td class="text-end"><strong>$7935</strong></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                

                                <div class="row">
                                    {/* <div class="col-lg-12">
                                        <h6>Terms &amp; Condition</h6>
                                        <p class="text-muted">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over</p>
                                    </div> */}
                                    <div class="col-lg-12 text-end">
                                        <button type="button" class="btn btn-primary btn-lg my-1"><i class="fa fa-paper-plane-o"></i> Accept Offer</button>
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