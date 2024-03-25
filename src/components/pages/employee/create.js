import Layout from "../../layouts";
import { useState } from "react";
function EmpCreate() {

    const [showModal, setShowModal] = useState(false);
    const [formData, setFormData] = useState({
        clientName: '',
        clientName1: '',
        companyName1: '',
        companyName2: '',
        companyName3: '',
        companyName4: '',
        companyName5: '',
        // Add more fields as needed
    });

      // Define function that will open the modal
  const handleOpen = () => {
    setShowModal(true);
  };

  // Define function that will close the modal
  const handleClose = () => {
    setShowModal(false);
  };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleCreateClient = () => {
        // Add your logic here to handle creating the client
        console.log('Form Data:', formData);
        // You can send form data to an API, update state, etc.
        setShowModal(false); // Close the modal after handling form submission
    };
    return (  
        <Layout>
            <div class="" id="createproject" tabindex="-1"  aria-hidden="true">
            <div class="">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title  fw-bold" id="createprojectlLabel"> Add Employee</h5>
                    </div>
                    <div class="modal-body">
                        <div class="mb-3">
                            <label htmlFor="clientName1" class="form-label">Client Name</label>
                            <input type="text" class="form-control" id="clientName1"  value={formData.clientName} onChange={handleInputChange} placeholder="Explain what the Project Name"/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="companyName1" class="form-label">Company Name</label>
                            <input type="text" class="form-control" id="companyName1" value={formData.companyName} onChange={handleInputChange} placeholder="Explain what the Project Name"/>
                        </div>
                        <div class="mb-3">
                            <label htmlFor="companyName2" class="form-label">Profile Image</label>
                            <input class="form-control" type="file" id="companyName2" />
                        </div>
                        <div class="deadline-form">
                            <form>
                                <div class="row g-3 mb-3">
                                <div class="col">
                                    <label htmlFor="clientName" class="form-label">User Name</label>
                                    <input type="text" class="form-control" id="clientName"  value={formData.clientName} onChange={handleInputChange} placeholder="User Name"/>
                                </div>
                                {/* <div class="col">
                                    <label for="exampleFormControlInput277" class="form-label">Password</label>
                                    <input type="Password" class="form-control" id="exampleFormControlInput277" placeholder="Password"/>
                                </div> */}
                                </div>
                                <div class="row g-3 mb-3">
                                    <div class="col">
                                        <label htmlFor="companyName3" class="form-label">Email ID</label>
                                        <input type="email" class="form-control" id="companyName3"  value={formData.companyName} onChange={handleInputChange} placeholder="User Name"/>
                                    </div>
                                    <div class="col">
                                        <label htmlFor="companyName4" class="form-label">Phone</label>
                                        <input type="text" class="form-control" id="companyName4"  value={formData.companyName} onChange={handleInputChange} placeholder="User Name"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="mb-3">          
                            <label htmlFor="companyName5" class="form-label">Description (optional)</label>
                            <textarea class="form-control" id="companyName5" rows="3" value={formData.companyName} onChange={handleInputChange} placeholder="Add any extra details about the request"></textarea>
                        </div> 
                        {/* delete */}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onClick={handleCreateClient}>Create</button>
                    </div> 
                </div>  
            </div>
           </div>
        </Layout>
    );
}

export default EmpCreate;