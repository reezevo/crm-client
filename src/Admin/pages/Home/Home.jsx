import React from 'react'
import OverView from '../../../components/OverView'
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../../redux/userreducer';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar/SideBar';
import Table from '../../../components/Tables';
import BarChart6 from '../../../components/bar6';
import Infobox from '../../../components/Infobox';
import './home.scss'
function Home() {
  const navigate = useNavigate();
const dispatch = useDispatch();


  const logout =() => {
    localStorage.removeItem("token");
    navigate('/login')
    dispatch(clearUser());

  
  }
  return (
    <div>
    <div className='adminhome'>

    <Infobox/>
    <OverView/>
    <Table/>
    <BarChart6/>
  <button onClick={logout}>
    logout
  </button>

  </div>
  </div>
  )
}

export default Home