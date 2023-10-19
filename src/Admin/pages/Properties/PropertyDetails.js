import React, { useEffect, useRef, useState } from 'react';
import {Link} from 'react-router-dom';
// import PageHead from '../Griya/PageHead';
import ProfileSlider from './ProfileSlider';
import Modal from '../../../components/modal/Modal';
import GallerySlider from './GallerySlider';
import { AiOutlineSearch } from 'react-icons/ai';
import { debounce, set } from 'lodash';
import { useParams } from 'react-router-dom';
//Image
import pic1 from './../../../images/avatar/pic1.jpg';
import Addoption from '../../components/Addoption';
import AgentList from '../Agents/AgentList';
import ClientList from '../Clients/ClientList';
import { getAgentproperty, getClientproperty, linkAgentToProperty, linkClientToProperty, searchClient, searchtAgent, searchtClient } from '../../../services/apiservice';
const PF = "https://unifeed.s3.ap-south-1.amazonaws.com/";

const PropertyDetails = () =>{
	const inventoryId = useParams().id
	// const [inventoryId, setinventoryId] = useState()
	const [modal, setModal] = useState(false);
	const [modalc, setModalc] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchTermc, setSearchTermc] = useState('');
	const [agentList, setagentList] = useState('');
	const [clientList, setclientList] = useState('');
	const [users, setUsers] = useState([]);
	const [usersc, setUsersc] = useState([]);
	const modalRef = useRef(null);
	const handleCloseModal = () => {
		setModal(false);
	  };
	const handleCloseModalc = () => {
		setModalc(false);
	  };



