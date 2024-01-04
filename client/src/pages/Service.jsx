import React, { useEffect, useState } from "react";
import axios from "axios";

const Service = () => {
  const [service, setService] = useState([]);

  const getServise = async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/v1/sevices/get-service"
      );

      if (res && res.data) {
        console.log(res.data);
        setService(res.data.mes);
      }
    } catch (error) {
      console.log("service " + error);
    }
  };

  useEffect(() => {
    getServise();
  }, []);

  return (
    <>
      <section className="section-services">
        <div className="container">
          <h1 className="main-heading">Services</h1>
        </div>

        {/* modle  */}

        {/* modle  */}
        <div className="container grid grid-three-cols">
          {service.length > 0 ? (
            service.map((currElem, index) => (
              <div className="card" key={index}>
                <div className="card-mg">
                  <img
                    src="/images/design.png"
                    alt=""
                    width="300"
                    height="250"
                  />
                </div>
                <div className="card-details">
                  <div className="grid grid-two-cols">
                    <p>{currElem.provider}</p>
                    <p>{currElem.price}</p>
                  </div>
                  <h2>{currElem.service}</h2>
                  <p>{currElem.description}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No services available</p>
          )}
        </div>
      </section>
    </>
  );
};

export default Service;
