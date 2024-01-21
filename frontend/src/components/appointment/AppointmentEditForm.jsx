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
          <input type='text' name='name'value={appointment.name} onChange={handleChange}></input>
        </div>

     

        <div>
          <input type='submit' value="updateAppointment"></input>
        </div>
      </form>
    </div>
  )
}

