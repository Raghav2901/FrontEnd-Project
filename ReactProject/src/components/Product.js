import React from 'react'
import "./styleproduct.css";
import Image from '../Images/best-seller image.jpg';

function Product() {
  return (
      <div class="container-fluid bestsellerbox">
        <div class="row">
            <div class="col-sm-5 col-md-5 bestsellerdescript ">
                <h6>BEST-SELLERS</h6>
                <p>Meet the crowd favorites.</p>
                <button>SHOP ALL</button>
            </div>
            <div class="col-sm-7 col-md-7 p-0 bestsellerimg ">
                <img src={Image} alt="bestimg"></img>
            </div>
        </div>
    </div>
       
                
        
          
  )
}

export default Product;