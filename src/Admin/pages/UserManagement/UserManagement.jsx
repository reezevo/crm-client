
import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

//Import Page

import UserManagementList from './UserManagementList';
import Addoption from '../../components/Addoption';
import Modal from '../../../components/modal/Modal';
import grouppic from './camera.png';
import './userManagement.scss'


function UserManagement() {
    const [data, setData] = useState("Newest")
	const [modal, setmodal] = useState(false)
	const [imagePreview, setImagePreview] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleCloseModal = () => {
		setmodal(false)
	}

	
    const handleImageChange = (event) => {
		const file = event.target.files[0];
		setSelectedImage(file);
		console.log(selectedImage);
	
		const reader = new FileReader();
		reader.onloadend = () => {
		  setImagePreview(reader.result); // This will set the image preview URL
		};
		if (file) {
		  reader.readAsDataURL(file);
		}
	  };
	return(
		<>
			
			<div className="row contacts-list-area">
				<Addoption addhead={"Agent"} setmodal={setmodal}/>
				<UserManagementList />
			</div>	
			<div className="d-flex align-items-center justify-content-between  flex-wrap">
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
			</div>

			<Modal showModal={modal} handleCloseModal={handleCloseModal}>
		
         
            <div className="card-header">
              <h4 className="card-title">Add Agent</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="row">
				  <div className='messagepicinput'>
					<label htmlFor='messagegrouppic' className='messagesharefilelabel'>
					
						<div className='messagegropupicdiv'>
						<AiFillPlusCircle className='messagepicplus'/>
						{ imagePreview &&
						<img className='messagegrouppre' src={
							imagePreview?
							imagePreview:
							grouppic
						}/>
						
						}
						{ !imagePreview &&
						<img className='messagegrouppre' src={
						
							grouppic
						}/>
						
						}
						</div>
					<input type='file' id='messagegrouppic' onChange={handleImageChange} style={{ display: "none" }} />
					</label>
					</div>
                    <div className="form-group mb-3 col-md-12">
                      <label>Full Name</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3 col-md-6">
                      <label>User Name</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
					<div className="form-group mb-3 col-md-6">
                      <label>Phone No</label>
                      <input
                        type="text"
                        className="form-control"
                      />
                    </div>
					<div className="form-group mb-3 col-md-6">
                      <label>Email</label>
                       <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    
                    
                    <div className="form-group mb-3 col-md-6">
                      <label>Password</label>
                       <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3 col-md-6">
                      <label>Emirates Id</label>
                       <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3 col-md-6">
                      <label>Employee Id</label>
                       <input
                        type="text"
                        className="form-control"
                      />
                    </div>
                    <div className="form-group mb-3 col-md-12">
                      <label>Role</label>
                      <select
                        defaultValue={"option"}
                        id="inputState"
                        className="form-control"
                      >
                        <option value="option" disabled>
                          Choose...
                        </option>
                        <option>Agent</option>
                        <option>Role 2</option>
                        <option>Role 3</option>
                      </select>
                    </div>
                    
                 
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

export default UserManagement