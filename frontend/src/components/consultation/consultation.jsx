// imports
import React, { useEffect, useState } from 'react'

export default function Consultation(props) {

  return (
    <>
        
         <td>{props.consultation_description}</td>
         <td>
          <img src={props.consultation_image} alt="" width={50} /></td>
         <td>{props.consultation_land_area}</td>
         <td>{`${props.width} x ${props.length}`}</td>

         <td>{props.consultation_land_map}</td>
         

         
   <td><button onClick={() => props.editForm(props._id)} className='btn btn-link'>
    <i className="bi bi-pencil-fill"></i>
    </button></td>

   <td><button  onClick={() => props.deleteForm(props._id)} className='btn btn-link'>
    <i className="bi bi-trash-fill"></i>
    </button></td>

    </>
  )
}
