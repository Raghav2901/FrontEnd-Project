import React from 'react'
import "./stylehome.css";
import Image from '../Images/banner2.jpg';
import Image1 from '../Images/item1.jpeg';
import Image2 from '../Images/item2.jpeg';
import Image3 from '../Images/item3.jpeg';
import Image4 from '../Images/item4.jpeg';

function Home() {
  return (
    <>
    <div className="container-fluid p-0 middlebanner">
        <a className="navbar-brand" href="#"><img src={Image} alt='banner'></img></a>
    </div>

<div class="container-fluid productdescript">
  <div class="row ">
    <div class="col-sm-12 col-md-12">
        <div>
            <h6>WELCOME</h6>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque itaque voluptatibus aspernatur
                debitis commodi vel.</p>
        </div>
    </div>
</div>

<div class="row">


    <div class="col-sm-3 col-md-3 imagebox">
    <a className="navbar-brand" href="#"> <img src={Image1} alt=""></img></a>
        <button>DESIGN ASSETS</button>
    </div>
    <div class="col-sm-3 col-md-3 imagebox">
    <a className="navbar-brand" href="#">   <img src={Image2} alt=""></img></a>
        <button>EMAIL TEMPLATES</button>
    </div>
    <div class="col-sm-3 col-md-3 imagebox">
    <a className="navbar-brand" href="#"> <img src={Image3} alt=""></img></a>
        <button>APPAREL</button>
    </div>
    <div class="col-sm-3 col-md-3 imagebox">
    <a className="navbar-brand" href="#"> <img src={Image4} alt=""></img></a>
        <button>PINTEREST KEYWORDS</button>
    </div>
    <div class="heading">
        <button>SHOP ALL</button>
    </div>
</div>
</div>
</>
  )
}

export default Home;