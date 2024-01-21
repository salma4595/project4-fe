import React from 'react'


export default function Category(props) {
  return( 
    <>

    <div className="col-md-4" >
         <div className="card shadow-sm">
          <img src={`/uploads/${props.categories_image}`} className="card-img-top bd-placeholder-img " alt=""></img>
          <div className="card-body text-bg-dark">
            <h5 className="card-title">{props.name}</h5>
           <div className='d-flex justify-content-between'>
           <div className="btn-group">
            <button  type="button" className="btn btn-sm btn-outline-light" onClick={props.editView}>Edit</button>
            <button  type="button" className="btn btn-sm btn-outline-light" onClick={props.deleteCategory}>Delete</button> </div> 
           
         </div>
          </div>

         </div>
    </div>
    
    </>
  )
  
}
