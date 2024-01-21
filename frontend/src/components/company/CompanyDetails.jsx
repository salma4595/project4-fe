import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom'
import { Link, useParams } from 'react-router-dom';
import Axios from 'axios';
import Map from '../forms/Map';
import AddCompanyForm from '../forms/AddCompanyForm';

export default function CompanyDetailPage(props) {
  const [companyData, setCompanyData] = useState([]);
  const [company, setCompany] = useState({
    company_latitude:0,
    company_longtude:0
  });
  const { id: companyId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch cars for the specific company
    Axios
      .get(`/company/detail?id=${companyId}`)
      .then(response => {
        console.log(response);
        let lat = parseFloat(response.data.company.company_latitude);
        let long = parseFloat(response.data.company.company_longtude);
        if(isNaN(lat)){
          lat = 0;
        }
        if(isNaN(long)){
          long = 0;
        }
        response.data.company.company_latitude = lat;
        response.data.company.company_longtude = long;
        setCompany(response.data.company ? response.data.company : []);
      })
      .catch(error => {
        console.error('Error fetching company:', error);
      });
  }, [companyId]);
  
  console.log("///", companyData);
  

  return (
    
<>
      <h1 className="mt-5 mb-4">Cars for Company</h1>
          
          <div key={company._id} className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">Company Name: {company.company_name}</h2>
              <img src={company.company_image} alt={company.company_name} className="card-img-top" style={{ width: "50vw", height: "100%", objectFit: "cover" }} />
              <p className="card-text">Company Description: {company.company_description}</p>
              <p className="card-text">Business Email-Address: {company.company_emailAddress}</p>
              <p className="card-text">Business Contacts: {company.company_phoneNumber}</p>
              <p className="card-text">Company Location: {company.company_latitude}</p>
              <Map destination={[company.company_latitude, company.company_longtude]}></Map>
             </div>
             
    </div>
        
        

      
        
      </>

  )


        
}