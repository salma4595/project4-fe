import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  return (
    <>
      <header className="bg-dark text-white text-center py-2">
        <div className="container">
          <nav className="navbar navbar-expand-lg px-0">
            <Link className="navbar-brand" to="/">
              <h1 className="display-4 mb-0 text-white">WeBuild</h1>
            </Link>
            <div className="navbar-collapse justify-content-end">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/contact">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/login">
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>

      <div className='mainContent'>
        <div className='imageHere'>
          <div className='overlay'>
            <div className="position-relative overflow-hidden p-3 p-md-5 text-center carBackground">
              <div className="col-md-6 p-lg-5 mx-auto my-5 mb-3">
                <h2 className="display-3 fw-bold title mb-2">Crafting Your Dream Spaces, Seamlessly</h2>
                <p className="lead text-black fw-bold mb-5 titlep" style={{marginTop:'22px'}}>Explore our categories and find what you need.</p>
                <div className="d-flex justify-content-center">
                  <Link className="homepage btn btn-dark btn-lg" to="/Category/CategoryList">
                    Explore Categories
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="text-center py-3 bg-dark text-white">
        <div className="footerContainer">
          <p>&copy; 2024 WeBuild. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
