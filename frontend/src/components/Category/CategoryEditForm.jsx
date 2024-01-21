import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';

export default function CategoryEditForm(props) {
  const [editCategory, setEditCategory] = useState(props.category);
  const [file, setFile] = useState(props.category.categories_image); // Fix typo here
  const [imageName, setImageName] = useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const attributeToChange = event.target.name;
    const newValue = event.target.value;
    const UpdateCategory = { ...editCategory };
    UpdateCategory[attributeToChange] = newValue;
    console.log(UpdateCategory);
    setEditCategory(UpdateCategory);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('categories_image', file);
    formData.append('name', editCategory.name);

    console.log(formData); // Move this line inside the function

    Axios.put('/categories/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
        console.log('success');
        props.isEdit(false);
        navigate('/categories/index');
      })
      .catch((err) => {
        console.log(err);
      });

    event.target.reset();
  };

  const handleImage = (e) => {
    console.log(e.target.files[0]);
    setFile(e.target.files[0]);
  };

  return (
    <>
      <h1 className='mt-5'>Edit Category</h1>
      <form onSubmit={handleSubmit} className='w-75 m-auto my-5 '>
        <div className='mb-3'>
          <label className='mt-3'>Category Name</label>
          <input
            type='text'
            name='name'
            value={editCategory.name}
            onChange={handleChange}
            className='form-control'
          ></input>
        </div>
        <div className='mb-3'>
          <label htmlFor='categories_image' className='form-label'>
            Upload Company Images:
          </label>
          <input
            type='file'
            className='form-control'
            id='categories_image'
            name='categories_image'
            accept='.png, .jpg, .jpeg, .gif'
            onChange={handleImage}
          />
        </div>
        <div>
          <input type='submit' value='Update Category' className='btn btn-sm btn-dark'></input>
        </div>
      </form>
    </>
  );
}
