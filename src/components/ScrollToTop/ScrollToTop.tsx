import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";

const ScrollToTop = (props: any) => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return(
    <></>
  )
};

ScrollToTop.propTypes = {};
export default ScrollToTop;
