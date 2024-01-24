import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Axios from 'axios';
import Consultation from './consultation';
import ConsultationCreateForm from './consultationCreateForm';
import ConsultationEditForm from './consultationEditForm';
import { Link, useParams } from 'react-router-dom';

export default function ConsultationList(props){
    const [consultations, setConsultations] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [currentConsultations, setCurrentConsultations] = useState({})
    const[isCreateQuotation,setIsCreateQuotation]=useState(false);
    useEffect(() => {
        //call api
        loadConsultationList()
      }, []);

      
  // const loadConsultationList = () => {
  //   Axios.get("/consultations/index")
  //   .then((response) => {
  //     console.log(response);
  //     setConsultations(response.data.consultations);
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  // }
  const loadConsultationList = (companyId) => {
    Axios.get(`/consultations/index?companyId=${companyId}`)
      .then((response) => {
        console.log(response);
        setConsultations(response.data.consultations);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  

  const addConsultation = (consultations) => {
    Axios.post("/consultations/add", consultations, { headers: {'Content-Type': 'multipart/form-data'}})
    .then(res =>{
    console.log('Consultation has been sent') 
    loadConsultationList()
  })
   
    .catch(err => {

   console.log('Error cannot Add')
  console.log(err) })

  }


  const editConsultation = (id) => {
    Axios.get(`/consultations/edit?id=${id}`)
    .then((res) => {
      console.log(res.data) 
      console.log('Loaded the Information') 
     let consultations = res.data.consultations   
    setIsEdit(true)
    setCurrentConsultations(consultations) 
    })
       .catch(err => {
        console.log('error')
        console.log(err)
       })
    
      }
    
  

  
  const updateTheview = (consultations) => {
    Axios.put("/consultations/update", consultations , { headers: {'Content-Type': 'multipart/form-data'}}  )
    
    .then(res => {
      console.log('consultations has been Updated')
      console.log(res)
      loadConsultationList()
      setIsEdit(false)
    })
    
    .catch(err => {
      console.log('Cannot Update')
      console.log(err)
    })
      }


      const deleteConsultation = (id) => {
        Axios.delete(`/consultations/delete?id=${id}`)
        .then(res => {
          console.log('Consultation has been Deleted')
          console.log(res)
          loadConsultationList()
        })
        
        .catch(err => {
          console.log('cannot delete')
          console.log(err)
        })
          }


// const theConsultataionRound = consultations.map((consultation, index) => (
//   <tr key={index}>
    
//     <Consultation {...consultation}  editForm = {editConsultation}  deleteForm = {deleteConsultation}></Consultation>

//   </tr>
// ))
//return arrow function with normal bracket as it treats this as one value
const theConsultataionRound = consultations.map((consultation, index) => (
    
  <tr key={index}>
  {/* <Quotation name={quotation.name} emailAddress={quotation.emailAddress} index={index} /> */}
  {props.user?.userType == "User" ? ( consultation.user == props.user._id ? 
  <> 
  
 
      <Consultation { ...consultation} index={index+1} editView={editConsultation} deleteQuotation={deleteConsultation} isEdit={isEdit} setIsEdit={setIsEdit} />
  </>
  :
  <><br /><p className="text-white">  End of Contribution List</p></>
  ) : 
  <> 
      <Consultation { ...consultation} index={index+1} editView={editConsultation} deleteQuotation={deleteConsultation} isEdit={isEdit} setIsEdit={setIsEdit} />
  </>
  }
</tr>    
))
return(
  <>
  <div>
      <h2 className='text-center mt-4'>Consultation List</h2>
       <div  className='row d-flex justify-content-center align-items-center text-center table table-bordered mb-2'>
       <div className='col-md-6 '>
         <table className="table table-stripes table mt-4 table border-top">
          <thead>
            <tr>
            <th>Index</th>
              <th>Description</th>
              <th>Location Image</th>
              <th>Land Area</th>
              <th>width x length</th>
              <th>Land Map</th>
             
             <th>Edit</th>
             <th>Delete</th>
            </tr>   
          </thead>
          <tbody>{theConsultataionRound}</tbody>
        </table>
        </div>
    </div>
    {(!isEdit) ? 
  
      <Consultation user_fullName={props.user_fullName} addAConsultation={addConsultation}></Consultation>
      :
      <Consultation key={currentConsultations._id}  presentConsultation={currentConsultations} editConsultation={editConsultation} updateTheview={updateTheview}></Consultation>
}
    </div>
    <Link  to={`/quotation/QuotationCreateForm/${consultations._id}`}>Add Quotation</Link>
</>

)

 
}







{/* <div>
  <h2 className="text-center mt-4">Consulltation List</h2>
  <div className="row d-flex justify-content-center align-items-center text-center table table-bordered mb-2">
    <div className="col-md-7">
      <table className="table table-striped mt-4 table-border-top">
        <thead>
          <tr>
            <th>consultation_description</th>
            <th>Consultation_image</th>
            <th>consultation_land_area (Width)</th>
            <th>consultation_land_area (Height)</th>
            <th>consultation_land_dimensions</th>
            <th>consultation_land_map</th>
            <th>consultation_land_autocad</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>{theConsultataionRound}</tbody>
      </table>
    </div>
  </div>
  {!isEdit ? (
    <ConsultationCreateForm addAConsultation={addConsultation}></ConsultationCreateForm>
  ) : (
    <ConsultationEditForm
      key={currentConsultations._id}
      presentConsultation={currentConsultations}
      updateTheview={updateTheview}
    ></ConsultationEditForm>
  )}
</div> */}