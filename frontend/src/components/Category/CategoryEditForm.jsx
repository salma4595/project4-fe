import React, { useState } from 'react'

export default function CategoryEditForm(props) {
const [editCategory, setEditCategory] = useState(props.category);

const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const UpdateCategory = {...editCategory}
    UpdateCategory[attributeToChange] = newValue;
    console.log(UpdateCategory);
    setEditCategory(UpdateCategory);
}
 const handleSubmit = (event) => {
    event.preventDefault();
    props.UpdateCategory(editCategory);
    event.target.reset();
};

return (
    <>
     <h1 className='mt-5'>Edit Category</h1>
     <form onSubmit={handleSubmit} className="w-75 m-auto my-5 ">
        <div className='mb-3'>
            <label className="mt-3">Category Name</label>
            <input type="text" name='name' value={editCategory.name} onChange={handleChange} className='form-control'></input>
        </div>
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label mt-3">Upload Category Image</label>
            <input className="form-control" type="file" id="formFile" name="categories_image"></input>
        </div>
        <div>
            <input type="submit" value="Update Category" className="btn btn-sm btn-dark"></input>
        </div>

     </form>
    </>

)
}