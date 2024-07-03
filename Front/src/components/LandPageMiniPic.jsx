import React from "react";
import PropTypes from "prop-types";

const LandPageMiniPic = ({ src, alt }) => {
  return <img src={src} alt={alt} className="w-full h-full object-cover" />;
};

LandPageMiniPic.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default LandPageMiniPic;
