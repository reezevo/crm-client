import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import {Dropdown} from 'react-bootstrap';

function Addoption({addhead, setmodal}) {
    const [data, setData] = useState("Newest")

  return (
    <div className="col-xl-12">
    <div className="d-flex flex-wrap">
        <Link to={"#"} className="btn btn-dark me-3 mb-3" onClick={()=>setmodal(true)}>+ New {addhead}</Link>
        <div className="table-search mb-3 pe-3">	
            <div className="input-group search-area">
                <input type="text" className="form-control" placeholder="Search customer name here" />
                <span className="input-group-text">
                    <Link to={"#"}><i className="flaticon-381-search-2"></i></Link>
                </span>
            </div>
        </div>	
        <div className="newest mb-3 me-3">
            <Dropdown className="default-select-btn">
                <Dropdown.Toggle as="div" className="form-control btn i-false">
                    {data} <i className="fas fa-angle-down scale4 text-primary ms-1 pt-1"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    <Dropdown.Item onClick={()=>setData("Newest")}>Newest</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setData("Oldest")}>Oldest</Dropdown.Item>
                    <Dropdown.Item onClick={()=>setData("Newest")}>Newest</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>	
        <Link to={"#"} className="btn btn-dark me-3 mb-3"><i className="fas fa-calendar me-3"></i>Filter</Link>
        <Link to={"#"} className="btn btn-warning mb-3"><i className="fas fa-redo-alt"></i></Link>
    </div>
</div>
  )
}

export default Addoption