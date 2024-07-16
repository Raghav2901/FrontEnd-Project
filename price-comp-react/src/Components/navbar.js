import React from 'react'



function navbar() {
  return (

    <div className="container">
      <nav className="navbar custom-navbar">
        <a className="navbar-brand">LOGO</a>
        <form className="d-flex">
          <button className="btn ">Contact</button>
          <img className="line-img" src="./Images/Line 1.png" alt="" />
          <button className="btn ">Register</button>
          <button className="login-btn ">Login</button>
        </form>
      </nav>
    </div>

  )
}

export default navbar;