useEffect(() => {

	const getagent = async() =>{
	   const res = await getAgentproperty(inventoryId)
	   setagentList(res.agent)
	   setclientList(res.client)
	console.log(res)
	}
	
	getagent()
   }, [inventoryId])

	  const handleSearch = async () => {
        try {
        if(searchTerm != ''){
          const response = await searchtAgent(searchTerm);
           
          setUsers(response);
        }else{
            setUsers([])
        }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };

    const handlechange = (event) => {
        setSearchTerm(event.target.value);
      };

      const debouncedSearch = debounce(handleSearch, 500);

      useEffect(() => {

        debouncedSearch();

        return () => debouncedSearch.cancel();
      }, [searchTerm]);

      const handleClickList = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
        setUsers([])
        setSearchTerm("")

        }
      }
    
      useEffect(() => {
        // Add event listener to listen for mousedown events on the document
        document.addEventListener('mousedown', handleClickList);
      
        // Remove the event listener when the component is unmounted
        return () => {
          document.removeEventListener('mousedown', handleClickList);
        };
      }, []);

	  const onAddAgent = (agentId) => {
		console.log(agentId)
		const ids = {
		  inventoryId,
		  agentId,
		};
	  
		const res = linkAgentToProperty(ids);
	  };






	  const handleSearchc = async () => {
        try {
        if(searchTermc != ''){
          const response = await searchClient(searchTermc);
           
          setUsersc(response);
        }else{
            setUsersc([])
        }
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };


	  const handlechangec = (event) => {
        setSearchTermc(event.target.value);
      };

      const debouncedSearchc = debounce(handleSearchc, 500);

      useEffect(() => {

        debouncedSearchc();

        return () => debouncedSearchc.cancel();
      }, [searchTermc]);


	  const handleClickListc = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
        setUsersc([])
        setSearchTermc("")

        }
      }


	  useEffect(() => {
        // Add event listener to listen for mousedown events on the document
        document.addEventListener('mousedown', handleClickListc);
      
        // Remove the event listener when the component is unmounted
        return () => {
          document.removeEventListener('mousedown', handleClickListc);
        };
      }, []);


	  const onAddClient = (clientId) => {
		console.log(clientId)
		const ids = {
		  inventoryId,
		  clientId,
		};
	  
		const res = linkClientToProperty(ids);
	  };
	return(
		<>
			{/* <PageHead activePage="Property Details"  pageName="221 XYZ Franklin State London" />	 */}
			<div className="row">
				<div className="col-xl-12">
					<div className="card">
						<div className="card-body pb-3">
							<ProfileSlider />
							<div className="card-body p-sm-3 p-0">
								<div className="row ">
								<div className="col-xl-9 col-xxl-8 mx-auto d-flex ">
									<div className="col-xl-3 col-xl-4 mx-auto">
										
										<div className="mb-5">
											<h4 className="font-w600 mb-3 Price">Price</h4>
											<div className="bg-primary text-center price mb-4">
												<div className="card-body">
													<p className="fs-16 text-white mb-0">Start from</p>
													<h2 className="fs-30 text-white mb-0 font-w600">$ 500,000</h2>
													<p className="fs-18 text-white mb-0">until $1,000k</p>
												</div>	
											</div>
										</div>
																		
									</div>
									<div className="col-xl-3 col-xl-4  mx-auto">
										
										<div className="mb-5">
											<h4 className="font-w600 mb-3 Price">Price</h4>
											<div className="bg-primary text-center price mb-4">
												<div className="card-body">
													<p className="fs-16 text-white mb-0">Start from</p>
													<h2 className="fs-30 text-white mb-0 font-w600">$ 500,000</h2>
													<p className="fs-18 text-white mb-0">until $1,000k</p>
												</div>	
											</div>
										</div>
																		
									</div>
									</div>
									<div className="col-xl-9 col-xxl-8  mx-auto">
										<div className="mb-5">
											<h4 className="text-black fs-30 font-w600 mb-3">Description</h4>
											<p className="fs-16">vaboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
											<p className="fs-16">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum </p>
										</div>
										<div className="mb-5">
											<h4 className="fs-30 font-w600 mb-3">Gallery</h4>
											<GallerySlider />
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
											<h4 className="fs-30 font-w600 my-3">Features</h4>
											<ul className="property-features">
												<li><i className="fas fa-check-circle"></i>Swimming pool</li>
												<li><i className="fas fa-check-circle"></i>Terrace</li>
												<li><i className="fas fa-check-circle"></i>Radio</li>
												<li><i className="fas fa-check-circle"></i>Grill</li>
												<li><i className="fas fa-check-circle"></i>Cable TV</li>
												<li><i className="fas fa-check-circle"></i>Air conditioning</li>
												<li><i className="fas fa-check-circle"></i>Cofee pot</li>
												<li><i className="fas fa-check-circle"></i>Balcony</li>
												<li><i className="fas fa-check-circle"></i>Computer</li>
												<li><i className="fas fa-check-circle"></i>Parquet</li>
												<li><i className="fas fa-check-circle"></i>Internet</li>
												<li><i className="fas fa-check-circle"></i>Towelwes</li>
												<li><i className="fas fa-check-circle"></i>Roof terrace</li>
												<li><i className="fas fa-check-circle"></i>Oven</li>
											</ul>
										</div>
									</div>	
								</div>
							</div>	
							<h4 className="fs-30 font-w600 my-3">Agent</h4>
							<Addoption addhead={'Agent'} setmodal={setModal} />
							<AgentList agentList={agentList}/>
							<h4 className="fs-30 font-w600 my-3">Client</h4>
							<Addoption addhead={'Client'} setmodal={setModalc}/>
							<ClientList clientList={clientList}/>	
						</div>	
					</div>	
				</div>
{/* agnet */}
				<Modal showModal={modal} handleCloseModal={handleCloseModal}>
				<div ref={modalRef} className='serach'>

					<div className="tb-middle-div">
					<div className="tb-search">
						<AiOutlineSearch
						className="tb-search-icon"
						fontSize={25}
						></AiOutlineSearch>
						<input
						type="text"
						className="tb-search-input"
						placeholder="Search agent"
						value={searchTerm}
						onChange={handlechange}
						/> 
					</div>
					</div>

			
					<div className="search-list" >
					<div className='line'></div>
					{users.map((user) => (
						<div className='search-user' key={user._id} >
						<img
								className='postProfilePic'
								src={PF+user.profilePic}
								alt={PF + 'person/noAvatar.png'}
							/>
						<Link  className="search-link" to={`/activity/${user._id}`} onClick={() => setSearchTerm("")}>{user.userName}</Link>
						<button onClick={()=>onAddAgent(user._id)} className="btn btn-primary"> Add </button>
						<div className='line'></div>
						</div>
					))}
					</div>
					</div>
      				</Modal>
					  

				<Modal showModal={modalc} handleCloseModal={handleCloseModalc}>
				<div ref={modalRef} className='serach'>

					<div className="tb-middle-div">
					<div className="tb-search">
						<AiOutlineSearch
						className="tb-search-icon"
						fontSize={25}
						></AiOutlineSearch>
						<input
						type="text"
						className="tb-search-input"
						placeholder="Search agent"
						value={searchTermc}
						onChange={handlechangec}
						/> 
					</div>
					</div>

			
					<div className="search-list" >
					<div className='line'></div>
					{usersc.map((user) => (
						<div key={user._id} >
						<div  className='search-user'>
						<Link  className="search-linka" to={`/activity/${user._id}`} onClick={() => setSearchTermc("")}>{user.name}</Link>
						<button onClick={()=>onAddClient(user._id)} className="btn btn-primary"> Add </button>
						</div>
						{/* <img
								className='postProfilePic'
								src={PF+user.profilePic}
								alt={PF + 'person/noAvatar.png'}
							/> */}
						
						<div className='line'></div>
						</div>
					))}
					</div>
					</div>
      				</Modal>
			</div>	
		</>		
	)
}
export default PropertyDetails;