import React, { useState, useRef } from 'react';
import Map from './Map';



export default function ConsultationEditForm(props){

const [editConsultation, setEditConsultation] = useState(props.presentConsultation)
// for map
const [destination, setDestination] = useState(null);
const [location, setLocation] = useState("");
const autocompleteRef = useRef(null);
// for image update
const [file, setFile] = useState(props.presentConsultation.Consultation_image);


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



  const handleChange = (e) => {
    const attributeToChange = e.target.name
    const newValue = e.target.value

    const updateConsultation = {...editConsultation }
    updateConsultation[attributeToChange] = newValue
    console.log(updateConsultation)
    setEditConsultation(updateConsultation)

  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
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


  const handleSubmit = (e) => {
    e.preventDefault()
    
  const formData = new FormData();
  
  formData.append('consultation_image', file);
  formData.append('_id', props.presentConsultation._id)

  formData.append('consultation_description', editConsultation.consultation_description);
  formData.append('consultation_land_area', editConsultation.consultation_land_area);
  formData.append('consultation_land_dimensions', editConsultation.consultation_land_dimensions);
  formData.append('consultation_land_map', editConsultation.consultation_land_map);
  // formData.append('consultation_land_autocad', createConsultation.consultation_land_autocad);

    props.updateTheview(formData)
    e.target.reset()

  };

  return (
   <>
   <h2 className='text-center'>Edit Consultation</h2>
   <form onSubmit={handleSubmit}>
    
   <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
    <label>Description</label>
    <textarea name='consultation_description' value={editConsultation.consultation_description} onChange={handleChange}className='form-control'>
    </textarea>
  </div>
</div>

<br></br>

  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Location Image</label>
  {/* using file for images */}
  <input type='file' id='Consultation_image' name='Consultation_image' value={editConsultation.Consultation_image} onChange={handleImage}   accept="image/png, image/jpeg, image/gif" className='form-control'></input>
  </div>
  </div>

  <br></br>

  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Area</label>
  <input type='text'  name='consultation_land_area' value={editConsultation.consultation_land_area} onChange={handleChange}  className='form-control'></input>
  </div>
  </div>

  <br></br>

  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Dimensions</label>
  <input type='text' name='consultation_land_dimensions' value={editConsultation.consultation_land_dimensions} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

  <br></br>

  
<div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
    <label>Land Map</label>
    <div className="mb-3">
  <label htmlFor="consultation_land_map" className="form-label">
  
  </label>
  <Map destination={destination} key={destination && destination.lat || 2} />
  <button className='d-flex justify-content-center'
  type="button" onClick={fetchCurrentLocation}>Get Current Location</button>
</div>
  </div>
</div>

  <br></br>

  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Autocad</label>
  <input type='file' name='consultation_land_autocad' value={editConsultation.consultation_land_autocad} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

  <br></br>

<div className='row d-flex justify-content-center align-items-center text-center'>
    <div  className='col-md-6'>
        <input type='submit' value="Edit Consultation" className='btn btn-secondary'></input>
    </div>
    </div>

   </form>
  
   
   </>

  )   
  





  }




















