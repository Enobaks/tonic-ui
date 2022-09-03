import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import Logo from "./images/Logo.png";
import Logo_alt from "./images/Logo_alt.png";
import Logo_mobile from "./images/Logo_mobile.png";
import Rectangle_1270 from "./images/Rectangle_1270.png";
import Rectangle_1273 from "./images/Rectangle_1273.png";
import Rectangle_1271 from "./images/Rectangle_1271.png";
import Rectangle_1272 from "./images/Rectangle_1272.png";
import Rectangle_1274 from "./images/Rectangle_1274.png";
import Image from "./images/Image.png";
import Image_1 from "./images/Image_1.png";
import Image_2 from "./images/Image_2.png";
import Last from "./images/last.png";
import Ellipse_9 from "./images/Ellipse_9.png";

const Homepage = () => {
  return (
    <div className="wrap">
      <div className="hero-section">
        {/* <!-- NavBar --> */}
        <nav className="navbar navbar-expand-lg navbar-light container mb-5">
          <div className="container-fluid navbar">
            <Link className="navbar-brand" to="/">
              <img className="img-fluid logo-main" src={Logo} alt="Boldo" />
              <img className="img-fluid res-logo" src={Logo_mobile} alt="" />
            </Link>
            <button
              className="navbar-toggler toggle-btn"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa-solid fa-bars text-white fs-4"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto custom-link">
                <li className="nav-item">
                  <Link
                    className="nav-link text-white fw-bolder"
                    aria-current="page"
                    to="/"
                  >
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bolder" to="/">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white fw-bolder" to="/">
                    Service
                  </Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-light nav-link text-dark px-4 rounded-pill fw-bolder">
                    Log In
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Navbar Ends --> */}

        {/* <!-- Herosection Begins --> */}
        <div className="container">
          <div className="hero-wrap col-md-12 text-white d-flex flex-column align-items-center">
            <p className="text-center">About</p>
            <h6 className="text-center fw-light hero-caption">
              We love to make great things, things that matter.
            </h6>
            <p className="text-center hero-subtext">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Herosection Ends --> */}

      {/* <!-- Picture Grid --> */}
      <div className="pic-grid">
        <div className="container pictures">
          <div className="row">
            <div className="col-md-4 d-flex align-items-center flex-column">
              <img
                className="mb-3 img-fluid custom-img"
                src={Rectangle_1270}
                alt=""
              />
              <img
                className="img-fluid custom-img"
                src={Rectangle_1273}
                alt=""
              />
            </div>
            <div className="col-md-4 d-flex align-items-center flex-column middle">
              <img
                className="img-fluid custom-md"
                src={Rectangle_1271}
                alt=""
              />
            </div>
            <div className="col-md-4 d-flex align-items-center flex-column">
              <img
                className="mb-3 img-fluid custom-img"
                src={Rectangle_1272}
                alt=""
              />
              <img
                className="img-fluid custom-img"
                src={Rectangle_1274}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Pic Grid End --> */}

      {/* <!-- Our Story --> */}
      <div className="container story-section">
        <div className="story-wrap">
          <p className="text-muted">Our Story</p>
          <h4 className="fw-light story-headline">
            Handshake infographic mass market crowdfunding iteration.
          </h4>
          <p className="text-muted story-text">
            Conversion angel investor entrepreneur first mover advantage.
            Handshake infographic mass market crowdfunding iteration. Traction
            stock user experience deployment beta innovator incubator focus.
            Sales user experience branding growth hacking holy grail
            monetization conversion prototype stock network effects. Learning
            curve network effects return on investment bootstrapping
            business-to-consumer.
          </p>
        </div>
      </div>
      {/* <!-- Our Story Ends --> */}

      {/* <!-- Our Numbers --> */}
      <div className="numbers-section text-white pt-5">
        <div className="container d-flex align-items-center flex-column">
          <p className="text-center">Our numbers</p>
          <h4 className="fw-light numbers-headline text-center mb-5">
            Handshake infographic mass market crowdfunding iteration.
          </h4>
          <div className="row mb-5">
            <div className="col-md-4">
              <h3 className="numbers fw-light text-center">120m</h3>
              <p className="text-center">Cool feature title</p>
            </div>
            <div className="col-md-4">
              <h3 className="numbers fw-light text-center">10.000</h3>
              <p className="text-center">Cool feature title</p>
            </div>
            <div className="col-md-4">
              <h3 className="numbers fw-light text-center">240</h3>
              <p className="text-center">Cool feature title</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Numbers End --> */}

      {/* <!-- Our Team --> */}
      <div className="team-wrap">
        <div className="container d-flex align-items-center flex-column">
          <div className="text-container">
            <p className="text-start team text-muted">Our team</p>
            <h4 className="fw-light numbers-headline mb-3">
              The leadership team
            </h4>
            <p className="team-text text-muted mb-5 text-start">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
          </div>
          <div className="row">
            <div className="col-md-4 member">
              <img className="img-fluid mb-3" src={Image} alt="" />
              <p className="text-center text-dark fs-4">Michael Scott</p>
              <p className="text-center text-muted fs-6">General Manager</p>
            </div>
            <div className="col-md-4 member">
              <img className="img-fluid mb-3" src={Image_1} alt="" />
              <p className="text-center text-dark fs-4">Dwight Schrute</p>
              <p className="text-center text-muted fs-6">General Manager</p>
            </div>
            <div className="col-md-4 member">
              <img className="img-fluid mb-3" src={Image_2} alt="" />
              <p className="text-center text-dark fs-4">Pam Beetsley</p>
              <p className="text-center text-muted fs-6">General Manager</p>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Team Ends --> */}

      {/* <!-- Our Values --> */}
      <div className="values-section text-white">
        <div className="container">
          <div className="values-container">
            <p className="text-start team">Our values</p>
            <h4 className="fw-light numbers-headline mb-3">
              Things in we believe
            </h4>
            <p className="team-text mb-5 text-start">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration. Traction
              stock user experience deployment beta innovator incubator focus.
            </p>
            <div className="row mb-5">
              <div className="col-md-2 value-img">
                <img className="img-fluid" src={Rectangle_1273} alt="" />
              </div>
              <div className="col-md-10">
                <p className="title fs-4">We are commited.</p>
                <p className="body">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-md-2 value-img">
                <img className="img-fluid" src={Rectangle_1272} alt="" />
              </div>
              <div className="col-md-10">
                <p className="title fs-4">We are responsible.</p>
                <p className="body">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2 value-img">
                <img className="img-fluid" src={Last} alt="" />
              </div>
              <div className="col-md-10">
                <p className="title fs-4">We aim for progress.</p>
                <p className="body">
                  Conversion angel investor entrepreneur first mover advantage.
                  Handshake infographic mass market crowdfunding iteration.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Our Values End --> */}

      {/* CTA  */}
      <div className="action d-flex align-items-center flex-column justify-content-center mb-5">
        <div className="container text-white rounded position-relative">
          <img
            className="img-fluid ellipse position-absolute end-0"
            src={Ellipse_9}
            alt=""
          />
          <div className="position-relative slick d-flex align-items-center flex-column justify-content-center">
            <h4 className="text-center fw-light fs-1">
              An enterprise template to ramp up your company website
            </h4>
            <div className="input input-group d-flex align-items-center justify-content-center mt-4">
              <input
                className="rounded-pill me-3"
                type="text"
                placeholder="Your email address"
              />
              <button className="btn btn-success nav-link text-dark px-4 rounded-pill fw-bold">
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* CTA Ends  */}

      {/* <!-- Footer --> */}
      <div className="foot-wrap">
        <div className="container">
          <div className="row text-muted d-flex align-items-center justify-content-center">
            <div className="col-md-3 shift">
              <img className="img-fluid mb-4" src={Logo_alt} alt="" />
              <p className="footer-abt">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </p>
            </div>
            <div className="col-md-3 shift">
              <p className="fw-bold text-dark mb-4">Landings</p>
              <p>Home</p>
              <p>Products</p>
              <p>Services</p>
            </div>
            <div className="col-md-3 shift">
              <p className="fw-bold text-dark mb-4">Company</p>
              <p>Home</p>
              <div className="career-wrap d-flex">
                <p className="me-2">Careers</p>
                <span className="text-dark px-2 rounded-pill fw-bold hiring">
                  Hiring!
                </span>
              </div>
              <p>Services</p>
            </div>
            <div className="col-md-3 shift">
              <p className="fw-bold text-dark mb-4">Resources</p>
              <p>Blog</p>
              <p>Products</p>
              <p>Services</p>
            </div>
          </div>
          <div className="col-md-12 text-muted copyright">
            All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
