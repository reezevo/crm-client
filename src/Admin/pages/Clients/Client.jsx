import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import { addClient } from '../../../services/apiservice';
//Import Page
import PageHead from '../../components/PageHead';
import CustomersList from './ClientList';
import Addoption from '../../components/Addoption';
import Modal from '../../../components/modal/Modal';
import { useSelector } from 'react-redux';
import './clients.scss'

const Clients = () =>{
	const [data, setData] = useState("Newest")
	const [modal, setmodal] = useState(false)
  const user = useSelector((state) => state.user.user);


  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    profession: '',
    country: '',
    pipelineId: user?.pipeline
  });

  useEffect(() => {
    console.log(formData)
  }, [formData])
  
    const handleCloseModal = () => {
      setmodal(false)
    }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await addClient(formData)
    console.log(response)
  }


	return(
		<>

			<div className="row contacts-list-area p-3">
				<Addoption addhead={"Client"} setmodal={setmodal}/>
				<CustomersList />
			</div>	
			{/* <div className="d-flex align-items-center justify-content-between  flex-wrap">
				<h5>Showing 5 from 160 data</h5>
				<ul className="pagination align-items-center">
					<li className="page-item page-indicator">
						<Link to={"#"} className="btn btn-primary btn-sm me-2">Previous</Link>
					</li>
					<li className="page-item active"><Link to={"#"} className="page-link">1</Link></li>
					<li className="page-item"><Link to={"#"} className="page-link">2</Link></li>
					<li className="page-item"><Link to={"#"} className="page-link">3</Link></li>
					<li className="page-item"><Link to={"#"} className="page-link">4</Link></li>
					<li className="page-item page-indicator">
						<Link to={"#"} className="btn btn-primary btn-sm me-2">Next</Link>
					</li>
				</ul>
			</div> */}

			<Modal showModal={modal} handleCloseModal={handleCloseModal}>
		
         
            <div className="card-header">
              <h4 className="card-title">Add Client</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={handleSubmit}>
      <div className="row rowwidthclient">
        <div className="form-group mb-3 col-md-12">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.fullName}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3 col-md-12">
          <label>Phone No</label>
          <input
            type="text"
            name="phone"
            value={formData.phoneNo}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3 col-md-12">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3 col-md-6">
          <label>Profession</label>
          <input
            type="text"
            name="profession"
            value={formData.profession}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group mb-3 col-md-6">
          <label>Country</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/* <div className="form-group mb-3 col-md-12">
          <label>State</label>
          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="form-control"
          >
            <option value="option" disabled>
              Choose...
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
          </select>
        </div> */}
      </div>
      <button type="submit" className="btn btn-primary">
        Add
      </button>
    </form>
              </div>
            </div>
         
        
			</Modal>
		</>
	)
}
export default Clients; 