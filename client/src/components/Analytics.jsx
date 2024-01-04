import React from "react";
import Flip from "react-reveal/Flip";

const Analytics = () => {
  return (
    <>
      {" "}
      <section className="section-analytics">
        <div className="grid-four-cols grid container">
          <Flip>
            <div className="div1">
              <h2>50+</h2>
              <p>Registered Companies</p>
            </div>
            <div className="div1">
              <h2>100,00+</h2>
              <p>Happy Clients </p>
            </div>
            <div className="div1">
              <h2>500+</h2>
              <p>Well Known Developer</p>
            </div>
            <div className="div1">
              <h2>24/7</h2>
              <p>Available</p>
            </div>
          </Flip>
        </div>
      </section>
    </>
  );
};

export default Analytics;
