import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import { AiFillPlusCircle } from 'react-icons/ai';

//Import Page

import AgentList from './AgentList';
import Addoption from '../../components/Addoption';
import Modal from '../../../components/modal/Modal';
import grouppic from './camera.png';
import './agent.scss'
import { addAgent, postImages } from '../../../services/apiservice';


const Agents = () =>{
	const [data, setData] = useState("Newest")
	const [modal, setmodal] = useState(false)
	const [imagePreview, setImagePreview] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);

	const handleCloseModal = () => {
		setmodal(false)
	}
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		userName: '',
		fullName: '',
		phone: '',
		profilePic: '',
		emirateId: '',
		employeeId: '',
		profileType:'agent'
	  });
	
	  const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
		  ...formData,
		  [name]: value,
		});
	  };
	  
	
    const handleImageChange = (event) => {
		const file = event.target.files[0];
		setSelectedImage(file);
		console.log(selectedImage);
	
		const reader = new FileReader();
		reader.onloadend = () => {
		  setImagePreview(reader.result); // This will set the image preview URL
		};
		if (file) {
			setFormData({
				...formData,
				profilePic: Date.now()+file.name,
			  });
		  reader.readAsDataURL(file);
		}
	  };

	  const handleSubmit = async(e) => {
		e.preventDefault()
		const imageData = new FormData();
		const profilePic = formData.profilePic;
		imageData.append('name', profilePic);
		imageData.append('image', selectedImage);

		await postImages(imageData).then(
		(res) => {
			const response =  addAgent(formData)
			console.log(response)
			 window.location.reload()
		}
		)
	  }

useEffect(() => {
  console.log(formData)
}, [formData])

	  
	return(
		<>
			
			<div className="row contacts-list-area">
				<Addoption addhead={"Agent"} setmodal={setmodal}/>
				<AgentList />
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
              <h4 className="card-title">Add Agent</h4>
            </div>
            <div className="card-body">
              <div className="basic-form">
			  <form onSubmit={handleSubmit}>
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
					<div className="form-group mb-3 col-12">
					<label>Full Name</label>
					<input
						type="text"
						name="fullName"
						value={formData.fullName}
						onChange={handleChange}
						className="form-control"
					/>
					</div>
					<div className="form-group mb-3 col-6">
					<label>User Name</label>
					<input
						type="text"
						name="userName"
						value={formData.userName}
						onChange={handleChange}
						className="form-control"
					/>
					</div>
					<div className="form-group mb-3 col-6">
					<label>Phone No</label>
					<input
						type="text"
						name="phone"
						value={formData.phone}
						onChange={handleChange}
						className="form-control"
					/>
					</div>
					<div className="form-group mb-3 col-6">
					<label>Email</label>
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleChange}
						className="form-control"
					/>
					</div>
					<div className="form-group mb-3 col-6">
					<label>Password</label>
					<input
						type="text"
						name="password"
						value={formData.password}
						onChange={handleChange}
						className="form-control"
					/>
					</div>
					<div className="form-group mb-3 col-6">
					<label>Emirates Id</label>
					<input
						type="text"
						name="emirateId"
						value={formData.emirateId}
						onChange={handleChange}
						className="form-control"
					/>
					</div>
					<div className="form-group mb-3 col-6">
					<label>Employee Id</label>
					<input
						type="text"
						name="employeeId"
						value={formData.employeeId}
						onChange={handleChange}
						className="form-control"
					/>
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
export default Agents; 