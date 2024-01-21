import React from 'react';
// import { Routes, Route, Link, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Axios from 'axios'; //AJAX functionality for React (npm i axios)
import Appointment from './Appointment';
import AppointmentCreateForm from './AppointmentCreateForm';
import AppointmentEditForm from './AppointmentEditForm';
import dummyData from './dummy'


export default function AppointmentList(props) {
    const [appointments, setAppointment] = useState([]); //this is used for Create
    const [currentAppointment, setCurrentAppointment] = useState({}); //this is used to set the content for the Edit form
    const[isCreateAppointment,setIsCreateAppointment]=useState(false);
    const[isEditAppointment,setIsEditAppointment]=useState(false);
    

    
useEffect(() => {
    //call API
    loadAppointmentList();
    },[]); //this end array is the conditional option

    const loadAppointmentList = () => {
        setAppointment(dummyData)
    Axios.get("appointment/index")
    .then((response) => {
    console.log(response);
    setAppointment(response.data.appointments);
    })
    .catch((error) => {
    console.log(error);
    })
    };


//create the API for creating the Appointment
const addAppointment = (appointments) => {
    Axios.post("appointment/add",appointments)
    .then(res =>{
        console.log(res);
                    console.log("Appointment Added!");
                    loadAppointmentList();
                })
                .catch((err) =>{
                    console.log("Error in adding!");
                    console.log(err);
                })
            }
            const editView = (id) =>{
                Axios.get(`appointment/edit?id=${id}`)
                .then((res) =>{
                    console.log(res.data.appointment);
                    console.log("Loaded Appointment Information");
                    let appointment= res.data.appointment;
                    setIsEditAppointment(true);
                    setCurrentAppointment(appointment);
            
                })
                .catch(err =>{
                    console.log("Error in loading information!");
                    console.log(err);
                })
            }
            
            const updateAppointment = (appointment) =>{
                Axios.put('appointment/update',appointment)
                .then(res =>{
                    console.log(res);
                    console.log("Loaded  Information updated");
                    loadAppointmentList();
            
                })
                .catch(err =>{
                    console.log("Error in loading information!");
                    console.log(err);
                })
            }
            const deleteAppointment = (id) =>{
                Axios.get(`appointment/delete?id=${id}`)
                .then(res =>{
                    
                    console.log("Record  Information deleted!");
                    console.log(res);
                    loadAppointmentList();
            
                })
                .catch(err =>{
                    console.log("Error in deleting information!");
                    console.log(err);
                })
            }
            const allAppointments  = appointments.map((appointment,index) =>(
                <tr key={index}>
                <Appointment {...appointment} editView={editView} deleteAppointment={deleteAppointment}></Appointment>
                
                </tr>
            ))
            return (
                <div><h1>Appointments List</h1>
                <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Index</th>
                                <th> Consultation Id</th>
                                <th> date</th>
                                <th> location</th>
                                <th> notes</th>
                                <th> </th>
                            </tr>
                            {allAppointments}
                        </tbody>
                    </table>
                </div>{(!isEditAppointment)?
                <AppointmentCreateForm  addAppointment={addAppointment}></AppointmentCreateForm>
                :
                <AppointmentEditForm key={currentAppointment._id} appointment={currentAppointment} updateAppointment={updateAppointment}></AppointmentEditForm>
            }
                </div>
              )


}
