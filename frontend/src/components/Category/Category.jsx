import React from 'react'



export default function Category(props) {
  


  return( 
    <>

    <div className="col-md-4" >
         <div className="card shadow-sm">
         <img src={props.categories_image} className="card-img-top" style={{ width: "100%", height: "auto", objectFit: "contain" }} alt={props.name} />
          <div className="card-body text-bg-dark">
            <h5 className="card-title">{props.name}</h5>
           <div className='d-flex justify-content-between'>
           <div className="btn-group">
            <button  type="button" className="btn btn-sm btn-outline-light" onClick={()=> props.editView(props._id)}>Edit</button>
            <button  type="button" className="btn btn-sm btn-outline-light" onClick={()=> props.deleteCategory(props._id)}>Delete</button> </div> 
           
         </div>
          </div>

         </div>
    </div>
    
    </>
  )
  
}
