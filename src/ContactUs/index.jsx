import React from 'react';
import "./ContactUs.css"
export default function ContactUs() {
  return (
    <div className="container mt-5 text-center">
      <h3>Fashion-Cube Help Center | 24x7 Customer Care Support</h3>
      <div className="contact-details my-4">
        <h5>Head Office</h5>
        <p>Chennai 600006</p>
        <p>Tamilnadu</p>
        <p>Phone: +91-123-456-7890</p>
        <p>Email: support@fashion-cube.com</p>
      </div>
      <div className="map-container m-3">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.4467326516175!2d78.4744443146173!3d10.80389219230817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baacfa8f2d9a7b9%3A0xa9d5f1c5a72f9f2b!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1631700406074!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Fashion-Cube Head Office"
        ></iframe>
      </div>
      <h6>All Rights Reserved by <span className="text-danger">@Balaji Groups & Co</span></h6>
      <br />
      <br />
      <br />
    </div>
  );
}

