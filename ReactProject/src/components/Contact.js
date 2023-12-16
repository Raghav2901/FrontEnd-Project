import React from 'react'
import "./stylecontact.css";

function Contact() {
  return (

    <div className='container'>

      <div className='row'>

        <div className='col-xl-4'>
          <div className="contact-item-wrapper">

            <div className="col-xl-12 col-md-6">
              <div className='contact-item'>
                <div className='contact-icon'>
                  <i class="lni lni-phone"></i>
                </div>
                <div className='contact-content'>
                  <h4>Contact</h4>
                  <p>0984537278623</p>
                  <p>yourmail@gmail.com</p>

                </div>

              </div>
            </div>

            <div className='col-xl-12 col-md-6'>
              <div className='contact-item'>

                <div className='contact-icon'>
                  <i className="lni lni-map-marker"></i>
                </div>

                <div className='contact-content'>
                  <h4>Address</h4>
                  <p>175 5th Ave, New York, NY 10010</p>
                  <p>United States</p>
                </div>

              </div>
            </div>

            <div className='col-xl-12 col-md-6'>
              <div className='contact-item'>

                <div className='contact-icon'>
                  <i class="lni lni-alarm-clock"></i>
                </div>

                <div className='contact-content'>
                  <h4>Schedule</h4>
                  <p>24 Hours / 7 Days Open</p>
                  <p>Office time: 10 AM - 5:30 PM</p>
                </div>

              </div>

            </div>

          </div>
        </div>



        <div className='col-xl-8'>
          <div class="contact-form-wrapper">
            <div className='row'>
              <div className="col-xl-10">
                <div class="section-title text-center">
                  <span> Get in Touch </span>
                  <h2>
                    Ready to Get Started
                  </h2>
                  <p>
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    quiblanditiis praesentium
                  </p>
                </div>
              </div>

            </div>


            <form action="#" class="contact-form">
              <div class="row">
                <div class="col-md-6">
                  <input type="text" name="name" id="name" placeholder="Name" required="" />
                </div>
                <div class="col-md-6">
                  <input type="email" name="email" id="email" placeholder="Email" required="" />
                </div>
              </div>
              <div class="row">
                <div class="col-md-6">
                  <input type="text" name="phone" id="phone" placeholder="Phone" required="" />
                </div>
                <div class="col-md-6">
                  <input type="text" name="subject" id="email" placeholder="Subject" required="" />
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <textarea name="message" id="message" placeholder="Type Message" rows="5"></textarea>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <div class="button text-center rounded-buttons">
                    <button type="submit" class="btn primary-btn rounded-full">
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div >

        </div>
      </div>

    </div>






  )
}

export default Contact;