import React, { useState } from 'react';




export default function ConsultationEditForm(props){

const [editConsultation, setEditConsultation] = useState(props.presentConsultation)

  const handleChange = (e) => {
    const attributeToChange = e.target.name
    const newValue = e.target.value

    const updateConsultation = {...editConsultation }
    updateConsultation[attributeToChange] = newValue
    console.log(updateConsultation)
    setEditConsultation(updateConsultation)

  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.updateTheview(editConsultation)
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
  <input type='file' name='Consultation_image' value={editConsultation.Consultation_image} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

  <br></br>

  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Area</label>
  <input type='text' name='consultation_land_area' value={editConsultation.consultation_land_area} onChange={handleChange} className='form-control'></input>
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
  <input type='file' name='consultation_land_map' value={editConsultation.consultation_land_map} onChange={handleChange} className='form-control'></input>
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




















