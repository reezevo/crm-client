import { lazy, Suspense, useEffect, useState } from 'react';

import './App.css';
import "./vendor/bootstrap-select/dist/css/bootstrap-select.min.css";
import "./css/style.css";
import {  Route, Routes, useLocation , useNavigate , useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './redux/userreducer';

import Spinner from './components/Spinner/Spinner';
import PageHead from './Admin/components/PageHead';
import Profile from './Admin/pages/Agents/Profile';



const Sidebar = lazy(() => import('./components/Sidebar/SideBar'));
const Login = lazy(() => import('./Pages/Login/Login'));

const AdminHome = lazy(() => import('./Admin/pages/Home/Home'));
const Properties = lazy(() => import('./Admin/pages/Properties/Properties'));
const Companies = lazy(() => import('./Admin/pages/Properties/Companies'));
const PropertyDetails = lazy(() => import('./Admin/pages/Properties/PropertyDetails'));
const Companydetails = lazy(() => import('./Admin/pages/Properties/Companydetails'));
const Client = lazy(() => import('./Admin/pages/Clients/Client'));
const Agent = lazy(() => import('./Admin/pages/Agents/Agent'));
const EventCalendar = lazy(() => import('./Admin/pages/Calendar/EventCalendar'));
const Pipeline = lazy(() => import('./Admin/pages/Pipeline/Pipeline'));
const UserManagement = lazy(() => import('./Admin/pages/UserManagement/UserManagement'));
const ClientProfile = lazy(() => import('./Admin/pages/Clients/Profile'));
const AgentProfile = lazy(() => import('./Admin/pages/Agents/Profile'));


const AgentHome = lazy(() => import('./Agent/Pages/Home/Home'));



function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [param, setparam] = useState("")
  const [togglebar, settogglebar] = useState(false)
  const [currentLocation, setCurrentLocation] = useState(null);
const [type, settype] = useState(null)
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    settype(user?.profileType);
  }, [user]);

  useEffect(() => {
    const currentPathname = window.location.pathname;
    const segments = currentPathname.split('/'); // Split the pathname into segments
    const firstSegment = segments[1]; // Get the first segment
  
    // Check if the first segment contains a hyphen and split it
    const firstSegmentParts = firstSegment.split('-');
    const formattedSegment = firstSegmentParts
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  
    setparam(formattedSegment);
  }, [window.location.pathname]);




//  useEffect(() => {
//     // Check if user is null and the current route is '/home'
    
//     if (!user && location.pathname === '/home') {
//       // Redirect to '/agentlogin'
//       console.log(type)
//       navigate('/agentlogin');
//     }
//   }, [user, location.pathname]);

  let routeAuth = ( 

    <Routes>
        <Route path='/login' element={<Login />} />
    </Routes> 

    
);
  let routeAgent = ( 
    <Routes>
        <Route exact path='/dashboard' element={<AgentHome />} />
    </Routes> 
);
  let routeAdmin = ( 
    <Routes>
        <Route path='/dashboard' element={<AdminHome />} />
        <Route path='/properties' element={<Properties />} />
        <Route path='/companies' element={<Companies />} />
        <Route path='/property-details/:id' element={<PropertyDetails />} />
        <Route path='/company-details/:id' element={<Companydetails />} />
        <Route path='/client' element={<Client/>} />
        <Route path='/agent' element={<Agent/>} />
        <Route path='/calender' element={<EventCalendar/>} />
        <Route path='/pipeline' element={<Pipeline/>} />
        <Route path='/user-management' element={<UserManagement/>} />
        <Route path='/client-profile/:id' element={<ClientProfile/>} />
        <Route path='/agent-profile/:id' element={<AgentProfile/>} />
    </Routes> 
);

if(type){
  if(type == 'admin')
  {
     
  console.log(window.location.pathname, user)
    return(
      <Suspense fallback={<Spinner/>}>
          <Sidebar togglebar={togglebar} settogglebar={settogglebar}/>
          <div className={` ${togglebar ? 'onsidebaractivetop' : 'onsidebartop'}`}>
          <PageHead activePage={param}  pageName={param} />
          </div>
      <div className={` ${togglebar ? 'onsidebaractive' : 'onsidebar'} p-3`}>{routeAdmin}</div>
      </Suspense>
      )
  }
  else{
    return(
    <Suspense fallback={<Spinner/>}>
     <Sidebar togglebar={togglebar} settogglebar={settogglebar}/>
          <div className={` ${togglebar ? 'onsidebaractivetop' : 'onsidebartop'}`}>
          <PageHead activePage={param}  pageName={param} />
          </div>
      {routeAgent}
    </Suspense>
    )
  }
}else{
 
  console.log(window.location.pathname, type)
  return(
    <Suspense fallback={<Spinner/>}>
      {routeAuth}
    </Suspense>
  )
}
}

export default App;
