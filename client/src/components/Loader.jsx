import React, { useEffect } from "react";
import "./loder.css";
const Loader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [setLoading]);

  return <div className="loader"></div>;
};

export default Loader;
