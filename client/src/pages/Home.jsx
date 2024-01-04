import React from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import Analytics from "../components/Analytics";

const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <Fade left>
              <div className="hero-content">
                <p>We are the world best It company</p>
                <h1>welcome to our web application</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Reprehenderit expedita porro illum quod placeat dolore
                  consequatur aspernatur quidem cumque sapiente, hic unde!
                  Nostrum id ipsa alias quo sed nam aspernatur!
                </p>
                <div className="btn btn-group">
                  <a href="/contact">
                    <button className="btn">Connect now</button>
                  </a>
                  <a href="/service">
                    <button className="secondary-btn">connect now</button>
                  </a>
                </div>
              </div>
            </Fade>

            <Fade right>
              <div className="hero-image">
                <img src="/images/home.png" alt="" width="400" height="400" />
              </div>
            </Fade>
          </div>
        </section>
      </main>

      <Analytics />

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <Flip top>
            <div className="hero-image">
              <img src="/images/design.png" alt="" width="400" height="400" />
            </div>
          </Flip>
          <Fade right>
            <div className="hero-content">
              <p>Lorem ipsum dolor sit amet</p>
              <h1>welcome to our web application</h1>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit expedita porro illum quod placeat dolore
                consequatur aspernatur quidem cumque sapiente, hic unde! Nostrum
                id ipsa alias quo sed nam aspernatur!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/service">
                  <button className="secondary-btn">connect now</button>
                </a>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
};

export default Home;
