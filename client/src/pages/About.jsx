import React from "react";
import Analytics from "../components/Analytics";
import { useAuth } from "../store/Auth";

const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="about-section">
          <div className="container grid grid-two-cols">
            <div className="about-content">
              <p>Hi 👋 {user.username}</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <h1>Why Choose Us?</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                possimus temporibus reprehenderit illo itaque suscipit
                architecto .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                possimus temporibus reprehenderit illo itaque suscipit
                architecto .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                possimus temporibus reprehenderit illo itaque suscipit
                architecto .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                possimus temporibus reprehenderit illo itaque suscipit
                architecto .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                possimus temporibus reprehenderit illo itaque suscipit
                architecto .
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
                possimus temporibus reprehenderit illo itaque suscipit
                architecto .
              </p>

              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">Connect now</button>
                </a>
                <a href="/service">
                  <button className="secondary-btn">Lern More</button>
                </a>
              </div>
            </div>
            <div className="about-images">
              <img src="/images/about.png" alt="" height="550" width="550" />
            </div>
          </div>
        </section>
      </main>
      <Analytics />
    </>
  );
};

export default About;
