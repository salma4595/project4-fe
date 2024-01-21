import Axios  from "axios";
import React, { useState } from "react";
export default function CategoryCreateForm(props) {
  const [newCategory,setNewCategory] = useState({
    name: "",
    image: null,
  });

  const handleChange = (event) =>{
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const category = {...newCategory};
    category[attributeToChange] = newValue;
    if(event.target.name === "image"){
      category["image"] = event.target.files[0];
    }
    setNewCategory(category);
  };

   const handelSubmit = async(event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", newCategory.name);
    formData.append("image", newCategory.categories_image);
    try{
      const response = await Axios.post("/api/images", formData);
      const {imageName} = response.data;
      const categoryWithImage = {
        ...newCategory,imageUrl: `/images/${imageName}`,

      };
      props.addCategory(categoryWithImage);

    }catch(error){
      console.error(error);
    }
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
            <input className="form-control" type="file" id="formFile" name="image"></input>
        </div>
        <div>
            <input type="submit" value="Add Category" className="btn btn-sm btn-dark"></input>
        </div>
    </form>
    </>
    
  )
}
