import React from 'react'
import OverView from '../../../components/OverView'
import { useDispatch, useSelector } from 'react-redux';
import { clearUser } from '../../../redux/userreducer';
import { useNavigate } from 'react-router-dom'
import Sidebar from '../../../components/Sidebar/SideBar';
function Home() {
  const navigate = useNavigate();
const dispatch = useDispatch();


  const logout =() => {
    localStorage.removeItem("mytime");
    navigate('/login')
    dispatch(clearUser());

  
  }
  return (
    <div>
    fvmls
    <button onClick={logout}>
    logout
  </button>
    
    </div>
  )
}

export default Home