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
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/AddCompanyForm">Add Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/JoinRequestForm">Join As a Company</Link> &nbsp;
    <Link className="nav-link text-white d-inline" style={{padding:10}} to="/company/Companies">Show Companies</Link> &nbsp;
 

    <Routes>
      <Route path="/company/AddCompanyForm" element={<AddCompanyForm/>} />
      <Route path="/company/JoinRequestForm" element={<JoinRequestForm/>} />
      <Route path='/company/Companies' element={<Companies/>} />
    </Routes>
    </>
    
  );
}

export default App;
