import React from 'react'
import "./stylenewnavbar.css";
import { Link } from 'react-router-dom';
import Image from '../Images/bird_2.jpg';


const Newnavbar = () => {
  return (
    <div className="container-fluid">

      <nav className="navbar navbar-expand-lg navbar-light bg-light bgcolor customnavbar mycolor">
        <div class="navbar-header">
          <a class="navbar-brand" href="#"><img src={Image} alt='bird'></img></a>
        </div>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse newdiv " id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">HOME </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">PRODUCT</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/services">SERVICES </Link>
            </li>

            <button><Link className="nav-link" to="/contact">CONTACT</Link></button>  


          </ul>

        </div>
      </nav>

    </div>

 
  )
}

export default Newnavbar;