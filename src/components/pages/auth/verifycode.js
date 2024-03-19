

function Verifycode() {

    return(
        <div id="mytask-layout">

    
    <div class="main p-2 py-3 p-xl-5">
        
       
        <div class="body d-flex p-0 p-xl-5">
            <div class="container-xxl">

                <div class="row g-0">
                    <div class="col-lg-6 d-none d-lg-flex justify-content-center align-items-center rounded-lg auth-h100">
                        <div style={{ maxWidth: '25rem' }}>
                            <div class="text-center mb-5">
                                 <svg  width="4rem" fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
                        <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                        <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>
                            </div>
                            <div class="mb-5">
                                <h2 class="color-900 text-center">My-Task Let's Management Better</h2>
                            </div>
                            
                            <div class="">
                                <img src="../assets/images/login-img.svg" alt="login-img"/>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                        <div class="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{ maxWidth: '32rem' }}>
                            
                            <form class="row g-1 p-3 p-md-4">
                                <div class="col-12 text-center mb-1 mb-lg-5">
                                    <img src="../assets/images/verify.svg" class="w240 mb-4" alt="" />
                                    <h1>Verification</h1>
                                    <span>We sent a verification code to your email. Enter the code from the email in the field below.</span>
                                </div>
                                <div class="col">
                                    <div class="mb-2">
                                        <input type="email" class="form-control form-control-lg text-center" placeholder="-"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-2">
                                        <input type="email" class="form-control form-control-lg text-center" placeholder="-"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-2">
                                        <input type="email" class="form-control form-control-lg text-center" placeholder="-"/>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="mb-2">
                                        <input type="email" class="form-control form-control-lg text-center" placeholder="-"/>
                                    </div>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <a href="index.html" title="" class="btn btn-lg btn-block btn-light lift text-uppercase">Verify my account</a>
                                </div>
                                <div class="col-12 text-center mt-4">
                                    <span class="text-muted">Haven't received it? <a href="#" class="text-secondary">Resend a new code.</a></span>
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
export default Verifycode;