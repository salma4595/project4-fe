import React,{useState} from 'react'

export default function AppointmentEditForm(props) {
    const [appointment , setAppointment] = useState(props.appointment);
    
    const handleChange = (event) => {

        const attributeToChange = event.target.name ; 
        const NewValue = event.target.value;

        const updateAppointment={...appointment};
        updateAppointment[attributeToChange]= NewValue;
       
        setAppointment(updateAppointment);
         console.log(updateAppointment);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.updateAppointment(appointment);
        // event.target.reset();
    }

    return (
    <div>
      <h1> Edit Appointment </h1>

      <form onSubmit={handleSubmit}> 
       

        <div>
          <label>Consultation</label>
          <input type='text' name='Consultation' value={appointment.Consultation} onChange={handleChange} disabled></input>
        </div>
        <div>
          <label>date</label>
          <input type='text' name='date'value={appointment.date} onChange={handleChange} ></input>
        </div>
        
        <div>
          <label>location</label>
          <input type='text' name='location'value={appointment.location} onChange={handleChange}></input>
        </div>
        <div>
          <label>notes</label>
          <textarea type='text' name='notes'value={appointment.notes} onChange={handleChange}></textarea>
        </div>
      


     

        
        <div>
          <input type='submit' value="Update Appointment"></input>
        </div>
      </form>
    </div>
  )
}

