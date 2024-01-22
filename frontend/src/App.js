import React, { useEffect, useState } from "react";
import ConsultationList from './components/consultation/consultationList'
// import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';

import Axios from "axios";
import { jwtDecode } from "jwt-decode";
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

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState({});
  const [userList, setUserList] = useState([user]);
  const [currentUser, setCurrentUser] = useState();
  const [userInfo,setUserInfo]=useState()


  useEffect(() => {
    //const user = setUser();
    const user = getUser();
    console.log("INIT USER",user);
    if (user) {
      console.log('user if', user);
      setIsAuth(true);
      setUser(user);
      // setUserInfo(user.id)
      showUser(user.id)
    } else {
      localStorage.removeItem("token");
      setIsAuth(false);
      setUser(null);
      
    }
  }, []);

  const registerHandler = (user) => {
    Axios.post("auth/signup", user)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const loginHandler = (cred) => {
    Axios.post("/auth/signin", cred)
      .then((res) => {
        console.log(res.data.token);
        //Makes sure the token is Valid
        let token = res.data.token;
        if (token != null) {
          localStorage.setItem("token", token);
          const user = getUser();
          console.log(user);
          sessionStorage.setItem("UserId", user.id);
          user ? setIsAuth(true) : setIsAuth(false);
          user ? setUser(user) : setUser(null);
          user ? showUser(user.id) : showUser(null)
          // user ? setUserInfo(user.id) : setUserInfo(null)
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getUser = () => {
    const token = getToken();
    return token ? jwtDecode(token).user : null;
  };
  const getToken = () => {
    const token = localStorage.getItem("token");
    return token;
  };
  const onLogoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setIsAuth(false);
    setUser(null);
    setUserInfo(null);
  };
  const showUser = (id) =>{
    Axios.get(`/user/detail?id=${id}`)
    .then((response) => {
      console.log('user app.js',response)
      let user = response.data.user
      setCurrentUser(user)
      setUserInfo(user)
  })
  .catch((err) => {
      console.log(err)
  })
  }
  const setHeaders =() =>{
    return {headers:{Authorization:`Bearer ${getToken()}`}}
  }

  return (
    <>
    {isAuth ? ( 
    <div>

       <Link to="/" className="btn">Home</Link>&nbsp;
      <Link to="/logout" onClick={onLogoutHandler} className="btn">Logout</Link>
      <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/AddCompanyForm">Add Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/JoinRequestForm">Join As a Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/Companies">Show Companies</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserList"> User List </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserProfile"> User Profile </Link> &nbsp;
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/CompanyDetails"> Company Details </Link> &nbsp; */}
     <Link className="nav-link text-white d-inline" style={{padding:10}} to="/Category/CategoryList">Category List</Link> &nbsp;
     <Link className="nav-link text-white d-inline" style={{padding:10}} to="/consultation/consultationList">Consultation List</Link> &nbsp;

    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/quotation/QuotationList"> QuotationList </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/appointment/AppointmentList"> Appointment List </Link> &nbsp;
    </div>
    ) : (
      <>
      
    {/*<Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/AddCompanyForm">Add Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/JoinRequestForm">Join As a Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/Companies">Show Companies</Link> &nbsp;*/}
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/SignUpForm"> Sign Up</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/SignInForm"> Sign In</Link> &nbsp;
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/EditProfile"> Edit Profile</Link> &nbsp; */}
    {/*<Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserList"> User List </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserProfile"> User Profile </Link> &nbsp;*/}
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/CompanyDetails"> Company Details </Link> &nbsp; */}
    {/*<Link className="nav-link text-white d-inline" style={{padding:10}} to="/Category/CategoryList">Category List</Link> &nbsp;
     <Link className="nav-link text-white d-inline" style={{padding:10}} to="/consultation/consultationList">Consultation List</Link> &nbsp;
*/}
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/quotation/QuotationList"> QuotationList </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/appointment/AppointmentList"> Appointment List </Link> &nbsp;
    </>
    )}
    <Routes>
    <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/company/AddCompanyForm" element={<AddCompanyForm/>} />
      <Route path="/company/JoinRequestForm" element={<JoinRequestForm/>} />
      <Route path='/company/Companies' element={<Companies/>} />
      <Route path='/Category/CategoryList' element={<CategoryList/>} />
      <Route path='/user/SignUpForm' element={<SignUpForm/>} />
      
      <Route path='/user/SignInForm'  element={isAuth &&userInfo? ( <HomePage />) : (<SignInForm login={loginHandler} /> )} />
      <Route path='/user/UserList' element={isAuth &&userInfo === "Admin"? ( <UserList />) : (<SignInForm login={loginHandler} /> )} />
     
      <Route path='/user/UserProfile' element={<UserProfile/>} />
      <Route path='/company/CompanyDetails' element={<CompanyDetails/>} />
      <Route path="/company/CompanyDetails/:id" element={<CompanyDetails></CompanyDetails>} />
      <Route path='/consultation/consultationList' element={!!currentUser?._id?<ConsultationList user_fullName={currentUser?.user_fullName} ></ConsultationList>:<></>} />
     
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