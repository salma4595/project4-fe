import React, { useState } from 'react';




export default function ConsultationCreateForm(props){

const [createConsultation, setCreateConsultation] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCreateConsultation({ ...createConsultation, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addAConsultation(createConsultation)

  };

  return (
   <>
   <h2 className='text-center'>Create Consultation</h2>
   <form onSubmit={handleSubmit}>


    
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
  {/* using file for images */}
  <input type='file' name='Consultation_image' value={createConsultation.Consultation_image} onChange={handleChange} className='form-control'></input>
  </div>
  </div>

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


  <div className='row d-flex justify-content-center align-items-center'>
  <div className='col-md-6'>
  <label>Land Map</label>
  <input type='file' name='consultation_land_map' value={createConsultation.consultation_land_map} onChange={handleChange} className='form-control'></input>
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
