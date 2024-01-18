// imports
import React, { useEffect, useState } from 'react'
import Axios from 'axios'

export default function Courses(props) {

  return (
    <>
        <td>{props.user_id.name}</td>
         <td>{props.consultation_description}</td>
         <td>{props.consultation_image}</td>
         <td>{props.consultation_land_area}</td>
         <td>{props.consultation_land_dimensions}</td>
         <td>{props.consultation_land_map}</td>
         <td>{props.consultation_land_autocad}</td>




         
   <td><button onClick={() => props.editView(props._id)} className='btn btn-link'>
    <i class="bi bi-pencil-fill"></i>
    </button></td>

   <td><button  onClick={() => props.deleteTheCourse(props._id)} className='btn btn-link'>
    <i className="bi bi-trash"></i>
    </button></td>

    </>
  )
}
