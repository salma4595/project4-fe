import React, { useState } from 'react'


export default function AppointmentCreateForm(props) {

    const [newAppointment , setNewAppointment] = useState({});
    
    const handleChange = (event) => {

        const attributeToChange = event.target.name ; 
        const NewValue = event.target.value;

        const appointment={...newAppointment};
        appointment[attributeToChange]= NewValue;
        console.log(appointment);
        setNewAppointment(appointment);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.addAppointment(newAppointment);
        
    }

    return (
    <div>
      <h1> Create Appointment </h1>

      <form onSubmit={handleSubmit}> 
        <div>
          <label>Consultation</label>
          <input type='text' name='Consultation' onChange={handleChange}></input>
        </div>
        <div className="mb-3 pb-1">
            <label htmlFor="date" className="form-label"> Date / Time </label> 
            {/* <input type="time" className='form-control' name="time" onChange={handleChange}></input> */}
            <input type="datetime-local" className="form-control" id="date" name="date" onChange={handleChange} required/>


            </div>
        <div>
          <label>location</label>
          <input type='text' name='location' onChange={handleChange}></input>
        </div>
        <div>
          <label>notes</label>
          <textarea type='text' name='notes' onChange={handleChange}></textarea>
        </div>

        <div>
          <input type='submit' value="Add Appointment"></input>
        </div>
      </form>
    </div>
  )
}

