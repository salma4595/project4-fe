import React from 'react';
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Axios from 'axios'; //AJAX functionality for React (npm i axios)
import Appointment from './Appointment';
import AppointmentCreateForm from './AppointmentCreateForm';
import AppointmentEditForm from './AppointmentEditForm';
import dummyData from './dummy'


export default function AppointmentList(props) {
    
const [appointments, setAppointments] = useState([]); //this is used for Create
    const [currentAppointment, setCurrentAppointment] = useState({}); //this is used to set the content for the Edit form
    const[isCreateAppointment,setIsCreateAppointment]=useState(false);
    const[isEditAppointment,setIsEditAppointment]=useState(false);
    

    
useEffect(() => {
    //call API
    loadAppointmentList();
    },[]); //this end array is the conditional option

    const loadAppointmentList = () => {
        // setAppointment(dummyData)
    Axios.get("/appointment/index")
    .then((response) => {
    console.log(response);
    setAppointments(response.data.appointments);
    console.log(response.data.appointments); // Add this line
    })
    .catch((error) => {
    console.log(error);
    })
    };


//create the API for creating the Appointment
const addAppointment = (appointment) => {
    Axios.post("/appointment/add",appointment)
    .then(res =>{
        console.log(res);
                    console.log("Appointment Added!");
                    loadAppointmentList();
                })
                .catch((err) =>{
                    console.log("Error in adding Appointment!");
                    console.log(err);
                })
            }
            const editView = (id) =>{
                Axios.get(`/appointment/edit?id=${id}`)
                .then((res) =>{
                    console.log(res.data.appointment);
                    console.log("Loaded Appointment Information");
                    let appointment= res.data.appointment;
                    setIsEditAppointment(true);
                    setCurrentAppointment(appointment);
            
                })
                .catch(err =>{
                    console.log("Error in loading Appointment!");
                    console.log(err);
                })
            }
            
            const updateAppointment = (appointment) =>{
                Axios.put('/appointment/update',appointment)
                .then(res =>{
                    console.log(res);
                    console.log("Loaded Appointment updated");
                    loadAppointmentList();
            
                })
                .catch(err =>{
                    console.log("Error in loading Appointment!");
                    console.log(err);
                })
            }
            const deleteAppointment = (id) =>{
                Axios.get(`/appointment/delete?id=${id}`)
                .then(res =>{
                    
                    console.log("Appointment deleted!");
                    console.log(res);
                    loadAppointmentList();
            
                })
                .catch(err =>{
                    console.log("Error in deleting information!");
                    console.log(err);
                })
            }
           
//return arrow function with normal bracket as it treats this as one value
const allAppointments = appointments && appointments.map((appointment, index) => (
    <tr key={index}>
      <Appointment name={appointment.name} emailAddress={appointment.emailAddress} index={index} />
        { props.user?.userType == 3 ? ( appointment.user == props.user._id ? 
        <> 
            <Appointment {...appointment} index={index+1} editView={editView} deleteAppointment={deleteAppointment} isEditAppointment={isEditAppointment} setIsEditAppointment={setIsEditAppointment} />
        </>
        :
        <><br /><p className="text-white">  End of Contribution List</p></>
        ) : 
        <> 
            <Appointment {...appointment} index={index+1} editView={editView} deleteAppointment={deleteAppointment} isEditAppointment={isEditAppointment} setIsEditAppointment={setIsEditAppointment} />
        </>
        }
    </tr>    
    ))
          
    console.log(allAppointments); // Add this line
    return (
    <>
    
    
    
    <div className="container py-5 mb-5">
    
        {(isCreateAppointment) ?
        <>
        <AppointmentCreateForm addAppointment={addAppointment} isCreateAppointment={isCreateAppointment} setIsCreateAppointment={setIsCreateAppointment } />
        </>
            : 
        
        (isEditAppointment) ?
            <>
            <AppointmentEditForm userID={props.userID} key={currentAppointment._id} appointment={currentAppointment} editView={editView} updateAppointment={updateAppointment} isEditAppointment={isEditAppointment} setIsEditAppointment={setIsEditAppointment} />
            </>
        :
        <>
        <button onClick={() => setIsCreateAppointment(true)} className="btn btn-primary">Add Appointment</button>
        <br />
        <br />
        <h5> Appointment List</h5>
        <table className="table">
      <tbody>
        <tr className="table-success">
          <th>No.</th>
          <th>Quotation Id</th>
          <th>Description</th>
          <th>Date / Time</th>
          <th>Location</th>
          <th>quantity</th>
          <th>Price</th>
          <th>Notes(s)</th>
          <th></th>
        </tr>
        
  
        {Array.isArray(allAppointments) && allAppointments.length > 0 ? allAppointments : "I dont get appointment index No data"}
      </tbody>
    </table>
</>
}
</div>


</>
)

}