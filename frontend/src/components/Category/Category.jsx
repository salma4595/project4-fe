import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

export default function Category({category,onClick , editCategory , deleteCategory}) {
  const handleCategoryClick = () =>{
    onClick(category);

  }

  // console.log("the category" , category);

// console.log("the category image in image component:" , category.image.trim());
  return (
    <>

    <div className="col-md-4" onClick={handleCategoryClick} >
         <div className="card shadow-sm">
          <img src={`/uploads/${category.image}`} className="card-img-top bd-placeholder-img " alt=""></img>
          <div className="card-body text-bg-dark">
            <h5 className="card-title">{category.name}</h5>
           <div className='d-flex justify-content-between'>
           <div class="btn-group">
            <button  type="button" class="btn btn-sm btn-outline-light" onClick={()=>editCategory(category._id)}>Edit</button>
            <button  type="button" class="btn btn-sm btn-outline-light" onClick={()=>deleteCategory(category._id)}>Delete</button>            </div> 
            {/*need to redirect to serviece
            <div class="d-grid gap-2 d-md-flex justify-content-md-end">
           <a href="/service/add" class="btn btn-dark me-md-2" type="button">view service</a>
  </div>*/}
         </div>
          </div>

         </div>
    </div>
    
    </>
  )
}
