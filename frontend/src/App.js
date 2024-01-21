import React from 'react'
import ConsultationList from './components/consultation/consultationList'
// import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import 'bootstrap-icons/font/bootstrap-icons.css';


import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router-dom'
import { Routes } from 'react-router-dom';

import { Route } from 'react-router-dom';
import AddCompanyForm from './components/company/AddCompanyForm';
import JoinRequestForm from './components/company/JoinRequestForm';
import Companies from './components/company/Companies';
import CategoryList from './components/Category/CategoryList';
import SignUpForm from './components/user/SignUpForm';
import SignInForm from './components/user/SignInForm';
// import EditProfile from './components/user/EditProfile';
import UserProfile from './components/user/UserProfile';
import UserList from './components/user/UserList';
import HomePage from './components/homePage/HomePage';
import CompanyDetails from './components/company/CompanyDetails';
import QuotationList from './components/quotation/QuotationList';
import AppointmentList from './components/appointment/AppointmentList';
// import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
    hello
    It's me
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/AddCompanyForm">Add Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/JoinRequestForm">Join As a Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/Companies">Show Companies</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/SignUpForm"> Sign Up</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/SignInForm"> Sign In</Link> &nbsp;
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/EditProfile"> Edit Profile</Link> &nbsp; */}
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserList"> User List </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserProfile"> User Profile </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/CompanyDetails"> Company Details </Link> &nbsp;
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/Category/CategoryList">Category List</Link> &nbsp;
  */}

<Link className="nav-link text-white d-inline" style={{padding:10}} to="/quotation/QuotationList"> QuotationList </Link> &nbsp;
<Link className="nav-link text-white d-inline" style={{padding:10}} to="/appointment/AppointmentList"> Appointment List </Link> &nbsp;
    <Routes>
    <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/company/AddCompanyForm" element={<AddCompanyForm/>} />
      <Route path="/company/JoinRequestForm" element={<JoinRequestForm/>} />
      <Route path='/company/Companies' element={<Companies/>} />
      <Route path='/Category/CategoryList' element={<CategoryList/>} />
      <Route path='/user/SignUpForm' element={<SignUpForm/>} />
      <Route path='/user/SignInForm' element={<SignInForm/>} />
      <Route path='/user/UserList' element={<UserList/>} />
      <Route path='/user/UserProfile' element={<UserProfile/>} />
      <Route path='/company/CompanyDetails' element={<CompanyDetails/>} />
      <Route path="/company/CompanyDetails/:id" element={<CompanyDetails></CompanyDetails>} />
          
      {/* <Route path='/user/EditProfile' element={<EditProfile/>} /> */}
      <Route path='/quotation/QuotationList' element={<QuotationList/>} />
      <Route path='/appointment/AppointmentList' element={<AppointmentList/>} />
      
    </Routes>
    <footer className="px-3 py-2 text-bg-dark mt-5 stickToBottom">
        <div className="container">
          <p className="mb-1 text-white">&copy; 2024 | Voiture App </p>
        </div>
      </footer>
    </>
    
  );
}

export default App;









































