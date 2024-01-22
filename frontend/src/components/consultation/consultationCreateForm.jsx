import React, { useState , useRef } from 'react';
import Map from './Map';

export default function ConsultationCreateForm(props){
// all the states
const [createConsultation, setCreateConsultation] = useState({})
// for map
const [destination, setDestination] = useState(null);
const [location, setLocation] = useState("");
const autocompleteRef = useRef(null);
// adding states for image upload
const [file, setFile] = useState(null);
const [imageUrl, setImageUrl] = useState('');

// adding another state for resetting form, reason is the other method didnt work
const [formKey, setFormKey] = useState(0)



const resetForm = () => {
  setCreateConsultation({});
  setFile(null);
  setDestination(null);
 
  setFormKey((prevKey) => prevKey + 1);
};

const handleMapClick = (selectedLocation) => {
  setDestination(selectedLocation);
};

// const successCallback = (position) => {
//   console.log("coor",position.coords);
//   const newLocation = {
//     latitude:position.coords.latitude,
//     longitude: position.coords.longitude
//   }
//   setLocation(newLocation)
//   console.log("newLocation", newLocation)
// };

const errorCallback = (error) => {
  console.log(error);
};





  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateConsultation({ ...createConsultation, [name]: value });
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  }




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
    e.preventDefault();

  const formData = new FormData();
  
  formData.append('consultation_image', file);
  // formData.append('consultation_description', createConsultation.company_name);

  formData.append('consultation_description', createConsultation.consultation_description);
  formData.append('consultation_land_area', createConsultation.consultation_land_area);
  formData.append('consultation_land_dimensions', createConsultation.consultation_land_dimensions);
  formData.append('consultation_land_map', createConsultation.consultation_land_map);
  // formData.append('consultation_land_autocad', createConsultation.consultation_land_autocad);

  props.addAConsultation(formData);

  resetForm()
 


};

  return (
   <>
   <h2 className='text-center'>Create Consultation</h2>
   <form key={formKey} onSubmit={handleSubmit}>


    
   <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
    <label>Description</label>
    <textarea
      name='consultation_description'
      value={createConsultation.consultation_description}
      onChange={handleChange}
      className='form-control'
    ></textarea>
  </div>
</div>

<br></br>

  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Location Image</label>
  <input type='file'   id="Consultation_image" name='Consultation_image' value={createConsultation.Consultation_image} onChange={handleImage} accept="image/png, image/jpeg, image/gif" className='form-control'>
  </input>
  </div>
  </div>

  {file && (
          <div className='row d-flex justify-content-center align-items-center'>
            <div className='col-md-6'>
              <label>Chosen Image</label>
              <img
                src={URL.createObjectURL(file)}
                alt='Chosen Consultation Image'
                style={{ width: '100%', height: 'auto', marginTop: '10px' }}
              />
            </div>
          </div>
        )}

  <br></br>


  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Area</label>
  <input type='text' name='consultation_land_area' value={createConsultation.consultation_land_area} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

  <br></br>


  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Dimensions</label>
  <input type='text' name='consultation_land_dimensions' value={createConsultation.consultation_land_dimensions} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

  <br></br>


  {/* <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Map</label>
  <input type='file' name='consultation_land_map' value={createConsultation.consultation_land_map} onChange={handleChange} className='form-control'></input>
  </div>
  </div> */}

<div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
    <label>Land Map</label>
    <div className="mb-3">
  <label htmlFor="consultation_land_map" className="form-label">
  
  </label>
  <Map destination={destination} key={destination && destination.lat || 2}  onMapClick={handleMapClick} />
  <button className='d-flex justify-content-center'
  type="button" onClick={fetchCurrentLocation}>Get Current Location</button>
</div>
  </div>
</div>





<br></br>


  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Autocad</label>
  <input type='file' name='consultation_land_autocad' value={createConsultation.consultation_land_autocad} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

  <br></br>

<div className='row d-flex justify-content-center align-items-center text-center'>
    <div  className='col-md-6'>
        <input type='submit' value="Create Consultation" className='btn btn-secondary'></input>
    </div>
    </div>

   </form>
  
   
   </>

  )   
  





  }







// <div className="row d-flex justify-content-center align-items-center">
//   <div className="col-md-6">
//     <label>Land Area</label>
//     <div className="d-flex">
//       <input
//         type="text"
//         name="consultation_land_area_width"
//         value={createConsultation.consultation_land_area_width}
//         onChange={handleChange}
//         className="form-control mr-2"
//         placeholder="Width"
//       ></input>
//       <input
//         type="text"
//         name="consultation_land_area_height"
//         value={createConsultation.consultation_land_area_height}
//         onChange={handleChange}
//         className="form-control"
//         placeholder="Height"
//       ></input>
//     </div>
//   </div>
// </div>

















// import React, { useState } from 'react'

// export default function consultationCreateForm(props) {

// const [createConsultation, setCreateConsultation] = useState({})



// const eventHandler = (e) => {
//     const attributeToChange = e.target.name
//     const newValue = e.target.value
    
//     const consultation = {...createConsultation}
//     consultation[attributeToChange] = newValue
//     console.log(consultation)
//     setCreateConsultation(consultation)
// }

// const submitEventHandler = (e) => {
//     e.preventDefault()
//     props.addAConsultation(createConsultation)
//     e.target.reset()
// }

// return(

   
//         <form onSubmit={handleSubmit} className="mt-3">
//           {Object.entries(initialFormData).map(([field, initialValue]) => (
//             <div key={field} className="mb-3">
//               <label htmlFor={field} className="form-label">{field.replace('_', ' ')}</label>
//               <input
//                 type={field.includes('image') ? 'file' : 'text'}  // Assuming image fields are file inputs
//                 className="form-control"
//                 id={field}
//                 name={field}
//                 value={formData[field]}
//                 onChange={handleChange}
//               />
//             </div>
//           ))}
      
//           <button type="submit" className="btn btn-primary">Create Consultation</button>
//         </form>
     
      
// )





// }















//   return (
//     <>
    
    
    
    
    
    
    
    
    
    
    
    
//     </>
//   )
// }
