import React, { useEffect, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { getProperty } from "../../../services/apiservice";

const Property = ({ product }) => {
  const PF = "https://unifeed.s3.ap-south-1.amazonaws.com/";
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6">
     <Link to={`/property-details/${product._id}`}>
      <div className="card">
        <div className="card-body">
          <div className="new-arrival-product">
            <div className="new-arrivals-img-contnent">
              <img className="img-fluid" src={PF+product.productPic} alt="" />
            </div>
            <div className="new-arrival-content text-center mt-3">
              <h4>
                <Link to={`/property-details/${product._id}`}>{product.name}</Link>
              </h4>
              {product.address}

            </div>
          </div>
        </div>
      </div>
      </Link>
    </div>
  );
};


const PropertyList = ({ propertyList }) => {
  const [productData, setproductData] = useState([])
  useEffect(() => {
		if (propertyList) {
			setproductData(propertyList)
		  }
		  else{
        const propertylist = async() => {
          const res = await getProperty()
          console.log(res)
          setproductData(res)
          }
          propertylist()
		  }

	}, [propertyList])
  return (
    <Fragment>
    <div className="row">
      {productData.map((product,index) => (
        <Property key={index} product={product} />
      ))}
    </div>
  </Fragment>
  );
};

export default PropertyList;
