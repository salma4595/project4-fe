import React from 'react'
import { Link } from 'react-router-dom'
// import Review from '../review/Review'
import Axios from 'axios';
// import FetchUserInfo from './FetchUserInfo'

export default function UserProfile(props) {
  console.log('props',props);
  return (
    <>
    {/* <FetchUserInfo id={props.id}/> */}
    <td>{props.user_fullName}</td>
    
    <td>{props.user_phoneNumber}</td>
    <td>{props.user_emailAddress}</td>
    {/* <td>{props.user_password}</td> */}
    <td> <img src={props.user_image} className="card-img-top" style={{ width: "50%", height: "auto", objectFit: "contain" }} alt={props.user_fullName} />
     </td>
    {/* <td><button onClick={() => props.editView(props._id)}>Edit</button></td> */}
    {/* <td><button onClick={() => props.deleteUser(props._id)}>Delete</button></td> */}

    <Link to={"/user/EditProfile/"} > {/* Add the Link component */}
              Edit</Link>
    </>
    // <div className='profilePage'>
    //   <div className=''>
    //     {/* Review List and Request form to be independent Showcaser */}
    //     <p className='profileReviewList'><Link to="/review/index">Reviews</Link></p>
    //   </div>


    // </div>
  )
}
