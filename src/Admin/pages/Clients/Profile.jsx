import React, { useEffect, useRef, useState } from 'react';
import './clients.scss'
import Addoption from '../../components/Addoption';
import AgentList from '../Agents/AgentList';
import ClientList from '../Clients/ClientList';
import {Link} from 'react-router-dom';
import {BsThreeDots} from 'react-icons/bs';
import Properties from '../Properties/Properties';
import { changePipeline, getClientById, linkAgentToClient, linkClientToProperty, searchProperty, searchtAgent } from '../../../services/apiservice';
import { useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import Modal from '../../../components/modal/Modal';
import { AiOutlineSearch } from 'react-icons/ai';
import PropertyList from '../Properties/Property';
import { useSelector } from 'react-redux';
function Profile() {
  const user = useSelector((state) => state.user.user);
  const clientId = useParams().id
  const [modal, setModal] = useState(false);
	const [modalc, setModalc] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchTermc, setSearchTermc] = useState('');
	const [agentList, setagentList] = useState(null);
	const [propertyList, setpropertytList] = useState(null);
	const [users, setUsers] = useState([]);
	const [usersc, setUsersc] = useState([]);
  const [pipelinestatus, setpipelinestatus] = useState("")
  const [profiledata, setprofiledata] = useState("")
	const modalRef = useRef(null);
  const PF = "https://unifeed.s3.ap-south-1.amazonaws.com/";
	const handleCloseModal = () => {
		setModal(false);
	  };
	const handleCloseModalc = () => {
		setModalc(false);
	  };



useEffect(() => {

	const getclient = async() =>{
	   const res = await getClientById(clientId)
     setprofiledata(res)
	   setagentList(res.agent)
	   setpropertytList(res.inventory)
     setpipelinestatus(res.pipelinestatus)
	}
	
	getclient()
   }, [clientId])

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
		  clientId,
		  agentId,
		};
	  
		const res = linkAgentToClient(ids);
	  };






	  const handleSearchc = async () => {
        try {
        if(searchTermc != ''){
          const response = await searchProperty(searchTermc);
           
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


	  const onAddProperty= (inventoryId) => {
		console.log(clientId)
		const ids = {
		  inventoryId,
		  clientId,
		};
	  
		const res = linkClientToProperty(ids);
	  };

    const handlepipelinestatus = (status) => {
      
      changePipeline(pipelinestatus, status ,user?.pipeline,clientId).then(
        res => setpipelinestatus(status)
      )
    }
  return (
    <div>

              <div className="card">
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Generic placeholder image" className="img-fluid img-thumbnail mt-5 mb-4" style={{ width: '150px', zIndex: 1 }} />
                    <div className="" style={{ zIndex: 1 }}>
                    <p className="lead fw-normal mb-1 text-dark">Status</p>

                    <div className='row' style={{ width: '750px' }}>
                    <button
                      type="button"
                      className={`btn btn-outline-dark col-2 me-3 btn-lg ${
                        pipelinestatus === 'new' ? 'active' : ''
                      }`}
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                      onClick = {()=>handlepipelinestatus("new")}
                    >
                      New
                    </button>
                    <button
                      type="button"
                      className={`btn btn-outline-dark col-2 me-3 btn-lg ${
                        pipelinestatus === 'prospect' ? 'active' : ''
                      }`}
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                      onClick = {()=>handlepipelinestatus("prospect")}
                    >
                      Prospect
                    </button>
                    <button
                      type="button"
                      className={`btn btn-outline-dark col-2 me-3 btn-lg ${
                        pipelinestatus === 'viewing' ? 'active' : ''
                      }`}
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                      onClick = {()=>handlepipelinestatus("viewing")}
                    >
                      Viewing
                    </button>
                    <button
                      type="button"
                      className={`btn btn-outline-dark col-2 me-3 btn-lg ${
                        pipelinestatus === 'close' ? 'active' : ''
                      }`}
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                      onClick = {()=>handlepipelinestatus("close")}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className={`btn btn-outline-dark col-2 me-3 btn-lg ${
                        pipelinestatus === 'rejected' ? 'active' : ''
                      }`}
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: 1 }}
                      onClick = {()=>handlepipelinestatus("rejected")}
                    >
                      Rejected
                    </button>
                    </div>
                  
                  </div>
                  </div>
                  <div className="ms-3 w-100 row" style={{ marginTop: '130px',   }}>
                  <div className='col-8'>
                  <h5 class="text-white">{profiledata.name}</h5>
                    <p>{profiledata.country}</p>
                  </div>
                  <div className='col-3 d-flex justify-content-end'>
                 <div className='profile-button'>Call</div>
                 <div className='profile-button'>Whatsapp</div>
                 <div className='profile-button'><BsThreeDots/></div>
                  </div>
               
                  </div>
                </div>
                <div className="p-3 text-black" style={{ backgroundColor: '#f8f9fa', height:'200px' }}>
                </div>
                <div className=" pt-4 text-black" >
                  <div className="mb-5 p-4"  style={{ backgroundColor: '#f8f9fa' }}>
                  <p className="lead fw-normal mb-1 text-dark">Contact Info</p>
                    <div className="p-4 row">
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark " >Full Name</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.name}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Email</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.email}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Location</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.country}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Phone number</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.phone}</h5>
                    </div>

                    </div>
                  </div> 
                </div>
              </div>
              <h4 className="fs-30 font-w600 my-3">Assigned Property</h4>
              <Addoption addhead={"Property"} setmodal={setModalc} />
              <PropertyList propertyList={propertyList}/>
              <h4 className="fs-30 font-w600 my-3">Assigned Agent</h4>
							<Addoption addhead={'Agent'} setmodal={setModal}/>
							<AgentList agentList={agentList}/>


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
						<div className='search-user' key={user._id} >
						<img
								className='postProfilePic'
								src={PF+user.productPic}
								alt={PF + 'person/noAvatar.png'}
							/>
						<Link  className="search-link" to={`/activity/${user._id}`} onClick={() => setSearchTermc("")}>{user.name}</Link>
						<button onClick={()=>onAddProperty(user._id)} className="btn btn-primary"> Add </button>
						<div className='line'></div>
						</div>
					))}
					</div>
					</div>
      				</Modal>
            </div>
         
  );
}

export default Profile;
