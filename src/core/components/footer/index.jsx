
import React from 'react';
import style from "./footer.module.css"
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="container-fluid bg-body-tertiary" style={{height:"100%",width:"100%" }}>
      <div className="row">
        <div className="col-md-6 opacity-75 mt-5">
          <div className="ms-5 ">
            <span className="px-3">Blog</span>
            <span>FAQs</span>
            <span >
            <Link to="/contact " className={style.contact} >
              ContactUs
            </Link>
            </span>
            
          </div>
          <div className="mt-5 me-5 " style={{ position: "relative", left: "10%" }}>
            @2108 All Rights Reserved. This Template made with by
            <span className="text-danger"> @Balaji Groups & Co</span>
          </div>
        </div>
        <div className="col-md-6 opacity-75">
          <div className={`${style.socialMedia} mt-4 mt-md-5`}>
            <h6>Follow Us</h6>
            <a href="https://www.facebook.com/moni.priya.1671" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/poonga_0.00/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
}
