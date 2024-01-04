import React from "react";
import { NavLink } from "react-router-dom";

const Error404 = () => {
  return (
    <>
      <section id="error-page">
        <div className="content">
          <h2 className="header">404</h2>
          <h4>Page Not Found !</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
            natus enim quod quaerat earum velit minus doloribus, possimus
            distinctio expedita minima ullam ab repudiandae deserunt, magni non
            neque nobis dolorum.
          </p>

          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error404;
