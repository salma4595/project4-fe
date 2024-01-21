import Axios  from "axios";
import React, { useState } from "react";
export default function CategoryCreateForm(props) {
  const [newCategory,setNewCategory] = useState({});
  const [file, setFile] = useState(null);
  const [imageName, setImageName] = useState(null);

  const handleChange = (event) =>{
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const category = {...newCategory};
    category[attributeToChange] = newValue;
    setNewCategory(category);
    console.log(category);
  };

   const handelSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("categories_image", file);
    formData.append("name", newCategory.name);
    console.log(formData)
    
    try {
      const result = await Axios.post('/categories/add', formData, { headers: {'Content-Type': 'multipart/form-data'}});
      setImageName(result.data.imageName);
      console.log('categories Added successfully!!!');
    } catch (error) {
      console.log('Error adding categories:', error);
    }
    event.target.reset();
    
   };
   const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

   
  return (
    <>
    <h1 className="mt-5">Create Category</h1>
    <form onSubmit={handelSubmit} className="w-75 m-auto mx-auto my-5" encType="multipart/form-data">
        <div className="mb-3">
            <label className="mt-3">Category Name</label>
            <input type="text" name="name" onChange={handleChange} className="form-control"></input>
        </div>
        <div className="mb-3">
            <label htmlFor="formFile" className="form-label mt-3">Upload Category Image</label>
            <input required type="file" className="form-control" id="categories_image" name="categories_image" accept=".png, .jpg, .jpeg, .gif" onChange={handleImage}
  />
        </div>
        <div>
            <input type="submit" value="Add Category" className="btn btn-sm btn-dark"></input>
        </div>
    </form>
    </>
    
  )
}
