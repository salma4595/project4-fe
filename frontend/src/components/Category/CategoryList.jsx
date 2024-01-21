import React, { useEffect, useState } from 'react'
import Category from "./Category"
import  Axios  from 'axios';
import CategoryCreateForm from './CategoryCreateForm'
import CategoryEditForm from './CategoryEditForm'


export default function CategoryList(props) {

    // const[categories,setCategories]= useState([]);
    // const [isEdit, setIsEdit] = useState(false);
    // const [currentCategory , setCurrentCategory] = useState({});
    // const [file, setFile] = useState();
    // //const [showCreateForm , setShowCreateForm] = useState(false);

    // useEffect(()=>{
    //     loadCategoryList();
    // },[])

    // const setHeader = () => {
    //     const authHeader ={
    //     headers:{
    //       "Authorization" : "Bearer " + localStorage.getItem("token")
    //     }
    //   }
    //   return authHeader;
    //   }

    // const loadCategoryList =()=>{
    //     Axios.get("/categories/index" , setHeader())
    //     .then((response)=>{
    //         console.log(response);
    //         setCategories(response.data.categories);
    //     })
    //     .catch((err)=>{
    //         console.log(err)
    //     })
    // }
    
    // const handleCategoryClick = (category) => {
    //     console.log("Category clicked:",category);
    // }
 

    // const addCategory = (category) =>{
        
    //     Axios.post("/categories/add",category , setHeader() , { headers: {'Content-Type': 'multipart/form-data'}})
    //        .then(res =>{
    //         console.log("Category Added successfuly !!");
    //         console.log(res);
    //         loadCategoryList();
    //        })
    //        .catch(err =>{
    //         console.log("Error adding Category :" , err);
    //        })
    //     } 



    // const editCategory = (id) => {
    //     Axios.get(`/categories/edit?id=${id}` , setHeader())
    //     .then((res)=> {
    //         console.log("category:" , res.data.category);
    //         console.log("loading category successfully");
    //         let category = res.data.category;
    //            //is edit used to display form
    //         setIsEdit(true);
    //         //current author info
    //         setCurrentCategory(category);
    //     })
    //     .catch(error=>{
    //         console.log("error on editing category in createForm frontend , " , error);
    //     })
    // }


   
    //     const updatedCategory = (category) => {
           
    //         Axios.put('/categories/update' ,category , { headers: {'Content-Type': 'multipart/form-data'}}, setHeader())
    //         .then(res=> {
    //             console.log("Category updated successfully frontend");
    //             console.log(res);
    //             loadCategoryList();
    //             setIsEdit(false);
    //             loadCategoryList();
    //         })
    //         .catch(error=>{
    //             console.log("error in updating category");
    //             console.log(error);
    //             console.log("category in category list" , category);

    //         })
    //     }

    //     const deleteCategory = (id)=> {
    //         Axios.delete(`/categories/delete?id=${id}` ,  setHeader())
    //         .then(res=>{
    //             console.log("category record deleted successfully from frontend");
    //             console.log(res);
    //             loadCategoryList();
    //         })
    //         .catch(error=>{
    //             console.log("error on deleting category frontend");
    //             console.log(error);
    //         })
    //     }

    //   const categoryList = categories.map((category)=>(
     
        
    //             <Category key={category._id} category={category} onClick={handleCategoryClick} editCategory={editCategory} deleteCategory={deleteCategory} ></Category>
              

    // )) 
    



  return (
    <>
     {/* <div>

        <h3>choose a category</h3>
      
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <a href="/category/add" class="btn btn-dark me-md-2" type="button">Add Category</a>
    </div>       
   <br/>
 <div className="row">
    {categoryList}
    </div>

    {(!isEdit) ?
    <CategoryCreateForm addCategory={addCategory} setFile={setFile} user={props.user}/>
    
     :
    <CategoryEditForm key={currentCategory._id} category={currentCategory} updatedCategory={updatedCategory} setFile={setFile} user={props.user}/>
    }
     </div> */}

    </>
  )
}
