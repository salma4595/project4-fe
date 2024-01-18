import React, { useState, useRef } from 'react';
import Axios from 'axios';
import Map from './Map';

export default function AddCompanyForm(props) {
  const [newCompany, setNewCompany] = useState({});
  const [location, setLocation] = useState("");
  const [destination, setDestination] = useState(null);
  const autocompleteRef = useRef(null);
  const [file, setFile] = useState(null);
  const [imageName, setImageName] = useState(null);

  const successCallback = (position) => {
    console.log("coor",position.coords);
    const newLocation = {
      latitude:position.coords.latitude,
      longitude: position.coords.longitude
    }
    setLocation(newLocation)
    console.log("newLocation", newLocation)
  };
  
  const errorCallback = (error) => {
    console.log(error);
  };
  
  // Move this line inside the component body
  // navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

  const addCompany = (company) => {
    Axios.post('company/add', company)
      .then((res) => {
        console.log('Company Added successfully!!!');
      })
      .catch((err) => {
        console.log('Error adding Company');
      });
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const company = { ...newCompany };
    company[attributeToChange] = newValue;
    setNewCompany(company);
    console.log(company);
  };

  const handleMapClick = (e) => {
    console.log(e);
    setDestination(e.latlng);
  };

  const fetchCurrentLocation = async () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setDestination({ lat: latitude, lng: longitude });
          console.log(latitude, longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("company_images", file);
    formData.append("company_name", newCompany.company_name);
    formData.append("company_description", newCompany.company_description);
    formData.append("company_phoneNumber", newCompany.company_phoneNumber);
    formData.append("company_CAT", newCompany.company_CAT);
    formData.append("company_rate", newCompany.company_rate);
    formData.append("company_emailAddress", newCompany.company_emailAddress);
    formData.append("company_latitude", destination.lat);
    formData.append("company_longtude", destination.lng);
    // console.log("newCompany.company_location", location)
    // formData.append("working_days", newCompany.working_days);

    console.log(formData)
    
    try {
      const result = await Axios.post('/company/add', formData, { headers: {'Content-Type': 'multipart/form-data'}});
      setImageName(result.data.imageName);
      console.log('Company Added successfully!!!');
    } catch (error) {
      console.log('Error adding Company:', error);
    }
    event.target.reset();
  };

  return (
    <div className="container">
      <div className="mb-4">
        <h2>Create Your Company</h2>
        <p>A Chance To Display Your Company!</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="company_name" className="form-label">
            Company Name:
          </label>
          <input required
            type="text"
            className="form-control"
            id="company_name"
            name="company_name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
      <label htmlFor="company_description" className="form-label">
        Description of the Company:
      </label>
      <input required
        type="text"
        className="form-control"
        id="company_description"
        name="company_description"
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="company_phoneNumber" className="form-label">
        Business' Contacts:
      </label>
      <input required
        type="text"
        className="form-control"
        id="company_phoneNumber"
        name="company_phoneNumber"
        onChange={handleChange}
      />
    </div>

    <div className="mb-3">
      <label htmlFor="company_emailAddress" className="form-label">
        Business Email-Address:
      </label>
      <input required
        type="email"
        className="form-control"
        id="company_emailAddress"
        name="company_emailAddress"
        onChange={handleChange}
      />
    </div><div className="mb-3">
  <label htmlFor="company_image" className="form-label">
    Upload Company Images:
  </label>
  <input required
    type="file"
    className="form-control"
    id="company_image"
    name="company_image"
    accept=".png, .jpg, .jpeg, .gif"
    onChange={handleImage}
  />
</div>

{/* <label for="workingDays">Working Days:</label>
  <div>
    <input type="checkbox" name="workingDays" value="Monday"/> Monday
    <input type="checkbox" name="workingDays" value="Tuesday"/> Tuesday
    <input type="checkbox" name="workingDays" value="Wednesday"/> Wednesday
    <input type="checkbox" name="workingDays" value="Thursday"/> Thursday
    <input type="checkbox" name="workingDays" value="Friday"/> Friday
    <input type="checkbox" name="workingDays" value="Saturday"/> Saturday
    <input type="checkbox" name="workingDays" value="Sunday"/> Sunday
  </div> */}

        <div className="mb-3">
          <label htmlFor="company_location" className="form-label">
            Company Location:
          </label>
          <Map destination={destination} key={destination&& destination.lat || 2}/>
          
          <button type="button" onClick={fetchCurrentLocation}>Get Current Location</button>
        </div>

        {/* Rest of the form fields */}

        <div className="mb-3">
          <input type="submit" value="Create Company" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
}