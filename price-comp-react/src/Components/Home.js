import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



  function Home() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      responsive: [
        { breakpoint: 1400, settings: { slidesToShow: 8 } },
        { breakpoint: 1200, settings: { slidesToShow: 6 } },
        { breakpoint: 992, settings: { slidesToShow: 5 } },
        { breakpoint: 768, settings: { slidesToShow: 4 } },
        { breakpoint: 576, settings: { slidesToShow: 3 } },
        { breakpoint: 480, settings: { slidesToShow: 2 } },
        { breakpoint: 320, settings: { slidesToShow: 1 } },
      ]
    };
    return (
      <>
        <div className="container bg-color mt-4 shadow">
          <div className="row">
            <div className="col-6 py-5 px-5">
              <h1 className="heading1">What are you lookin for?</h1>
              <p className="price-para">Compare thousands of Milk and Food products</p>
              <div className="input-group search-bar mx-auto" style={{ maxWidth: '600px' }}>
                <input type="text" className="form-control" placeholder="Search products..." />
                <div className="input-group-append">
                  <button className="search-btn" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                </div>
              </div>
            </div>
            <div className="col-6 py-5">
              <img src="../Images/Putting coins in piggy bank.png" className="piggy-bank" alt="" />
            </div>

          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <span className="border-left">Webshops</span>
            <h4 className="cmp-heading">Who we compare ?</h4>
          </div>
        </div>


        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className='slick-slider mt-5'>
                <Slider {...settings}>
                  <div class="item"><img src="./Images/Group 2.png" alt="" class="group-img" /></div>
                  <div class="item"><img src="./Images/amazon.png" alt="" class="group-img" /></div>
                  <div class="item"><img src="./Images/pravarshaindustries.com.png" alt="" class="group-img" /></div>
                  <div class="item"><img src="./Images/target.com.png" alt="" class="group-img" /></div>
                </Slider>
              </div>
            </div>
          </div>
         <hr className='border mt-5' />
        </div>

        <div className="container">
          <div className="row mt-5">
            <span className="categories-border">Categories</span>
            <h4 className="cmp-heading">Browse By Category</h4>
          </div>
        </div>


        <div className="container">
          <div className="row justify-content-space-between">
            <div className="col-4">
              <div className="food-container">
                <div className="d-flex justify-content-center align-items-center">
                  <img className="category-icon" src="../Images/Vector (1).png" alt="" />
                </div>
                <h5 className="category-heading">Food</h5>
              </div>
            </div>

            <div className="col-4">
              <div className="food-container">
                <div className="d-flex justify-content-center align-items-center">
                  <img className="category-icon" src="../Images/Vector (2).png" alt="" />
                </div>
                <h5 className="category-heading">Beverage</h5>
              </div>
            </div>

            <div class="col-4">
              <div class="food-container">
                <div class="d-flex justify-content-center align-items-center">
                  <img class="category-icon" src="../Images/icon _milk_.png" alt="" />
                </div>
                <h5 class="category-heading">Milk</h5>
              </div>
            </div>
          </div>
          <br />
          <hr className='border mt-5' />
        </div>

        <div class="container">
          <div class="row mt-5">
            <span class="popular-border">Popular</span>
            <h4 class="products-heading">Products</h4>
          </div>
        </div>



        <div class="container">
          <div class="row">
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Target.com</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                        <br />
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-green custom-btn ">$4.02</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Walmart</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-green custom-btn ">$4.28</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Amazon</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-lt-green custom-btn ">$4.48</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Flipkart</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-yellow custom-btn">$4.68</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">countrydelight</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-orange custom-btn ">$5.48</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">bigbasket</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-red custom-btn ">$6.10</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">creamlinedairy.com</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-red custom-btn ">$5.78</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">pravarshaindustries.com</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-red custom-btn ">$6.48</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div className="card mb-3 custom-card" style={{ maxWidth: '540px' }}>
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src="../Images/Rectangle 19.png" class="rounded-start" alt="..." />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">Heritagefoods</h5>
                      <span class="span-heading">Fairlife</span>
                      <p class="card-text">Lactose Free Fat
                        Free Ultra Filtered Milk,
                        52 fl oz
                      </p>
                      <img class="rating-img" src="../Images/Group 22.png" alt="" />
                      <div class="btn-container">
                        <a href="#" class="btn btn-primary btn-red custom-btn ">$6.82</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>

        <div class="container">
          <div class="row mt-5 px-5">
            <div class="border-left-trick">
              Tips & Tricks
            </div>
          </div>
        </div>

        <div class="container">
          <div class="row">
            <div class="col-6 mt-5">
              <div class="mask-box">
                <img class="mask-img" src="../Images/Mask group.png" alt="" />
                <h6 class="mask-heading">Comparison is Key:</h6>
                <p class="mask-para">Always compare prices from different retailers
                  to find the best deals on milk. Online tools
                  make this easy, helping you find the lowest
                  prices in your area.</p>
              </div>
            </div>

            <div class="col-6 row mt-5 px-5">
              <div class="col-12 ">
                <div class="mask-box-2">
                  <div class="description-box">
                    <h6 class="mask-heading-2">Check Expiry Dates:</h6>
                    <p class="mask-para-2">Be mindful of expiry dates when
                      purchasing milk in bulk or on sale.</p>
                  </div>
                </div>
              </div>

              <div class="col-12 mt-4">
                <div class="mask-box-3">
                  <div class="description-box-2">
                    <h6 class="mask-heading-3">Quality Over Quantity:</h6>
                    <p class="mask-para-3">While saving money is important,
                      prioritize quality when purchasing
                      daily products that directly impact
                      health and hygiene.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>




        <footer class="footer mt-5">
          <div class="container">
            <div class="row">
              <div class="col-8 mt-5">
                <h1 class="footer-heading">Our Email Saves your
                  money!</h1>
              </div>
            </div>
          </div>

          <div class="container mt-5">
            <div class="subscription-container "> 
            <div className='email-container' >
              <div class="email-icon">
                <i class="fa-regular fa-envelope"></i>
              </div>
             <div className='flex-container'>
              <input type="email" className='email' aria-label="Email"  />
              </div>
              </div>

              <div class="subscription-box">
                <button type="subs-button" className='subscribe-btn'  >SUBSCRIBE</button>
              </div>
              </div>
            </div>


        </footer>
      </>
    )
  }

export default Home