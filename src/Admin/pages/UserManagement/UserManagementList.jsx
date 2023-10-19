import React from 'react';
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';
//images

import fram1 from './../../../customers/Frame3.jpg';
import fram2 from './../../../customers/Frame4.jpg';
import cust1 from './../../../customers/3.jpg';
import cust2 from './../../../customers/11.jpg';
import cust3 from './../../../customers/22.jpg';
import cust4 from './../../../customers/33.jpg';
import cust5 from './../../../customers/44.jpg';
import cust6 from './../../../customers/55.jpg';




function Dropdownblog2(){
	return(
		<>
			<Dropdown className="dropdown ms-4  mt-auto mb-auto">
				<Dropdown.Toggle as="div" className="btn-link i-false" data-bs-toggle="dropdown" >
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z" stroke="#737B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z" stroke="#737B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z" stroke="#737B8B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</Dropdown.Toggle>
				<Dropdown.Menu className="dropdown-menu dropdown-menu-right" >
					<Dropdown.Item className="dropdown-item">Edit</Dropdown.Item>
					<Dropdown.Item className="dropdown-item">Delete</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</>
	)
} 

const CustomerCard = [
	{ image: cust1, title:'John Doe', location:'South Market 1st London 24512', },
	{ image: cust2, title:'Angela Moss', location:'TY35 Avenue GG London Center', },
	{ image: cust3, title:'Munaroh Steffanic', location:'South Market 1st London 24512', },
	{ image: cust4, title:'Geovanny Anderson', location:'TY35 Avenue GG London Center', },
	{ image: cust5, title:'Louis Ali', location:'South Market 1st London 24512', },
	{ image: cust6, title:'Richard Nainggolan', location:'TY35 Avenue GG London Center', },
];


function UserManagementList() {
  return (
    
		<>
			{CustomerCard.map((item,index)=>(
				<div className="col-xl-12" key={index}>
					<div className="card">
						<div className="card-body">
							<div className="row">
								<div className="col-xl-3  col-lg-6 col-sm-12 align-items-center customers">
									<img className="me-sm-4 me-3 img-fluid " width="95" src={item.image} alt="DexignZone" />
									<div className="media-body">
										<span className="text-primary d-block fs-16">#C01234</span>
										<h3 className="fs-20 text-black font-w600">{item.title}</h3>
										<span className="d-block mb-lg-0 mb-0">Join on 26/04/2020, 12:42 AM</span>
									</div>
								</div>
								<div className="col-xl-2  col-lg-3 col-sm-4  col-6 mb-3">
									<small className="mb-3 d-block fs-16 ">Role</small>
									<h4 className="text-black font-w600">Agent</h4>
								</div>
								<div className="col-xl-2 col-lg-3 col-sm-4 col-6 mb-3 text-lg-center">
									<small className="mb-3 d-block fs-16">Phone Number</small>
									<h4 className="text-black font-w600">+51 1234 5678</h4>
								</div>
								<div className="col-xl-2  col-lg-6 col-sm-4 mb-sm-3 mb-3">
									<small className="mb-3 d-block fs-16">Email Address</small>
									<h4 className="text-black font-w600">robertpatinson@mail.com</h4>
								</div>
								<div className="col-xl-3  col-lg-6 col-sm-6 mb-sm-4 mb-0 d-flex ">
						
									<Dropdownblog2 />
								</div>
							</div>
							
						</div>
					</div>
				</div>	
			))}
		</>
	
  )
}

export default UserManagementList