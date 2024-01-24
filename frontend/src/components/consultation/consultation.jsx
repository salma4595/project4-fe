// imports
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';

export default function Consultation(props) {

  return (
    <>
        <td>{props.index}</td>
         <td><Link to={`/consultation/consultationDetails/${props._id}`}>{props.consultation_description}</Link  ></td>
         <td>
          <img src={props.consultation_image} alt="" width={50} /></td>
         <td>{props.consultation_land_area}</td>
         <td>{`${props.width} x ${props.length}`}</td>

         <td>{props.consultation_land_map}</td>
         <td><Link to={`/quotation/QuotationCreateForm/${props._id}`}>Add Quotation</Link> &nbsp;&nbsp;</td>
         {/* <td><Link to={`/quotation/QuotationList/${props._id}`}> QuotationList</Link> &nbsp;&nbsp;</td> */}
         
   <td><button onClick={() => props.editForm(props._id)} className='btn btn-link'>
    <i className="bi bi-pencil-fill"></i>
    </button></td>

   <td><button  onClick={() => props.deleteForm(props._id)} className='btn btn-link'>
    <i className="bi bi-trash-fill"></i>
    </button></td>

    </>
  )
}
