import React, { useEffect, useState } from 'react'
import './sidebar.scss'
import {AiFillHome} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiSolidMessage} from 'react-icons/bi'
import {MdGroups3} from 'react-icons/md'

import {RiProfileLine} from 'react-icons/ri';
import {BiRun} from 'react-icons/bi';
import {BiMap} from 'react-icons/bi';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineDashboard} from 'react-icons/ai';
import {AiOutlinePieChart} from 'react-icons/ai';
import {AiOutlineFolder} from 'react-icons/ai';
import {BiEdit} from 'react-icons/bi';
import {BsBook} from 'react-icons/bs';
import {BsFlag} from 'react-icons/bs';
import {BsBuildings} from 'react-icons/bs';
import {BsPeople} from 'react-icons/bs';
import {BsPerson} from 'react-icons/bs';
import {BsCalendarEvent} from 'react-icons/bs';
import {BsCalendarDate} from 'react-icons/bs';
import {BsCreditCard} from 'react-icons/bs';
import {  useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



function Sidebar({togglebar,settogglebar }) {

  const currentuser = useSelector((state) => state.user.user);
  const [user, setuser] = useState(null)
  const [id, setid] = useState(null)


useEffect(() => {
  setuser(currentuser?.profileType)
  setid(currentuser?._id)
}, [currentuser])

  
  if(user==="admin"){
  return (
    <div className={`sidebar ${togglebar ? 'sidebaractive' : ''}`}>
      {/* Your sidebar content */}
      <div className='sidebarList'>
      <div className='sidebarSet'>
      <AiOutlineMenu className='sidebarIconbar' onClick={() => settogglebar(!togglebar)}/>
      <div className={`sidebarTextbar ${!togglebar ? 'sidebarTexthide' : ''}`}>Menu</div>
      </div>
      
      
      <Link to="/dashboard"  className='sidebarlink'>
      <div className='sidebarSet'>
      <AiOutlineDashboard className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Dashboard</div>
      </div>
      </Link>


      <Link to={`/companies`} className='sidebarlink'>
      <div className='sidebarSet'>
      <BsBuildings className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Companies</div>
      </div>
      </Link>

      <Link to={`/marketing`} className='sidebarlink'>
      <div className='sidebarSet'>
      <BsFlag className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Marketing</div>
      </div>
      </Link>

      <Link to={`/client`} className='sidebarlink'>
      <div className='sidebarSet'>
      <BsPerson className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Clients</div>
      </div>
      </Link>
   

      <Link to="/pipeline" className='sidebarlink'>
      <div className='sidebarSet'>
      <AiOutlinePieChart className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Pipeline</div>
      </div>
      </Link>

     

      <Link to={`/agent`} className='sidebarlink'>
      <div className='sidebarSet'>
      <BsPeople className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Agents</div>
      </div>
      </Link>

      <Link to={`/agent`} className='sidebarlink'>
      <div className='sidebarSet'>
      <BsCreditCard className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Sales</div>
      </div>
      </Link>

     

      <Link to="/calender" className='sidebarlink'>
      <div className='sidebarSet'>
      <BsCalendarDate className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Calendar</div>
      </div>
      </Link>

      
      
      <Link to="/messages" className='sidebarlink'>
      <div className='sidebarSets'>
      <BiMap className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Maps</div>
      </div>
      </Link>

      <Link to="/activity" className='sidebarlink'>
      <div className='sidebarSet'>
      <BiEdit className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Accounts</div>
      </div>
      </Link>

      <Link to="/activity" className='sidebarlink'>
      <div className='sidebarSet'>
      <AiOutlineFolder className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>HRM</div>
      </div>
      </Link>
      <Link to="/user-management" className='sidebarlink'>
      <div className='sidebarSet'>
      <AiOutlineFolder className='sidebarIcon'/>
      <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>User Management</div>
      </div>
      </Link>

      </div>
    </div>
  
  )
  }


  else{
    return (
    <div className={`sidebar ${togglebar ? 'sidebaractive' : ''}`}>
    {/* Your sidebar content */}
  
    <div className='sidebarList'>
    <div className='sidebarSet'>
    <GiHamburgerMenu className='sidebarIconbar' onClick={() => settogglebar(!togglebar)}/>
    <div className={`sidebarTextbar ${!togglebar ? 'sidebarTexthide' : ''}`}>Menu</div>
    </div>
    

    <Link to="/college/home"  className='sidebarlink'>
    <div className='sidebarSet'>
    <AiFillHome className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Home</div>
    </div>
    </Link>


    <Link to={`/college/profile/${id}`} className='sidebarlink'>
    <div className='sidebarSet'>
    <RiProfileLine className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Profile</div>
    </div>
    </Link>


    <Link to="/messages" className='sidebarlink'>
    <div className='sidebarSet'>
    <BiSolidMessage className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Chatroom</div>
    </div>
    </Link>


    <Link to="/tasks" className='sidebarlink'>
    <div className='sidebarSet'>
    <BiRun className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Activity</div>
    </div>
    </Link>


    <Link to="/event" className='sidebarlink'>
    <div className='sidebarSet'>
    <BsCalendarEvent className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Events</div>
    </div>
    </Link>

{/* 
    <Link to="/college/list" className='sidebarlink'>
    <div className='sidebarSet'>
    <BiSolidInstitution className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Campus</div>
    </div>
    </Link> */}

    <Link to="/club" className='sidebarlink'>
    <div className='sidebarSet'>
    <MdGroups3 className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Clubs</div>
    </div>
    </Link>


    <Link to="/course" className='sidebarlink'>
    <div className='sidebarSet'>
    <BsBook className='sidebarIcon'/>
    <div className={`sidebarText ${!togglebar ? 'sidebarTexthide' : ''}`}>Learn Dash</div>
    </div>
    </Link>

  

   
    

    </div>
  </div>
)
  }
}

export default Sidebar