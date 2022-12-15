import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <Link style={{fontSize:"2rem"}} className="navbar-brand" to="/">BabyNama</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link" aria-current="page" to="/">Home</Link>
        <a className="nav-link" href="#">Testimonials</a>
        <a className="nav-link" href="#">About</a>
        <a className="nav-link" href="#">Services</a>
        <a className="nav-link active" href="#">Plans</a>
        <a className="nav-link" href="#">Doctors</a>
        <a className="nav-link" href="#">Babt Tools</a>
        <a className="nav-link" href="#">Blog</a>
        <a className="nav-link" href="#">FAQs</a>
        <a className="nav-link" href="#">Contact</a>
        
      </div>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar