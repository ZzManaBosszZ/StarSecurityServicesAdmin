import Layout from "../../layouts";

function OfferDetail() {
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
                                        <div><strong>PixelWibes</strong></div>
                                        <div>111  Berkeley Rd</div>
                                        <div>STREET ON THE FOSSE, Poland</div>
                                        <div>Email: info@deoweb.com</div>
                                        <div>Phone: +44 888 666 3333</div>
                                    </div>
                                    
                                    <div className="col-sm-6">
                                        <h6 className="mb-3">To:</h6>
                                        <div><strong> Dylan Hunter</strong></div>
                                        <div>Web Designer</div>
                                        <div>Employee ID: 00008</div>
                                        <div>Joining Date: 10 Feb 2017</div>
                                        <div>Phone: +66 243 456 789</div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
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
                                                            <td ><strong>Subtotal</strong></td>
                                                            <td className="text-end">$8150,00</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="table-responsive-sm">
                                            <table className="table table-striped">
                                                <thead>
                                                    <tr>
                                                        <th className="text-center">#</th>
                                                        <th>Deductions</th>
                                                        <th className="text-end">Amount</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="text-center">1</td>
                                                        <td>Tax Deducted at Source (T.D.S.)</td>
                                                        <td className="text-end">$15,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">2</td>
                                                        <td>Provident Fund</td>
                                                        <td className="text-end">$200,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">3</td>
                                                        <td>ESI</td>
                                                        <td className="text-end">$0,00</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="text-center">4</td>
                                                        <td>Other Deductions</td>
                                                        <td className="text-end">$0,00</td>
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
                                                            <td ><strong>Subtotal</strong></td>
                                                            <td className="text-end">$215,00</td>
                                                        </tr>
                                                        <tr>
                                                            <td ><strong>(ER) - (DE)</strong></td>
                                                            <td className="text-end">$7935</td>
                                                        </tr>
                                                        <tr>
                                                            <td ><strong>Total</strong></td>
                                                            <td className="text-end"><strong>$7935</strong></td>
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