import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime"; 
// dayjs.extend(relativeTime);

export default function Appointment(props) {
  return (
    <>
    <td>{props.index}</td>
    {/* <td>{props.Consultation}</td> */}
    <td>{props.date}</td>
    <td>{props.location}</td>
    <td>{props.notes}</td>
    <td>
    <button type="button" onClick={() => props.editView(props._id)} className="btn btn-sm btn-warning"><FontAwesomeIcon icon="pencil" />Edit</button> 
    <button type="button" onClick={() => props.deleteAppointment(props._id)} className="btn btn-sm btn-danger"><FontAwesomeIcon icon="trash"/>Delete</button>
    </td>
    </>
  )
}