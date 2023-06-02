import React, { useState, useEffect } from "react";
import "./Home.scss";
import Products from "../component/Products";

const Home = () => {
 
  return (
    <div>
      {/* ********** Hero-section ************* */}
      <div className="hero">
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">
              <div className="hero-sec">
                <div class="card text-bg-dark text-white  border-0 rounded-0">
                  <img src="/assets/hero1.jpg" class="card-img" alt="..." />
                  <div class="card-img-overlay">
                    <div className="container">
                      <h5 class="card-title display-3 ">New Summer Arrivals</h5>
                      <p class="card-text fs-2 lead">
                        Check Out All New Trends
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Products/>
 
    </div>
  );
};

export default Home;
