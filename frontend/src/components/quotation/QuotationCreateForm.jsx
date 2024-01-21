import React, { useState, useEffect } from 'react';
import Axios from 'axios';




export default function QuotationCreateForm(props) {

const QuotationForm = () => {
    const [formData, setFormData] = useState({
        
       
    });
}

const [consultation, setConsultation] = useState([]);

useEffect(() => {
    //call API
    loadConsultationList(); 
       
},[]);

//for quotation form
const loadConsultationList = () => {
Axios.get("consultation/index", props.passToken)
.then((response) => {
console.log(response);
setConsultation(response.data.consultation);
})
.catch((error) => {
console.log(error);
})
};

const [newQuotation , setnewQuotation] = useState({});


const[newPrice, setNewPrice] = useState("");
const[newLong, setNewLong] = useState("");

const [image, setImage] = useState(null);
const [preview, setPreview] = useState(null);
const [loading, setLoading] = useState(false);
const [url, setUrl] = useState("");

const handleChange = (event) => { 
    const attributeToChange = event.target.name;
    const newValue = event.target.value;

    const quotation = {...newQuotation};
    quotation[attributeToChange] = newValue;
    console.log(quotation);
    setnewQuotation(quotation);
} 

const [selectConsultation , setSelectConsultation] = useState("");
const [selectedConsultationInfo , setSelectedConsultationInfo] = useState();

const handleConsultationChange = (event) => { 
    const attributeToChange = event.target.name;
    const newConsultation = event.target.value;

    //console.log(newConsultation);

    setSelectConsultation(newConsultation);

    const quotation = {...newQuotation};
    // quotation[attributeToChange] = newConsultation;
    setnewQuotation(quotation);
    consultationView(newConsultation);
} 


const handleSubmit = (event) =>{
    event.preventDefault();
    props.addQuotation(newQuotation);
    
}

const consultationView = (id) => {
Axios.get(`consultation/detail?id=${id}`)
.then( ( res ) => {
    console.log("Loaded Consultation Info");
    console.log(res.data.consultation);
    //let consultations = res.data.consultation;

    setSelectedConsultationInfo(res.data.consultation);

})
.catch((error) => {
    console.log("Error loading Consultation Information: ");
    console.log(error);
})
}

// Wael upload image cahnges 
const [formData, setFormData] = useState({});



  return (
    <div className="container py-1 mb-5">
        <h1>Quotation for Inquire </h1>
        

        <div className="row g-5">

        <div className="col-md-6 col-lg-6">
        <form onSubmit={handleSubmit} autoComplete="off">
            {/* <div className="mb-3 pb-1">
                <label htmlFor="consultation" className="form-label">Consultation: </label>
                
                <select id="consultation" name="consultation" className="form-select" onChange={handleConsultationChange} required>
                <option value="" selected disabled>Select a monitored Consultation</option>
                {   
                    consultation.map( (consultations, index) => (
                        <option key={index} value={consultations._id}>{consultations.name}</option>
                    )
                )}

                </select>
            </div> */}

            {/* <div className="mb-3 pb-1">
                <label htmlFor="date" className="form-label">Date</label>
                <input type="text" className='form-control' name="date" onChange={handleChange}></input>
            </div> */}

            <div className="mb-3 pb-1">
            <label htmlFor="date" className="form-label"> Date / Time </label> 
            {/* <input type="time" className='form-control' name="time" onChange={handleChange}></input> */}
            <input type="datetime-local" className="form-control" id="date" name="date" onChange={handleChange} required/>


            </div>
            {/*             
            <div className="mb-3">
                <label htmlFor="date" className="form-label">
                  Time/Date:
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="date"
                  name="date"
                  value={formData.dateTime}
                  onChange={handleChange}
                />
              </div> */}


            <div className="mb-3 pb-1">
                <label className="form-label">description</label>
                <textarea type="text" className='form-control' name="description" onChange={handleChange} required/>
            </div>


         

            <div className="col-sm-6">
                <div className="mb-3 pb-1">
                    <label htmlFor="location" className="form-label">location</label>
                    <input type="text" className='form-control' id="location" name="location"  onChange={handleChange} required />
                </div>
            </div>
            <div className="col-sm-6">
                <div className="mb-3 pb-1">
                    <label htmlFor="quantity" className="form-label">quantity: </label>
                    <input type="number" className='form-control' id="quantity" name="quantity" onChange={handleChange} required /> 
                </div>
           
            <div className="col-sm-6">
                <div className="mb-3 pb-1">
                    <label htmlFor="price" className="form-label">price: </label>
                    <input type="number" className='form-control' id="price" name="price"  onChange={handleChange} required />
                </div>
            </div>
            </div>
            <div className="mb-3">
                <label htmlFor="notes" className="form-label"> Note:</label>
                <textarea className="form-control" id="notes" name="notes" value={formData.note} onChange={handleChange}></textarea>
            </div>
            <div className="mb-3 pb-1">
                <button onClick={ () => props.setIsCreateQuotation(false) } className="btn btn-secondary me-2">Cancel</button>
                <input className='btn btn-primary' type="submit" value="Add Quotation" />
            </div>
            
        </form>
        </div>

        <div className="col-md-6 col-lg-6">
              
              

              <div className="mb-3">
                {/* <label className="form-label">Preview Image:</label> */}
                <div >
                {/* {formData.image && (
                  <img src={URL.createObjectURL(formData.image)} alt="Preview" className="img-fluid" />
                )} */}
                {preview && <img src={preview} alt="Preview" className="img-fluid"/>}
                </div>
              </div>

            <div>
                {selectConsultation}<br />
                { selectedConsultationInfo ? JSON.stringify(selectedConsultationInfo) : "" } 
            </div>
        </div>

        </div>
        
    </div>
  )
}
