import React, { Fragment, useEffect, useState } from 'react'
import Sidebar from '../../../components/Sidebar/SideBar'

import Company from './Company';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
import Addoption from '../../components/Addoption';
import Modal from '../../../components/modal/Modal';
import grouppic from './camera.png';
import { AiFillPlusCircle } from 'react-icons/ai';
import { addCompany, getCompany, postImages } from '../../../services/apiservice';
function Companies() {
  const [data, setData] = useState("Newest")
  const [modal, setmodal] = useState(false)
  const [productData, setproductData] = useState([])
  const [imagePreview, setImagePreview] = useState(null);
	const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    productPic: '',
    address: '',
    phoneNo: '',
    email: '',
    id: '',
  });

	useEffect(() => {
	  const propertylist = async() => {
		const res = await getCompany()
		console.log(res)
		setproductData(res)
	  }
	  propertylist()

	}, [])

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
        const response =  addCompany(formData)
        console.log(response)
         window.location.reload()
      }
      )
  
      // Add your logic for handling form data here
    };
    
  return (
    <div>
   <Addoption addhead={"Company"}  setmodal={setmodal}/>
       <Fragment>
         <div className="row">
            {productData.map((product,index) => (
               <Company key={index} product={product} />
            ))}
         </div>
      </Fragment>

      <Modal showModal={modal} handleCloseModal={handleCloseModal}>
        <div className="card-header">
          <h4 className="card-title">Add Company</h4>
        </div>
        <div className="card-body">
          <div className="basic-form">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="messagepicinput">
                  <label htmlFor="messagegrouppic" className="messagesharefilelabel">
                    <div className="messagegropupicdiv">
                      <AiFillPlusCircle className="messagepicplus" />
                      {imagePreview && (
                        <img
                          className="messagegrouppre"
                          src={imagePreview ? imagePreview : grouppic}
                        />
                      )}
                      {!imagePreview && <img className="messagegrouppre" src={grouppic} />}
                    </div>
                    <input type="file" id="messagegrouppic" onChange={handleImageChange} style={{ display: "none" }} />
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
                  <label>Id</label>
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
  )
}

export default Companies