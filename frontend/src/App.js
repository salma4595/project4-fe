import React from 'react'
import ConsultationList from './components/consultation/consultationList'
import "bootstrap/dist/css/bootstrap.min.css";
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

function App() {
  return (
    <>
    hello
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/AddCompanyForm">Add Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/JoinRequestForm">Join As a Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/Companies">Show Companies</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/SignUpForm"> Sign Up</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/SignInForm"> Sign In</Link> &nbsp;
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/EditProfile"> Edit Profile</Link> &nbsp; */}
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserList"> User List </Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/user/UserProfile"> User Profile </Link> &nbsp;
    {/* <Link className="nav-link text-white d-inline" style={{padding:10}} to="/Category/CategoryList">Category List</Link> &nbsp;
  */}

    <Routes>
    <Route path="/" element={<HomePage></HomePage>} />
      <Route path="/company/AddCompanyForm" element={<AddCompanyForm/>} />
      <Route path="/company/JoinRequestForm" element={<JoinRequestForm/>} />
      <Route path='/company/Companies' element={<Companies/>} />
      <Route path='/Category/CategoryList' element={<CategoryList/>} />
      <Route path='/user/SignUpForm' element={<SignUpForm/>} />
      <Route path='/user/UserList' element={<UserList/>} />
      <Route path='/user/UserProfile' element={<UserProfile/>} />
      {/* <Route path='/user/EditProfile' element={<EditProfile/>} /> */}
      

      
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

















































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
