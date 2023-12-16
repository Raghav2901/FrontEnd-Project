import React from 'react'
import "./styleabout.css";
import Image from '../Images/about-1.png';
import Image2 from '../Images/about-left-shape.svg';
import Image3 from '../Images/left-dots.svg';
function About() {
  return (

    
    <div className='container'>
      <div className='row align-items-center'>
        <div className='col-xl-6 col-lg-6'>

          <div className='about-img'>
            <img className='item1' src={Image} alt='img1'></img>
            <img className='item2 shape' src={Image2} alt='img2'></img>
            <img className='item3' src={Image3} alt='img3'></img>
          </div>

        </div>
        <div className='col-xl-6 col-lg-6 content-box'>
          <div className='about content'>
            <h2 className='heading'>Perfect Solution Thriving Online Business</h2>
            <p className='para'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
              dinonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua. At vero eos et accusam et
              justo duo dolores et ea rebum. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem.Lorem ipsum dolor sit amet.
            </p>

          </div>

          <div className='button'>

          <a href="#" className="main-btn btn-hover border-btn wow fadeInUp"> 
                Discover More</a>

           </div>


        </div>


      </div>
    </div>
  )
}

export default About;