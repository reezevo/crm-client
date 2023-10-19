import React, { Fragment, useEffect, useState } from 'react';
import Sidebar from '../../../components/Sidebar/SideBar';
// import productData from "./productData";
import Property from './Property';
import { Link } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import Addoption from '../../components/Addoption';
import Modal from '../../../components/modal/Modal';
import grouppic from './camera.png';
import { AiFillPlusCircle } from 'react-icons/ai';
import './properties.scss';
import { addProperty, getProperty, postImages } from '../../../services/apiservice';
import PropertyList from './Property';


function Properties({propertyList}) {
  const [data, setData] = useState("Newest");

  const [modal, setModal] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const PF = "https://unifeed.s3.ap-south-1.amazonaws.com/";


  const [formData, setFormData] = useState({
    name: '',
    productPic: '',
    startingprice: '',
    lastprice: '',
    address: '',
    phoneNo: '',
    email: '',
    id: '',
  });

  const handleCloseModal = () => {
    setModal(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };

    if (file) {
      setFormData({
        ...formData,
        productPic: Date.now()+file.name,
        });
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const imageData = new FormData();
		const productPic = formData.productPic;
		imageData.append('name', productPic);
		imageData.append('image', selectedImage);

		await postImages(imageData).then(
		(res) => {
			const response =  addProperty(formData)
			console.log(response)
			 window.location.reload()
		}
		)

    // Add your logic for handling form data here
  };

  return (
    <div>
    <Addoption addhead={'Property'} setmodal={setModal}/>
<PropertyList/>
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
                      <AiFillPlusCircle className='messagepicplus' />
                      {imagePreview && (
                        <img className='messagegrouppre' src={imagePreview ? imagePreview : grouppic} />
                      )}
                      {!imagePreview && <img className='messagegrouppre' src={grouppic} />}
                    </div>
                    <input type='file' id='messagegrouppic' onChange={handleImageChange} style={{ display: "none" }} />
                  </label>
                </div>
                <div className="form-group mb-3 col-md-12">
                  <label>Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Starting Price</label>
                  <input
                    type="text"
                    name="startingprice"
                    value={formData.startingprice}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Last Price</label>
                  <input
                    type="text"
                    name="lastprice"
                    value={formData.lastprice}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Address</label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Phone No</label>
                  <input
                    type="text"
                    name="phoneNo"
                    value={formData.phoneNo}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label>Email</label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
                <div className="form-group mb-3 col-md-6">
                  <label> Id</label>
                  <input
                    type="text"
                    name="id"
                    value={formData.id}
                    onChange={handleInputChange}
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
    </div>
  );
}

export default Properties;
