import React, { useState } from 'react'
import { useNavigate } from 'react-router';
export default function CategoryEditForm(props) {
  const [category, setCategory] = useState(props.category);
  const [file, setFile] = useState();

// console.log("the file image" , file);

  const handleChange = (event) =>{
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const updatedCategory = {...category}
    updatedCategory[attributeToChange] = newValue;
    console.log(updatedCategory);
    setCategory(updatedCategory);
}

const handleImage = (event) => {
    console.log("the updaeted image: ",event.target.files[0]);
    setFile(event.target.files[0]);
      // let pic= setFile(event.target.files[0]);
    // setCategory(category.image = pic);
    // console.log("set category: in edit , ",setCategory);
    // console.log("set file " ,     props.setFile(event.target.files[0])    );
    // setCategory(category.image = updatedImage);
    console.log("the updated image saved:" ,event.target.files[0]);
    setCategory((category) => ({
        ...category,
        // image:event.target.files[0]
      }));

}

// console.log("set category in edit Category form",setCategory);
console.log("logged user" , props.user);
// console.log("the category" , category);
// setCategory(category.image = handleImage());
// console.log("the handle image: , " , setCategory(category.image = handleImage()));
const handleSubmit = (event) =>{ 
    event.preventDefault();
    const formData = new FormData()
    formData.append("category" , JSON.stringify(category))
    console.log("category image:" , file);
    formData.append("image" , file);
    // formData.append("userId" , props.user.id);
    //updtaeAuthor is the post 
    props.updatedCategory(formData)
    // navigate("/category/index");
    
}


return (
<>
<h1 className="mt-5">Edit Category:</h1>
<img src={`/uploads/${category.image}`} alt={category.name}/>
<form onSubmit={handleSubmit} className="w-75 m-auto mx-auto my-5" encType="multipart/form-data">
    <div class="mb-3">
        <label className="mt-3">Category Name:</label>
        <input type='text' name='name' onChange={handleChange} className="form-control" value={category.name} ></input>
    </div>

    <div class="mb-3">
        <label for="formFile" class="form-label mt-3">Upload Category Image:</label>
        <input class="form-control" type="file" id="formFile" name="image"  onChange={handleImage}
/>
    </div>

    <div>
        <input type='submit' value="Add Edit" class="btn btn-sm btn-dark"></input>
    </div>


  </form></>
)
}