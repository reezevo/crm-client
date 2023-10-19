import React, { useEffect, useRef, useState } from 'react';
import './agent.scss'
import Addoption from '../../components/Addoption';
import AgentList from '../Agents/AgentList';
import ClientList from '../Clients/ClientList';
import { AiOutlineSearch } from 'react-icons/ai';
import {BsThreeDots} from 'react-icons/bs';
import Properties from '../Properties/Properties';
import { getAgenttById, linkAgentToClient, linkAgentToProperty, searchClient, searchProperty } from '../../../services/apiservice';
import { Link, useParams } from 'react-router-dom';
import { debounce } from 'lodash';
import Modal from '../../../components/modal/Modal';
import PropertyList from '../Properties/Property';
function Profile() {

  const agentId = useParams().id
	// const [inventoryId, setinventoryId] = useState()
	const [modal, setModal] = useState(false);
	const [modalc, setModalc] = useState(false);
	const [searchTerm, setSearchTerm] = useState('');
	const [searchTermc, setSearchTermc] = useState('');
  const [propertyList, setpropertytList] = useState('');
	const [clientList, setclientList] = useState('');
	const [users, setUsers] = useState([]);
	const [usersc, setUsersc] = useState([]);
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

	const getagent = async() =>{
	   const res = await getAgenttById(agentId)
     setprofiledata(res)
	   setclientList(res.client)
	   setpropertytList(res.inventory)
	console.log(res)
	}
	
	getagent()
   }, [agentId])

	  const handleSearch = async () => {
        try {
        if(searchTerm != ''){
          const response = await searchProperty(searchTerm);
           
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

	  const onAddProperty = (inventoryId) => {
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
		  agentId,
		  clientId,
		};
	  
		const res = linkAgentToClient(ids);
	  };
  return (
    <div>

              <div className="card">
                <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                  <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '200px' }}>
                    <img src={PF+profiledata.profilePic} alt="Generic placeholder image" className="img-fluid img-thumbnail mt-5 mb-4" style={{ width: '150px',height:'150px', zIndex: 1 }} />
                    <div className="" style={{ zIndex: 1 }}>
                  
                  
                  </div>
                  </div>
                  <div className="ms-3 w-100 row" style={{ marginTop: '130px',   }}>
                  <div className='col-8'>
                  <h5 class="text-white">{profiledata.userName}</h5>
                    <p>{profiledata.employeeId}</p>
                  </div>
                  <div className='col-3 d-flex justify-content-end'>
                 <div className='profile-button'>Call</div>
                 <div className='profile-button'>Whatsapp</div>
                 <div className='profile-button'><BsThreeDots/></div>
                  </div>
               
                  </div>
                </div>
                <div className="p-3 text-black" style={{ backgroundColor: '#f8f9fa', height:'50px' }}>
                </div>
                <div className=" pt-4 text-black" >
                  <div className="mb-5 p-4"  style={{ backgroundColor: '#f8f9fa' }}>
                  <p className="lead fw-normal mb-1 text-dark">Contact Info</p>
                    <div className="p-4 row">
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark " >Full Name</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.fullName}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Email</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.email}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Phone number</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.phone}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Employee Id</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.employeeId}</h5>
                    </div>
                    <div className='col-4 mt-4'>
                    <h5 class="text-dark" >Emirates Id</h5>
                    <h5 class="text-black" style={{ marginTop: '0' }}>{profiledata.emirateId}</h5>
                    </div>

                    </div>
                  </div> 
                </div>
              </div>
							<h4 className="fs-30 font-w600 my-3">Assigned Client</h4>
							<Addoption addhead={'Client'} setmodal={setModalc}/>
							<ClientList clientList={clientList}/>
              <h4 className="fs-30 font-w600 my-3">Assigned Property</h4>
              <Addoption addhead={'Property'} setmodal={setModal}/>
              <PropertyList propertyList={propertyList}/>

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
						<div className='search-usera' key={user._id} >
            
						<img
								className='postProfilePic'
								src={PF+user.productPic}
								alt={PF + 'person/noAvatar.png'}
							/>
						<Link  className="search-linka" to={`/activity/${user._id}`} onClick={() => setSearchTerm("")}>{user.name}</Link>
						<button onClick={()=>onAddProperty(user._id)} className="btn btn-primary"> Add </button>
           
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
						<div  key={user._id} >
            <div className='search-user'>
            <div className="search-linka" >
              <Link  to={`/activity/${user._id}`} onClick={() => setSearchTermc("")}>{user.name}</Link>
              </div>
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
         
  );
}

export default Profile;
