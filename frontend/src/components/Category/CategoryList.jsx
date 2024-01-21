import React, { useEffect, useState } from 'react';
import Category from "./Category";
import  Axios  from 'axios';
import CategoryCreateForm from './CategoryCreateForm';
import CategoryEditForm from './CategoryEditForm';




export default function CategoryList() {
    const [categories, setCategories] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [currentCategory, setCurrentCategory] = useState({});
   
    useEffect(() => {
        loadCategoriesList();
    },[]);

    const loadCategoriesList = () =>{
       
         Axios.get("categories/index")
          .then((response)=>{
            setCategories(response.data.categories);
          })
          .catch((err) => {
            console.log(err);
          });
            
    };
    const addCategory = (Category) => {
        Axios.post("categories/add",Category)
        .then(() => {
            loadCategoriesList();
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const editView = (id) => {
        Axios.get(`categories/edit?id=${id}`)
        .then((res) =>{
            let category = res.data.categories;
            setIsEdit(true);
            setCurrentCategory(category);
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const UpdateCategory = (category) => {
        Axios.put("categories/update",category)
        .then(()=>{
            loadCategoriesList();
        })
        .catch((err) => {
            console.log(err);
        });
    };
    const deleteCategory = (id) =>{
        Axios.delete(`categories/delete?id=${id}`)
        .then(()=>{
            loadCategoriesList();
        })
        .catch((err) =>{
            console.log(err);
        });
    };

    const allCategories = categories.map((category,index) =>(
        <tr key={index}>
            <Category>
                name={category.name}
                image={category.categories_image}
                editView={() => editView(category._id)}
                deleteCategory={() => deleteCategory(category._id)}
            </Category>

        </tr>
    ));

  return (
    <div>
    <h1>Categories List</h1> 
    <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        {/* <a href="/category/add" class="btn btn-dark me-md-2" type="button">Add Category</a> */}

    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="/category/add" class="btn btn-dark me-md-2" type="button">Add Category</a>

    


     :
    <CategoryEditForm key={currentCategory._id} category={currentCategory} updatedCategory={updatedCategory} setFile={setFile} user={props.user}/>
    }
     </div> */}

    </>
  )
}
