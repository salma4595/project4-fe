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
    console.log(appointments);
    setAppointments(response.data.appointments);
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
                Axios.put('//appointment/update',appointment)
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
            let appointmentArray;
            appointmentArray = [];
            
            // const allAppointments = appointments.map((appointments, index) => (
            // //{...appointment}
            
            // appointmentArray.push({...appointments})
            
            //     ))
            
            console.log(appointmentArray);
            
              
              
              return (
                <div>
                  <h1>Appointments List</h1>
                  <div>
                    {/* {appointments.length ? ( */}
                      <table>
                        <tbody>
                          <tr>
                            <th>Index</th>
                            <th>Consultation Id</th>
                            <th>Date</th>
                            <th>Location</th>
                            <th>Notes</th>
                            <th></th>
                          </tr>
                          {/* {allAppointments} */}
                        </tbody>
                      </table>
                    ) : (
                      <p>No appointments available</p>
                    )}
                  </div>
                  {/* Rest of the code */}
                </div>
              );
                    }