import React, { useState, useEffect } from 'react';
import Axios from 'axios';


export default function AppointmentCreateForm(props) {

    const [newAppointment , setNewAppointment] = useState({});
    

    const [userId, setUserId] = useState('');
    const [selectConsultation , setSelectConsultation] = useState("");
    const [selectedConsultationInfo , setSelectedConsultationInfo] = useState();
    const [consultation, setConsultation] = useState([]);
    console.log(newAppointment.user);
    newAppointment.user = sessionStorage.getItem("UserId");
   
    
    useEffect(() => {
      // Fetch selected consultation details whenever the selectConsultation value changes
      loadConsultationList();
    }, []);
    const loadConsultationList = () => {
      // Axios.get("/consultations/index", props.Token)
      Axios.get("/consultations/index")
      .then((response) => {
      console.log(response);
      setNewAppointment(prev => ({...prev, consultation:response.data.consultations[0]._id}))
      setConsultation(response.data.consultations);
      })
      .catch((error) => {
      console.log(error);
      })
      };
  
    const handleChange = (event) => {

        const attributeToChange = event.target.name ; 
        const NewValue = event.target.value;

        const appointment={...newAppointment};
        appointment[attributeToChange]= NewValue;
        console.log(appointment);
        setNewAppointment(appointment);
    }

    const handleConsultationChange = (event) => { 
      const attributeToChange = event.target.name;
      const newConsultation = event.target.value;
  
      console.log(newConsultation);
  
      setSelectConsultation(newConsultation);
      const appointment = { ...newAppointment, consultation: newConsultation };
      appointment[attributeToChange] = newConsultation;
      setNewAppointment(appointment);
      consultationView(newConsultation);
  } 
  const consultationView = (id) => {
    console.log(id)
    Axios.get(`/consultations/detail?id=${id}`)
  //Axios.get('/consultations/detail')
  //Axios.get('/consultations/index')
  .then( ( res ) => {
      console.log("Loaded Consultation Info");
      //console.log(res.data.consultations);
      // let consultation = res.data.consultations;
  
      setSelectedConsultationInfo(res.data.consultation);
  
  })
  .catch((error) => {
      console.log("Error loading Consultation Information: ");
      console.log(error);
  })
  
  // const UserAttrib = "User";
  // quotation[UserAttrib] = props.userID;
  
  // setnewQuotation(quotation);
  // console.log(quotation);      
  }

  
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.addAppointment(newAppointment);
        
    }

    return (
    <div className="container py-1 mb-5">
      <h1> Create Appointment </h1>
      <div className="row g-5">

      <div className="col-md-6 col-lg-6"> 
      <form onSubmit={handleSubmit}> 
      
      <div className="mb-3 pb-1">
          <label  className="form-label">User: </label>
          <input className="form-control" type='text' htmlFor='user' value={newAppointment.user} readOnly></input>
        </div>
        {/* <div>
          <label>newAppointment.consolation</label>
          <input type='text' htmlFor='consultation' id="consultation" value={selectConsultation} onChange={handleConsultationChange}></input>
        </div> */}
          <div className="mb-3 pb-1">
  <label htmlFor="consultation" id="consultation" className="form-label">Consultation: </label> 
  <select  name="consultation"  className="form-select" onChange={handleConsultationChange} required>
    <option value="" disabled>
      Select a monitored Consultation
    </option>
    { consultation.length > 0 ?

    consultation.map((consult) => (
      <option value={consult._id}>
        {consult.consultation_description}
      </option>
    ))
    :
    null}
  </select>
</div>
        <div className="mb-3 pb-1">
            <label htmlFor="date" className="form-label"> Date / Time </label> 
            {/* <input type="time" className='form-control' name="time" onChange={handleChange}></input> */}
            <input className="form-control" type="datetime-local"  id="date" name="date" onChange={handleChange} required/>


            </div>
        <div className="mb-3 pb-1">
       
          <label htmlFor="location" className="form-label">Location of Appointment </label>
          <input className="form-control" type='text' name='location' id="location" onChange={handleChange}></input>
        </div>
        <div className="mb-3 pb-1">
        <label htmlFor="notes" className="form-label"> Notes </label>
          <textarea className="form-control" type='text' name='notes'  id="notes"  onChange={handleChange}></textarea>
        </div>

        <div className="mb-3 pb-1">
          <input className='btn btn-primary' type='submit' value="Add Appointment"></input>
        </div>
      </form>

  
              <div> 
              {JSON.stringify(selectedConsultationInfo)}
                {selectConsultation}<br/>
                {JSON.stringify(selectedConsultationInfo)?  selectedConsultationInfo :"" }
                
                </div>
        </div>
            </div>
    </div>
  )
}

