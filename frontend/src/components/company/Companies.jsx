import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'; // Import the Link component from react-router-dom
import Axios from 'axios';
import RequestForm from '../company/JoinRequestForm';
// import EditCompanyForm from './EditCompany';

function CompanyPage(props) {
  const [companys, setCompanys] = useState([]);
  const [user, setUser]= useState(props.user);

  const {id} = useParams()
  console.log("id", id )
  // const [editCompany, setEditCompany] = useState({});
  // const [isEdit,setIsEdit]=useState(false);

  useEffect(() => {
    
    // Fetch companys from the API
    Axios.get(`/company/get?cat_id=${id}`)
      .then(response => {
        setCompanys(response.data.companys);
      })
      .catch(error => {
        console.error('Error fetching companys:', error);
      });
  }, []);

  
  return (
    <div className="container">

    {props.user && (props.user.userType=="User") ?<div className="d-flex justify-content-end">
    <Link to="/request/add" className="btn btn-secondary mt-3" element={<RequestForm user={user}></RequestForm>} >Company Owner Request Form</Link>
  </div>:""}
 
      <h1 className="mt-5 mb-4">Companies</h1>
      {/* {isEdit &&<EditCompanyForm user={props.user} editCompany={editCompany} isEdit={setIsEdit}></EditCompanyForm>} */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4">
        {companys.map(company => (
          
          <div key={company._id} className="col mb-4">
          
            <div className="card animated-card ">
              <Link to={"/company/CompanyDetails/"+company._id} > {/* Add the Link component */}
                <img src={company.company_images} className="card-img-top" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt={company.company_name} />
              </Link>
              <div className="card-body">
                <h2 className="card-title">{company.company_name}</h2>
                <p className="card-text">{company.company_description}</p>
                {company.Categories && company.Categories.length > 0 && (
                   <p className="card-text">
                    Category: {company.Categories[0].name}
                   </p>
                )}

             {/* {props.user && (props.user.userType=="SubAdmin" ||props.user.userType=="Admin") ? <button className='btn btn-primary' onClick={()=>editCompanyFun(company._id)}>Edit</button>:""} */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyPage;