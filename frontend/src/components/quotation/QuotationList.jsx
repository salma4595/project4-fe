import React from 'react';
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Axios from 'axios'; //AJAX functionality for React (npm i axios)
import Quotation from './Quotation';
import QuotationCreateForm from './QuotationCreateForm';
import QuotationEditForm from './QuotationEditForm';
import dummyData from './dummy';


export default function QuotationList(props) {
const [quotations, setQuotation] = useState([]); //this is used for Create
const [currentQuotation, setCurrentQuotation] = useState({}); //this is used to set the content for the Edit form
const[isCreateQuotation,setIsCreateQuotation]=useState(false);
const[isEditQuotation,setIsEditQuotation]=useState(false);

const passToken = { headers: { "Authorization": "Bearer " + localStorage.getItem("token")}};

// const passToken = passedToken;

useEffect(() => {
//call API
loadQuotationList();

},[]); //this end array is the conditional option

//using axios for the API fetching GET 
const loadQuotationList = () => {
    setQuotation(dummyData)
Axios.get("quotation/index")
.then((response) => {
console.log(response);
setQuotation(response.data.quotations);
})
.catch((error) => {
console.log(error);
})
};

//create the API for creating the Quotation
const addQuotation = (quotations) => {
    Axios.post("quotation/add",quotations)
    .then(res =>{
        console.log(res);
                    console.log("Quotation Added!");
                    loadQuotationList();
                })
                .catch((err) =>{
                    console.log("Error in adding!");
                    console.log(err);
                })
            }

//create the API for preparing the content for the Edit Form
const editView = (id) => {
// console.log(passToken)
Axios.get(`quotation/edit?id=${id}`)
.then( ( res ) => {
    // console.log("Loaded Quotation Information");
    // console.log(res.data.quotation);
    let quotation = res.data.quotation;
    setIsEditQuotation(true);
    setCurrentQuotation(quotation);
})
.catch((error) => {
    console.log("Error loading quotation Information: ");
    console.log(error);
})
}

//create the API for Update Quotation 
const updateQuotation = (quotations) => {
Axios.post("quotation/update",quotations)
.then(( res ) => {
    console.log("Quotation Updated Successfully!");
    console.log(res);
    setIsCreateQuotation(false);
    setIsEditQuotation(false); //reset to hide the form again
    loadQuotationList();
})
.catch((error) => {
    console.log("Error Updating Quotation Information: ");
    console.log(error); 
})
}

//create Delete API to Delete Quotation
const deleteQuotation = (id) => {
Axios.get(`quotation/delete?id=${id}`)
.then(( res ) => {
    console.log("Quotation Deleted Successfully!");
    // console.log(res);
    loadQuotationList();
})
.catch((error) => {
    console.log("Error finding the Quotation Information: ");
    console.log(error);
})
}

//return arrow function with normal bracket as it treats this as one value
const allQuotation = quotations.map((quotation, index) => (
<tr key={index}>
    {/* <Quotation name={quotation.name} emailAddress={quotation.emailAddress} index={index} /> */}
    { props.user?.userType == 3 ? ( quotation.user == props.user._id ? 
    <> 
        <Quotation {...quotation} index={index+1} editView={editView} deleteQuotation={deleteQuotation} isEditQuotation={isEditQuotation} setIsEditQuotation={setIsEditQuotation} />
    </>
    :
    <><br /><p className="text-white">  End of Contribution List</p></>
    ) : 
    <> 
        <Quotation {...quotation} index={index+1} editView={editView} deleteQuotation={deleteQuotation} isEditQuotation={isEditQuotation} setIsEditQuotation={setIsEditQuotation} />
    </>
    }
</tr>    
))

return (
<>



<div className="container py-5 mb-5">

    {(isCreateQuotation) ?
    <>
    <QuotationCreateForm addQuotation={addQuotation} isCreateQuotation={isCreateQuotation} setIsCreateQuotation={setIsCreateQuotation } />
    </>
        : 
    
    (isEditQuotation) ?
        <>
        <QuotationEditForm userID={props.userID} key={currentQuotation._id} quotation={currentQuotation} editView={editView} updateQuotation={updateQuotation} isEditQuotation={isEditQuotation} setIsEditQuotation={setIsEditQuotation} />
        </>
    :
    <>
    <button onClick={() => setIsCreateQuotation(true)} className="btn btn-primary">Add Quotation</button>
    <br />
    <br />
    <h5> Quotation List</h5>
    <table className="table">
    <tbody>
        <tr className="table-success">
        <th>No.</th>
        <th>Consultation Id</th>
        <th>Description</th>
        <th>Date / Time</th>
        <th>Location</th>
        <th>quantity</th>
        <th>Price</th>
        <th>Notes(s)</th>
        <th></th>
        </tr>
            { allQuotation != null ? allQuotation : "No data" }
        </tbody>
    </table>
</>
}
</div>


</>
)

}

