import React from "react";
import PropTypes from "prop-types";

const Footer = ({ name, contact, email }) => {
  // const{name,contact,email}=props.footerInf;
  return (
    <div className="footer-container">
      <p className="footer-text">Este es un footer</p>
      <p className="footer-text"> Create by : {name}</p>
      <p className="footer-text"> Mi contacto es: {contact}</p>
      <p className="footer-text"> Mi email es: {email}</p>
    </div>
  );
};

export default Footer;

Footer.propTypes = {
  name: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};
