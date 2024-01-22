import React, { useState } from 'react';
// import Axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function QuotationEditForm(props) {
    const [quotation , setQuotation] = useState(props.quotation);
    quotation.user = sessionStorage.getItem("UserId");
    const handleChange = (event) => {

        const attributeToChange = event.target.name ; 
        const NewValue = event.target.value;

        const updateQuotation={...quotation};
        updateQuotation[attributeToChange]= NewValue;
       
        setQuotation(updateQuotation);
         console.log(updateQuotation);
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        props.updateQuotation(quotation);
        // event.target.reset();
    }

    return (
    <div>
      <h1> Edit Quotation </h1>

      <form onSubmit={handleSubmit}> 
      <div>
          <label>User</label>
          <input type='text' name='user'value={quotation.user} onChange={handleChange} disabled></input>
        </div>
        <div>
          <label>company</label>
          <input type='text' name='company'value={quotation.company} onChange={handleChange} readOnly></input>
        </div>
      <div>
          <label>Consultation</label>
          <input type='text' name='Consultation'value={quotation.Consultation} onChange={handleChange} readOnly></input>
        </div>
        <div>
          <label>date</label>
          <input type='text' name='date'value={quotation.date} onChange={handleChange} readOnly></input>
        </div>
        <div>
          <label>description</label>
          <textarea type='text' name='description'value={quotation.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>location</label>
          <input type='text' name='location'value={quotation.location} onChange={handleChange}></input>
        </div>
        <div>
          <label>notes</label>
          <textarea type='text' name='notes'value={quotation.notes} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>quantity</label>
          <input type='number' name='quantity'value={quotation.quantity} onChange={handleChange}></input>
        </div>
        <div>
          <label>price</label>
          <input type='number' name='price'value={quotation.price} onChange={handleChange}></input>
        </div>


     

        <div>
          <input type='submit' value="updateQuotation"></input>
        </div>
      </form>
    </div>
  )
}

