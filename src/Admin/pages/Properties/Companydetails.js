import React from 'react';
import {Link} from 'react-router-dom';
// import PageHead from '../Griya/PageHead';
import ProfileSlider from './ProfileSlider';
import GallerySlider from './GallerySlider';

//Image
import pic1 from './../../../images/avatar/pic1.jpg';
import Properties from './Properties';
import AgentList from '../Agents/AgentList';
import Addoption from '../../components/Addoption';

const Companydetails = () =>{
	
	return(
		<>
			{/* <PageHead activePage="Property Details"  pageName="221 XYZ Franklin State London" />	 */}
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body pb-3">
							<ProfileSlider address={"Midnight Corner St. Suite 600 San Francisco, CADGE 94107"} product={false}/>
							<div className="card-body p-sm-3 p-0 ">
								<div className="row">
								<div className="col-xl-3 col-xxl-4">
										<div className="my-profile mb-5">
											<div className="avtar mb-3 text-center">
												<img src={pic1} alt="" />
											</div>
											<div className="text-center ">
												<h4 className="text-black fs-20 font-w600">Samuel Rodriguez</h4>
												<div class="d-flex justify-content-center">
													<p class="fs-16 mx-2">Phone No:</p>
													<p class="fs-16  text-black mx-2">0505332431</p>
												</div>
												<div class="d-flex justify-content-center">
													<p class="fs-16 mx-2">Email Id:</p>
													<p class="fs-16  text-black mx-2">test@test.com</p>
												</div>
												<div class="d-flex justify-content-center">
													<p class="fs-16 mx-2">Developer Id:</p>
													<p class="fs-16  text-black mx-2">D12</p>
												</div>
												</div>	
											<ul className="property-social">
												<li><Link to={"#"}><i className="lab la-instagram"></i></Link></li>
												<li><Link to={"#"}><i className="lab la-facebook-f"></i></Link></li>
												<li><Link to={"#"}><i className="lab la-twitter"></i></Link></li>
											</ul>
										</div>	
										<div className="mb-5">
											
											<div className="bg-primary text-center price mb-4">
												<div className="card-body">
													<p className="fs-16 text-white mb-0">Number of Properties</p>
													<h2 className="fs-30 text-white mb-0 font-w600">12</h2>
												</div>	
											</div>
											<div className="bg-primary text-center price mb-4">
												<div className="card-body">
													<p className="fs-16 text-white mb-0">Number of Units</p>
													<h2 className="fs-30 text-white mb-0 font-w600">17</h2>
												</div>	
											</div>
										</div>
																			
									</div>
									<div className="col-xl-9 col-xxl-8 mx-auto ">
										<div className="mb-5">
										
											<h4 className="text-black fs-30 font-w600 mb-3">Description</h4>
											<p className="fs-16">vaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
											<p className="fs-16">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum </p>
										</div>
									
										<div className="mb-5">
											<h4 className="fs-30 font-w600 mb-3">Location</h4>
											<div>
												<div className="responsive-map">
													<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2822.7806761080233!2d-93.29138368446431!3d44.96844997909819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x52b32b6ee2c87c91%3A0xc20dff2748d2bd92!2sWalker+Art+Center!5e0!3m2!1sen!2sus!4v1514524647889" title="myFrame" width="600" height="300" style={{border:"0"}} allowFullScreen></iframe>
												</div>
											</div>
										</div>
										<div>
											<h4 className="fs-30 font-w600 my-3">Apartmnets</h4>
											<Properties/>
										</div>
									</div>	
								</div>
							</div>		
						</div>	
					</div>	
				</div>
			</div>	
		</>		
	)
}
export default Companydetails;