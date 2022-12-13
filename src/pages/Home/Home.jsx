import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "./Hero.png";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero" id="hero">
        <div className="container">
          <div className="row flex-column-reverse flex-md-row justify-content-center align-items-center m-0">
            <div className="col-md-6 ps-0">
              <h1 className="hero-title">
                <span>Explore</span> the most <br />
                ancient <span>creatures</span>
              </h1>
              <p className="hero-text">
                Our fully virtual dinosaurs museum will take your back to a time
                when these fantastic creatures ruled the planet.
              </p>
              <div className="hero-btn-group">
                <Link className="my-btn-primary me-3" to="/world">
                  Explore Now
                </Link>
                <Link className="my-btn-secondary" to="/world">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="pe-0 m-0 col-md-6 text-end">
              <img src={Hero} alt="" className="img-fluid mb-5 mb-md-0" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
