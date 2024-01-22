import React from 'react'
import {Link} from 'react-router-dom'

export default function HomePage() {
  return (
    <>
    <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-body-tertiary carBackground">
      
    <div className="col-md-6 p-lg-5 mx-auto my-5">

      <h1 className="display-3 fw-bold title">WeBuild</h1>
      <h3 className="fw-normal text-muted mb-3 titlep">Hit The Road With Perfection</h3>
      <div className="d-flex gap-3 justify-content-center lead fw-normal">
        <Link className="homepage" to="/Category/CategoryList">Categories </Link>
      </div>

    </div>

    </div>  

      
    </>
  )
}
