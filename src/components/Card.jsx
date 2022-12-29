import React from "react";
import PropTypes from "prop-types";

const Card = ({ name, description, accion, img }) => {
  return (
    <div className="card-container">
      <div className="a-box">
        <div className="img-container">
          <div className="img-inner">
            <div className="inner-skew">
              <img src={img} alt="img" />
            </div>
          </div>
        </div>
        <div className="text-container">
          <h3>{name}</h3>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
Card.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  accion: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
};
Card.defaultProps = {
  name: "vaquita",
  img: "https://i.pinimg.com/736x/07/9b/c0/079bc0ed7b98b47a16e900a10b5c76f3.jpg",
};
