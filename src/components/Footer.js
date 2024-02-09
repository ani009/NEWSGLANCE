import React from "react";
// import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
      <div className="footer d-flex justify-content-center align-items-center bg-danger">
        <div className="footer-info">
          <p className="p-size increased-font-size" style={{color:"black"}}>
            Created By <span style={{color:"white"}}>Aniket Pal</span> 2024 Ezeebook
          </p>
        </div>
      </div>
  );
};

export default Footer;